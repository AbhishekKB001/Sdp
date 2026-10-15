import React from 'react';
import { Filter, SlidersHorizontal, ArrowUpDown, LayoutGrid, List, RotateCcw } from 'lucide-react';

export default function FilterBar({
  searchTerm,
  setSearchTerm,
  activeCategory,
  setActiveCategory,
  categories,
  selectedBrand,
  setSelectedBrand,
  brands,
  sortBy,
  setSortBy,
  maxPrice,
  setMaxPrice,
  priceLimit,
  currency,
  viewMode,
  setViewMode,
  filteredCount,
  totalCount,
  onResetFilters
}) {
  const formatCurrency = (val) => {
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  const hasActiveFilters = 
    searchTerm !== '' || 
    activeCategory !== 'All' || 
    selectedBrand !== 'All' || 
    maxPrice < priceLimit;

  return (
    <div id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6">
      
      {/* Category Pills Slider */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none border-b border-slate-800">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-all ${
              activeCategory === category
                ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg shadow-orange-500/20'
                : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800 hover:border-slate-700'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Main Filter Controls Row */}
      <div className="mt-6 p-4 rounded-2xl bg-slate-900/70 border border-slate-800/80 flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
        
        {/* Left: Brand Filter & Sort Dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          
          {/* Brand Selector */}
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300">
            <span className="text-slate-500 uppercase tracking-wider">Brand:</span>
            <select
              value={selectedBrand}
              onChange={(e) => setSelectedBrand(e.target.value)}
              className="bg-transparent text-white font-bold outline-none cursor-pointer"
            >
              {brands.map((b) => (
                <option key={b} value={b} className="bg-slate-900 text-white">
                  {b}
                </option>
              ))}
            </select>
          </div>

          {/* Sort Selector */}
          <div className="flex items-center gap-2 bg-slate-950 px-3 py-2 rounded-xl border border-slate-800 text-xs font-semibold text-slate-300">
            <ArrowUpDown className="w-3.5 h-3.5 text-orange-400" />
            <span className="text-slate-500 uppercase tracking-wider">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent text-white font-bold outline-none cursor-pointer"
            >
              <option value="featured" className="bg-slate-900 text-white">Featured</option>
              <option value="price-asc" className="bg-slate-900 text-white">Price: Low to High</option>
              <option value="price-desc" className="bg-slate-900 text-white">Price: High to Low</option>
              <option value="rating" className="bg-slate-900 text-white">Highest Rated</option>
              <option value="speed" className="bg-slate-900 text-white">Top Speed</option>
            </select>
          </div>

          {/* Reset Filters */}
          {hasActiveFilters && (
            <button
              onClick={onResetFilters}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-rose-500/10 text-rose-400 border border-rose-500/20 hover:bg-rose-500/20 text-xs font-bold transition-all"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              Reset
            </button>
          )}

        </div>

        {/* Center / Right: Max Price Range & View Toggles */}
        <div className="flex flex-wrap items-center justify-between lg:justify-end gap-5">
          
          {/* Price Slider */}
          <div className="flex items-center gap-3 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800">
            <div className="text-xs">
              <span className="text-slate-400">Max: </span>
              <span className="font-bold text-orange-400">{formatCurrency(maxPrice)}</span>
            </div>
            <input
              type="range"
              min="1000"
              max={priceLimit}
              step={currency === 'INR' ? 50000 : 1000}
              value={maxPrice}
              onChange={(e) => setMaxPrice(Number(e.target.value))}
              className="w-24 sm:w-32 accent-orange-500 cursor-pointer"
            />
          </div>

          {/* Results Count */}
          <div className="text-xs text-slate-400 font-medium">
            Showing <span className="font-bold text-white">{filteredCount}</span> of {totalCount} models
          </div>

          {/* Grid / List View Toggle */}
          <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
            <button
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'grid'
                  ? 'bg-orange-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              aria-label="List View"
              className={`p-1.5 rounded-lg transition-all ${
                viewMode === 'list'
                  ? 'bg-orange-500 text-white shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <List className="w-4 h-4" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
