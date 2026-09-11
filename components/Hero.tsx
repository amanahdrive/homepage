"use client";

import React from "react";
import { AmanahLogo } from "./Logo";
import { Shield, Award, Calendar, CheckCircle2, Star, ArrowRight, MessageCircle, MapPin, Users, Sparkles } from "lucide-react";
import { CONTACT_INFO, generateWhatsAppUrl } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden hero-glow">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[450px] bg-teal-600/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Top Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-950/70 border border-teal-500/30 text-teal-300 text-xs font-semibold shadow-inner backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Kursus Mengemudi Terpercaya No. #1 di Palembang</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
              Cepat Mahir, Tenang &amp;{" "}
              <span className="bg-gradient-to-r from-teal-400 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
                Percaya Diri
              </span>{" "}
              di Jalan Raya Palembang
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Didampingi instruktur ramah, sabar &amp; bersertifikat tanpa rasa grogi. Dilengkapi sistem{" "}
              <strong className="text-teal-300 font-semibold">Dual Pedal Safety (Rem Ganda)</strong> untuk garansi 100% aman, mobil ber-AC bersih, serta bantuan pengurusan{" "}
              <strong className="text-emerald-300 font-semibold">SIM A resmi</strong> sampai terbit.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya ingin mendaftar kursus mengemudi. Boleh minta info slot jadwal dan paketnya?")}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-base px-7 py-4 rounded-2xl shadow-xl shadow-teal-950/60 glow-button group"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent group-hover:scale-110 transition-transform" />
                <span>Daftar Sekarang (WhatsApp)</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#paket"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-900/80 hover:bg-slate-800 text-slate-200 hover:text-white font-semibold text-base px-6 py-4 rounded-2xl border border-slate-700/80 transition-all"
              >
                <span>Lihat Paket &amp; Biaya</span>
              </a>
            </div>

            {/* Micro Highlights */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Dual Pedal Rem Ganda</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bebas Pilih Jam (09–22 WIB)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-slate-300 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Antar-Jemput Palembang</span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Bento Feature Showcase */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Main Card */}
              <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-teal-500/30">
                {/* Background Banner Watermark */}
                <div className="absolute -top-10 -right-10 w-48 h-48 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />
                
                {/* Top Badge */}
                <div className="flex items-center justify-between pb-6 border-b border-slate-800">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-teal-900/60 border border-teal-400/30 flex items-center justify-center p-2">
                      <AmanahLogo className="w-9 h-9" />
                    </div>
                    <div>
                      <h2 className="text-white font-bold text-base leading-snug">Amanah Drive Palembang</h2>
                      <p className="text-xs text-teal-300 flex items-center gap-1">
                        <MapPin className="w-3 h-3" /> Area Layanan Kota Palembang
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                    Resmi &amp; Terverifikasi
                  </span>
                </div>

                {/* Stat Grid Inside Card */}
                <div className="grid grid-cols-2 gap-4 py-6">
                  <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800">
                    <div className="flex items-center gap-2 text-amber-400 mb-1">
                      <Star className="w-4 h-4 fill-amber-400" />
                      <span className="font-extrabold text-lg text-white">4.9 / 5.0</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Rating Kepuasan 1.000+ Siswa Lulus</p>
                  </div>

                  <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800">
                    <div className="flex items-center gap-2 text-teal-400 mb-1">
                      <Shield className="w-4 h-4" />
                      <span className="font-extrabold text-lg text-white">100% Safe</span>
                    </div>
                    <p className="text-[11px] text-slate-400">Proteksi Rem &amp; Kopling Ganda</p>
                  </div>
                </div>

                {/* Interactive Highlight Pill */}
                <div className="bg-gradient-to-r from-teal-950/80 to-slate-900/90 rounded-2xl p-4 border border-teal-500/20 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-300 font-medium flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-teal-400" /> Status Slot Jadwal:
                    </span>
                    <span className="text-emerald-400 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                      Terbuka Minggu Ini
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Tersedia 6 slot harian mulai pukul <strong>09.00 s/d 22.00 WIB</strong>. Instruktur siap mendampingi pagi, sore, hingga malam!
                  </p>
                </div>

                {/* Quick Link to WhatsApp inside Card */}
                <div className="pt-5">
                  <a
                    href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya mau cek ketersediaan slot instruktur untuk minggu ini.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 px-4 rounded-xl bg-teal-600/20 hover:bg-teal-600/30 border border-teal-500/40 text-teal-200 text-xs font-semibold flex items-center justify-center gap-2 transition-all text-center"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                    <span>Cek Ketersediaan Slot Jadwal via WhatsApp &rarr;</span>
                  </a>
                </div>

              </div>

              {/* Floating Badge 1 */}
              <div className="hidden sm:flex absolute -bottom-5 -left-6 bg-slate-900/95 border border-emerald-500/40 rounded-2xl p-3 shadow-2xl items-center gap-3 backdrop-blur-md">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Sertifikat Kelulusan Resmi</p>
                  <p className="text-[10px] text-slate-400">Langsung Diterbitkan Selesai Kursus</p>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="hidden sm:flex absolute -top-5 -right-4 bg-slate-900/95 border border-teal-500/40 rounded-2xl p-3 shadow-2xl items-center gap-3 backdrop-blur-md">
                <div className="w-9 h-9 rounded-xl bg-teal-500/20 text-teal-300 flex items-center justify-center font-bold">
                  <Users className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Instruktur Sabar &amp; Sopan</p>
                  <p className="text-[10px] text-slate-400">Tanpa Marah / Nada Tinggi</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
