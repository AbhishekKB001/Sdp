import React, { useState } from 'react';
import { DollarSign, Percent, Calendar, PieChart, ShieldCheck } from 'lucide-react';
import { BIKES_DATA } from '../data/bikes';

export default function EMICalculator({ currency }) {
  const [selectedBikeId, setSelectedBikeId] = useState('');
  const [loanAmount, setLoanAmount] = useState(currency === 'INR' ? 500000 : 15000);
  const [downPayment, setDownPayment] = useState(currency === 'INR' ? 100000 : 3000);
  const [interestRate, setInterestRate] = useState(8.5);
  const [tenureYears, setTenureYears] = useState(3);

  // When bike is chosen, auto fill loan amount and down payment
  const handleSelectBike = (bikeId) => {
    setSelectedBikeId(bikeId);
    if (!bikeId) return;
    const bike = BIKES_DATA.find((b) => b.id === bikeId);
    if (bike) {
      const price = currency === 'INR' ? bike.priceINR : bike.priceUSD;
      const dp = Math.round(price * 0.2); // 20% down payment default
      setDownPayment(dp);
      setLoanAmount(price - dp);
    }
  };

  const monthlyRate = interestRate / 12 / 100;
  const totalMonths = tenureYears * 12;
  const monthlyEMI = Math.round(
    (loanAmount * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
    (Math.pow(1 + monthlyRate, totalMonths) - 1)
  ) || 0;

  const totalRepayment = monthlyEMI * totalMonths;
  const totalInterest = Math.max(0, totalRepayment - loanAmount);
  const principalPercentage = Math.round((loanAmount / (totalRepayment || 1)) * 100);
  const interestPercentage = 100 - principalPercentage;

  const formatPrice = (val) => {
    if (currency === 'INR') {
      return `₹${val.toLocaleString('en-IN')}`;
    }
    return `$${val.toLocaleString('en-US')}`;
  };

  return (
    <section id="loan-calculator" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
        
        {/* Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
            <DollarSign className="w-3.5 h-3.5" />
            Financing & EMI Estimator
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white">
            Plan Your Motorcycle Loan
          </h2>
          <p className="text-sm text-slate-400 mt-2">
            Calculate accurate monthly repayments, customize down payment ratios, and see the exact interest breakdown before visiting a dealership.
          </p>

          {/* Quick Motorcycle Picker */}
          <div className="mt-5 max-w-md mx-auto flex items-center gap-2 bg-slate-950 px-4 py-2 rounded-xl border border-slate-800 text-xs">
            <span className="text-slate-400 font-medium">Auto-fill from model:</span>
            <select
              value={selectedBikeId}
              onChange={(e) => handleSelectBike(e.target.value)}
              className="bg-transparent text-orange-400 font-bold outline-none cursor-pointer flex-1"
            >
              <option value="" className="bg-slate-900 text-white">Select a Bike...</option>
              {BIKES_DATA.map((b) => (
                <option key={b.id} value={b.id} className="bg-slate-900 text-white">
                  {b.name} ({formatPrice(currency === 'INR' ? b.priceINR : b.priceUSD)})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* 2 Column Calculator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Sliders */}
          <div className="lg:col-span-7 space-y-6 bg-slate-950/70 p-6 sm:p-8 rounded-2xl border border-slate-800/80">
            
            {/* Loan Amount */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span>Principal Loan Amount:</span>
                <span className="text-lg font-black text-white">{formatPrice(loanAmount)}</span>
              </div>
              <input
                type="range"
                min={currency === 'INR' ? 50000 : 2000}
                max={currency === 'INR' ? 4000000 : 40000}
                step={currency === 'INR' ? 10000 : 500}
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-orange-500 cursor-pointer"
              />
            </div>

            {/* Down Payment */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span>Down Payment:</span>
                <span className="text-lg font-black text-emerald-400">{formatPrice(downPayment)}</span>
              </div>
              <input
                type="range"
                min={0}
                max={currency === 'INR' ? 2000000 : 20000}
                step={currency === 'INR' ? 10000 : 500}
                value={downPayment}
                onChange={(e) => setDownPayment(Number(e.target.value))}
                className="w-full accent-emerald-500 cursor-pointer"
              />
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span>Annual Interest Rate (APR):</span>
                <span className="text-lg font-black text-amber-400">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="4"
                max="18"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-500 cursor-pointer"
              />
            </div>

            {/* Loan Tenure */}
            <div>
              <div className="flex justify-between items-center text-xs font-bold text-slate-300 mb-2">
                <span>Loan Period (Tenure):</span>
                <span className="text-lg font-black text-cyan-400">{tenureYears} Years ({tenureYears * 12} Months)</span>
              </div>
              <input
                type="range"
                min="1"
                max="6"
                step="1"
                value={tenureYears}
                onChange={(e) => setTenureYears(Number(e.target.value))}
                className="w-full accent-cyan-500 cursor-pointer"
              />
            </div>

          </div>

          {/* Right Column: Output Card */}
          <div className="lg:col-span-5 bg-gradient-to-tr from-slate-900 to-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-700/80 shadow-xl flex flex-col justify-between space-y-6">
            
            <div className="text-center pb-6 border-b border-slate-800">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Estimated Monthly Payment</span>
              <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight mt-2">
                {formatPrice(monthlyEMI)}
                <span className="text-sm font-bold text-slate-400"> /mo</span>
              </div>
              <p className="text-xs text-slate-400 mt-1">Calculated for {tenureYears * 12} equal monthly installments</p>
            </div>

            {/* Ratio Bar */}
            <div>
              <div className="flex justify-between text-xs font-semibold text-slate-400 mb-1.5">
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-orange-500"></span> Principal ({principalPercentage}%)</span>
                <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span> Interest ({interestPercentage}%)</span>
              </div>
              <div className="w-full h-3 rounded-full bg-slate-800 overflow-hidden flex">
                <div style={{ width: `${principalPercentage}%` }} className="bg-orange-500 h-full"></div>
                <div style={{ width: `${interestPercentage}%` }} className="bg-amber-400 h-full"></div>
              </div>
            </div>

            {/* Totals Table */}
            <div className="space-y-2.5 text-xs">
              <div className="flex justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-slate-400">Total Loan Principal:</span>
                <span className="font-bold text-white">{formatPrice(loanAmount)}</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-slate-400">Total Interest Payable:</span>
                <span className="font-bold text-amber-400">{formatPrice(totalInterest)}</span>
              </div>
              <div className="flex justify-between p-2.5 rounded-lg bg-slate-950/80 border border-slate-800">
                <span className="text-slate-400">Total Repayment Amount:</span>
                <span className="font-bold text-emerald-400">{formatPrice(totalRepayment)}</span>
              </div>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
