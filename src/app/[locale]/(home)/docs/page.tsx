'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/sections/Footer';
import {
  Book,
  Code,
  Zap,
  Key,
  ChevronRight,
  Copy,
  Check,
  Menu,
  X,
  Search,
  ExternalLink,
} from 'lucide-react';

const sidebarSections = [
  {
    title: 'Getting Started',
    items: [
      { title: 'Introduction', href: '#introduction' },
      { title: 'Quick Start', href: '#quick-start' },
      { title: 'Account Setup', href: '#account-setup' },
      { title: 'First Trade', href: '#first-trade' },
    ],
  },
  {
    title: 'API Reference',
    items: [
      { title: 'Authentication', href: '#authentication' },
      { title: 'REST API', href: '#rest-api' },
      { title: 'Rate Limits', href: '#rate-limits' },
      { title: 'Error Handling', href: '#error-handling' },
    ],
  },
  {
    title: 'WebSocket Streams',
    items: [
      { title: 'Market Data', href: '#market-data' },
      { title: 'Order Updates', href: '#order-updates' },
      { title: 'Connection Management', href: '#connection-management' },
    ],
  },
  {
    title: 'Trading',
    items: [
      { title: 'Order Types', href: '#order-types' },
      { title: 'Market Orders', href: '#market-orders' },
      { title: 'Limit Orders', href: '#limit-orders' },
      { title: 'Stop Orders', href: '#stop-orders' },
    ],
  },
];

const codeExamples = {
  authentication: `// API Key Authentication
const apiKey = 'your_api_key';
const secretKey = 'your_secret_key';

// Create signature
const timestamp = Date.now();
const message = \`timestamp=\${timestamp}\`;
const signature = crypto.createHmac('sha256', secretKey).update(message).digest('hex');

// Make authenticated request
fetch('/api/v1/account', {
  headers: {
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  }
});`,

  websocket: `// WebSocket connection
const ws = new WebSocket('wss://api.nexcoin.com/ws');

// Subscribe to market data
ws.onopen = () => {
  ws.send(JSON.stringify({
    method: 'SUBSCRIBE',
    params: ['btcusdt@ticker', 'ethusdt@ticker'],
    id: 1
  }));
};

// Handle messages
ws.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('Market data:', data);
};`,

  placeOrder: `// Place a market order
const order = {
  symbol: 'BTCUSDT',
  side: 'BUY',
  type: 'MARKET',
  quantity: '0.001'
};

fetch('/api/v1/order', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'X-API-Key': apiKey,
    'X-Timestamp': timestamp,
    'X-Signature': signature
  },
  body: JSON.stringify(order)
})
.then(response => response.json())
.then(data => console.log('Order placed:', data));`,
};

