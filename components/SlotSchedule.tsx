"use client";

import React, { useState } from "react";
import { TIME_SLOTS, generateWhatsAppUrl } from "@/lib/constants";
import { Clock, MessageCircle, Moon, Sun, Sunset, Sparkles } from "lucide-react";

export default function SlotSchedule() {
  const [selectedSlot, setSelectedSlot] = useState(TIME_SLOTS[3]); // Slot 4 default (Sore)

  const getSlotIcon = (id: number) => {
    if (id <= 2) return Sun;
    if (id <= 4) return Sunset;
    return Moon;
  };

  return (
    <section id="jadwal" className="py-24 relative bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
            <Clock className="w-3.5 h-3.5" /> Jadwal Super Fleksibel
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Pilihan 6 Slot Waktu Harian
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Tidak perlu bolos kerja atau kuliah! Anda bisa memilih sesi pagi hari yang segar, sore hari, hingga sesi malam hari yang tenang dan bebas terik matahari.
          </p>
        </div>

        {/* Slot Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {TIME_SLOTS.map((slot) => {
            const Icon = getSlotIcon(slot.id);
            const isSelected = selectedSlot.id === slot.id;

            return (
              <div
                key={slot.id}
                onClick={() => setSelectedSlot(slot)}
                className={`glass-card rounded-3xl p-6 border cursor-pointer transition-all duration-200 relative overflow-hidden ${
                  isSelected
                    ? "border-teal-400/90 bg-teal-950/40 shadow-xl shadow-teal-950/50 scale-[1.02]"
                    : "border-slate-800/80 hover:border-slate-700"
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? "bg-teal-500 text-white"
                          : "bg-slate-900 text-slate-400 border border-slate-800"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-extrabold text-white text-base">{slot.label}</span>
                  </div>
                  <span
                    className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${
                      slot.id >= 5
                        ? "bg-indigo-500/20 text-indigo-300 border-indigo-500/30"
                        : "bg-amber-500/20 text-amber-300 border-amber-500/30"
                    }`}
                  >
                    {slot.badge}
                  </span>
                </div>

                <div className="text-2xl font-black text-white mb-1 tracking-tight">
                  {slot.time}
                </div>
                <p className="text-xs text-slate-400 mb-4">{slot.desc}</p>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Durasi Sesi:</span>
                  <span className="text-teal-400 font-bold">90 Menit Efektif</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Slot CTA Callout */}
        <div className="max-w-xl mx-auto glass-card rounded-3xl p-6 sm:p-8 border border-teal-500/40 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" /> Pilihan Slot Anda:
          </div>
          <h3 className="text-2xl font-black text-white">
            {selectedSlot.label} ({selectedSlot.time})
          </h3>
          <p className="text-xs text-slate-400">
            Ingin memesan atau memastikan instruktur tersedia di jam ini? Klik tombol di bawah untuk reservasi langsung ke WhatsApp Admin.
          </p>
          <a
            href={generateWhatsAppUrl(
              `Halo Admin Amanah Drive, saya ingin reservasi jadwal untuk *${selectedSlot.label} (${selectedSlot.time})*. Apakah slot ini masih kosong?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-600 hover:from-teal-400 hover:to-emerald-500 text-white font-bold text-sm py-3.5 px-6 rounded-2xl shadow-lg glow-button transition-all"
          >
            <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            <span>Booking {selectedSlot.label} via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
