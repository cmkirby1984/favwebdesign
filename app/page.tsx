"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [activeTab, setActiveTab] = useState("startup");

  const products = [
    { name: "Session Replay", icon: "🎬", color: "bg-purple-100" },
    { name: "Web Analytics", icon: "📊", color: "bg-blue-100" },
    { name: "Product Analytics", icon: "📈", color: "bg-green-100" },
    { name: "Error Tracking", icon: "🐛", color: "bg-red-100" },
    { name: "Feature Flags", icon: "🚩", color: "bg-yellow-100" },
    { name: "A/B Testing", icon: "🧪", color: "bg-pink-100" },
  ];

  return (
    <main className="min-h-screen bg-[#E8DCC8] relative p-4 lg:p-8">
      {/* Textured background */}
      <div className="absolute inset-0 opacity-5"
           style={{backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23000000\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}
      />

      <div className="relative max-w-7xl mx-auto flex gap-6 items-start">
        {/* Sidebar Dock */}
        <motion.aside
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden lg:flex flex-col gap-3 bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-3 sticky top-8"
        >
          {[
            { icon: "🏠", label: "home" },
            { icon: "⚙️", label: "product" },
            { icon: "💰", label: "pricing" },
            { icon: "👥", label: "customers" },
            { icon: "🎥", label: "demo" },
            { icon: "📚", label: "docs" },
            { icon: "💬", label: "talk" },
            { icon: "🚀", label: "app" },
          ].map((item, i) => (
            <motion.button
              key={i}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 flex items-center justify-center bg-white rounded-xl shadow-sm hover:shadow-md transition-all group relative"
              title={item.label}
            >
              <span className="text-xl">{item.icon}</span>
              <span className="absolute left-full ml-2 bg-darkblue text-white text-xs py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                {item.label}
              </span>
            </motion.button>
          ))}
        </motion.aside>

        {/* Main Content Area */}
        <div className="flex-1 flex gap-6 items-start">
          {/* Desktop Window */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex-1 bg-white rounded-xl shadow-2xl overflow-hidden max-w-2xl"
          >
            {/* Window Chrome */}
            <div className="bg-gradient-to-b from-gray-100 to-gray-200 px-4 py-2.5 flex items-center gap-3 border-b border-gray-300">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-lg">📄</span>
                <span className="text-sm font-medium text-gray-700">home.mdx</span>
              </div>
            </div>

            {/* Toolbar */}
            <div className="bg-gray-50 px-4 py-2 flex items-center justify-between border-b border-gray-200 flex-wrap gap-2">
              <div className="flex items-center gap-1 text-gray-600">
                <button className="p-1 hover:bg-gray-200 rounded text-sm" title="Undo">↶</button>
                <button className="p-1 hover:bg-gray-200 rounded text-sm" title="Redo">↷</button>
                <div className="w-px h-4 bg-gray-300 mx-1"></div>
                <button className="p-1 hover:bg-gray-200 rounded font-bold text-xs">B</button>
                <button className="p-1 hover:bg-gray-200 rounded italic text-xs">I</button>
                <button className="p-1 hover:bg-gray-200 rounded underline text-xs">U</button>
              </div>
              <button className="bg-posthog hover:bg-[#E89D01] text-darkblue font-bold px-3 py-1 rounded text-xs transition-all hidden sm:block">
                Get started - free
              </button>
            </div>

            {/* Window Content */}
            <div className="p-6 space-y-6 max-h-[calc(100vh-16rem)] overflow-y-auto">
              {/* Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-400 via-pink-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl">
                    🦔
                  </div>
                  <h1 className="text-2xl font-bold text-darkblue">PostHog</h1>
                </div>
                <h2 className="text-xl font-bold text-darkblue leading-snug">
                  We make dev tools that help product engineers build successful products
                </h2>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-2">
                <button className="bg-posthog hover:bg-[#E89D01] text-darkblue font-bold py-2 px-4 rounded-lg transition-all text-sm">
                  Get started - free
                </button>
                <button className="border-2 border-darkblue text-darkblue font-bold py-2 px-4 rounded-lg hover:bg-darkblue hover:text-white transition-all text-sm">
                  Install with AI
                </button>
              </div>

              <p className="text-xs text-gray-600">
                Questions? <a href="#" className="text-darkblue underline">Watch a demo</a> or <a href="#" className="text-darkblue underline">talk to a human</a>
              </p>

              {/* Tabbed Interface */}
              <div className="space-y-3">
                <div className="flex gap-1 border-b border-gray-200 text-sm">
                  {[
                    { id: "startup", label: "Startup" },
                    { id: "growth", label: "Growth" },
                    { id: "scale", label: "Scale" },
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`px-3 py-1.5 font-medium transition-colors relative ${
                        activeTab === tab.id ? "text-darkblue" : "text-gray-500"
                      }`}
                    >
                      {tab.label}
                      {activeTab === tab.id && (
                        <motion.div
                          layoutId="tab"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-posthog"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-2 gap-2">
                  {products.map((product, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.03 }}
                      className={`${product.color} p-3 rounded-lg cursor-pointer`}
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{product.icon}</span>
                        <span className="font-medium text-xs text-darkblue">{product.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <a href="#" className="text-xs text-darkblue hover:text-posthog underline">
                  Go to app library (34) →
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right side with illustration */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="hidden xl:block relative w-80"
          >
            {/* Featured Card - Overlaying */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="absolute -left-16 top-8 bg-gradient-to-br from-yellow-400 to-orange-500 p-4 rounded-xl shadow-2xl max-w-[200px] z-10"
            >
              <h3 className="text-white font-bold text-sm mb-2">Session Replay</h3>
              <div className="bg-white/90 rounded p-2 mb-3">
                <div className="bg-gray-100 rounded h-20 flex items-center justify-center">
                  <span className="text-3xl">🎬</span>
                </div>
              </div>
              <button className="bg-white text-darkblue font-bold py-1.5 px-3 rounded text-xs hover:bg-gray-100 transition-colors w-full">
                Explore →
              </button>
            </motion.div>

            {/* Pixel Art Village */}
            <div className="bg-gradient-to-br from-sky-300 to-sky-400 rounded-2xl p-6 shadow-xl mt-24">
              <svg viewBox="0 0 300 280" className="w-full h-auto">
                <defs>
                  <pattern id="grass" width="10" height="10" patternUnits="userSpaceOnUse">
                    <rect width="10" height="10" fill="#4ade80"/>
                    <circle cx="3" cy="3" r="0.5" fill="#22c55e"/>
                  </pattern>
                </defs>

                {/* Hexagonal tiles */}
                <g transform="translate(40, 80)">
                  <polygon points="40,0 60,12 60,36 40,48 20,36 20,12" fill="url(#grass)" stroke="#22c55e" strokeWidth="1.5"/>
                  <polygon points="80,24 100,36 100,60 80,72 60,60 60,36" fill="url(#grass)" stroke="#22c55e" strokeWidth="1.5"/>
                  <polygon points="120,0 140,12 140,36 120,48 100,36 100,12" fill="url(#grass)" stroke="#22c55e" strokeWidth="1.5"/>
                  <polygon points="160,24 180,36 180,60 160,72 140,60 140,36" fill="#fbbf24" stroke="#f59e0b" strokeWidth="1.5"/>
                  <polygon points="80,72 100,84 100,108 80,120 60,108 60,84" fill="#38bdf8" stroke="#0ea5e9" strokeWidth="1.5"/>
                  <polygon points="120,48 140,60 140,84 120,96 100,84 100,60" fill="#92400e" stroke="#78350f" strokeWidth="1.5"/>
                </g>

                {/* Castle */}
                <g transform="translate(130, 110)">
                  <rect x="0" y="0" width="32" height="40" fill="#6b7280" stroke="#374151" strokeWidth="1.5"/>
                  <polygon points="16,0 36,-12 36,-4 16,8 -4,-4 -4,-12" fill="#ef4444" stroke="#b91c1c" strokeWidth="1.5"/>
                  <rect x="8" y="12" width="6" height="8" fill="#fcd34d"/>
                  <rect x="18" y="12" width="6" height="8" fill="#fcd34d"/>
                  <rect x="12" y="24" width="6" height="10" fill="#78350f"/>
                </g>

                {/* House */}
                <g transform="translate(80, 150)">
                  <rect x="0" y="0" width="24" height="20" fill="#f59e0b" stroke="#d97706" strokeWidth="1.5"/>
                  <polygon points="12,0 28,-8 28,0 12,8 -4,0 -4,-8" fill="#dc2626" stroke="#991b1b" strokeWidth="1.5"/>
                  <rect x="8" y="8" width="5" height="6" fill="#78350f"/>
                </g>

                {/* Tree */}
                <g transform="translate(190, 120)">
                  <rect x="0" y="0" width="6" height="16" fill="#92400e"/>
                  <circle cx="3" cy="-4" r="10" fill="#22c55e"/>
                </g>

                {/* Characters */}
                <g transform="translate(105, 135)">
                  <rect x="0" y="0" width="5" height="2" fill="#fbbf24"/>
                  <rect x="0" y="2" width="5" height="5" fill="#3b82f6"/>
                  <rect x="1" y="7" width="1.5" height="2" fill="#92400e"/>
                  <rect x="2.5" y="7" width="1.5" height="2" fill="#92400e"/>
                </g>

                {/* Clouds */}
                <ellipse cx="60" cy="25" rx="20" ry="10" fill="white" opacity="0.7"/>
                <ellipse cx="220" cy="40" rx="25" ry="12" fill="white" opacity="0.7"/>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
