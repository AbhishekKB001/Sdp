import React from 'react';
import { Cloud, ShieldCheck, Heart, Sparkles, Compass } from 'lucide-react';

export default function Footer({ onOpenAwsDeploy, onOpenCalculator }) {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20">
                <span className="text-xl font-black italic tracking-tighter text-white">MV</span>
              </div>
              <span className="text-lg font-black tracking-wider text-white uppercase">MOTO<span className="text-orange-500">VERSE</span></span>
            </div>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              Your premier digital showroom and specifications encyclopedia for all motorcycles available in today's market — from track-focused superbikes to continental adventure tourers and next-gen electric machines.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Independent spec verifications, test ride bookings &amp; real-time financing calculators.</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Quick Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#catalog" className="hover:text-orange-400 transition-colors">Showroom Catalog</a></li>
              <li><a href="#catalog" className="hover:text-orange-400 transition-colors">SuperSport Class</a></li>
              <li><a href="#catalog" className="hover:text-orange-400 transition-colors">Adventure &amp; Dual Sport</a></li>
              <li><a href="#catalog" className="hover:text-orange-400 transition-colors">Cruiser &amp; Heritage</a></li>
              <li><button onClick={onOpenCalculator} className="hover:text-orange-400 transition-colors text-left">EMI Loan Calculator</button></li>
            </ul>
          </div>

          {/* Col 3: Cloud & Deployment */}
          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-3">Cloud Infrastructure</h4>
            <ul className="space-y-2">
              <li>
                <button onClick={onOpenAwsDeploy} className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1.5">
                  <Cloud className="w-3.5 h-3.5" />
                  AWS Amplify Deployment
                </button>
              </li>
              <li><button onClick={onOpenAwsDeploy} className="hover:text-slate-200 transition-colors text-left">AWS S3 Static Hosting</button></li>
              <li><button onClick={onOpenAwsDeploy} className="hover:text-slate-200 transition-colors text-left">Amazon CloudFront CDN</button></li>
              <li><button onClick={onOpenAwsDeploy} className="hover:text-slate-200 transition-colors text-left">Docker &amp; AWS App Runner</button></li>
              <li><span className="text-slate-600">AWS Route 53 Custom DNS</span></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-[11px]">
          <div>
            &copy; {new Date().getFullYear()} MotoVerse Catalog. Built for motorcycle enthusiasts &amp; cloud deployable on AWS.
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              Powered by React 19 + Tailwind CSS + AWS Cloud
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
