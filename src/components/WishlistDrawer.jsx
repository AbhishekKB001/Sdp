import React from 'react';
import { X, Heart, Trash2, ArrowRight } from 'lucide-react';

export default function WishlistDrawer({
  isOpen,
  onClose,
  wishlistBikes,
  onRemoveFromWishlist,
  onClearWishlist,
  onSelectBike,
  currency
}) {
  if (!isOpen) return null;

  const formatPrice = (usd, inr) => {
    if (currency === 'INR') {
      return `₹${inr.toLocaleString('en-IN')}`;
    }
    return `$${usd.toLocaleString('en-US')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-slate-950/70 backdrop-blur-sm">
      <div className="w-full max-w-md bg-slate-900 border-l border-slate-800 h-full flex flex-col shadow-2xl animate-slideLeft">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-slate-800 flex items-center justify-between bg-slate-950/80">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400">
              <Heart className="w-5 h-5 fill-rose-500" />
            </div>
            <div>
              <h3 className="text-base font-black text-white">Saved Motorcycles</h3>
              <p className="text-xs text-slate-400">{wishlistBikes.length} models in your garage</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {wishlistBikes.length > 0 && (
              <button
                onClick={onClearWishlist}
                className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-rose-400 text-xs transition-colors"
                title="Clear all"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Drawer List */}
        <div className="flex-1 overflow-y-auto p-4 space-y-3">
          {wishlistBikes.length === 0 ? (
            <div className="text-center py-16 text-slate-400 space-y-3">
              <Heart className="w-12 h-12 mx-auto text-slate-700" />
              <p className="text-sm font-semibold text-slate-300">Your saved garage is empty</p>
              <p className="text-xs text-slate-500 max-w-xs mx-auto">
                Tap the heart icon on any motorcycle to keep track of your favorite rides.
              </p>
            </div>
          ) : (
            wishlistBikes.map((bike) => (
              <div
                key={bike.id}
                className="p-3 rounded-2xl bg-slate-950 border border-slate-800 flex items-center gap-3 group hover:border-orange-500/40 transition-colors"
              >
                <div className="w-20 h-16 rounded-xl overflow-hidden bg-slate-900 shrink-0">
                  <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" />
                </div>

                <div className="flex-1 min-w-0">
                  <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block">{bike.brand}</span>
                  <h4
                    onClick={() => {
                      onSelectBike(bike);
                      onClose();
                    }}
                    className="text-xs sm:text-sm font-bold text-white truncate hover:text-orange-400 cursor-pointer"
                  >
                    {bike.name}
                  </h4>
                  <div className="text-xs font-black text-orange-400 mt-0.5">
                    {formatPrice(bike.priceUSD, bike.priceINR)}
                  </div>
                </div>

                <div className="flex items-center gap-1.5 shrink-0">
                  <button
                    onClick={() => {
                      onSelectBike(bike);
                      onClose();
                    }}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-orange-500 text-slate-300 hover:text-white transition-colors"
                    title="View details"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={() => onRemoveFromWishlist(bike.id)}
                    className="p-2 rounded-lg bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
                    title="Remove"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-slate-800 bg-slate-950/80">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
          >
            Back to Showroom
          </button>
        </div>

      </div>
    </div>
  );
}
