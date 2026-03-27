import { Link } from '@/i18n/navigation';
import React from 'react';

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className="shrink-0">
      <div className={`flex items-center gap-2 ${className || ''}`}>
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-500 to-indigo-600">
          <svg
            className="h-5 w-5 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <span className="text-xl font-bold tracking-tight">
          <span className="bg-linear-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            NexCoin
          </span>
        </span>
      </div>
    </Link>
  );
}

export default Logo;
