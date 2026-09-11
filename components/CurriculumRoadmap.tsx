import React from "react";
import Image from "next/image";
import { CURRICULUM } from "@/lib/constants";
import { BookOpen, CheckCircle2, Award, FileCheck, ShieldCheck } from "lucide-react";

export default function CurriculumRoadmap() {
  return (
    <section id="kurikulum" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-500/30">
            <BookOpen className="w-3.5 h-3.5" /> Silabus Praktik Sistematis
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kurikulum Praktik 10 Sesi Menyeluruh
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Tidak ada materi yang dilewati. Setiap sesi dirancang bertahap dari pemahaman cockpit, tanjakan curam, semua gaya parkir, hingga kemahiran di jalan raya protokol Kota Palembang.
          </p>
        </div>

        {/* Timeline Grid (12px console cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CURRICULUM.map((item, idx) => (
            <div
              key={idx}
              className="console-card p-5 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-[4px] bg-teal-950 text-teal-300 font-bold text-xs border border-teal-500/30">
                    {item.session}
                  </span>
                  <span className="text-[11px] text-slate-500 font-mono">
                    Tahap 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-3">
                  {item.title}
                </h3>

                <ul className="space-y-2 mb-4">
                  {item.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px] text-slate-400">
                <span>90 Menit / Pertemuan</span>
                <span className="text-teal-400 font-medium">Praktik Lapangan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate & Evaluation Feature Showcase */}
        <div className="console-card p-6 sm:p-8 border border-teal-500/30 bg-[#09221F] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[4px] bg-teal-950 text-teal-300 text-xs font-semibold border border-teal-500/30">
              <Award className="w-4 h-4 text-amber-400" />
              Bukti Kelulusan Sah &amp; Portofolio Mengemudi
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Sertifikat Kelulusan Resmi dengan Stempel Terdaftar
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Setiap siswa yang menuntaskan kurikulum praktik akan menerima Sertifikat Resmi Amanah Drive berstempel basah keaslian, disertai Lembar Penilaian Kompetensi yang memuat evaluasi kemampuan manuver, tanjakan, dan parkir dari instruktur penguji.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Nomor Registrasi Kelulusan Unik</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-teal-400" />
                <span>Format Fisik &amp; Digital (PDF)</span>
              </div>
            </div>
          </div>

          {/* Certificate Badge Visual Preview with Real Stamp */}
          <div className="console-card p-4 border border-teal-500/40 bg-[#071513] shrink-0 w-full sm:w-80 relative overflow-hidden text-center space-y-3">
            <div className="flex items-center justify-between border-b border-teal-900/60 pb-2.5">
              <span className="text-[11px] font-mono text-teal-400 font-bold">SERTIFIKAT KOMPETENSI</span>
              <span className="text-[10px] text-slate-400">Palembang</span>
            </div>

            <div className="space-y-1 py-1">
              <p className="text-[11px] text-slate-400">Diberikan secara resmi kepada:</p>
              <p className="text-sm font-bold text-white tracking-wide">[ Nama Siswa Lulus ]</p>
              <p className="text-[10px] text-emerald-400 font-mono">Status: Kompeten &amp; Siap Berkendara Mandiri</p>
            </div>

            <div className="pt-2 border-t border-teal-900/60 flex items-center justify-between">
              <div className="text-left text-[10px] text-slate-400">
                <span>Instruktur Penguji</span>
                <p className="text-white font-semibold">Kak Syawal / Tim</p>
              </div>

              {/* Official Red Stamp Overlay */}
              <div className="relative w-12 h-12 shrink-0">
                <Image
                  src="/assets/cap-amanah.png"
                  alt="Stempel Basah Amanah Drive"
                  width={48}
                  height={48}
                  className="object-contain rotate-[-12deg]"
                />
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

