import React from "react";
import Image from "next/image";
import { CONTACT_INFO, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { MapPin, MessageCircle, Clock, CreditCard, ShieldCheck, CheckCircle2, Building2 } from "lucide-react";

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
        
        {/* Antigravity Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="antigravity-chip">
            <MapPin className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Area Layanan &amp; Koordinasi</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight">
            Wilayah Jangkauan Antar-Jemput Palembang
          </h2>
          <p className="text-[#45474d] text-sm sm:text-base leading-relaxed">
            Amanah Drive melayani pelatihan mengemudi di seluruh penjuru Kota Palembang. Tersedia opsi penjemputan langsung ke rumah maupun titik temu strategis.
          </p>
        </div>

        {/* Content Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Coverage Card */}
          <div className="lg:col-span-7 antigravity-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(33,34,38,0.06)]">
                <h3 className="text-lg sm:text-xl font-bold text-[#121317] flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#0F7A73] shrink-0" />
                  Cakupan Wilayah Antar-Jemput &amp; Rute Latihan
                </h3>
                <span className="text-[11px] font-mono text-[#0F7A73] bg-[#E6F4F2] px-2.5 py-0.5 rounded-full font-bold shrink-0 hidden sm:inline-block">
                  Kota Palembang
                </span>
              </div>
              <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-6">
                Rute latihan didesain bertahap dan teruji: mulai dari lapangan aspal steril, jalan perumahan, tanjakan flyover/jembatan, hingga jalan protokol padat di Kota Palembang.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {coverageAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-[#121317] bg-[#f8f9fc] p-3 rounded-xl border border-[rgba(33,34,38,0.06)]">
                    <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] text-xs text-[#45474d] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#0F7A73] shrink-0" />
              <span>
                Lokasi rumah Anda berada di luar list di atas? Tim kami siap mengoordinasikan titik kumpul terdekat yang nyaman untuk Anda.
              </span>
            </div>
          </div>

          {/* Operational & Payment Card */}
          <div className="lg:col-span-5 antigravity-card p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <span className="text-[11px] font-mono font-bold text-[#0F7A73] uppercase tracking-wider block mb-1">
                  Pusat Operasional &amp; Administrasi
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#121317]">{CONTACT_INFO.companyName}</h3>
                <p className="text-xs text-[#45474d] mt-1 flex items-start gap-1.5">
                  <Building2 className="w-4 h-4 text-[#9aa0a6] shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.address}</span>
                </p>
              </div>

              {/* Operational Hours */}
              <div className="bg-[#f8f9fc] rounded-xl p-4 border border-[rgba(33,34,38,0.06)] space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-[#121317]">
                  <Clock className="w-4 h-4 text-[#0F7A73]" />
                  <span>Jam Operasional Sesi Latihan:</span>
                </div>
                <p className="text-xs text-[#45474d] font-mono pl-6">
                  {CONTACT_INFO.operationalHours}
                </p>
                <p className="text-[11px] text-[#0F7A73] pl-6">
                  *Tersedia 6 slot latihan setiap hari, termasuk sesi malam hingga 22:00 WIB
                </p>
              </div>

              {/* Official Bank Account */}
              <div className="bg-[#f8f9fc] rounded-xl p-4 border border-[rgba(33,34,38,0.06)] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#121317]">
                  <CreditCard className="w-4 h-4 text-amber-500" />
                  <span>Rekening Resmi Pembayaran DP &amp; Pelunasan:</span>
                </div>
                <div className="pl-6 text-xs text-[#45474d] space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-mono text-[11px] font-bold">
                      {CONTACT_INFO.bankAccount.bank}
                    </span>
                    <span className="font-mono text-[#121317] text-base font-extrabold tracking-wider">
                      {CONTACT_INFO.bankAccount.number}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#45474d]">
                    Atas Nama: <strong className="text-[#121317]">{CONTACT_INFO.bankAccount.name}</strong> (Student Care Coordinator)
                  </p>
                </div>
              </div>

              {/* Contact Person preview */}
              <div className="flex items-center gap-3 p-3 rounded-xl bg-[#f8f9fc] border border-[rgba(33,34,38,0.06)]">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-[rgba(33,34,38,0.1)] bg-white">
                  <Image
                    src={STUDENT_CARE.avatar}
                    alt={STUDENT_CARE.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-xs leading-tight">
                  <p className="text-[#121317] font-bold">{STUDENT_CARE.name}</p>
                  <p className="text-[#0F7A73] text-[11px] font-mono">{STUDENT_CARE.phoneDisplay}</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Button */}
            <a
              href={generateWhatsAppUrl("Halo Kak Lia, saya ingin bertanya jangkauan antar-jemput atau koordinasi titik temu terdekat.")}
              target="_blank"
              rel="noopener noreferrer"
              className="antigravity-btn-primary py-3.5 px-5 text-xs gap-2 rounded-full w-full text-center"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Konsultasi Titik Kumpul via WhatsApp</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
