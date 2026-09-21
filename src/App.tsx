import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MeetTheArtist } from './components/MeetTheArtist';
import { Services } from './components/Services';
import { UnifiedPortfolio } from './components/UnifiedPortfolio';
import { TheExperience } from './components/TheExperience';
import { Testimonials } from './components/Testimonials';
import { BookingFinale } from './components/BookingFinale';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BengaliBridalBackgroundWatermark } from './components/ui/BengaliBridalBackgroundWatermark';

export default function App() {
  return (
    <div className="relative min-h-screen text-[#171514] font-['Hind_Siliguri',sans-serif] antialiased selection:bg-[#541C28] selection:text-[#F6F0E7] overflow-x-hidden">
      {/* Warm ivory base background with subtle luxury Bengali bridal watermark (STATIC, UNCHANGED) */}
      <div className="fixed inset-0 bg-[#F6F0E7] -z-10 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Subtle luxury static Bengali bridal background watermark design (ABOVE ivory, BEHIND content) */}
        <BengaliBridalBackgroundWatermark />
      </div>

      {/* Website content wrapper */}
      <div className="relative z-1 bg-transparent">
        {/* Navigation Header */}
        <Navbar />

        <main className="bg-transparent">
          {/* 01 — HERO: Kalpana Debnath Welcome Video in Hero media frame */}
          <Hero />

          {/* 02 — শিল্পীর পরিচয়: TEXT ONLY (No owner photograph) */}
          <MeetTheArtist />

          {/* 03 — পরিষেবা: Services */}
          <Services />

          {/* 04 — আমার কাজ: Unified animated hybrid gallery containing ALL client photos + BOTH videos */}
          <UnifiedPortfolio />

          {/* 05 — কাজের প্রক্রিয়া: The Experience */}
          <TheExperience />

          {/* 06 — শুভবার্তা: Real client words / testimonials */}
          <Testimonials />

          {/* 07 — WhatsApp booking CTA: Direct chat to Kalpana Debnath */}
          <BookingFinale />
        </main>

        {/* 08 — Footer */}
        <Footer />
      </div>

      {/* Persistent Floating WhatsApp Button at bottom-right */}
      <FloatingWhatsApp />
    </div>
  );
}
