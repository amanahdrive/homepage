import React from "react";
import Image from "next/image";
import { CURRICULUM } from "@/lib/constants";
import { BookOpen, CheckCircle2, Award, FileCheck, ShieldCheck } from "lucide-react";

export default function CurriculumRoadmap() {
  return (
    <section id="kurikulum" className="py-20 sm:py-28 relative bg-[#f8f9fc] border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antigravity Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="antigravity-chip">
            <BookOpen className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Silabus Praktik Terstruktur</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight">
            Kurikulum Praktik 10 Sesi Menyeluruh
          </h2>
          <p className="text-[#45474d] text-sm sm:text-base leading-relaxed">
            Tidak ada materi yang dilewati. Setiap sesi dirancang bertahap dari pemahaman cockpit, tanjakan curam, semua gaya parkir, hingga kemahiran di jalan protokol Kota Palembang.
          </p>
        </div>

        {/* Timeline Grid in Clean Antigravity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {CURRICULUM.map((item, idx) => (
            <div
              key={idx}
              className="antigravity-card p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#E6F4F2] text-[#0F7A73] font-mono font-bold text-xs">
                    {item.session}
                  </span>
                  <span className="text-[11px] text-[#9aa0a6] font-mono">
                    Tahap 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#121317] mb-3 leading-snug">
                  {item.title}
                </h3>

                <ul className="space-y-2 mb-4">
                  {item.topics.map((t, tIdx) => (
                    <li key={tIdx} className="flex items-start gap-2 text-xs text-[#45474d] leading-snug">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-3 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between text-[11px] text-[#45474d]">
                <span className="font-mono">90 Menit / Sesi</span>
                <span className="text-[#0F7A73] font-medium">Praktik Lapangan</span>
              </div>
            </div>
          ))}
        </div>

        {/* Certificate & Evaluation Feature Showcase in Clean Antigravity Layout */}
        <div className="antigravity-card p-6 sm:p-8 bg-white border border-[rgba(33,34,38,0.08)] flex flex-col lg:flex-row items-center justify-between gap-8 rounded-2xl">
          <div className="space-y-3 text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f8f9fc] text-[#121317] text-xs font-mono font-bold border border-[rgba(33,34,38,0.08)]">
              <Award className="w-4 h-4 text-amber-500" />
              Tanda Apresiasi Kelulusan &amp; Penguasaan Praktik
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#121317] tracking-tight">
              Sertifikat Kelulusan Resmi CV Amanah Drive Mandiri
            </h3>
            <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed">
              Setiap siswa yang menuntaskan kurikulum praktik berhak menerima Sertifikat Kelulusan Resmi internal dari CV Amanah Drive Mandiri berstempel basah keaslian, disertai Lembar Panduan Evaluasi Mandiri yang merangkum pencapaian teknik manuver, tanjakan, dan parkir dari instruktur pendamping.
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

          {/* Certificate Badge Visual Preview with Real Stamp */}
          <div className="p-5 border border-[rgba(33,34,38,0.08)] bg-[#f8f9fc] rounded-2xl shrink-0 w-full sm:w-80 relative overflow-hidden text-center space-y-3 shadow-sm">
            <div className="flex items-center justify-between border-b border-[rgba(33,34,38,0.06)] pb-2.5">
              <span className="text-[11px] font-mono text-[#0F7A73] font-bold">SERTIFIKAT KELULUSAN</span>
              <span className="text-[10px] text-[#9aa0a6] font-mono">Palembang</span>
            </div>

            <div className="space-y-1 py-1">
              <p className="text-[11px] text-[#45474d]">Diberikan secara resmi kepada:</p>
              <p className="text-sm font-bold text-[#121317] tracking-wide">[ Nama Siswa Lulus ]</p>
              <p className="text-[10px] text-[#10B981] font-mono font-medium">Status: Menyelesaikan Praktik Mandiri</p>
            </div>

            <div className="pt-2 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between">
              <div className="text-left text-[10px] text-[#45474d]">
                <span>Instruktur Pendamping</span>
                <p className="text-[#121317] font-bold">Kak Syawal / Tim Instruktur</p>
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
