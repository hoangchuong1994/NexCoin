'use client';

import React from 'react';
import { CheckCircle } from 'lucide-react';

const benefits = [
  'Real-time market data and quotes',
  'Advanced charting with technical indicators',
  'One-click order execution',
  'Portfolio analytics and tracking',
  'Risk management tools',
  'Mobile app for on-the-go trading',
];

export default function TradingPreview() {
  return (
    <section className="relative overflow-hidden border-t border-[rgba(255,255,255,0.05)] bg-linear-to-b from-[#020617] to-[#0b1120] px-4 py-20 sm:px-6 lg:px-8">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 bottom-1/4 h-96 w-96 rounded-full bg-linear-to-l from-purple-600/15 to-transparent opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left - Benefits */}
          <div className="space-y-8">
            <div>
              <h2 className="mb-4 text-4xl leading-tight font-bold text-white lg:text-5xl">
                Everything You Need to Trade Like a Pro
              </h2>
              <p className="text-lg text-[#9fb4d5]">
                Our platform combines institutional-grade tools with an intuitive interface. Trade
                with confidence knowing you&apos;re using the same technology as professional
                traders worldwide.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="mt-1 h-5 w-5 shrink-0 text-blue-400" />
                  <span className="text-[#9fb4d5]">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Dashboard Preview */}
          <div className="relative h-96 lg:h-full">
            {/* Main preview card */}
            <div className="absolute inset-0 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-linear-to-br from-[rgba(59,130,246,0.08)] via-[rgba(99,102,241,0.04)] to-[rgba(255,255,255,0.02)] p-6 shadow-2xl backdrop-blur-xl">
              {/* Header */}
              <div className="mb-6 flex items-center justify-between border-b border-[rgba(255,255,255,0.05)] pb-4">
                <h3 className="font-semibold text-white">BTC/USD</h3>
                <div className="flex gap-1">
                  <div className="h-1 w-1 rounded-full bg-green-500" />
                  <div className="h-1 w-1 rounded-full bg-green-500/60" />
                  <div className="h-1 w-1 rounded-full bg-green-500/30" />
                </div>
              </div>

              {/* Chart area with gradient bars */}
              <div className="mb-6 space-y-4">
                <div className="flex h-40 items-end gap-1">
                  {[30, 45, 35, 60, 50, 75, 55, 80, 65, 85, 70, 90].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-linear-to-t from-blue-600 to-blue-400 opacity-70"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>

                {/* Price display */}
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-white">$48,230</span>
                  <span className="text-lg font-semibold text-green-400">+2.45%</span>
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 border-t border-[rgba(255,255,255,0.05)] pt-4">
                <div>
                  <p className="text-xs text-[#9fb4d5]">High</p>
                  <p className="font-semibold text-white">$52,100</p>
                </div>
                <div>
                  <p className="text-xs text-[#9fb4d5]">Low</p>
                  <p className="font-semibold text-white">$46,200</p>
                </div>
                <div>
                  <p className="text-xs text-[#9fb4d5]">Volume</p>
                  <p className="font-semibold text-white">2.3M</p>
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="absolute -bottom-4 -left-8 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(99,102,241,0.15)] p-4 shadow-xl backdrop-blur-md">
              <p className="text-xs font-medium text-[#9fb4d5]">Total Orders</p>
              <p className="text-2xl font-bold text-indigo-300">2,547</p>
            </div>

            <div className="absolute top-20 -right-8 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(59,130,246,0.15)] p-4 shadow-xl backdrop-blur-md">
              <p className="text-xs font-medium text-[#9fb4d5]">Win Rate</p>
              <p className="text-2xl font-bold text-blue-300">87.3%</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
