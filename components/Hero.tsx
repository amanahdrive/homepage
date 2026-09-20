"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Calendar, CheckCircle2, Navigation, Sliders, Car, TrendingUp, Moon } from "lucide-react";
import { pushToDataLayer } from "@/lib/gtm";

export default function Hero() {
  const capabilities = [
    { icon: Navigation, label: "Manuver Stir", desc: "Haluan Siku & U-Turn" },
    { icon: ShieldCheck, label: "Pendamping Siaga", desc: "Instruktur Sabar Siaga" },
    { icon: Sliders, label: "Feeling Kopling", desc: "Halus Tanpa Hentakan" },
    { icon: Car, label: "Parkir Paralel", desc: "Rumus Sempit & Mall" },
    { icon: TrendingUp, label: "Tanjakan Flyover", desc: "Stop & Go Tanpa Mundur" },
    { icon: Moon, label: "Sesi Malam", desc: "Latihan s/d 22:00 WIB" },
  ];

  return (
    <section className="relative overflow-hidden bg-white pt-20 pb-10 sm:pt-28 sm:pb-16 lg:pt-36 lg:pb-20 border-b border-[rgba(17,18,21,0.08)]">
      
      {/* BACKGROUND HERO IMAGE WITH DIRECTIONAL EDGE FADES (OPTIMIZED FOR MOBILE & DESKTOP) */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[62%] xl:w-[58%] pointer-events-none z-0 overflow-hidden">
        <div className="relative w-full h-full">
          <Image
            src="/assets/amdri-banner.webp"
            alt="Amanah Drive Palembang — Kursus Mengemudi Mobil Resmi"
            fill
            priority
            quality={90}
            className="object-cover object-[85%_center] lg:object-right opacity-15 sm:opacity-25 lg:opacity-90 transition-opacity duration-700"
            sizes="(max-width: 1024px) 100vw, 65vw"
          />

          {/* Left Gradient Fade: Seamless transition into pure white canvas behind text */}
          <div className="absolute inset-y-0 left-0 w-24 sm:w-48 lg:w-80 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />

          {/* Top Gradient Fade: Smooth blend with navbar */}
          <div className="absolute inset-x-0 top-0 h-20 sm:h-36 bg-gradient-to-b from-white via-white/75 to-transparent z-10" />

          {/* Bottom Gradient Fade: Smooth blend with capabilities strip */}
          <div className="absolute inset-x-0 bottom-0 h-24 sm:h-44 bg-gradient-to-t from-white via-white/85 to-transparent z-10" />

          {/* Right Edge Softener (Desktop) */}
          <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/30 to-transparent z-10" />

          {/* Mobile Readability Shield */}
          <div className="lg:hidden absolute inset-0 bg-white/75 backdrop-blur-[1px] z-10" />
        </div>
      </div>

      {/* FOREGROUND HERO CONTENT: STRICTLY LEFT-TO-RIGHT (LTR) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Left Column */}
        <div className="max-w-2xl lg:max-w-2xl xl:max-w-3xl text-left space-y-4 sm:space-y-6">
          
          {/* Kicker Header */}
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0F7A73] shrink-0" />
            <span className="font-mono text-[10px] sm:text-xs text-[#0F7A73] font-semibold tracking-wider uppercase leading-snug">
              Standar Pelatihan Resmi &bull; Gratis Antar-Jemput Palembang
            </span>
          </div>

          {/* Main Headline (Left Aligned, Adaptive Fluid Typography) */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-[#111215] tracking-tight leading-[1.15] sm:leading-[1.08] [overflow-wrap:anywhere]">
            Pelatihan Mengemudi Presisi untuk Jalan Raya Palembang
          </h1>

          {/* Editorial Subtitle */}
          <p className="text-xs sm:text-sm lg:text-base text-[#45474d] max-w-xl leading-relaxed font-normal">
            Metode latihan bertahap dari nol mutlak hingga mahir di jalan protokol padat, tanjakan flyover, dan parkir mall. Didukung fasilitas gratis antar-jemput ke rumah &amp; instruktur sabar tanpa emosi.
          </p>

          {/* Action CTAs (Left Aligned, Stacked on Mobile, Inline on Desktop) */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1 sm:pt-2">
            <a
              href="#jadwal"
              onClick={() =>
                pushToDataLayer({
                  event: "cta_click",
                  cta_name: "daftar_slot_latihan",
                  cta_location: "hero",
                })
              }
              className="tech-btn-primary h-11 sm:h-auto py-2.5 px-5 text-center justify-center sm:w-auto gap-2"
            >
              <Calendar className="w-4 h-4 shrink-0" />
              <span>Daftar Slot Latihan</span>
            </a>

            <a
              href="#paket"
              onClick={() =>
                pushToDataLayer({
                  event: "cta_click",
                  cta_name: "lihat_pilihan_paket",
                  cta_location: "hero",
                })
              }
              className="tech-btn-ghost h-11 sm:h-auto py-2.5 px-5 text-center justify-center sm:w-auto gap-2"
            >
              <span>Lihat Pilihan Paket</span>
              <span className="text-[#0F7A73] font-bold">&rarr;</span>
            </a>
          </div>

          {/* Credibility Guarantee Checklist (Left Aligned, Clean Mobile Stacking) */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-2 sm:gap-x-5 pt-3 text-xs text-[#45474d] border-t border-[rgba(17,18,21,0.08)] max-w-xl">
            <span className="flex items-center gap-2 font-medium text-[#111215]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span>Gratis Antar-Jemput ke Rumah</span>
            </span>
            <span className="flex items-center gap-2 font-medium text-[#111215]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span>Mobil Prima &amp; Full AC Dingin</span>
            </span>
            <span className="flex items-center gap-2 font-medium text-[#111215]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
              <span>Instruktur Sabar Tanpa Bentak</span>
            </span>
          </div>

          {/* Unit Latihan Metadata Bar */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 font-mono text-[10px] sm:text-[11px] text-[#9aa0a6] uppercase tracking-wider">
            <span className="font-bold text-[#111215]">Armada Resmi:</span>
            <span className="text-[#45474d]">Ayla &bull; Agya &bull; Avanza &bull; Xenia &bull; Ertiga</span>
          </div>

        </div>

        {/* CORE CAPABILITIES: ARCHITECTURAL HAIRLINE GRID (ADAPTIVE 2-COL MOBILE / 3-COL TABLET / 6-COL DESKTOP) */}
        <div className="mt-10 sm:mt-16 lg:mt-20 pt-6 sm:pt-8">
          <div className="border-t border-l border-[rgba(17,18,21,0.08)] bg-white grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 rounded-[4px] overflow-hidden">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="border-r border-b border-[rgba(17,18,21,0.08)] p-3 sm:p-4 text-left flex flex-col justify-between hover:bg-[#f8f9fc] transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-4 h-4 text-[#45474d] group-hover:text-[#0F7A73] transition-colors shrink-0" />
                    <span className="font-mono text-[9px] text-[#9aa0a6]">0{idx + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#111215] leading-tight mb-0.5">
                      {item.label}
                    </h3>
                    <p className="text-[10px] text-[#45474d] font-mono leading-tight">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
