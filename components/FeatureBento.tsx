import React from "react";
import { ShieldAlert, HeartHandshake, FileCheck2, Clock, Car, Award, Sparkles, CheckCircle } from "lucide-react";

export default function FeatureBento() {
  const features = [
    {
      icon: ShieldAlert,
      title: "Dual Pedal Safety System",
      badge: "Keamanan 100%",
      desc: "Setiap mobil latihan kami telah dimodifikasi dengan pedal rem dan kopling tambahan di sisi kursi instruktur. Anda bisa belajar dengan tenang tanpa takut menabrak atau salah injak pedal.",
      color: "from-teal-500/20 to-emerald-500/10",
      border: "border-teal-500/30",
      iconColor: "text-teal-400",
      points: ["Kontrol rem instan dari instruktur", "Eliminasi risiko panik saat salah pedal", "Aman untuk rute jalan raya padat"],
    },
    {
      icon: HeartHandshake,
      title: "Instruktur Ramah & Anti-Bentak",
      badge: "Pendekatan Humanis",
      desc: "Trauma pernah dimarahi saat belajar mengemudi? Di Amanah Drive, instruktur kami terikat SOP ketat: bersikap sabar, sopan, komunikatif, dan menciptakan suasana rileks agar Anda cepat paham.",
      color: "from-emerald-500/20 to-teal-500/10",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      points: ["Instruktur bersertifikasi profesional", "Spesialisasi mengatasi siswa grogi & pemula", "Mendukung siswa wanita & ibu rumah tangga"],
    },
    {
      icon: FileCheck2,
      title: "Bimbingan SIM A Resmi Tuntas",
      badge: "Legalitas Terjamin",
      desc: "Tidak perlu pusing urus SIM A sendiri! Kami membimbing berkas, memberikan tips lulus ujian teori, hingga simulasi lintasan praktik resmi sampai SIM A Anda terbit.",
      color: "from-amber-500/20 to-teal-500/10",
      border: "border-amber-500/30",
      iconColor: "text-amber-400",
      points: ["Didampingi tim saat ujian praktik", "Simulasi lintasan uji SIM sebelum hari H", "Proses resmi, legal & terpercaya"],
    },
    {
      icon: Clock,
      title: "6 Pilihan Slot Jadwal Harian",
      badge: "Fleksibel 09.00 - 22.00 WIB",
      desc: "Sibuk kerja atau kuliah? Anda bebas memilih jadwal dari pagi hari jam 09.00 WIB sampai sesi malam santai jam 22.00 WIB. Bisa sesuaikan hari kerja maupun weekend.",
      color: "from-cyan-500/20 to-blue-500/10",
      border: "border-cyan-500/30",
      iconColor: "text-cyan-400",
      points: ["Slot malam cocok untuk pekerja kantoran", "Bisa reschedule jika ada halangan mendadak", "Waktu latihan efektif 90 menit per sesi"],
    },
    {
      icon: Car,
      title: "Armada Bersih, Dingin & Terawat",
      badge: "Nyaman Ber-AC",
      desc: "Pilihan armada terawat: Daihatsu Ayla yang lincah untuk latihan manuver awal, Daihatsu Xenia untuk adaptasi dimensi MPV, atau didampingi langsung menggunakan mobil pribadi Anda.",
      color: "from-teal-500/20 to-slate-500/10",
      border: "border-teal-500/30",
      iconColor: "text-teal-400",
      points: ["AC dingin & kabin wangi steril", "Servis mesin rutin di bengkel resmi", "Tersedia opsi manual & mobil sendiri"],
    },
    {
      icon: Award,
      title: "Sertifikat Kelulusan Resmi",
      badge: "Standar Kompetensi",
      desc: "Setelah menyelesaikan seluruh sesi kurikulum dan evaluasi mandiri, Anda akan menerima Sertifikat Kelulusan resmi Amanah Drive dengan nomor registrasi unik.",
      color: "from-emerald-500/20 to-amber-500/10",
      border: "border-emerald-500/30",
      iconColor: "text-emerald-400",
      points: ["Portofolio keahlian menyetir", "Bukti kompetensi kelulusan materi", "Evaluasi menyeluruh dari instruktur"],
    },
  ];

  return (
    <section id="keunggulan" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Standar Pelayanan Terbaik
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Mengapa Amanah Drive Pilihan Terbaik di Palembang?
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Kami mengutamakan keselamatan, kenyamanan psikologis, dan kurikulum bertahap agar siapapun bisa menyetir dengan percaya diri tanpa rasa takut.
          </p>
        </div>

        {/* Grid Bento */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`glass-card rounded-3xl p-7 border ${item.border} relative overflow-hidden flex flex-col justify-between group`}
              >
                <div className={`absolute -top-12 -right-12 w-32 h-32 bg-gradient-to-br ${item.color} rounded-full blur-2xl pointer-events-none group-hover:scale-125 transition-transform`} />

                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-center justify-center ${item.iconColor} shadow-md`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-slate-900 text-slate-300 border border-slate-700">
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-teal-300 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <ul className="space-y-2 pt-4 border-t border-slate-800/80">
                  {item.points.map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
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
