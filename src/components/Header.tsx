import React, { useState } from 'react';
import { ShoppingBag, Search, Phone, FileText, X, Menu } from 'lucide-react';
import { PageView } from '../types';

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

  const navLinks: { id: PageView; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'products', label: 'What We Source' },
    { id: 'network', label: 'Sourcing Hubs' },
    { id: 'process', label: 'How We Work' },
    { id: 'whoweserve', label: 'Who We Serve' },
    { id: 'threadlinc', label: 'Threadlinc Financing' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/98 backdrop-blur-md border-b border-stone-200 shadow-2xs transition-all">
      {/* Strict One-Row Single Header: No duplicate stacked menus */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex items-center justify-between gap-6">
        
        {/* Brand Wordmark Zone */}
        <button
          type="button"
          onClick={() => {
            onNavigate('home');
            setMobileMenuOpen(false);
          }}
          className="text-left shrink-0 cursor-pointer group"
        >
          <div className="text-xl sm:text-2xl font-serif font-bold tracking-tight text-[#1F1916] group-hover:text-[#9B1D2C] transition-colors leading-none">
            SHREE DURGA AGENCY
          </div>
          <div className="text-[10px] tracking-wider uppercase text-stone-500 font-medium mt-1 flex items-center gap-1.5">
            <span>Textile & Product Sourcing</span>
            <span className="text-stone-300">|</span>
            <span className="text-[#D8B26E] font-semibold">Threadlinc Partner</span>
          </div>
        </button>

        {/* Clean Single-Row Navigation Links */}
        <nav className="hidden xl:flex items-center gap-6 text-[13px] font-medium tracking-wide text-stone-700">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => onNavigate(link.id)}
              className={`whitespace-nowrap transition-colors pb-0.5 border-b-2 cursor-pointer ${
                activePage === link.id
                  ? 'text-[#9B1D2C] border-[#9B1D2C] font-semibold'
                  : 'border-transparent text-stone-600 hover:text-[#1F1916] hover:border-stone-400'
              }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Action Zone: Phone + Bag + 1 Primary CTA Button */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href="tel:+919811054321"
            className="hidden sm:flex items-center gap-1.5 text-xs text-stone-600 hover:text-[#9B1D2C] font-medium transition-colors whitespace-nowrap"
            title="Direct Desk"
          >
            <Phone className="w-3.5 h-3.5 text-[#D8B26E]" />
            <span>+91 98110 54321</span>
          </a>

          {/* Swatch / Sample Cart Trigger */}
          <button
            type="button"
            onClick={onOpenCart}
            className="relative p-2 text-stone-700 hover:text-[#9B1D2C] transition-colors rounded-lg hover:bg-stone-200/50 flex items-center cursor-pointer"
            aria-label="Shopping Bag / Sample Swatches"
            title="Sample Swatches & Swatch Binders"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#9B1D2C] text-white text-[10px] font-semibold rounded-full w-4.5 h-4.5 flex items-center justify-center tabular-nums shadow-xs">
                {cartCount}
              </span>
            )}
          </button>

          {/* Primary Action Button: Opens Sourcing Requirement Form */}
          <button
            type="button"
            onClick={onOpenRequirementModal}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#9B1D2C] hover:bg-[#7A1C28] rounded-lg transition-all whitespace-nowrap shrink-0 shadow-sm cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Submit Requirement</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-stone-700 hover:text-[#9B1D2C] rounded-lg cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-stone-200 bg-white px-4 py-4 space-y-2 animate-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <button
              key={link.id}
              type="button"
              onClick={() => {
                onNavigate(link.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full text-left py-2.5 px-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors ${
                activePage === link.id
                  ? 'bg-[#9B1D2C]/10 text-[#9B1D2C]'
                  : 'text-stone-700 hover:bg-stone-50'
              }`}
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs text-stone-600 px-3">
            <span>Direct Sourcing Desk:</span>
            <a href="tel:+919811054321" className="font-bold text-stone-900">+91 98110 54321</a>
          </div>
        </div>
      )}
    </header>
  );
};
