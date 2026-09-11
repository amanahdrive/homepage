import React from "react";
import Image from "next/image";
import { CONTACT_INFO, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { MapPin, MessageCircle, Clock, CreditCard, CheckCircle2, Building2, ExternalLink } from "lucide-react";

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
    <section id="lokasi" className="py-20 sm:py-28 relative bg-white border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-[#0F7A73]">
            <MapPin className="w-3.5 h-3.5" />
            <span>Pusat Operasional &amp; Jangkauan Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight">
            Lokasi Kantor &amp; Peta Jangkauan Palembang
          </h2>
          <p className="text-[#45474d] text-sm sm:text-base leading-relaxed">
            Amanah Drive melayani kursus mengemudi di seluruh penjuru Kota Palembang. Tersedia penjemputan langsung ke rumah siswa maupun pertemuan di titik kumpul yang strategis.
          </p>
        </div>

        {/* 2-Column Balanced Architecture */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Office & Operational Details (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-6">
              
              {/* Office Details */}
              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold text-[#0F7A73] uppercase tracking-wider">
                  Badan Usaha Resmi CV
                </span>
                <h3 className="text-2xl font-extrabold text-[#121317] tracking-tight">
                  {CONTACT_INFO.companyName}
                </h3>
                <p className="text-xs sm:text-sm text-[#45474d] flex items-start gap-2 pt-1 leading-relaxed">
                  <Building2 className="w-4 h-4 text-[#0F7A73] shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.address}</span>
                </p>
              </div>

              {/* Hours & Schedule Info */}
              <div className="pt-4 border-t border-[rgba(33,34,38,0.08)] space-y-1.5 text-xs text-[#45474d]">
                <div className="flex items-center gap-2 font-bold text-[#121317]">
                  <Clock className="w-4 h-4 text-[#0F7A73]" />
                  <span>Jam Operasional Sesi Latihan:</span>
                </div>
                <p className="font-mono pl-6 text-[#121317] font-semibold">
                  {CONTACT_INFO.operationalHours}
                </p>
                <p className="text-[11px] text-[#0F7A73] pl-6">
                  *Tersedia 6 slot harian (pagi, siang, sore &amp; malam hingga 22:00 WIB)
                </p>
              </div>

              {/* Coverage List */}
              <div className="pt-4 border-t border-[rgba(33,34,38,0.08)] space-y-2.5">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#121317] uppercase tracking-wider">
                    Area Gratis Antar-Jemput:
                  </span>
                  <span className="text-[11px] font-mono text-[#0F7A73] font-semibold">
                    Kota Palembang
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#45474d]">
                  {coverageAreas.map((area, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-[#9aa0a6] pt-1">
                  *Lokasi rumah Anda di luar daftar? Koordinasikan titik kumpul terdekat dengan tim kami.
                </p>
              </div>

              {/* Bank Account */}
              <div className="pt-4 border-t border-[rgba(33,34,38,0.08)] space-y-1.5 text-xs">
                <div className="flex items-center gap-2 font-bold text-[#121317]">
                  <CreditCard className="w-4 h-4 text-amber-600" />
                  <span>Rekening Resmi Pembayaran DP:</span>
                </div>
                <div className="pl-6 text-[#45474d] space-y-0.5">
                  <p className="font-mono text-[#121317] text-sm font-extrabold tracking-wider">
                    {CONTACT_INFO.bankAccount.bank} {CONTACT_INFO.bankAccount.number}
                  </p>
                  <p className="text-[11px]">
                    a.n. <strong className="text-[#121317]">{CONTACT_INFO.bankAccount.name}</strong> (Student Care Coordinator)
                  </p>
                </div>
              </div>

            </div>

            {/* Direct WhatsApp CTA Button */}
            <div className="pt-2">
              <a
                href={generateWhatsAppUrl("Halo Kak Lia, saya ingin bertanya jangkauan antar-jemput atau koordinasi titik temu terdekat.")}
                target="_blank"
                rel="noopener noreferrer"
                className="antigravity-btn-primary w-full py-3 px-5 text-xs gap-2 rounded-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Konsultasi Penjemputan via WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Google Maps Embed (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="w-full h-full min-h-[420px] rounded-xl overflow-hidden border border-[rgba(33,34,38,0.08)] bg-[#f8f9fc] shadow-sm relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45078.95267279368!2d104.69953335300335!3d-2.9714931721378597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e3b758980fc77a1%3A0x3a59dd8b6033f81b!2sAmanah%20Drive%20Palembang%20-%20KURSUS%20MENGEMUDI%20PALEMBANG!5e0!3m2!1sen!2sid!4v1789146853835!5m2!1sen!2sid"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Peta Lokasi Amanah Drive Palembang"
                className="w-full h-full min-h-[420px] block"
              />
            </div>

            <div className="mt-2 flex items-center justify-between text-[11px] font-mono text-[#9aa0a6] px-1">
              <span>Google Maps Resmi: Amanah Drive Palembang</span>
              <a
                href="https://maps.app.goo.gl/yQW2X"
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
