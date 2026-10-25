import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { TEXTILE_PRODUCTS } from '../data/textilesData';
import { Product } from '../types';
import { Sparkles, Layers, Scissors, CheckCircle2, ShieldCheck } from 'lucide-react';

interface SuitSetsPageProps {
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onOrderSwatch: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigateHome: () => void;
  onOpenCalculator: () => void;
}

export const SuitSetsPage: React.FC<SuitSetsPageProps> = ({
  currency,
  onQuickView,
  onOrderSwatch,
  onAddToCart,
  onNavigateHome,
  onOpenCalculator,
}) => {
  const [selectedSubtype, setSelectedSubtype] = useState<string>('all');

  const suitProducts = useMemo(() => {
    return TEXTILE_PRODUCTS.filter(p => p.category === 'suits').filter(p => {
      if (selectedSubtype === 'all') return true;
      if (selectedSubtype === 'chanderi') return p.composition.toLowerCase().includes('chanderi');
      if (selectedSubtype === 'tussar') return p.composition.toLowerCase().includes('tussar');
      if (selectedSubtype === 'chikankari') return p.composition.toLowerCase().includes('chikankari') || p.name.toLowerCase().includes('chikankari');
      return true;
    });
  }, [selectedSubtype]);

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">Artisanal Unstitched & Semi-Stitched Suit Sets</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-[#1F1916] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden border border-stone-800 shadow-xl">
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold mb-3">
            <span>Generous 3-Piece Cuts</span>
            <span aria-hidden="true">·</span>
            <span>Hand Block & Needlework</span>
            <span aria-hidden="true">·</span>
            <span>Pure Natural Fibers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Artisanal Unstitched Suit Sets
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
            Complete high-fashion ethnic ensembles ready for your personal tailor. Breathable Chanderi weaves, hand-drawn Kalamkari on wild tussar, and Lucknowi needlecraft on pure georgette with generous yardage allowances.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenCalculator}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#9B1D2C] hover:bg-[#7A1C28] rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <Scissors className="w-4 h-4 text-[#D8B26E]" />
              <span>Tailoring Yardage Calculator</span>
            </button>
            <div className="text-xs text-stone-300 flex items-center gap-1.5 px-3 py-2 bg-stone-900/60 rounded-lg border border-stone-800">
              <ShieldCheck className="w-4 h-4 text-[#D8B26E]" />
              <span>Includes Kurta (2.5m) + Bottom (2.5m) + Dupatta (2.5m)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Anatomy of the 3-Piece Kit */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs mb-12">
        <div className="max-w-xl mb-6">
          <span className="text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold block mb-1">
            Cut & Yardage Breakdown
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916]">
            Every Bhasin Suit Ensemble Includes:
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200">
            <span className="text-xs font-bold text-[#9B1D2C] uppercase tracking-wide block mb-1">01. Kurta Material (2.5m)</span>
            <h3 className="font-bold text-sm text-[#1F1916] mb-1">Generous 44" Width Span</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Sufficient for straight calf-length kurtas, A-line tunics, or elbow/full-length sleeves up to size 48 with centered embroidery placement.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200">
            <span className="text-xs font-bold text-[#9B1D2C] uppercase tracking-wide block mb-1">02. Bottom Fabric (2.5m)</span>
            <h3 className="font-bold text-sm text-[#1F1916] mb-1">High-Grade Shantoon / Silk</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Provides opaque coverage, silky fall, and smooth anti-static glide for cigarette trousers, pleated salwars, or wide-leg palazzos.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-[#FAF8F5] border border-stone-200">
            <span className="text-xs font-bold text-[#9B1D2C] uppercase tracking-wide block mb-1">03. Dupatta Veil (2.5m)</span>
            <h3 className="font-bold text-sm text-[#1F1916] mb-1">Full-Length Handloom Silk</h3>
            <p className="text-xs text-stone-600 leading-relaxed">
              Finished with metallic zari selvedges and hand-knotted tassels. Drapes effortlessly over shoulders or as a royal front cowl.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Tabs for Suits */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
        <div className="flex items-center gap-1.5 text-xs overflow-x-auto">
          {[
            { id: 'all', label: 'All Suit Sets' },
            { id: 'chanderi', label: 'Chanderi Zari Buti' },
            { id: 'tussar', label: 'Wild Tussar Kalamkari' },
            { id: 'chikankari', label: 'Lucknowi Chikankari Anarkali' },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedSubtype(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedSubtype === tab.id
                  ? 'bg-[#1F1916] text-[#D8B26E] font-semibold'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Suits Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {suitProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            currency={currency}
            onQuickView={onQuickView}
            onOrderSwatch={onOrderSwatch}
            onAddToCart={(p, qty) => onAddToCart(p, qty)}
          />
        ))}
      </div>

    </div>
  );
};
