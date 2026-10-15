import React from 'react';
import { Heart, GitCompare, Gauge, Zap, Fuel, ArrowRight, Star, ShieldCheck } from 'lucide-react';

export default function BikeCard({
  bike,
  currency,
  isFavorite,
  onToggleFavorite,
  isInCompare,
  onToggleCompare,
  onSelectBike,
  viewMode
}) {
  const formatPrice = (usd, inr) => {
    if (currency === 'INR') {
      return `₹${inr.toLocaleString('en-IN')}`;
    }
    return `$${usd.toLocaleString('en-US')}`;
  };

  if (viewMode === 'list') {
    return (
      <div className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-orange-500/40 p-4 sm:p-5 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col md:flex-row gap-6 items-stretch">
        
        {/* Left Image */}
        <div className="relative w-full md:w-80 h-52 shrink-0 rounded-xl overflow-hidden bg-slate-950 border border-slate-800">
          <img
            src={bike.image}
            alt={bike.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          
          {/* Badge */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5">
            <span className="px-2.5 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-orange-500/90 text-white shadow-sm">
              {bike.category}
            </span>
            {bike.badge && (
              <span className="px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-900/80 text-amber-300 border border-amber-500/30">
                {bike.badge}
              </span>
            )}
          </div>

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(bike.id);
            }}
            aria-label="Save to favorites"
            className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-rose-400 transition-colors border border-slate-700/50"
          >
            <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
          </button>
        </div>

        {/* Right Info */}
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-2 mb-1.5">
              <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">{bike.brand}</span>
              <div className="flex items-center gap-1 text-xs font-semibold text-slate-400">
                <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                <span className="text-white font-bold">{bike.rating}</span>
                <span>({bike.reviewsCount})</span>
              </div>
            </div>

            <h3 
              onClick={() => onSelectBike(bike)}
              className="text-xl sm:text-2xl font-black text-white hover:text-orange-400 cursor-pointer transition-colors"
            >
              {bike.name}
            </h3>

            <p className="text-xs sm:text-sm text-slate-400 mt-1 line-clamp-2 leading-relaxed">
              {bike.tagline}
            </p>

            {/* Quick Specs Pill Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-4">
              <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Power</div>
                <div className="text-xs font-bold text-white truncate">{bike.specs.power.split('@')[0]}</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Top Speed</div>
                <div className="text-xs font-bold text-white truncate">{bike.specs.topSpeed}</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Mileage/Range</div>
                <div className="text-xs font-bold text-white truncate">{bike.specs.mileage}</div>
              </div>
              <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800">
                <div className="text-[10px] text-slate-500 uppercase font-semibold">Weight</div>
                <div className="text-xs font-bold text-white truncate">{bike.specs.weight}</div>
              </div>
            </div>
          </div>

          {/* Bottom Bar: Price & Buttons */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-800/80">
            <div>
              <span className="text-[10px] font-medium text-slate-400 uppercase tracking-wider block">Est. Market Price</span>
              <span className="text-2xl font-black text-orange-400">
                {formatPrice(bike.priceUSD, bike.priceINR)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => onToggleCompare(bike.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold border transition-all flex items-center gap-1.5 ${
                  isInCompare
                    ? 'bg-orange-500 text-white border-orange-400 shadow-md'
                    : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
                }`}
              >
                <GitCompare className="w-3.5 h-3.5" />
                <span>{isInCompare ? 'Comparing' : 'Compare'}</span>
              </button>

              <button
                onClick={() => onSelectBike(bike)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 flex items-center gap-1.5 transition-all"
              >
                <span>View Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    );
  }

  // Grid View Mode
  return (
    <div className="group relative rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-orange-500/40 p-4 transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 flex flex-col justify-between">
      
      {/* Top Image Container */}
      <div className="relative w-full h-52 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 mb-4">
        <img
          src={bike.image}
          alt={bike.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col items-start gap-1">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-orange-500/90 text-white shadow-sm">
            {bike.category}
          </span>
          {bike.badge && (
            <span className="px-2 py-0.5 rounded-md text-[9px] font-bold uppercase tracking-wider bg-slate-900/90 text-amber-300 border border-amber-500/30">
              {bike.badge}
            </span>
          )}
        </div>

        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(bike.id);
          }}
          aria-label="Save to favorites"
          className="absolute top-3 right-3 p-2 rounded-full bg-slate-900/80 hover:bg-slate-900 text-slate-300 hover:text-rose-400 transition-colors border border-slate-700/50"
        >
          <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
        </button>

        {/* Brand Overlay */}
        <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-xs">
          <span className="font-bold text-orange-400 uppercase tracking-widest">{bike.brand}</span>
          <div className="flex items-center gap-1 font-semibold text-slate-300 bg-slate-950/70 px-2 py-0.5 rounded">
            <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
            <span>{bike.rating}</span>
          </div>
        </div>
      </div>

      {/* Main Details */}
      <div>
        <h3 
          onClick={() => onSelectBike(bike)}
          className="text-lg font-black text-white hover:text-orange-400 cursor-pointer transition-colors leading-snug mb-1"
        >
          {bike.name}
        </h3>

        <p className="text-xs text-slate-400 line-clamp-2 mb-4 leading-relaxed">
          {bike.tagline}
        </p>

        {/* Quick Specs Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
            <div className="flex items-center gap-1 text-[10px] text-slate-500 uppercase font-semibold">
              <Zap className="w-3 h-3 text-orange-400" />
              <span>Power</span>
            </div>
            <div className="text-xs font-bold text-slate-200 truncate">{bike.specs.power.split('@')[0]}</div>
          </div>

          <div className="p-2 rounded-lg bg-slate-950/80 border border-slate-800/80">
            <div className="flex items-center gap-1 text-[10px] text-slate-500 uppercase font-semibold">
              <Gauge className="w-3 h-3 text-cyan-400" />
              <span>Top Speed</span>
            </div>
            <div className="text-xs font-bold text-slate-200 truncate">{bike.specs.topSpeed}</div>
          </div>
        </div>
      </div>

      {/* Footer / Price & Actions */}
      <div className="pt-3 border-t border-slate-800/80">
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-semibold text-slate-500 uppercase tracking-wider">Market Price</span>
          <span className="text-xl font-black text-orange-400">
            {formatPrice(bike.priceUSD, bike.priceINR)}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => onToggleCompare(bike.id)}
            className={`py-2 px-3 rounded-xl text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
              isInCompare
                ? 'bg-orange-500 text-white border-orange-400 shadow-md'
                : 'bg-slate-950 text-slate-300 border-slate-800 hover:border-slate-700'
            }`}
          >
            <GitCompare className="w-3.5 h-3.5" />
            <span>{isInCompare ? 'Added' : 'Compare'}</span>
          </button>

          <button
            onClick={() => onSelectBike(bike)}
            className="py-2 px-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-xs shadow-md shadow-orange-500/20 flex items-center justify-center gap-1.5 transition-all"
          >
            <span>Specs</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

    </div>
  );
}
