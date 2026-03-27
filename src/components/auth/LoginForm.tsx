'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      // Simulate login API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // For demo purposes, always succeed
      window.location.href = '/dashboard';
    } catch {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="animate-in fade-in-0 slide-in-from-bottom-4 w-full max-w-md space-y-8 duration-700">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Welcome back</h1>
        <p className="mt-2 text-[#9fb4d5]">Sign in to your account</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-white">
            Email
          </label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="mt-1 h-12 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-white placeholder:text-[#9fb4d5] focus:border-blue-500 focus:ring-blue-500/50"
            placeholder="Enter your email"
          />
        </div>

        {/* Password */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-white">
            Password
          </label>
          <div className="relative mt-1">
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-12 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] pr-10 text-white placeholder:text-[#9fb4d5] focus:border-blue-500 focus:ring-blue-500/50"
              placeholder="Enter your password"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 -translate-y-1/2 text-[#9fb4d5] transition-colors hover:text-white"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>

        {/* Remember me and Forgot password */}
        <div className="flex items-center justify-between">
          <label className="flex items-center">
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="h-4 w-4 rounded border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-blue-500 focus:ring-blue-500/50"
            />
            <span className="ml-2 text-sm text-[#9fb4d5]">Remember me</span>
          </label>
          <Link
            href="/auth/forgot-password"
            className="text-sm text-blue-400 transition-colors hover:text-blue-300"
          >
            Forgot password?
          </Link>
        </div>

        {/* Error message */}
        {error && (
          <div className="animate-in fade-in-0 slide-in-from-top-2 rounded-md border border-red-500/20 bg-red-500/10 p-3 text-center text-sm text-red-400 duration-300">
            {error}
          </div>
        )}

        {/* Login button */}
        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 w-full rounded-lg bg-blue-600 font-medium text-white transition-all duration-200 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Signing in...
            </>
          ) : (
            'Sign in'
          )}
        </Button>

        {/* Social login (optional) */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[rgba(255,255,255,0.08)]" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-[rgba(255,255,255,0.02)] px-2 text-[#9fb4d5]">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-12 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-white transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]"
          >
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-12 border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] text-white transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)]"
          >
            GitHub
          </Button>
        </div>
      </form>

      {/* Sign up link */}
      <p className="text-center text-[#9fb4d5]">
        Don&apos;t have an account?{' '}
        <Link href="/auth/signup" className="text-blue-400 transition-colors hover:text-blue-300">
          Sign up
        </Link>
      </p>
    </div>
  );
}
