"use client";

import React from "react";
import { FLEET, generateWhatsAppUrl } from "@/lib/constants";
import { Car, ShieldCheck, CheckCircle2, MessageCircle } from "lucide-react";
import { trackWhatsAppLead } from "@/lib/gtm";

interface FleetItem {
  id?: string;
  name: string;
  type: string;
  plate?: string;
  tag?: string;
  color?: string;
  desc?: string;
  features?: string[];
}

interface FleetSectionProps {
  fleet?: FleetItem[];
}

export default function FleetSection({ fleet = FLEET }: FleetSectionProps) {
  return (
    <section id="armada" className="py-14 sm:py-28 relative bg-white border-t border-[rgba(17,18,21,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="text-left max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#0F7A73] uppercase tracking-wider font-semibold">
            <Car className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Kategori Armada Latihan Resmi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Pilihan Armada Latihan Nyaman &amp; Terawat
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Seluruh armada operasional Amanah Drive dalam kondisi prima ber-AC dingin, terawat berkala, serta didampingi langsung oleh <strong className="text-[#0F7A73]">Instruktur Sabar &amp; Berpengalaman</strong> untuk kenyamanan dan keselamatan belajar maksimal.
          </p>
        </div>

        {/* Fleet Grid: Adaptive Desktop Grid / Mobile Horizontal Snap Track */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-0 border-t sm:border-l border-[rgba(17,18,21,0.08)] no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {fleet.map((car, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-auto shrink-0 snap-start border sm:border-t-0 sm:border-l-0 border-r border-b border-[rgba(17,18,21,0.08)] bg-white p-6 sm:p-7 flex flex-col justify-between hover:bg-[#fafbfc] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-[11px] font-mono">
                  <span className="text-[#0F7A73] font-semibold uppercase tracking-wider">
                    // {car.type}
                  </span>
                  <span className="text-[#9aa0a6] uppercase tracking-wider font-medium">
                    {car.plate || car.tag || "UNIT RESMI"}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#111215] mb-1">
                  {car.name}
                </h3>
                {car.color ? (
                  <p className="text-xs text-[#0F7A73] font-mono font-medium mb-3">WARNA: {car.color.toUpperCase()}</p>
                ) : (
                  <p className="text-xs text-[#0F7A73] font-mono font-medium mb-3">UNIT RESMI TERAWAT</p>
                )}

                <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-5 min-h-0 sm:min-h-[40px]">
                  {car.desc}
                </p>

                <div className="space-y-2 pt-4 border-t border-[rgba(17,18,21,0.06)] mb-5">
                  {(car.features || []).map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] sm:text-xs text-[#45474d]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[rgba(17,18,21,0.06)] flex items-center justify-between">
                <span className="text-[11px] font-mono text-[#0F7A73] font-medium flex items-center gap-1.5">
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
                  className="tech-btn-ghost py-1.5 px-3 text-xs gap-1.5"
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
