import React, { useState } from 'react';
import { Mail, Phone, ShieldCheck, Check } from 'lucide-react';
import { PageView } from '../types';
import { siteContent } from '../config/siteContent';

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
  const { brand } = siteContent;

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <footer className="bg-[#071224] text-slate-300 border-t border-slate-800">
      
      {/* Newsletter / Catalog Drop Alert */}
      <div className="border-b border-slate-800/80 py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-center justify-between">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-2">
              <span className="w-4 h-0.5 bg-emerald-500" />
              <span>B2B Wholesale Catalog Drops</span>
            </div>
            <h3 className="text-2xl font-heading font-extrabold text-white mb-2">
              Receive New Sourcing Lots & Festive Wholesale Alerts
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-md font-normal leading-relaxed">
              Curated previews of limited-run Banarasi lots, fresh Surat prints, and seasonal wholesale updates directly from Indian weaving clusters.
            </p>
          </div>

          <div className="md:col-span-6">
            {subscribed ? (
              <div className="flex items-center gap-2 p-3.5 bg-slate-900 border border-emerald-500/40 rounded-lg text-xs text-emerald-300">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Subscribed! Use code <strong className="text-white">SOURCING10</strong> for priority swatch courier dispatch.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email address..."
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-emerald-500"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#0D7A5F] hover:bg-[#0A634D] text-white text-xs font-bold tracking-wider uppercase rounded-lg transition-colors cursor-pointer shrink-0 shadow-xs"
                >
                  Subscribe
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Main Footer Links & Locations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Brand & Sourcing Consultant Role */}
          <div className="space-y-4">
            <button
              type="button"
              onClick={() => onNavigate('home')}
              className="text-2xl font-heading font-extrabold text-white tracking-tight hover:text-emerald-400 transition-colors cursor-pointer text-left block"
            >
              <span>{brand.name}</span>
              <span className="text-[#0D7A5F]">.</span>
            </button>
            <div className="text-[11px] text-emerald-400 uppercase tracking-wider font-bold">
              {brand.role}
            </div>
            <p className="text-xs text-slate-400 leading-relaxed font-normal">
              Established in {brand.estYear}. Sourcing and textile consultancy assisting retailers, boutiques, and wholesalers across Tier 2 & Tier 3 cities with authentic Indian weaves and structured 30 to 90 days trade credit.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Silk Mark Organization Registered Partner</span>
            </div>
          </div>

          {/* Sourcing Categories */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-bold text-white">
              Sourced Categories
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button type="button" onClick={() => onNavigate('sarees')} className="hover:text-white transition-colors cursor-pointer">
                  Banarasi & Fancy Sarees
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('suits')} className="hover:text-white transition-colors cursor-pointer">
                  Unstitched Suit Sets & Kurtis
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('lehengas')} className="hover:text-white transition-colors cursor-pointer">
                  Bridal & Semi-Stitched Lehengas
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('fabrics')} className="hover:text-white transition-colors cursor-pointer">
                  Pure Silks & Brocades (Running)
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('wholesale')} className="hover:text-white transition-colors cursor-pointer">
                  Bulk Wholesale Lots
                </button>
              </li>
            </ul>
          </div>

          {/* Trade Services & Threadlinc */}
          <div className="space-y-3">
            <h5 className="text-xs uppercase tracking-wider font-bold text-white">
              Consulting & Services
            </h5>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button type="button" onClick={() => onNavigate('network')} className="hover:text-white transition-colors cursor-pointer">
                  4 Regional Sourcing Hubs
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('whoweserve')} className="hover:text-white transition-colors cursor-pointer">
                  Tier 2 & 3 Retail Buyer Solutions
                </button>
              </li>
              <li>
                <button type="button" onClick={() => onNavigate('threadlinc')} className="hover:text-emerald-400 text-slate-300 font-semibold transition-colors cursor-pointer">
                  {brand.threadlinc.firmName} {brand.threadlinc.concept} Financing
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenCalculator} className="hover:text-white transition-colors cursor-pointer">
                  Fabric Yardage Calculator
                </button>
              </li>
              <li>
                <button type="button" onClick={onOpenConsultation} className="hover:text-white transition-colors cursor-pointer">
                  Book Video Sourcing Consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Sourcing Desks & Offices */}
          <div className="space-y-3 text-xs text-slate-400">
            <h5 className="text-xs uppercase tracking-wider font-bold text-white">
              Consulting Desks
            </h5>
            
            {brand.contact.offices.map((off, idx) => (
              <div key={idx} className="pb-2 border-b border-slate-800/80 last:border-0 last:pb-0">
                <p className="font-bold text-slate-200 flex items-center gap-2 mb-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span>{off.city} Desk</span>
                </p>
                <p className="text-[11px] text-slate-400">
                  {off.area}
                </p>
              </div>
            ))}

            <div className="pt-2">
              <a 
                href={`tel:${brand.contact.phone}`} 
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors font-medium"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{brand.contact.phoneDisplay}</span>
              </a>
              <a 
                href={`mailto:${brand.contact.email}`} 
                className="flex items-center gap-1.5 text-slate-300 hover:text-emerald-400 transition-colors mt-1"
              >
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{brand.contact.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="mt-14 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {brand.estYear}–2026 {brand.name}. All Rights Reserved. Sourcing & Textile Consultants.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <button type="button" onClick={() => onNavigate('about')} className="hover:text-slate-300">About Us</button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={() => onNavigate('threadlinc')} className="hover:text-emerald-400 text-slate-400">{brand.threadlinc.firmName} Financing</button>
            <span aria-hidden="true">·</span>
            <button type="button" onClick={() => onNavigate('contact')} className="hover:text-slate-300">Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};
