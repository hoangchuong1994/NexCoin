import React from 'react';
import Link from 'next/link';
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

      {/* Temporary link to dashboard for testing */}
      <div className="fixed right-4 bottom-4 z-50">
        <Link
          href="/dashboard"
          className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
        >
          View Dashboard
        </Link>
      </div>
    </main>
  );
}
