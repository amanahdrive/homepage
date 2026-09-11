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
        <div className="max-w-[290px] console-card rounded-xl p-3.5 shadow-2xl border border-teal-500/30 animate-fade-in relative text-left">
          <button
            onClick={() => {
              setShowTooltip(false);
              setIsDismissed(true);
            }}
            className="absolute top-2.5 right-2.5 text-slate-400 hover:text-white p-1"
            aria-label="Tutup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-teal-400/40 bg-[#071513]">
              <Image
                src={STUDENT_CARE.avatar}
                alt={STUDENT_CARE.name}
                fill
                className="object-cover object-top"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-white leading-none">{STUDENT_CARE.name}</p>
              <div className="flex items-center gap-1.5 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] font-mono text-emerald-400">Online Siap Bantu</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-300 leading-snug mb-3">
            Halo! Mau tanya pilihan jadwal, lokasi antar-jemput, atau simulasi DP kursus?
          </p>

          <a
            href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya jadwal & pendaftaran kursus mengemudi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="tactile-btn-primary rounded-lg py-2 px-3 text-xs w-full flex items-center justify-center gap-1.5 text-center"
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
        className="group flex items-center gap-2.5 bg-[#0D2320] hover:bg-[#13322e] border border-teal-500/40 hover:border-teal-400 p-1.5 pr-4 rounded-full shadow-2xl transition-all duration-200"
        aria-label="Hubungi Kak Lia via WhatsApp"
      >
        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-teal-400/50 bg-[#071513]">
          <Image
            src={STUDENT_CARE.avatar}
            alt={STUDENT_CARE.name}
            fill
            className="object-cover object-top"
          />
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-400 rounded-full border border-[#071513]" />
        </div>
        <div className="text-left hidden sm:block">
          <span className="text-[10px] font-mono text-teal-400 block leading-none">Student Care</span>
          <span className="text-xs font-bold text-white group-hover:text-teal-200 transition-colors">Chat Kak Lia</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center shrink-0 ml-0.5">
          <MessageCircle className="w-3.5 h-3.5 text-emerald-400 fill-emerald-400/30" />
        </div>
      </a>
    </aside>
  );
}

