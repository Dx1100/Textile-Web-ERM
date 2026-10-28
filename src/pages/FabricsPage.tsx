import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { TEXTILE_PRODUCTS } from '../data/textilesData';
import { Product } from '../types';
import { Sparkles, Ruler, Layers, ShieldCheck, SlidersHorizontal } from 'lucide-react';

interface FabricsPageProps {
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onOrderSwatch: (product: Product) => void;
  onAddToCart: (product: Product, meters: number) => void;
  onNavigateHome: () => void;
  onOpenCalculator: () => void;
  onOpenWholesale: () => void;
}

export const FabricsPage: React.FC<FabricsPageProps> = ({
  currency,
  onQuickView,
  onOrderSwatch,
  onAddToCart,
  onNavigateHome,
  onOpenCalculator,
  onOpenWholesale,
}) => {
  const [selectedWeight, setSelectedWeight] = useState<'all' | 'light' | 'medium' | 'heavy'>('all');
  const [selectedTransparency, setSelectedTransparency] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const fabricProducts = useMemo(() => {
    return TEXTILE_PRODUCTS.filter(p => p.priceUnit === 'per meter').filter(p => {
      // Weight filter
      if (selectedWeight === 'light' && p.gsm >= 80) return false;
      if (selectedWeight === 'medium' && (p.gsm < 80 || p.gsm > 150)) return false;
      if (selectedWeight === 'heavy' && p.gsm <= 150) return false;
      // Transparency
      if (selectedTransparency !== 'all' && p.transparency.toLowerCase() !== selectedTransparency.toLowerCase()) return false;
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [selectedWeight, selectedTransparency, sortBy]);

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#1C2B4B] font-semibold">Haute Couture Fabric Yardage Archive</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-[#1F1916] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden border border-stone-800 shadow-xl">
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold mb-3">
            <span>By The Meter & Swatches</span>
            <span aria-hidden="true">·</span>
            <span>Silk Mark Certified</span>
            <span aria-hidden="true">·</span>
            <span>Custom Custom Dyeing</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Haute Couture Fabric Yardage Archive
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
            Direct mill and handloom yardages for couturiers, bespoke tailors, and bridal designers. Order starting from 1 meter with precision 0.5-meter step increments, or sample any fabric with a ₹99 physical swatch.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenCalculator}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C2B4B] hover:bg-[#14223A] rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <Ruler className="w-4 h-4 text-[#D8B26E]" />
              <span>Open Yardage Calculator</span>
            </button>
            <button
              type="button"
              onClick={onOpenWholesale}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-stone-200 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              Bulk 50m+ Wholesale Inquiry
            </button>
          </div>
        </div>
      </div>

      {/* Technical Filter Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-4 border-b border-stone-200">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-stone-500 flex items-center gap-1 font-medium">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            GSM Weight:
          </span>
          {[
            { id: 'all', label: 'All Weights' },
            { id: 'light', label: 'Light (<80 GSM)' },
            { id: 'medium', label: 'Medium (80-150 GSM)' },
            { id: 'heavy', label: 'Heavy Bridal (>150 GSM)' },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedWeight(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedWeight === tab.id
                  ? 'bg-[#1F1916] text-[#D8B26E] font-semibold'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-4 text-xs">
          <div className="flex items-center gap-1.5">
            <span className="text-stone-500">Transparency:</span>
            <select
              value={selectedTransparency}
              onChange={(e) => setSelectedTransparency(e.target.value)}
              className="bg-white border border-stone-300 rounded-lg px-2.5 py-1 text-xs text-stone-700"
            >
              <option value="all">All</option>
              <option value="opaque">Opaque</option>
              <option value="semi-sheer">Semi-Sheer</option>
              <option value="sheer">Sheer</option>
            </select>
          </div>

          <div className="flex items-center gap-1.5">
            <span className="text-stone-500">Sort:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-stone-300 rounded-lg px-2.5 py-1 text-xs text-stone-700"
            >
              <option value="featured">Featured Yardage</option>
              <option value="price-low">Price/m: Low to High</option>
              <option value="price-high">Price/m: High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Fabric Yardage Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {fabricProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            currency={currency}
            onQuickView={onQuickView}
            onOrderSwatch={onOrderSwatch}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>

    </div>
  );
};
