'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/Logo';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Security', href: '#security' },
  { label: 'Docs', href: '#docs' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-[rgba(255,255,255,0.05)] bg-linear-to-b from-[rgba(2,6,23,0.95)] to-[rgba(11,17,32,0.8)] backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[#9fb4d5] transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden items-center gap-3 lg:flex">
          <Button
            variant="outline"
            size="sm"
            className="border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
          >
            Sign In
          </Button>
          <Button
            size="sm"
            className="bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50"
          >
            Get Started
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center gap-2 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] p-2 text-white backdrop-blur-md transition-all hover:border-[rgba(255,255,255,0.2)] lg:hidden"
        >
          {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-[rgba(255,255,255,0.05)] bg-linear-to-b from-[rgba(11,17,32,0.95)] to-[rgba(2,6,23,0.95)] backdrop-blur-xl">
          <div className="space-y-1 px-4 py-4 sm:px-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-lg px-4 py-2 text-sm font-medium text-[#9fb4d5] transition-colors hover:bg-[rgba(255,255,255,0.05)] hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <div className="flex gap-2 pt-4">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
              >
                Sign In
              </Button>
              <Button
                size="sm"
                className="flex-1 bg-linear-to-r from-blue-600 to-indigo-600 text-white"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
