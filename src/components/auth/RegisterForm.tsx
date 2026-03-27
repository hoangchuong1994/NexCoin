'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff, Loader2 } from 'lucide-react';
import Link from 'next/link';

export default function RegisterForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculateStrength = (value: string) => {
    let strength = 0;
    if (value.length >= 6) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;
    setPasswordStrength(strength);
  };

  const getStrengthLabel = () => {
    switch (passwordStrength) {
      case 0:
      case 1:
        return { label: 'Weak', color: 'bg-red-500' };
      case 2:
        return { label: 'Medium', color: 'bg-yellow-500' };
      case 3:
        return { label: 'Strong', color: 'bg-blue-500' };
      case 4:
        return { label: 'Very Strong', color: 'bg-green-500' };
      default:
        return { label: '', color: '' };
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setIsLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      window.location.href = '/dashboard';
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const strength = getStrengthLabel();

  return (
    <div className="animate-in fade-in-0 slide-in-from-bottom-4 w-full max-w-md space-y-8 duration-700">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-white">Create account</h1>
        <p className="mt-2 text-[#9fb4d5]">Start your journey with us</p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Grid 2x2 */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-white">Full name</label>
            <Input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              placeholder="Enter your name"
              className="mt-1 h-12 border-white/10 bg-white/5 text-white placeholder:text-[#9fb4d5]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="mt-1 h-12 border-white/10 bg-white/5 text-white placeholder:text-[#9fb4d5]"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-white">Password</label>
            <div className="relative mt-1">
              <Input
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  calculateStrength(e.target.value);
                }}
                required
                placeholder="Create password"
                className="h-12 border-white/10 bg-white/5 pr-10 text-white placeholder:text-[#9fb4d5]"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-[#9fb4d5] hover:text-white"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-white">Confirm password</label>
            <div className="relative mt-1">
              <Input
                type={showConfirm ? 'text' : 'password'}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                placeholder="Confirm password"
                className="h-12 border-white/10 bg-white/5 pr-10 text-white placeholder:text-[#9fb4d5]"
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute top-1/2 right-3 -translate-y-1/2 text-[#9fb4d5] hover:text-white"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
        </div>

        {/* Password strength */}
        {password && (
          <div>
            <div className="h-1 w-full rounded bg-white/10">
              <div
                className={`h-1 rounded transition-all ${strength.color}`}
                style={{ width: `${(passwordStrength / 4) * 100}%` }}
              />
            </div>
            <p className="mt-1 text-xs text-[#9fb4d5]">{strength.label}</p>
          </div>
        )}

        {/* Error */}
        {error && (
          <div className="animate-in fade-in-0 slide-in-from-top-2 rounded-md border border-red-500/20 bg-red-500/10 p-3 text-center text-sm text-red-400">
            {error}
          </div>
        )}

        {/* Submit */}
        <Button
          type="submit"
          disabled={isLoading}
          className="h-12 w-full rounded-lg bg-blue-600 font-medium text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/25 active:scale-[0.98]"
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Creating account...
            </>
          ) : (
            'Sign up'
          )}
        </Button>

        {/* Divider */}
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white/5 px-2 text-[#9fb4d5]">Or continue with</span>
          </div>
        </div>

        {/* Social */}
        <div className="grid grid-cols-2 gap-3">
          <Button
            type="button"
            variant="outline"
            className="h-12 border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            Google
          </Button>
          <Button
            type="button"
            variant="outline"
            className="h-12 border-white/10 bg-white/5 text-white hover:bg-white/10"
          >
            GitHub
          </Button>
        </div>
      </form>

      {/* Login link */}
      <p className="text-center text-[#9fb4d5]">
        Already have an account?{' '}
        <Link href="/auth/signin" className="text-blue-400 hover:text-blue-300">
          Sign in
        </Link>
      </p>
    </div>
  );
}
