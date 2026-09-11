"use client";

import React from "react";
import Image from "next/image";
import { Shield, Award, Calendar, CheckCircle2, ArrowRight, MessageCircle, MapPin, Users, Sparkles } from "lucide-react";
import { STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-28 overflow-hidden">
      {/* Subtle hairline grid background */}
      <div className="absolute inset-0 console-grid-pattern opacity-60 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Authentic Copy & Trust Foundation */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Trust Pill with Official Seal */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#0E2522] border border-teal-500/30 text-teal-300 text-xs font-semibold shadow-sm">
              <div className="relative w-4 h-4 shrink-0">
                <Image
                  src="/assets/cap-amanah.png"
                  alt="Stempel Resmi"
                  width={16}
                  height={16}
                  className="object-contain"
                />
              </div>
              <span>Lembaga Kursus Mengemudi Terpercaya Kota Palembang</span>
            </div>

            {/* Main Headline (Strictly Roman font-style) */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.15] tracking-tight">
              Cepat Mahir, Tenang &amp;{" "}
              <span className="text-[#14B8A6]">
                Percaya Diri
              </span>{" "}
              di Jalan Raya Palembang
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              Didampingi instruktur beretika sabar &amp; bersertifikat tanpa rasa grogi. Dilengkapi sistem{" "}
              <strong className="text-teal-300 font-semibold">Dual Pedal Safety (Rem &amp; Kopling Ganda)</strong> untuk jaminan 100% aman, mobil ber-AC bersih terawat, serta pendampingan pembuatan{" "}
              <strong className="text-emerald-300 font-semibold">SIM A resmi</strong> tuntas sampai terbit.
            </p>

            {/* Action Buttons (8px radius standards) */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <a
                href={generateWhatsAppUrl("Halo Kak Lia (Amanah Drive), saya ingin mendaftar kursus mengemudi. Boleh minta info slot jadwal dan rekomendasi paketnya?")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 bg-[#0F7A73] hover:bg-[#128B83] text-white font-semibold text-sm px-6 py-3.5 rounded-lg border border-teal-500/40 shadow-sm transition-all"
              >
                <div className="relative w-5 h-5 rounded-full overflow-hidden border border-teal-200 shrink-0">
                  <Image
                    src={STUDENT_CARE.avatar}
                    alt={STUDENT_CARE.name}
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <span>Daftar via WhatsApp (Kak Lia)</span>
                <ArrowRight className="w-4 h-4 ml-0.5" />
              </a>

              <a
                href="#paket"
                className="inline-flex items-center justify-center gap-2 bg-[#0D2320] hover:bg-[#13322E] text-slate-200 hover:text-white font-semibold text-sm px-6 py-3.5 rounded-lg border border-slate-700/80 transition-all"
              >
                <span>Lihat Pilihan Paket &amp; Biaya</span>
              </a>
            </div>

            {/* Micro Pillars */}
            <div className="pt-2 grid grid-cols-2 sm:grid-cols-3 gap-3">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dual Pedal Rem Ganda</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>6 Slot Jam (09–22 WIB)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Antar-Jemput Palembang</span>
              </div>
            </div>

          </div>

          {/* Right Column: Split Studio Visual Proof (Real Banner, Official Seal & Live Console) */}
          <div className="lg:col-span-5">
            <div className="space-y-4">
              
              {/* Primary Photographic Console Card */}
              <div className="console-card p-4 sm:p-5 border border-teal-900/60 overflow-hidden relative">
                
                {/* Real Asset Banner of Training Fleet */}
                <div className="relative w-full h-48 sm:h-56 rounded-[8px] overflow-hidden border border-teal-500/20 mb-4 bg-slate-900">
                  <Image
                    src="/assets/amdri-banner.jpg"
                    alt="Armada & Latihan Mengemudi Amanah Drive Palembang"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071513] via-transparent to-transparent opacity-80" />
                  
                  {/* Overlay Tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-bold bg-[#071513]/90 text-teal-300 border border-teal-500/30 backdrop-blur-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-teal-400" />
                      Lintasan Belajar Kota Palembang
                    </span>
                    <span className="px-2 py-0.5 rounded-[4px] text-[10px] font-bold bg-emerald-950/90 text-emerald-300 border border-emerald-500/40">
                      100% Rem Ganda
                    </span>
                  </div>
                </div>

                {/* Metrics & Operational Highlights */}
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="bg-[#091E1C] p-3 rounded-lg border border-teal-900/50">
                    <span className="text-[11px] text-slate-400 block mb-0.5">Akreditasi &amp; Kelulusan</span>
                    <span className="text-base font-bold text-white tabular-nums flex items-center gap-1.5">
                      <Award className="w-4 h-4 text-amber-400" />
                      1.000+ Lulusan
                    </span>
                  </div>

                  <div className="bg-[#091E1C] p-3 rounded-lg border border-teal-900/50">
                    <span className="text-[11px] text-slate-400 block mb-0.5">SOP Instruktur</span>
                    <span className="text-base font-bold text-white flex items-center gap-1.5">
                      <Shield className="w-4 h-4 text-teal-400" />
                      Anti-Bentak
                    </span>
                  </div>
                </div>

                {/* Live Slot Status Indicator */}
                <div className="bg-[#091E1C] p-3 rounded-lg border border-teal-500/25 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-300">
                    <Calendar className="w-4 h-4 text-teal-400 shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Status Slot Minggu Ini:</p>
                      <p className="text-[11px] text-slate-400">Pagi, Sore &amp; Malam Siap Booking</p>
                    </div>
                  </div>
                  <span className="text-xs font-bold text-emerald-400 bg-emerald-950/80 px-2 py-1 rounded-[6px] border border-emerald-500/30 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    Tersedia
                  </span>
                </div>

                {/* Quick Consultation CTA */}
                <div className="pt-3">
                  <a
                    href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya ketersediaan slot jadwal mengemudi minggu ini.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-3 rounded-lg bg-teal-900/40 hover:bg-teal-900/60 border border-teal-500/30 text-teal-200 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cek Jadwal &amp; Konsultasi via WhatsApp &rarr;</span>
                  </a>
                </div>

              </div>

              {/* Official Seal Guarantee Strip */}
              <div className="console-card p-3 border border-teal-900/50 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-8 h-8 shrink-0">
                    <Image
                      src="/assets/cap-amanah.png"
                      alt="Stempel Basah Amanah Drive"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                  </div>
                  <div className="text-left">
                    <p className="text-xs font-bold text-white">Sertifikat Kelulusan Resmi Terverifikasi</p>
                    <p className="text-[11px] text-slate-400">Diterbitkan langsung beserta buku evaluasi belajar</p>
                  </div>
                </div>
                <span className="text-[10px] text-teal-300 font-bold px-2 py-0.5 rounded-[4px] bg-teal-950 border border-teal-500/30 shrink-0">
                  Resmi
                </span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

