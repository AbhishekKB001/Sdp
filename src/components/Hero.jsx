import React from 'react';
import { Search, Flame, Zap, Award, Gauge, ArrowRight } from 'lucide-react';

export default function Hero({ searchTerm, setSearchTerm, activeCategory, setActiveCategory, categories, onExploreClick }) {
  return (
    <div className="relative overflow-hidden bg-slate-950 pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-slate-800">
      
      {/* Background Glows & Pattern */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-gradient-to-b from-orange-500/15 via-amber-500/5 to-transparent pointer-events-none blur-3xl"></div>
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          
          {/* Top Pill */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-bold tracking-wide uppercase mb-6 animate-pulse">
            <Flame className="w-4 h-4 text-orange-500" />
            2026 Comprehensive Motorcycle Market Guide
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.1] mb-6">
            DISCOVER YOUR <br />
            <span className="text-gradient-orange">DREAM MACHINE</span>
          </h1>

          <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Explore the latest sportbikes, rugged adventure tourers, heritage cruisers, and high-performance electric motorcycles with full technical specifications, honest pros & cons, and verified pricing.
          </p>

          {/* Live Search Box */}
          <div className="max-w-2xl mx-auto relative mb-8">
            <div className="relative flex items-center">
              <Search className="w-6 h-6 text-slate-400 absolute left-4 pointer-events-none" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by bike model (e.g. Panigale, Ninja, Himalayan, Duke, Fat Boy)..."
                className="w-full pl-12 pr-28 py-4 bg-slate-900/90 text-white placeholder-slate-400 rounded-2xl border border-slate-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/30 outline-none text-base shadow-2xl transition-all"
              />
              <button
                onClick={onExploreClick}
                className="absolute right-2 px-4 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-sm transition-all shadow-md flex items-center gap-1.5"
              >
                <span>Find</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Category Chips Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Quick Pick:</span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  onExploreClick();
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-orange-500 text-white shadow-md shadow-orange-500/30'
                    : 'bg-slate-900/80 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Showcase Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/80">
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-black text-white mb-1">16+</div>
              <div className="text-xs font-medium text-slate-400">Featured Models</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-black text-orange-400 mb-1">10+</div>
              <div className="text-xs font-medium text-slate-400">Global Brands</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-black text-cyan-400 mb-1">300+</div>
              <div className="text-xs font-medium text-slate-400">km/h Top Speed</div>
            </div>
            <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/60">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1">100%</div>
              <div className="text-xs font-medium text-slate-400">AWS Ready Deploy</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
