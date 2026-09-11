"use client";

import React from "react";
import Image from "next/image";
import { CONTACT_INFO, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { MapPin, MessageCircle, Clock, CreditCard, CheckCircle2, Building2, ExternalLink } from "lucide-react";
import { trackWhatsAppLead, trackLocationView } from "@/lib/gtm";

export default function LocationSection() {
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
    <section id="lokasi" className="py-10 sm:py-24 relative bg-white border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#0F7A73]">
            <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Lokasi Operasional &amp; Antar Jemput</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#121317] tracking-tight leading-snug">
            Kantor &amp; Area Antar-Jemput Gratis Palembang
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Tidak perlu repot datang ke tempat latihan jika rumah Anda berada dalam area layanan kami. Instruktur kami siap menjemput dan mengantar Anda pulang dengan armada latihan resmi.
          </p>
        </div>

        {/* Two Column Bento Grid: Left Details & Right Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-8 items-stretch">
          
          {/* Left Column: Office info & Pickup coverage (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4 sm:space-y-6">
            <div className="antigravity-card p-4 sm:p-6 bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] rounded-xl space-y-3.5 sm:space-y-5">
              
              {/* Office Location */}
              <div className="space-y-1 sm:space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#0F7A73]">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Kantor Operasional:</span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-[#121317] leading-snug">
                  {CONTACT_INFO.address}
                </h3>
                <p className="text-[11px] sm:text-xs text-[#45474d] leading-relaxed">
                  (Dekat simpang Bukit Lama &amp; Universitas Sriwijaya Bukit)
                </p>
              </div>

              {/* Operating Hours */}
              <div className="pt-3 sm:pt-4 border-t border-[rgba(33,34,38,0.08)] space-y-1 sm:space-y-1.5 text-xs text-[#45474d]">
                <div className="flex items-center gap-2 font-bold text-[#121317]">
                  <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0F7A73]" />
                  <span>Jam Operasional Layanan:</span>
                </div>
                <p className="text-[11px] sm:text-xs pl-5 sm:pl-6 text-[#121317] font-mono">
                  {CONTACT_INFO.operationalHours}
                </p>
                <p className="text-[10px] sm:text-[11px] pl-5 sm:pl-6 text-[#9aa0a6]">
                  Latihan tetap berjalan normal setiap hari Sabtu, Minggu, dan tanggal merah.
                </p>
              </div>

              {/* Free Pick-Up Coverage Areas */}
              <div className="pt-3 sm:pt-4 border-t border-[rgba(33,34,38,0.08)] space-y-1.5 sm:space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-[#121317]">Wilayah Bebas Biaya Antar-Jemput:</span>
                  <span className="text-[9px] sm:text-[10px] font-mono font-bold text-[#10B981] bg-[#E6F4F2] px-1.5 py-0.5 rounded">GRATIS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 text-xs text-[#45474d]">
                  {coverageAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[10px] sm:text-[11px] text-[#9aa0a6] pt-0.5 sm:pt-1">
                  *Lokasi rumah Anda di luar daftar? Koordinasikan titik kumpul terdekat dengan tim kami.
                </p>
              </div>

            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
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
                className="antigravity-btn-primary w-full py-2.5 sm:py-3 px-4 sm:px-5 text-xs gap-2 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Konsultasi Penjemputan via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="w-full h-full min-h-[280px] sm:min-h-[420px] rounded-xl overflow-hidden border border-[rgba(33,34,38,0.08)] bg-[#f8f9fc] shadow-sm relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45078.95267279368!2d104.69953335300335!3d-2.9714931721378597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b758980fc77a1%3A0x3a59dd8b6033f81b!2sAmanah%20Drive%20Palembang%20-%20KURSUS%20MENGEMUDI%20PALEMBANG!5e0!3m2!1sen!2sid!4v1789146853835!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "280px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Lokasi Amanah Drive Palembang"
                className="w-full h-full min-h-[280px] sm:min-h-[420px] block"
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[#9aa0a6] px-1">
              <span>Google Maps Resmi: Amanah Drive Palembang</span>
              <a
                href="https://maps.app.goo.gl/yQW2X"
                onClick={() => trackLocationView("Amanah Drive Palembang Google Maps")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F7A73] hover:underline inline-flex items-center gap-1"
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
