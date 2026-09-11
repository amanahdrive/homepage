"use client";

import React from "react";
import { FLEET, generateWhatsAppUrl } from "@/lib/constants";
import { Car, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { trackWhatsAppLead } from "@/lib/gtm";

interface FleetSectionProps {
  fleet?: typeof FLEET;
}

export default function FleetSection({ fleet = FLEET }: FleetSectionProps) {
  return (
    <section id="armada" className="py-10 sm:py-24 relative bg-white border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-left max-w-3xl mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#0F7A73]">
            <Car className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Kategori Armada Latihan Resmi</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#121317] tracking-tight leading-snug">
            Pilihan Armada Latihan Nyaman &amp; Terawat
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Seluruh armada operasional Amanah Drive dalam kondisi prima ber-AC dingin, terawat berkala, serta didampingi langsung oleh <strong className="text-[#0F7A73]">Instruktur Sabar &amp; Berpengalaman</strong> untuk kenyamanan dan keselamatan belajar maksimal.
          </p>
        </div>

        {/* Fleet Grid (Clean 12px container, no pill badges) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-6">
          {fleet.map((car, idx) => (
            <div
              key={idx}
              className="antigravity-card p-4 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2 sm:mb-3">
                  <span className="px-2 py-0.5 rounded-md bg-[#E6F4F2] text-[#0F7A73] font-mono font-bold text-[10px] sm:text-xs">
                    {car.type}
                  </span>
                  <span className="text-[10px] sm:text-[11px] font-mono text-[#45474d] bg-[#f0f1f5] px-2 py-0.5 rounded-md border border-[rgba(33,34,38,0.06)]">
                    {car.plate}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#121317] mb-0.5 sm:mb-1">
                  {car.name}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#0F7A73] font-medium mb-2 sm:mb-3">Warna: {car.color}</p>

                <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-3 sm:mb-5">
                  {car.desc}
                </p>

                <div className="space-y-1.5 sm:space-y-2 pt-2.5 sm:pt-3 border-t border-[rgba(33,34,38,0.06)] mb-3 sm:mb-4">
                  {car.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-[#45474d]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-2.5 sm:pt-3 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between">
                <span className="text-[10px] sm:text-[11px] text-[#0F7A73] font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#0F7A73] shrink-0" />
                  Pendampingan Penuh
                </span>

                <a
                  href={generateWhatsAppUrl(`Halo Kak Lia, saya ingin tanya ketersediaan armada latihan ${car.name}.`)}
                  onClick={() =>
                    trackWhatsAppLead({
                      lead_source: "fleet_section",
                      button_text: "Pilih Unit",
                      vehicle_type: car.name,
                    })
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-[#121317] hover:text-[#0F7A73] flex items-center gap-1 transition-colors"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#0F7A73]" />
                  <span>Pilih Unit</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
