import { CandleData, OrderBookEntry, Position, WatchlistItem } from '@/store/tradingStore';

export function generateMockData() {
  // Generate candle data (last 100 candles)
  const candleData: CandleData[] = [];
  let basePrice = 48200;
  const now = Math.floor(Date.now() / 1000);

  for (let i = 0; i < 100; i++) {
    const time = now - (100 - i) * 60; // 1 minute intervals
    const open = basePrice;
    const volatility = Math.random() * 200 - 100;
    const close = open + volatility;
    const high = Math.max(open, close) + Math.random() * 50;
    const low = Math.min(open, close) - Math.random() * 50;
    const volume = Math.random() * 1000 + 500;

    candleData.push({
      time,
      open: Math.round(open * 100) / 100,
      high: Math.round(high * 100) / 100,
      low: Math.round(low * 100) / 100,
      close: Math.round(close * 100) / 100,
      volume: Math.round(volume * 100) / 100,
    });

    basePrice = close;
  }

  // Generate order book
  const bids: OrderBookEntry[] = [];
  const asks: OrderBookEntry[] = [];
  let bidPrice = 48150;
  let askPrice = 48250;

  for (let i = 0; i < 20; i++) {
    const bidSize = Math.random() * 50 + 10;
    const askSize = Math.random() * 50 + 10;

    bids.push({
      price: Math.round(bidPrice * 100) / 100,
      size: Math.round(bidSize * 100) / 100,
      total: Math.round(bidSize * 100) / 100,
    });

    asks.push({
      price: Math.round(askPrice * 100) / 100,
      size: Math.round(askSize * 100) / 100,
      total: Math.round(askSize * 100) / 100,
    });

    bidPrice -= Math.random() * 5 + 1;
    askPrice += Math.random() * 5 + 1;
  }

  // Generate positions
  const positions: Position[] = [
    {
      symbol: 'BTC/USDT',
      side: 'long',
      entryPrice: 47500,
      size: 0.5,
      pnl: 350,
      pnlPercent: 1.47,
    },
    {
      symbol: 'ETH/USDT',
      side: 'short',
      entryPrice: 2650,
      size: 5,
      pnl: -125,
      pnlPercent: -0.94,
    },
  ];

  // Generate watchlist
  const watchlist: WatchlistItem[] = [
    { symbol: 'BTC/USDT', price: 48230.5, change: 1234.5, changePercent: 2.63 },
    { symbol: 'ETH/USDT', price: 2645.2, change: -45.3, changePercent: -1.68 },
    { symbol: 'BNB/USDT', price: 315.8, change: 12.45, changePercent: 4.1 },
    { symbol: 'ADA/USDT', price: 0.485, change: 0.025, changePercent: 5.43 },
    { symbol: 'SOL/USDT', price: 98.75, change: -2.15, changePercent: -2.13 },
  ];

  return {
    candleData,
    orderBook: { bids, asks },
    positions,
    watchlist,
  };
}
