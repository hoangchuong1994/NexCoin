'use client';

import React, { useEffect } from 'react';
import TopBar from '@/components/trading/TopBar';
import Sidebar from '@/components/trading/Sidebar';
import ChartPanel from '@/components/trading/ChartPanel';
import RightPanel from '@/components/trading/RightPanel';
import BottomPanel from '@/components/trading/BottomPanel';
import { useTradingStore } from '@/store/tradingStore';
import { generateMockData } from '@/lib/mockData';

export default function DashboardLayout() {
  const { setCandleData, setOrderBook, addTrade, setPositions, setWatchlist, setIsConnected } =
    useTradingStore();

  useEffect(() => {
    // Initialize mock data
    const { candleData, orderBook, positions, watchlist } = generateMockData();
    setCandleData(candleData);
    setOrderBook(orderBook.bids, orderBook.asks);
    setPositions(positions);
    setWatchlist(watchlist);
    setIsConnected(true);

    // Simulate real-time updates
    const interval = setInterval(
      () => {
        const update = generateMockData();
        // Add new candle if needed
        if (Math.random() > 0.7) {
          const lastCandle = candleData[candleData.length - 1];
          const newCandle = {
            time: lastCandle.time + 60, // 1 minute
            open: lastCandle.close,
            high: lastCandle.close + Math.random() * 100,
            low: lastCandle.close - Math.random() * 100,
            close: lastCandle.close + (Math.random() - 0.5) * 200,
            volume: Math.random() * 1000 + 500,
          };
          setCandleData([...candleData, newCandle]);
        }

        // Update order book
        setOrderBook(update.orderBook.bids, update.orderBook.asks);

        // Add random trade
        if (Math.random() > 0.6) {
          const trade = {
            id: Date.now().toString(),
            price: 48200 + (Math.random() - 0.5) * 200,
            size: Math.random() * 10 + 1,
            side: Math.random() > 0.5 ? 'buy' : ('sell' as 'buy' | 'sell'),
            timestamp: Date.now(),
          };
          addTrade(trade);
        }
      },
      Math.random() * 700 + 500,
    ); // 500-1200ms

    return () => clearInterval(interval);
  }, [setCandleData, setOrderBook, addTrade, setPositions, setWatchlist, setIsConnected]);

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <TopBar />
      <div className="flex h-[calc(100vh-64px)]">
        <Sidebar />
        <div className="flex flex-1 flex-col">
          <ChartPanel />
          <BottomPanel />
        </div>
        <RightPanel />
      </div>
    </div>
  );
}
