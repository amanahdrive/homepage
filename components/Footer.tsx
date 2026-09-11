import React from "react";
import Image from "next/image";
import Link from "next/link";
import { CONTACT_INFO, generateWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, Phone, MapPin, Shield, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-900/60 border border-teal-500/30 flex items-center justify-center p-1.5">
                <Image
                  src="/assets/logo-amdri-symbol.png"
                  alt="Amanah Drive Symbol"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold text-xl tracking-tight text-white">
                  AMANAH <span className="text-teal-400">DRIVE</span>
                </span>
                <span className="text-[10px] text-slate-400 tracking-wider uppercase font-semibold">
                  Palembang Driving Academy
                </span>
              </div>
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Kursus mengemudi profesional terpercaya di Kota Palembang. Didukung instruktur sabar bersertifikasi, armada ganda rem (Dual Pedal Safety), dan pendampingan pembuatan SIM A resmi sampai tuntas.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-950 text-teal-300 text-[11px] font-medium border border-teal-500/30">
                <Shield className="w-3.5 h-3.5" /> 100% Bergaransi Aman
              </span>
            </div>
          </div>

          {/* Quick Nav */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
              Navigasi Halaman
            </h3>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#paket" className="hover:text-teal-400 transition-colors">Paket &amp; Biaya Kursus</a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-teal-400 transition-colors">Keunggulan &amp; Fasilitas</a>
              </li>
              <li>
                <a href="#kurikulum" className="hover:text-teal-400 transition-colors">Kurikulum 10 Sesi</a>
              </li>
              <li>
                <a href="#jadwal" className="hover:text-teal-400 transition-colors">Pilihan Slot Jadwal</a>
              </li>
              <li>
                <a href="#armada" className="hover:text-teal-400 transition-colors">Armada &amp; Instruktur</a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-teal-400 transition-colors">Simulasi Biaya &amp; Reservasi</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-teal-400 transition-colors">Ulasan Siswa</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">Pertanyaan Umum (FAQ)</a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-200">
              Kontak Layanan
            </h3>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{CONTACT_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{CONTACT_INFO.phoneDisplay}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={generateWhatsAppUrl("Halo Admin Amanah Drive, saya ingin bertanya.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline font-semibold"
                >
                  WhatsApp Resmi CS Amanah Drive
                </a>
              </div>
            </div>

            {/* Internal Staff Link */}
            <div className="pt-4">
              <a
                href="https://management-amanahdrive.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-slate-300 transition-colors"
              >
                <Lock className="w-3 h-3" />
                <span>Portal Internal Staff / Admin</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Amanah Drive Palembang. Seluruh Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Dibuat dengan rasa peduli untuk keselamatan berkendara di Kota Palembang
          </p>
        </div>

      </div>
    </footer>
  );
}
