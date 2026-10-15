import React from 'react';
import { Compass, GitCompare, Heart, DollarSign, Cloud, ShieldCheck } from 'lucide-react';

export default function Navbar({
  currency,
  setCurrency,
  wishlist,
  onOpenWishlist,
  compareList,
  onOpenCompare,
  onOpenAwsDeploy,
  onOpenCalculator
}) {
  return (
    <header className="sticky top-0 z-40 w-full glass-panel border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand Logo */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-11 h-11 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/30 ring-1 ring-white/20">
            <span className="text-2xl font-black italic tracking-tighter text-white">MV</span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="text-xl font-black tracking-wider text-white uppercase">MOTO<span className="text-orange-500">VERSE</span></span>
              <span className="px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-orange-500/10 text-orange-400 border border-orange-500/30 rounded">2026</span>
            </div>
            <p className="text-xs text-slate-400 font-medium">Market Motorcycle Catalog & Showroom</p>
          </div>
        </div>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-slate-300">
          <a href="#catalog" className="hover:text-orange-400 transition-colors flex items-center gap-1.5">
            <Compass className="w-4 h-4 text-orange-500" />
            Explore Bikes
          </a>
          <button 
            onClick={onOpenCalculator}
            className="hover:text-orange-400 transition-colors flex items-center gap-1.5"
          >
            <DollarSign className="w-4 h-4 text-emerald-400" />
            EMI Calculator
          </button>
          <button 
            onClick={onOpenAwsDeploy}
            className="hover:text-orange-400 transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 border border-amber-500/30 text-amber-300 hover:bg-slate-800 hover:border-amber-400"
          >
            <Cloud className="w-4 h-4 text-amber-400" />
            AWS Deploy Guide
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          
          {/* Currency Toggle */}
          <div className="flex items-center bg-slate-900/90 rounded-lg p-1 border border-slate-700/60 text-xs font-bold">
            <button
              onClick={() => setCurrency('USD')}
              className={`px-2.5 py-1 rounded transition-all ${
                currency === 'USD' 
                  ? 'bg-orange-500 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              $ USD
            </button>
            <button
              onClick={() => setCurrency('INR')}
              className={`px-2.5 py-1 rounded transition-all ${
                currency === 'INR' 
                  ? 'bg-orange-500 text-white shadow-sm' 
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              ₹ INR
            </button>
          </div>

          {/* Wishlist Button */}
          <button
            onClick={onOpenWishlist}
            aria-label="Wishlist"
            className="relative p-2.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 transition-colors"
          >
            <Heart className={`w-5 h-5 ${wishlist.length > 0 ? 'fill-rose-500 text-rose-500' : ''}`} />
            {wishlist.length > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-black w-5 h-5 rounded-full flex items-center justify-center ring-2 ring-slate-950">
                {wishlist.length}
              </span>
            )}
          </button>

          {/* Compare Button */}
          <button
            onClick={onOpenCompare}
            className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold border transition-all ${
              compareList.length > 0
                ? 'bg-orange-500 text-white border-orange-400 shadow-lg shadow-orange-500/20'
                : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <GitCompare className="w-4 h-4" />
            <span className="hidden sm:inline">Compare</span>
            {compareList.length > 0 && (
              <span className="bg-slate-950 text-white text-[10px] px-1.5 py-0.5 rounded-full font-black">
                {compareList.length}/3
              </span>
            )}
          </button>

        </div>
      </div>
    </header>
  );
}
