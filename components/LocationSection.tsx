import React from "react";
import Image from "next/image";
import { CONTACT_INFO, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { MapPin, MessageCircle, Clock, CreditCard, ShieldCheck, CheckCircle2, Building2, PhoneCall } from "lucide-react";

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
    <section id="lokasi" className="py-24 relative border-t border-[#132d29]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-mono font-bold uppercase tracking-wider bg-teal-950/80 text-teal-300 border border-teal-500/30">
            <MapPin className="w-3.5 h-3.5" /> Area Layanan &amp; Koordinasi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Wilayah Jangkauan Antar-Jemput Palembang
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Amanah Drive melayani pelatihan mengemudi di seluruh penjuru Kota Palembang. Tersedia opsi penjemputan langsung ke rumah maupun titik temu strategis.
          </p>
        </div>

        {/* Content Console Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Coverage Card */}
          <div className="lg:col-span-7 console-card rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#183632]">
                <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-teal-400 shrink-0" />
                  Cakupan Wilayah Antar-Jemput &amp; Rute Latihan
                </h3>
                <span className="text-[11px] font-mono text-teal-400 bg-teal-950/60 px-2 py-0.5 rounded-[4px] border border-teal-500/30 shrink-0 hidden sm:inline-block">
                  Kota Palembang
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Rute latihan didesain bertahap dan teruji: mulai dari lapangan aspal steril, jalan perumahan, tanjakan flyover/jembatan, hingga jalan protokol padat di Kota Palembang.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
                {coverageAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-[#071513]/70 p-3 rounded-lg border border-[#183632]">
                    <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                    <span className="font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-lg bg-[#071513]/90 border border-teal-500/20 text-xs text-slate-300 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
              <span>
                Lokasi rumah Anda berada di luar list di atas? Tim kami siap mengoordinasikan titik kumpul terdekat yang nyaman untuk Anda.
              </span>
            </div>
          </div>

          {/* Operational & Payment Card */}
          <div className="lg:col-span-5 console-card rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-5">
              <div>
                <span className="text-[11px] font-mono font-bold text-teal-300 uppercase tracking-wider block mb-1">
                  Pusat Operasional &amp; Administrasi
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white">{CONTACT_INFO.companyName}</h3>
                <p className="text-xs text-slate-400 mt-1 flex items-start gap-1.5">
                  <Building2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <span>{CONTACT_INFO.address}</span>
                </p>
              </div>

              {/* Operational Hours */}
              <div className="bg-[#071513]/80 rounded-lg p-4 border border-[#183632] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>Jam Operasional Sesi Latihan:</span>
                </div>
                <p className="text-xs text-slate-300 font-mono pl-6">
                  {CONTACT_INFO.operationalHours}
                </p>
                <p className="text-[11px] text-teal-400/90 pl-6">
                  *Tersedia 6 slot latihan setiap hari, termasuk sesi malam hingga 22:00 WIB
                </p>
              </div>

              {/* Official Bank Account */}
              <div className="bg-[#071513]/80 rounded-lg p-4 border border-[#183632] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span>Rekening Resmi Pembayaran DP &amp; Pelunasan:</span>
                </div>
                <div className="pl-6 text-xs text-slate-300 space-y-1">
                  <div className="flex items-baseline gap-2">
                    <span className="px-2 py-0.5 rounded-[4px] bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-[11px] font-bold">
                      {CONTACT_INFO.bankAccount.bank}
                    </span>
                    <span className="font-mono text-white text-base font-extrabold tracking-wider">
                      {CONTACT_INFO.bankAccount.number}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400">
                    Atas Nama: <strong className="text-slate-200">{CONTACT_INFO.bankAccount.name}</strong> (Student Care Coordinator)
                  </p>
                </div>
              </div>

              {/* Contact Person preview */}
              <div className="flex items-center gap-3 p-3 rounded-lg bg-teal-950/30 border border-teal-500/20">
                <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-teal-400/30 bg-[#071513]">
                  <Image
                    src={STUDENT_CARE.avatar}
                    alt={STUDENT_CARE.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-xs leading-tight">
                  <p className="text-white font-bold">{STUDENT_CARE.name}</p>
                  <p className="text-teal-400 text-[11px] font-mono">{STUDENT_CARE.phoneDisplay}</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Button */}
            <a
              href={generateWhatsAppUrl("Halo Kak Lia, saya ingin bertanya jangkauan antar-jemput atau koordinasi titik temu terdekat.")}
              target="_blank"
              rel="noopener noreferrer"
              className="tactile-btn-primary rounded-lg py-3 px-5 text-sm flex items-center justify-center gap-2 text-center"
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

