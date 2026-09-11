export interface PackageItem {
  id: string;
  name: string;
  sessions: number;
  price: number;
  normalPrice?: number;
  hasSim: boolean;
  tag?: string;
  popular?: boolean;
  desc: string;
  features: string[];
  recommendedFor: string;
}

export const PACKAGES: PackageItem[] = [
  {
    id: "refresh",
    name: "Refresh / Pelancaran",
    sessions: 3,
    price: 600000,
    normalPrice: 750000,
    hasSim: false,
    tag: "Hemat & Cepat",
    desc: "Cocok untuk yang sudah pernah bisa stir tapi butuh memperlancar kembali feeling jalan raya, tanjakan, atau parkir.",
    features: [
      "3 Sesi Latihan Intensif (@90 menit)",
      "Pilihan Mobil: Ayla / Xenia / Mobil Pribadi",
      "Fokus Parkir Paralel & Tanjakan Curam",
      "Melancarkan Mental di Jalan Raya Padat",
      "Didampingi Instruktur Sabar & Bersertifikat",
      "Sertifikat Kelulusan Amanah Drive",
    ],
    recommendedFor: "Pernah bisa stir tapi lama tidak mengemudi & butuh pelancaran.",
  },
  {
    id: "basic",
    name: "Paket Basic",
    sessions: 5,
    price: 850000,
    normalPrice: 1000000,
    hasSim: false,
    tag: "Paling Hemat",
    desc: "Fondasi terbaik bagi pemula dari nol. Memahami instrumen mobil, kontrol gas-rem-kopling, dan manuver dasar.",
    features: [
      "5 Sesi Latihan Bertahap (@90 menit)",
      "Pengenalan Cockpit & Pedal Rem/Kopling",
      "Teknik Start-Stop Halus & Haluan Jalan",
      "Latihan Parkir Standar & Tanjakan Dasar",
      "Armada Dual Pedal Safety (Rem Ganda)",
      "Layanan Antar-Jemput Area Tertentu",
      "Sertifikat Kelulusan Resmi",
    ],
    recommendedFor: "Pemula yang ingin menguasai dasar mobil dengan cepat dan aman.",
  },
  {
    id: "basic-sim",
    name: "Paket Basic + SIM A",
    sessions: 5,
    price: 1800000,
    normalPrice: 2000000,
    hasSim: true,
    tag: "Siap Jalan & Legal",
    desc: "Kombinasi latihan dasar 5 sesi sekaligus dibimbing dan didampingi proses pembuatan SIM A resmi sampai terbit.",
    features: [
      "Semua Fasilitas Paket Basic (5 Sesi @90 menit)",
      "Pengurusan SIM A Resmi Sampai Selesai",
      "Bimbingan & Simulasi Ujian Teori / Praktik SIM",
      "Armada Dual Pedal Safety Rem Ganda",
      "Jadwal Fleksibel (Pagi s/d Malam)",
      "Sertifikat Kelulusan Resmi",
    ],
    recommendedFor: "Pemula yang butuh mahir dasar sekaligus punya SIM A resmi.",
  },
  {
    id: "pro",
    name: "Paket Pro (10 Sesi)",
    sessions: 10,
    price: 1700000,
    normalPrice: 2000000,
    hasSim: false,
    popular: true,
    tag: "Paling Populer ⭐",
    desc: "Kurikulum paling komprehensif. Dari nol mutlak hingga mahir total di jalan sempit, flyover, mall, parkir paralel sempit, dan malam hari.",
    features: [
      "10 Sesi Latihan Menyeluruh (@90 menit)",
      "Kuasai Tanjakan Curam, Macet & Setengah Kopling",
      "Semua Tipe Parkir: Seri, Diagonal & Paralel Antar Mobil",
      "Simulasi Jalan Protokol Sudirman & Flyover Palembang",
      "Sesi Khusus Menyetir Malam Hari & Hujan",
      "Garansi Bimbingan Sampai Percaya Diri",
      "Gratis Antar-Jemput Area Jangkauan",
      "Sertifikat Kompetensi Resmi Terverifikasi",
    ],
    recommendedFor: "Calon pengemudi dari nol yang ingin langsung percaya diri jalan kemana saja!",
  },
  {
    id: "pro-sim",
    name: "Paket Pro + SIM A",
    sessions: 10,
    price: 2350000,
    normalPrice: 2700000,
    hasSim: true,
    tag: "All-in-One Terbaik 👑",
    desc: "Paket pamungkas terbaik! 10 sesi komplit dari nol sampai jago luar-dalam PLUS pengurusan SIM A tuntas tanpa ribet.",
    features: [
      "Seluruh Fasilitas Paket Pro (10 Sesi Lengkap)",
      "Pengurusan SIM A Resmi Tuntas Didampingi",
      "Simulasi Lengkap Ujian Praktek SIM",
      "Penguasaan Rute Tersulit di Kota Palembang",
      "Armada Dual Pedal Safety & AC Dingin",
      "Bebas Pilih Instruktur & Request Rute",
      "Sertifikat Kelulusan & Nilai Evaluasi",
    ],
    recommendedFor: "Pilihan terbaik & paling hemat bagi yang ingin beres tuntas tanpa repot.",
  },
  {
    id: "custom",
    name: "Paket Khusus / Privat",
    sessions: 0,
    price: 0,
    hasSim: false,
    tag: "Kustom Sesuai Kebutuhan",
    desc: "Bisa request jumlah sesi khusus, atau menggunakan mobil pribadi Anda sendiri (Manual / Matic) agar langsung terbiasa.",
    features: [
      "Bisa Menggunakan Mobil Sendiri (Manual / Matic)",
      "Bisa Request Rute Spesifik (Rumah - Kantor/Kampus)",
      "Jumlah Sesi Fleksibel Menyesuaikan Kebutuhan",
      "Instruktur Senior Berpengalaman",
      "Konsultasi Kebutuhan Gratis via WhatsApp",
    ],
    recommendedFor: "Pemilik mobil baru yang ingin adaptasi mobil sendiri dengan aman.",
  },
];

