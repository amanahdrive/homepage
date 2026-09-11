"use client";

import React, { useState } from "react";
import { PACKAGES, generateWhatsAppUrl } from "@/lib/constants";
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
    msg += `\nHalo Admin Amanah Drive, mohon konfirmasi ketersediaan instruktur dan nomor rekening untuk kunci slot pendaftaran saya. Terima kasih!`;

    window.open(generateWhatsAppUrl(msg), "_blank");
  };

  return (
    <section id="kalkulator" className="py-24 relative bg-slate-950/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
            <Calculator className="w-3.5 h-3.5" /> Simulator Biaya &amp; Jadwal
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Kalkulator &amp; Rencana Pendaftaran
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Hitung perkiraan biaya, sesuaikan jenis kendaraan dan slot waktu yang paling nyaman untuk Anda, lalu langsung kirimkan reservasi slot via WhatsApp dalam hitungan detik.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Selection Controls */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 space-y-6">
            
            {/* Step 1: Choose Package */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-3">
                1. Pilih Paket Kursus:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-3.5 rounded-2xl text-left border transition-all ${
                      selectedPkgId === pkg.id
                        ? "border-teal-400/90 bg-teal-950/50 text-white shadow-md"
                        : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm">{pkg.name}</span>
                      {pkg.popular && (
                        <span className="text-[10px] bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded font-bold">
                          Populer
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-teal-400 font-extrabold mt-1">
                      {formatRupiah(pkg.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Vehicle */}
            <div>
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-3">
                2. Pilihan Armada / Kendaraan:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { name: "Ayla (Manual)", desc: "City Car Lincah" },
                  { name: "Xenia (Manual)", desc: "Dimensi MPV Keluarga" },
                  { name: "Mobil Sendiri", desc: "Manual / Matic" },
                ].map((v) => (
                  <button
                    key={v.name}
                    type="button"
                    onClick={() => setVehicle(v.name)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      vehicle === v.name
                        ? "border-teal-400 bg-teal-950/50 text-white"
                        : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
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
              <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-3">
                3. Jam Latihan yang Diinginkan:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {[
                  { label: "Pagi (09:00 - 12:30)", id: "Pagi" },
                  { label: "Sore (15:30 - 17:00)", id: "Sore (Favorit)" },
                  { label: "Malam (18:30 - 22:00)", id: "Malam (Santai)" },
                ].map((t) => (
                  <button
                    key={t.label}
                    type="button"
                    onClick={() => setSlotCategory(t.label)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      slotCategory === t.label
                        ? "border-teal-400 bg-teal-950/50 text-white"
                        : "border-slate-800 bg-slate-900/60 text-slate-300 hover:border-slate-700"
                    }`}
                  >
                    <div className="font-bold text-xs">{t.label}</div>
                    <div className="text-[10px] text-teal-400/90">{t.id}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Target Start & Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                  Nama Lengkap Anda (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rahmat Hidayat"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
                />
              </div>

              <div>
                <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-300 mb-2">
                  Rencana Mulai Belajar:
                </label>
                <select
                  value={targetStart}
                  onChange={(e) => setTargetStart(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-teal-400"
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

          {/* Right: Summary Card & Direct WhatsApp CTA */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-teal-500/40 relative overflow-hidden bg-gradient-to-b from-teal-950/70 via-slate-950 to-slate-950 shadow-2xl">
            <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between pb-5 border-b border-slate-800">
              <span className="text-xs font-extrabold text-teal-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4" /> Ringkasan Rencana Belajar
              </span>
              <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Estimasi Instan
              </span>
            </div>

            <div className="space-y-4 py-6 text-xs">
              <div className="flex justify-between items-center text-slate-300">
                <span>Paket Terpilih:</span>
                <strong className="text-white font-bold">{currentPkg.name}</strong>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Total Sesi:</span>
                <span className="text-teal-300 font-bold">{currentPkg.sessions > 0 ? `${currentPkg.sessions}x Sesi (@90 Menit)` : "Fleksibel"}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Armada Latihan:</span>
                <span className="text-white font-medium">{vehicle}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Pilihan Jam:</span>
                <span className="text-white font-medium">{slotCategory}</span>
              </div>
              <div className="flex justify-between items-center text-slate-300">
                <span>Rencana Mulai:</span>
                <span className="text-emerald-400 font-bold">{targetStart}</span>
              </div>

              {/* Total Price Callout */}
              <div className="pt-4 border-t border-slate-800/80 space-y-1">
                <span className="text-slate-400 text-xs">Total Biaya Paket:</span>
                <div className="text-3xl font-black text-white tracking-tight">
                  {formatRupiah(currentPkg.price)}
                </div>
                {currentPkg.price > 0 && (
                  <p className="text-[11px] text-teal-400">
                    Bisa DP awal cukup <strong>{formatRupiah(roundedDP)}</strong> untuk kunci slot
                  </p>
                )}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="space-y-3 pt-2">
              <button
                type="button"
                onClick={handleBooking}
                className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-black text-sm flex items-center justify-center gap-2.5 shadow-xl shadow-teal-950/80 glow-button transition-all"
              >
                <MessageCircle className="w-5 h-5 fill-white text-transparent" />
                <span>Kirim Reservasi ke WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <p className="text-[10px] text-center text-slate-400 leading-tight">
                Pesan akan langsung terformat rapi ke WhatsApp CS Amanah Drive untuk verifikasi slot kosong tanpa biaya pendaftaran tambahan.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
