'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import { Check, Star, Zap, HelpCircle } from 'lucide-react';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: 'forever',
    description: 'Perfect for getting started with trading',
    features: [
      'Up to $10,000 daily trading volume',
      'Basic charting tools',
      'Email support',
      'Mobile app access',
      'Real-time market data',
    ],
    cta: 'Get Started',
    popular: false,
  },
  {
    name: 'Pro',
    price: '$29',
    period: 'per month',
    description: 'For active traders who need advanced tools',
    features: [
      'Unlimited trading volume',
      'Advanced charting & indicators',
      'Priority support',
      'API access',
      'Portfolio analytics',
      'Custom alerts',
      'Paper trading',
    ],
    cta: 'Start Pro Trial',
    popular: true,
  },
  {
    name: 'VIP',
    price: '$99',
    period: 'per month',
    description: 'Ultimate trading experience with premium features',
    features: [
      'Everything in Pro',
      'Dedicated account manager',
      'Lowest trading fees',
      'VIP support 24/7',
      'Advanced AI insights',
      'Custom integrations',
      'White-label solutions',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const fees = [
  {
    type: 'Maker',
    fee: '0.10%',
    description: 'Fees for adding liquidity to the market',
  },
  {
    type: 'Taker',
    fee: '0.25%',
    description: 'Fees for removing liquidity from the market',
  },
  {
    type: 'VIP Maker',
    fee: '0.05%',
    description: 'Reduced fees for VIP members',
  },
  {
    type: 'VIP Taker',
    fee: '0.15%',
    description: 'Reduced fees for VIP members',
  },
];

const faqs = [
  {
    question: 'Can I change plans anytime?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'Are there any setup fees?',
    answer: 'No setup fees for any of our plans. You only pay the monthly subscription.',
  },
  {
    question: 'Do you offer annual discounts?',
    answer: 'Yes, save 20% when you pay annually for Pro and VIP plans.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards, PayPal, and bank transfers.',
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('monthly');

  return (
    <main className="w-full bg-linear-to-b from-[#020617] via-[#0b1120] to-[#020617]">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] w-full overflow-hidden bg-linear-to-br from-[#020617] via-[#0b1120] to-[#1a1f3a] pt-32 lg:pt-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-40 blur-3xl" />
          <div className="absolute top-1/3 -left-32 h-80 w-80 animate-pulse rounded-full bg-linear-to-tr from-indigo-600/15 to-blue-600/15 opacity-30 blur-3xl delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(59,130,246,0.05)] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-blue-500" />
              <span className="text-sm font-medium text-[#9fb4d5]">Transparent Pricing</span>
            </div>

            <h1 className="mb-6 text-5xl leading-tight font-bold text-white lg:text-6xl xl:text-7xl">
              Simple, Transparent{' '}
              <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Pricing
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-lg text-[#9fb4d5] lg:text-xl">
              Choose the plan that fits your trading needs. No hidden fees, no surprises.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Table */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Billing Toggle */}
          <div className="mb-12 flex justify-center">
            <div className="inline-flex items-center gap-4 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-1 backdrop-blur-sm">
              <button
                onClick={() => setBillingCycle('monthly')}
                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                  billingCycle === 'monthly'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-[#9fb4d5] hover:text-white'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingCycle('annual')}
                className={`rounded-lg px-6 py-2 text-sm font-medium transition-all ${
                  billingCycle === 'annual'
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-[#9fb4d5] hover:text-white'
                }`}
              >
                Annual
                <span className="ml-2 rounded-full bg-green-500/20 px-2 py-0.5 text-xs text-green-400">
                  Save 20%
                </span>
              </button>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl border backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 ${
                  plan.popular
                    ? 'border-blue-500/50 bg-[rgba(59,130,246,0.05)] shadow-lg shadow-blue-500/20'
                    : 'border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)]'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <div className="flex items-center gap-1 rounded-full bg-linear-to-r from-blue-600 to-indigo-600 px-4 py-1 text-sm font-medium text-white shadow-lg">
                      <Star className="h-4 w-4" />
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="p-8">
                  <div className="text-center">
                    <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        {billingCycle === 'annual' && plan.name !== 'Free'
                          ? `$${parseInt(plan.price.slice(1)) * 12 * 0.8}`
                          : plan.price}
                      </span>
                      {plan.name !== 'Free' && (
                        <span className="ml-1 text-[#9fb4d5]">
                          /{billingCycle === 'annual' ? 'year' : plan.period}
                        </span>
                      )}
                    </div>
                    <p className="mb-8 text-[#9fb4d5]">{plan.description}</p>
                  </div>

                  <ul className="mb-8 space-y-4">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Check className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                        <span className="text-[#9fb4d5]">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50'
                        : 'border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trading Fees */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Transparent Trading Fees
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#9fb4d5]">
              Competitive fees with volume-based discounts for high-volume traders
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {fees.map((fee, index) => (
              <div
                key={index}
                className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 text-center backdrop-blur-sm"
              >
                <div className="mb-2 text-2xl font-bold text-white">{fee.fee}</div>
                <div className="mb-2 text-sm font-medium text-blue-400">{fee.type}</div>
                <p className="text-xs text-[#9fb4d5]">{fee.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-6 py-3 backdrop-blur-sm">
              <Zap className="h-5 w-5 text-yellow-400" />
              <span className="text-[#9fb4d5]">
                Volume discounts available: 0.05% maker / 0.15% taker for $1M+ monthly volume
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#9fb4d5]">Everything you need to know about our pricing</p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-sm"
              >
                <div className="flex items-start gap-4">
                  <HelpCircle className="mt-1 h-6 w-6 shrink-0 text-blue-400" />
                  <div>
                    <h3 className="mb-2 text-lg font-semibold text-white">{faq.question}</h3>
                    <p className="text-[#9fb4d5]">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-linear-to-br from-[rgba(59,130,246,0.05)] to-[rgba(99,102,241,0.05)] p-12 text-center backdrop-blur-sm lg:p-16">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Ready to Start Trading?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#9fb4d5]">
              Join thousands of traders who trust our platform. Start with a free account today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
                >
                  Start Free Trial
                </Button>
              </Link>
              <Link href="/features">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
                >
                  View Features
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
