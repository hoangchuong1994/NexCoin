'use client';

import React, { useEffect, useRef } from 'react';
import { createChart, ColorType, IChartApi, ISeriesApi, CandlestickData } from 'lightweight-charts';
import { useTradingStore } from '@/store/tradingStore';
import { Button } from '@/components/ui/button';

const timeframes = ['1m', '5m', '15m', '1H', '4H', '1D'];
const indicators = ['MA', 'RSI', 'MACD'];

export default function ChartPanel() {
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const candlestickSeriesRef = useRef<ISeriesApi<'Candlestick'> | null>(null);

  const { candleData, timeframe, setTimeframe } = useTradingStore();

  useEffect(() => {
    if (!chartContainerRef.current) return;

    // Create chart
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: 'transparent' },
        textColor: '#9fb4d5',
      },
      grid: {
        vertLines: { color: 'rgba(255,255,255,0.05)' },
        horzLines: { color: 'rgba(255,255,255,0.05)' },
      },
      crosshair: {
        mode: 1,
        vertLine: { color: 'rgba(59,130,246,0.5)', width: 1 },
        horzLine: { color: 'rgba(59,130,246,0.5)', width: 1 },
      },
      rightPriceScale: {
        borderColor: 'rgba(255,255,255,0.08)',
      },
      timeScale: {
        borderColor: 'rgba(255,255,255,0.08)',
        timeVisible: true,
        secondsVisible: false,
      },
      width: chartContainerRef.current.clientWidth,
      height: 500,
    });

    // Create candlestick series
    const candlestickSeries = chart.addCandlestickSeries({
      upColor: '#22c55e',
      downColor: '#ef4444',
      borderVisible: false,
      wickUpColor: '#22c55e',
      wickDownColor: '#ef4444',
    });

    chartRef.current = chart;
    candlestickSeriesRef.current = candlestickSeries;

    // Handle resize
    const handleResize = () => {
      if (chartContainerRef.current && chartRef.current) {
        chartRef.current.applyOptions({
          width: chartContainerRef.current.clientWidth,
        });
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, []);

  // Update chart data when candleData changes
  useEffect(() => {
    if (candlestickSeriesRef.current && candleData.length > 0) {
      candlestickSeriesRef.current.setData(
        candleData.map((c) => ({
          time: c.time,
          open: c.open,
          high: c.high,
          low: c.low,
          close: c.close,
        })) as CandlestickData[],
      );
    }
  }, [candleData]);

  return (
    <div className="flex-1 border-b border-[rgba(255,255,255,0.08)] bg-[rgba(2,6,23,0.95)]">
      {/* Toolbar */}
      <div className="flex items-center justify-between border-b border-[rgba(255,255,255,0.08)] p-4">
        <div className="flex gap-2">
          {timeframes.map((tf) => (
            <Button
              key={tf}
              variant={timeframe === tf ? 'default' : 'outline'}
              size="sm"
              onClick={() => setTimeframe(tf)}
              className={`${
                timeframe === tf
                  ? 'bg-blue-600 text-white'
                  : 'border-[rgba(255,255,255,0.1)] bg-transparent text-[#9fb4d5] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]'
              }`}
            >
              {tf}
            </Button>
          ))}
        </div>

        <div className="flex gap-2">
          {indicators.map((indicator) => (
            <Button
              key={indicator}
              variant="outline"
              size="sm"
              className="border-[rgba(255,255,255,0.1)] bg-transparent text-[#9fb4d5] hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
            >
              {indicator}
            </Button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div ref={chartContainerRef} className="h-125 w-full" />
    </div>
  );
}
