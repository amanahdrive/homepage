import React from "react";
import Image from "next/image";
import { ShieldCheck, Calendar, CheckCircle2, Navigation, Sliders, Car, TrendingUp, Moon } from "lucide-react";

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
    <section className="pt-32 sm:pt-36 pb-20 relative overflow-x-clip bg-gradient-to-b from-[#ffffff] via-[#f8f9fc] to-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antigravity Welcome Header */}
        <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16 space-y-6">
          <div className="flex justify-center">
            <span className="antigravity-chip">
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span>Kursus Mengemudi Mobil Palembang • Gratis Antar-Jemput</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#121317] tracking-tight leading-[1.12]">
            Pelatihan Mengemudi Presisi untuk Jalan Raya Palembang
          </h1>

          <p className="text-base sm:text-lg text-[#45474d] max-w-2xl mx-auto leading-relaxed">
            Metode latihan bertahap dari nol mutlak hingga mahir di jalan protokol padat, tanjakan flyover, dan parkir mall. Didukung fasilitas gratis antar-jemput ke rumah &amp; instruktur sabar tanpa emosi.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <a
              href="#jadwal"
              className="antigravity-btn-primary w-full sm:w-auto text-sm py-3 px-7 shadow-sm gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>Daftar Slot Latihan</span>
            </a>

            <a
              href="#kalkulator"
              className="antigravity-btn-secondary w-full sm:w-auto text-sm py-3 px-7 gap-2"
            >
              <span>Simulasi Biaya &amp; DP</span>
              <span className="text-[#0F7A73] font-bold">&rarr;</span>
            </a>
          </div>

          {/* Guarantee Badges */}
          <div className="flex flex-wrap items-center justify-center gap-y-2 gap-x-6 pt-4 text-xs text-[#45474d]">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>Gratis Antar-Jemput ke Rumah</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>Pedal Rem Pengaman Tambahan</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>Instruktur Sabar Tanpa Nada Tinggi</span>
            </span>
          </div>
        </div>

        {/* Hero Image Showcase (amdri-banner.jpg) */}
        <div className="max-w-5xl mx-auto mb-14 sm:mb-16">
          <div className="antigravity-card p-2 sm:p-3 overflow-hidden bg-white shadow-[0_16px_48px_-12px_rgba(0,0,0,0.08)] border border-[rgba(33,34,38,0.08)] rounded-2xl sm:rounded-3xl">
            <div className="relative aspect-[2752/1536] sm:aspect-[16/9] w-full rounded-xl sm:rounded-2xl overflow-hidden bg-[#0F7A73]/5 border border-[rgba(33,34,38,0.04)]">
              <Image
                src="/assets/amdri-banner.jpg"
                alt="Amanah Drive Palembang — Kursus Mengemudi Mobil Gratis Antar Jemput"
                fill
                priority
                quality={95}
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.01]"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1100px"
              />
            </div>

            {/* Clean Sub-Banner Meta Bar */}
            <div className="mt-2.5 pt-2 px-2 border-t border-[rgba(33,34,38,0.06)] flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-[#45474d]">
              <div className="flex items-center gap-2 flex-wrap justify-center sm:justify-start">
                <span className="w-2 h-2 rounded-full bg-[#10B981] shrink-0" />
                <span className="font-mono text-[11px] text-[#121317] font-bold">
                  Armada Latihan Resmi:
                </span>
                <span className="text-[11px] text-[#45474d]">
                  Daihatsu Ayla &bull; Toyota Agya &bull; Toyota Avanza &bull; Daihatsu Xenia &bull; Suzuki Ertiga
                </span>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-mono text-[#0F7A73] shrink-0">
                <span className="font-semibold">Dual Safety Assist</span>
                <span>&bull;</span>
                <span className="font-semibold">Full AC Dingin</span>
                <span>&bull;</span>
                <span className="font-semibold text-[#121317]">CV Amanah Drive</span>
              </div>
            </div>
          </div>
        </div>

        {/* Antigravity Capability Bouncers Strip */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4">
            {capabilities.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center group cursor-default">
                  <div className="antigravity-bouncer w-16 h-16 sm:w-20 sm:h-20 mb-2">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-[#121317] group-hover:text-[#0F7A73] transition-colors" />
                  </div>
                  <span className="text-xs font-bold text-[#121317] leading-tight mb-0.5">
                    {item.label}
                  </span>
                  <span className="text-[10px] text-[#45474d] font-mono leading-tight">
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
