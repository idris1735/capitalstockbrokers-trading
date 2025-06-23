"use client"

import { useState } from "react"
import Link from "next/link"
import { Chart } from "@/components/Chart"
import { Menu, Bell, Phone, Code, Globe, Eye, Mail, TrendingUp, TrendingDown, BarChart3, Share } from 'lucide-react'

interface MarketSummaryItem {
  symbol: string
  company: string
  price: number
  change: number
  percent: number
  positive: boolean
}

export default function Trading() {
  const [selectedTab, setSelectedTab] = useState('Summary')

  const marketData = {
    market: "Bearish",
    leader: "SPY",
    hottestSector: "Energy",
    worstSector: "Materials",
    topStock: { symbol: "FI", change: "+5.58%" },
    worstStock: { symbol: "NVO", change: "-7.29%" }
  }

  const marketSummary: MarketSummaryItem[] = [
    { symbol: "AAPL", company: "Apple", price: 201.50, change: 0.40, percent: 0.20, positive: true },
    { symbol: "AMD", company: "AMD", price: 131.50, change: 2.87, percent: 2.24, positive: true },
    { symbol: "AMZN", company: "Amazon", price: 210.00, change: 0.20, percent: 0.10, positive: true },
    { symbol: "IWM", company: "iShares Russell", price: 208.66, change: -0.56, percent: -0.27, positive: false },
    { symbol: "META", company: "Meta", price: 685.50, change: 1.89, percent: 0.28, positive: true },
    { symbol: "QQQ", company: "Invesco QQQ", price: 527.00, change: 0.18, percent: 0.03, positive: true },
    { symbol: "SPY", company: "SPDR S&P 500", price: 595.03, change: 0.73, percent: 0.12, positive: true },
    { symbol: "TSLA", company: "Tesla", price: 327.73, change: 5.54, percent: 1.72, positive: true },
    { symbol: "UBER", company: "Uber", price: 83.35, change: -0.48, percent: -0.57, positive: false }
  ]

  const chartData = [
    { time: '2024-01-01', value: 580 },
    { time: '2024-01-02', value: 585 },
    { time: '2024-01-03', value: 590 },
    { time: '2024-01-04', value: 588 },
    { time: '2024-01-05', value: 592 },
    { time: '2024-01-08', value: 595 },
    { time: '2024-01-09', value: 593 },
    { time: '2024-01-10', value: 594 },
    { time: '2024-01-11', value: 596 },
    { time: '2024-01-12', value: 594.55 },
  ]

  const tabs = ['Summary', 'Active Stocks', 'Sectors', 'Insider Trading', 'Latest News']

  const sidebarItems = [
    { section: 'MARKET DASHBOARD', items: [
      { icon: BarChart3, name: 'Charts', active: false },
      { icon: TrendingUp, name: 'Stocks', active: true },
      { icon: '»', name: 'Options', active: false },
      { icon: '⚫', name: 'Darkpool', active: false },
      { icon: '#', name: 'Crypto', active: false },
      { icon: '📰', name: 'News', active: false, expandable: true }
    ]},
    { section: 'TICKER DASHBOARDS', items: [
      { icon: BarChart3, name: 'Stocks', active: false },
      { icon: '⚙️', name: 'Options', active: false },
      { icon: '⚫', name: 'Darkpool', active: false }
    ]},
    { section: 'OPTIONS FLOW', items: [
      { icon: '✨', name: 'Live Flow', active: false },
      { icon: '🔄', name: 'Repeat Flow', active: false },
      { icon: '📊', name: 'Flowline', active: false }
    ]},
    { section: 'SWING AI', items: [
      { icon: '🎯', name: 'Prophet', active: false }
    ]},
    { section: 'INTRADAY AI', items: [
      { icon: '🎯', name: 'Bullseye', active: false }
    ]},
    { section: 'SCANNERS', items: [
      { icon: '📊', name: 'Stock', active: false }
    ]}
  ]

  return (
    <div className="relative min-h-screen">
      {/* Original Trading Dashboard */}
      <div className="flex min-h-screen bg-black text-white blur-[2px]">
        {/* Sidebar */}
        <div className="w-64 bg-[#111] p-4">
          <div className="mb-8">
            <Menu className="w-6 h-6 mb-4" />
          </div>
          
          {sidebarItems.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-xs font-semibold text-gray-400 mb-3">{section.section}</h3>
              {section.items.map((item, itemIdx) => (
                <div key={itemIdx} className={`flex items-center py-2 px-3 rounded cursor-pointer mb-1 ${
                  item.active ? 'bg-green-600' : 'hover:bg-[#222]'
                }`}>
                  {typeof item.icon === 'string' ? (
                    <span className="w-4 h-4 mr-3 flex items-center justify-center text-sm">{item.icon}</span>
                  ) : (
                    <item.icon className="w-4 h-4 mr-3" />
                  )}
                  <span className="text-sm">{item.name}</span>
                  {item.expandable && <span className="ml-auto">▼</span>}
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Main Content */}
        <div className="flex-1">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-[#222]">
            <h1 className="text-2xl font-bold">Markets Today</h1>
            <div className="flex items-center space-x-4">
              <Bell className="w-5 h-5 text-gray-400" />
              <Phone className="w-5 h-5 text-gray-400" />
              <Code className="w-5 h-5 text-gray-400" />
              <Globe className="w-5 h-5 text-gray-400" />
              <Eye className="w-5 h-5 text-gray-400" />
              <Mail className="w-5 h-5 text-gray-400" />
              <button className="bg-white text-black px-4 py-2 rounded font-medium">Login</button>
            </div>
          </div>

          {/* Tab Navigation */}
          <div className="flex border-b border-[#222]">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setSelectedTab(tab)}
                className={`px-6 py-3 font-medium ${
                  selectedTab === tab 
                    ? 'text-white border-b-2 border-white' 
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Market Overview Cards */}
          <div className="grid grid-cols-6 gap-4 p-6">
            <div className="bg-[#111] p-4 rounded">
              <div className="text-gray-400 text-sm mb-1">Market</div>
              <div className="text-white font-semibold flex items-center">
                {marketData.market}
                <TrendingDown className="w-4 h-4 ml-2 text-red-500" />
              </div>
            </div>
            <div className="bg-[#111] p-4 rounded">
              <div className="text-gray-400 text-sm mb-1">Leader</div>
              <div className="text-white font-semibold flex items-center">
                {marketData.leader}
                <TrendingUp className="w-4 h-4 ml-2 text-green-500" />
              </div>
            </div>
            <div className="bg-[#111] p-4 rounded">
              <div className="text-gray-400 text-sm mb-1">Hottest Sector</div>
              <div className="text-white font-semibold">{marketData.hottestSector}</div>
              <div className="text-green-500 text-sm">+2.34% ↑</div>
            </div>
            <div className="bg-[#111] p-4 rounded">
              <div className="text-gray-400 text-sm mb-1">Worst Sector</div>
              <div className="text-white font-semibold">{marketData.worstSector}</div>
              <div className="text-red-500 text-sm">-0.68% ↓</div>
            </div>
            <div className="bg-[#111] p-4 rounded">
              <div className="text-gray-400 text-sm mb-1">Top Stock</div>
              <div className="text-white font-semibold">{marketData.topStock.symbol}</div>
              <div className="text-green-500 text-sm">{marketData.topStock.change} ↑</div>
            </div>
            <div className="bg-[#111] p-4 rounded">
              <div className="text-gray-400 text-sm mb-1">Worst Stock</div>
              <div className="text-white font-semibold">{marketData.worstStock.symbol}</div>
              <div className="text-red-500 text-sm">{marketData.worstStock.change} ↓</div>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex p-6 space-x-6">
            {/* Market Summary Table */}
            <div className="w-1/2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold">Market Summary</h2>
                <button className="flex items-center text-gray-400 hover:text-white">
                  <Share className="w-4 h-4 mr-2" />
                  Share
                </button>
              </div>
              <div className="bg-[#111] rounded">
                <div className="grid grid-cols-3 p-4 border-b border-[#222] text-gray-400 text-sm">
                  <div>Symbol</div>
                  <div>Price</div>
                  <div>% Change</div>
                </div>
                {marketSummary.map((stock, idx) => (
                  <div key={idx} className="grid grid-cols-3 p-4 border-b border-[#222] last:border-b-0 hover:bg-[#222]">
                    <div className="flex items-center">
                      <div className="w-8 h-8 rounded-full bg-[#222] flex items-center justify-center mr-3">
                        <span className="text-xs font-bold">{stock.symbol.charAt(0)}</span>
                      </div>
                      <div>
                        <div className="font-semibold">{stock.symbol}</div>
                        <div className="text-sm text-gray-400">{stock.company}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span>${stock.price.toFixed(2)}</span>
                      <span className={`ml-2 text-sm ${stock.positive ? 'text-green-500' : 'text-red-500'}`}>
                        {stock.change > 0 ? '+' : ''}{stock.change.toFixed(2)}
                      </span>
                    </div>
                    <div className={`flex items-center ${stock.positive ? 'text-green-500' : 'text-red-500'}`}>
                      {stock.percent > 0 ? '+' : ''}{stock.percent.toFixed(2)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Chart Area */}
            <div className="w-1/2">
              <div className="bg-[#111] rounded p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold">SPY 594.55</h3>
                    <div className="text-green-500">+0.73 (+0.12%)</div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <input 
                      type="text" 
                      placeholder="Ticker & Press Enter..." 
                      className="bg-[#222] px-3 py-1 rounded text-sm w-48"
                    />
                  </div>
                </div>
                <Chart data={chartData} />
                <div className="flex justify-between mt-4">
                  <div className="text-xs text-gray-500">09:30</div>
                  <div className="text-xs text-gray-500">12:00</div>
                  <div className="text-xs text-gray-500">15:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Blur Overlay with Coming Soon */}
      <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px]">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full max-w-2xl px-4">
          <h2 className="text-6xl font-bold text-white mb-6">Coming Soon</h2>
          <p className="text-2xl text-gray-200 leading-relaxed">
            Gambia's first licensed trading platform<br />under development
          </p>
          <div className="mt-10">
            <div className="inline-block px-8 py-4 border-2 border-white/20 rounded-lg bg-white/10 backdrop-blur-md">
              <div className="flex items-center space-x-3">
                <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-white/90 text-lg">Development in progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 