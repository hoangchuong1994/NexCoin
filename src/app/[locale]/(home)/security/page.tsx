'use client';

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Footer from '@/components/sections/Footer';
import {
  Shield,
  Lock,
  Server,
  Key,
  Eye,
  CheckCircle,
  Award,
  Users,
  Database,
  Fingerprint,
} from 'lucide-react';

const securityFeatures = [
  {
    icon: Key,
    title: '2FA Authentication',
    description:
      'Multi-factor authentication with TOTP, SMS, and hardware security keys for maximum account protection.',
  },
  {
    icon: Database,
    title: 'Cold Wallet Storage',
    description:
      '99% of funds stored in offline cold storage, protected by military-grade encryption and multi-signature security.',
  },
  {
    icon: Lock,
    title: 'End-to-End Encryption',
    description: 'All data transmission encrypted with TLS 1.3 and AES-256 encryption standards.',
  },
  {
    icon: Server,
    title: 'Anti-DDoS Protection',
    description:
      'Enterprise-grade DDoS protection with automatic traffic filtering and rate limiting.',
  },
  {
    icon: Eye,
    title: 'Privacy by Design',
    description:
      'Zero-knowledge architecture ensuring your trading data remains private and secure.',
  },
  {
    icon: Fingerprint,
    title: 'Biometric Security',
    description:
      'Advanced biometric authentication with fingerprint and facial recognition support.',
  },
];

const trustIndicators = [
  {
    icon: Award,
    title: 'SOC 2 Type II Certified',
    description:
      'Independent audit confirming our security controls and processes meet industry standards.',
  },
  {
    icon: Shield,
    title: 'ISO 27001 Compliant',
    description: 'International standard for information security management systems.',
  },
  {
    icon: CheckCircle,
    title: 'Regular Security Audits',
    description:
      'Quarterly third-party security audits and penetration testing by certified experts.',
  },
  {
    icon: Users,
    title: 'Insurance Coverage',
    description: '$100M cyber insurance coverage protecting user funds against security incidents.',
  },
];

const stats = [
  { label: 'Uptime', value: '99.99%', description: 'Platform availability' },
  { label: 'Security Incidents', value: '0', description: 'Since inception' },
  { label: 'Funds Protected', value: '$2.1B+', description: 'Total value secured' },
  { label: 'Audits Passed', value: '50+', description: 'Security assessments' },
];

export default function SecurityPage() {
  return (
    <main className="w-full bg-linear-to-b from-[#020617] via-[#0b1120] to-[#020617]">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] w-full overflow-hidden bg-linear-to-br from-[#020617] via-[#0b1120] to-[#1a1f3a] pt-32 lg:pt-40">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-linear-to-br from-green-600/20 to-blue-600/20 opacity-40 blur-3xl" />
          <div className="absolute top-1/3 -left-32 h-80 w-80 animate-pulse rounded-full bg-linear-to-tr from-blue-600/15 to-indigo-600/15 opacity-30 blur-3xl delay-1000" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(34,197,94,0.05)] px-4 py-2 backdrop-blur-md">
              <span className="h-2 w-2 rounded-full bg-green-500" />
              <span className="text-sm font-medium text-[#9fb4d5]">Bank-Grade Security</span>
            </div>

            <h1 className="mb-6 text-5xl leading-tight font-bold text-white lg:text-6xl xl:text-7xl">
              Security You Can{' '}
              <span className="bg-linear-to-r from-green-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Trust
              </span>
            </h1>

            <p className="mx-auto mb-12 max-w-3xl text-lg text-[#9fb4d5] lg:text-xl">
              Your security is our top priority. We employ military-grade encryption, multi-layer
              protection, and industry-leading security practices to keep your assets safe.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-green-600 to-blue-600 text-white shadow-lg shadow-green-600/30 hover:shadow-green-600/50"
                >
                  Start Trading Securely
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                View Security Whitepaper
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 text-center backdrop-blur-sm"
              >
                <div className="mb-2 text-3xl font-bold text-white">{stat.value}</div>
                <div className="mb-1 text-sm font-medium text-green-400">{stat.label}</div>
                <div className="text-xs text-[#9fb4d5]">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Multi-Layer Security Protection
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#9fb4d5]">
              Every aspect of our platform is designed with security in mind
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {securityFeatures.map((feature, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-sm transition-all duration-300 hover:border-[rgba(255,255,255,0.12)] hover:bg-[rgba(255,255,255,0.06)] hover:shadow-lg hover:shadow-green-500/10"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-green-600/20 to-blue-600/20">
                  <feature.icon className="h-6 w-6 text-green-400" />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-white">{feature.title}</h3>
                <p className="leading-relaxed text-[#9fb4d5]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Trusted by Industry Standards
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-[#9fb4d5]">
              Our security practices meet and exceed industry standards
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {trustIndicators.map((indicator, index) => (
              <div
                key={index}
                className="flex gap-6 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-8 backdrop-blur-sm"
              >
                <div className="shrink-0">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br from-blue-600/20 to-indigo-600/20">
                    <indicator.icon className="h-6 w-6 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold text-white">{indicator.title}</h3>
                  <p className="leading-relaxed text-[#9fb4d5]">{indicator.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Visualization */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-12 backdrop-blur-sm lg:p-16">
            <div className="mb-12 text-center">
              <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
                How We Protect Your Assets
              </h2>
              <p className="mx-auto max-w-2xl text-lg text-[#9fb4d5]">
                A visual representation of our security architecture
              </p>
            </div>

            <div className="grid gap-8 lg:grid-cols-3">
              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-green-600/20 to-blue-600/20">
                  <Shield className="h-10 w-10 text-green-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Frontend Security</h3>
                <p className="text-sm text-[#9fb4d5]">
                  TLS 1.3 encryption, secure headers, input validation
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-blue-600/20 to-indigo-600/20">
                  <Server className="h-10 w-10 text-blue-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Infrastructure</h3>
                <p className="text-sm text-[#9fb4d5]">
                  Cloud security, DDoS protection, regular patching
                </p>
              </div>

              <div className="text-center">
                <div className="mb-4 inline-flex h-20 w-20 items-center justify-center rounded-full bg-linear-to-br from-indigo-600/20 to-purple-600/20">
                  <Database className="h-10 w-10 text-indigo-400" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-white">Asset Storage</h3>
                <p className="text-sm text-[#9fb4d5]">
                  Cold wallets, multi-signature, offline storage
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[rgba(255,255,255,0.08)] bg-linear-to-br from-[rgba(34,197,94,0.05)] to-[rgba(59,130,246,0.05)] p-12 text-center backdrop-blur-sm lg:p-16">
            <h2 className="mb-4 text-3xl font-bold text-white lg:text-4xl">
              Your Security is Our Promise
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-[#9fb4d5]">
              Join millions of users who trust us with their digital assets. Experience bank-grade
              security today.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/dashboard">
                <Button
                  size="lg"
                  className="bg-linear-to-r from-green-600 to-blue-600 text-white shadow-lg shadow-green-600/30 hover:shadow-green-600/50"
                >
                  Start Trading Securely
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

      <Footer />
    </main>
  );
}
