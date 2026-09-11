import React from "react";
import Image from "next/image";
import { FLEET, INSTRUCTORS, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { Car, ShieldCheck, CheckCircle2, Users, Star, MessageCircle } from "lucide-react";

export default function FleetAndInstructors() {
  return (
    <section id="armada" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* ================= FLEET SECTION ================= */}
        <div>
          {/* Header */}
          <div className="text-left max-w-3xl mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-500/30">
              <Car className="w-3.5 h-3.5" /> Standar Armada Resmi
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Pilihan Armada Latihan Nyaman &amp; Terawat
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Seluruh armada Amanah Drive telah dimodifikasi sistem <strong className="text-teal-300">Dual Pedal Safety</strong> (pedal rem &amp; kopling ganda di sisi instruktur), AC dingin, serta perawatan berkala bengkel resmi untuk keamanan belajar maksimal.
            </p>
          </div>

          {/* Fleet Grid (12px console cards) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLEET.map((car, idx) => (
              <div
                key={idx}
                className="console-card p-6 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-[4px] bg-teal-950 text-teal-300 font-bold text-xs border border-teal-500/30">
                      {car.type}
                    </span>
                    <span className="text-[11px] font-mono text-slate-400 bg-[#091E1C] px-2 py-0.5 rounded-[4px] border border-slate-800">
                      {car.plate}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {car.name}
                  </h3>
                  <p className="text-xs text-teal-400 font-medium mb-3">Warna: {car.color}</p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-5">
                    {car.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-slate-800/80 mb-4">
                    {car.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60">
                  <span className="text-[11px] text-teal-300/90 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                    Kontrol Penuh Pedal Rem Tambahan Instruktur
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INSTRUCTORS SECTION ================= */}
        <div>
          {/* Header */}
          <div className="text-left max-w-3xl mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-500/30">
              <Users className="w-3.5 h-3.5" /> Tim Instruktur &amp; Pelayanan
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Didampingi Instruktur Sabar &amp; Bersertifikat Resmi
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Bukan sekadar bisa menyetir — instruktur kami berpegang pada SOP kesabaran penuh, tanpa bentakan/emosi, serta membimbing dari nol sampai siswa mandiri di jalan raya Palembang.
            </p>
          </div>

          {/* Instructors Grid with Real Photographic Assets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {INSTRUCTORS.map((ins, idx) => (
              <div
                key={idx}
                className="console-card overflow-hidden border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  {/* Real Portrait */}
                  <div className="relative w-full h-64 bg-[#091E1C] overflow-hidden border-b border-teal-900/40">
                    <Image
                      src={ins.avatar}
                      alt={ins.name}
                      fill
                      className="object-cover object-top transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0D2320] via-transparent to-transparent opacity-90" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-[4px] bg-[#071513]/90 text-teal-300 border border-teal-500/30">
                        {ins.exp}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-[4px] bg-emerald-950/90 text-emerald-300 border border-emerald-500/30 flex items-center gap-1">
                        <Star className="w-3 h-3 fill-emerald-400" />
                        5.0
                      </span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-base font-bold text-white mb-0.5">{ins.name}</h3>
                    <p className="text-xs text-teal-400 font-medium mb-3">{ins.role}</p>

                    <div className="bg-[#091E1C] rounded-[6px] p-2.5 border border-slate-800 mb-3">
                      <p className="text-[10px] uppercase font-bold text-teal-300 mb-0.5">Spesialisasi:</p>
                      <p className="text-xs text-slate-300 leading-snug">{ins.speciality}</p>
                    </div>

                    <p className="text-xs text-slate-400 italic pl-3 border-l-2 border-teal-500/50 leading-relaxed">
                      &ldquo;{ins.quote}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="p-4 pt-0">
                  <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">Sertifikasi BNSP:</span>
                    <span className="text-emerald-400 font-semibold">Terverifikasi</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Student Care Coordinator Feature Card (Kak Lia) */}
          <div className="console-card p-5 sm:p-6 border border-teal-500/30 bg-[#09221F] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4 text-left">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden border border-teal-400/40 shrink-0 bg-slate-900">
                <Image
                  src={STUDENT_CARE.avatar}
                  alt={STUDENT_CARE.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold px-2 py-0.5 rounded-[4px] bg-teal-950 text-teal-300 border border-teal-500/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  {STUDENT_CARE.status}
                </div>
                <h4 className="text-base sm:text-lg font-bold text-white">{STUDENT_CARE.name}</h4>
                <p className="text-xs text-slate-300 max-w-xl leading-relaxed">
                  {STUDENT_CARE.desc} Hubungi langsung untuk penyesuaian jam kerja, antar-jemput, atau bimbingan berkas SIM A.
                </p>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl("Halo Kak Lia, saya ingin konsultasi pendaftaran kursus dan mencocokkan jadwal latihan.")}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-[#0F7A73] hover:bg-[#128B83] text-white text-xs font-semibold px-5 py-3 rounded-lg border border-teal-500/40 shadow-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Konsultasi Langsung dengan Kak Lia</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

