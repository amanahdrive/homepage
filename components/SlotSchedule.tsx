"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TIME_SLOTS, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { Clock, MessageCircle, Moon, Sun, Sunset, Sparkles } from "lucide-react";

export default function SlotSchedule() {
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[3]); // Slot 4 default (Sore)

  const getSlotIcon = (id: number) => {
    if (id <= 2) return Sun;
    if (id <= 4) return Sunset;
    return Moon;
  };

  return (
    <section id="jadwal" className="py-20 md:py-28 relative bg-[#071513]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-500/30">
            <Clock className="w-3.5 h-3.5" /> Jadwal Super Fleksibel
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Pilihan 6 Slot Waktu Harian (09.00 - 22.00 WIB)
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Tidak perlu khawatir terbentur jam kantor atau kuliah. Anda bebas memilih slot pagi yang teduh, sore hari, hingga slot malam hari yang tenang dan bebas macet.
          </p>
        </div>

        {/* Slot Grid (12px console cards) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {TIME_SLOTS.map((slot) => {
            const Icon = getSlotIcon(slot.id);
            const isSelected = selectedSlot.id === slot.id;

            return (
              <div
                key={slot.id}
                onClick={() => setSelectedSlot(slot)}
                className={`console-card p-5 border cursor-pointer transition-all ${
                  isSelected
                    ? "border-teal-400 bg-[#0A2421] shadow-sm"
                    : "border-slate-800 bg-[#0D2320] hover:border-teal-900"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-8 h-8 rounded-md flex items-center justify-center ${
                        isSelected
                          ? "bg-[#0F7A73] text-white"
                          : "bg-[#091E1C] text-slate-400 border border-slate-800"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-white text-sm">{slot.label}</span>
                  </div>
                  <span
                    className={`text-[10px] font-semibold px-2 py-0.5 rounded-[4px] border ${
                      slot.id >= 5
                        ? "bg-indigo-950 text-indigo-300 border-indigo-500/30"
                        : "bg-teal-950 text-teal-300 border-teal-500/30"
                    }`}
                  >
                    {slot.badge}
                  </span>
                </div>

                <div className="text-xl font-bold text-white mb-1 tracking-tight tabular-nums">
                  {slot.time}
                </div>
                <p className="text-xs text-slate-400 mb-3">{slot.desc}</p>

                <div className="pt-2.5 border-t border-slate-800/60 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400">Durasi Sesi:</span>
                  <span className="text-teal-300 font-semibold">90 Menit Efektif</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Slot Callout */}
        <div className="max-w-2xl mx-auto console-card p-5 sm:p-6 border border-teal-500/40 bg-[#09221F] text-center space-y-4">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-[4px] bg-teal-950 text-teal-300 text-xs font-bold border border-teal-500/30">
            <Sparkles className="w-3 h-3 text-amber-400" /> Slot yang Anda Pilih:
          </div>
          <h3 className="text-xl sm:text-2xl font-bold text-white tabular-nums">
            {selectedSlot.label} &mdash; {selectedSlot.time}
          </h3>
          <p className="text-xs text-slate-300 max-w-md mx-auto">
            Ingin mengunci slot ini sebelum terisi siswa lain? Hubungi Kak Lia via WhatsApp untuk cek ketersediaan instruktur dan konfirmasi armada.
          </p>
          <a
            href={generateWhatsAppUrl(
              `Halo Kak Lia Admin Amanah Drive, saya ingin reservasi jadwal untuk *${selectedSlot.label} (${selectedSlot.time})*. Apakah slot ini masih tersedia?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0F7A73] hover:bg-[#128B83] text-white font-semibold text-xs py-3 px-6 rounded-lg border border-teal-400/40 shadow-sm transition-all"
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
            <span>Kunci Slot {selectedSlot.label} via WhatsApp Kak Lia</span>
          </a>
        </div>

      </div>
    </section>
  );
}

