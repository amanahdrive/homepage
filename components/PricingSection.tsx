"use client";

import React, { useState } from "react";
import { Check, Star, MessageCircle, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import { PACKAGES, PackageItem, generateWhatsAppUrl } from "@/lib/constants";
import { trackWhatsAppLead, trackPackageFilter } from "@/lib/gtm";

interface PricingSectionProps {
  packages?: PackageItem[];
}

export default function PricingSection({ packages = PACKAGES }: PricingSectionProps) {
  const [filter, setFilter] = useState<"all" | "sim" | "nosim">("all");

  const filteredPackages = packages.filter((pkg) => {
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
    <section id="paket" className="py-14 sm:py-28 relative bg-white border-t border-[rgba(17,18,21,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#0F7A73] uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Biaya Transparan Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Pilihan Paket Kursus &amp; Biaya Resmi
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Semua paket sudah termasuk mobil ber-AC dingin, bensin (BBM), pendampingan penuh instruktur sabar tanpa emosi, serta sertifikat kelulusan resmi Amanah Drive. Bebas biaya tersembunyi.
          </p>

          {/* Crisp Segmented Filter Controls */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <button
              type="button"
              onClick={() => {
                setFilter("all");
                trackPackageFilter("all");
              }}
              className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-colors ${
                filter === "all"
                  ? "bg-[#111215] text-white"
                  : "bg-[#f8f9fc] border border-[rgba(17,18,21,0.1)] text-[#45474d] hover:text-[#111215]"
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
              className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-colors ${
                filter === "sim"
                  ? "bg-[#111215] text-white"
                  : "bg-[#f8f9fc] border border-[rgba(17,18,21,0.1)] text-[#45474d] hover:text-[#111215]"
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
              className={`px-3 py-1.5 rounded-[4px] text-xs font-semibold transition-colors ${
                filter === "nosim"
                  ? "bg-[#111215] text-white"
                  : "bg-[#f8f9fc] border border-[rgba(17,18,21,0.1)] text-[#45474d] hover:text-[#111215]"
              }`}
            >
              Hanya Kursus Latihan
            </button>
          </div>
        </div>

        {/* Pricing Architectural Matrix (Continuous Hairline Grid) */}
        <div className="border-t border-l border-[rgba(17,18,21,0.08)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filteredPackages.map((pkg) => {
            const isPopular = pkg.popular;
            const waMsg = `Halo Kak Lia Admin Amanah Drive, saya tertarik mendaftar *${pkg.name}* (${
              pkg.price > 0 ? formatRupiah(pkg.price) : "Paket Khusus"
            }). Apakah ada jadwal kosong untuk minggu ini?`;

            return (
              <div
                key={pkg.id}
                className={`border-r border-b border-[rgba(17,18,21,0.08)] p-6 sm:p-8 flex flex-col justify-between relative transition-colors ${
                  isPopular
                    ? "bg-[#fafbfc]"
                    : "bg-white hover:bg-[#fafbfc]"
                }`}
              >
                {/* Popular Indicator Tag */}
                {isPopular && (
                  <div className="mb-3">
                    <span className="font-mono text-[10px] text-[#0F7A73] font-bold uppercase tracking-wider flex items-center gap-1.5">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" /> Pilihan Siswa Terfavorit
                    </span>
                  </div>
                )}

                <div>
                  {/* Top Metadata */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] text-[#0F7A73] uppercase tracking-wider font-semibold">
                      // {pkg.tag}
                    </span>
                    {pkg.sessions > 0 && (
                      <span className="text-xs font-mono font-medium text-[#45474d]">
                        {pkg.sessions}x Sesi Latihan
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#111215] mb-2 tracking-tight">
                    {pkg.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-6 min-h-0 sm:min-h-[44px]">
                    {pkg.desc}
                  </p>

                  {/* Price Block */}
                  <div className="pb-5 mb-6 border-b border-[rgba(17,18,21,0.08)]">
                    {pkg.normalPrice && (
                      <div className="text-xs text-[#9aa0a6] line-through mb-1 tabular-nums">
                        {formatRupiah(pkg.normalPrice)}
                      </div>
                    )}
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-extrabold text-[#111215] tracking-tight tabular-nums">
                        {formatRupiah(pkg.price)}
                      </span>
                      {pkg.price > 0 && (
                        <span className="text-xs text-[#45474d] font-mono">/paket</span>
                      )}
                    </div>
                    <p className="text-[11px] text-[#0F7A73] mt-2 font-medium">
                      Bisa bayar bertahap (DP registrasi &amp; pelunasan di sesi pertama)
                    </p>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-6">
                    <p className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#45474d]">
                      Fasilitas Termasuk:
                    </p>
                    <ul className="space-y-2">
                      {pkg.features.map((feat: string, fIdx: number) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-[#45474d]">
                          <Check className="w-3.5 h-3.5 text-[#0F7A73] stroke-[2.5] shrink-0 mt-0.5" />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Trigger Action */}
                <div className="pt-4 border-t border-[rgba(17,18,21,0.06)]">
                  <div className="mb-3 text-[11px] text-[#45474d] leading-tight">
                    <span className="text-[#111215] font-semibold">Cocok untuk: </span>
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
                    className={`w-full gap-2 ${
                      isPopular
                        ? "tech-btn-primary"
                        : "tech-btn-ghost"
                    }`}
                  >
                    <MessageCircle className="w-4 h-4 fill-current text-transparent" />
                    <span>Daftar via WhatsApp</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

        {/* Note Banner Below Pricing (Hairline Console Bar) */}
        <div className="mt-8 sm:mt-12 p-5 sm:p-6 border border-[rgba(17,18,21,0.08)] bg-[#f8f9fc] flex flex-col sm:flex-row items-center justify-between gap-4 max-w-4xl mx-auto rounded-[4px]">
          <div className="space-y-1 text-left">
            <p className="text-xs sm:text-sm text-[#111215] font-bold flex items-center gap-2">
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
            className="shrink-0 text-xs font-bold text-[#0F7A73] hover:text-[#092E2B] underline underline-offset-2 whitespace-nowrap"
          >
            Konsultasi Gratis via WA &rarr;
          </a>
        </div>

      </div>
    </section>
  );
}
