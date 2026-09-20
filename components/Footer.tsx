"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AmanahLogoLandscape } from "./Logo";
import { CONTACT_INFO, STUDENT_CARE, generateWhatsAppUrl, getAvatarStyle } from "@/lib/constants";
import { MessageCircle, Phone, MapPin, Shield, Award, CheckCircle2 } from "lucide-react";
import { trackWhatsAppLead } from "@/lib/gtm";

interface FooterProps {
  care?: typeof STUDENT_CARE;
}

export default function Footer({ care }: FooterProps) {
  const activeCare = care || STUDENT_CARE;
  return (
    <footer className="bg-[#111215] border-t border-white/10 pt-12 pb-8 sm:pt-16 sm:pb-12 relative text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 pb-10 border-b border-white/10">
          
          {/* Col 1: Brand & Credibility (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <AmanahLogoLandscape variant="landscape-white" className="h-8 w-auto" alt="Amanah Drive Palembang" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Lembaga pelatihan mengemudi profesional di bawah naungan CV Amanah Drive, Kota Palembang. Mengedepankan keselamatan melalui instruktur sabar beretika tinggi, armada nyaman terawat, dan pendampingan pembuatan SIM A resmi sampai tuntas.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-1 font-mono text-[10px] uppercase tracking-wider">
              <span className="flex items-center gap-1.5 text-teal-300">
                <Shield className="w-3.5 h-3.5 text-[#14B8A6]" />
                Instruktur Sabar
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                Sertifikat Resmi CV
              </span>
            </div>

            <div className="text-[11px] text-slate-400 space-y-1 pt-1 font-mono">
              <p>Operasional Sesi: <strong className="text-white">09:00 - 22:00 WIB</strong> (Setiap Hari)</p>
              <p>Hotline Siswa: <strong className="text-white">{CONTACT_INFO.phoneDisplay}</strong></p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Navigasi
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#paket" className="hover:text-teal-300 transition-colors">Paket &amp; Biaya</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-teal-300 transition-colors">Keunggulan</a>
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
                <a href="#daftar" className="hover:text-teal-300 transition-colors">Form Pendaftaran</a>
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

          {/* Col 3: Area Layanan (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Jangkauan Palembang
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Bukit Lama &amp; Siguntang</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Macan Kumbang &amp; Demang</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Gandus &amp; Lubuk Bakung</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Sudirman, KM 5 s/d KM 9</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Sukarami &amp; Sekip</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Plaju &amp; Jakabaring</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#14B8A6] shrink-0" />
                <span>Sako &amp; Kenten (Titik Temu)</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-teal-300 font-mono">
                *Opsi penjemputan ke rumah atau meeting point.
              </span>
            </div>
          </div>

          {/* Col 4: Student Care & Official Account (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Student Care &amp; Pembayaran
            </h3>
            
            <div className="bg-[#16171c] p-4 rounded-[4px] border border-white/10 space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-[4px] overflow-hidden shrink-0 border border-white/20">
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
                className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-white font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hubungi Kak Lia &rarr;</span>
              </a>
            </div>

            <div className="bg-[#16171c] p-3.5 rounded-[4px] border border-white/10 text-xs space-y-1">
              <p className="text-[10px] text-slate-400 font-mono">Rekening Resmi DP:</p>
              <p className="font-mono text-white text-xs font-bold">
                {CONTACT_INFO.bankAccount.bank}: {CONTACT_INFO.bankAccount.number}
              </p>
              <p className="text-[10px] text-slate-500">a.n. {CONTACT_INFO.bankAccount.name}</p>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>{new Date().getFullYear()} Amanah Drive Palembang. Seluruh Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-2">
            <span>Standar Resmi Palembang</span>
            <span>&bull;</span>
            <span>Anti Emosi &amp; Beretika</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
