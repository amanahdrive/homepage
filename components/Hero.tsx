"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Calendar, CheckCircle2, Navigation, Sliders, Car, TrendingUp, Moon, Sparkles } from "lucide-react";
import { pushToDataLayer } from "@/lib/gtm";

export default function Hero() {
  const capabilities = [
    { icon: Navigation, label: "Manuver Stir", desc: "Haluan Siku & U-Turn" },
    { icon: ShieldCheck, label: "Rem Pengaman", desc: "Dual Safety Assist" },
    { icon: Sliders, label: "Feeling Kopling", desc: "Halus Tanpa Hentakan" },
    { icon: Car, label: "Parkir Paralel", desc: "Rumus Sempit & Mall" },
    { icon: TrendingUp, label: "Tanjakan Flyover", desc: "Stop & Go Tanpa Mundur" },
    { icon: Moon, label: "Sesi Malam", desc: "Latihan s/d 22:00 WIB" },
  ];

  return (
    <section className="pt-24 pb-12 sm:pt-36 sm:pb-20 relative overflow-x-clip bg-gradient-to-b from-[#ffffff] via-[#f8f9fc] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Header */}
        <div className="text-center max-w-4xl mx-auto mb-7 sm:mb-14 space-y-3.5 sm:space-y-6">
          <div className="flex justify-center">
            <div className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#0F7A73] flex items-center gap-1.5 sm:gap-2">
              <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Kursus Mengemudi Mobil Palembang &bull; Gratis Antar-Jemput</span>
            </div>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight leading-[1.18] sm:leading-[1.12]">
            Pelatihan Mengemudi Presisi untuk Jalan Raya Palembang
          </h1>

          <p className="text-xs sm:text-base text-[#45474d] max-w-2xl mx-auto leading-relaxed">
            Metode latihan bertahap dari nol mutlak hingga mahir di jalan protokol padat, tanjakan flyover, dan parkir mall. Didukung fasilitas gratis antar-jemput ke rumah &amp; instruktur sabar tanpa emosi.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3 pt-1 sm:pt-2">
            <a
              href="#jadwal"
              onClick={() =>
                pushToDataLayer({
                  event: "cta_click",
                  cta_name: "daftar_slot_latihan",
                  cta_location: "hero",
                })
              }
              className="antigravity-btn-primary w-full sm:w-auto text-xs sm:text-sm py-2.5 px-4 sm:py-3 sm:px-6 shadow-sm gap-2 rounded-lg"
            >
              <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Daftar Slot Latihan</span>
            </a>

            <a
              href="#kalkulator"
              onClick={() =>
                pushToDataLayer({
                  event: "cta_click",
                  cta_name: "simulasi_biaya_dp",
                  cta_location: "hero",
                })
              }
              className="antigravity-btn-secondary w-full sm:w-auto text-xs sm:text-sm py-2.5 px-4 sm:py-3 sm:px-6 gap-2 rounded-lg"
            >
              <span>Simulasi Biaya &amp; DP</span>
              <span className="text-[#0F7A73] font-bold">&rarr;</span>
            </a>
          </div>

          {/* Guarantee Items */}
          <div className="flex flex-wrap items-center justify-center gap-y-1.5 gap-x-4 sm:gap-x-6 pt-1 sm:pt-2 text-[11px] sm:text-xs text-[#45474d]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Gratis Antar-Jemput ke Rumah</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Pedal Rem Pengaman Tambahan</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Instruktur Sabar Tanpa Nada Tinggi</span>
            </span>
          </div>
        </div>

        {/* Hero Image Showcase (amdri-banner.webp) */}
        <div className="max-w-5xl mx-auto mb-7 sm:mb-14">
          <div className="p-1.5 sm:p-2.5 bg-white shadow-sm border border-[rgba(33,34,38,0.08)] rounded-xl">
            <div className="relative aspect-[2752/1536] sm:aspect-[16/9] w-full rounded-lg overflow-hidden bg-[#0F7A73]/5 border border-[rgba(33,34,38,0.04)]">
              <Image
                src="/assets/amdri-banner.webp"
                alt="Amanah Drive Palembang — Kursus Mengemudi Mobil Gratis Antar Jemput"
                fill
                priority
                quality={90}
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              />
            </div>

            {/* Clean Sub-Banner Meta Bar */}
            <div className="mt-2 pt-1.5 px-1 border-t border-[rgba(33,34,38,0.06)] flex flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-[#45474d]">
              <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap justify-center sm:justify-start">
                <span className="font-mono text-[10px] sm:text-[11px] text-[#121317] font-bold">
                  Armada Latihan Resmi:
                </span>
                <span className="text-[10px] sm:text-[11px] text-[#45474d]">
                  Daihatsu Ayla &bull; Toyota Agya &bull; Toyota Avanza &bull; Daihatsu Xenia &bull; Suzuki Ertiga
                </span>
              </div>

              <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-[11px] font-mono text-[#0F7A73] shrink-0">
                <span className="font-semibold">Dual Safety Assist</span>
                <span>&bull;</span>
                <span className="font-semibold">Full AC Dingin</span>
                <span>&bull;</span>
                <span className="font-semibold text-[#121317]">CV Amanah Drive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Capabilities Strip (Clean 12px Grid) */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 sm:gap-3">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-2 sm:p-3 bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)] rounded-lg text-center flex flex-col items-center justify-center group hover:border-[#0F7A73]/30 transition-all"
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#121317] group-hover:text-[#0F7A73] transition-colors mb-1 sm:mb-1.5" />
                  <span className="text-[11px] sm:text-xs font-bold text-[#121317] leading-tight mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-[9px] sm:text-[10px] text-[#45474d] font-mono leading-tight">
                    {item.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
