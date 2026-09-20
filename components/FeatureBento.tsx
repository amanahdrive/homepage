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
    <section id="keunggulan" className="py-14 sm:py-28 relative bg-[#f8f9fc] border-t border-[rgba(17,18,21,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#0F7A73] uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Standar Keunggulan Belajar</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Mengapa Amanah Drive Pilihan Utama di Palembang?
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Kami memadukan keselamatan fisik, ketenangan mental, dan metode pembelajaran bertahap agar siapa pun dapat mengemudi mandiri tanpa rasa cemas di jalan raya.
          </p>
        </div>

        {/* Feature Matrix: Continuous Architectural Hairline Grid */}
        <div className="border-t border-l border-[rgba(17,18,21,0.08)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="border-r border-b border-[rgba(17,18,21,0.08)] bg-white p-5 sm:p-7 flex flex-col justify-between hover:bg-[#fafbfc] transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-8 h-8 rounded-[4px] bg-[#f8f9fc] border border-[rgba(17,18,21,0.08)] flex items-center justify-center text-[#111215]">
                      <Icon className="w-4 h-4 text-[#0F7A73]" />
                    </div>
                    <span className="font-mono text-[10px] text-[#9aa0a6] uppercase tracking-wider font-medium">
                      0{idx + 1} &bull; {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#111215] mb-2 tracking-tight">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-5">
                    {item.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-[rgba(17,18,21,0.06)]">
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
