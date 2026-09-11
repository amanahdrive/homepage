"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FAQS, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 relative bg-[#f8f9fc] border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antigravity Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="antigravity-chip">
            <HelpCircle className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Pertanyaan Umum (FAQ)</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight">
            Jawaban Lengkap untuk Calon Siswa
          </h2>
          <p className="text-[#45474d] text-sm sm:text-base leading-relaxed">
            Semua hal yang sering ditanyakan seputar pendaftaran, keamanan latihan, reschedule jadwal, hingga proses SIM A resmi.
          </p>
        </div>

        {/* Accordion List in Clean Antigravity Cards */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="antigravity-card overflow-hidden transition-all bg-white"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-[#121317] hover:text-[#0F7A73] transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-[#121317] text-white" : "text-[#45474d]"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-[#45474d] leading-relaxed border-t border-[rgba(33,34,38,0.06)]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Desk Banner with Kak Lia */}
        <div className="mt-10 antigravity-card p-5 sm:p-6 bg-white border border-[rgba(33,34,38,0.08)] flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl shadow-sm">
          <div className="flex items-center gap-3 text-left">
            <div className="relative w-11 h-11 rounded-full overflow-hidden border border-[rgba(33,34,38,0.1)] shrink-0 bg-[#f8f9fc]">
              <Image
                src={STUDENT_CARE.avatar}
                alt={STUDENT_CARE.name}
                width={44}
                height={44}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm font-bold text-[#121317]">Ada pertanyaan lain yang belum terjawab?</p>
              <p className="text-[11px] text-[#45474d]">Kak Lia siap menjawab konsultasi pendaftaran &amp; rute latihan secara langsung.</p>
            </div>
          </div>
          
          <a
            href={generateWhatsAppUrl("Halo Kak Lia Admin Amanah Drive, saya mau tanya hal lain seputar kursus mengemudi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="antigravity-btn-primary py-2.5 px-5 text-xs gap-2 rounded-full shrink-0 shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
            <span>Tanya Kak Lia via WhatsApp &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}
