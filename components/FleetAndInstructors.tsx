import React from "react";
import Image from "next/image";
import { FLEET, INSTRUCTORS, STUDENT_CARE, generateWhatsAppUrl } from "@/lib/constants";
import { Car, ShieldCheck, CheckCircle2, Users, Star, MessageCircle } from "lucide-react";

export default function FleetAndInstructors() {
  return (
    <section id="armada" className="py-20 sm:py-28 relative bg-white border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ================= FLEET SECTION ================= */}
        <div>
          {/* Antigravity Header */}
          <div className="text-left max-w-3xl mb-12 space-y-3">
            <span className="antigravity-chip">
              <Car className="w-3.5 h-3.5 text-[#0F7A73]" />
              <span>Standar Armada Resmi</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight">
              Pilihan Armada Latihan Nyaman &amp; Terawat
            </h2>
            <p className="text-[#45474d] text-sm sm:text-base leading-relaxed">
              Seluruh armada Amanah Drive telah dimodifikasi sistem <strong className="text-[#0F7A73]">Dual Pedal Safety</strong> (pedal rem &amp; kopling ganda di sisi instruktur), AC dingin, serta perawatan berkala bengkel resmi untuk keamanan belajar maksimal.
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FLEET.map((car, idx) => (
              <div
                key={idx}
                className="antigravity-card p-6 sm:p-7 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E6F4F2] text-[#0F7A73] font-mono font-bold text-xs">
                      {car.type}
                    </span>
                    <span className="text-[11px] font-mono text-[#45474d] bg-[#f0f1f5] px-2 py-0.5 rounded-full border border-[rgba(33,34,38,0.06)]">
                      {car.plate}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#121317] mb-1">
                    {car.name}
                  </h3>
                  <p className="text-xs text-[#0F7A73] font-medium mb-3">Warna: {car.color}</p>

                  <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-5">
                    {car.desc}
                  </p>

                  <div className="space-y-2 pt-3 border-t border-[rgba(33,34,38,0.06)] mb-4">
                    {car.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-[#45474d]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-[rgba(33,34,38,0.06)]">
                  <span className="text-[11px] text-[#0F7A73] font-medium flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#0F7A73] shrink-0" />
                    Kontrol Penuh Pedal Rem Tambahan Instruktur
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INSTRUCTORS SECTION ================= */}
        <div>
          {/* Antigravity Header */}
          <div className="text-left max-w-3xl mb-12 space-y-3">
            <span className="antigravity-chip">
              <Users className="w-3.5 h-3.5 text-[#0F7A73]" />
              <span>Tim Instruktur &amp; Pelayanan</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight">
              Didampingi Instruktur Sabar &amp; Bersertifikat Resmi
            </h2>
            <p className="text-[#45474d] text-sm sm:text-base leading-relaxed">
              Bukan sekadar bisa menyetir — instruktur kami berpegang pada SOP kesabaran penuh, tanpa bentakan atau nada tinggi, serta membimbing dari nol sampai siswa mandiri di jalan raya Palembang.
            </p>
          </div>

          {/* Instructors Grid with Real Photographic Assets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {INSTRUCTORS.map((ins, idx) => (
              <div
                key={idx}
                className="antigravity-card overflow-hidden flex flex-col justify-between"
              >
                <div>
                  {/* Real Portrait */}
                  <div className="relative w-full h-64 bg-[#f8f9fc] overflow-hidden border-b border-[rgba(33,34,38,0.06)]">
                    <Image
                      src={ins.avatar}
                      alt={ins.name}
                      fill
                      className="object-cover object-top transition-transform duration-300 hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-full bg-white/90 text-[#121317] shadow-sm">
                        {ins.exp}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/90 text-[#121317] flex items-center gap-1 shadow-sm">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        5.0
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-base font-bold text-[#121317] mb-0.5">{ins.name}</h3>
                    <p className="text-xs text-[#0F7A73] font-mono font-medium mb-3">{ins.role}</p>

                    <div className="bg-[#f8f9fc] rounded-xl p-3 border border-[rgba(33,34,38,0.06)] mb-3">
                      <p className="text-[10px] font-mono uppercase font-bold text-[#121317] mb-0.5">Spesialisasi:</p>
                      <p className="text-xs text-[#45474d] leading-snug">{ins.speciality}</p>
                    </div>

                    <p className="text-xs text-[#45474d] italic pl-3 border-l-2 border-[#0F7A73]/40 leading-relaxed">
                      &ldquo;{ins.quote}&rdquo;
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0">
                  <div className="pt-3 border-t border-[rgba(33,34,38,0.06)] flex items-center justify-between text-[11px]">
                    <span className="text-[#9aa0a6] font-mono">Standar Kompetensi:</span>
                    <span className="text-[#10B981] font-semibold">Terverifikasi Resmi</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Student Care Coordinator Feature Card (Kak Lia) */}
          <div className="antigravity-card p-6 sm:p-7 bg-[#f8f9fc] border border-[rgba(33,34,38,0.08)] flex flex-col sm:flex-row items-center justify-between gap-6 rounded-2xl">
            <div className="flex items-center gap-4 text-left">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border border-[rgba(33,34,38,0.12)] shrink-0 bg-white shadow-sm">
                <Image
                  src={STUDENT_CARE.avatar}
                  alt={STUDENT_CARE.name}
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#E6F4F2] text-[#0F7A73]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  {STUDENT_CARE.status}
                </div>
                <h4 className="text-lg font-bold text-[#121317]">{STUDENT_CARE.name}</h4>
                <p className="text-xs sm:text-sm text-[#45474d] max-w-xl leading-relaxed">
                  {STUDENT_CARE.desc} Hubungi langsung untuk penyesuaian jam kerja, antar-jemput, atau bimbingan berkas SIM A.
                </p>
              </div>
            </div>

            <a
              href={generateWhatsAppUrl("Halo Kak Lia, saya ingin konsultasi pendaftaran kursus dan mencocokkan jadwal latihan.")}
              target="_blank"
              rel="noopener noreferrer"
              className="antigravity-btn-primary py-3 px-6 text-xs gap-2 rounded-full shrink-0 shadow-sm"
            >
              <MessageCircle className="w-4 h-4 fill-white text-transparent" />
              <span>Konsultasi dengan Kak Lia</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
