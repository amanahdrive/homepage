"use client";

import React, { useState } from "react";
import { Check, Star, MessageCircle, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { PACKAGES, generateWhatsAppUrl } from "@/lib/constants";
import { trackWhatsAppLead, trackPackageFilter } from "@/lib/gtm";

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
    <section id="paket" className="py-10 sm:py-24 relative bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#0F7A73]">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Biaya Transparan Tanpa Biaya Tersembunyi</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#121317] tracking-tight leading-snug">
            Pilihan Paket Kursus &amp; Biaya Resmi
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Semua paket sudah termasuk mobil ber-AC dingin, bensin (BBM), pendampingan penuh instruktur sabar tanpa emosi, serta sertifikat kelulusan resmi Amanah Drive. Bebas biaya tersembunyi.
          </p>

          {/* Segmented Filter Control */}
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 pt-1 sm:pt-2">
            <button
              type="button"
              onClick={() => {
                setFilter("all");
                trackPackageFilter("all");
              }}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all ${
                filter === "all"
                  ? "bg-[#121317] text-white shadow-sm"
                  : "bg-[#f0f1f5] text-[#45474d] hover:text-[#121317]"
              }`}
            >
              Semua Paket
            </button>
            <button
              type="button"
              onClick={() => {
                setFilter("sim");
                trackPackageFilter("with_sim");
              }}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all ${
                filter === "sim"
                  ? "bg-[#121317] text-white shadow-sm"
                  : "bg-[#f0f1f5] text-[#45474d] hover:text-[#121317]"
              }`}
            >
              Paket + SIM A Resmi
            </button>
            <button
              type="button"
              onClick={() => {
                setFilter("nosim");
                trackPackageFilter("course_only");
              }}
              className={`px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-lg text-[11px] sm:text-xs font-semibold transition-all ${
                filter === "nosim"
                  ? "bg-[#121317] text-white shadow-sm"
                  : "bg-[#f0f1f5] text-[#45474d] hover:text-[#121317]"
              }`}
            >
              Hanya Kursus Latihan
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6 items-stretch">
          {filteredPackages.map((pkg) => {
            const isPopular = pkg.popular;
            const waMsg = `Halo Kak Lia Admin Amanah Drive, saya tertarik mendaftar *${pkg.name}* (${
              pkg.price > 0 ? formatRupiah(pkg.price) : "Paket Khusus"
            }). Apakah ada jadwal kosong untuk minggu ini?`;

            return (
              <div
                key={pkg.id}
                className={`antigravity-card p-4 sm:p-6 flex flex-col justify-between relative transition-all ${
                  isPopular
                    ? "border-[#121317] shadow-lg ring-1 ring-[#121317]"
                    : "border-[rgba(33,34,38,0.08)] bg-white"
                }`}
              >
                {/* Popular Badge */}
                {isPopular && (
                  <div className="absolute -top-3 left-4 sm:left-6 px-2 sm:px-2.5 py-0.5 rounded-md bg-[#121317] text-white text-[9px] sm:text-[10px] font-mono font-bold uppercase tracking-wider flex items-center gap-1 shadow-sm">
                    <Star className="w-2.5 h-2.5 sm:w-3 sm:h-3 fill-amber-400 text-amber-400" /> Paling Banyak Dipilih
                  </div>
                )}

                <div>
                  {/* Top Tag & Title */}
                  <div className="flex items-center justify-between mb-2 sm:mb-3 mt-0.5 sm:mt-1">
                    <span className="text-[10px] sm:text-[11px] font-mono font-bold px-2 py-0.5 rounded-md bg-[#E6F4F2] text-[#0F7A73]">
                      {pkg.tag}
                    </span>
                    {pkg.sessions > 0 && (
                      <span className="text-[11px] sm:text-xs font-mono font-medium text-[#45474d]">
                        {pkg.sessions}x Pertemuan
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#121317] mb-1 sm:mb-2">{pkg.name}</h3>
                  <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-3 sm:mb-5 min-h-0 sm:min-h-[40px]">
                    {pkg.desc}
                  </p>

                  {/* Price */}
                  <div className="pb-3.5 sm:pb-5 mb-3.5 sm:mb-5 border-b border-[rgba(33,34,38,0.06)]">
                    {pkg.normalPrice && (
                      <div className="text-[11px] sm:text-xs text-[#9aa0a6] line-through mb-0.5 sm:mb-1 tabular-nums">
                        {formatRupiah(pkg.normalPrice)}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-2xl sm:text-3xl font-extrabold text-[#121317] tracking-tight tabular-nums">
                        {formatRupiah(pkg.price)}
                      </span>
                      {pkg.price > 0 && (
                        <span className="text-xs text-[#45474d]">/paket</span>
                      )}
                    </div>
                    <p className="text-[10px] sm:text-[11px] text-[#0F7A73] mt-1 font-medium">
                      Bisa bayar bertahap (DP saat pendaftaran &amp; pelunasan di sesi pertama)
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 sm:space-y-2.5 mb-4 sm:mb-6">
                    <p className="text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider text-[#45474d]">
                      Fasilitas Termasuk:
                    </p>
                    <ul className="space-y-1.5 sm:space-y-2">
                      {pkg.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-[#45474d]">
                          <Check className="w-3.5 h-3.5 text-[#0F7A73] stroke-[2.5] shrink-0 mt-0.5" />
                          <span className="font-medium leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Bottom Actions */}
                <div>
                  <div className="mb-3 sm:mb-4 bg-[#f8f9fc] p-2.5 sm:p-3 rounded-lg border border-[rgba(33,34,38,0.06)] text-[10px] sm:text-[11px] text-[#45474d]">
                    <span className="text-[#121317] font-bold">Direkomendasikan: </span>
                    {pkg.recommendedFor}
                  </div>

                  <a
                    href={generateWhatsAppUrl(waMsg)}
                    onClick={() =>
                      trackWhatsAppLead({
                        lead_source: "pricing_card",
                        button_text: "Daftar via WhatsApp",
                        package_id: pkg.id,
                        package_name: pkg.name,
                        package_price: pkg.price,
                        sessions: pkg.sessions,
                        has_sim: pkg.hasSim,
                      })
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full py-2.5 px-4 rounded-lg font-medium text-xs flex items-center justify-center gap-2 transition-all shadow-sm ${
                      isPopular
                        ? "antigravity-btn-primary"
                        : "antigravity-btn-secondary"
                    }`}
                  >
                    <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-transparent" />
                    <span>Daftar via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note banner below pricing */}
        <div className="mt-6 sm:mt-10 p-4 sm:p-6 border border-[rgba(33,34,38,0.08)] bg-[#f8f9fc] flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 max-w-4xl mx-auto rounded-xl">
          <div className="space-y-1 text-left">
            <p className="text-xs sm:text-sm text-[#121317] font-bold flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-[#0F7A73] shrink-0" />
              Butuh paket custom atau ingin belajar menggunakan mobil matic pribadi?
            </p>
            <p className="text-[11px] sm:text-xs text-[#45474d]">
              Instruktur kami siap menyesuaikan rute kantor, garasi rumah, dan materi sesuai kebutuhan spesifik Anda.
            </p>
          </div>
          <a
            href={generateWhatsAppUrl("Halo Kak Lia Admin Amanah Drive, saya ingin konsultasi paket khusus / pakai mobil sendiri.")}
            onClick={() =>
              trackWhatsAppLead({
                lead_source: "pricing_custom_banner",
                button_text: "Konsultasi Gratis via WA",
                package_name: "Paket Khusus / Privat",
                package_price: 0,
              })
            }
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold text-[#0F7A73] hover:text-[#092E2B] underline underline-offset-2"
          >
            Konsultasi Gratis via WA &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
