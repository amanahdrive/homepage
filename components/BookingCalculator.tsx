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
    <section id="kalkulator" className="py-20 sm:py-28 relative bg-white border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antigravity Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="antigravity-chip">
            <Calculator className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Simulator Biaya &amp; Jadwal</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight">
            Kalkulator &amp; Rencana Pendaftaran Siswa
          </h2>
          <p className="text-[#45474d] text-sm sm:text-base leading-relaxed">
            Pilih paket, kendaraan, dan slot waktu yang paling nyaman. Dapatkan rincian estimasi biaya serta DP, lalu kirimkan langsung ke WhatsApp Kak Lia dalam satu klik.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Input Selection Controls */}
          <div className="lg:col-span-7 antigravity-card p-6 sm:p-7 bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] space-y-6">
            
            {/* Step 1: Choose Package */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#45474d] mb-2.5">
                1. Pilih Paket Kursus:
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    type="button"
                    onClick={() => setSelectedPkgId(pkg.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      selectedPkgId === pkg.id
                        ? "border-[#121317] bg-[#f8f9fc] text-[#121317] shadow-sm ring-1 ring-[#121317]"
                        : "border-[rgba(33,34,38,0.08)] bg-white text-[#45474d] hover:border-[rgba(33,34,38,0.2)]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-[#121317]">{pkg.name}</span>
                      {pkg.popular && (
                        <span className="text-[10px] bg-[#121317] text-white px-2 py-0.5 rounded-full font-mono font-bold">
                          Populer
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#0F7A73] font-bold mt-1 tabular-nums">
                      {formatRupiah(pkg.price)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Vehicle */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#45474d] mb-2.5">
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
                    className={`p-3 rounded-xl text-left border transition-all ${
                      vehicle === v.name
                        ? "border-[#121317] bg-[#f8f9fc] text-[#121317] ring-1 ring-[#121317]"
                        : "border-[rgba(33,34,38,0.08)] bg-white text-[#45474d] hover:border-[rgba(33,34,38,0.2)]"
                    }`}
                  >
                    <div className="font-bold text-xs text-[#121317]">{v.name}</div>
                    <div className="text-[10px] text-[#45474d]">{v.desc}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Preferred Time */}
            <div>
              <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#45474d] mb-2.5">
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
                    className={`p-3 rounded-xl text-left border transition-all ${
                      slotCategory === t.label
                        ? "border-[#121317] bg-[#f8f9fc] text-[#121317] ring-1 ring-[#121317]"
                        : "border-[rgba(33,34,38,0.08)] bg-white text-[#45474d] hover:border-[rgba(33,34,38,0.2)]"
                    }`}
                  >
                    <div className="font-bold text-xs text-[#121317]">{t.label}</div>
                    <div className="text-[10px] text-[#0F7A73] font-mono font-medium">{t.id}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Target Start & Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#45474d] mb-2">
                  Nama Anda (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Rahmat Hidayat"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.1)] rounded-xl px-4 py-2.5 text-xs text-[#121317] placeholder-[#9aa0a6] focus:outline-none focus:border-[#121317]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#45474d] mb-2">
                  Rencana Mulai Belajar:
                </label>
                <select
                  value={targetStart}
                  onChange={(e) => setTargetStart(e.target.value)}
                  className="w-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.1)] rounded-xl px-4 py-2.5 text-xs text-[#121317] focus:outline-none focus:border-[#121317]"
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

          {/* Right: Antigravity Inverse Summary Card (Iconic Dark Obsidian Card) */}
          <div className="lg:col-span-5 antigravity-card-inverse p-6 sm:p-7 border border-[#212226] space-y-5 shadow-xl">
            
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-400" /> Ringkasan Pendaftaran
              </span>
              <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/10 text-emerald-300 border border-white/20">
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
                <span className="text-[#38BDF8] font-bold font-mono">{currentPkg.sessions > 0 ? `${currentPkg.sessions}x Sesi (@90 Menit)` : "Fleksibel"}</span>
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
                <span className="text-[#10B981] font-bold">{targetStart}</span>
              </div>

              {/* Total Price Callout */}
              <div className="pt-4 border-t border-white/10 space-y-1">
                <span className="text-slate-400 text-xs">Total Biaya Paket:</span>
                <div className="text-3xl font-extrabold text-white tracking-tight tabular-nums">
                  {formatRupiah(currentPkg.price)}
                </div>
                {currentPkg.price > 0 && (
                  <p className="text-[11px] text-teal-300">
                    Cukup DP <strong>{formatRupiah(roundedDP)}</strong> untuk mengunci slot jadwal &amp; armada.
                  </p>
                )}
              </div>
            </div>

            {/* Action CTA Button */}
            <div className="space-y-2.5 pt-2">
              <button
                type="button"
                onClick={handleBooking}
                className="w-full py-3.5 px-5 rounded-full bg-white hover:bg-[#f0f1f5] text-[#121317] font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <div className="relative w-4 h-4 rounded-full overflow-hidden border border-black/20 shrink-0">
                  <Image
                    src={STUDENT_CARE.avatar}
                    alt={STUDENT_CARE.name}
                    width={16}
                    height={16}
                    className="object-cover"
                  />
                </div>
                <span>Kirim Rencana Kursus ke Kak Lia</span>
                <ArrowRight className="w-3.5 h-3.5 ml-0.5" />
              </button>

              <p className="text-[10px] text-center text-slate-400 leading-tight font-mono">
                Format WhatsApp otomatis siap kirim langsung ke CS Resmi Amanah Drive.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
