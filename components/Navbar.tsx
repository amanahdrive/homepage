"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AmanahLogo } from "./Logo";
import { MessageCircle, Menu, X, Phone, ShieldCheck } from "lucide-react";
import { CONTACT_INFO, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { trackWhatsAppLead, trackPhoneCall } from "@/lib/gtm";

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
    { name: "Paket", href: "#paket" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Kurikulum", href: "#kurikulum" },
    { name: "Armada", href: "#armada" },
    { name: "Jadwal", href: "#jadwal" },
    { name: "Kalkulator", href: "#kalkulator" },
    { name: "Testimoni", href: "#testimoni" },
    { name: "Lokasi", href: "#lokasi" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Antigravity Notice Strip */}
      <div className="bg-[#f8f9fc] text-[#45474d] text-[11px] sm:text-xs py-1 sm:py-1.5 px-3 sm:px-4 text-center border-b border-[rgba(33,34,38,0.06)] flex items-center justify-center gap-2 whitespace-nowrap overflow-hidden">
        <span className="inline-flex items-center px-1.5 sm:px-2 py-0.5 rounded-md text-[9px] sm:text-[10px] font-semibold bg-[#E6F4F2] text-[#0F7A73] border border-[#0F7A73]/20 shrink-0">
          <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 mr-1 shrink-0" /> Standar Resmi Palembang
        </span>
        <span className="hidden sm:inline font-medium text-[12px] whitespace-nowrap">
          Kursus Mengemudi Mobil Palembang • Fasilitas Gratis Antar-Jemput ke Rumah • Dual Safety Assist
        </span>
        <a
          href={generateWhatsAppUrl("Halo Kak Lia, saya ingin tanya ketersediaan jadwal & promo kursus minggu ini.")}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#0F7A73] hover:text-[#092E2B] font-semibold underline underline-offset-2 ml-1 text-[11px] sm:text-[12px] shrink-0 whitespace-nowrap"
        >
          Konsultasi Jadwal &rarr;
        </a>
      </div>

      {/* Floating Sleek Nav */}
      <nav
        className={`transition-all duration-300 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto pt-1.5 sm:pt-2.5`}
      >
        <div
          className={`flex items-center justify-between px-3 sm:px-5 py-1.5 sm:py-2 rounded-xl transition-all duration-300 ${
            scrolled
              ? "bg-white/95 backdrop-blur-md border border-[rgba(33,34,38,0.1)] shadow-sm"
              : "bg-white/80 backdrop-blur-sm border border-[rgba(33,34,38,0.06)]"
          }`}
        >
          {/* Brand Identity */}
          <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group shrink-0 whitespace-nowrap">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] flex items-center justify-center p-1 transition-all group-hover:border-[#0F7A73] shrink-0">
              <AmanahLogo className="w-4 h-4 sm:w-5 sm:h-5" variant="symbol" />
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2 whitespace-nowrap shrink-0">
              <span className="font-extrabold text-xs sm:text-base tracking-tight text-[#121317] whitespace-nowrap leading-none">
                AMANAH <span className="text-[#0F7A73]">DRIVE</span>
              </span>
              <span className="text-[9px] uppercase font-bold tracking-wider bg-[#f0f1f5] text-[#45474d] px-1.5 py-0.5 rounded-md border border-[rgba(33,34,38,0.06)] shrink-0 hidden md:inline-block">
                Palembang
              </span>
            </div>
          </Link>

          {/* Nav Links (Clean Segmented Strip) */}
          <div className="hidden lg:flex items-center gap-0.5 xl:gap-1 bg-[#f8f9fc] px-1.5 py-1 rounded-lg border border-[rgba(33,34,38,0.06)] shrink-0">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-[#45474d] hover:text-[#121317] px-2.5 xl:px-3 py-1 rounded-md hover:bg-white transition-all whitespace-nowrap"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Action Touchpoints */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
            <a
              href={`tel:${CONTACT_INFO.phoneRaw}`}
              onClick={() => trackPhoneCall("navbar_desktop")}
              className="hidden xl:flex items-center gap-1.5 text-xs text-[#45474d] hover:text-[#121317] font-medium px-2 py-1.5 rounded-lg hover:bg-[#f8f9fc] transition-colors whitespace-nowrap shrink-0"
            >
              <Phone className="w-3.5 h-3.5 text-[#0F7A73] shrink-0" />
              <span className="font-mono text-[11px] whitespace-nowrap">{CONTACT_INFO.phoneDisplay}</span>
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
              className="antigravity-btn-primary py-2 px-3.5 xl:px-4 text-xs gap-1.5 rounded-lg shadow-sm whitespace-nowrap shrink-0"
            >
              <div className="relative w-4 h-4 rounded-md overflow-hidden border border-white/40 shrink-0">
                <Image
                  src={STUDENT_CARE.avatar}
                  alt={STUDENT_CARE.name}
                  width={16}
                  height={16}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="whitespace-nowrap font-medium">Chat Kak Lia</span>
              <MessageCircle className="w-3.5 h-3.5 fill-white text-transparent shrink-0" />
            </a>
          </div>

          {/* Mobile Hamburger */}
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
              className="p-2 bg-[#121317] rounded-lg text-white"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-[#45474d] hover:text-[#121317] rounded-lg hover:bg-[#f8f9fc] focus:outline-none"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#121317]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="sm:hidden mt-1.5 bg-white/95 backdrop-blur-md rounded-xl border border-[rgba(33,34,38,0.1)] p-3 shadow-xl space-y-1">
            <div className="grid grid-cols-2 gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-xs font-medium text-[#45474d] hover:text-[#121317] py-1.5 px-2.5 rounded-lg hover:bg-[#f8f9fc] transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
            <div className="pt-2 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between text-[11px] text-[#45474d] px-1">
              <span className="font-mono">{CONTACT_INFO.phoneDisplay}</span>
              <a
                href={generateWhatsAppUrl("Halo Kak Lia, saya mau tanya kursus.")}
                onClick={() =>
                  trackWhatsAppLead({
                    lead_source: "navbar_mobile_menu",
                    button_text: "WhatsApp Resmi Mobile Dropdown",
                  })
                }
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
