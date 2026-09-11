"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { generateWhatsAppUrl } from "@/lib/constants";

export default function FloatingWhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <aside aria-label="WhatsApp Quick Contact" className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Tooltip / Speech Bubble */}
      {showTooltip && (
        <div className="hidden sm:flex items-center gap-2 bg-slate-900/95 border border-teal-500/40 text-white text-xs py-2 px-3.5 rounded-2xl shadow-2xl backdrop-blur-md animate-fade-in relative">
          <span>Ada pertanyaan seputar kursus? <strong>Chat CS kami</strong></span>
          <button
            onClick={() => setShowTooltip(false)}
            className="text-slate-400 hover:text-white ml-1"
            aria-label="Close"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Button */}
      <a
        href={generateWhatsAppUrl("Halo CS Amanah Drive, saya mau tanya pendaftaran kursus mengemudi di Palembang.")}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-500 hover:from-emerald-500 hover:to-teal-400 text-white flex items-center justify-center shadow-2xl shadow-teal-950/80 hover:scale-105 transition-transform duration-200 relative group"
        aria-label="Hubungi WhatsApp"
      >
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-slate-950 animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-amber-400 rounded-full border-2 border-slate-950" />
        <MessageCircle className="w-7 h-7 fill-white text-transparent" />
      </a>
    </aside>
  );
}
