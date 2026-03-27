'use client';

import React from 'react';
import { Zap, TrendingUp, Lock, BarChart3, Cpu, Globe } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Real-time Trading',
    description: 'Execute trades instantly with sub-millisecond latency across all asset classes.',
  },
  {
    icon: BarChart3,
    title: 'Advanced Charting',
    description:
      'Professional-grade technical analysis tools with 100+ indicators and custom strategies.',
  },
  {
    icon: Cpu,
    title: 'Low Latency Execution',
    description: 'Institutional-grade infrastructure for lightning-fast order execution.',
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: 'Military-grade encryption and cold storage for peace of mind.',
  },
  {
    icon: TrendingUp,
    title: 'AI-Powered Insights',
    description: 'Machine learning algorithms predict market trends and optimize your portfolio.',
  },
  {
    icon: Globe,
    title: 'Multi-Asset Support',
    description: 'Trade crypto, stocks, forex, commodities all in one unified platform.',
  },
];

export default function Features() {
  return (
    <section className="relative overflow-hidden border-t border-[rgba(255,255,255,0.05)] bg-linear-to-b from-[#1a1f3a] via-[#0b1120] to-[#020617] px-4 py-20 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-linear-to-b from-indigo-600/10 to-transparent opacity-20 blur-3xl" />
        <div className="absolute right-1/3 bottom-0 h-80 w-80 rounded-full bg-linear-to-t from-blue-600/10 to-transparent opacity-15 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl leading-tight font-bold text-white lg:text-5xl">
            Powerful Features for Modern Traders
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#9fb4d5]">
            Every tool you need to trade smarter, faster, and more profitably.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-xl border border-[rgba(255,255,255,0.08)] bg-linear-to-br from-[rgba(255,255,255,0.04)] to-[rgba(255,255,255,0.01)] p-8 backdrop-blur-md transition-all duration-300 hover:border-[rgba(255,255,255,0.15)] hover:bg-linear-to-br hover:from-[rgba(59,130,246,0.15)] hover:to-[rgba(99,102,241,0.08)]"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="absolute inset-0 rounded-xl bg-linear-to-br from-blue-600/0 to-indigo-600/0 group-hover:from-blue-600/5 group-hover:to-indigo-600/5" />
                </div>

                {/* Content */}
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className="inline-block rounded-lg bg-linear-to-br from-blue-600/20 to-indigo-600/10 p-3 transition-all duration-300 group-hover:from-blue-500/30 group-hover:to-indigo-500/20">
                    <Icon className="h-6 w-6 text-blue-400 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white">{feature.title}</h3>

                  {/* Description */}
                  <p className="text-[#9fb4d5]">{feature.description}</p>

                  {/* Arrow on hover */}
                  <div className="pt-2">
                    <div className="inline-flex items-center text-sm font-semibold text-blue-400 opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn more
                      <svg
                        className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
