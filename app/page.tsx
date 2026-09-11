import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBento from "@/components/FeatureBento";
import PricingSection from "@/components/PricingSection";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import SlotSchedule from "@/components/SlotSchedule";
import FleetAndInstructors from "@/components/FleetAndInstructors";
import BookingCalculator from "@/components/BookingCalculator";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import LocationSection from "@/components/LocationSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#071513] text-slate-100 flex flex-col selection:bg-teal-600 selection:text-white relative">
      {/* Background Mesh Grid */}
      <div className="fixed inset-0 mesh-pattern opacity-40 pointer-events-none -z-20" />

      {/* Navigation */}
      <Navbar />

      {/* Main Sections */}
      <main className="flex-grow">
        <Hero />
        <FeatureBento />
        <PricingSection />
        <CurriculumRoadmap />
        <SlotSchedule />
        <FleetAndInstructors />
        <BookingCalculator />
        <TestimonialsSection />
        <FAQSection />
        <LocationSection />
      </main>

      {/* Sticky Bottom Actions */}
      <FloatingWhatsApp />

      {/* Footer */}
      <Footer />
    </div>
  );
}
