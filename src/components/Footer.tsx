import React, { useState } from 'react';
import { Mail, Phone, MapPin, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { PageView } from '../types';

interface FooterProps {
  onNavigate: (page: PageView) => void;
  onOpenCalculator: () => void;
  onOpenWholesaleModal: () => void;
  onOpenConsultation: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenCalculator,
  onOpenWholesaleModal,
  onOpenConsultation,
}) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#1F1916] text-[#FAF8F5] border-t border-stone-800">
      
      {/* Top Newsletter Banner */}
      <div className="border-b border-stone-800/80 py-10 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          <div className="md:col-span-6">
            <span className="text-[#D8B26E] text-xs font-semibold uppercase tracking-wider block mb-1">
              Join The Bhasin Textile Archive
            </span>
            <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
              Receive New Season Swatches & Loom Drops
            </h3>
            <p className="text-xs text-stone-400 max-w-md font-light leading-relaxed">
              Curated previews of limited-run Kadhwa Banarasi lots, seasonal color lab dips, and festive trousseau updates.
            </p>
          </div>

          <div className="md:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3 bg-stone-900 border border-[#D8B26E]/40 rounded-xl text-xs text-emerald-400">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Welcome to the Archive! Use code <strong className="text-[#D8B26E]">HERITAGE10</strong> for 10% off your order.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address..."
                  className="flex-1 bg-stone-900/90 border border-stone-700 rounded-lg px-3.5 py-2.5 text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-[#D8B26E]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors cursor-pointer shrink-0"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10">
          
          {/* Brand & Legacy */}
          <div className="lg:col-span-2 space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-xl font-serif font-bold text-white tracking-wide hover:text-[#D8B26E] transition-colors cursor-pointer text-left"
            >
              SHREE DURGA AGENCY
            </button>
            <div className="text-[11px] text-[#D8B26E] uppercase tracking-wider font-semibold">
              Textile Sourcing & Threadlinc Trade Financing
            </div>
            <p className="text-xs text-stone-400 leading-relaxed font-light max-w-sm">
              Established in 1999. Connecting retailers, wholesalers, and boutiques to India's top textile hubs in Delhi, Surat, Jaipur, and Panipat. Backed by sister firm <strong className="text-stone-200">Threadlinc</strong> for structured "Bill to – Ship to" trade credit financing.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D8B26E]">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Silk Mark Organization & Direct Mill Verified</span>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                className="text-xs text-stone-300 hover:text-white underline underline-offset-4 cursor-pointer"
              >
                Read Our 25+ Year Sourcing Story →
              </button>
            </div>
          </div>

          {/* Sourcing Navigation */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-stone-200">
              Sourcing Solutions
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  What We Source (Categories)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('network')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Sourcing Hubs (Delhi, Surat, Jaipur)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  How We Work (7 Steps)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('whoweserve')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Who We Serve (B2B Buyers)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('brocades')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Pure Silk Brocades & Yardages
                </button>
              </li>
            </ul>
          </div>

          {/* Atelier Services */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-stone-200">
              Atelier & Services
            </h5>
            <ul className="space-y-2 text-xs text-stone-400">
              <li>
                <button
                  type="button"
                  onClick={onOpenCalculator}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Fabric & Yardage Calculator
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={onOpenConsultation}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Live Video Draping Session
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('wholesale')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  B2B Wholesale & Mill Orders
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('threadlinc')}
                  className="hover:text-[#D8B26E] transition-colors cursor-pointer font-medium text-[#D8B26E]"
                >
                  Threadlinc Trade Credit (Bill to – Ship to)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate('stores')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Showrooms & Weaving Mill
                </button>
              </li>
              <li>
                <span className="text-stone-500">₹99 Physical Swatch Samples</span>
              </li>
            </ul>
          </div>

          {/* Physical Showrooms & Plant */}
          <div className="space-y-3 text-xs text-stone-400">
            <h5 className="text-xs uppercase tracking-wider font-semibold text-stone-200">
              Locations & Desk
            </h5>
            
            <div>
              <p className="font-semibold text-stone-200 flex items-center gap-1.5 mb-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#D8B26E] shrink-0" />
                <button 
                  type="button" 
                  onClick={() => onNavigate('stores')}
                  className="hover:text-[#D8B26E] transition-colors cursor-pointer text-left"
                >
                  Chandni Chowk Gallery
                </button>
              </p>
              <p className="text-[11px] text-stone-400 leading-tight">
                New Krishna Cloth Market, Katra Neel, Chandni Chowk, Delhi - 110006
              </p>
            </div>

            <div>
              <p className="font-semibold text-stone-200 flex items-center gap-1.5 mb-0.5">
                <MapPin className="w-3.5 h-3.5 text-[#D8B26E] shrink-0" />
                <button 
                  type="button" 
                  onClick={() => onNavigate('stores')}
                  className="hover:text-[#D8B26E] transition-colors cursor-pointer text-left"
                >
                  Manufacturing & Weaving Mill
                </button>
              </p>
              <p className="text-[11px] text-stone-400 leading-tight">
                Sector 24, Industrial Area, Faridabad, Haryana - 121005
              </p>
            </div>

            <div className="pt-1">
              <a 
                href="tel:+919811054321" 
                className="flex items-center gap-1.5 text-stone-300 hover:text-[#D8B26E] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#D8B26E] shrink-0" />
                <span>+91 98110 54321 / +91 11 2386 XXXX</span>
              </a>
              <a 
                href="mailto:contact@bhasintextiles.com" 
                className="flex items-center gap-1.5 text-stone-300 hover:text-[#D8B26E] transition-colors mt-1"
              >
                <Mail className="w-3.5 h-3.5 text-[#D8B26E] shrink-0" />
                <span>contact@bhasintextiles.com</span>
              </a>
            </div>
          </div>

        </div>

        {/* Quiet Bottom Copyright Bar */}
        <div className="mt-12 pt-6 border-t border-stone-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>© 1997–2026 Bhasin Textiles. All Rights Reserved. Handcrafted in India.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <button type="button" onClick={() => onNavigate('about')} className="hover:text-stone-300">About Legacy</button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={() => onNavigate('wholesale')} className="hover:text-stone-300">B2B Portal</button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={() => onNavigate('stores')} className="hover:text-stone-300">Showrooms</button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={() => onNavigate('threadlinc')} className="hover:text-[#D8B26E] text-stone-400">Threadlinc Financing</button>
            <span aria-hidden="true">·</span>
            <span>Silk Mark Verification</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
