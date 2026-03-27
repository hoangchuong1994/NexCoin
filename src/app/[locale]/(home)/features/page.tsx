'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  BarChart3,
  Zap,
  Shield,
  Brain,
  Coins,
  Route,
  TrendingUp,
  Activity,
  Clock,
  Target,
} from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Real-time Trading',
    description:
      'Execute trades with millisecond precision and real-time market data feeds from multiple exchanges.',
  },
  {
    icon: TrendingUp,
    title: 'Advanced Charting',
    description:
      'Professional-grade charts with 50+ indicators, drawing tools, and customizable layouts.',
  },
  {
    icon: Zap,
    title: 'Low Latency Execution',
    description: 'Direct market access with ultra-low latency execution and smart order routing.',
  },
  {
    icon: Brain,
    title: 'AI Insights',
    description:
      'Machine learning-powered trading signals and market analysis to guide your decisions.',
  },
  {
    icon: Coins,
    title: 'Multi-Asset Support',
    description:
      'Trade cryptocurrencies, stocks, forex, commodities, and indices all in one platform.',
  },
  {
    icon: Route,
    title: 'Smart Order Routing',
    description: 'Automatic order routing to the best available liquidity across multiple venues.',
  },
];

const detailedFeatures = [
  {
    title: 'Advanced Analytics',
    description:
      'Deep market analysis with real-time sentiment tracking, volume analysis, and predictive modeling.',
    image: '/api/placeholder/600/400',
    icon: Activity,
  },
  {
    title: 'Risk Management',
    description:
      'Comprehensive risk controls including stop-loss orders, position limits, and automated hedging.',
    image: '/api/placeholder/600/400',
    icon: Shield,
  },
  {
    title: 'Portfolio Tracking',
    description:
      'Real-time portfolio valuation, performance analytics, and detailed trade history.',
    image: '/api/placeholder/600/400',
    icon: Target,
  },
];

export default function FeaturesPage() {
  return (
    <main className="w-full bg-linear-to-b from-[#020617] via-[#0b1120] to-[#020617]">
      {/* Hero Section */}
      <section className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-[#020617] via-[#0b1120] to-[#1a1f3a] pt-32 lg:pt-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-40 blur-3xl" />
          <div className="absolute top-1/3 -left-32 h-80 w-80 animate-pulse rounded-full bg-linear-to-tr from-indigo-600/15 to-blue-600/15 opacity-30 blur-3xl delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(59,130,246,0.05)] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-[#9fb4d5]">Trading Features</span>
            </div>

            <h1 className="mb-6 text-5xl leading-tight font-bold text-white lg:text-6xl xl:text-7xl">
              Powerful Trading{' '}
              <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Features
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-lg text-[#9fb4d5] lg:text-xl">
              Experience the most advanced trading platform with cutting-edge technology, real-time
              data, and professional-grade tools designed for serious traders.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                >
                  Start Trading Now
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Everything You Need to Trade
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#9fb4d5]">
              Professional-grade features designed to give you an edge in the markets
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.06)] hover:shadow-lg hover:shadow-blue-500/10"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600/20 to-indigo-600/20">
                  <feature.icon className="h-6 w-6 text-blue-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-[#9fb4d5]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Features */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {detailedFeatures.map((feature, index) => (
            <div
              key={index}
              className={`mb-20 flex flex-col gap-12 lg:gap-16 ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'
              } items-center`}
            >
              <div className="flex-1 space-y-6">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-linear-to-br from-blue-600/20 to-indigo-600/20">
                  <feature.icon className="h-8 w-8 text-blue-400" />
                </div>
                <h3 className="text-3xl font-bold text-white lg:text-4xl">{feature.title}</h3>
                <p className="text-lg leading-relaxed text-[#9fb4d5]">{feature.description}</p>
                <Button className="bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
                  Learn More
                </Button>
              </div>
              <div className="flex-1">
                <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-sm">
                  <div className="flex aspect-video items-center justify-center rounded-xl bg-linear-to-br from-[#0b1120] to-[#1a1f3a]">
                    <div className="text-center">
                      <Clock className="mx-auto mb-4 h-12 w-12 text-blue-400" />
                      <p className="text-[#9fb4d5]">Dashboard Preview</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-linear-to-br from-[rgba(59,130,246,0.05)] to-[rgba(99,102,241,0.05)] p-12 text-center backdrop-blur-sm lg:p-16">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Ready to Experience Professional Trading?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#9fb4d5]">
              Join thousands of traders who trust our platform for their trading needs.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                >
                  Start Trading Now
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
                >
                  View Pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
