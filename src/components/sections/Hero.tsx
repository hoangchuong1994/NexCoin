'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-[#020617] via-[#0b1120] to-[#1a1f3a] pt-32 lg:pt-40">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div className="absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-40 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 animate-pulse rounded-full bg-linear-to-tr from-indigo-600/15 to-blue-600/15 opacity-30 blur-3xl delay-1000" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-linear-to-tl from-blue-500/10 to-transparent opacity-20 blur-3xl" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[rgba(59,130,246,0.03)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Headline */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(59,130,246,0.05)] px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-[#9fb4d5]">
                  Trading Platform for Everyone
                </span>
              </div>

              <h1 className="text-5xl leading-tight font-bold text-white lg:text-6xl xl:text-7xl">
                Trade Smarter.{' '}
                <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                  Invest Faster.
                </span>
              </h1>

              <p className="text-lg text-[#9fb4d5] lg:text-xl">
                Professional trading platform for crypto, stocks, and forex. Real-time data,
                advanced charting, and lightning-fast execution.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="group relative h-14 bg-linear-to-r from-blue-600 to-indigo-600 px-8 text-base font-semibold text-white shadow-xl shadow-blue-600/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-600/60"
                >
                  Start Trading
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>

              <Button
                variant="outline"
                size="lg"
                className="group h-14 border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] px-8 text-base font-semibold text-white backdrop-blur-md hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                <Play className="mr-2 h-5 w-5" />
                View Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-[#9fb4d5]">Trusted by 2M+ traders</span>
              </div>
              <div className="hidden h-4 w-px bg-[rgba(255,255,255,0.1)] sm:block" />
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-green-500" />
                <span className="text-sm text-[#9fb4d5]">$120B+ trading volume</span>
              </div>
            </div>
          </div>

          {/* Right Side - 3D Dashboard Preview */}
          <div className="perspective relative hidden h-125 lg:block">
            {/* Main Dashboard Card */}
            <div
              className="absolute inset-0 rounded-2xl border border-[rgba(255,255,255,0.1)] bg-linear-to-br from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.02)] p-6 shadow-2xl backdrop-blur-2xl"
              style={{
                transform: 'perspective(1000px) rotateX(-5deg) rotateY(-5deg)',
                animation: 'float 6s ease-in-out infinite',
              }}
            >
              {/* Dashboard header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs font-medium tracking-wider text-[#9fb4d5] uppercase">
                    Live Chart
                  </p>
                  <p className="text-2xl font-bold text-white">$45,230.50</p>
                </div>
                <div className="flex gap-1">
                  <div className="h-2 w-2 rounded-full bg-green-500" />
                  <div className="h-2 w-2 rounded-full bg-green-500/50" />
                  <div className="h-2 w-2 rounded-full bg-green-500/25" />
                </div>
              </div>

              {/* Simple chart visualization */}
              <div className="mb-6 space-y-2">
                <div className="flex h-24 items-end gap-1">
                  {[65, 45, 72, 38, 92, 55, 88, 42, 78, 95, 68, 85].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm bg-linear-to-t from-blue-600 to-blue-400 opacity-80 transition-all duration-300 hover:opacity-100"
                      style={{
                        height: `${height}%`,
                        animation: `lineGrow 2s ease-in-out ${i * 0.1}s infinite`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Order stats */}
              <div className="grid grid-cols-2 gap-3 border-t border-[rgba(255,255,255,0.05)] pt-4">
                <div className="space-y-1 rounded-lg bg-[rgba(59,130,246,0.1)] p-3">
                  <p className="text-xs text-[#9fb4d5]">24h Change</p>
                  <p className="font-semibold text-green-400">+12.45%</p>
                </div>
                <div className="space-y-1 rounded-lg bg-[rgba(99,102,241,0.1)] p-3">
                  <p className="text-xs text-[#9fb4d5]">Volume</p>
                  <p className="font-semibold text-blue-400">$2.8B</p>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div
              className="absolute top-20 -right-12 w-40 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(59,130,246,0.1)] p-4 backdrop-blur-md"
              style={{
                animation: 'floatUp 4s ease-in-out infinite',
              }}
            >
              <p className="text-xs text-[#9fb4d5]">Running Profit</p>
              <p className="text-xl font-bold text-green-400">+$4,320</p>
            </div>

            <div
              className="absolute -bottom-8 -left-8 w-40 rounded-xl border border-[rgba(255,255,255,0.1)] bg-[rgba(99,102,241,0.1)] p-4 backdrop-blur-md"
              style={{
                animation: 'floatDown 5s ease-in-out infinite',
              }}
            >
              <p className="text-xs text-[#9fb4d5]">Active Trades</p>
              <p className="text-xl font-bold text-indigo-400">24</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: perspective(1000px) rotateX(-5deg) rotateY(-5deg) translateY(0px);
          }
          50% {
            transform: perspective(1000px) rotateX(-2deg) rotateY(-2deg) translateY(-20px);
          }
        }

        @keyframes floatUp {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(-30px);
            opacity: 1;
          }
        }

        @keyframes floatDown {
          0%,
          100% {
            transform: translateY(0px);
            opacity: 0.8;
          }
          50% {
            transform: translateY(20px);
            opacity: 1;
          }
        }

        @keyframes lineGrow {
          0%,
          100% {
            opacity: 0.6;
          }
          50% {
            opacity: 1;
          }
        }

        .delay-1000 {
          animation-delay: 1000ms;
        }

        .perspective {
          perspective: 1000px;
        }
      `}</style>
    </section>
  );
}
