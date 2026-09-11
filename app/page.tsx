import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBento from "@/components/FeatureBento";
import PricingSection from "@/components/PricingSection";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import SlotSchedule from "@/components/SlotSchedule";
import FleetSection from "@/components/FleetSection";
import BookingCalculator from "@/components/BookingCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff] text-[#121317] flex flex-col selection:bg-[#121317] selection:text-white relative font-sans">
      {/* Background Antigravity Radial Dot Pattern */}
      <div className="fixed inset-0 antigravity-grid-pattern opacity-70 pointer-events-none -z-20" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections — Structured Information Architecture */}
      <main className="flex-grow">
        <Hero />
        <FeatureBento />
        <PricingSection />
        <CurriculumRoadmap />
        <FleetSection />
        <SlotSchedule />
        <BookingCalculator />
        <TestimonialsSection />
        <LocationSection />
        <FAQSection />
      </main>

      {/* Sticky Bottom Actions */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
