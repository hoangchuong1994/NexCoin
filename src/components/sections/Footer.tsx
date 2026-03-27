'use client';

import React from 'react';
import { Code2, Share2, Users, Mail } from 'lucide-react';
import { Logo } from '@/components/Logo';

const footerLinks = {
  product: [
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Security', href: '#' },
    { label: 'Status', href: '#' },
  ],
  company: [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Contact', href: '#' },
  ],
  legal: [
    { label: 'Privacy', href: '#' },
    { label: 'Terms', href: '#' },
    { label: 'Cookies', href: '#' },
    { label: 'Compliance', href: '#' },
  ],
};

const socials = [
  { icon: Share2, label: 'Twitter', href: '#' },
  { icon: Code2, label: 'GitHub', href: '#' },
  { icon: Users, label: 'LinkedIn', href: '#' },
  { icon: Mail, label: 'Email', href: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.05)] bg-linear-to-b from-[#0b1120] to-[#020617] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Main footer content */}
        <div className="mb-12 grid gap-8 md:grid-cols-5">
          {/* Logo and description */}
          <div className="space-y-4 md:col-span-1">
            <Logo className="h-8 w-8" />
            <p className="text-sm text-[#9fb4d5]">
              Professional trading platform for modern investors.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              {socials.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-[#9fb4d5] transition-all duration-300 hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          <div className="md:col-span-1">
            <h4 className="mb-4 font-semibold text-white">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9fb4d5] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="mb-4 font-semibold text-white">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9fb4d5] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-1">
            <h4 className="mb-4 font-semibold text-white">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#9fb4d5] transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter signup */}
          <div className="md:col-span-1">
            <h4 className="mb-4 font-semibold text-white">Newsletter</h4>
            <p className="mb-3 text-sm text-[#9fb4d5]">
              Subscribe to get updates on new features and releases.
            </p>
            <div className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] px-3 py-2 text-sm text-white placeholder-[#9fb4d5]/50 backdrop-blur-sm transition-colors hover:border-[rgba(255,255,255,0.15)] focus:border-blue-500 focus:outline-none"
              />
              <button className="w-full rounded-lg bg-blue-600 px-3 py-2 text-sm font-medium text-white transition-all hover:bg-blue-700">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom divider and copyright */}
        <div className="border-t border-[rgba(255,255,255,0.05)] pt-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-[#9fb4d5]/60">© 2026 NexCoin. All rights reserved.</p>
            <p className="text-sm text-[#9fb4d5]/60">
              Built with precision for professional traders.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
