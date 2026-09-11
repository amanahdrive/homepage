import React from "react";
import { TESTIMONIALS } from "@/lib/constants";
import { Star, Heart, CheckCircle2 } from "lucide-react";

export default function TestimonialsSection() {
  return (
    <section id="testimoni" className="py-20 sm:py-28 relative bg-[#f8f9fc] border-t border-[rgba(33,34,38,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Antigravity Section Header */}
        <div className="text-left max-w-3xl mb-12 space-y-3">
          <span className="antigravity-chip">
            <Heart className="w-3.5 h-3.5 text-[#0F7A73]" />
            <span>Cerita Nyata Siswa</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#121317] tracking-tight">
            Dipercaya 1.000+ Siswa Lulus di Palembang
          </h2>
          <p className="text-[#45474d] text-sm sm:text-base leading-relaxed">
            Mulai dari yang trauma mengemudi hingga ibu rumah tangga dan mahasiswa, inilah pengalaman jujur mereka belajar bersama Amanah Drive.
          </p>
        </div>

        {/* Testimonials Grid in Clean Antigravity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="antigravity-card p-6 sm:p-7 flex flex-col justify-between bg-white"
            >
              <div>
                {/* Rating stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] font-mono text-[#10B981] font-semibold flex items-center gap-1 bg-[#E6F4F2] px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3" /> Terverifikasi
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-[#45474d] leading-relaxed mb-6">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[rgba(33,34,38,0.06)]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E6F4F2] border border-[#0F7A73]/20 flex items-center justify-center font-bold text-[#0F7A73] text-xs">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#121317] leading-tight">{t.name}</h3>
                    <p className="text-[10px] text-[#9aa0a6]">{t.status}</p>
                  </div>
                </div>
                <div className="mt-2.5 text-[10px] text-[#0F7A73] font-mono font-medium bg-[#E6F4F2] px-2.5 py-0.5 rounded-full inline-block">
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
