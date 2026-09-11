"use client";

import React, { useState } from "react";
import { Check, Star, MessageCircle, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
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
    <section id="paket" className="py-20 md:py-28 relative bg-[#061210]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5" /> Biaya Transparan Tanpa Biaya Tersembunyi
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilihan Paket Kursus &amp; Biaya Resmi
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Semua paket sudah termasuk mobil latihan ber-AC dingin, bensin (BBM), pendampingan instruktur sabar, proteksi rem ganda, dan sertifikat kelulusan. Tidak ada pungutan liar.
          </p>

          {/* Filter Segmented Control (8px radius) */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-[#0F7A73] text-white border border-teal-400/60 shadow-sm"
                  : "bg-[#0D2320] text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Semua Paket
            </button>
            <button
              type="button"
              onClick={() => setFilter("sim")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === "sim"
                  ? "bg-[#0F7A73] text-white border border-teal-400/60 shadow-sm"
                  : "bg-[#0D2320] text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Paket + SIM A Resmi
            </button>
            <button
              type="button"
              onClick={() => setFilter("nosim")}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                filter === "nosim"
                  ? "bg-[#0F7A73] text-white border border-teal-400/60 shadow-sm"
                  : "bg-[#0D2320] text-slate-400 hover:text-white border border-slate-800"
              }`}
            >
              Hanya Kursus Latihan
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid (12px console cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredPackages.map((pkg) => {
            const isPopular = pkg.popular;
            const waMsg = `Halo Kak Lia Admin Amanah Drive, saya tertarik mendaftar *${pkg.name}* (${
              pkg.price > 0 ? formatRupiah(pkg.price) : "Paket Khusus"
            }). Apakah ada jadwal kosong untuk minggu ini?`;

            return (
              <div
                key={pkg.id}
                className={`console-card p-6 flex flex-col justify-between relative transition-all ${
                  isPopular
                    ? "border-teal-500 bg-[#0A2421] shadow-md"
                    : "border-slate-800 bg-[#0D2320]"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-[4px] bg-[#0F7A73] text-white text-[10px] font-bold uppercase tracking-wider border border-teal-300/40 flex items-center gap-1 shadow-sm">
                    <Star className="w-3 h-3 fill-white" /> Paling Banyak Dipilih
                  </div>
                )}

                <div>
                  {/* Top Tag & Title */}
                  <div className="flex items-center justify-between mb-3 mt-1">
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-[4px] bg-teal-950 text-teal-300 border border-teal-500/30">
                      {pkg.tag}
                    </span>
                    {pkg.sessions > 0 && (
                      <span className="text-xs font-mono font-medium text-slate-400">
                        {pkg.sessions}x Pertemuan
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2">{pkg.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed mb-5 min-h-[34px]">
                    {pkg.desc}
                  </p>

                  {/* Price */}
                  <div className="pb-5 mb-5 border-b border-slate-800">
                    {pkg.normalPrice && (
                      <div className="text-xs text-slate-500 line-through mb-1 tabular-nums">
                        {formatRupiah(pkg.normalPrice)}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
                        {formatRupiah(pkg.price)}
                      </span>
                      {pkg.price > 0 && (
                        <span className="text-xs text-slate-400">/paket</span>
                      )}
                    </div>
                    <p className="text-[11px] text-teal-400 mt-1 font-medium">
                      Bisa bayar bertahap (DP saat daftar &amp; sisa pelunasan di sesi pertama)
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Fasilitas Termasuk:
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                          <div className="w-4 h-4 rounded-[4px] bg-teal-900/60 text-teal-300 flex items-center justify-center shrink-0 mt-0.5 border border-teal-500/30">
                            <Check className="w-3 h-3 stroke-[2.5]" />
                          </div>
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div>
                  <div className="mb-4 bg-[#091E1C] p-2.5 rounded-lg border border-slate-800 text-[11px] text-slate-300">
                    <span className="text-teal-300 font-semibold">Direkomendasikan untuk: </span>
                    {pkg.recommendedFor}
                  </div>

                  <a
                    href={generateWhatsAppUrl(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-3 px-4 rounded-lg font-semibold text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
                      isPopular
                        ? "bg-[#0F7A73] hover:bg-[#128B83] text-white border border-teal-400/50"
                        : "bg-[#091E1C] hover:bg-[#0D2320] text-slate-200 hover:text-white border border-slate-700"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                    <span>Daftar Paket Ini via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note banner below pricing */}
        <div className="mt-10 console-card p-4 sm:p-5 border border-teal-900/50 flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto">
          <div className="space-y-1 text-left">
            <p className="text-xs sm:text-sm text-slate-200 font-semibold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              Butuh paket custom atau ingin belajar menggunakan mobil matic pribadi?
            </p>
            <p className="text-xs text-slate-400">
              Instruktur kami siap menyesuaikan rute kantor, garasi rumah, dan materi sesuai kebutuhan spesifik Anda.
            </p>
          </div>
          <a
            href={generateWhatsAppUrl("Halo Kak Lia Admin Amanah Drive, saya ingin konsultasi paket khusus / pakai mobil sendiri.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold text-teal-300 hover:text-white underline underline-offset-2"
          >
            Konsultasi Gratis via WhatsApp &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}

