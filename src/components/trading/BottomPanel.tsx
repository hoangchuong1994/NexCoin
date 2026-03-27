'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useTradingStore } from '@/store/tradingStore';

export default function BottomPanel() {
  const [orderType, setOrderType] = useState('limit');
  const [price, setPrice] = useState('');
  const [quantity, setQuantity] = useState('');
  const { positions } = useTradingStore();

  const handleOrder = (side: 'buy' | 'sell') => {
    // Handle order submission
    console.log(`${side} order:`, { type: orderType, price, quantity });
    // Reset form
    setPrice('');
    setQuantity('');
  };

  return (
    <div className="flex h-80 border-t border-[rgba(255,255,255,0.08)] bg-[rgba(2,6,23,0.95)]">
      {/* Order Form */}
      <div className="flex-1 border-r border-[rgba(255,255,255,0.08)] p-4">
        <h3 className="mb-4 text-sm font-medium tracking-wider text-[#9fb4d5] uppercase">
          Place Order
        </h3>

        <Tabs value={orderType} onValueChange={setOrderType} className="w-full">
          <TabsList className="grid w-full grid-cols-3 bg-[rgba(255,255,255,0.05)]">
            <TabsTrigger value="limit" className="text-xs">
              Limit
            </TabsTrigger>
            <TabsTrigger value="market" className="text-xs">
              Market
            </TabsTrigger>
            <TabsTrigger value="stop" className="text-xs">
              Stop
            </TabsTrigger>
          </TabsList>

          <TabsContent value="limit" className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-xs font-medium text-[#9fb4d5]">Price</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-white placeholder-[#9fb4d5] focus:border-blue-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-[#9fb4d5]">Quantity</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-white placeholder-[#9fb4d5] focus:border-blue-500"
                />
              </div>
            </div>
          </TabsContent>

          <TabsContent value="market" className="mt-4 space-y-4">
            <div>
              <label className="mb-2 block text-xs font-medium text-[#9fb4d5]">Quantity</label>
              <Input
                type="number"
                placeholder="0.00"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                className="border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-white placeholder-[#9fb4d5] focus:border-blue-500"
              />
            </div>
          </TabsContent>

          <TabsContent value="stop" className="mt-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="mb-2 block text-xs font-medium text-[#9fb4d5]">Stop Price</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-white placeholder-[#9fb4d5] focus:border-blue-500"
                />
              </div>
              <div>
                <label className="mb-2 block text-xs font-medium text-[#9fb4d5]">Quantity</label>
                <Input
                  type="number"
                  placeholder="0.00"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                  className="border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.02)] text-white placeholder-[#9fb4d5] focus:border-blue-500"
                />
              </div>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-6 flex gap-3">
          <Button
            onClick={() => handleOrder('buy')}
            className="flex-1 bg-green-600 text-white hover:bg-green-700"
            disabled={!quantity}
          >
            Buy
          </Button>
          <Button
            onClick={() => handleOrder('sell')}
            className="flex-1 bg-red-600 text-white hover:bg-red-700"
            disabled={!quantity}
          >
            Sell
          </Button>
        </div>
      </div>

      {/* Positions */}
      <div className="w-80 p-4">
        <h3 className="mb-4 text-sm font-medium tracking-wider text-[#9fb4d5] uppercase">
          Open Positions
        </h3>

        <div className="space-y-3">
          {positions.length === 0 ? (
            <div className="text-center text-[#9fb4d5]">No open positions</div>
          ) : (
            positions.map((position, index) => (
              <div
                key={index}
                className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.02)] p-3"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-medium text-white">{position.symbol}</span>
                  <span
                    className={`rounded px-2 py-1 text-xs font-medium ${
                      position.side === 'long'
                        ? 'bg-green-500/20 text-green-400'
                        : 'bg-red-500/20 text-red-400'
                    }`}
                  >
                    {position.side.toUpperCase()}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <div className="text-[#9fb4d5]">Entry</div>
                    <div className="font-medium text-white">
                      ${position.entryPrice.toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#9fb4d5]">Size</div>
                    <div className="font-medium text-white">{position.size}</div>
                  </div>
                </div>
                <div className="mt-2 border-t border-[rgba(255,255,255,0.05)] pt-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-[#9fb4d5]">PnL</span>
                    <span
                      className={`text-sm font-medium ${position.pnl >= 0 ? 'text-green-400' : 'text-red-400'}`}
                    >
                      {position.pnl >= 0 ? '+' : ''}${position.pnl.toFixed(2)} (
                      {position.pnlPercent >= 0 ? '+' : ''}
                      {position.pnlPercent.toFixed(2)}%)
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
