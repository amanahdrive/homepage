import React from "react";
import { ShieldAlert, HeartHandshake, FileCheck2, Clock, Car, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function FeatureBento() {
  const features = [
    {
      icon: ShieldAlert,
      title: "Dual Pedal Safety System",
      badge: "Garansi 100% Aman",
      desc: "Seluruh mobil latihan kami telah dipasang pedal rem & kopling tambahan di sisi instruktur. Menghilangkan risiko panik atau salah injak pedal saat melatih reflek di jalan raya.",
      points: ["Intervensi rem instan dari instruktur", "Siswa tidak perlu takut menabrak", "Aman untuk simulasi jalan padat"],
    },
    {
      icon: HeartHandshake,
      title: "Instruktur Ramah & Anti-Bentak",
      badge: "Pendekatan Humanis",
      desc: "Trauma pernah dimarahi saat belajar mengemudi? Di Amanah Drive, instruktur terikat SOP kesabaran tinggi, komunikatif, dan menciptakan suasana tenang agar rasa grogi cepat hilang.",
      points: ["Instruktur bersertifikasi resmi BNSP", "Metode empati untuk pemula & wanita", "Fokus membina rasa percaya diri"],
    },
    {
      icon: FileCheck2,
      title: "Bimbingan SIM A Resmi Tuntas",
      badge: "Legalitas Terjamin",
      desc: "Tidak perlu pusing urus berkas SIM A sendiri. Kami membimbing kelengkapan administrasi, simulasi soal teori, hingga mendampingi simulasi lintasan praktik uji SIM sampai selesai.",
      points: ["Didampingi tim saat proses resmi", "Simulasi lintasan uji sebelum hari H", "Proses tertib, resmi & terpercaya"],
    },
    {
      icon: Clock,
      title: "6 Pilihan Slot Jadwal Harian",
      badge: "09.00 - 22.00 WIB",
      desc: "Fleksibel untuk pekerja kantoran, wiraswasta, atau mahasiswa. Bebas memilih sesi pagi segar, sore hari, atau sesi malam hari yang tenang dan bebas terik matahari.",
      points: ["Slot malam sangat diminati pekerja", "Bisa reschedule jika ada kendala mendadak", "Durasi efektif 90 menit per pertemuan"],
    },
    {
      icon: Car,
      title: "Armada Nyaman, Dingin & Terawat",
      badge: "Kabin Bersih Ber-AC",
      desc: "Pilihan unit city car Daihatsu Ayla yang lincah dan Daihatsu Xenia untuk penguasaan dimensi MPV keluarga, atau pendampingan langsung di mobil pribadi milik Anda.",
      points: ["AC dingin & kabin steril bersih", "Perawatan mesin berkala di bengkel resmi", "Tersedia opsi manual & mobil pribadi"],
    },
    {
      icon: Award,
      title: "Sertifikat Kelulusan & Nilai",
      badge: "Standar Kompetensi",
      desc: "Setelah menyelesaikan seluruh materi kurikulum praktik, siswa menerima Sertifikat Kelulusan resmi Amanah Drive berstempel basah beserta lembar evaluasi kompetensi.",
      points: ["Bukti kelulusan materi praktik", "Buku catatan kemajuan per sesi", "Evaluasi langsung oleh instruktur"],
    },
  ];

  return (
    <section id="keunggulan" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Standar Keunggulan
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Amanah Drive Pilihan Utama di Palembang?
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Kami mengutamakan keselamatan fisik, ketenangan mental, dan metode pembelajaran bertahap agar siapa pun dapat mengemudi dengan mandiri tanpa rasa cemas.
          </p>
        </div>

        {/* Grid Bento with 12px Container Radius & Hairline Precision */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="console-card p-6 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-[#091E1C] border border-teal-500/30 flex items-center justify-center text-teal-400">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-[4px] bg-[#071513] text-teal-300 border border-teal-900">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white mb-2">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-800/80">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

