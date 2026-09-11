import React from "react";
import Image from "next/image";
import { generateWhatsAppUrl, STUDENT_CARE } from "@/lib/constants";
import { ShieldCheck, MessageCircle, Calendar, CheckCircle2, Navigation, Sliders, Car, TrendingUp, Moon, Award } from "lucide-react";

export default function Hero() {
  const capabilities = [
    { icon: Navigation, label: "Manuver Stir", desc: "Haluan Siku & U-Turn" },
    { icon: ShieldCheck, label: "Rem Ganda", desc: "100% Dual Pedal Safety" },
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
              <span>Akademi Mengemudi Palembang • Dual Pedal Safety</span>
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#121317] tracking-tight leading-[1.12]">
            Pelatihan Mengemudi Presisi untuk Jalan Raya Palembang
          </h1>

          <p className="text-base sm:text-lg text-[#45474d] max-w-2xl mx-auto leading-relaxed">
            Metode latihan bertahap dari nol mutlak hingga mahir di jalan protokol padat, tanjakan flyover, dan parkir mall. Didukung instruktur sabar tanpa emosi &amp; pendampingan SIM A resmi.
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
              <span>100% Rem Ganda Instruktur</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>Instruktur Sabar Tanpa Nada Tinggi</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
              <span>Pendampingan SIM A Sampai Terbit</span>
            </span>
          </div>
        </div>

        {/* Antigravity Capability Bouncers Strip */}
        <div className="mb-16">
          <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 sm:gap-4 max-w-4xl mx-auto">
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

        {/* Antigravity Banner Media Showcase */}
        <div className="max-w-5xl mx-auto">
          <div className="antigravity-card p-2 sm:p-3 overflow-hidden">
            <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-xl overflow-hidden bg-[#f0f1f5] border border-[rgba(33,34,38,0.06)]">
              <Image
                src="/assets/amdri-banner.jpg"
                alt="Armada Mobil Latihan Amanah Drive Palembang"
                fill
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Gradient Overlay for subtle readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121317]/80 via-transparent to-black/20 pointer-events-none" />

              {/* Official Seal Stamp (Cap Amanah Drive) */}
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md rounded-xl p-2 sm:p-2.5 border border-white/60 shadow-lg flex items-center gap-2.5">
                <div className="relative w-9 h-9 sm:w-11 sm:h-11 shrink-0">
                  <Image
                    src="/assets/cap-amanah.png"
                    alt="Cap Stempel Resmi Amanah Drive"
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="text-left pr-1">
                  <p className="text-[10px] font-mono text-[#0F7A73] uppercase font-bold leading-none">Resmi Terdaftar</p>
                  <p className="text-xs font-extrabold text-[#121317] leading-tight">Palembang Driving Academy</p>
                </div>
              </div>

              {/* Bottom Info Bar inside Banner */}
              <div className="absolute bottom-4 left-4 right-4 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-3 text-white">
                <div className="max-w-md">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider bg-white/20 backdrop-blur-md px-2.5 py-0.5 rounded-full mb-1.5 border border-white/30">
                    Armada Resmi Dual Pedal Safety
                  </span>
                  <p className="text-sm sm:text-base font-bold text-white drop-shadow-sm">
                    Daihatsu Ayla &amp; Xenia ber-AC dingin dengan pedal rem &amp; kopling ganda di sisi instruktur.
                  </p>
                </div>

                <a
                  href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya jadwal latihan minggu ini.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="antigravity-btn-primary bg-white text-[#121317] hover:bg-[#f0f1f5] text-xs py-2 px-4 shrink-0 shadow-lg"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#0F7A73] fill-[#0F7A73]/20 mr-1.5" />
                  <span>Tanya Jadwal via WA</span>
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
