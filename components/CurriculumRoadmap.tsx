import React from "react";
import Image from "next/image";
import { CURRICULUM } from "@/lib/constants";
import { BookOpen, CheckCircle2, Award, FileCheck, ShieldCheck } from "lucide-react";

export default function CurriculumRoadmap() {
  return (
    <section id="kurikulum" className="py-14 sm:py-28 relative bg-[#f8f9fc] border-t border-[rgba(17,18,21,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="tech-tag tech-tag-brand">
              <BookOpen className="w-3 h-3 text-[#0F7A73]" />
              Silabus Praktik Terstruktur
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Kurikulum Praktik 10 Sesi Menyeluruh
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Tidak ada materi yang dilewati. Setiap sesi dirancang bertahap dari pemahaman cockpit, tanjakan curam, semua gaya parkir, hingga kemahiran di jalan protokol Kota Palembang.
          </p>
        </div>

        {/* Timeline Matrix: Continuous Architectural Hairline Grid */}
        <div className="border-t border-l border-[rgba(17,18,21,0.08)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mb-10 sm:mb-16">
          {CURRICULUM.map((item, idx) => (
            <div
              key={idx}
              className="border-r border-b border-[rgba(17,18,21,0.08)] bg-white p-5 sm:p-6 flex flex-col justify-between hover:bg-[#fafbfc] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="tech-tag tech-tag-brand">
                    {item.session}
                  </span>
                  <span className="text-[10px] font-mono text-[#9aa0a6]">
                    TAHAP 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-[#111215] mb-3 leading-snug">
                  {item.title}
                </h3>

                <ul className="space-y-1.5 mb-4">
                  {item.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-1.5 text-[11px] sm:text-xs text-[#45474d] leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[rgba(17,18,21,0.06)] flex items-center justify-between text-[10px] font-mono text-[#45474d]">
                <span>90 MENIT / SESI</span>
                <span className="text-[#0F7A73] font-medium">PRAKTIK LAPANGAN</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate & Evaluation Split Showcase (Zero Boxy Nesting) */}
        <div className="border border-[rgba(17,18,21,0.08)] bg-white p-6 sm:p-10 flex flex-col lg:flex-row items-center justify-between gap-8 rounded-[4px]">
          <div className="space-y-3 text-left max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="tech-tag">
                <Award className="w-3 h-3 text-amber-500" />
                Bukti Keahlian &amp; Standar Kelulusan
              </span>
            </div>
            <h3 className="text-xl sm:text-3xl font-extrabold text-[#111215] tracking-tight leading-snug">
              Sertifikat Kelulusan Resmi CV Amanah Drive
            </h3>
            <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed">
              Setiap siswa yang menuntaskan kurikulum praktik berhak menerima Sertifikat Kelulusan Resmi internal dari CV Amanah Drive berstempel basah keaslian, disertai Lembar Panduan Evaluasi Belajar yang merangkum pencapaian teknik manuver, tanjakan, dan parkir dari instruktur pendamping.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4 text-xs text-[#45474d]">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span className="font-medium">Nomor Registrasi Sertifikat</span>
              </div>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-4 h-4 text-[#0F7A73]" />
                <span className="font-medium">Format Fisik &amp; Digital (PDF)</span>
              </div>
            </div>
          </div>

          {/* Certificate Visual Preview */}
          <div className="shrink-0 w-full sm:w-[380px] lg:w-[420px] rounded-[4px] overflow-hidden border border-[rgba(17,18,21,0.12)] bg-slate-50">
            <div className="relative aspect-[1024/723] w-full bg-slate-100">
              <Image
                src="/assets/sertifikat-resmi.webp"
                alt="Contoh Fisik Asli Sertifikat Kelulusan Resmi Siswa CV Amanah Drive Palembang"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, 420px"
              />
            </div>
            <div className="px-4 py-2.5 bg-white border-t border-[rgba(17,18,21,0.06)] flex items-center justify-between text-[11px] text-[#45474d]">
              <span className="font-mono text-[#0F7A73] font-semibold flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#10B981]" />
                Nomor Terverifikasi
              </span>
              <span className="text-[#9aa0a6] font-mono text-[10px]">Stempel Basah CV Amanah Drive</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
