import React from 'react';
import RegisterForm from '@/components/auth/RegisterForm';

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen bg-linear-to-b from-[#020617] via-[#0b1120] to-[#020617]">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-96 w-96 animate-pulse rounded-full bg-linear-to-br from-blue-600/20 to-purple-600/20 opacity-40 blur-3xl" />
        <div className="absolute top-1/3 -left-32 h-80 w-80 animate-pulse rounded-full bg-linear-to-tr from-indigo-600/15 to-blue-600/15 opacity-30 blur-3xl delay-1000" />
        <div className="absolute right-1/4 bottom-0 h-72 w-72 rounded-full bg-linear-to-tl from-blue-500/10 to-transparent opacity-20 blur-3xl" />
      </div>

      {/* Left side - Illustration (desktop only) */}
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:px-8">
        <div className="max-w-md space-y-8 text-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white">
              Join the{' '}
              <span className="bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
                Future of Trading
              </span>
            </h2>
            <p className="text-lg text-[#9fb4d5]">
              Create your account and start trading with advanced tools, real-time data, and
              professional analytics.
            </p>
          </div>

          {/* Illustration placeholder */}
          <div className="relative">
            <div className="mx-auto flex h-80 w-80 items-center justify-center rounded-2xl border border-[rgba(255,255,255,0.08)] bg-linear-to-br from-blue-600/20 to-purple-600/20 backdrop-blur-sm">
              <div className="text-6xl">🚀</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex flex-1 items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-lg">
          <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 shadow-2xl backdrop-blur-xl">
            <RegisterForm />
          </div>
        </div>
      </div>
    </div>
  );
}
