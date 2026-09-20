"use client";

import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Heart, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  const row1 = TESTIMONIALS.slice(0, 4);
  const row2 = TESTIMONIALS.slice(4, 8);

  // Repeat items for continuous infinite marquee loop
  const row1Items = [...row1, ...row1, ...row1];
  const row2Items = [...row2, ...row2, ...row2];

  // Waterfall certificate and graduate images
  const certImages = [
    "/assets/graduates/grad-1.webp",
    "/assets/graduates/grad-2.webp",
    "/assets/sertifikat-resmi.webp",
    "/assets/graduates/grad-3.webp",
    "/assets/graduates/grad-4.webp",
  ];

  // Repeat for vertical waterfall flow
  const stream1 = [...certImages, ...certImages];
  const stream2 = [...certImages.slice(2), ...certImages.slice(0, 2), ...certImages];
  const stream3 = [...certImages.slice(3), ...certImages.slice(0, 3), ...certImages];
  const stream4 = [...certImages.slice(1), ...certImages.slice(0, 1), ...certImages];
  const stream5 = [...certImages.slice(4), ...certImages.slice(0, 4), ...certImages];

  return (
    <section id="testimoni" className="py-16 sm:py-28 relative bg-white border-t border-[rgba(17,18,21,0.08)] overflow-hidden">
      
      {/* BACKGROUND: Waterfall of Students Holding Graduation Certificates */}
      <div className="absolute inset-0 pointer-events-none select-none overflow-hidden opacity-[0.13] sm:opacity-[0.15]">
        <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 h-full max-w-7xl mx-auto px-2 sm:px-4">
          
          {/* Column 1 (Down) */}
          <div className="animate-waterfall-down space-y-3 sm:space-y-4">
            {stream1.map((img, i) => (
              <div key={i} className="relative aspect-[3/4] w-full rounded-[4px] overflow-hidden border border-[rgba(17,18,21,0.12)] bg-slate-100 shadow-sm">
                <Image
                  src={img}
                  alt="Kelulusan Siswa Amanah Drive"
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover grayscale contrast-125"
                />
              </div>
            ))}
          </div>

          {/* Column 2 (Up) */}
          <div className="animate-waterfall-up space-y-3 sm:space-y-4">
            {stream2.map((img, i) => (
              <div key={i} className="relative aspect-[3/4] w-full rounded-[4px] overflow-hidden border border-[rgba(17,18,21,0.12)] bg-slate-100 shadow-sm">
                <Image
                  src={img}
                  alt="Sertifikat Kelulusan Siswa"
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover grayscale contrast-125"
                />
              </div>
            ))}
          </div>

          {/* Column 3 (Down) */}
          <div className="animate-waterfall-down space-y-3 sm:space-y-4">
            {stream3.map((img, i) => (
              <div key={i} className="relative aspect-[3/4] w-full rounded-[4px] overflow-hidden border border-[rgba(17,18,21,0.12)] bg-slate-100 shadow-sm">
                <Image
                  src={img}
                  alt="Dokumentasi Lulus Kursus"
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  className="object-cover grayscale contrast-125"
                />
              </div>
            ))}
          </div>

          {/* Column 4 (Up) - Hidden on smallest mobile for GPU efficiency */}
          <div className="hidden sm:block animate-waterfall-up space-y-3 sm:space-y-4">
            {stream4.map((img, i) => (
              <div key={i} className="relative aspect-[3/4] w-full rounded-[4px] overflow-hidden border border-[rgba(17,18,21,0.12)] bg-slate-100 shadow-sm">
                <Image
                  src={img}
                  alt="Siswa Lulus Palembang"
                  fill
                  sizes="20vw"
                  className="object-cover grayscale contrast-125"
                />
              </div>
            ))}
          </div>

          {/* Column 5 (Down) - Hidden on tablet/mobile */}
          <div className="hidden lg:block animate-waterfall-down space-y-3 sm:space-y-4">
            {stream5.map((img, i) => (
              <div key={i} className="relative aspect-[3/4] w-full rounded-[4px] overflow-hidden border border-[rgba(17,18,21,0.12)] bg-slate-100 shadow-sm">
                <Image
                  src={img}
                  alt="Sertifikat Resmi CV Amanah Drive"
                  fill
                  sizes="20vw"
                  className="object-cover grayscale contrast-125"
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Vertical Edge Fades (Atas dan Bawah Fade Halus ke Putih) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-28 sm:h-44 bg-gradient-to-b from-white via-white/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 sm:h-44 bg-gradient-to-t from-white via-white/80 to-transparent z-10" />

      {/* FOREGROUND CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        {/* Section Editorial Header */}
        <div className="text-left max-w-3xl space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#0F7A73] uppercase tracking-wider font-semibold">
            <Heart className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Cerita Nyata Siswa &bull; Bukti Kelulusan Asli</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Dipercaya 1.000+ Siswa Lulus di Palembang
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Mulai dari pemula yang trauma menyentuh stir hingga ibu rumah tangga dan mahasiswa, inilah pengalaman jujur mereka belajar bersama Amanah Drive hingga lulus percaya diri dan bersertifikat resmi.
          </p>
        </div>
      </div>

      {/* 2-ROW INFINITE MARQUEE CAROUSEL */}
      <div className="relative z-20 space-y-3 sm:space-y-4 overflow-hidden">
        
        {/* Side Horizontal Fades (Kartu muncul & menghilang halus) */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-8 sm:w-28 bg-gradient-to-r from-white via-white/80 to-transparent z-30" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-8 sm:w-28 bg-gradient-to-l from-white via-white/80 to-transparent z-30" />

        {/* Row 1: Bergerak dari KANAN ke KIRI */}
        <div className="animate-marquee-left pause-hover flex gap-3 sm:gap-4 px-2">
          {row1Items.map((t, idx) => (
            <article
              key={`row1-${idx}`}
              className="w-[280px] sm:w-[360px] p-4 sm:p-6 bg-white/95 backdrop-blur-md border border-[rgba(17,18,21,0.09)] shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-[4px] shrink-0 flex flex-col justify-between hover:border-[rgba(17,18,21,0.22)] transition-colors"
            >
              <div>
                {/* Header: Stars & Verified indicator */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-[#0F7A73] font-semibold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    Siswa Lulus Resmi
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Footer: Student Profile */}
              <div className="pt-3 border-t border-[rgba(17,18,21,0.06)] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-[3px] overflow-hidden border border-[rgba(17,18,21,0.1)] bg-[#f4f5f7] shrink-0">
                    <Image
                      src={t.avatar || "/assets/default-avatar.webp"}
                      alt={t.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#111215] leading-tight">{t.name}</h3>
                    <p className="text-[10px] text-[#9aa0a6] font-mono leading-tight">{t.status}</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[#0F7A73] font-medium uppercase tracking-wider shrink-0">
                  {t.pkg}
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Row 2: Bergerak dari KIRI ke KANAN */}
        <div className="animate-marquee-right pause-hover flex gap-3 sm:gap-4 px-2">
          {row2Items.map((t, idx) => (
            <article
              key={`row2-${idx}`}
              className="w-[280px] sm:w-[360px] p-4 sm:p-6 bg-white/95 backdrop-blur-md border border-[rgba(17,18,21,0.09)] shadow-[0_4px_24px_rgba(0,0,0,0.04)] rounded-[4px] shrink-0 flex flex-col justify-between hover:border-[rgba(17,18,21,0.22)] transition-colors"
            >
              <div>
                {/* Header: Stars & Verified indicator */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="font-mono text-[10px] text-[#0F7A73] font-semibold uppercase tracking-wider flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
                    Siswa Lulus Resmi
                  </span>
                </div>

                {/* Quote Body */}
                <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              {/* Footer: Student Profile */}
              <div className="pt-3 border-t border-[rgba(17,18,21,0.06)] flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 rounded-[3px] overflow-hidden border border-[rgba(17,18,21,0.1)] bg-[#f4f5f7] shrink-0">
                    <Image
                      src={t.avatar || "/assets/default-avatar.webp"}
                      alt={t.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#111215] leading-tight">{t.name}</h3>
                    <p className="text-[10px] text-[#9aa0a6] font-mono leading-tight">{t.status}</p>
                  </div>
                </div>
                <span className="font-mono text-[10px] text-[#0F7A73] font-medium uppercase tracking-wider shrink-0">
                  {t.pkg}
                </span>
              </div>
            </article>
          ))}
        </div>

      </div>

    </section>
  );
}
