"use client";

import React, { useState } from "react";
import { FAQS, generateWhatsAppUrl } from "@/lib/constants";
import { HelpCircle, ChevronDown, MessageCircle } from "lucide-react";

export default function FAQSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0); // First item open by default

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative bg-slate-950/60">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
            <HelpCircle className="w-3.5 h-3.5" /> Pertanyaan Umum
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Jawaban untuk Pertanyaan Anda
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Semua hal yang sering ditanyakan oleh calon siswa sebelum memulai kursus di Amanah Drive.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-slate-800/80 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span className="font-bold text-sm sm:text-base text-white hover:text-teal-300 transition-colors">
                    {faq.q}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 bg-teal-900/60 border-teal-500/40 text-teal-300" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/50">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help Desk Banner */}
        <div className="mt-12 text-center p-6 rounded-3xl bg-slate-900/80 border border-slate-800 space-y-3">
          <p className="text-xs sm:text-sm text-slate-300">
            Punya pertanyaan lain yang belum terjawab di sini?
          </p>
          <div>
            <a
              href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya mau tanya hal lain seputar kursus mengemudi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600/20 hover:bg-teal-600/30 border border-teal-500/40 text-teal-300 font-bold text-xs transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-teal-300 text-transparent" />
              <span>Tanyakan Langsung ke CS Amanah Drive via WA &rarr;</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
