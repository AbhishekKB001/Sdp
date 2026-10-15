import React, { useState } from 'react';
import { 
  X, Star, Zap, Gauge, Fuel, CheckCircle2, AlertCircle, 
  DollarSign, Calendar, MapPin, Send, ShieldCheck, Heart, GitCompare 
} from 'lucide-react';

export default function BikeModal({
  bike,
  onClose,
  currency,
  isFavorite,
  onToggleFavorite,
  isInCompare,
  onToggleCompare
}) {
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'specs' | 'emi' | 'ride'
  const [selectedColor, setSelectedColor] = useState(bike.colors[0]?.name || '');
  
  // Test ride form state
  const [rideForm, setRideForm] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    city: 'Los Angeles, CA'
  });
  const [rideSubmitted, setRideSubmitted] = useState(false);

  // EMI state for this bike
  const bikePrice = currency === 'INR' ? bike.priceINR : bike.priceUSD;
  const [downPaymentPercent, setDownPaymentPercent] = useState(20);
  const [tenureYears, setTenureYears] = useState(3);
  const [interestRate, setInterestRate] = useState(8.5);

  const downPayment = Math.round((bikePrice * downPaymentPercent) / 100);
  const loanAmount = bikePrice - downPayment;
  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const monthlyEMI = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  );
  const totalPayment = (monthlyEMI * totalMonths) + downPayment;
  const totalInterest = totalPayment - bikePrice;

  const formatPrice = (val) => {
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  const handleTestRideSubmit = (e) => {
    e.preventDefault();
    if (!rideForm.name || !rideForm.phone) {
      alert('Please fill out your name and contact phone number.');
      return;
    }
    setRideSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md overflow-y-auto">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col text-slate-100 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/80 hover:bg-slate-800 text-slate-400 hover:text-white transition-colors border border-slate-700/60 shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Hero Area */}
        <div className="relative h-72 sm:h-80 w-full overflow-hidden bg-slate-950 shrink-0">
          <img
            src={bike.image}
            alt={bike.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>

          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2.5 py-1 rounded-md text-xs font-black uppercase tracking-wider bg-orange-500 text-white shadow">
                  {bike.category}
                </span>
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest bg-slate-950/70 px-2.5 py-1 rounded-md border border-slate-800">
                  {bike.brand}
                </span>
                <div className="flex items-center gap-1 text-xs font-bold bg-slate-950/70 text-amber-300 px-2.5 py-1 rounded-md border border-slate-800">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>{bike.rating}</span>
                </div>
              </div>

              <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                {bike.name}
              </h2>
            </div>

            <div className="text-left sm:text-right shrink-0">
              <span className="text-xs text-slate-400 font-medium uppercase tracking-wider block">Est. Market Price</span>
              <span className="text-3xl font-black text-orange-400">
                {formatPrice(bikePrice)}
              </span>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center border-b border-slate-800 bg-slate-950/60 px-6 gap-6 overflow-x-auto">
          {[
            { id: 'overview', label: 'Overview & Highlights' },
            { id: 'specs', label: 'Full Specifications' },
            { id: 'emi', label: 'EMI & Financing' },
            { id: 'ride', label: 'Book Test Ride' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3.5 text-xs sm:text-sm font-bold whitespace-nowrap border-b-2 transition-all ${
                activeTab === tab.id
                  ? 'border-orange-500 text-orange-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content Body */}
        <div className="p-6 sm:p-8 space-y-6">

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 animate-fadeIn">
              
              {/* Description Paragraphs */}
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-2">Model Heritage & Riding Dynamics</h4>
                <div className="text-slate-300 text-sm sm:text-base leading-relaxed space-y-3">
                  {bike.description.split('\n\n').map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>
              </div>

              {/* Color Variant Chooser */}
              <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-3">
                  Available Colorways: <span className="text-white font-semibold">{selectedColor}</span>
                </span>
                <div className="flex items-center gap-3">
                  {bike.colors.map((c) => (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c.name)}
                      className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border text-xs font-semibold transition-all ${
                        selectedColor === c.name
                          ? 'border-orange-500 bg-slate-900 text-white ring-2 ring-orange-500/30'
                          : 'border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-white/20" style={{ backgroundColor: c.hex }}></span>
                      <span>{c.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Features Bullet Points */}
              <div>
                <h4 className="text-sm font-bold text-slate-400 uppercase tracking-wider mb-3">Key Features & Technologies</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {bike.features.map((feat, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 text-xs sm:text-sm text-slate-200">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pros & Cons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-emerald-950/20 border border-emerald-800/40">
                  <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Why You'll Love It (Pros)</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {bike.pros.map((p, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-emerald-400 font-bold">+</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40">
                  <div className="flex items-center gap-2 text-amber-400 font-bold text-xs uppercase tracking-wider mb-3">
                    <AlertCircle className="w-4 h-4" />
                    <span>Points to Consider (Cons)</span>
                  </div>
                  <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                    {bike.cons.map((c, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-amber-400 font-bold">-</span>
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          )}

          {/* TAB 2: FULL SPECS */}
          {activeTab === 'specs' && (
            <div className="space-y-6">
              
              <div>
                <h4 className="text-xs font-bold text-orange-400 uppercase tracking-widest mb-3">Engine & Powertrain</h4>
                <div className="divide-y divide-slate-800 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm overflow-hidden">
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Engine Configuration</span><span className="col-span-2 text-white font-semibold">{bike.specs.engine}</span></div>
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Max Power Output</span><span className="col-span-2 text-white font-semibold">{bike.specs.power}</span></div>
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Max Torque</span><span className="col-span-2 text-white font-semibold">{bike.specs.torque}</span></div>
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Transmission / Gearbox</span><span className="col-span-2 text-white font-semibold">{bike.specs.gearbox}</span></div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-widest mb-3">Performance & Dynamics</h4>
                <div className="divide-y divide-slate-800 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm overflow-hidden">
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Top Speed</span><span className="col-span-2 text-white font-semibold">{bike.specs.topSpeed}</span></div>
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">0 - 100 km/h (0-60 mph)</span><span className="col-span-2 text-white font-semibold">{bike.specs.acceleration}</span></div>
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Fuel Economy / Range</span><span className="col-span-2 text-white font-semibold">{bike.specs.mileage}</span></div>
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Fuel Tank / Battery</span><span className="col-span-2 text-white font-semibold">{bike.specs.fuelCapacity}</span></div>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest mb-3">Chassis, Dimensions & Brakes</h4>
                <div className="divide-y divide-slate-800 rounded-xl bg-slate-950 border border-slate-800 text-xs sm:text-sm overflow-hidden">
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Kerb / Wet Weight</span><span className="col-span-2 text-white font-semibold">{bike.specs.weight}</span></div>
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Seat Height</span><span className="col-span-2 text-white font-semibold">{bike.specs.seatHeight}</span></div>
                  <div className="grid grid-cols-3 p-3"><span className="text-slate-400 font-medium">Braking System</span><span className="col-span-2 text-white font-semibold">{bike.specs.brakes}</span></div>
                </div>
              </div>

            </div>
          )}

          {/* TAB 3: EMI CALCULATOR */}
          {activeTab === 'emi' && (
            <div className="space-y-6">
              
              <div className="p-5 rounded-2xl bg-slate-950 border border-slate-800">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 uppercase block mb-1">Estimated Monthly EMI</span>
                    <span className="text-2xl font-black text-emerald-400">{formatPrice(monthlyEMI)} / mo</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 uppercase block mb-1">Down Payment ({downPaymentPercent}%)</span>
                    <span className="text-xl font-bold text-white">{formatPrice(downPayment)}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 uppercase block mb-1">Loan Amount</span>
                    <span className="text-xl font-bold text-orange-400">{formatPrice(loanAmount)}</span>
                  </div>
                </div>
              </div>

              {/* Sliders */}
              <div className="space-y-4 bg-slate-950/60 p-5 rounded-2xl border border-slate-800">
                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
                    <span>Down Payment Ratio:</span>
                    <span className="text-orange-400">{downPaymentPercent}% ({formatPrice(downPayment)})</span>
                  </div>
                  <input
                    type="range"
                    min="10"
                    max="60"
                    step="5"
                    value={downPaymentPercent}
                    onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                    className="w-full accent-orange-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
                    <span>Loan Tenure:</span>
                    <span className="text-cyan-400">{tenureYears} Years ({tenureYears * 12} Months)</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="1"
                    value={tenureYears}
                    onChange={(e) => setTenureYears(Number(e.target.value))}
                    className="w-full accent-cyan-500 cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-bold text-slate-300 mb-1">
                    <span>Annual Interest Rate:</span>
                    <span className="text-emerald-400">{interestRate}%</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="16"
                    step="0.5"
                    value={interestRate}
                    onChange={(e) => setInterestRate(Number(e.target.value))}
                    className="w-full accent-emerald-500 cursor-pointer"
                  />
                </div>
              </div>

              {/* Cost Summary Breakdown */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs flex items-center justify-between text-slate-400">
                <span>Total Interest Payable: <strong className="text-white">{formatPrice(Math.round(totalInterest))}</strong></span>
                <span>Total Cost of Motorcycle: <strong className="text-emerald-400">{formatPrice(Math.round(totalPayment))}</strong></span>
              </div>

            </div>
          )}

          {/* TAB 4: BOOK TEST RIDE */}
          {activeTab === 'ride' && (
            <div>
              {rideSubmitted ? (
                <div className="p-8 text-center bg-emerald-950/20 border border-emerald-800/40 rounded-2xl space-y-3">
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                  <h3 className="text-xl font-bold text-white">Test Ride Request Confirmed!</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto">
                    Thank you, <strong className="text-white">{rideForm.name}</strong>! Your test ride booking for the <strong className="text-orange-400">{bike.name}</strong> has been logged. An authorized dealership representative will contact you at <strong className="text-white">{rideForm.phone}</strong> shortly.
                  </p>
                  <button
                    onClick={() => setRideSubmitted(false)}
                    className="mt-4 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-white transition-all"
                  >
                    Book Another Ride
                  </button>
                </div>
              ) : (
                <form onSubmit={handleTestRideSubmit} className="space-y-4">
                  <p className="text-xs text-slate-400">
                    Experience the thrilling performance of the {bike.name} firsthand. Reserve a priority test ride at your local authorized dealership.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Full Name</label>
                      <input
                        type="text"
                        required
                        value={rideForm.name}
                        onChange={(e) => setRideForm({ ...rideForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Mobile Phone</label>
                      <input
                        type="tel"
                        required
                        value={rideForm.phone}
                        onChange={(e) => setRideForm({ ...rideForm, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Email Address</label>
                      <input
                        type="email"
                        value={rideForm.email}
                        onChange={(e) => setRideForm({ ...rideForm, email: e.target.value })}
                        placeholder="john@example.com"
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-orange-500"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-slate-400 block mb-1">Preferred Date</label>
                      <input
                        type="date"
                        value={rideForm.date}
                        onChange={(e) => setRideForm({ ...rideForm, date: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-orange-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-400 block mb-1">Preferred Dealership Location</label>
                    <select
                      value={rideForm.city}
                      onChange={(e) => setRideForm({ ...rideForm, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white text-xs outline-none focus:border-orange-500"
                    >
                      <option value="Los Angeles, CA">Los Angeles Showroom & Track Center</option>
                      <option value="New York, NY">New York Manhattan Motor Hub</option>
                      <option value="Chicago, IL">Chicago Lakeshore Dealership</option>
                      <option value="Austin, TX">Austin Motorsport Experience</option>
                      <option value="London, UK">London Mayfair Flagship</option>
                      <option value="Bengaluru, IN">Bengaluru Indiranagar Hub</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 font-bold text-white text-xs sm:text-sm shadow-lg shadow-orange-500/20 flex items-center justify-center gap-2 transition-all"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Test Ride Reservation</span>
                  </button>
                </form>
              )}
            </div>
          )}

        </div>

        {/* Modal Bottom Actions */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggleFavorite(bike.id)}
              className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs font-bold text-slate-300 hover:text-rose-400 transition-colors"
            >
              <Heart className={`w-4 h-4 ${isFavorite ? 'fill-rose-500 text-rose-500' : ''}`} />
              <span>{isFavorite ? 'Saved' : 'Save'}</span>
            </button>

            <button
              onClick={() => onToggleCompare(bike.id)}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-bold transition-all ${
                isInCompare
                  ? 'bg-orange-500 text-white border-orange-400 shadow-md'
                  : 'bg-slate-900 text-slate-300 border-slate-800 hover:border-slate-700'
              }`}
            >
              <GitCompare className="w-4 h-4" />
              <span>{isInCompare ? 'In Comparison' : 'Add to Compare'}</span>
            </button>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs transition-colors"
          >
            Close
          </button>
        </div>

      </div>

    </div>
  );
}
