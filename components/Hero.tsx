"use client";

import React from "react";
import Image from "next/image";
import { ShieldCheck, Calendar, CheckCircle2, Navigation, Sliders, Car, TrendingUp, Moon, Sparkles } from "lucide-react";
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
    <section className="pt-20 pb-12 sm:pt-28 sm:pb-20 relative overflow-x-clip bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Welcome Header */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-14 space-y-4 sm:space-y-6">
          <div className="flex items-center justify-center">
            <span className="font-mono text-[11px] sm:text-xs text-[#0F7A73] font-semibold tracking-wider uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#0F7A73]" />
              <span>Standar Pelatihan Resmi &bull; Gratis Antar-Jemput Palembang</span>
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#111215] tracking-tight leading-[1.12] sm:leading-[1.08] [overflow-wrap:anywhere]">
            Pelatihan Mengemudi Presisi untuk Jalan Raya Palembang
          </h1>

          <p className="text-xs sm:text-base text-[#45474d] max-w-2xl mx-auto leading-relaxed font-normal">
            Metode latihan bertahap dari nol mutlak hingga mahir di jalan protokol padat, tanjakan flyover, dan parkir mall. Didukung fasilitas gratis antar-jemput ke rumah &amp; instruktur sabar tanpa emosi.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#jadwal"
              onClick={() =>
                pushToDataLayer({
                  event: "cta_click",
                  cta_name: "daftar_slot_latihan",
                  cta_location: "hero",
                })
              }
              className="tech-btn-primary w-full sm:w-auto gap-2"
            >
              <Calendar className="w-4 h-4" />
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
              className="tech-btn-ghost w-full sm:w-auto gap-2"
            >
              <span>Lihat Pilihan Paket</span>
              <span className="text-[#0F7A73] font-bold">&rarr;</span>
            </a>
          </div>

          {/* Guarantee Items */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-2 text-[11px] sm:text-xs text-[#45474d]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Gratis Antar-Jemput ke Rumah</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Kondisi Mobil Prima &amp; AC Dingin</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Instruktur Sabar Tanpa Nada Tinggi</span>
            </span>
          </div>
        </div>

        {/* Hero Image Showcase (Cinematic Architectural Presentation) */}
        <div className="max-w-5xl mx-auto mb-10 sm:mb-16">
          <div className="relative aspect-[2752/1536] sm:aspect-[16/9] w-full rounded-[4px] overflow-hidden border border-[rgba(17,18,21,0.12)] bg-[#f8f9fc]">
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

          {/* Clean Sub-Banner Technical Bar */}
          <div className="mt-2.5 pt-2 border-t border-[rgba(17,18,21,0.08)] flex flex-col sm:flex-row items-center justify-between gap-2 text-[10px] sm:text-xs text-[#45474d]">
            <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
              <span className="font-mono text-[10px] text-[#111215] font-bold uppercase tracking-wider">
                Unit Latihan:
              </span>
              <span className="text-[11px] text-[#45474d]">
                Daihatsu Ayla &bull; Toyota Agya &bull; Toyota Avanza &bull; Daihatsu Xenia &bull; Suzuki Ertiga
              </span>
            </div>

            <div className="flex items-center gap-3 text-[10px] sm:text-[11px] font-mono text-[#0F7A73] shrink-0">
              <span className="font-semibold">Pendampingan Penuh</span>
              <span>&bull;</span>
              <span className="font-semibold">Full AC Dingin</span>
              <span>&bull;</span>
              <span className="font-semibold text-[#111215]">CV Amanah Drive</span>
            </div>
          </div>
        </div>

        {/* Core Capabilities: Open Architectural Spec Strip (Zero Box Containers) */}
        <div className="max-w-6xl mx-auto border-y border-[rgba(17,18,21,0.08)]">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-y sm:divide-y-0 sm:divide-x divide-[rgba(17,18,21,0.08)]">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-3 sm:p-4 text-left flex flex-col justify-between hover:bg-[#f8f9fc] transition-colors group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <Icon className="w-4 h-4 text-[#45474d] group-hover:text-[#0F7A73] transition-colors" />
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
