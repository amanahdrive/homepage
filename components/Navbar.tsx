"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { MessageCircle, Menu, X, Phone } from "lucide-react";
import { CONTACT_INFO, STUDENT_CARE, generateWhatsAppUrl, getAvatarStyle } from "@/lib/constants";
import { trackWhatsAppLead, trackPhoneCall } from "@/lib/gtm";

interface NavbarProps {
  care?: typeof STUDENT_CARE;
}

export default function Navbar({ care }: NavbarProps) {
  const activeCare = care || STUDENT_CARE;
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Paket", href: "#paket" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Kurikulum", href: "#kurikulum" },
    { name: "Armada", href: "#armada" },
    { name: "Jadwal", href: "#jadwal" },
    { name: "Daftar", href: "#daftar" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Lokasi", href: "#lokasi" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b border-[rgba(17,18,21,0.08)] ${scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_2px_16px_rgba(0,0,0,0.03)]" : "bg-white/90 backdrop-blur-sm"}`}>
      {/* Main Architectural Nav Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-14 sm:h-16">
          
          {/* Desktop Logo (Left-aligned as primary home anchor) */}
          <Link
            href="/"
            aria-label="Amanah Drive Palembang"
            className="hidden sm:flex items-center shrink-0 focus:outline-none transition-opacity hover:opacity-90"
          >
            <Image
              src="/assets/logo-amdri-landscape-clean.webp"
              alt="Amanah Drive Palembang"
              width={145}
              height={36}
              priority
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Mobile Left Quick Action (WhatsApp icon to balance header) */}
          <div className="sm:hidden flex items-center">
            <a
              href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya informasi kursus Amanah Drive.")}
              onClick={() =>
                trackWhatsAppLead({
                  lead_source: "navbar_mobile_left_wa",
                  button_text: "WhatsApp Mobile Header Left",
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-[#45474d] hover:text-[#0F7A73] transition-colors focus:outline-none"
              aria-label="Chat WhatsApp"
            >
              <MessageCircle className="w-5 h-5 text-[#0F7A73]" />
            </a>
          </div>

          {/* Mobile Center Logo (Dead Center in Mobile Viewport) */}
          <div className="sm:hidden absolute left-1/2 -translate-x-1/2 flex items-center">
            <Link
              href="/"
              aria-label="Amanah Drive Palembang"
              className="flex items-center focus:outline-none"
            >
              <Image
                src="/assets/logo-amdri-landscape-clean.webp"
                alt="Amanah Drive Palembang"
                width={128}
                height={32}
                priority
                className="h-7 w-auto object-contain"
              />
            </Link>
          </div>

          {/* Desktop Nav Links (Clean Segmented Editorial Row) */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link, idx) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-[#45474d] hover:text-[#111215] transition-colors whitespace-nowrap flex items-baseline gap-1"
              >
                <span className="font-mono text-[9px] text-[#9aa0a6]">0{idx + 1}</span>
                <span>{link.name}</span>
              </Link>
            ))}
          </div>

          {/* Desktop Right Action Touchpoints */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              onClick={() => trackPhoneCall("navbar_desktop")}
              className="hidden xl:flex items-center gap-1.5 text-xs text-[#45474d] hover:text-[#111215] font-mono tracking-tight transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#0F7A73]" />
              <span>{CONTACT_INFO.phoneDisplay}</span>
            </a>

            <a
              href={generateWhatsAppUrl("Halo Kak Lia, saya ingin konsultasi pendaftaran kursus Amanah Drive.")}
              onClick={() =>
                trackWhatsAppLead({
                  lead_source: "navbar_desktop",
                  button_text: "Chat Kak Lia",
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="tech-btn-primary gap-2"
            >
              <div className="relative w-4 h-4 rounded-[2px] overflow-hidden border border-white/30 shrink-0">
                <Image
                  src={activeCare.avatar}
                  alt={activeCare.name}
                  width={16}
                  height={16}
                  className="object-cover w-full h-full"
                  style={getAvatarStyle(activeCare)}
                />
              </div>
              <span>Chat {activeCare.name.split(' ')[0]} {activeCare.name.split(' ')[1] || ''}</span>
              <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent shrink-0" />
            </a>
          </div>

          {/* Mobile Right: Hamburger Toggle Button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111215] border border-[rgba(17,18,21,0.12)] rounded-[4px] hover:bg-[#f8f9fc] transition-colors focus:outline-none"
              aria-label="Buka Menu Navigasi"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Fullscreen Minimalist Drawer */}
        {mobileMenuOpen && (
          <div className="sm:hidden border-t border-[rgba(17,18,21,0.08)] bg-white py-4 px-2 space-y-4 animate-in fade-in slide-in-from-top-2 duration-150">
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link, idx) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-[4px] hover:bg-[#f8f9fc] border border-[rgba(17,18,21,0.06)] text-xs font-medium text-[#111215] flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-[9px] text-[#9aa0a6]">0{idx + 1}</span>
                </Link>
              ))}
            </div>

            <div className="pt-3 border-t border-[rgba(17,18,21,0.08)] space-y-2">
              <a
                href={generateWhatsAppUrl("Halo Kak Lia, saya ingin konsultasi pendaftaran.")}
                onClick={() => {
                  trackWhatsAppLead({
                    lead_source: "navbar_mobile_menu",
                    button_text: "WhatsApp Resmi Mobile Drawer",
                  });
                  setMobileMenuOpen(false);
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="tech-btn-teal w-full gap-2 text-xs"
              >
                <MessageCircle className="w-4 h-4 fill-white text-transparent" />
                <span>Konsultasi WhatsApp dengan {activeCare.name.split(' ')[0]}</span>
              </a>

              <div className="flex items-center justify-between text-[11px] font-mono text-[#45474d] px-1 pt-1">
                <span>Hotline: {CONTACT_INFO.phoneDisplay}</span>
                <span className="text-[#0F7A73] font-semibold">09.00 - 22.00 WIB</span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