export const TIME_SLOTS = [
  { id: 1, label: "Slot 1", time: "09:00 - 10:30 WIB", desc: "Pagi Segar", badge: "Reguler" },
  { id: 2, label: "Slot 2", time: "11:00 - 12:30 WIB", desc: "Siang Awal", badge: "Reguler" },
  { id: 3, label: "Slot 3", time: "13:30 - 15:00 WIB", desc: "Siang Tenang", badge: "Reguler" },
  { id: 4, label: "Slot 4", time: "15:30 - 17:00 WIB", desc: "Sore Favorit", badge: "Paling Diminati" },
  { id: 5, label: "Slot 5", time: "18:30 - 20:00 WIB", desc: "Malam Tenang", badge: "Malam (Cocok Pekerja)" },
  { id: 6, label: "Slot 6", time: "20:30 - 22:00 WIB", desc: "Malam Lanjutan", badge: "Malam Santai" },
];

export const INSTRUCTORS = [
  {
    name: "Kak Syawal",
    role: "Senior Instructor",
    exp: "5+ Tahun Pengalaman",
    speciality: "Spesialis Siswa Pemula, Sangat Ramah & Sabar Tanpa Menekan",
    quote: "Kunci mengemudi itu tenang. Grogi itu wajar, tugas saya mendampingi sampai kamu merasa stir itu bagian dari tubuhmu.",
    avatar: "/assets/logo-amdri-symbol.png",
  },
  {
    name: "Kak Risky",
    role: "Precision & Parking Specialist",
    exp: "4+ Tahun Pengalaman",
    speciality: "Ahli Trik Parkir Paralel Sempit, Mall & Tanjakan Ekstrem",
    quote: "Parkir dan tanjakan itu soal rumus dan feeling. Sekali paham ritmenya, kamu nggak akan pernah panik lagi.",
    avatar: "/assets/logo-amdri-symbol.png",
  },
  {
    name: "Kak Alpi",
    role: "Highway & Traffic Specialist",
    exp: "4+ Tahun Pengalaman",
    speciality: "Spesialis Jalan Protokol Padat, Putar Balik & Kecepatan Responsif",
    quote: "Palembang lalu lintasnya dinamis. Saya ajarkan cara membaca gerak kendaraan lain agar selalu selamat.",
    avatar: "/assets/logo-amdri-symbol.png",
  },
  {
    name: "Kak Alfi",
    role: "Technical & Clutch Control Specialist",
    exp: "3+ Tahun Pengalaman",
    speciality: "Spesialis Haluan Sempit, Gang Perumahan & Setengah Kopling",
    quote: "Jangan takut mati mesin. Bersama kami, kamu akan paham titik gigit kopling sampai mengemudi terasa seringan nafas.",
    avatar: "/assets/logo-amdri-symbol.png",
  },
];

