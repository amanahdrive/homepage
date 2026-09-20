"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AmanahLogoLandscape } from "./Logo";
import {
  CONTACT_INFO,
  STUDENT_CARE,
  SOCIAL_LINKS,
  generateWhatsAppUrl,
  getAvatarStyle,
} from "@/lib/constants";
import { MessageCircle, Shield, Award, CheckCircle2, MapPin, Phone, Clock } from "lucide-react";
import { trackWhatsAppLead, pushToDataLayer } from "@/lib/gtm";

interface FooterProps {
  care?: typeof STUDENT_CARE;
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TikTokIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function ThreadsIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 192 192" fill="currentColor" aria-hidden="true">
      <path d="M97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z" />
    </svg>
  );
}

function YouTubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function getSocialIcon(id: string) {
  switch (id) {
    case "instagram":
      return <InstagramIcon className="w-4 h-4" />;
    case "facebook":
      return <FacebookIcon className="w-4 h-4" />;
    case "tiktok":
      return <TikTokIcon className="w-4 h-4" />;
    case "threads":
      return <ThreadsIcon className="w-4 h-4" />;
    case "youtube":
      return <YouTubeIcon className="w-4 h-4" />;
    default:
      return null;
  }
}

export default function Footer({ care }: FooterProps) {
  const activeCare = care || STUDENT_CARE;

  return (
    <footer className="bg-[#111215] border-t border-white/10 pt-12 pb-10 sm:pt-16 sm:pb-12 relative text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand, Legal & Social Media (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <AmanahLogoLandscape variant="landscape-white" className="h-8 w-auto" alt="Amanah Drive Palembang" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Lembaga kursus mengemudi resmi berizin di bawah naungan CV Amanah Drive, Kota Palembang. Mengutamakan kenyamanan belajar dengan instruktur sabar tanpa emosi, armada terawat ber-AC dingin, dan pendampingan pembuatan SIM A resmi sampai tuntas.
            </p>

            {/* Social Media Section */}
            <div className="pt-2 space-y-2.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-wider text-slate-400">
                  // Media Sosial Resmi
                </span>
                <span className="h-px flex-1 bg-white/10" />
              </div>

              <div className="flex items-center gap-2">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${item.name}: ${item.handle}`}
                    title={`${item.name} (${item.handle})`}
                    onClick={() => {
                      pushToDataLayer({
                        event: "social_link_click",
                        social_network: item.name,
                        destination_url: item.url,
                      });
                    }}
                    className="w-9 h-9 flex items-center justify-center rounded-[4px] border border-white/10 bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/10 hover:border-teal-400/50 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-teal-400"
                  >
                    {getSocialIcon(item.id)}
                  </a>
                ))}
              </div>
              <p className="text-[11px] text-slate-400 font-mono">
                Official Account: <span className="text-white font-medium">@amanahdrive.plg</span>
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-[10px] uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-teal-300">
                <Shield className="w-3.5 h-3.5 text-[#14B8A6]" />
                Instruktur Sabar Bersertifikat
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Sertifikat Resmi CV
              </span>
            </div>

            <div className="text-[11px] text-slate-400 space-y-1.5 pt-1 font-mono">
              <p className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Operasional: <strong className="text-white">08:30 – 22:00 WIB</strong> (Setiap Hari)</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>Hotline Resmi: <strong className="text-white">{CONTACT_INFO.phoneDisplay}</strong></span>
              </p>
              <p className="flex items-start gap-2 pt-0.5">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span className="leading-snug">Jl. Macan Kumbang XVIII, Ilir Barat I, Palembang</span>
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              // Navigasi
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#paket" className="hover:text-teal-300 transition-colors">Paket &amp; Biaya</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-teal-300 transition-colors">Keunggulan Modul</a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-teal-300 transition-colors">Kurikulum 10 Sesi</a>
              </li>
              <li>
                <a href="#armada" className="hover:text-teal-300 transition-colors">Pilihan Armada</a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-teal-300 transition-colors">Pilihan Slot Waktu</a>
              </li>
              <li>
                <a href="#daftar" className="hover:text-teal-300 transition-colors">Formulir Pendaftaran</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-teal-300 transition-colors">Ulasan Siswa</a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-teal-300 transition-colors">Area Jangkauan</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-300 transition-colors">Tanya Jawab (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Area Layanan Antar-Jemput (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              // Jangkauan Palembang
            </h3>
            <p className="text-[11px] text-slate-400">
              Fasilitas gratis antar-jemput ke rumah siswa untuk area:
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Bukit Lama &amp; Siguntang</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Macan Kumbang &amp; Demang</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Gandus, Polygon &amp; Lubuk Bakung</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Sudirman, KM 5 s/d KM 9</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Sukarami, H. Burlian &amp; Sekip</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Plaju &amp; Seberang Ulu / Jakabaring</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Sako &amp; Kenten (Titik Temu Strategis)</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-teal-300/90 font-mono leading-relaxed block">
                *Area luar jangkauan difasilitasi meeting point terdekat.
              </span>
            </div>
          </div>

          {/* Col 4: Student Care & Official Account (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              // Student Care &amp; Transaksi
            </h3>
            
            {/* Student Care Officer Box */}
            <div className="bg-[#16171c] p-4 rounded-[4px] border border-white/10 space-y-3">
              <div className="flex items-center gap-3">
                <div className="relative w-9 h-9 rounded-[4px] overflow-hidden shrink-0 border border-white/20 bg-slate-800">
                  <Image
                    src={activeCare.avatar}
                    alt={activeCare.name}
                    fill
                    className="object-cover"
                    style={getAvatarStyle(activeCare)}
                  />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white leading-none">{activeCare.name}</p>
                  <span className="text-[10px] text-teal-400 font-mono">Student Care Officer</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Konsultasi jadwal &amp; pendaftaran langsung via WhatsApp.
              </p>
              <a
                href={generateWhatsAppUrl("Halo Kak Lia, saya ingin konsultasi jadwal kursus mengemudi.")}
                onClick={() =>
                  trackWhatsAppLead({
                    lead_source: "footer_student_care",
                    button_text: "Hubungi Kak Lia",
                  })
                }
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-white font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hubungi Kak Lia &rarr;</span>
              </a>
            </div>

            {/* Bank Account Verification */}
            <div className="bg-[#16171c] p-3.5 rounded-[4px] border border-white/10 text-xs space-y-1">
              <div className="flex items-center justify-between text-[10px] text-slate-400 font-mono">
                <span>Rekening Resmi CV:</span>
                <span className="text-emerald-400 font-medium">Terverifikasi</span>
              </div>
              <p className="font-mono text-white text-xs font-bold">
                {CONTACT_INFO.bankAccount.bank}: {CONTACT_INFO.bankAccount.number}
              </p>
              <p className="text-[10px] text-slate-400">a.n. {CONTACT_INFO.bankAccount.name}</p>
              <p className="text-[9px] text-slate-400 pt-1 leading-tight">
                *Waspada penipuan, kami hanya menerima transfer melalui rekening resmi di atas.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom copyright & legal status */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-400">
          <p>&copy; {new Date().getFullYear()} Amanah Drive Palembang (CV Amanah Drive). Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Layanan Aktif Palembang
            </span>
            <span>&bull;</span>
            <span>Instruktur Sabar &amp; Beretika</span>
            <span>&bull;</span>
            <span>Sertifikat Resmi</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
