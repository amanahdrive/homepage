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
    <section id="faq" className="py-20 md:py-28 relative bg-[#061210]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-500/30">
            <HelpCircle className="w-3.5 h-3.5" /> Pertanyaan Umum (FAQ)
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Jawaban Lengkap untuk Calon Siswa
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Semua hal yang sering ditanyakan seputar pendaftaran, keamanan latihan, reschedule jadwal, hingga proses SIM A resmi.
          </p>
        </div>

        {/* Accordion List (12px console cards) */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="console-card border border-slate-800 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-white hover:text-teal-300 transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-md bg-[#091E1C] border border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-teal-950 border-teal-500/50 text-teal-300" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Desk Banner with Kak Lia */}
        <div className="mt-10 console-card p-5 border border-teal-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="relative w-10 h-10 rounded-lg overflow-hidden border border-teal-400/40 shrink-0 bg-slate-900">
              <Image
                src={STUDENT_CARE.avatar}
                alt={STUDENT_CARE.name}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-bold text-white">Ada pertanyaan lain yang belum terjawab?</p>
              <p className="text-[11px] text-slate-400">Kak Lia siap menjawab konsultasi pendaftaran &amp; rute latihan secara langsung.</p>
            </div>
          </div>
          
          <a
            href={generateWhatsAppUrl("Halo Kak Lia Admin Amanah Drive, saya mau tanya hal lain seputar kursus mengemudi.")}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#0F7A73] hover:bg-[#128B83] text-white font-semibold text-xs transition-all shadow-sm"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
            <span>Tanya Langsung ke Kak Lia &rarr;</span>
          </a>
        </div>

      </div>
    </section>
  );
}