export const FLEET = [
  {
    name: "Daihatsu Ayla",
    type: "Manual Transmission",
    plate: "BG 1156 IN",
    color: "Silver Metallic",
    features: ["Dual Pedal Safety (Rem Ganda)", "AC Dingin Nyaman", "Power Steering Ringan", "Dimensi Compact & Lincah"],
    desc: "Mobil latihan paling favorit untuk pemula! Ringan dikendalikan, visibilitas luas, dan sangat mudah untuk latihan manuver awal serta parkir.",
  },
  {
    name: "Daihatsu Xenia",
    type: "Manual Transmission",
    plate: "BG 1524 RD",
    color: "Black Solid",
    features: ["Dual Pedal Safety (Rem Ganda)", "Kabin Lega & Tenaga Responsif", "AC Double Blower", "Latihan Dimensi MPV"],
    desc: "Cocok untuk melatih kepekaan mobil berdimensi lebih panjang. Mempersiapkan Anda agar langsung siap membawa mobil keluarga keluarga.",
  },
  {
    name: "Mobil Pribadi Anda",
    type: "Manual / Matic",
    plate: "Sesuai Mobil Anda",
    color: "Custom",
    features: ["Didampingi di Mobil Sendiri", "Langsung Terbiasa dengan Karakter Kendaraan Anda", "Bisa Matic / Manual", "Penyesuaian Garasi Rumah"],
    desc: "Sudah punya mobil di garasi tapi belum berani bawa ke jalan raya? Instruktur kami siap mendampingi langsung di mobil pribadi Anda!",
  },
];

