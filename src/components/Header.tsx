import React, { useState } from 'react';
import { ShoppingBag, Search, Phone, Scissors, X, MapPin, Building2, Info } from 'lucide-react';
import { PageView } from '../types';

interface HeaderProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenCalculator: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenCalculator,
  currency,
  onToggleCurrency,
  searchQuery,
  onSearchChange,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-stone-200/80 transition-all">
      {/* 1. Slim Announcement Bar */}
      <div className="bg-[#1F1916] text-[#FAF8F5] text-[11px] py-1.5 px-4 sm:px-8 border-b border-[#352B26]">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="text-[#D8B26E] font-medium tracking-wide">BHASIN TEXTILES HERITAGE</span>
            <span className="text-stone-500">·</span>
            <span className="text-stone-300 hidden sm:inline">Varanasi Pit Looms Since 1997</span>
            <span className="text-stone-500 hidden sm:inline">·</span>
            <button 
              type="button" 
              onClick={() => onNavigate('stores')}
              className="text-stone-400 hover:text-[#D8B26E] transition-colors cursor-pointer"
            >
              Chandni Chowk Showroom & Faridabad Mill
            </button>
          </div>

          <div className="flex items-center gap-4 shrink-0 text-stone-300">
            <button
              type="button"
              onClick={() => onNavigate('wholesale')}
              className="hover:text-[#D8B26E] transition-colors text-[11px] hidden md:inline font-medium cursor-pointer"
            >
              B2B Wholesale & Export
            </button>

            <span className="text-stone-600 hidden md:inline">·</span>

            <a 
              href="tel:+919811054321" 
              className="flex items-center gap-1.5 hover:text-[#D8B26E] transition-colors whitespace-nowrap"
            >
              <Phone className="w-3 h-3 text-[#D8B26E]" />
              <span className="hidden sm:inline">+91 98110 54321</span>
            </a>
            
            <span className="text-stone-600">·</span>

            {/* Currency switcher */}
            <button
              type="button"
              onClick={onToggleCurrency}
              className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer text-[11px] font-medium"
              title="Toggle Currency"
            >
              <span className={currency === 'INR' ? 'text-[#D8B26E] font-bold' : 'text-stone-400'}>INR (₹)</span>
              <span className="text-stone-600">/</span>
              <span className={currency === 'USD' ? 'text-[#D8B26E] font-bold' : 'text-stone-400'}>USD ($)</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Top Bar Contract: Brand Wordmark — 4–5 Nav Links — 1 Primary Action */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-8">
        
        {/* Zone 1: Single text element wordmark in display face */}
        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#1F1916] whitespace-nowrap shrink-0 hover:text-[#9B1D2C] transition-colors text-left cursor-pointer"
        >
          BHASIN TEXTILES
        </button>

        {/* Zone 2: 4–5 concise single-line text navigation links */}
        <nav className="hidden lg:flex items-center gap-7 text-[13px] font-medium tracking-wider uppercase text-stone-700">
          <button
            type="button"
            onClick={() => onNavigate('fabrics')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 cursor-pointer ${
              activePage === 'fabrics' 
                ? 'text-[#9B1D2C] border-[#9B1D2C] font-semibold' 
                : 'border-transparent text-stone-600 hover:text-[#1F1916] hover:border-stone-400'
            }`}
          >
            Fabrics
          </button>
          <button
            type="button"
            onClick={() => onNavigate('brocades')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 cursor-pointer ${
              activePage === 'brocades' 
                ? 'text-[#9B1D2C] border-[#9B1D2C] font-semibold' 
                : 'border-transparent text-stone-600 hover:text-[#1F1916] hover:border-stone-400'
            }`}
          >
            Brocades
          </button>
          <button
            type="button"
            onClick={() => onNavigate('sarees')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 cursor-pointer ${
              activePage === 'sarees' 
                ? 'text-[#9B1D2C] border-[#9B1D2C] font-semibold' 
                : 'border-transparent text-stone-600 hover:text-[#1F1916] hover:border-stone-400'
            }`}
          >
            Sarees
          </button>
          <button
            type="button"
            onClick={() => onNavigate('lehengas')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 cursor-pointer ${
              activePage === 'lehengas' 
                ? 'text-[#9B1D2C] border-[#9B1D2C] font-semibold' 
                : 'border-transparent text-stone-600 hover:text-[#1F1916] hover:border-stone-400'
            }`}
          >
            Lehengas
          </button>
          <button
            type="button"
            onClick={() => onNavigate('suits')}
            className={`whitespace-nowrap shrink-0 transition-colors pb-0.5 border-b-2 cursor-pointer ${
              activePage === 'suits' 
                ? 'text-[#9B1D2C] border-[#9B1D2C] font-semibold' 
                : 'border-transparent text-stone-600 hover:text-[#1F1916] hover:border-stone-400'
            }`}
          >
            Suit Sets
          </button>
        </nav>

        {/* Zone 3: Interactive Affordances + 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Search Toggle */}
          <button
            type="button"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="p-2 text-stone-600 hover:text-[#1F1916] transition-colors rounded-full hover:bg-stone-200/50 cursor-pointer"
            aria-label="Search Catalog"
            title="Search Fabrics & Outfits"
          >
            <Search className="w-4 h-4" />
          </button>

          {/* Cart Bag Trigger */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative p-2 text-stone-700 hover:text-[#9B1D2C] transition-colors rounded-full hover:bg-stone-200/50 flex items-center cursor-pointer"
            aria-label="Shopping Bag"
            title="Open Bag"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#9B1D2C] text-white text-[10px] font-semibold rounded-full w-5 h-5 flex items-center justify-center tabular-nums shadow-sm">
                {cartCount}
              </span>
            )}
          </button>

          {/* 1 Primary Action Button */}
          <button
            type="button"
            onClick={onOpenCalculator}
            className="flex items-center gap-1.5 px-4 py-2 text-xs font-semibold tracking-wider uppercase text-white bg-[#1F1916] hover:bg-[#9B1D2C] rounded-lg transition-colors whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <Scissors className="w-3.5 h-3.5 text-[#D8B26E]" />
            <span>Fabric Calculator</span>
          </button>
        </div>
      </div>

      {/* Expandable Search Drawer */}
      {isSearchOpen && (
        <div className="border-t border-stone-200 bg-white/95 px-4 py-3 sm:px-8">
          <div className="max-w-3xl mx-auto flex items-center gap-3">
            <Search className="w-4 h-4 text-stone-400 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Search by weave (Banarasi, Chanderi, Raw Silk, Organza), color, or silhouette..."
              className="w-full text-sm text-[#1F1916] placeholder:text-stone-400 bg-transparent focus:outline-none"
              autoFocus
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange('')}
                className="text-stone-400 hover:text-stone-600 text-xs cursor-pointer"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="p-1 text-stone-500 hover:text-stone-700 cursor-pointer"
              aria-label="Close search"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
