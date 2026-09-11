import React from "react";
import Image from "next/image";
import { CURRICULUM } from "@/lib/constants";
import { BookOpen, CheckCircle2, Award, FileCheck, ShieldCheck } from "lucide-react";

export default function CurriculumRoadmap() {
  return (
    <section id="kurikulum" className="py-10 sm:py-24 relative bg-[#f8f9fc] border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#0F7A73]">
            <BookOpen className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Silabus Praktik Terstruktur</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#121317] tracking-tight leading-snug">
            Kurikulum Praktik 10 Sesi Menyeluruh
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Tidak ada materi yang dilewati. Setiap sesi dirancang bertahap dari pemahaman cockpit, tanjakan curam, semua gaya parkir, hingga kemahiran di jalan protokol Kota Palembang.
          </p>
        </div>

        {/* Timeline Grid in Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-12">
          {CURRICULUM.map((item, idx) => (
            <div
              key={idx}
              className="antigravity-card p-3.5 sm:p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-[#E6F4F2] text-[#0F7A73] font-mono font-bold text-[10px] sm:text-xs">
                    {item.session}
                  </span>
                  <span className="text-[10px] sm:text-[11px] text-[#9aa0a6] font-mono">
                    Tahap 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#121317] mb-2 sm:mb-3 leading-snug">
                  {item.title}
                </h3>

                <ul className="space-y-1.5 sm:space-y-2 mb-3 sm:mb-4">
                  {item.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-[#45474d] leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2.5 sm:pt-3 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between text-[10px] sm:text-[11px] text-[#45474d]">
                <span className="font-mono">90 Menit / Sesi</span>
                <span className="text-[#0F7A73] font-medium">Praktik Lapangan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate & Evaluation Feature Showcase */}
        <div className="antigravity-card p-4 sm:p-8 bg-white border border-[rgba(33,34,38,0.08)] flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-8 rounded-xl">
          <div className="space-y-2 sm:space-y-3 text-left max-w-2xl">
            <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-[#f8f9fc] text-[#121317] text-[10px] sm:text-xs font-mono font-bold border border-[rgba(33,34,38,0.08)]">
              <Award className="w-3.5 h-3.5 text-amber-500" />
              Tanda Apresiasi Kelulusan &amp; Penguasaan Praktik
            </div>
            <h3 className="text-lg sm:text-3xl font-extrabold text-[#121317] tracking-tight leading-snug">
              Sertifikat Kelulusan Resmi CV Amanah Drive
            </h3>
            <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed">
              Setiap siswa yang menuntaskan kurikulum praktik berhak menerima Sertifikat Kelulusan Resmi internal dari CV Amanah Drive berstempel basah keaslian, disertai Lembar Panduan Evaluasi Belajar yang merangkum pencapaian teknik manuver, tanjakan, dan parkir dari instruktur pendamping.
            </p>
            <div className="pt-1 sm:pt-2 flex flex-wrap items-center gap-3 sm:gap-4 text-[11px] sm:text-xs text-[#45474d]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#10B981]" />
                <span className="font-medium">Nomor Registrasi Sertifikat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0F7A73]" />
                <span className="font-medium">Format Fisik &amp; Digital (PDF)</span>
              </div>
            </div>
          </div>

          {/* Real Certificate Visual Preview */}
          <div className="shrink-0 w-full sm:w-[380px] lg:w-[420px] rounded-xl overflow-hidden border border-[rgba(33,34,38,0.1)] bg-slate-50 shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[1024/723] w-full bg-slate-100">
              <Image
                src="/assets/sertifikat-resmi.webp"
                alt="Contoh Fisik Asli Sertifikat Kelulusan Resmi Siswa CV Amanah Drive Palembang"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 420px"
              />
            </div>
            <div className="px-3.5 py-2.5 bg-white border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between text-[10px] sm:text-[11px] text-[#45474d]">
              <span className="font-mono text-[#0F7A73] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                Nomor Registrasi Terverifikasi
              </span>
              <span className="text-[#9aa0a6] font-mono text-[9px] sm:text-[10px]">Stempel Basah CV Amanah Drive</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
