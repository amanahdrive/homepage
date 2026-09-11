import http from 'http';
import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import { exec } from 'child_process';
import os from 'os';

const PORT = 8976;
const REDIRECT_URI = `http://127.0.0.1:${PORT}/callback`;
const GTM_BASE = 'https://mcp.gtmeditor.com';

function openUrl(url) {
  const start = process.platform === 'darwin' ? 'open' : process.platform === 'win32' ? 'start ""' : 'xdg-open';
  exec(`${start} "${url}"`);
}

async function registerClient() {
  console.log('\n[1/4] Mendaftarkan client ke GTM MCP server...');
  const res = await fetch(`${GTM_BASE}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_name: 'Antigravity GTM Client',
      redirect_uris: [REDIRECT_URI],
      grant_types: ['authorization_code', 'refresh_token'],
      response_types: ['code'],
      token_endpoint_auth_method: 'none',
    }),
  });
  if (!res.ok) {
    throw new Error(`Gagal mendaftar client: ${res.status} ${await res.text()}`);
  }
  const reg = await res.json();
  console.log('      Client ID didapatkan:', reg.client_id);
  return reg.client_id;
}

async function updateConfigs(accessToken, refreshToken, clientId) {
  const projectRoot = process.cwd();
  const configsToUpdate = [
    path.join(projectRoot, 'mcp_config.json'),
    path.join(projectRoot, '.cursor', 'mcp.json'),
    path.join(os.homedir(), '.gemini', 'config', 'mcp_config.json'),
  ];

  for (const cfgPath of configsToUpdate) {
    try {
      if (fs.existsSync(cfgPath)) {
        const data = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
        if (!data.mcpServers) data.mcpServers = {};
        data.mcpServers.gtm = {
          serverUrl: GTM_BASE,
          httpUrl: GTM_BASE,
          url: GTM_BASE,
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        };
        fs.writeFileSync(cfgPath, JSON.stringify(data, null, 2), 'utf8');
        console.log(`      Updated: ${cfgPath}`);
      }
    } catch (err) {
      console.warn(`      Gagal update ${cfgPath}:`, err.message);
    }
  }

  // Simpan token ke file lokal untuk refresh nanti
  const tokenFile = path.join(projectRoot, '.gtm-tokens.json');
  fs.writeFileSync(
    tokenFile,
    JSON.stringify(
      {
        access_token: accessToken,
        refresh_token: refreshToken,
        client_id: clientId,
        updated_at: new Date().toISOString(),
      },
      null,
      2
    ),
    'utf8'
  );
  console.log(`      Token disimpan ke: ${tokenFile}`);
}

async function verifyToken(accessToken) {
  console.log('\n[4/4] Memverifikasi koneksi ke Google Tag Manager...');
  
  const initRes = await fetch(GTM_BASE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json, text/event-stream',
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({
      jsonrpc: '2.0',
      id: 1,
      method: 'initialize',
      params: {
        protocolVersion: '2024-11-05',
        capabilities: {},
        clientInfo: { name: 'Antigravity', version: '1.0.0' },
      },
    }),
  });

  if (!initRes.ok) {
    console.error('      Initialize failed:', initRes.status, await initRes.text());
    return;
  }
  const text = await initRes.text();
  console.log('      MCP Server terhubung & merespons successfully!');
}

async function main() {
  const clientId = await registerClient();

  const verifier = crypto.randomBytes(32).toString('base64url');
  const challenge = crypto.createHash('sha256').update(verifier).digest('base64url');
  const state = crypto.randomBytes(16).toString('hex');

  const authUrl = `${GTM_BASE}/authorize?` + new URLSearchParams({
    response_type: 'code',
    client_id: clientId,
    redirect_uri: REDIRECT_URI,
    code_challenge: challenge,
    code_challenge_method: 'S256',
    state: state,
  });

  console.log('\n[2/4] Menjalankan server lokal di port', PORT, '...');
  const server = http.createServer(async (req, res) => {
    const reqUrl = new URL(req.url, `http://127.0.0.1:${PORT}`);
    if (reqUrl.pathname === '/callback') {
      const code = reqUrl.searchParams.get('code');
      const error = reqUrl.searchParams.get('error');

      if (error) {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(`<h1>Login Gagal: ${error}</h1>`);
        console.error('Login error:', error);
        server.close();
        process.exit(1);
        return;
      }

      if (!code) {
        res.writeHead(400, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end('<h1>Kode otorisasi tidak ditemukan.</h1>');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end(`
        <!DOCTYPE html>
        <html>
        <head>
          <title>Login GTM Berhasil</title>
          <style>
            body { font-family: -apple-system, sans-serif; display: flex; justify-content: center; align-items: center; height: 100vh; margin: 0; background: #0f172a; color: #f8fafc; }
            .card { background: #1e293b; padding: 2.5rem; border-radius: 1rem; text-align: center; max-width: 480px; box-shadow: 0 10px 25px rgba(0,0,0,0.5); border: 1px solid #334155; }
            h1 { color: #38bdf8; margin-bottom: 1rem; }
            p { color: #94a3b8; line-height: 1.6; }
            .badge { display: inline-block; background: #0284c7; color: white; padding: 0.4rem 1rem; border-radius: 9999px; font-weight: bold; margin-top: 1rem; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>Login Berhasil!</h1>
            <p>Otentikasi Google Tag Manager telah berhasil diterima oleh Antigravity.</p>
            <div class="badge">Silakan tutup tab ini dan kembali ke chat</div>
          </div>
        </body>
        </html>
      `);

      console.log('\n[3/4] Menukar kode dengan Access Token...');
      try {
        const tokenRes = await fetch(`${GTM_BASE}/token`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: new URLSearchParams({
            grant_type: 'authorization_code',
            code,
            code_verifier: verifier,
            client_id: clientId,
            redirect_uri: REDIRECT_URI,
          }).toString(),
        });

        if (!tokenRes.ok) {
          throw new Error(`Exchange token error: ${tokenRes.status} ${await tokenRes.text()}`);
        }

        const tokenData = await tokenRes.json();
        console.log('      Access Token berhasil didapatkan!');
        
        await updateConfigs(tokenData.access_token, tokenData.refresh_token, clientId);
        await verifyToken(tokenData.access_token);

        console.log('\nSELESAI: GTM MCP Server siap digunakan!');
      } catch (err) {
        console.error('      Terjadi kesalahan saat memproses token:', err);
      } finally {
        server.close();
        process.exit(0);
      }
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
  });

  server.listen(PORT, '127.0.0.1', () => {
    console.log(`      Server mendengarkan di ${REDIRECT_URI}`);
    console.log('\n>>> MEMBUKA BROWSER UNTUK LOGIN GOOGLE...');
    console.log(`      Jika browser tidak terbuka otomatis, buka link berikut:\n      ${authUrl}\n`);
    openUrl(authUrl);
  });

  // Timeout setelah 10 menit
  setTimeout(() => {
    console.log('\nTimeout login 10 menit habis. Jalankan kembali script jika ingin login.');
    server.close();
    process.exit(0);
  }, 600000);
}

main().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