export const CURRICULUM = [
  {
    session: "Sesi 1",
    title: "Pengenalan Cockpit & Feeling Pedal",
    topics: ["Posisi duduk ergonomis & titik buta (blind spot)", "Pengaturan 3 spion", "Pengenalan pedal gas, rem, dan kopling", "Start mesin & maju-mundur lurus di area aman"],
  },
  {
    session: "Sesi 2",
    title: "Manuver Dasar, Zig-Zag & Haluan Stir",
    topics: ["Teknik memutar setir (push-pull & hand-over-hand)", "Manuver zig-zag antar tiang/rintangan", "Kontrol akselerasi & deselerasi halus", "Pengereman darurat aman"],
  },
  {
    session: "Sesi 3",
    title: "Perpindahan Gigi & U-Turn (Putar Balik)",
    topics: ["Perpindahan gigi 1, 2, 3 secara mulus", "Pengereman bertahap (engine brake)", "Haluan belok sudut siku (L-Turn)", "Teknik putar balik jalan (U-Turn) yang rapi"],
  },
  {
    session: "Sesi 4",
    title: "Tanjakan, Turunan & Setengah Kopling",
    topics: ["Teknik stop-and-go di tanjakan menggunakan rem tangan", "Teknik setengah kopling tanpa mundur 1 cm pun", "Pengereman di turunan curam", "Simulasi macet di jalan menanjak"],
  },
  {
    session: "Sesi 5",
    title: "Master Parkir Seri & Diagonal",
    topics: ["Rumus parkir tegak lurus (90 derajat) maju & mundur", "Teknik parkir diagonal sudut 45 derajat", "Pemanfaatan spion kiri-kanan sebagai patokan", "Koreksi stir saat parkir miring"],
  },
  {
    session: "Sesi 6",
    title: "Master Parkir Paralel Antar Mobil",
    topics: ["Rumus 3 langkah parkir paralel di antara 2 kendaraan", "Patokan pilar mobil dan spion lawan", "Mengatur jarak aman bumper depan & belakang", "Keluar dari slot parkir sempit tanpa senggolan"],
  },
  {
    session: "Sesi 7-8",
    title: "Simulasi Jalan Raya Protokol Palembang",
    topics: ["Masuk ke jalan raya padat (Sudirman / Demang / Basuki Rahmat)", "Etika berpindah lajur & menyalip aman", "Menghadapi persimpangan lampu merah padat & bundaran", "Membaca perilaku kendaraan bermotor lain"],
  },
  {
    session: "Sesi 9-10",
    title: "Jalur Sempit, Flyover & Menyetir Malam Hari",
    topics: ["Navigasi gang sempit & papasan dengan mobil lain", "Teknik melewati tanjakan jembatan layang (Flyover)", "Adaptasi pencahayaan lampu & visibilitas malam hari", "Simulasi ujian praktik SIM & evaluasi mandiri"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Rina Oktavia, S.E.",
    status: "Pegawai BUMN Palembang",
    pkg: "Paket Pro (10 Sesi)",
    rating: 5,
    text: "Dulu sempat trauma karena pernah disenggol motor saat belajar sendiri sama saudara. Di Amanah Drive, Kak Syawal sabar banget, gak pernah nada tinggi sedikitpun! Sekarang saya sudah berani bawa mobil sendiri ke kantor di Sudirman tanpa cemas.",
  },
  {
    name: "M. Farhan Pratama",
    status: "Mahasiswa Universitas Sriwijaya",
    pkg: "Paket Pro + SIM A",
    rating: 5,
    text: "Paling mantap karena jadwalnya fleksibel banget! Saya ambil slot malam jam 18.30 setelah selesai kuliah. Mobilnya dingin, rem ganda bikin tenang, dan SIM A langsung beres dibimbing tuntas. Sangat recommended buat anak muda Palembang!",
  },
  {
    name: "Hj. Ratna Juwita",
    status: "Ibu Rumah Tangga (Bukit Lama)",
    pkg: "Paket Basic + SIM A",
    rating: 5,
    text: "Awalnya ragu di umur 45 tahun masih bisa belajar mobil atau nggak. Ternyata metode Kak Risky gampang banget dipahami! Parkir mall yang tadinya horor sekarang jadi santai. Terima kasih banyak Amanah Drive!",
  },
  {
    name: "dr. Dimas Anggara",
    status: "Dokter Residen RSMH Palembang",
    pkg: "Paket Refresh (3 Sesi)",
    rating: 5,
    text: "Sudah punya SIM tapi mobil nganggur di garasi 2 tahun karena takut macet Palembang. Ambil 3 sesi refresh, langsung dipraktekkan rute rumah sakit dan tanjakan flyover. Instrukturnya profesional & beretika tinggi.",
  },
];

export const FAQS = [
  {
    q: "Apakah yang belum pernah menyentuh setir sama sekali bisa ikut?",
    a: "Sangat bisa! Lebih dari 80% siswa kami adalah pemula mutlak yang belum pernah menginjak pedal sama sekali. Metode kami dirancang bertahap dari pemahaman dasar hingga mahir, dengan pendampingan yang sabar dan tanpa emosi.",
  },
  {
    q: "Bagaimana jika terjadi senggolan atau kecelakaan saat latihan?",
    a: "Keamanan Anda adalah prioritas nomor 1 kami. Seluruh armada Amanah Drive dilengkapi pedal rem & kopling ganda di sisi instruktur (Dual Pedal Safety). Instruktur kami memiliki kontrol penuh untuk menghentikan kendaraan seketika jika ada potensi bahaya, sehingga latihan 100% aman dan bebas risiko insiden.",
  },
  {
    q: "Apakah jadwal latihan bisa diganti jika ada urusan mendadak?",
    a: "Tentu bisa! Anda cukup memberitahukan admin atau instruktur kami minimal beberapa jam sebelum sesi dimulai untuk melakukan penjadwalan ulang ke slot waktu lain yang masih tersedia.",
  },
  {
    q: "Bagaimana pengurusan SIM A resmi, apakah dijamin dibimbing?",
    a: "Ya, untuk paket yang menyertakan SIM A (Basic + SIM atau Pro + SIM), seluruh proses berkas, bimbingan soal ujian teori, hingga simulasi lintasan praktik akan didampingi langsung oleh tim Amanah Drive hingga kartu SIM A resmi Anda terbit.",
  },
  {
    q: "Apakah ada layanan antar jemput ke rumah di Palembang?",
    a: "Ya, kami menyediakan fasilitas antar-jemput siswa untuk area jangkauan tertentu di Kota Palembang (Bukit Lama, Macan Kumbang, Demang Lebar Daun, Gandus, Sudirman, dan sekitarnya). Anda juga bisa janjian di titik kumpul strategis yang disepakati.",
  },
  {
    q: "Metode pembayarannya bagaimana? Apakah bisa dicicil (DP)?",
    a: "Bisa! Anda cukup membayar DP awal saat pendaftaran untuk mengunci slot jadwal dan armada Anda. Sisa pelunasan bisa dilakukan pada sesi pertama atau kedua latihan berjalan melalui transfer bank resmi atau tunai.",
  },
];

export const CONTACT_INFO = {
  companyName: "Amanah Drive Palembang",
  tagline: "Kursus Mengemudi Profesional & Bergaransi No. 1 Palembang",
  phoneDisplay: "0822-7909-1096",
  phoneRaw: "6282279091096",
  address: "Kota Palembang, Sumatera Selatan (Area Layanan: Bukit, Demang, Sudirman, Gandus, Sukarami, Plaju & sekitarnya)",
  instagram: "@amanahdrive.palembang",
  operationalHours: "Senin – Minggu: 08:30 – 22:00 WIB",
  bankAccount: {
    bank: "BRI",
    number: "110401019850504",
    name: "Nur Awalia Rianti",
  },
};

export function generateWhatsAppUrl(message: string): string {
  return `https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(message)}`;
}
