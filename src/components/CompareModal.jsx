import React from 'react';
import { X, GitCompare, Trash2, CheckCircle2 } from 'lucide-react';

export default function CompareModal({
  compareBikes,
  onRemoveFromCompare,
  onClearCompare,
  onClose,
  currency,
  onSelectBike
}) {
  const formatPrice = (usd, inr) => {
    if (currency === 'INR') {
      return `₹${inr.toLocaleString('en-IN')}`;
    }
    return `$${usd.toLocaleString('en-US')}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      <div className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col text-slate-100 my-auto">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-center justify-between sticky top-0 bg-slate-900/95 backdrop-blur z-20">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-500/10 border border-orange-500/30 text-orange-400">
              <GitCompare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white">Motorcycle Comparison</h2>
              <p className="text-xs text-slate-400">Comparing {compareBikes.length} of 3 models side by side</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {compareBikes.length > 0 && (
              <button
                onClick={onClearCompare}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-rose-300 transition-colors"
              >
                <Trash2 className="w-3.5 h-3.5" />
                <span>Clear All</span>
              </button>
            )}

            <button
              onClick={onClose}
              aria-label="Close modal"
              className="p-2 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Content */}
        {compareBikes.length === 0 ? (
          <div className="p-12 text-center text-slate-400 space-y-3">
            <GitCompare className="w-12 h-12 mx-auto text-slate-600" />
            <h3 className="text-lg font-bold text-white">No Bikes Selected For Comparison</h3>
            <p className="text-xs max-w-sm mx-auto">
              Click the "Compare" button on any motorcycle card in the catalog to add up to 3 machines for a head-to-head spec breakdown.
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto p-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-4 w-1/4 text-xs font-bold text-slate-400 uppercase tracking-wider bg-slate-950/40 rounded-l-xl">
                    Specifications
                  </th>
                  {compareBikes.map((bike) => (
                    <th key={bike.id} className="p-4 w-1/4 align-top bg-slate-950/40 rounded-xl relative">
                      <button
                        onClick={() => onRemoveFromCompare(bike.id)}
                        className="absolute top-2 right-2 p-1.5 rounded-full bg-slate-900 hover:bg-rose-950 text-slate-400 hover:text-rose-400 transition-colors"
                        title="Remove from comparison"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>

                      <div className="h-28 rounded-lg overflow-hidden bg-slate-950 border border-slate-800 mb-3">
                        <img src={bike.image} alt={bike.name} className="w-full h-full object-cover" />
                      </div>

                      <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest">{bike.brand}</span>
                      <h4 
                        onClick={() => onSelectBike(bike)}
                        className="text-base font-black text-white hover:text-orange-400 cursor-pointer transition-colors leading-tight mb-1"
                      >
                        {bike.name}
                      </h4>
                      <div className="text-lg font-black text-orange-400">
                        {formatPrice(bike.priceUSD, bike.priceINR)}
                      </div>
                    </th>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, idx) => (
                    <th key={`empty-${idx}`} className="p-4 w-1/4 align-middle text-center bg-slate-950/20 border border-dashed border-slate-800 rounded-xl text-slate-500 text-xs">
                      + Add another bike from catalog
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody className="divide-y divide-slate-800 text-xs sm:text-sm">
                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Category</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-white font-bold">{b.category}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Engine / Powertrain</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-slate-200">{b.specs.engine}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Max Power</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-emerald-400 font-bold">{b.specs.power}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Max Torque</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-amber-400 font-bold">{b.specs.torque}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Top Speed</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-cyan-400 font-bold">{b.specs.topSpeed}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">0-100 km/h (0-60 mph)</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-slate-200 font-medium">{b.specs.acceleration}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Mileage / Range</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-slate-200 font-medium">{b.specs.mileage}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Kerb Weight</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-slate-200 font-medium">{b.specs.weight}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Seat Height</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-slate-200 font-medium">{b.specs.seatHeight}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Fuel Tank / Battery</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-slate-200 font-medium">{b.specs.fuelCapacity}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Transmission</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-slate-300 text-xs">{b.specs.gearbox}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>

                <tr>
                  <td className="p-3 text-slate-400 font-semibold">Brakes & ABS</td>
                  {compareBikes.map((b) => (
                    <td key={b.id} className="p-3 text-slate-300 text-xs">{b.specs.brakes}</td>
                  ))}
                  {Array.from({ length: 3 - compareBikes.length }).map((_, i) => <td key={i} className="p-3 text-slate-600">-</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        )}

      </div>

    </div>
  );
}
