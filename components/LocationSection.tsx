"use client";

import React from "react";
import Image from "next/image";
import { CONTACT_INFO, STUDENT_CARE, LOCATION_INFO, generateWhatsAppUrl } from "@/lib/constants";
import { MapPin, MessageCircle, Clock, CreditCard, CheckCircle2, Building2, ExternalLink } from "lucide-react";
import { trackWhatsAppLead, trackLocationView } from "@/lib/gtm";

interface LocationSectionProps {
  location?: typeof LOCATION_INFO;
  contact?: typeof CONTACT_INFO;
}

export default function LocationSection({
  location = LOCATION_INFO,
  contact = CONTACT_INFO,
}: LocationSectionProps) {
  const coverageAreas = [
    "Bukit Lama & Bukit Siguntang",
    "Macan Kumbang & Demang Lebar Daun",
    "Gandus & Lubuk Bakung",
    "Jend. Sudirman, KM 5 s/d KM 9",
    "Sukarami, Maskarebet & Sekip",
    "Plaju & Jakabaring",
    "Sako & Kenten (Titik Kumpul / Fleksibel)",
  ];

  return (
    <section id="lokasi" className="py-14 sm:py-28 relative bg-[#f8f9fc] border-t border-[rgba(17,18,21,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="tech-tag tech-tag-brand">
              <MapPin className="w-3 h-3 text-[#0F7A73]" />
              Jangkauan Palembang
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Kantor &amp; Area Antar-Jemput Gratis Palembang
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Tidak perlu repot datang ke tempat latihan jika rumah Anda berada dalam area layanan kami. Instruktur kami siap menjemput dan mengantar Anda pulang dengan armada latihan resmi.
          </p>
        </div>

        {/* Architectural Split Console: Left Details & Right Google Maps */}
        <div className="border border-[rgba(17,18,21,0.08)] bg-white rounded-[4px] overflow-hidden grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[rgba(17,18,21,0.08)]">
          
          {/* Left Column: Office info & Pickup coverage (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Office Location */}
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F7A73]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Kantor Operasional:</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#111215] leading-snug">
                  {location.address || "Jl. Macan Kumbang XVIII, Siring Agung, Kec. Ilir Bar. I, Kota Palembang, Sumatera Selatan 30153"}
                </h3>
                <p className="text-xs text-[#45474d] leading-relaxed">
                  (Area Siring Agung, Macan Kumbang - Melayani Antar-Jemput Siswa Gratis se-Kota Palembang)
                </p>
              </div>

              {/* Operating Hours */}
              <div className="pt-4 border-t border-[rgba(17,18,21,0.08)] space-y-1 text-xs text-[#45474d]">
                <div className="flex items-center gap-2 font-bold text-[#111215]">
                  <Clock className="w-3.5 h-3.5 text-[#0F7A73]" />
                  <span>Jam Operasional Layanan:</span>
                </div>
                <p className="text-xs pl-5 text-[#111215] font-mono">
                  {CONTACT_INFO.operationalHours}
                </p>
                <p className="text-[11px] pl-5 text-[#9aa0a6]">
                  Latihan tetap berjalan normal setiap hari Sabtu, Minggu, dan tanggal merah.
                </p>
              </div>

              {/* Free Pick-Up Coverage Areas */}
              <div className="pt-4 border-t border-[rgba(17,18,21,0.08)] space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#111215]">Wilayah Bebas Biaya Antar-Jemput:</span>
                  <span className="tech-tag tech-tag-brand">GRATIS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#45474d]">
                  {coverageAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#9aa0a6] pt-1">
                  *Lokasi rumah Anda di luar daftar? Koordinasikan titik kumpul terdekat dengan tim kami.
                </p>
              </div>

            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-4 border-t border-[rgba(17,18,21,0.08)]">
              <a
                href={generateWhatsAppUrl("Halo Kak Lia, saya ingin bertanya jangkauan antar-jemput atau koordinasi titik temu terdekat.")}
                onClick={() =>
                  trackWhatsAppLead({
                    lead_source: "location_section",
                    button_text: "Konsultasi Penjemputan via WhatsApp",
                  })
                }
                target="_blank"
                rel="noopener noreferrer"
                className="tech-btn-primary w-full gap-2 text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Konsultasi Penjemputan via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#f8f9fc]">
            <div className="w-full h-full min-h-[300px] sm:min-h-[440px] relative">
              <iframe
                src={location.embedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "300px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Lokasi Amanah Drive Palembang"
                className="w-full h-full min-h-[300px] sm:min-h-[440px] block"
              />
            </div>

            <div className="p-3 border-t border-[rgba(17,18,21,0.08)] bg-white flex items-center justify-between text-[11px] font-mono text-[#9aa0a6]">
              <span>GOOGLE MAPS: AMANAH DRIVE PALEMBANG</span>
              <a
                href="https://maps.app.goo.gl/yQW2X"
                onClick={() => trackLocationView("Amanah Drive Palembang Google Maps")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F7A73] hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <span>Buka di Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
