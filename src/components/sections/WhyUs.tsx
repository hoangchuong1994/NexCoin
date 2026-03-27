'use client';

import React from 'react';
import { Zap, Shield, Brain, GitBranch } from 'lucide-react';

const reasons = [
  {
    icon: Zap,
    title: 'Lightning Fast Execution',
    description: 'Sub-millisecond order execution with 99.99% uptime SLA.',
  },
  {
    icon: Shield,
    title: 'Institutional Security',
    description: 'Military-grade encryption, cold storage, and SOC 2 Type II certified.',
  },
  {
    icon: Brain,
    title: 'Advanced Analytics',
    description: 'AI-powered insights, real-time risk analysis, and predictive alerts.',
  },
  {
    icon: GitBranch,
    title: 'Multi-Asset Support',
    description: 'Trade crypto, stocks, forex, and commodities in one platform.',
  },
];

export default function WhyUs() {
  return (
    <section className="relative overflow-hidden border-t border-[rgba(255,255,255,0.05)] bg-linear-to-b from-[#0b1120] via-[#020617] to-[#0b1120] px-4 py-20 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 h-96 w-96 rounded-full bg-linear-to-r from-indigo-600/10 to-transparent opacity-20 blur-3xl" />
        <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-linear-to-b from-blue-600/10 to-transparent opacity-15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold text-white lg:text-5xl">Why Choose NexCoin</h2>
          <p className="mx-auto max-w-2xl text-lg text-[#9fb4d5]">
            Built for traders who demand the best. Here&apos;s what sets us apart.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <div
                key={index}
                className="group flex gap-6 rounded-xl border border-[rgba(255,255,255,0.08)] bg-linear-to-br from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.01)] p-8 transition-all duration-300 hover:border-[rgba(255,255,255,0.15)]"
              >
                {/* Icon Container */}
                <div className="shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-linear-to-br from-blue-600/30 to-indigo-600/20">
                    <Icon className="h-6 w-6 text-blue-400" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="mb-2 text-xl font-bold text-white">{reason.title}</h3>
                  <p className="text-[#9fb4d5]">{reason.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA Info */}
        <div className="mt-16 rounded-xl border border-[rgba(255,255,255,0.08)] bg-linear-to-r from-[rgba(59,130,246,0.1)] to-[rgba(99,102,241,0.05)] p-8 backdrop-blur-md">
          <div className="space-y-2 text-center">
            <p className="text-sm tracking-wider text-blue-400 uppercase">
              Enterprise-Grade Technology
            </p>
            <h3 className="text-2xl font-bold text-white">Trusted by institutions worldwide</h3>
            <p className="mx-auto max-w-2xl text-[#9fb4d5]">
              Our infrastructure is used by hedge funds, investment banks, and professional traders
              who can&apos;t afford downtime or compromise on performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
