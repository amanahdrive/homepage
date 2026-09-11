"use client";

import React, { useState } from "react";
import { Check, Star, MessageCircle, Sparkles, ArrowRight } from "lucide-react";
import { PACKAGES, generateWhatsAppUrl } from "@/lib/constants";

export default function PricingSection() {
  const [filter, setFilter] = useState<"all" | "sim" | "nosim">("all");

  const filteredPackages = PACKAGES.filter((pkg) => {
    if (filter === "sim") return pkg.hasSim;
    if (filter === "nosim") return !pkg.hasSim && pkg.id !== "custom";
    return true;
  });

  const formatRupiah = (val: number) => {
    if (val === 0) return "Konsultasi Khusus";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section id="paket" className="py-24 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Investasi Keahlian Seumur Hidup
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Pilihan Paket &amp; Biaya Transparan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Semua paket sudah termasuk mobil latihan ber-AC, bensin, instruktur sabar, dan sistem keselamatan pedal ganda. Tanpa biaya tersembunyi!
          </p>

          {/* Filter Pills */}
          <div className="flex items-center justify-center gap-2 pt-4">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === "all"
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-900/40"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Semua Paket
            </button>
            <button
              onClick={() => setFilter("sim")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === "sim"
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-900/40"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Paket + SIM A Resmi
            </button>
            <button
              onClick={() => setFilter("nosim")}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                filter === "nosim"
                  ? "bg-teal-600 text-white shadow-lg shadow-teal-900/40"
                  : "bg-slate-900 text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Hanya Kursus Latihan
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {filteredPackages.map((pkg) => {
            const isPopular = pkg.popular;
            const waMsg = `Halo Admin Amanah Drive, saya tertarik mendaftar *${pkg.name}* (${
              pkg.price > 0 ? formatRupiah(pkg.price) : "Paket Khusus"
            }). Apakah ada jadwal kosong untuk minggu ini?`;

            return (
              <div
                key={pkg.id}
                className={`glass-card rounded-3xl p-7 flex flex-col justify-between relative transition-all duration-300 ${
                  isPopular
                    ? "border-2 border-teal-400/80 shadow-2xl shadow-teal-950/80 lg:-translate-y-2 bg-gradient-to-b from-teal-950/60 to-slate-950"
                    : "border border-slate-800/80 hover:border-teal-500/40"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-black uppercase tracking-wider shadow-lg flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 fill-white" /> Paling Direkomendasikan
                  </div>
                )}

                <div>
                  {/* Top Tag & Title */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-bold px-2.5 py-1 rounded-lg bg-teal-950/80 text-teal-300 border border-teal-500/30">
                      {pkg.tag}
                    </span>
                    {pkg.sessions > 0 && (
                      <span className="text-xs font-semibold text-slate-400">
                        {pkg.sessions}x Sesi Latihan
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed mb-6 min-h-[36px]">
                    {pkg.desc}
                  </p>

                  {/* Price */}
                  <div className="pb-6 mb-6 border-b border-slate-800/80">
                    {pkg.normalPrice && (
                      <div className="text-xs text-slate-500 line-through mb-1">
                        {formatRupiah(pkg.normalPrice)}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                        {formatRupiah(pkg.price)}
                      </span>
                      {pkg.price > 0 && (
                        <span className="text-xs text-slate-400">/paket tuntas</span>
                      )}
                    </div>
                    <p className="text-[11px] text-teal-400/90 mt-1 font-medium">
                      Bisa bayar bertahap (DP saat pendaftaran)
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-300">
                      Fasilitas Termasuk:
                    </p>
                    <ul className="space-y-2.5">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div className="w-4 h-4 rounded-full bg-teal-500/20 text-teal-300 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5 stroke-[3]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Action */}
                <div>
                  <div className="mb-4 bg-slate-900/60 p-2.5 rounded-xl border border-slate-800/60 text-[11px] text-slate-400">
                    <span className="text-slate-300 font-semibold">Rekomendasi: </span>
                    {pkg.recommendedFor}
                  </div>

                  <a
                    href={generateWhatsAppUrl(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
                      isPopular
                        ? "bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white shadow-teal-900/50 glow-button"
                        : "bg-slate-900 hover:bg-slate-800 text-white border border-slate-700/80"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                    <span>Daftar Paket Ini via WA</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note banner below pricing */}
        <div className="mt-12 bg-teal-950/40 border border-teal-500/20 rounded-2xl p-4 sm:p-6 text-center max-w-2xl mx-auto space-y-2">
          <p className="text-xs sm:text-sm text-slate-300 font-medium">
            💡 <strong>Butuh penyesuaian khusus atau ingin latihan pakai mobil matic sendiri?</strong>
          </p>
          <p className="text-xs text-slate-400">
            Tim kami siap menyesuaikan materi dan rute latihan sesuai kebutuhan khusus Anda.
          </p>
          <div className="pt-2">
            <a
              href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya mau tanya paket konsultasi khusus.")}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-teal-300 hover:text-teal-200 underline"
            >
              Konsultasikan Kebutuhan Anda Gratis &rarr;
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
