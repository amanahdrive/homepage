import React from "react";
import Image from "next/image";
import { FLEET, INSTRUCTORS } from "@/lib/constants";
import { Car, ShieldCheck, CheckCircle, Users, Star } from "lucide-react";

export default function FleetAndInstructors() {
  return (
    <section id="armada" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* ================= FLEET SECTION ================= */}
        <div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
              <Car className="w-3.5 h-3.5" /> Standar Armada Berkualitas
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Pilihan Armada Latihan Nyaman &amp; Terawat
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Seluruh armada kami dilengkapi sistem Dual Pedal Safety, AC dingin, dan rutin diservis berkala untuk memastikan pengalaman belajar yang 100% aman dan nyaman.
            </p>
          </div>

          {/* Fleet Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FLEET.map((car, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-7 border border-slate-800/80 hover:border-teal-500/40 relative flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 rounded-xl bg-teal-900/60 border border-teal-500/30 text-teal-300 font-bold text-xs">
                      {car.type}
                    </span>
                    <span className="text-xs font-mono text-slate-400 font-semibold bg-slate-900 px-2.5 py-1 rounded-lg border border-slate-800">
                      {car.plate}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-1 group-hover:text-teal-300 transition-colors">
                    {car.name}
                  </h3>
                  <p className="text-xs text-teal-400/90 font-medium mb-4">Warna: {car.color}</p>

                  <p className="text-xs text-slate-300 leading-relaxed mb-6">
                    {car.desc}
                  </p>

                  <div className="space-y-2.5 pt-4 border-t border-slate-800/80 mb-4">
                    {car.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-800/60 text-center">
                  <span className="text-[11px] text-slate-400 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-teal-400" />
                    Dilengkapi Pedal Rem Tambahan Instruktur
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ================= INSTRUCTORS SECTION ================= */}
        <div>
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
              <Users className="w-3.5 h-3.5" /> Tim Instruktur Resmi
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
              Didampingi Instruktur Sabar &amp; Bersertifikat
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Instruktur kami bukan sekadar bisa menyetir, tetapi terlatih mendidik dengan empati, kesabaran penuh tanpa emosi, serta mengutamakan keselamatan Anda.
            </p>
          </div>

          {/* Instructors Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {INSTRUCTORS.map((ins, idx) => (
              <div
                key={idx}
                className="glass-card rounded-3xl p-6 border border-slate-800/80 hover:border-teal-500/40 relative flex flex-col justify-between group"
              >
                <div>
                  {/* Instructor Avatar Badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-14 h-14 rounded-2xl bg-teal-900/40 border border-teal-500/30 flex items-center justify-center p-2.5">
                      <Image
                        src={ins.avatar}
                        alt={ins.name}
                        width={44}
                        height={44}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white leading-snug">{ins.name}</h3>
                      <p className="text-xs text-teal-400 font-medium">{ins.role}</p>
                      <span className="text-[10px] text-slate-400 font-medium">{ins.exp}</span>
                    </div>
                  </div>

                  <div className="bg-slate-900/60 rounded-xl p-3 border border-slate-800/80 mb-4">
                    <p className="text-[11px] text-teal-300 font-semibold mb-1">Keahlian Utama:</p>
                    <p className="text-xs text-slate-300 leading-snug">{ins.speciality}</p>
                  </div>

                  <div className="relative pl-4 italic text-xs text-slate-400 mb-6 border-l-2 border-teal-500/40">
                    &ldquo;{ins.quote}&rdquo;
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1 text-amber-400 font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" /> 5.0 / 5.0
                  </span>
                  <span className="text-emerald-400 font-medium">Sertifikasi BNSP / Resmi</span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
