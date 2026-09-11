# DOKUMENTASI LENGKAP EVENT TAG & GOOGLE TAG MANAGER
**Homepage CV Amanah Drive Palembang**  
*GTM Container ID: `GTM-P92C4W7Z`*

---

## 1. Ringkasan Pemasangan Kode Dasar GTM
Kode Google Tag Manager telah ditanamkan langsung pada arsitektur Next.js di file [`app/layout.tsx`](file:///c:/Users/Zyrex/Music/amanahdrive-homepage/app/layout.tsx):

1. **Bagian `<head>`:**
   ```html
   <!-- Google Tag Manager -->
   <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
   new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
   j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
   'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
   })(window,document,'script','dataLayer','GTM-P92C4W7Z');</script>
   <!-- End Google Tag Manager -->
   ```

2. **Bagian `<body>` (paling atas):**
   ```html
   <!-- Google Tag Manager (noscript) -->
   <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P92C4W7Z"
   height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
   <!-- End Google Tag Manager (noscript) -->
   ```

3. **Modul Pengirim Event DataLayer:**
   File helper terpusat berada di [`lib/gtm.ts`](file:///c:/Users/Zyrex/Music/amanahdrive-homepage/lib/gtm.ts) untuk memastikan seluruh event dikirim secara konsisten ke `window.dataLayer`.

---

## 2. Daftar Lengkap Event Tag yang Terpasang

Pemisahan fungsi event conversion:
- **`generate_lead` (GA4) / `Lead` (Meta Ads)**: **KHUSUS untuk Form Submit pendaftaran kursus online**.
- **`contact` (GA4 & Meta Ads)**: **Dikhususkan untuk semua tombol/tautan yang mengarah ke WhatsApp**.

| Nama Event DataLayer | Trigger / Lokasi Interaksi | Deskripsi & Tujuan |
| :--- | :--- | :--- |
| **`generate_lead`** | **Submit formulir pendaftaran booking kursus di homepage** | **Event Lead Utama**: Terpicu saat calon siswa mengisi dan mengirim form pendaftaran resmi. Membawa data paket, estimasi biaya, pilihan mobil, dan slot waktu. |
| **`submit_application`** | **Submit formulir pendaftaran booking kursus** | Event pendamping GA4 untuk pelacakan aplikasi/formulir reservasi. |
| **`contact`** | **Semua tombol & tautan yang mengarah ke WhatsApp** | **Event Contact**: Terpicu saat pengunjung mengklik tombol chat konsultasi WA di seluruh bagian homepage (Hero, Navbar, Pricing, Fleet, Slot, Location, FAQ, Footer, Floating WA). |
| **`contact_phone`** | Klik nomor telepon / hotline seluler | Melacak calon siswa yang memilih telepon langsung daripada chat. |
| **`calculate_cost`** | Pengisian formulir simulasi paket di Booking Calculator | Melacak siswa yang menghitung estimasi biaya kursus & DP. |
| **`select_schedule_slot`**| Klik salah satu dari 6 kartu slot jam latihan | Melacak preferensi waktu latihan siswa (pagi, sore, malam). |
| **`filter_packages`** | Klik tab filter kategori paket kursus | Melacak minat kategori: Semua, Paket + SIM, atau Kursus Saja. |
| **`view_location`** | Klik tautan "Buka di Google Maps" | Melacak intensi siswa mengunjungi rute / lokasi kantor operasional. |
| **`faq_expand`** | Klik judul accordion FAQ | Melacak materi / pertanyaan apa yang paling banyak dicari siswa. |
| **`cta_click`** | Klik tombol utama pada Hero section | Melacak navigasi scroll cepat dari banner paling atas ke section jadwal/kalkulator. |

---

## 3. Rincian Sumber Titik Interaksi (`lead_source`) Tombol WhatsApp (Event `contact`)

Semua tombol WhatsApp di bawah ini mengirimkan event **`contact`** (bukan Lead), dibedakan berdasarkan parameter `lead_source`:

1. **`navbar_desktop`**: Tombol "Chat Kak Lia" pada header / navbar layar komputer.
2. **`navbar_mobile_button`**: Ikon tombol hijau WhatsApp pada header tampilan HP.
3. **`navbar_mobile_menu`**: Tautan "WhatsApp Resmi" di dalam drawer menu hamburger HP.
4. **`pricing_card`**: Tombol "Daftar via WhatsApp" pada setiap kartu paket kursus (membawa data nama paket, harga, dan sesi).
5. **`pricing_custom_banner`**: Tautan "Konsultasi Gratis via WA" di bawah daftar harga untuk kebutuhan privat / mobil sendiri.
6. **`booking_calculator`**: Tombol "Kirim Rencana Kursus ke Kak Lia" pada kalkulator reservasi (membawa data nama siswa, paket, mobil, slot waktu, dan estimasi DP).
7. **`slot_schedule`**: Tombol "Kunci Slot [Pagi/Sore/Malam] via WhatsApp" pada section jadwal latihan.
8. **`fleet_section`**: Tombol "Pilih Unit" pada setiap kartu armada mobil latihan (Ayla, Avanza, Xenia, Ertiga).
9. **`location_section`**: Tombol "Konsultasi Penjemputan via WhatsApp" di section lokasi kantor & jangkauan antar-jemput.
10. **`faq_helpdesk`**: Tombol "Tanya Kak Lia via WhatsApp" di banner bantuan FAQ.
11. **`floating_whatsapp_popup`**: Tombol "Chat Langsung di WhatsApp" di dalam popup dialog Kak Lia yang melayang.
12. **`floating_whatsapp_button`**: Tombol avatar melayang Kak Lia di pojok kanan bawah layar.
13. **`footer_student_care`**: Tautan "Hubungi Kak Lia" di bagian footer bawah website.

---

## 4. Struktur Data (DataLayer Payload Schema)

### A. Contoh Payload saat Tombol WhatsApp Diklik (Event `contact`):
```javascript
// Dikhususkan untuk tombol WA & interaksi chat (Meta Contact Event)
window.dataLayer.push({
  event: "contact",
  event_name: "contact",
  event_id: "ev_1789150503_abc123",
  contact_method: "whatsapp",
  lead_source: "pricing_card",
  button_text: "Daftar via WhatsApp",
  package_name: "Paket Pro + SIM A",
  package_price: 2350000,
  vehicle_type: "Daihatsu Ayla",
  selected_slot: "Slot 4 (15:30 - 17:00)",
  target_phone: "+628137790961",
  currency: "IDR",
  value: 2350000
});
```

### B. Contoh Payload saat Formulir Booking Dikirim (Event `generate_lead`):
```javascript
// KHUSUS untuk submission formulir pendaftaran kursus resmi (Meta Lead Event)
window.dataLayer.push({
  event: "generate_lead",
  event_name: "generate_lead",
  event_id: "ev_1789150503_xyz789",
  lead_source: "registration_form",
  lead_type: "online_form",
  package_name: "Paket Pro + SIM A",
  value: 2350000,
  currency: "IDR",
  vehicle: "Toyota Avanza (Manual)",
  slot_time: "15:30 - 17:00 WIB"
});

window.dataLayer.push({
  event: "submit_application",
  event_name: "submit_application",
  event_id: "ev_1789150503_xyz789",
  lead_source: "registration_form",
  package_name: "Paket Pro + SIM A",
  value: 2350000,
  currency: "IDR"
});
```

---

## 5. Konfigurasi GTM yang Telah Aktif & Terbit (LIVE)

Tag Manager container **`GTM-P92C4W7Z`** telah dikonfigurasikan secara otomatis dengan versi **`v1.0.0 - Meta Ads & Event Tracking Setup`** (Live Version 2) di dalam folder **`Meta Pixel`**:

### A. Tags Terpasang:
| Tag Name | Type | Firing Trigger | Keterangan |
| :--- | :--- | :--- | :--- |
| **`Meta - Base Pixel`** | Custom HTML | `All Pages` | Inisialisasi Meta Pixel ID `2242382719666891` & event `PageView`. |
| **`Meta - Contact Event`** | Custom HTML | `CE - contact` | Firing event standard `Contact` Meta Ads saat tombol WA diklik. |
| **`Meta - Lead Event`** | Custom HTML | `CE - generate_lead` | Firing event standard `Lead` Meta Ads KHUSUS saat formulir pendaftaran dikirim. |
| **`Meta - Maps Click Event`** | Custom HTML | `CE - view_location`<br>`Click - Google Maps` | Firing event custom `MapsClick` dan standard `FindLocation` saat link Maps diklik. |
| **`Meta - Behavioral Event`** | Custom HTML | `All Pages` | Melacak engagement perilaku pengunjung secara otomatis:<br>• **Time on Page**: 15s, 30s, 60s (`TimeOnPage_15s`, `TimeOnPage_30s`, `TimeOnPage_60s`)<br>• **Scroll Depth**: 50% & 90% (`ScrollDepth_50`, `ScrollDepth_90`)<br>• **Maps Interaction**: Deteksi klik rute lokasi<br>• **Engaged User**: `EngagedUser` (aktif >30s atau scroll >50%). |

### B. Triggers Terpasang:
| Trigger Name | Type | Event / Filter |
| :--- | :--- | :--- |
| **`All Pages`** | Page View | Semua halaman |
| **`CE - generate_lead`** | Custom Event | `{{_event}} equals generate_lead` (Triggered by Form Booking) |
| **`CE - contact`** | Custom Event | `{{_event}} equals contact` (Triggered by WhatsApp Clicks) |
| **`CE - view_location`** | Custom Event | `{{_event}} equals view_location` |
| **`Click - Google Maps`** | Link Click | `{{Click URL}} contains google.com/maps` |

### C. Variables Terpasang:
| Variable Name | Type | Nilai / Return |
| :--- | :--- | :--- |
| **`CONST - Meta Pixel ID`** | Constant | `2242382719666891` |
| **`DLV - lead_source`** | Data Layer Variable | `lead_source` (Version 2) |
| **`DLV - value`** | Data Layer Variable | `value` (Version 2) |
| **Built-in Variables** | System | `Click URL`, `Click Text`, `Click Classes`, `Click ID`, `Scroll Depth Threshold`, `Scroll Depth Units`, `Scroll Direction`, `Page URL`, `Referrer` |

---

## 6. Meta Conversions API (CAPI) & Deduplikasi Otomatis

Website ini kini mengadopsi integrasi **Dual Tracking (Browser Pixel + Server CAPI)** berstandar enterprise dari Meta.

### Arsitektur Alur CAPI:
1. Saat pengunjung melakukan aksi:
   * Website menghasilkan **`event_id`** unik (misal: `ev_1789150503_abc123`).
   * **Jalur Browser (Pixel via GTM)**: Mengirimkan event ke Meta Pixel dengan parameter `{ eventID: event_id }`.
   * **Jalur Server (Next.js `/api/capi`)**: Mengirimkan payload ke `https://graph.facebook.com/v21.0/2242382719666891/events` dengan `event_id` yang sama, beserta Client IP, User Agent, Cookies `_fbp`/`_fbc`, dan user phone/first name bila tersedia.
2. **Deduplikasi Meta**: Meta Ads Manager menerima kedua sinyal, mencocokkan `event_name` dan `event_id`, lalu menggabungkannya menjadi 1 konversi berkualitas tinggi (*Event Match Quality Score 8-10/10*).
3. **Anti-AdBlock**: Jika pengunjung menggunakan AdBlocker atau Safari iOS yang memblokir script Pixel di browser, event tetap 100% tercatat melalui jalur Server CAPI.

### Pemisahan Event yang Terhubung ke Meta CAPI:
| Event Meta | Trigger Interaksi | Parameter Custom Data | Catatan Khusus |
| :--- | :--- | :--- | :--- |
| **`Lead`** | **Submit formulir pendaftaran booking kursus** | `content_name`, `value`, `currency: IDR`, `lead_source`, `phone`, `first_name` | **HANYA untuk form submit** |
| **`Contact`** | **Semua klik tombol WhatsApp / konsultasi / telpon** | `content_name`, `lead_source`, `currency: IDR`, `phone` | **Untuk semua link WhatsApp** |
| **`FindLocation`** | Klik "Buka di Google Maps" / tautan lokasi | `content_name: 'Amanah Drive Palembang'` | Menandai minat lokasi offline |
| **`SubmitApplication`**| Submit formulir pendaftaran booking kursus | `content_name: 'Form Pendaftaran Kursus'`, `value` | Event pendamping aplikasi |

---

## 7. Cara Verifikasi & Testing (Debug Mode)

1. **Tag Assistant GTM:**
   - Di Google Tag Manager (`https://tagmanager.google.com/#/container/accounts/6376396243/containers/263890439/workspaces/3`), klik tombol **Preview** di pojok kanan atas.
   - Masukkan URL website Anda: `https://amanahdrive.my.id` (atau `http://localhost:3000` saat pengetesan lokal).
   - Klik salah satu tombol WhatsApp atau Maps di halaman.
   - Di tab Tag Assistant, verifikasi bahwa tags `Meta - Contact Event`, `Meta - Lead Event`, dan `Meta - Maps Click Event` berstatus **Fired** dengan variabel `{{DLV - event_id}}`.

2. **Meta Pixel Helper (Chrome Extension):**
   - Pasang ekstensi Chrome [Meta Pixel Helper](https://chromewebstore.google.com/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc).
   - Buka website Anda. Ikon ekstensi akan berubah menjadi hijau dan menampilkan Pixel ID `2242382719666891`.
   - Cek event `PageView` saat halaman dimuat.
   - Cek event `Lead` dan `Contact` saat tombol WhatsApp diklik.

3. **Events Manager di Meta Ads (Facebook Business Manager):**
   - Buka **Meta Events Manager** &rarr; Pilih Pixel ID `2242382719666891` &rarr; Tab **Test Events**.
   - Di kolom sumber data, Anda akan melihat event masuk dengan label **Browser and Server** (artinya deduplikasi Pixel + CAPI aktif).


