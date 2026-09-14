"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MessageCircle, X } from "lucide-react";
import { STUDENT_CARE, generateWhatsAppUrl, getAvatarStyle } from "@/lib/constants";
import { trackWhatsAppLead } from "@/lib/gtm";

interface FloatingWhatsAppProps {
  care?: typeof STUDENT_CARE;
}

export default function FloatingWhatsApp({ care }: FloatingWhatsAppProps) {
  const activeCare = care || STUDENT_CARE;
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
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip / Dialogue Card */}
      {showTooltip && !isDismissed && (
        <div className="max-w-[270px] sm:max-w-[300px] p-3.5 sm:p-4 bg-white border border-[rgba(17,18,21,0.12)] shadow-[0_8px_24px_rgba(0,0,0,0.06)] rounded-[4px] animate-fade-in relative text-left">
          <button
            onClick={() => {
              setShowTooltip(false);
              setIsDismissed(true);
            }}
            className="absolute top-2.5 right-2.5 text-[#9aa0a6] hover:text-[#111215] p-1 transition-colors"
            aria-label="Tutup"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          
          <div className="flex items-center gap-2.5 mb-2">
            <div className="relative w-8 h-8 rounded-[3px] overflow-hidden shrink-0 border border-[rgba(17,18,21,0.1)] bg-[#f4f5f7]">
              <Image
                src={activeCare.avatar}
                alt={activeCare.name}
                fill
                className="object-cover"
                style={getAvatarStyle(activeCare)}
              />
            </div>
            <div>
              <p className="text-xs font-bold text-[#111215] leading-none">{activeCare.name}</p>
              <div className="flex items-center gap-1.5 mt-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0F7A73]" />
                <span className="text-[10px] font-mono text-[#0F7A73] uppercase tracking-wider font-semibold">Online</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-[#555861] leading-relaxed mb-3">
            Halo! Mau tanya jadwal latihan, lokasi antar-jemput, atau simulasi DP paket kursus?
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
            className="tech-btn-primary py-2 px-3 text-xs w-full flex items-center justify-center gap-2 text-center rounded-[4px]"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
            <span>Chat WhatsApp</span>
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
        className="group flex items-center gap-2.5 bg-white hover:bg-[#fafafa] border border-[rgba(17,18,21,0.14)] p-1.5 pr-3.5 rounded-[4px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-150"
        aria-label="Hubungi Kak Lia via WhatsApp"
      >
        <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-[3px] overflow-hidden shrink-0 border border-[rgba(17,18,21,0.1)] bg-[#f4f5f7]">
          <Image
            src={activeCare.avatar}
            alt={activeCare.name}
            fill
            className="object-cover"
            style={getAvatarStyle(activeCare)}
          />
        </div>
        <div className="text-left hidden sm:block">
          <span className="text-[10px] font-mono text-[#0F7A73] block leading-none font-bold uppercase tracking-wider">Student Care</span>
          <span className="text-xs font-bold text-[#111215] group-hover:text-[#0F7A73] transition-colors">{activeCare.name}</span>
        </div>
        <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-[2px] bg-[#E6F4F2] border border-[#0F7A73]/20 flex items-center justify-center shrink-0 ml-0.5">
          <MessageCircle className="w-3.5 h-3.5 text-[#0F7A73] fill-[#0F7A73]" />
        </div>
      </a>
    </aside>
  );
}
