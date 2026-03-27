'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative overflow-hidden border-t border-[rgba(255,255,255,0.05)] bg-linear-to-r from-blue-600/10 via-indigo-600/10 to-purple-600/10 px-4 py-20 sm:px-6 lg:px-8">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute top-1/2 -left-40 h-80 w-80 rounded-full bg-blue-500/20 opacity-40 blur-3xl" />
        <div className="absolute top-1/2 -right-40 h-96 w-96 rounded-full bg-purple-500/20 opacity-30 blur-3xl" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[rgba(59,130,246,0.02)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Content */}
        <div className="mb-12 space-y-6">
          <h2 className="text-5xl leading-tight font-bold text-white lg:text-6xl">
            Ready to Start Trading?
          </h2>
          <p className="mx-auto max-w-2xl text-xl text-[#9fb4d5]">
            Join millions of traders worldwide and experience the platform built for modern
            investors. Sign up in minutes and start trading immediately.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
          <Button
            size="lg"
            className="group relative h-14 bg-linear-to-r from-blue-600 to-indigo-600 px-10 text-base font-semibold text-white shadow-xl shadow-blue-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/60"
          >
            Create Free Account
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="h-14 border-[rgba(255,255,255,0.2)] bg-[rgba(255,255,255,0.05)] px-10 text-base font-semibold text-white backdrop-blur-md hover:border-[rgba(255,255,255,0.3)] hover:bg-[rgba(255,255,255,0.1)]"
          >
            Schedule Demo
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 space-y-3 text-sm text-[#9fb4d5]">
          <p>✓ No credit card required</p>
          <p>✓ Access to full features for 30 days</p>
          <p>✓ 24/7 customer support</p>
        </div>
      </div>
    </section>
  );
}
