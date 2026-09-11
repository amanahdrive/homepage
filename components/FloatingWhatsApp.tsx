"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { trackWhatsAppLead } from "@/lib/gtm";

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
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-4 right-4 sm:bottom-5 sm:right-5 z-50 flex flex-col items-end gap-2 sm:gap-2.5">
      {/* Tooltip / Dialogue Card */}
      {showTooltip && !isDismissed && (
        <div className="max-w-[270px] sm:max-w-[290px] antigravity-card p-3 sm:p-4 shadow-xl border border-[rgba(33,34,38,0.12)] bg-white animate-fade-in relative text-left rounded-xl">
          <button
            onClick={() => {
              setShowTooltip(false);
              setIsDismissed(true);
            }}
            className="absolute top-2 right-2 sm:top-2.5 sm:right-2.5 text-[#9aa0a6] hover:text-[#121317] p-1"
            aria-label="Tutup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2 sm:gap-2.5 mb-1.5 sm:mb-2">
            <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-lg overflow-hidden shrink-0 border border-[rgba(33,34,38,0.1)] bg-[#f8f9fc]">
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
                <span className="text-[9px] sm:text-[10px] font-mono text-[#0F7A73] font-semibold">Online Siap Bantu</span>
              </div>
            </div>
          </div>

          <p className="text-[11px] sm:text-xs text-[#45474d] leading-snug mb-2.5 sm:mb-3">
            Halo! Mau tanya pilihan jadwal, lokasi antar-jemput, atau simulasi DP kursus?
          </p>

          <a
            href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya jadwal & pendaftaran kursus mengemudi.")}
            onClick={() =>
              trackWhatsAppLead({
                lead_source: "floating_whatsapp_popup",
                button_text: "Chat Langsung di WhatsApp",
              })
            }
            target="_blank"
            rel="noopener noreferrer"
            className="antigravity-btn-primary py-1.5 sm:py-2 px-3 text-xs w-full flex items-center justify-center gap-1.5 text-center shadow-sm rounded-lg"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
            <span>Chat Langsung di WhatsApp</span>
          </a>
        </div>
      )}

      {/* Floating Button with Avatar Badge */}
      <a
        href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya informasi kursus Amanah Drive.")}
        onClick={() =>
          trackWhatsAppLead({
            lead_source: "floating_whatsapp_button",
            button_text: "Chat Kak Lia Floating",
          })
        }
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-2 sm:gap-2.5 bg-white hover:bg-[#f8f9fc] border border-[rgba(33,34,38,0.12)] p-1 sm:p-1.5 pr-2.5 sm:pr-3.5 rounded-xl shadow-lg transition-all duration-200"
        aria-label="Hubungi Kak Lia via WhatsApp"
      >
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-lg overflow-hidden shrink-0 border border-[rgba(33,34,38,0.1)] bg-[#f8f9fc]">
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
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-md bg-[#E6F4F2] border border-[#0F7A73]/20 flex items-center justify-center shrink-0 ml-0.5">
          <MessageCircle className="w-3.5 h-3.5 text-[#0F7A73] fill-[#0F7A73]" />
        </div>
      </a>
    </aside>
  );
}
