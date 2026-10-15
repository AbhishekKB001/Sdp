import React, { useState, useMemo, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FilterBar from './components/FilterBar';
import BikeCard from './components/BikeCard';
import BikeModal from './components/BikeModal';
import CompareModal from './components/CompareModal';
import WishlistDrawer from './components/WishlistDrawer';
import EMICalculator from './components/EMICalculator';
import AwsDeployModal from './components/AwsDeployModal';
import Footer from './components/Footer';
import { BIKES_DATA, CATEGORIES, BRANDS } from './data/bikes';
import { GitCompare, Flame, ShieldAlert, Sparkles } from 'lucide-react';

export default function App() {
  const [currency, setCurrency] = useState('USD');
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid');

  // Modals & Drawers state
  const [selectedBike, setSelectedBike] = useState(null);
  const [isCompareOpen, setIsCompareOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAwsDeployOpen, setIsAwsDeployOpen] = useState(false);

  // Persistent Wishlist
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('motoverse_wishlist');
      return saved ? JSON.parse(saved) : ['ducati-panigale-v4-s', 'royal-enfield-himalayan-450'];
    } catch {
      return ['ducati-panigale-v4-s', 'royal-enfield-himalayan-450'];
    }
  });

  useEffect(() => {
    localStorage.setItem('motoverse_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  // Persistent Compare list
  const [compareList, setCompareList] = useState(() => {
    try {
      const saved = localStorage.getItem('motoverse_compare');
      return saved ? JSON.parse(saved) : ['ducati-panigale-v4-s', 'bmw-s-1000-rr'];
    } catch {
      return ['ducati-panigale-v4-s', 'bmw-s-1000-rr'];
    }
  });

  useEffect(() => {
    localStorage.setItem('motoverse_compare', JSON.stringify(compareList));
  }, [compareList]);

  // Price Limits
  const maxPriceLimit = useMemo(() => {
    if (currency === 'INR') {
      return Math.max(...BIKES_DATA.map((b) => b.priceINR));
    }
    return Math.max(...BIKES_DATA.map((b) => b.priceUSD));
  }, [currency]);

  const [maxPrice, setMaxPrice] = useState(maxPriceLimit);

  // Synchronize price slider when currency changes
  useEffect(() => {
    setMaxPrice(maxPriceLimit);
  }, [maxPriceLimit]);

  // Filtered and Sorted Bikes
  const filteredBikes = useMemo(() => {
    return BIKES_DATA.filter((bike) => {
      // Category match
      if (activeCategory !== 'All' && bike.category !== activeCategory) {
        return false;
      }

      // Brand match
      if (selectedBrand !== 'All' && bike.brand !== selectedBrand) {
        return false;
      }

      // Price match
      const bikePrice = currency === 'INR' ? bike.priceINR : bike.priceUSD;
      if (bikePrice > maxPrice) {
        return false;
      }

      // Search match
      if (searchTerm.trim() !== '') {
        const query = searchTerm.toLowerCase();
        const inName = bike.name.toLowerCase().includes(query);
        const inBrand = bike.brand.toLowerCase().includes(query);
        const inCategory = bike.category.toLowerCase().includes(query);
        const inTagline = bike.tagline.toLowerCase().includes(query);
        const inEngine = bike.specs.engine.toLowerCase().includes(query);
        const inDesc = bike.description.toLowerCase().includes(query);

        if (!inName && !inBrand && !inCategory && !inTagline && !inEngine && !inDesc) {
          return false;
        }
      }

      return true;
    }).sort((a, b) => {
      const priceA = currency === 'INR' ? a.priceINR : a.priceUSD;
      const priceB = currency === 'INR' ? b.priceINR : b.priceUSD;

      if (sortBy === 'price-asc') return priceA - priceB;
      if (sortBy === 'price-desc') return priceB - priceA;
      if (sortBy === 'rating') return b.rating - a.rating;
      if (sortBy === 'speed') {
        const speedA = parseInt(a.specs.topSpeed, 10) || 0;
        const speedB = parseInt(b.specs.topSpeed, 10) || 0;
        return speedB - speedA;
      }
      return 0; // 'featured' retains original order
    });
  }, [activeCategory, selectedBrand, maxPrice, searchTerm, sortBy, currency]);

  // Handlers
  const handleToggleFavorite = (bikeId) => {
    setWishlist((prev) => 
      prev.includes(bikeId) ? prev.filter((id) => id !== bikeId) : [...prev, bikeId]
    );
  };

  const handleToggleCompare = (bikeId) => {
    setCompareList((prev) => {
      if (prev.includes(bikeId)) {
        return prev.filter((id) => id !== bikeId);
      }
      if (prev.length >= 3) {
        alert('You can compare a maximum of 3 motorcycles simultaneously.');
        return prev;
      }
      return [...prev, bikeId];
    });
  };

  const handleResetFilters = () => {
    setSearchTerm('');
    setActiveCategory('All');
    setSelectedBrand('All');
    setMaxPrice(maxPriceLimit);
    setSortBy('featured');
  };

  const wishlistBikes = useMemo(() => {
    return BIKES_DATA.filter((b) => wishlist.includes(b.id));
  }, [wishlist]);

  const compareBikes = useMemo(() => {
    return BIKES_DATA.filter((b) => compareList.includes(b.id));
  }, [compareList]);

  return (
    <div className="min-h-screen bg-[#0b0f17] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      
      {/* Navigation */}
      <Navbar
        currency={currency}
        setCurrency={setCurrency}
        wishlist={wishlist}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        compareList={compareList}
        onOpenCompare={() => setIsCompareOpen(true)}
        onOpenAwsDeploy={() => setIsAwsDeployOpen(true)}
        onOpenCalculator={() => {
          document.getElementById('loan-calculator')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Hero Showcase */}
      <Hero
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        categories={CATEGORIES}
        onExploreClick={() => {
          document.getElementById('catalog')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Main Content & Catalog */}
      <main className="flex-1">
        
        {/* Filter Controls Bar */}
        <FilterBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
          categories={CATEGORIES}
          selectedBrand={selectedBrand}
          setSelectedBrand={setSelectedBrand}
          brands={BRANDS}
          sortBy={sortBy}
          setSortBy={setSortBy}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          priceLimit={maxPriceLimit}
          currency={currency}
          viewMode={viewMode}
          setViewMode={setViewMode}
          filteredCount={filteredBikes.length}
          totalCount={BIKES_DATA.length}
          onResetFilters={handleResetFilters}
        />

        {/* Motorcycle Grid / List Showcase */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          {filteredBikes.length === 0 ? (
            <div className="p-16 rounded-3xl bg-slate-900/40 border border-slate-800 text-center space-y-4">
              <ShieldAlert className="w-12 h-12 text-orange-400 mx-auto" />
              <h3 className="text-xl font-bold text-white">No Motorcycles Found</h3>
              <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto">
                No bikes match your current filter parameters or price ceiling. Try resetting your search or broadening the price range.
              </p>
              <button
                onClick={handleResetFilters}
                className="px-5 py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs transition-colors shadow-lg shadow-orange-500/20"
              >
                Reset All Filters
              </button>
            </div>
          ) : (
            <div className={
              viewMode === 'grid'
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
                : 'space-y-4'
            }>
              {filteredBikes.map((bike) => (
                <BikeCard
                  key={bike.id}
                  bike={bike}
                  currency={currency}
                  isFavorite={wishlist.includes(bike.id)}
                  onToggleFavorite={handleToggleFavorite}
                  isInCompare={compareList.includes(bike.id)}
                  onToggleCompare={handleToggleCompare}
                  onSelectBike={(b) => setSelectedBike(b)}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </div>

        {/* Floating Compare Floating Pill (if any bikes in compare) */}
        {compareList.length > 0 && !isCompareOpen && (
          <aside aria-label="Motorcycle comparison drawer" className="fixed bottom-6 right-6 z-40 animate-bounce">
            <button
              onClick={() => setIsCompareOpen(true)}
              className="flex items-center gap-3 px-5 py-3.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-black text-sm shadow-2xl shadow-orange-500/40 border border-white/20 hover:scale-105 transition-all"
            >
              <GitCompare className="w-5 h-5" />
              <span>Compare {compareList.length} Models</span>
              <span className="w-6 h-6 rounded-full bg-slate-950/80 text-orange-400 text-xs flex items-center justify-center font-bold">
                {compareList.length}
              </span>
            </button>
          </aside>
        )}

        {/* Loan & Financing Calculator Section */}
        <EMICalculator currency={currency} />

      </main>

      {/* Footer */}
      <Footer
        onOpenAwsDeploy={() => setIsAwsDeployOpen(true)}
        onOpenCalculator={() => {
          document.getElementById('loan-calculator')?.scrollIntoView({ behavior: 'smooth' });
        }}
      />

      {/* Modals & Drawers */}
      {selectedBike && (
        <BikeModal
          bike={selectedBike}
          onClose={() => setSelectedBike(null)}
          currency={currency}
          isFavorite={wishlist.includes(selectedBike.id)}
          onToggleFavorite={handleToggleFavorite}
          isInCompare={compareList.includes(selectedBike.id)}
          onToggleCompare={handleToggleCompare}
        />
      )}

      {isCompareOpen && (
        <CompareModal
          compareBikes={compareBikes}
          onRemoveFromCompare={handleToggleCompare}
          onClearCompare={() => setCompareList([])}
          onClose={() => setIsCompareOpen(false)}
          currency={currency}
          onSelectBike={(b) => {
            setIsCompareOpen(false);
            setSelectedBike(b);
          }}
        />
      )}

      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistBikes={wishlistBikes}
        onRemoveFromWishlist={handleToggleFavorite}
        onClearWishlist={() => setWishlist([])}
        onSelectBike={(b) => setSelectedBike(b)}
        currency={currency}
      />

      {isAwsDeployOpen && (
        <AwsDeployModal onClose={() => setIsAwsDeployOpen(false)} />
      )}

    </div>
  );
}
