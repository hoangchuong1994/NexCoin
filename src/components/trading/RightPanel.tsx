'use client';

import React from 'react';
import { useTradingStore } from '@/store/tradingStore';

export default function RightPanel() {
  const { bids, asks, trades } = useTradingStore();

  return (
    <aside className="w-80 border-l border-[rgba(255,255,255,0.08)] bg-[rgba(11,17,32,0.95)] backdrop-blur-xl">
      {/* Order Book */}
      <div className="border-b border-[rgba(255,255,255,0.08)] p-4">
        <h3 className="mb-3 text-sm font-medium tracking-wider text-[#9fb4d5] uppercase">
          Order Book
        </h3>

        {/* Header */}
        <div className="mb-2 grid grid-cols-3 gap-2 text-xs font-medium text-[#9fb4d5]">
          <div>Price</div>
          <div className="text-right">Size</div>
          <div className="text-right">Total</div>
        </div>

        {/* Asks (Sell) */}
        <div className="mb-4 space-y-1">
          {asks.slice(0, 10).map((ask, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-2 rounded px-2 py-1 text-xs hover:bg-[rgba(239,68,68,0.1)]"
            >
              <div className="text-red-400">{ask.price.toFixed(2)}</div>
              <div className="text-right text-[#9fb4d5]">{ask.size.toFixed(4)}</div>
              <div className="text-right text-[#9fb4d5]">{ask.total.toFixed(4)}</div>
            </div>
          ))}
        </div>

        {/* Spread */}
        <div className="mb-4 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-2 text-center">
          <div className="text-xs text-[#9fb4d5]">Spread</div>
          <div className="text-sm font-medium text-white">
            {asks.length > 0 && bids.length > 0
              ? (asks[0].price - bids[0].price).toFixed(2)
              : '0.00'}
          </div>
        </div>

        {/* Bids (Buy) */}
        <div className="space-y-1">
          {bids.slice(0, 10).map((bid, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-2 rounded px-2 py-1 text-xs hover:bg-[rgba(34,197,94,0.1)]"
            >
              <div className="text-green-400">{bid.price.toFixed(2)}</div>
              <div className="text-right text-[#9fb4d5]">{bid.size.toFixed(4)}</div>
              <div className="text-right text-[#9fb4d5]">{bid.total.toFixed(4)}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Trades */}
      <div className="flex-1 p-4">
        <h3 className="mb-3 text-sm font-medium tracking-wider text-[#9fb4d5] uppercase">
          Recent Trades
        </h3>

        <div className="space-y-2">
          {trades.slice(0, 20).map((trade) => (
            <div key={trade.id} className="flex items-center justify-between text-xs">
              <div
                className={`font-medium ${trade.side === 'buy' ? 'text-green-400' : 'text-red-400'}`}
              >
                {trade.price.toFixed(2)}
              </div>
              <div className="text-[#9fb4d5]">{trade.size.toFixed(4)}</div>
              <div
                className={`text-xs ${trade.side === 'buy' ? 'text-green-400' : 'text-red-400'}`}
              >
                {trade.side.toUpperCase()}
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}
