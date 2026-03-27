'use client';

import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { useTradingStore } from '@/store/tradingStore';
import { Search, TrendingUp, TrendingDown } from 'lucide-react';

const tabs = ['Crypto', 'Stocks', 'Forex'];

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState('Crypto');
  const [searchQuery, setSearchQuery] = useState('');
  const { watchlist, currentSymbol, setCurrentSymbol } = useTradingStore();

  const filteredWatchlist = watchlist.filter((item) =>
    item.symbol.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <aside className="w-80 border-r border-[rgba(255,255,255,0.08)] bg-[rgba(11,17,32,0.95)] backdrop-blur-xl">
      {/* Tabs */}
      <div className="flex border-b border-[rgba(255,255,255,0.08)]">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
              activeTab === tab
                ? 'border-b-2 border-blue-500 text-blue-400'
                : 'text-[#9fb4d5] hover:text-white'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#9fb4d5]" />
          <Input
            placeholder="Search assets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] pl-10 text-white placeholder-[#9fb4d5] focus:border-blue-500"
          />
        </div>
      </div>

      {/* Watchlist */}
      <div className="flex-1 overflow-y-auto">
        <div className="px-4 pb-4">
          <h3 className="mb-3 text-sm font-medium tracking-wider text-[#9fb4d5] uppercase">
            Watchlist
          </h3>
          <div className="space-y-1">
            {filteredWatchlist.map((item) => {
              const isPositive = item.change >= 0;
              const isSelected = item.symbol === currentSymbol;

              return (
                <button
                  key={item.symbol}
                  onClick={() => setCurrentSymbol(item.symbol)}
                  className={`w-full rounded-lg border p-3 text-left transition-all hover:bg-[rgba(255,255,255,0.05)] ${
                    isSelected ? 'border-blue-500/50 bg-blue-500/10' : 'border-transparent'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium text-white">{item.symbol}</div>
                      <div className="text-sm text-[#9fb4d5]">${item.price.toLocaleString()}</div>
                    </div>
                    <div className="text-right">
                      <div
                        className={`text-sm font-medium ${isPositive ? 'text-green-400' : 'text-red-400'}`}
                      >
                        {isPositive ? '+' : ''}
                        {item.changePercent.toFixed(2)}%
                      </div>
                      <div className={`text-xs ${isPositive ? 'text-green-400' : 'text-red-400'}`}>
                        {isPositive ? (
                          <TrendingUp className="inline h-3 w-3" />
                        ) : (
                          <TrendingDown className="inline h-3 w-3" />
                        )}
                        {isPositive ? '+' : ''}${item.change.toFixed(2)}
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </aside>
  );
}
