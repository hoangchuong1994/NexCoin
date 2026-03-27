'use client';

import React from 'react';
import { Logo } from '@/components/Logo';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTradingStore } from '@/store/tradingStore';
import { ChevronDown, Wifi, WifiOff, User } from 'lucide-react';

export default function TopBar() {
  const { currentSymbol, currentPrice, priceChange, priceChangePercent, isConnected } =
    useTradingStore();

  const isPositive = priceChange >= 0;

  return (
    <header className="flex h-16 items-center justify-between border-b border-[rgba(255,255,255,0.08)] bg-[rgba(2,6,23,0.95)] px-6 backdrop-blur-xl">
      {/* Left side - Logo */}
      <div className="flex items-center gap-6">
        <Logo />
        <div className="h-6 w-px bg-[rgba(255,255,255,0.1)]" />
      </div>

      {/* Center - Market Info */}
      <div className="flex items-center gap-8">
        {/* Market Selector */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-semibold text-white">{currentSymbol}</span>
          <ChevronDown className="h-4 w-4 text-[#9fb4d5]" />
        </div>

        {/* Price Display */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-2xl font-bold text-white">${currentPrice.toLocaleString()}</div>
            <div
              className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}
            >
              {isPositive ? '+' : ''}${priceChange.toFixed(2)} ({isPositive ? '+' : ''}
              {priceChangePercent.toFixed(2)}%)
            </div>
          </div>
        </div>

        {/* Connection Status */}
        <div className="flex items-center gap-2">
          {isConnected ? (
            <Wifi className="h-4 w-4 text-green-400" />
          ) : (
            <WifiOff className="h-4 w-4 text-red-400" />
          )}
          <Badge
            variant="outline"
            className={`border-0 ${isConnected ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'}`}
          >
            {isConnected ? 'Online' : 'Offline'}
          </Badge>
        </div>
      </div>

      {/* Right side - User Menu */}
      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          size="sm"
          className="border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
        >
          <User className="mr-2 h-4 w-4" />
          Account
          <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </header>
  );
}
