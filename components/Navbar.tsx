"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AmanahLogo } from "./Logo";
import { MessageCircle, Menu, X, Phone, ShieldCheck } from "lucide-react";
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
      {/* Antigravity Notice Strip */}
      <div className="bg-[#f8f9fc] text-[#45474d] text-xs py-1.5 px-4 text-center border-b border-[rgba(33,34,38,0.06)] flex items-center justify-center gap-2">
        <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-semibold bg-[#E6F4F2] text-[#0F7A73] border border-[#0F7A73]/20">
          <ShieldCheck className="w-3 h-3 mr-1" /> Standar Resmi Palembang
        </span>
        <span className="hidden sm:inline font-medium text-[12px]">
          100% Dual Pedal Safety Rem Ganda &amp; Pendampingan Uji SIM A Resmi.
        </span>
        <a
          href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya ketersediaan jadwal & promo kursus minggu ini.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0F7A73] hover:text-[#092E2B] font-semibold underline underline-offset-2 ml-1 text-[12px]"
        >
          Konsultasi Jadwal &rarr;
        </a>
      </div>

      {/* Floating Pill Nav */}
      <nav
        className={`transition-all duration-300 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-2.5`}
      >
        <div
          className={`flex items-center justify-between px-4 sm:px-6 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "bg-white/90 backdrop-blur-md border border-[rgba(33,34,38,0.1)] shadow-sm"
              : "bg-white/70 backdrop-blur-sm border border-[rgba(33,34,38,0.06)]"
          }`}
        >
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-full bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] flex items-center justify-center p-1 transition-all group-hover:border-[#0F7A73]">
              <AmanahLogo className="w-6 h-6" variant="symbol" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-sm tracking-tight text-[#121317]">
                  AMANAH <span className="text-[#0F7A73]">DRIVE</span>
                </span>
                <span className="text-[9px] uppercase font-bold tracking-wider bg-[#f0f1f5] text-[#45474d] px-1.5 py-0.5 rounded-full border border-[rgba(33,34,38,0.06)]">
                  Palembang
                </span>
              </div>
              <span className="text-[10px] text-[#45474d] font-medium hidden sm:inline">
                Driving Academy
              </span>
            </div>
          </Link>

          {/* Antigravity Nav Links (Centered Pill Strip) */}
          <div className="hidden lg:flex items-center gap-1 bg-[#f8f9fc] px-3 py-1 rounded-full border border-[rgba(33,34,38,0.06)]">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-[#45474d] hover:text-[#121317] px-2.5 py-1 rounded-full hover:bg-white transition-all"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Touchpoints */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              className="flex items-center gap-1.5 text-xs text-[#45474d] hover:text-[#121317] font-medium px-2.5 py-1.5 rounded-full hover:bg-[#f8f9fc] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#0F7A73]" />
              <span className="font-mono text-[11px]">{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={generateWhatsAppUrl("Halo Kak Lia, saya ingin konsultasi pendaftaran kursus Amanah Drive.")}
              target="_blank"
              rel="noopener noreferrer"
              className="antigravity-btn-primary py-1.5 px-4 text-xs gap-2 rounded-full shadow-sm"
            >
              <div className="relative w-4 h-4 rounded-full overflow-hidden border border-white/40 shrink-0">
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
              href={generateWhatsAppUrl("Halo Kak Lia, saya ingin konsultasi pendaftaran.")}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#121317] rounded-full text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#45474d] hover:text-[#121317] rounded-full hover:bg-[#f8f9fc] focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#121317]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-2 bg-white/95 backdrop-blur-md rounded-2xl border border-[rgba(33,34,38,0.1)] p-4 shadow-xl space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-xs font-medium text-[#45474d] hover:text-[#121317] py-2 px-3 rounded-lg hover:bg-[#f8f9fc] transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between text-xs text-[#45474d]">
              <span className="font-mono">{CONTACT_INFO.phoneDisplay}</span>
              <a
                href={generateWhatsAppUrl("Halo Kak Lia, saya mau tanya kursus.")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F7A73] font-bold"
              >
                WhatsApp Resmi &rarr;
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
