"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AmanahLogo } from "./Logo";
import { MessageCircle, Menu, X, Phone, Sparkles } from "lucide-react";
import { CONTACT_INFO, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Paket & Biaya", href: "#paket" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Kurikulum 10 Sesi", href: "#kurikulum" },
    { name: "Jadwal Slot", href: "#jadwal" },
    { name: "Armada & Instruktur", href: "#armada" },
    { name: "Kalkulator", href: "#kalkulator" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Lokasi", href: "#lokasi" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Notice Strip */}
      <div className="bg-[#092E2B] text-teal-100 text-xs py-1.5 px-4 text-center border-b border-teal-800/40 flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-[6px] text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          <Sparkles className="w-3 h-3 mr-1" /> Promo Khusus Palembang
        </span>
        <span className="hidden sm:inline font-medium">Bimbingan SIM A Resmi Sampai Terbit &amp; Garansi 100% Aman Rem Ganda.</span>
        <span className="sm:hidden font-medium">Promo Paket Pro + SIM A Resmi!</span>
        <a
          href={generateWhatsAppUrl("Halo Kak Lia Admin Amanah Drive, saya mau tanya promo paket kursus mengemudi & jadwal minggu ini.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-teal-300 hover:text-white font-semibold underline underline-offset-2 ml-1"
        >
          Konsultasi Sekarang &rarr;
        </a>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-[#071513]/95 backdrop-blur-md border-b border-teal-900/40 shadow-lg py-2.5"
            : "bg-transparent py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Identity with Official Asset */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 rounded-lg bg-[#0E2522] border border-teal-500/30 flex items-center justify-center p-1.5 transition-all group-hover:border-teal-400">
              <AmanahLogo className="w-7 h-7" variant="symbol-white" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg tracking-tight text-white">
                  AMANAH <span className="text-teal-400">DRIVE</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-wider bg-teal-900/60 text-teal-300 px-1.5 py-0.5 rounded-[4px] border border-teal-500/30">
                  Palembang
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium">
                Kursus Mengemudi Profesional
              </span>
            </div>
          </Link>

          {/* Nav Links (Sleek hairline pill) */}
          <div className="hidden lg:flex items-center gap-0.5 bg-[#0D2320]/90 px-3 py-1.5 rounded-lg border border-teal-900/50">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-2.5 py-1 rounded-[6px] hover:bg-teal-950/60 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action: Phone & Student Care Touchpoint */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-teal-400 font-medium px-2.5 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={generateWhatsAppUrl("Halo Kak Lia (Admin Amanah Drive), saya mau tanya pendaftaran dan ketersediaan jadwal.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#0F7A73] hover:bg-[#128B83] text-white text-xs font-semibold px-4 py-2 rounded-lg border border-teal-500/40 shadow-sm transition-all"
            >
              <div className="relative w-4 h-4 rounded-full overflow-hidden border border-teal-300/40 shrink-0">
                <Image
                  src={STUDENT_CARE.avatar}
                  alt={STUDENT_CARE.name}
                  width={16}
                  height={16}
                  className="object-cover w-full h-full"
                />
              </div>
              <span>Chat Kak Lia</span>
              <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent" />
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={generateWhatsAppUrl("Halo Kak Lia Admin Amanah Drive, saya ingin konsultasi pendaftaran.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#0F7A73] rounded-lg text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-teal-400" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-[#071513]/98 border-b border-teal-900/60 px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-200 hover:text-teal-400 py-2 border-b border-slate-900/60"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href={generateWhatsAppUrl("Halo Kak Lia Admin Amanah Drive, saya ingin konsultasi pendaftaran kursus.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2.5 bg-[#0F7A73] text-white font-semibold py-3 rounded-lg text-sm"
              >
                <div className="w-5 h-5 rounded-full overflow-hidden border border-teal-200 shrink-0">
                  <Image
                    src={STUDENT_CARE.avatar}
                    alt={STUDENT_CARE.name}
                    width={20}
                    height={20}
                    className="object-cover"
                  />
                </div>
                <span>Konsultasi Gratis via WhatsApp Kak Lia</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
