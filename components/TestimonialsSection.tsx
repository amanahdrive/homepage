import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Heart, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-14 sm:py-28 relative bg-white border-t border-[rgba(17,18,21,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-8 sm:mb-14 space-y-2.5 sm:space-y-3">
          <div className="flex items-center gap-2">
            <span className="tech-tag tech-tag-brand">
              <Heart className="w-3 h-3 text-[#0F7A73]" />
              Cerita Nyata Siswa
            </span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-[#111215] tracking-tight leading-tight">
            Dipercaya 1.000+ Siswa Lulus di Palembang
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Mulai dari yang trauma mengemudi hingga ibu rumah tangga dan mahasiswa, inilah pengalaman jujur mereka belajar bersama Amanah Drive.
          </p>
        </div>

        {/* Testimonials Adaptive Grid: Desktop Multi-column / Mobile Horizontal Snap Track */}
        <div className="flex overflow-x-auto sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-0 border-t sm:border-l border-[rgba(17,18,21,0.08)] no-scrollbar snap-x snap-mandatory -mx-4 px-4 sm:mx-0 sm:px-0">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="w-[85vw] sm:w-auto shrink-0 snap-start border sm:border-t-0 sm:border-l-0 border-r border-b border-[rgba(17,18,21,0.08)] bg-white p-6 sm:p-7 flex flex-col justify-between hover:bg-[#fafbfc] transition-colors"
            >
              <div>
                {/* Rating stars & verified tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="tech-tag tech-tag-brand">
                    <CheckCircle2 className="w-3 h-3 text-[#10B981]" /> Terverifikasi
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(17,18,21,0.06)]">
                <div className="flex items-center gap-3">
                  <div className="relative w-8 h-8 rounded-[4px] overflow-hidden border border-slate-200 bg-[#f1f3f5] shrink-0">
                    <Image
                      src={t.avatar || "/assets/default-avatar.webp"}
                      alt={t.name}
                      width={32}
                      height={32}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#111215] leading-tight">{t.name}</h3>
                    <p className="text-[10px] text-[#9aa0a6] font-mono">{t.status}</p>
                  </div>
                </div>
                <div className="mt-2.5">
                  <span className="tech-tag">
                    {t.pkg}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
