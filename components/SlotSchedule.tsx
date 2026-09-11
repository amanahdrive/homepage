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
    <section id="jadwal" className="py-20 sm:py-28 relative bg-white border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antigravity Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="antigravity-chip">
            <Clock className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Jadwal Super Fleksibel</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight">
            Pilihan 6 Slot Waktu Harian (09.00 - 22.00 WIB)
          </h2>
          <p className="text-[#45474d] text-sm sm:text-base leading-relaxed">
            Tidak perlu khawatir terbentur jam kantor atau kuliah. Anda bebas memilih slot pagi yang teduh, sore hari, hingga slot malam hari yang tenang dan bebas macet.
          </p>
        </div>

        {/* Slot Grid in Clean Antigravity Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {TIME_SLOTS.map((slot) => {
            const Icon = getSlotIcon(slot.id);
            const isSelected = selectedSlot.id === slot.id;

            return (
              <div
                key={slot.id}
                onClick={() => setSelectedSlot(slot)}
                className={`antigravity-card p-5 cursor-pointer transition-all ${
                  isSelected
                    ? "border-[#121317] shadow-md ring-1 ring-[#121317]"
                    : "border-[rgba(33,34,38,0.08)] bg-white hover:border-[rgba(33,34,38,0.2)]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#121317] text-white"
                          : "bg-[#f8f9fc] text-[#45474d] border border-[rgba(33,34,38,0.06)]"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="font-bold text-[#121317] text-sm">{slot.label}</span>
                  </div>
                  <span
                    className={`text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full border ${
                      slot.id >= 5
                        ? "bg-indigo-50 text-indigo-700 border-indigo-200"
                        : "bg-[#E6F4F2] text-[#0F7A73] border-[#0F7A73]/20"
                    }`}
                  >
                    {slot.badge}
                  </span>
                </div>

                <div className="text-xl font-bold text-[#121317] mb-1 tracking-tight tabular-nums">
                  {slot.time}
                </div>
                <p className="text-xs text-[#45474d] mb-3">{slot.desc}</p>

                <div className="pt-2.5 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between text-[11px]">
                  <span className="text-[#9aa0a6] font-mono">Durasi:</span>
                  <span className="text-[#0F7A73] font-bold">90 Menit Efektif</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Slot Callout Card */}
        <div className="max-w-2xl mx-auto antigravity-card p-6 sm:p-7 bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] text-center space-y-4 rounded-2xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-[#121317] text-xs font-mono font-bold border border-[rgba(33,34,38,0.08)]">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" /> Slot Dipilih:
          </div>
          <h3 className="text-2xl font-extrabold text-[#121317] tracking-tight tabular-nums">
            {selectedSlot.label} &mdash; {selectedSlot.time}
          </h3>
          <p className="text-xs sm:text-sm text-[#45474d] max-w-md mx-auto">
            Ingin mengunci slot ini sebelum terisi siswa lain? Hubungi Kak Lia via WhatsApp untuk cek ketersediaan instruktur dan konfirmasi armada.
          </p>
          <a
            href={generateWhatsAppUrl(
              `Halo Kak Lia Admin Amanah Drive, saya ingin reservasi jadwal untuk *${selectedSlot.label} (${selectedSlot.time})*. Apakah slot ini masih tersedia?`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="antigravity-btn-primary py-2.5 px-6 text-xs gap-2 rounded-full shadow-sm"
          >
            <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white/40 shrink-0">
              <Image
                src={STUDENT_CARE.avatar}
                alt={STUDENT_CARE.name}
                width={16}
                height={16}
                className="object-cover"
              />
            </div>
            <span>Kunci Slot {selectedSlot.label} via WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
}
