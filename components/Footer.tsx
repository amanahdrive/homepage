import React from "react";
import Link from "next/link";
import Image from "next/image";
import { AmanahLogo } from "./Logo";
import { CONTACT_INFO, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { MessageCircle, Phone, MapPin, Shield, Lock, ExternalLink, Award, CheckCircle2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#051110] border-t border-[#132d29] pt-16 pb-12 relative text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#183632]">
          
          {/* Col 1: Brand & Credibility (5 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <AmanahLogo variant="landscape-white" className="h-10 w-44" alt="Amanah Drive Palembang" />
            </Link>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Lembaga pelatihan mengemudi profesional terpercaya di Kota Palembang. Mengedepankan keselamatan melalui armada Dual Pedal Safety (rem ganda), instruktur beretika tinggi, dan pendampingan pembuatan SIM A resmi sampai tuntas.
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-teal-950/80 text-teal-300 text-[11px] font-mono border border-teal-500/30">
                <Shield className="w-3.5 h-3.5 text-teal-400" />
                <span>100% Dual Pedal Safety</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[6px] bg-[#071513] text-slate-300 text-[11px] font-mono border border-[#183632]">
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>Sertifikat Terverifikasi</span>
              </span>
            </div>

            <div className="text-[11px] text-slate-400 space-y-1 pt-2 font-mono">
              <p>Operasional Sesi: <strong className="text-slate-200">09:00 - 22:00 WIB</strong> (Setiap Hari)</p>
              <p>Hotline Siswa: <strong className="text-slate-200">{CONTACT_INFO.phoneDisplay}</strong></p>
            </div>
          </div>

          {/* Col 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Navigasi
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
                <a href="#jadwal" className="hover:text-teal-400 transition-colors">Pilihan Slot Waktu</a>
              </li>
              <li>
                <a href="#armada" className="hover:text-teal-400 transition-colors">Armada &amp; Instruktur</a>
              </li>
              <li>
                <a href="#kalkulator" className="hover:text-teal-400 transition-colors">Simulasi Biaya &amp; DP</a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-teal-400 transition-colors">Ulasan Siswa</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-teal-400 transition-colors">Tanya Jawab (FAQ)</a>
              </li>
              <li>
                <a href="#lokasi" className="hover:text-teal-400 transition-colors">Area Jangkauan</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Area Layanan (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Jangkauan Palembang
            </h3>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Bukit Lama &amp; Bukit Siguntang</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Macan Kumbang &amp; Demang</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Gandus &amp; Lubuk Bakung</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Sudirman, KM 5 s/d KM 9</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Sukarami &amp; Sekip</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Plaju &amp; Jakabaring</span>
              </li>
              <li className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span>Sako &amp; Kenten (Titik Temu)</span>
              </li>
            </ul>

            <div className="pt-2">
              <span className="text-[11px] text-teal-400/90 font-mono">
                *Tersedia opsi jemput ke rumah atau titik kumpul terdekat.
              </span>
            </div>
          </div>

          {/* Col 4: Student Care & Official Account (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-200">
              Student Care &amp; Pembayaran
            </h3>
            
            <div className="bg-[#071513] p-3.5 rounded-lg border border-[#183632] space-y-2">
              <div className="flex items-center gap-2.5">
                <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 border border-teal-500/30">
                  <Image
                    src={STUDENT_CARE.avatar}
                    alt={STUDENT_CARE.name}
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="text-xs">
                  <p className="font-bold text-white leading-none">{STUDENT_CARE.name}</p>
                  <span className="text-[10px] text-teal-400 font-mono">Student Care Officer</span>
                </div>
              </div>
              <p className="text-[11px] text-slate-400 leading-snug">
                Konsultasi jadwal &amp; pendaftaran langsung via WhatsApp.
              </p>
              <a
                href={generateWhatsAppUrl("Halo Kak Lia, saya ingin konsultasi jadwal kursus mengemudi.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-teal-300 hover:text-teal-200 font-semibold"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Hubungi Kak Lia</span>
              </a>
            </div>

            <div className="bg-[#071513] p-3 rounded-lg border border-[#183632] text-xs space-y-1">
              <p className="text-[11px] text-slate-400 font-mono">Rekening Resmi DP:</p>
              <p className="font-mono text-white text-xs font-bold">
                {CONTACT_INFO.bankAccount.bank}: {CONTACT_INFO.bankAccount.number}
              </p>
              <p className="text-[10px] text-slate-500">a.n. {CONTACT_INFO.bankAccount.name}</p>
            </div>

            <div className="pt-1">
              <a
                href="https://management-amanahdrive.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-[11px] text-slate-500 hover:text-slate-300 font-mono transition-colors"
              >
                <Lock className="w-3 h-3" />
                <span>Portal Internal Staff / Admin</span>
                <ExternalLink className="w-2.5 h-2.5 ml-0.5 opacity-60" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-500">
          <p>© {new Date().getFullYear()} Amanah Drive Palembang. Seluruh Hak Cipta Dilindungi.</p>
          <p className="flex items-center gap-1">
            Standar Keselamatan Berkendara Kota Palembang • Anti Emosi &amp; Beretika
          </p>
        </div>

      </div>
    </footer>
  );
}

