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

Setiap kali pengunjung mengklik tombol WhatsApp atau tombol penting lainnya di homepage, website akan secara otomatis mendorong (*push*) data ke `dataLayer`.

| Nama Event DataLayer | Trigger / Lokasi Interaksi | Deskripsi & Tujuan |
| :--- | :--- | :--- |
| **`generate_lead`** | **Semua tombol WhatsApp di seluruh halaman** | Event konversi utama untuk Google Analytics 4 (GA4) dan Google Ads. |
| **`contact`** | **Otomatis terkirim bersamaan dengan `generate_lead`** | Dikhususkan untuk **Meta Ads (Facebook Pixel)** sebagai standard event `Contact` atau `Lead`. |
| **`contact_phone`** | Klik nomor telepon / hotline seluler | Melacak calon siswa yang memilih telepon langsung daripada chat. |
| **`calculate_cost`** | Pengisian formulir simulasi paket di Booking Calculator | Melacak siswa yang menghitung estimasi biaya kursus & DP. |
| **`select_schedule_slot`**| Klik salah satu dari 6 kartu slot jam latihan | Melacak preferensi waktu latihan siswa (pagi, sore, malam). |
| **`filter_packages`** | Klik tab filter kategori paket kursus | Melacak minat kategori: Semua, Paket + SIM, atau Kursus Saja. |
| **`view_location`** | Klik tautan "Buka di Google Maps" | Melacak intensi siswa mengunjungi rute / lokasi kantor operasional. |
| **`faq_expand`** | Klik judul accordion FAQ | Melacak materi / pertanyaan apa yang paling banyak dicari siswa. |
| **`cta_click`** | Klik tombol utama pada Hero section | Melacak navigasi scroll cepat dari banner paling atas ke section jadwal/kalkulator. |

---

## 3. Rincian Sumber Titik Interaksi (`lead_source`) Tombol WhatsApp

Semua tombol WhatsApp di bawah ini mengirimkan event **`generate_lead`** dan **`contact`**, dibedakan berdasarkan parameter `lead_source`:

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

### Contoh Payload saat Tombol WhatsApp Diklik:
```javascript
window.dataLayer.push({
  event: "generate_lead",
  event_name: "generate_lead",
  lead_type: "whatsapp",
  lead_source: "pricing_card",
  button_text: "Daftar via WhatsApp",
  package_id: "pro-sim",
  package_name: "Paket Pro + SIM A",
  package_price: 2350000,
  sessions: 10,
  has_sim: true,
  target_phone: "+628137790961",
  currency: "IDR",
  value: 2350000
});

// Bersamaan dengan event contact untuk Meta Ads:
window.dataLayer.push({
  event: "contact",
  event_name: "contact",
  contact_method: "whatsapp",
  lead_source: "pricing_card",
  button_text: "Daftar via WhatsApp",
  value: 2350000,
  currency: "IDR"
});
```

---

## 5. Panduan Penerapan di Google Tag Manager (Langkah demi Langkah)

### Langkah A: Buat Variabel DataLayer (Data Layer Variables)
Buka Google Tag Manager (`GTM-P92C4W7Z`) &rarr; Menu **Variables** &rarr; Bagian **User-Defined Variables** &rarr; Klik **New**:

1. **Variabel Sumber Lead:**
   - Name: `dlv - lead_source`
   - Variable Type: **Data Layer Variable**
   - Data Layer Variable Name: `lead_source`
   - Data Layer Version: Version 2

2. **Variabel Nama Paket:**
   - Name: `dlv - package_name`
   - Variable Type: **Data Layer Variable**
   - Data Layer Variable Name: `package_name`

3. **Variabel Nilai / Value (Harga):**
   - Name: `dlv - value`
   - Variable Type: **Data Layer Variable**
   - Data Layer Variable Name: `value`

4. **Variabel Mata Uang (Currency):**
   - Name: `dlv - currency`
   - Variable Type: **Data Layer Variable**
   - Data Layer Variable Name: `currency`

