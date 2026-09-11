"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PACKAGES, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { Calculator, MessageCircle, Sparkles, ArrowRight } from "lucide-react";

export default function BookingCalculator() {
  const [selectedPkgId, setSelectedPkgId] = useState("pro");
  const [vehicle, setVehicle] = useState("Ayla (Manual)");
  const [slotCategory, setSlotCategory] = useState("Sore (15:30 - 17:00)");
  const [targetStart, setTargetStart] = useState("Minggu Ini");
  const [studentName, setStudentName] = useState("");
  const [notes, setNotes] = useState("");

  const currentPkg = PACKAGES.find((p) => p.id === selectedPkgId) || PACKAGES[3];

  const formatRupiah = (val: number) => {
    if (val === 0) return "Konsultasi Khusus";
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const estimatedDP = currentPkg.price > 0 ? Math.round(currentPkg.price * 0.35) : 0;
  const roundedDP = Math.ceil(estimatedDP / 50000) * 50000;

  const handleBooking = () => {
    let msg = `*FORMULIR RESERVASI KURSUS AMANAH DRIVE*\n`;
    if (studentName.trim()) {
      msg += `• *Nama Calon Siswa:* ${studentName.trim()}\n`;
    }
    msg += `• *Pilihan Paket:* ${currentPkg.name}\n`;
    msg += `• *Biaya Paket:* ${formatRupiah(currentPkg.price)}\n`;
    msg += `• *Pilihan Mobil:* ${vehicle}\n`;
    msg += `• *Waktu Latihan Favorit:* ${slotCategory}\n`;
    msg += `• *Rencana Mulai:* ${targetStart}\n`;
    if (notes.trim()) {
      msg += `• *Catatan Khusus:* ${notes.trim()}\n`;
    }
    msg += `\nHalo Kak Lia Admin Amanah Drive, mohon konfirmasi ketersediaan instruktur dan nomor rekening untuk kunci slot pendaftaran saya. Terima kasih!`;

    window.open(generateWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="kalkulator" className="py-20 md:py-28 relative bg-[#061210]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-500/30">
            <Calculator className="w-3.5 h-3.5" /> Simulator Biaya &amp; Jadwal
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Kalkulator &amp; Rencana Pendaftaran Siswa
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Pilih paket, kendaraan, dan slot waktu yang paling nyaman. Dapatkan rincian estimasi biaya serta DP, lalu kirimkan langsung ke WhatsApp Kak Lia dalam satu klik.
          </p>
        </div>

        {/* Simulator Grid (12px console cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Selection Controls */}
          <div className="lg:col-span-7 console-card p-6 sm:p-7 border border-slate-800 space-y-6">
            
            {/* Step 1: Choose Package */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                1. Pilih Paket Kursus:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-3 rounded-lg text-left border transition-all ${
                      selectedPkgId === pkg.id
                        ? "border-teal-400 bg-[#0A2421] text-white shadow-sm"
                        : "border-slate-800 bg-[#091E1C] text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm">{pkg.name}</span>
                      {pkg.popular && (
                        <span className="text-[10px] bg-[#0F7A73] text-white px-1.5 py-0.5 rounded-[4px] font-bold">
                          Populer
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-teal-400 font-bold mt-1 tabular-nums">
                      {formatRupiah(pkg.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Vehicle */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                2. Pilihan Kendaraan Latihan:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { name: "Ayla (Manual)", desc: "City Car Lincah" },
                  { name: "Xenia (Manual)", desc: "MPV Keluarga" },
                  { name: "Mobil Sendiri", desc: "Manual / Matic" },
                ].map((v) => (
                  <button
                    key={v.name}
                    type="button"
                    onClick={() => setVehicle(v.name)}
                    className={`p-3 rounded-lg text-left border transition-all ${
                      vehicle === v.name
                        ? "border-teal-400 bg-[#0A2421] text-white"
                        : "border-slate-800 bg-[#091E1C] text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-bold text-xs">{v.name}</div>
                    <div className="text-[10px] text-slate-400">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Preferred Time */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                3. Jam Latihan Favorit:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { label: "Pagi (09:00 - 12:30)", id: "Pagi Segar" },
                  { label: "Sore (15:30 - 17:00)", id: "Sore Favorit" },
                  { label: "Malam (18:30 - 22:00)", id: "Malam Tenang" },
                ].map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setSlotCategory(t.label)}
                    className={`p-3 rounded-lg text-left border transition-all ${
                      slotCategory === t.label
                        ? "border-teal-400 bg-[#0A2421] text-white"
                        : "border-slate-800 bg-[#091E1C] text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-bold text-xs">{t.label}</div>
                    <div className="text-[10px] text-teal-300 font-medium">{t.id}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Target Start & Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Nama Anda (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rahmat Hidayat"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-[#091E1C] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Rencana Mulai Belajar:
                </label>
                <select
                  value={targetStart}
                  onChange={(e) => setTargetStart(e.target.value)}
                  className="w-full bg-[#091E1C] border border-slate-800 rounded-lg px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
                >
                  <option value="Secepatnya (Besok / Lusa)">Secepatnya (Besok / Lusa)</option>
                  <option value="Minggu Ini">Minggu Ini</option>
                  <option value="Minggu Depan">Minggu Depan</option>
                  <option value="Awal Bulan Depan">Awal Bulan Depan</option>
                  <option value="Khusus Akhir Pekan (Sabtu-Minggu)">Khusus Weekend (Sabtu-Minggu)</option>
                </select>
              </div>
            </div>

          </div>

          {/* Right: Summary Card & Direct WhatsApp Action */}
          <div className="lg:col-span-5 console-card p-6 border border-teal-500/30 bg-[#09221F] space-y-5">
            
            <div className="flex items-center justify-between pb-4 border-b border-teal-900/60">
              <span className="text-xs font-bold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" /> Ringkasan Pendaftaran
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded-[4px] bg-emerald-950 text-emerald-300 border border-emerald-500/30">
                Estimasi Resmi
              </span>
            </div>

            <div className="space-y-3.5 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Paket Pilihan:</span>
                <strong className="text-white font-bold">{currentPkg.name}</strong>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Jumlah Pertemuan:</span>
                <span className="text-teal-300 font-bold">{currentPkg.sessions > 0 ? `${currentPkg.sessions}x Sesi (@90 Menit)` : "Fleksibel"}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Pilihan Kendaraan:</span>
                <span className="text-white font-medium">{vehicle}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Waktu Latihan:</span>
                <span className="text-white font-medium">{slotCategory}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Target Mulai:</span>
                <span className="text-emerald-400 font-bold">{targetStart}</span>
              </div>

              {/* Total Price Callout */}
              <div className="pt-4 border-t border-teal-900/60 space-y-1">
                <span className="text-slate-400 text-xs">Total Biaya Paket:</span>
                <div className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
                  {formatRupiah(currentPkg.price)}
                </div>
                {currentPkg.price > 0 && (
                  <p className="text-[11px] text-teal-300">
                    Cukup DP <strong>{formatRupiah(roundedDP)}</strong> untuk mengunci jadwal &amp; instruktur.
                  </p>
                )}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleBooking}
                className="w-full py-3.5 px-5 rounded-lg bg-[#0F7A73] hover:bg-[#128B83] text-white font-bold text-xs flex items-center justify-center gap-2 border border-teal-400/50 shadow-sm transition-all"
              >
                <div className="relative w-4 h-4 rounded-full overflow-hidden border border-teal-200 shrink-0">
                  <Image
                    src={STUDENT_CARE.avatar}
                    alt={STUDENT_CARE.name}
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                </div>
                <span>Kirim Rencana Kursus ke WhatsApp Kak Lia</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </button>

              <p className="text-[10px] text-center text-slate-400 leading-tight">
                Pesan akan langsung terformat rapi ke WhatsApp CS Resmi Amanah Drive untuk verifikasi slot tanpa biaya registrasi tambahan.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

