"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Menu, X, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { CONTACT_INFO, generateWhatsAppUrl } from "@/lib/constants";

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
    { name: "Armada & Tim", href: "#armada" },
    { name: "Kalkulator", href: "#kalkulator" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
    { name: "Lokasi", href: "#lokasi" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-900 text-teal-100 text-xs py-1.5 px-4 text-center border-b border-teal-700/40 flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/30">
          <Sparkles className="w-3 h-3 mr-1" /> Promo Khusus
        </span>
        <span className="hidden sm:inline font-medium">Diskon Paket Pro & Gratis Konsultasi Jadwal Mengemudi di Palembang!</span>
        <span className="sm:hidden font-medium">Diskon Paket Pro + Gratis Konsultasi!</span>
        <a
          href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya mau klaim Promo Diskon Paket Pro & tanya jadwal.")}
          target="_blank"
          rel="noopener noreferrer"
          className="underline font-semibold hover:text-white ml-1"
        >
          Klaim Sekarang &rarr;
        </a>
      </div>

      {/* Main Bar */}
      <nav
        className={`transition-all duration-300 ${
          scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-teal-900/40 shadow-xl py-3" : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl bg-teal-900/50 border border-teal-500/30 flex items-center justify-center p-1.5 shadow-md shadow-teal-950/50 group-hover:border-teal-400/60 transition-all">
              <Image
                src="/assets/logo-amdri-symbol.png"
                alt="Amanah Drive Logo"
                width={36}
                height={36}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-white">
                  AMANAH <span className="text-teal-400">DRIVE</span>
                </span>
                <span className="text-[10px] uppercase tracking-wider font-bold bg-teal-500/20 text-teal-300 px-1.5 py-0.5 rounded border border-teal-500/30 hidden xs:inline-block">
                  Palembang
                </span>
              </div>
              <span className="text-[11px] text-slate-400 font-medium tracking-wide">
                Kursus Mengemudi Profesional
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 bg-slate-900/60 px-3 py-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-300 hover:text-white px-2.5 py-1 rounded-full hover:bg-teal-900/40 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Fast CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs text-slate-300 hover:text-teal-400 font-medium px-3 py-2 rounded-lg transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya ingin konsultasi pendaftaran kursus mengemudi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-500 hover:to-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-teal-900/40 glow-button transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Daftar via WA</span>
            </a>
          </div>

          {/* Mobile Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya ingin konsultasi pendaftaran kursus mengemudi.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-teal-600 rounded-lg text-white"
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

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="sm:hidden bg-slate-950/95 border-b border-teal-900/50 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-sm font-medium text-slate-200 hover:text-teal-400 py-2 border-b border-slate-900"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-3">
              <a
                href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya ingin konsultasi pendaftaran kursus mengemudi.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-bold py-3 rounded-xl shadow-lg"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
