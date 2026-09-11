import pg from 'pg';
import {
  PACKAGES as DEFAULT_PACKAGES,
  FLEET as DEFAULT_FLEET,
  TIME_SLOTS as DEFAULT_SLOTS,
  CONTACT_INFO as DEFAULT_CONTACT,
  STUDENT_CARE as DEFAULT_STUDENT_CARE,
  LOCATION_INFO as DEFAULT_LOCATION,
  PackageItem,
} from './constants';

let pool: pg.Pool | null = null;

function getPool(): pg.Pool | null {
  if (!process.env.DATABASE_URL) return null;
  if (!pool) {
    pool = new pg.Pool({
      connectionString: process.env.DATABASE_URL,
      max: 5,
      connectionTimeoutMillis: 3000,
      idleTimeoutMillis: 10000,
    });
  }
  return pool;
}

/**
 * Fetch public active packages from database, merged with presentation metadata.
 * Strips any private/sensitive fields.
 */
export async function getPublicPackages(): Promise<PackageItem[]> {
  const p = getPool();
  if (!p) return DEFAULT_PACKAGES;

  try {
    const res = await p.query(`
      SELECT id, nama_paket, jumlah_sesi, termasuk_sim, harga_normal, harga_promo, jenis_mobil
      FROM public.paket
      WHERE aktif = true AND is_custom = false
      ORDER BY harga_normal ASC
    `);

    if (!res.rows || res.rows.length === 0) return DEFAULT_PACKAGES;

    return res.rows.map((row) => {
      // Cari default template berdasarkan nama atau jumlah sesi untuk deskripsi & fitur
      const match = DEFAULT_PACKAGES.find(
        (def) =>
          def.sessions === row.jumlah_sesi && def.hasSim === row.termasuk_sim
      ) || DEFAULT_PACKAGES.find(
        (def) => def.name.toLowerCase().includes(row.nama_paket.toLowerCase())
      );

      return {
        id: row.id,
        name: row.nama_paket,
        sessions: row.jumlah_sesi,
        price: row.harga_promo || row.harga_normal,
        normalPrice: row.harga_promo ? row.harga_normal : (match?.normalPrice || row.harga_normal),
        hasSim: row.termasuk_sim,
        tag: match?.tag || (row.termasuk_sim ? 'Resmi + SIM A' : 'Kursus Cepat'),
        popular: match?.popular || false,
        desc: match?.desc || `Paket kursus intensif ${row.jumlah_sesi} sesi bersama instruktur profesional.`,
        features: match?.features || [
          `${row.jumlah_sesi} Sesi Latihan Intensif (@90 menit)`,
          'Armada Nyaman Ber-AC Dingin & Terawat',
          'Didampingi Instruktur Sabar & Bersertifikasi',
          row.termasuk_sim ? 'Termasuk Pengurusan SIM A Resmi' : 'Fokus Penguasaan Mengemudi Lengkap',
          'Sertifikat Kelulusan Resmi Amanah Drive',
        ],
        recommendedFor: match?.recommendedFor || 'Calon pengemudi yang ingin cepat mahir mengemudi.',
      };
    });
  } catch (err) {
    console.warn('[Public Data] Fallback ke default packages:', (err as Error).message);
    return DEFAULT_PACKAGES;
  }
}

/**
 * Fetch public active fleet from database.
 * Never exposes plate numbers, logs, or costs.
 */
