import React from "react";
import { ShieldCheck, HeartHandshake, FileCheck2, Clock, Car, Award, Sparkles, CheckCircle2 } from "lucide-react";

export default function FeatureBento() {
  const features = [
    {
      icon: ShieldCheck,
      title: "Pendampingan Intensif & Siaga",
      badge: "Protokol Keamanan",
      desc: "Instruktur berpengalaman duduk mendampingi di sisi Anda dengan kewaspadaan penuh, siap memandu koreksi setir, mengarahkan haluan, dan mengantisipasi situasi lalu lintas secara tenang dan responsif.",
      points: ["Instruktur sigap mendampingi setiap detik", "Siswa tenang tanpa rasa cemas di jalan raya", "Panduan antisipasi risiko & etika jalan raya"],
    },
    {
      icon: HeartHandshake,
      title: "Instruktur Ramah & Anti-Bentak",
      badge: "Pendekatan Sabar",
      desc: "Pernah trauma dimarahi saat belajar mengemudi? Di Amanah Drive, instruktur terikat SOP kesabaran tinggi, komunikatif, dan menciptakan suasana tenang agar rasa grogi cepat hilang.",
      points: ["Instruktur berpengalaman & teruji", "Metode empati untuk pemula & wanita", "Fokus membina rasa percaya diri"],
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
      title: "Sertifikat Kelulusan Resmi CV",
      badge: "Apresiasi & Evaluasi",
      desc: "Setelah menyelesaikan seluruh materi kurikulum praktik, siswa menerima Sertifikat Kelulusan resmi CV Amanah Drive berstempel basah beserta lembar evaluasi berkendara.",
      points: ["Bukti fisik kelulusan materi praktik", "Catatan evaluasi perkembangan belajar", "Diterbitkan resmi oleh CV Amanah Drive"],
    },
  ];

  return (
    <section id="keunggulan" className="py-10 sm:py-24 relative bg-[#f8f9fc] border-y border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#0F7A73]">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Standar Keunggulan Belajar</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#121317] tracking-tight leading-snug">
            Mengapa Amanah Drive Pilihan Utama di Palembang?
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Kami memadukan keselamatan fisik, ketenangan mental, dan metode pembelajaran bertahap agar siapa pun dapat mengemudi mandiri tanpa rasa cemas di jalan raya.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="antigravity-card p-4 sm:p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-[#f0f1f5] border border-[rgba(33,34,38,0.06)] flex items-center justify-center text-[#121317]">
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#0F7A73]" />
                    </div>
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#f0f1f5] text-[#45474d] border border-[rgba(33,34,38,0.06)]">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#121317] mb-1.5 sm:mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-3 sm:mb-5">
                    {item.desc}
                  </p>
                </div>

                <ul className="space-y-1.5 sm:space-y-2 pt-3 sm:pt-4 border-t border-[rgba(33,34,38,0.06)]">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-[#45474d]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
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
