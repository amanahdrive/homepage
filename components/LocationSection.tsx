import React from "react";
import { CONTACT_INFO, generateWhatsAppUrl } from "@/lib/constants";
import { MapPin, MessageCircle, Clock, CreditCard, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function LocationSection() {
  const coverageAreas = [
    "Bukit Lama & Bukit Siguntang",
    "Macan Kumbang & Demang Lebar Daun",
    "Gandus & Lubuk Bakung",
    "Sudirman, KM 5 s/d KM 9",
    "Sukarami & Sekip",
    "Plaju & Jakabaring",
    "Sako & Kenten (Titik Kumpul / Sesuai Kesepakatan)",
  ];

  return (
    <section id="lokasi" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
            <MapPin className="w-3.5 h-3.5" /> Area Layanan Kota Palembang
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Wilayah Jangkauan &amp; Titik Latihan
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Amanah Drive melayani kursus mengemudi di seluruh penjuru Kota Palembang dengan opsi penjemputan ke rumah atau meeting point strategis.
          </p>
        </div>

        {/* Content Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Coverage Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-7 sm:p-9 border border-slate-800/80 flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-teal-400" />
                Cakupan Area Antar-Jemput &amp; Lintasan Latihan
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                Rute latihan disesuaikan secara progresif: dari lapangan aspal lapang, gang perumahan, tanjakan jembatan/flyover, hingga jalan raya protokol Palembang.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {coverageAreas.map((area, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs text-slate-200 bg-slate-900/60 p-3 rounded-xl border border-slate-800">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-teal-950/40 border border-teal-500/20 text-xs text-slate-300 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-teal-400 shrink-0" />
              <span>Lokasi rumah Anda berada di luar list di atas? Hubungi kami untuk koordinasi titik temu terdekat!</span>
            </div>
          </div>

          {/* Operational Info Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-7 sm:p-9 border border-teal-500/30 flex flex-col justify-between space-y-6">
            
            <div className="space-y-6">
              <div>
                <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider block mb-1">
                  Pusat Informasi &amp; Administrasi
                </span>
                <h3 className="text-2xl font-black text-white">{CONTACT_INFO.companyName}</h3>
                <p className="text-xs text-slate-400 mt-1">{CONTACT_INFO.address}</p>
              </div>

              {/* Hours */}
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <Clock className="w-4 h-4 text-teal-400" />
                  <span>Jam Operasional Layanan:</span>
                </div>
                <p className="text-xs text-slate-300 font-medium pl-6">
                  {CONTACT_INFO.operationalHours}
                </p>
                <p className="text-[11px] text-teal-400/90 pl-6">
                  *Sesi latihan malam berlangsung hingga pukul 22.00 WIB
                </p>
              </div>

              {/* Official Bank Account */}
              <div className="bg-slate-900/80 rounded-2xl p-4 border border-slate-800 space-y-1.5">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-200">
                  <CreditCard className="w-4 h-4 text-amber-400" />
                  <span>Rekening Resmi Pembayaran DP / Pelunasan:</span>
                </div>
                <div className="pl-6 text-xs text-slate-300">
                  <p className="font-mono text-white text-sm font-extrabold tracking-wider">
                    {CONTACT_INFO.bankAccount.bank}: {CONTACT_INFO.bankAccount.number}
                  </p>
                  <p className="text-[11px] text-slate-400">a.n. {CONTACT_INFO.bankAccount.name}</p>
                </div>
              </div>
            </div>

            {/* Direct Contact Button */}
            <a
              href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya ingin bertanya alamat atau share lokasi titik kumpul latihan terdekat.")}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg glow-button transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Hubungi CS via WhatsApp</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
}