export async function getPublicFleet() {
  const p = getPool();
  if (!p) return DEFAULT_FLEET;

  try {
    const res = await p.query(`
      SELECT id, nama_kendaraan, tipe_transmisi, warna, foto_url
      FROM public.kendaraan
      WHERE aktif = true
      ORDER BY nama_kendaraan ASC
    `);

    if (!res.rows || res.rows.length === 0) return DEFAULT_FLEET;

    return res.rows.map((row) => {
      const match = DEFAULT_FLEET.find((f) =>
        f.name.toLowerCase().includes(row.nama_kendaraan.toLowerCase())
      );

      return {
        id: row.id,
        name: row.nama_kendaraan,
        type: (row.tipe_transmisi || 'manual').toUpperCase(),
        tag: 'Unit Latihan Resmi',
        desc: match?.desc || `Unit ${row.nama_kendaraan} transmisi ${row.tipe_transmisi}, bersih dan terawat.`,
        features: match?.features || [
          'Air Conditioner (AC) Dingin & Wangi',
          'Kondisi Mesin Prima & Servis Berkala',
          'Dimensi Kompak & Mudah Dimanuver',
        ],
      };
    });
  } catch (err) {
    console.warn('[Public Data] Fallback ke default fleet:', (err as Error).message);
    return DEFAULT_FLEET;
  }
}

/**
 * Fetch public active schedule slots from database.
 */
export async function getPublicScheduleSlots() {
  const p = getPool();
  if (!p) return DEFAULT_SLOTS;

  try {
    const res = await p.query(`
      SELECT id, nama_slot, jam_mulai, jam_selesai, kategori, urutan
      FROM public.slot_waktu
      WHERE aktif = true
      ORDER BY urutan ASC
    `);

    if (!res.rows || res.rows.length === 0) return DEFAULT_SLOTS;

    return res.rows.map((row) => {
      const formatTime = (t: string) => t.slice(0, 5);
      const match = DEFAULT_SLOTS.find((s) => s.id === row.urutan);

      return {
        id: row.id,
        slot: row.urutan,
        time: `${formatTime(row.jam_mulai)} - ${formatTime(row.jam_selesai)} WIB`,
        label: match?.label || (row.kategori === 'malam' ? 'Latihan Malam' : 'Sesi Reguler'),
        desc: match?.desc || (row.kategori === 'malam' ? 'Kuasai feeling lampu jalan & visibilitas malam.' : 'Waktu ideal untuk latihan rute jalan raya.'),
        badge: match?.badge || (row.kategori === 'malam' ? 'Night Session' : 'Reguler'),
      };
    });
  } catch (err) {
    console.warn('[Public Data] Fallback ke default slots:', (err as Error).message);
    return DEFAULT_SLOTS;
  }
}

/**
 * Fetch public contact & map settings from database.
 */
export async function getPublicSettings() {
  const p = getPool();
  if (!p) {
    return {
      contact: DEFAULT_CONTACT,
      care: DEFAULT_STUDENT_CARE,
      location: DEFAULT_LOCATION,
    };
  }

  try {
    const res = await p.query(`
      SELECT key, value
      FROM public.homepage_settings
      WHERE key IN ('contact_info', 'maps_info')
    `);

    let contact = { ...DEFAULT_CONTACT };
    let care = { ...DEFAULT_STUDENT_CARE };
    let location = { ...DEFAULT_LOCATION };

    for (const row of res.rows) {
      if (row.key === 'contact_info' && row.value) {
        if (row.value.phone) contact.phoneRaw = row.value.phone;
        if (row.value.display_phone) {
          contact.phoneDisplay = row.value.display_phone;
          care.phoneDisplay = row.value.display_phone;
        }
        if (row.value.name) care.name = row.value.name;
        if (row.value.role) care.role = row.value.role;
        if (row.value.avatar_url) care.avatar = row.value.avatar_url;
      }
      if (row.key === 'maps_info' && row.value) {
        if (row.value.address) location.address = row.value.address;
        if (row.value.embed_url) location.embedUrl = row.value.embed_url;
      }
    }

    return { contact, care, location };
  } catch (err) {
    console.warn('[Public Data] Fallback ke default settings:', (err as Error).message);
    return {
      contact: DEFAULT_CONTACT,
      care: DEFAULT_STUDENT_CARE,
      location: DEFAULT_LOCATION,
    };
  }
}
