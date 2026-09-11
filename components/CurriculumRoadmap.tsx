import React from "react";
import { CURRICULUM } from "@/lib/constants";
import { BookOpen, CheckCircle, Award } from "lucide-react";

export default function CurriculumRoadmap() {
  return (
    <section id="kurikulum" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
            <BookOpen className="w-3.5 h-3.5" /> Metode Bertahap Teruji
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Kurikulum Praktik 10 Sesi Menyeluruh
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Tidak ada materi yang dilewati. Setiap sesi dirancang sistematis agar siswa menguasai teknik fisik kendaraan dan ketenangan psikologis di jalan raya.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CURRICULUM.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 border border-slate-800/80 hover:border-teal-500/30 relative flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-xl bg-teal-900/60 border border-teal-500/40 text-teal-300 font-extrabold text-xs">
                    {item.session}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Tahap 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-4 group-hover:text-teal-300 transition-colors">
                  {item.title}
                </h3>

                <ul className="space-y-2 mb-4">
                  {item.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span>Durasi: 90 Menit</span>
                <span className="text-teal-400 font-medium">Praktik Lapangan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-12 bg-gradient-to-r from-teal-950/80 via-slate-900 to-teal-950/80 rounded-3xl p-6 sm:p-8 border border-teal-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-lg font-bold text-white flex items-center justify-center sm:justify-start gap-2">
              <Award className="w-5 h-5 text-amber-400" />
              Sertifikat Kelulusan &amp; Kartu Evaluasi Siswa
            </h4>
            <p className="text-xs sm:text-sm text-slate-400">
              Setiap pencapaian sesi dinilai dan dipantau instruktur sehingga siswa tahu persis bagian mana yang sudah mahir dan perlu diasah.
            </p>
          </div>
          <a
            href="#kalkulator"
            className="shrink-0 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs shadow-lg glow-button"
          >
            Hitung Simulasi Jadwal Anda &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