const CodeBlock = ({
  code,
  id,
  copiedCode,
  copyToClipboard,
}: {
  code: string;
  id: string;
  copiedCode: string | null;
  copyToClipboard: (code: string, id: string) => void;
}) => (
  <div className="relative">
    <pre className="overflow-x-auto rounded-lg bg-[#0b1120] p-4 text-sm text-[#e6ebff]">
      <code>{code}</code>
    </pre>
    <button
      onClick={() => copyToClipboard(code, id)}
      className="absolute top-3 right-3 rounded-md bg-[#1a1f3a] p-2 text-[#9fb4d5] transition-colors hover:bg-[#2a2f4a] hover:text-white"
    >
      {copiedCode === id ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
    </button>
  </div>
);

export default function DocsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const copyToClipboard = async (code: string, id: string) => {
    await navigator.clipboard.writeText(code);
    setCopiedCode(id);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <main className="min-h-screen w-full bg-linear-to-b from-[#020617] via-[#0b1120] to-[#020617]">
      <div className="flex pt-20">
        {/* Mobile sidebar toggle */}
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="fixed top-24 left-4 z-40 rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-2 backdrop-blur-sm lg:hidden"
        >
          {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>

        {/* Sidebar */}
        <aside
          className={`fixed inset-y-0 left-0 z-30 w-80 transform border-r border-[rgba(255,255,255,0.08)] bg-[#020617] pt-20 transition-transform duration-300 ease-in-out lg:static lg:inset-0 lg:translate-x-0 ${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex h-full flex-col">
            <div className="flex-1 overflow-y-auto p-6">
              <div className="mb-8">
                <h2 className="mb-6 text-xl font-bold text-white">Documentation</h2>

                {/* Search */}
                <div className="relative mb-6">
                  <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#9fb4d5]" />
                  <input
                    type="text"
                    placeholder="Search docs..."
                    className="w-full rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] px-10 py-2 text-sm text-white placeholder-[#9fb4d5] backdrop-blur-sm focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              {/* Navigation */}
              <nav className="space-y-8">
                {sidebarSections.map((section, sectionIndex) => (
                  <div key={sectionIndex}>
                    <h3 className="mb-3 text-sm font-semibold tracking-wider text-[#9fb4d5] uppercase">
                      {section.title}
                    </h3>
                    <ul className="space-y-2">
                      {section.items.map((item, itemIndex) => (
                        <li key={itemIndex}>
                          <a
                            href={item.href}
                            className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-[#9fb4d5] transition-colors hover:bg-[rgba(255,255,255,0.04)] hover:text-white"
                            onClick={() => setSidebarOpen(false)}
                          >
                            <ChevronRight className="h-3 w-3" />
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </nav>
            </div>

            {/* Sidebar footer */}
            <div className="border-t border-[rgba(255,255,255,0.08)] p-6">
              <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-blue-600 to-indigo-600">
                  <Book className="h-4 w-4 text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">API Status</div>
                  <div className="text-xs text-green-400">All systems operational</div>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Overlay for mobile */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 z-20 bg-black/50 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Main content */}
        <div className="flex-1 lg:pl-0">
          <div className="max-w-4xl px-4 py-8 lg:px-8 lg:py-12">
            {/* Hero */}
            <div className="mb-12">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(59,130,246,0.05)] px-4 py-2 backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                <span className="text-sm font-medium text-[#9fb4d5]">Developer Documentation</span>
              </div>

              <h1 className="mb-4 text-4xl font-bold text-white lg:text-5xl">
                Build with NexCoin API
              </h1>

              <p className="mb-8 text-lg text-[#9fb4d5]">
                Comprehensive documentation for integrating with our trading platform. Get started
                with our REST API and WebSocket streams.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Button className="bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50">
                  <Key className="mr-2 h-4 w-4" />
                  Get API Keys
                </Button>
                <Button
                  variant="outline"
                  className="border-[rgba(255,255,255,0.1)] bg-transparent text-white hover:border-[rgba(255,255,255,0.2)] hover:bg-[rgba(255,255,255,0.05)]"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  API Reference
                </Button>
              </div>
            </div>

            {/* Content sections */}
            <div className="space-y-16">
              {/* Getting Started */}
              <section id="introduction">
                <h2 className="mb-6 text-2xl font-bold text-white">Introduction</h2>
                <p className="mb-6 leading-relaxed text-[#9fb4d5]">
                  The NexCoin API provides programmatic access to our trading platform, allowing you
                  to integrate trading functionality into your applications, build automated trading
                  strategies, and access real-time market data.
                </p>

                <div className="mb-8 grid gap-6 md:grid-cols-3">
                  <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-sm">
                    <Code className="mb-3 h-8 w-8 text-blue-400" />
                    <h3 className="mb-2 text-lg font-semibold text-white">REST API</h3>
                    <p className="text-sm text-[#9fb4d5]">
                      Complete trading functionality with REST endpoints
                    </p>
                  </div>
                  <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-sm">
                    <Zap className="mb-3 h-8 w-8 text-yellow-400" />
                    <h3 className="mb-2 text-lg font-semibold text-white">WebSocket</h3>
                    <p className="text-sm text-[#9fb4d5]">
                      Real-time market data and order updates
                    </p>
                  </div>
                  <div className="rounded-xl border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-6 backdrop-blur-sm">
                    <Key className="mb-3 h-8 w-8 text-green-400" />
                    <h3 className="mb-2 text-lg font-semibold text-white">Secure</h3>
                    <p className="text-sm text-[#9fb4d5]">
                      Bank-grade security with API key authentication
                    </p>
                  </div>
                </div>
              </section>

              {/* Authentication */}
              <section id="authentication">
                <h2 className="mb-6 text-2xl font-bold text-white">Authentication</h2>
                <p className="mb-6 text-[#9fb4d5]">
                  All API requests must be authenticated using your API key and secret. We use
                  HMAC-SHA256 signatures to ensure request integrity.
                </p>

                <CodeBlock
                  code={codeExamples.authentication}
                  id="auth-code"
                  copiedCode={copiedCode}
                  copyToClipboard={copyToClipboard}
                />
              </section>

              {/* WebSocket */}
              <section id="market-data">
                <h2 className="mb-6 text-2xl font-bold text-white">WebSocket Streams</h2>
                <p className="mb-6 text-[#9fb4d5]">
                  Connect to our WebSocket streams for real-time market data, order updates, and
                  trading events.
                </p>

                <CodeBlock
                  code={codeExamples.websocket}
                  id="ws-code"
                  copiedCode={copiedCode}
                  copyToClipboard={copyToClipboard}
                />
              </section>

              {/* Trading */}
              <section id="order-types">
                <h2 className="mb-6 text-2xl font-bold text-white">Placing Orders</h2>
                <p className="mb-6 text-[#9fb4d5]">
                  Learn how to place different types of orders through our API.
                </p>

                <CodeBlock
                  code={codeExamples.placeOrder}
                  id="order-code"
                  copiedCode={copiedCode}
                  copyToClipboard={copyToClipboard}
                />

                <div className="mt-8 grid gap-4 md:grid-cols-2">
                  <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-4">
                    <h4 className="mb-2 font-semibold text-white">Market Order</h4>
                    <p className="text-sm text-[#9fb4d5]">
                      Execute immediately at the best available price
                    </p>
                  </div>
                  <div className="rounded-lg border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.04)] p-4">
                    <h4 className="mb-2 font-semibold text-white">Limit Order</h4>
                    <p className="text-sm text-[#9fb4d5]">
                      Execute only at your specified price or better
                    </p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