---

### Langkah B: Buat Trigger di GTM

Buka menu **Triggers** &rarr; Klik **New**:

1. **Trigger WhatsApp Lead:**
   - Trigger Name: `Custom Event - generate_lead`
   - Trigger Type: **Custom Event**
   - Event name: `generate_lead`
   - This trigger fires on: **All Custom Events**

2. **Trigger Meta Contact:**
   - Trigger Name: `Custom Event - contact`
   - Trigger Type: **Custom Event**
   - Event name: `contact`
   - This trigger fires on: **All Custom Events**

3. **Trigger Booking Calculator:**
   - Trigger Name: `Custom Event - calculate_cost`
   - Trigger Type: **Custom Event**
   - Event name: `calculate_cost`

---

### Langkah C: Buat Tag untuk Google Analytics 4 (GA4)

Buka menu **Tags** &rarr; Klik **New**:

1. **Konfigurasi Tag:**
   - Tag Name: `GA4 Event - Generate Lead (WhatsApp)`
   - Tag Type: **Google Analytics: GA4 Event**
   - Measurement ID: Masukkan ID GA4 Anda (misal `G-XXXXXXXXXX`)
   - Event Name: `generate_lead`
   - **Event Parameters**:
     | Parameter Name | Value |
     | :--- | :--- |
     | `lead_source` | `{{dlv - lead_source}}` |
     | `package_name` | `{{dlv - package_name}}` |
     | `value` | `{{dlv - value}}` |
     | `currency` | `{{dlv - currency}}` |
2. **Triggering:**
   - Pilih trigger: `Custom Event - generate_lead`
3. Klik **Save**.

---

### Langkah D: Buat Tag untuk Meta Ads (Facebook Pixel)

Jika Anda menggunakan template resmi Meta Pixel di GTM (Facebook Pixel by Facebook Archive):

#### 1. Tag Event `Lead` (Meta Ads)
- Tag Name: `Meta Pixel - Lead`
- Tag Type: **Facebook Pixel**
- Facebook Pixel ID: Masukkan ID Pixel Meta Anda
- Standard Event: **Lead**
- Object Properties:
  - `content_name`: `{{dlv - package_name}}`
  - `content_category`: `{{dlv - lead_source}}`
  - `value`: `{{dlv - value}}`
  - `currency`: `{{dlv - currency}}`
- Triggering: Pilih `Custom Event - generate_lead`

#### 2. Tag Event `Contact` (Meta Ads)
- Tag Name: `Meta Pixel - Contact`
- Tag Type: **Facebook Pixel**
- Standard Event: **Contact**
- Object Properties:
  - `content_category`: `{{dlv - lead_source}}`
- Triggering: Pilih `Custom Event - contact`

---

## 6. Cara Verifikasi & Testing (Debug Mode)

1. **Tag Assistant GTM:**
   - Di Google Tag Manager, klik tombol **Preview** di pojok kanan atas.
   - Masukkan URL website Anda: `https://amanahdrive.my.id` (atau `http://localhost:3000` jika sedang diuji lokal).
   - Klik salah satu tombol WhatsApp di halaman (misalnya tombol di kartu paket atau floating button).
   - Di tab Tag Assistant, verifikasi bahwa event `generate_lead` dan `contact` muncul di bar sebelah kiri dan Tag GA4 / Meta Pixel Anda berstatus **Fired**.

2. **Meta Pixel Helper (Chrome Extension):**
   - Pasang ekstensi Chrome *Meta Pixel Helper*.
   - Saat mengklik tombol WA, periksa ikon ekstensi berubah menjadi hijau dan event `Lead` / `Contact` tercatat lengkap beserta parameternya.

3. **Google Analytics 4 DebugView:**
   - Buka Google Analytics &rarr; Menu Admin &rarr; **DebugView**.
   - Klik tombol WA di website, maka event `generate_lead` akan langsung muncul secara real-time.
