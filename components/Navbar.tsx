"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AmanahLogo } from "./Logo";
import { MessageCircle, Menu, X, Phone, ShieldCheck } from "lucide-react";
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
      setScrolled(window.scrollY > 20);
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
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${scrolled ? "bg-white/95 backdrop-blur-md shadow-[0_1px_0_rgba(17,18,21,0.08)]" : "bg-white/90 backdrop-blur-sm"}`}>
      {/* Precision Notice Strip */}
      <div className="bg-[#f8f9fc] text-[#45474d] text-[11px] sm:text-xs py-1.5 px-4 text-center border-b border-[rgba(17,18,21,0.06)] flex items-center justify-between sm:justify-center gap-3 whitespace-nowrap overflow-hidden">
        <div className="flex items-center gap-2">
          <span className="tech-tag tech-tag-brand">
            <ShieldCheck className="w-3 h-3 text-[#0F7A73]" /> Resmi Palembang
          </span>
          <span className="hidden md:inline text-[11px] text-[#45474d] font-normal">
            Gratis Antar-Jemput ke Rumah &bull; Instruktur Sabar Bersertifikat &bull; AC Dingin
          </span>
        </div>
        <a
          href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya ketersediaan jadwal & promo kursus minggu ini.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0F7A73] hover:text-[#092E2B] font-semibold text-[11px] sm:text-xs flex items-center gap-1 shrink-0"
        >
          <span>Konsultasi Jadwal</span>
          <span>&rarr;</span>
        </a>
      </div>

      {/* Main Architectural Nav Bar */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="w-8 h-8 rounded-[4px] bg-[#111215] flex items-center justify-center p-1.5 text-white transition-colors group-hover:bg-[#0F7A73] shrink-0">
              <AmanahLogo className="w-5 h-5" variant="symbol" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-[#111215] whitespace-nowrap leading-none">
                AMANAH <span className="text-[#0F7A73]">DRIVE</span>
              </span>
              <span className="tech-tag hidden sm:inline-block">
                PLG
              </span>
            </div>
          </Link>

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

          {/* Mobile Action Touchpoints */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={generateWhatsAppUrl("Halo Kak Lia, saya ingin konsultasi pendaftaran.")}
              onClick={() =>
                trackWhatsAppLead({
                  lead_source: "navbar_mobile_button",
                  button_text: "WhatsApp Mobile Header",
                })
              }
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-[#111215] text-white rounded-[4px]"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#111215] border border-[rgba(17,18,21,0.12)] rounded-[4px] hover:bg-[#f8f9fc] transition-colors focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
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
