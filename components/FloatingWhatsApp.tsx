"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDismissed) {
        setShowTooltip(true);
      }
    }, 3500);
    return () => clearTimeout(timer);
  }, [isDismissed]);

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5">
      {/* Tooltip / Dialogue Card */}
      {showTooltip && !isDismissed && (
        <div className="max-w-[290px] antigravity-card p-4 shadow-xl border border-[rgba(33,34,38,0.12)] bg-white animate-fade-in relative text-left rounded-xl">
          <button
            onClick={() => {
              setShowTooltip(false);
              setIsDismissed(true);
            }}
            className="absolute top-2.5 right-2.5 text-[#9aa0a6] hover:text-[#121317] p-1"
            aria-label="Tutup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative w-8 h-8 rounded-lg overflow-hidden shrink-0 border border-[rgba(33,34,38,0.1)] bg-[#f8f9fc]">
              <Image
                src={STUDENT_CARE.avatar}
                alt={STUDENT_CARE.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-[#121317] leading-none">{STUDENT_CARE.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="text-[10px] font-mono text-[#0F7A73] font-semibold">Online Siap Bantu</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#45474d] leading-snug mb-3">
            Halo! Mau tanya pilihan jadwal, lokasi antar-jemput, atau simulasi DP kursus?
          </p>

          <a
            href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya jadwal & pendaftaran kursus mengemudi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="antigravity-btn-primary py-2 px-3 text-xs w-full flex items-center justify-center gap-1.5 text-center shadow-sm rounded-lg"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
            <span>Chat Langsung di WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button with Avatar Badge */}
      <a
        href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya informasi kursus Amanah Drive.")}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2.5 bg-white hover:bg-[#f8f9fc] border border-[rgba(33,34,38,0.12)] p-1.5 pr-3.5 rounded-xl shadow-lg transition-all duration-200"
        aria-label="Hubungi Kak Lia via WhatsApp"
      >
        <div className="relative w-9 h-9 rounded-lg overflow-hidden shrink-0 border border-[rgba(33,34,38,0.1)] bg-[#f8f9fc]">
          <Image
            src={STUDENT_CARE.avatar}
            alt={STUDENT_CARE.name}
            fill
            className="object-cover object-top"
          />
        </div>
        <div className="text-left hidden sm:block">
          <span className="text-[10px] font-mono text-[#0F7A73] block leading-none font-bold">Student Care</span>
          <span className="text-xs font-bold text-[#121317] group-hover:text-[#0F7A73] transition-colors">Chat Kak Lia</span>
        </div>
        <div className="w-7 h-7 rounded-md bg-[#E6F4F2] border border-[#0F7A73]/20 flex items-center justify-center shrink-0 ml-0.5">
          <MessageCircle className="w-3.5 h-3.5 text-[#0F7A73] fill-[#0F7A73]" />
        </div>
      </a>
    </aside>
  );
}
