import { NextRequest, NextResponse } from 'next/server';
import pg from 'pg';

let pool: pg.Pool | null = null;

function getPool(): pg.Pool | null {
  if (!process.env.DATABASE_URL) return null;
  if (!pool) {
    pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
      connectionTimeoutMillis: 3000,
    });
  }
  return pool;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // 1. Anti-spam Honeypot: jika input bot terisi, balas sukses palsu
    if (body.company_website || body.honeypot) {
      return NextResponse.json({ success: true, message: 'Formulir berhasil diterima.' });
    }

    const {
      nama,
      whatsapp,
      paket_id,
      paket_nama,
      kendaraan_id,
      kendaraan_nama,
      slot_waktu_id,
      slot_waktu_nama,
      antar_jemput = false,
      alamat_jemput = '',
      catatan = '',
      meta_event_id,
    } = body;

    if (!nama || !whatsapp) {
      return NextResponse.json(
        { error: 'Nama lengkap dan nomor WhatsApp wajib diisi.' },
        { status: 400 }
      );
    }

    // Normalisasi no WhatsApp
    const cleanPhone = whatsapp.replace(/\D/g, '');
    if (cleanPhone.length < 9) {
      return NextResponse.json(
        { error: 'Format nomor WhatsApp tidak valid.' },
        { status: 400 }
      );
    }

    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || '127.0.0.1';
    const userAgent = request.headers.get('user-agent') || '';

    const p = getPool();
    let leadId = 'lead_' + Date.now();

    if (p) {
      const insertRes = await p.query(
        `
        INSERT INTO public.homepage_leads (
          nama, whatsapp, paket_id, paket_nama, kendaraan_id, kendaraan_nama,
          slot_waktu_id, slot_waktu_nama, antar_jemput, alamat_jemput, catatan,
          status, source, ip_address, user_agent, meta_event_id
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, 'baru', 'homepage_form', $12, $13, $14)
        RETURNING id
      `,
        [
          nama.trim(),
          cleanPhone,
          paket_id || null,
          paket_nama || 'Belum Ditentukan',
          kendaraan_id || null,
          kendaraan_nama || 'Belum Ditentukan',
          slot_waktu_id || null,
          slot_waktu_nama || 'Belum Ditentukan',
          Boolean(antar_jemput),
          alamat_jemput || null,
          catatan || null,
          clientIp,
          userAgent,
          meta_event_id || null,
        ]
      );

      if (insertRes.rows && insertRes.rows[0]) {
        leadId = insertRes.rows[0].id;
      }

      // Catat event ke homepage_events untuk analitik
      await p.query(
        `
        INSERT INTO public.homepage_events (event_type, event_source, event_id, metadata)
        VALUES ('form_submit', 'homepage_registration_form', $1, $2)
      `,
        [
          meta_event_id || leadId,
          JSON.stringify({
            nama: nama.trim(),
            paket: paket_nama,
            antar_jemput: Boolean(antar_jemput),
          }),
        ]
      );
    }

    // Buat URL pesan WhatsApp Kak Lia otomatis
    const waText = [
      `Halo Kak Lia, saya baru saja mendaftar via formulir website Amanah Drive:`,
      `• *Nama:* ${nama.trim()}`,
      `• *WhatsApp:* ${cleanPhone}`,
      `• *Paket Dipilih:* ${paket_nama || 'Konsultasi Paket'}`,
      `• *Mobil:* ${kendaraan_nama || 'Konsultasi Armada'}`,
      `• *Jadwal Latihan:* ${slot_waktu_nama || 'Jadwal Fleksibel'}`,
      antar_jemput ? `• *Layanan Antar-Jemput:* Ya (${alamat_jemput})` : `• *Layanan Antar-Jemput:* Tidak`,
      catatan ? `• *Catatan Belajar:* ${catatan}` : '',
      `Mohon info ketersediaan jadwal dan konfirmasi pendaftarannya ya Kak. Terima kasih!`,
    ]
      .filter(Boolean)
      .join('\n');

    const targetPhone = '628137790961';
    const waUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encodeURIComponent(
      waText
    )}`;

    return NextResponse.json({
      success: true,
      lead_id: leadId,
      whatsapp_url: waUrl,
      message: 'Pendaftaran berhasil dikirim! Silakan lanjutkan chat WhatsApp untuk konfirmasi instan.',
    });
  } catch (err: any) {
    console.error('[Booking Submit Error]', err);
    return NextResponse.json(
      { error: 'Terjadi kesalahan sistem saat menyimpan formulir. Silakan hubungi kami via WhatsApp.' },
      { status: 500 }
    );
  }
}
