import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeatureBento from "@/components/FeatureBento";
import PricingSection from "@/components/PricingSection";
import CurriculumRoadmap from "@/components/CurriculumRoadmap";
import SlotSchedule from "@/components/SlotSchedule";
import FleetSection from "@/components/FleetSection";
import BookingCalculator from "@/components/BookingCalculator";
import RegistrationFormSection from "@/components/RegistrationFormSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import LocationSection from "@/components/LocationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import {
  getPublicPackages,
  getPublicFleet,
  getPublicScheduleSlots,
  getPublicSettings,
} from "@/lib/public-data";

// Revalidate every 60 seconds (ISR) for fast responses and dynamic freshness
export const revalidate = 60;

export default async function HomePage() {
  const [packages, fleet, slots, { contact, care, location }] = await Promise.all([
    getPublicPackages(),
    getPublicFleet(),
    getPublicScheduleSlots(),
    getPublicSettings(),
  ]);

  return (
    <div className="min-h-screen bg-[#ffffff] text-[#121317] flex flex-col selection:bg-[#121317] selection:text-white relative font-sans">
      {/* Background Antigravity Radial Dot Pattern */}
      <div className="fixed inset-0 antigravity-grid-pattern opacity-70 pointer-events-none -z-20" />

      {/* Navigation */}
      <Navbar care={care} />

      {/* Main Sections — Structured Information Architecture */}
      <main className="flex-grow">
        <Hero />
        <FeatureBento />
        <PricingSection packages={packages} />
        <CurriculumRoadmap />
        <FleetSection fleet={fleet as any} />
        <SlotSchedule slots={slots as any} care={care} />
        <BookingCalculator care={care} />
        <RegistrationFormSection
          packages={packages}
          fleet={fleet as any}
          slots={slots as any}
        />
        <TestimonialsSection />
        <LocationSection location={location} contact={contact} />
        <FAQSection care={care} />
      </main>

      {/* Sticky Bottom Actions */}
      <FloatingWhatsApp care={care} />

      {/* Footer */}
      <Footer care={care} />
    </div>
  );
}
