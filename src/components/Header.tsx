import React, { useState } from 'react';
import { ShoppingBag, FileText, X, Menu } from 'lucide-react';
import { PageView } from '../types';
import { siteContent } from '../config/siteContent';

interface HeaderProps {
  activePage: PageView;
  onNavigate: (page: PageView) => void;
  cartCount: number;
  onOpenCart: () => void;
  onOpenRequirementModal: () => void;
  currency: 'INR' | 'USD';
  onToggleCurrency: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  cartCount,
  onOpenCart,
  onOpenRequirementModal,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, navigation } = siteContent;

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6">
        
        {/* Brand Identity: Modern Architectural Sans with Emerald Accent */}
        <button
          type="button"
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="text-left shrink-0 cursor-pointer group"
        >
          <div className="text-xl sm:text-2xl font-heading font-extrabold tracking-tight text-[#0B1B33] group-hover:text-[#0D7A5F] transition-colors leading-none flex items-center gap-1.5">
            <span>{brand.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D7A5F] shrink-0" />
          </div>
          <div className="text-[10px] tracking-widest uppercase text-slate-500 font-semibold mt-1">
            <span>{brand.role}</span>
          </div>
        </button>

        {/* Minimal, Spaced Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7 text-[13px] font-medium tracking-wide">
          {navigation.links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate(link.id)}
              className={`whitespace-nowrap transition-colors pb-0.5 border-b-2 cursor-pointer flex items-center gap-1.5 ${
                activePage === link.id
                  ? 'text-[#0D7A5F] border-[#0D7A5F] font-bold'
                  : 'border-transparent text-slate-600 hover:text-[#0B1B33] hover:border-slate-300'
              }`}
            >
              <span>{link.label}</span>
            </button>
          ))}
        </nav>

        {/* Action Zone: Sample Cart + Emerald Primary CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          {/* Swatch / Sample Cart */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative p-2 text-slate-700 hover:text-[#0B1B33] transition-colors rounded-lg hover:bg-slate-100 flex items-center cursor-pointer"
            aria-label="Shopping Bag / Sample Swatches"
            title="Sample Swatches"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#0D7A5F] text-white text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center tabular-nums">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary Action Button (Clean Emerald Green) */}
          <button
            type="button"
            onClick={onOpenRequirementModal}
            className="flex items-center gap-1.5 px-4.5 py-2 text-xs font-bold tracking-wider uppercase text-white bg-[#0D7A5F] hover:bg-[#0A634D] rounded-lg transition-all whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>{navigation.ctaLabel}</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-slate-700 hover:text-[#0B1B33] rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-4 space-y-1.5 animate-in slide-in-from-top-2 duration-200">
          {navigation.links.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-between ${
                activePage === link.id
                  ? 'bg-emerald-50 text-[#0D7A5F] font-bold'
                  : 'text-slate-700 hover:bg-slate-50'
              }`}
            >
              <span>{link.label}</span>
            </button>
          ))}
        </div>
      )}
    </header>
  );
};
