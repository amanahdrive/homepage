import { NextRequest, NextResponse } from 'next/server';
import crypto from 'crypto';

function hashSha256(value?: string | null): string | null {
  if (!value) return null;
  const clean = value.trim().toLowerCase();
  return crypto.createHash('sha256').update(clean).digest('hex');
}

function normalizePhone(phone?: string | null): string | null {
  if (!phone) return null;
  // Hapus semua karakter non-digit
  let digits = phone.replace(/\D/g, '');
  // Ubah awalan 08xx jadi 628xx
  if (digits.startsWith('08')) {
    digits = '62' + digits.slice(1);
  } else if (!digits.startsWith('62') && digits.startsWith('8')) {
    digits = '62' + digits;
  }
  return hashSha256(digits);
}

export async function POST(request: NextRequest) {
  try {
    const pixelId = process.env.NEXT_PUBLIC_META_PIXEL_ID || '2242382719666891';
    const accessToken = process.env.META_CAPI_ACCESS_TOKEN;

    if (!accessToken) {
      console.warn('[Meta CAPI] META_CAPI_ACCESS_TOKEN tidak ditemukan di environment variables.');
      return NextResponse.json({ error: 'Missing Meta CAPI access token' }, { status: 500 });
    }

    const body = await request.json();
    const {
      event_name,
      event_id,
      event_source_url,
      custom_data = {},
      user_data = {},
      test_event_code,
    } = body;

    if (!event_name) {
      return NextResponse.json({ error: 'event_name wajib diisi' }, { status: 400 });
    }

    // Ambil client IP address dari proxy headers
    const forwardedFor = request.headers.get('x-forwarded-for');
    const realIp = request.headers.get('x-real-ip');
    const clientIp = forwardedFor ? forwardedFor.split(',')[0].trim() : realIp || '127.0.0.1';

    // Ambil user agent
    const userAgent = request.headers.get('user-agent') || '';

    // Ambil cookies _fbp dan _fbc
    const fbp = request.cookies.get('_fbp')?.value;
    const fbc = request.cookies.get('_fbc')?.value;

    const eventTime = Math.floor(Date.now() / 1000);
    const sourceUrl = event_source_url || request.headers.get('referer') || 'https://amanahdrive.my.id';

    const payloadUserData: Record<string, any> = {
      client_ip_address: clientIp,
      client_user_agent: userAgent,
    };

    if (fbp) payloadUserData.fbp = fbp;
    if (fbc) payloadUserData.fbc = fbc;

    if (user_data.phone) {
      const hashedPhone = normalizePhone(user_data.phone);
      if (hashedPhone) payloadUserData.ph = [hashedPhone];
    }

    if (user_data.email) {
      const hashedEmail = hashSha256(user_data.email);
      if (hashedEmail) payloadUserData.em = [hashedEmail];
    }

    if (user_data.first_name) {
      const hashedFn = hashSha256(user_data.first_name);
      if (hashedFn) payloadUserData.fn = [hashedFn];
    }

    const eventPayload: Record<string, any> = {
      event_name,
      event_time: eventTime,
      event_source_url: sourceUrl,
      action_source: 'website',
      user_data: payloadUserData,
      custom_data: {
        currency: custom_data.currency || 'IDR',
        value: custom_data.value !== undefined ? Number(custom_data.value) : 0,
        ...custom_data,
      },
    };

    if (event_id) {
      eventPayload.event_id = String(event_id);
    }

    const capiBody: Record<string, any> = {
      data: [eventPayload],
    };

    if (test_event_code) {
      capiBody.test_event_code = test_event_code;
    }

    const metaRes = await fetch(
      `https://graph.facebook.com/v21.0/${pixelId}/events?access_token=${accessToken}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(capiBody),
      }
    );

    const metaData = await metaRes.json();

    if (!metaRes.ok) {
      console.error('[Meta CAPI Error]', metaData);
      return NextResponse.json({ success: false, error: metaData }, { status: metaRes.status });
    }

    return NextResponse.json({
      success: true,
      events_received: metaData.events_received || 1,
      event_id,
      event_name,
    });
  } catch (err: any) {
    console.error('[Meta CAPI Server Error]', err);
    return NextResponse.json({ error: err.message || 'Internal error' }, { status: 500 });
  }
}
