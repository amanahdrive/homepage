import React from "react";
import Image from "next/image";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Heart, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-10 sm:py-24 relative bg-[#f8f9fc] border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-6 sm:mb-12 space-y-2 sm:space-y-3">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#0F7A73]">
            <Heart className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            <span>Cerita Nyata Siswa</span>
          </div>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#121317] tracking-tight leading-snug">
            Dipercaya 1.000+ Siswa Lulus di Palembang
          </h2>
          <p className="text-[#45474d] text-xs sm:text-base leading-relaxed">
            Mulai dari yang trauma mengemudi hingga ibu rumah tangga dan mahasiswa, inilah pengalaman jujur mereka belajar bersama Amanah Drive.
          </p>
        </div>

        {/* Testimonials Grid in Clean Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="antigravity-card p-4 sm:p-6 flex flex-col justify-between bg-white"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between mb-2.5 sm:mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[9px] sm:text-[10px] font-mono text-[#10B981] font-semibold flex items-center gap-1 bg-[#E6F4F2] px-1.5 sm:px-2 py-0.5 rounded-md">
                    <CheckCircle2 className="w-3 h-3" /> Terverifikasi
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-3 sm:mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-2.5 sm:pt-4 border-t border-[rgba(33,34,38,0.06)]">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden border border-slate-200/90 bg-[#f1f3f5] shrink-0 shadow-2xs">
                    <Image
                      src={t.avatar || "/assets/default-avatar.webp"}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#121317] leading-tight">{t.name}</h3>
                    <p className="text-[10px] text-[#9aa0a6]">{t.status}</p>
                  </div>
                </div>
                <div className="mt-2 sm:mt-2.5 text-[9px] sm:text-[10px] text-[#0F7A73] font-mono font-medium bg-[#E6F4F2] px-1.5 sm:px-2 py-0.5 rounded-md inline-block">
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
