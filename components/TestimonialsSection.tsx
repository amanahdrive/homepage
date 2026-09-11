import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Heart } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-teal-500/10 text-teal-400 border border-teal-500/30">
            <Heart className="w-3.5 h-3.5" /> Cerita Nyata Siswa Kami
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Dipercaya 1.000+ Siswa di Palembang
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Mulai dari yang trauma mengemudi hingga ibu rumah tangga dan mahasiswa, inilah pengalaman mereka belajar bersama Amanah Drive.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="glass-card rounded-3xl p-6 border border-slate-800/80 hover:border-teal-500/40 relative flex flex-col justify-between"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center gap-1 text-amber-400 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-teal-900/60 border border-teal-500/30 flex items-center justify-center font-bold text-teal-300 text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-white leading-tight">{t.name}</h3>
                    <p className="text-[10px] text-slate-400">{t.status}</p>
                  </div>
                </div>
                <div className="mt-2 text-[10px] text-teal-400 font-semibold bg-teal-950/40 px-2 py-0.5 rounded border border-teal-500/20 inline-block">
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
