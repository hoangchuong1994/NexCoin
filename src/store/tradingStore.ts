'use client';

import { create } from 'zustand';
import { subscribeWithSelector } from 'zustand/middleware';

export interface CandleData {
  time: number;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
}

export interface OrderBookEntry {
  price: number;
  size: number;
  total: number;
}

export interface Trade {
  id: string;
  price: number;
  size: number;
  side: 'buy' | 'sell';
  timestamp: number;
}

export interface Position {
  symbol: string;
  side: 'long' | 'short';
  entryPrice: number;
  size: number;
  pnl: number;
  pnlPercent: number;
}

export interface WatchlistItem {
  symbol: string;
  price: number;
  change: number;
  changePercent: number;
}

interface TradingState {
  // Current symbol
  currentSymbol: string;
  setCurrentSymbol: (symbol: string) => void;

  // Price data
  currentPrice: number;
  priceChange: number;
  priceChangePercent: number;

  // Chart data
  candleData: CandleData[];
  setCandleData: (data: CandleData[]) => void;
  addCandle: (candle: CandleData) => void;

  // Order book
  bids: OrderBookEntry[];
  asks: OrderBookEntry[];
  setOrderBook: (bids: OrderBookEntry[], asks: OrderBookEntry[]) => void;

  // Recent trades
  trades: Trade[];
  addTrade: (trade: Trade) => void;

  // Positions
  positions: Position[];
  setPositions: (positions: Position[]) => void;

  // Watchlist
  watchlist: WatchlistItem[];
  setWatchlist: (watchlist: WatchlistItem[]) => void;

  // Connection status
  isConnected: boolean;
  setIsConnected: (connected: boolean) => void;

  // Timeframe
  timeframe: string;
  setTimeframe: (timeframe: string) => void;
}

export const useTradingStore = create<TradingState>()(
  subscribeWithSelector((set) => ({
    currentSymbol: 'BTC/USDT',
    setCurrentSymbol: (symbol) => set({ currentSymbol: symbol }),

    currentPrice: 48230.5,
    priceChange: 1234.5,
    priceChangePercent: 2.63,

    candleData: [],
    setCandleData: (data) => set({ candleData: data }),
    addCandle: (candle) =>
      set((state) => ({
        candleData: [...state.candleData, candle],
      })),

    bids: [],
    asks: [],
    setOrderBook: (bids, asks) => set({ bids, asks }),

    trades: [],
    addTrade: (trade) =>
      set((state) => ({
        trades: [trade, ...state.trades.slice(0, 49)], // Keep last 50 trades
      })),

    positions: [],
    setPositions: (positions) => set({ positions }),

    watchlist: [],
    setWatchlist: (watchlist) => set({ watchlist }),

    isConnected: true,
    setIsConnected: (connected) => set({ isConnected: connected }),

    timeframe: '1H',
    setTimeframe: (timeframe) => set({ timeframe }),
  })),
);
