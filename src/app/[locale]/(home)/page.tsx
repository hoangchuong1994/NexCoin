import React from 'react';
import Hero from '@/components/sections/Hero';
import Trust from '@/components/sections/Trust';
import Features from '@/components/sections/Features';
import TradingPreview from '@/components/sections/TradingPreview';
import WhyUs from '@/components/sections/WhyUs';
import CTA from '@/components/sections/CTA';

export default function LocalePage() {
  return (
    <main className="w-full bg-linear-to-b from-[#020617] via-[#0b1120] to-[#020617]">
      <Hero />
      <Trust />
      <Features />
      <TradingPreview />
      <WhyUs />
      <CTA />
    </main>
  );
}
