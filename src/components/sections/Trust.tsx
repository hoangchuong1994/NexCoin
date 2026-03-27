'use client';

import React from 'react';

const stats = [
  {
    label: 'Active Traders',
    value: '2M+',
    description: 'Worldwide users trading daily',
  },
  {
    label: 'Trading Volume',
    value: '$120B+',
    description: 'Processed annually',
  },
  {
    label: 'Countries',
    value: '120+',
    description: 'Regulatory coverage',
  },
  {
    label: 'Transactions/sec',
    value: '1M+',
    description: 'Lightning-fast execution',
  },
];

const partners = [
  { name: 'BlockChain Fund', opacity: 0.6 },
  { name: 'Venture Labs', opacity: 0.6 },
  { name: 'Crypto Ventures', opacity: 0.6 },
  { name: 'FinTech Alliance', opacity: 0.6 },
];

export default function Trust() {
  return (
    <section className="relative overflow-hidden border-t border-[rgba(255,255,255,0.05)] bg-linear-to-b from-[#0b1120] to-[#020617] px-4 py-24 sm:px-6 lg:px-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600/5 via-transparent to-purple-600/5" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Stats Grid */}
        <div className="mb-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group rounded-xl border border-[rgba(255,255,255,0.08)] bg-linear-to-br from-[rgba(255,255,255,0.05)] to-[rgba(255,255,255,0.02)] p-6 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(255,255,255,0.15)] hover:bg-linear-to-br hover:from-[rgba(59,130,246,0.1)] hover:to-[rgba(99,102,241,0.05)]"
            >
              <div className="mb-4 inline-block h-1 w-8 rounded-full bg-linear-to-r from-blue-500 to-indigo-500" />
              <p className="mb-2 text-sm tracking-wider text-[#9fb4d5] uppercase">{stat.label}</p>
              <h3 className="mb-3 text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-sm text-[#9fb4d5]/70">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Partners Section */}
        <div className="border-t border-[rgba(255,255,255,0.05)] pt-16">
          <h3 className="mb-12 text-center text-sm font-medium tracking-widest text-[#9fb4d5] uppercase">
            Trusted by Leading Organizations
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="rounded-lg border border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.02)] px-6 py-3 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(255,255,255,0.1)] hover:bg-[rgba(255,255,255,0.04)]"
                style={{ opacity: partner.opacity }}
              >
                <p className="font-medium text-gray-400">{partner.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
