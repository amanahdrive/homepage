import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Heart, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[6px] text-xs font-bold uppercase tracking-wider bg-teal-950 text-teal-400 border border-teal-500/30">
            <Heart className="w-3.5 h-3.5" /> Cerita Nyata Siswa Kami
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            Dipercaya 1.000+ Siswa Lulus di Palembang
          </h2>
          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
            Mulai dari yang trauma mengemudi hingga ibu rumah tangga dan mahasiswa, inilah pengalaman jujur mereka belajar bersama Amanah Drive.
          </p>
        </div>

        {/* Testimonials Grid (12px console cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="console-card p-6 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Terverifikasi
                  </span>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-3 border-t border-slate-800/80">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-[#091E1C] border border-teal-500/30 flex items-center justify-center font-bold text-teal-300 text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white leading-tight">{t.name}</h3>
                    <p className="text-[10px] text-slate-400">{t.status}</p>
                  </div>
                </div>
                <div className="mt-2 text-[10px] text-teal-300 font-medium bg-teal-950 px-2 py-0.5 rounded-[4px] border border-teal-500/20 inline-block">
                  {t.pkg}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

