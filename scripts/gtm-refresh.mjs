import fs from 'fs';
import path from 'path';
import os from 'os';

const GTM_BASE = 'https://mcp.gtmeditor.com';

async function main() {
  const tokenFile = path.join(process.cwd(), '.gtm-tokens.json');
  if (!fs.existsSync(tokenFile)) {
    console.error('File .gtm-tokens.json tidak ditemukan. Silakan jalankan npm run gtm:login terlebih dahulu.');
    process.exit(1);
  }

  const tokens = JSON.parse(fs.readFileSync(tokenFile, 'utf8'));
  console.log('Memperbarui token GTM...');

  const res = await fetch(`${GTM_BASE}/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'refresh_token',
      refresh_token: tokens.refresh_token,
      client_id: tokens.client_id,
    }).toString(),
  });

  if (!res.ok) {
    console.error('Gagal memperbarui token:', res.status, await res.text());
    process.exit(1);
  }

  const data = await res.json();
  const accessToken = data.access_token;
  const refreshToken = data.refresh_token || tokens.refresh_token;

  tokens.access_token = accessToken;
  tokens.refresh_token = refreshToken;
  tokens.updated_at = new Date().toISOString();
  fs.writeFileSync(tokenFile, JSON.stringify(tokens, null, 2), 'utf8');

  const configsToUpdate = [
    path.join(process.cwd(), 'mcp_config.json'),
    path.join(process.cwd(), '.cursor', 'mcp.json'),
    path.join(os.homedir(), '.gemini', 'config', 'mcp_config.json'),
  ];

  for (const cfgPath of configsToUpdate) {
    if (fs.existsSync(cfgPath)) {
      const cfg = JSON.parse(fs.readFileSync(cfgPath, 'utf8'));
      if (cfg.mcpServers?.gtm) {
        cfg.mcpServers.gtm.headers = { Authorization: `Bearer ${accessToken}` };
        fs.writeFileSync(cfgPath, JSON.stringify(cfg, null, 2), 'utf8');
        console.log(`Updated: ${cfgPath}`);
      }
    }
  }

  console.log('Token GTM berhasil diperbarui!');
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
