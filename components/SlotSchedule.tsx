"use client";

import React, { useState } from "react";
import Image from "next/image";
import { TIME_SLOTS, STUDENT_CARE, generateWhatsAppUrl, getAvatarStyle } from "@/lib/constants";
import { Clock, MessageCircle, Moon, Sun, Sunset, Sparkles } from "lucide-react";
import { trackWhatsAppLead, trackSlotSelect } from "@/lib/gtm";

interface SlotScheduleProps {
  slots?: typeof TIME_SLOTS;
  care?: typeof STUDENT_CARE;
}

export default function SlotSchedule({ slots = TIME_SLOTS, care }: SlotScheduleProps) {
  const activeCare = care || STUDENT_CARE;
  const [selectedSlot, setSelectedSlot] = useState(slots[3] || slots[0]); // Slot 4 default (Sore)

  const getSlotIcon = (id: number) => {
    if (id <= 2) return Sun;
    if (id <= 4) return Sunset;
    return Moon;
  };

  return (
    <section id="jadwal" className="py-14 sm:py-28 relative bg-[#f8f9fc] border-t border-[rgba(17,18,21,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#0F7A73] uppercase tracking-wider font-semibold">
            <Clock className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Pilihan Jam Latihan Fleksibel</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Pilihan 6 Slot Waktu Harian (09.00 - 22.00 WIB)
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Tidak perlu khawatir terbentur jam kantor atau kuliah. Anda bebas memilih slot pagi yang teduh, sore hari, hingga slot malam hari yang tenang dan bebas macet.
          </p>
        </div>

        {/* Slot Grid: Continuous Timetable Matrix */}
        <div className="border-t border-l border-[rgba(17,18,21,0.08)] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mb-8 sm:mb-12">
          {TIME_SLOTS.map((slot) => {
            const Icon = getSlotIcon(slot.id);
            const isSelected = selectedSlot.id === slot.id;

            return (
              <div
                key={slot.id}
                onClick={() => {
                  setSelectedSlot(slot);
                  trackSlotSelect(slot.label, slot.time);
                }}
                className={`border-r border-b border-[rgba(17,18,21,0.08)] p-5 sm:p-6 cursor-pointer transition-colors ${
                  isSelected
                    ? "bg-[#111215] text-white"
                    : "bg-white hover:bg-[#fafbfc] text-[#111215]"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div
                      className={`w-7 h-7 rounded-[4px] flex items-center justify-center ${
                        isSelected
                          ? "bg-white/10 text-white"
                          : "bg-[#f8f9fc] text-[#45474d] border border-[rgba(17,18,21,0.08)]"
                      }`}
                    >
                      <Icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="font-bold text-xs sm:text-sm">{slot.label}</span>
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider font-semibold ${
                      isSelected ? "text-teal-300" : "text-[#0F7A73]"
                    }`}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-teal-300" : "bg-[#0F7A73]"}`} />
                    <span>{slot.badge}</span>
                  </span>
                </div>

                <div className="text-xl sm:text-2xl font-extrabold mb-1 tracking-tight tabular-nums">
                  {slot.time}
                </div>
                <p className={`text-xs mb-4 ${isSelected ? "text-white/70" : "text-[#45474d]"}`}>
                  {slot.desc}
                </p>

                <div className={`pt-3 border-t flex items-center justify-between text-[11px] font-mono ${
                  isSelected ? "border-white/15 text-white/60" : "border-[rgba(17,18,21,0.06)] text-[#45474d]"
                }`}>
                  <span>DURASI</span>
                  <span className={`font-bold ${isSelected ? "text-teal-300" : "text-[#0F7A73]"}`}>
                    90 MENIT EFEKTIF
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Slot Architectural Console Bar */}
        <div className="max-w-3xl mx-auto border border-[rgba(17,18,21,0.08)] p-6 sm:p-8 bg-white text-center space-y-4 rounded-[4px]">
          <div className="flex items-center justify-center gap-2 font-mono text-[11px] text-[#0F7A73] uppercase tracking-wider font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>SLOT TERPILIH SAAT INI</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111215] tracking-tight tabular-nums">
            {selectedSlot.label} &mdash; {selectedSlot.time}
          </h3>
          <p className="text-xs sm:text-sm text-[#45474d] max-w-md mx-auto">
            Ingin mengunci slot ini sebelum terisi siswa lain? Hubungi Kak Lia via WhatsApp untuk cek ketersediaan instruktur dan konfirmasi armada.
          </p>
          <div className="pt-2 flex justify-center">
            <a
              href={generateWhatsAppUrl(
                `Halo Kak Lia Admin Amanah Drive, saya ingin reservasi jadwal untuk *${selectedSlot.label} (${selectedSlot.time})*. Apakah slot ini masih tersedia?`
              )}
              onClick={() =>
                trackWhatsAppLead({
                  lead_source: "slot_schedule",
                  button_text: "Kunci Slot via WhatsApp",
                  selected_slot: selectedSlot.label,
                  slot_time: selectedSlot.time,
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn-primary gap-2"
            >
              <div className="relative w-4 h-4 rounded-[2px] overflow-hidden border border-white/40 shrink-0">
                <Image
                  src={activeCare.avatar}
                  alt={activeCare.name}
                  width={16}
                  height={16}
                  className="object-cover"
                  style={getAvatarStyle(activeCare)}
                />
              </div>
              <span>Kunci Slot {selectedSlot.label} via WhatsApp</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
