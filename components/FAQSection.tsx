"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FAQS, STUDENT_CARE, generateWhatsAppUrl, getAvatarStyle } from "@/lib/constants";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";
import { trackWhatsAppLead, trackFaqToggle } from "@/lib/gtm";

interface FAQSectionProps {
  care?: typeof STUDENT_CARE;
}

export default function FAQSection({ care }: FAQSectionProps) {
  const activeCare = care || STUDENT_CARE;
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    const nextState = openIdx === idx ? null : idx;
    setOpenIdx(nextState);
    if (nextState !== null && FAQS[idx]) {
      trackFaqToggle(FAQS[idx].q, true);
    }
  };

  return (
    <section id="faq" className="py-14 sm:py-28 relative bg-white border-t border-[rgba(17,18,21,0.08)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-[#0F7A73] uppercase tracking-wider font-semibold">
            <HelpCircle className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Pertanyaan Umum (FAQ)</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Jawaban Lengkap untuk Calon Siswa
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Semua hal yang sering ditanyakan seputar pendaftaran, keamanan latihan, reschedule jadwal, hingga proses SIM A resmi.
          </p>
        </div>

        {/* Conversational Hairline Accordion (Zero Boxy Containers) */}
        <div className="border-t border-[rgba(17,18,21,0.08)] divide-y divide-[rgba(17,18,21,0.08)]">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 sm:py-5 text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                >
                  <span className="font-bold text-sm sm:text-base text-[#111215] group-hover:text-[#0F7A73] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <div
                    className={`w-6 h-6 rounded-[4px] border border-[rgba(17,18,21,0.08)] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#111215] text-white border-[#111215]" : "bg-[#f8f9fc] text-[#45474d]"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="pb-5 pt-1 text-xs sm:text-sm text-[#45474d] leading-relaxed animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Student Care Help Desk Console Bar */}
        <div className="mt-10 sm:mt-16 p-5 sm:p-6 bg-[#f8f9fc] border border-[rgba(17,18,21,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 rounded-[4px]">
          <div className="flex items-center gap-3 text-left">
            <div className="relative w-10 h-10 rounded-[4px] overflow-hidden border border-[rgba(17,18,21,0.12)] shrink-0 bg-white">
              <Image
                src={activeCare.avatar}
                alt={activeCare.name}
                width={40}
                height={40}
                className="object-cover"
                style={getAvatarStyle(activeCare)}
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#111215]">Ada pertanyaan lain yang belum terjawab?</p>
              <p className="text-[11px] text-[#45474d]">{activeCare.name.split(' ')[0]} siap menjawab konsultasi pendaftaran &amp; rute latihan secara langsung.</p>
            </div>
          </div>
          
          <a
            href={generateWhatsAppUrl("Halo Kak Lia Admin Amanah Drive, saya mau tanya hal lain seputar kursus mengemudi.")}
            onClick={() =>
              trackWhatsAppLead({
                lead_source: "faq_helpdesk",
                button_text: "Tanya Kak Lia via WhatsApp",
              })
            }
            target="_blank"
            rel="noopener noreferrer"
            className="tech-btn-primary gap-2 text-xs w-full sm:w-auto"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
            <span>Tanya Kak Lia via WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
