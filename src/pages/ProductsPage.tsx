import React, { useState, useMemo } from 'react';
import { WhatWeSourceSection } from '../components/WhatWeSourceSection';
import { ProductCard } from '../components/ProductCard';
import { TEXTILE_PRODUCTS } from '../data/textilesData';
import { Product, ProductCategory } from '../types';
import { SlidersHorizontal, ArrowRight, ShieldCheck, Sparkles, Layers, FileText } from 'lucide-react';

interface ProductsPageProps {
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onOrderSwatch: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigateHome: () => void;
  onOpenRequirementModal: (initialCat?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  currency,
  onQuickView,
  onOrderSwatch,
  onAddToCart,
  onNavigateHome,
  onOpenRequirementModal,
}) => {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [filterWeaveOnly, setFilterWeaveOnly] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const filteredProducts = useMemo(() => {
    return TEXTILE_PRODUCTS.filter((prod) => {
      if (activeCategory !== 'all' && prod.category !== activeCategory) {
        return false;
      }
      if (filterWeaveOnly !== 'all') {
        if (!prod.subcategory.toLowerCase().includes(filterWeaveOnly.toLowerCase())) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [activeCategory, filterWeaveOnly, sortBy]);

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">What We Source (Products & Materials)</span>
      </nav>

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-stone-200">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Sourcing Portfolio</span>
            <span aria-hidden="true">·</span>
            <span>Direct Loom & Mill Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1916] leading-tight mb-3">
            What We Source for B2B Buyers
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            From raw greige fabrics and pure Banarasi silk brocades to ready-to-wear bridal ensembles, kidswear, and home furnishing. If it’s produced in India's textile belts, our on-ground team can source, inspect, and dispatch it for you.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenRequirementModal()}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Send Product Requirement</span>
        </button>
      </div>

      {/* Section 3 Blueprint Component */}
      <div className="mb-14">
        <WhatWeSourceSection
          onSelectCategoryRequirement={(catName) => onOpenRequirementModal(catName)}
        />
      </div>

      {/* Interactive Catalog Section */}
      <div className="pt-8 border-t border-stone-200">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <h2 className="text-2xl font-serif font-bold text-[#1F1916]">
              Live Sample Archive & Swatch Registry
            </h2>
            <p className="text-xs text-stone-500 mt-1">
              Order physical 10x10 cm swatches for ₹99 or request bulk lot production.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-xs">
              <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
              <select
                value={filterWeaveOnly}
                onChange={(e) => setFilterWeaveOnly(e.target.value)}
                className="bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs text-stone-700 focus:outline-none focus:border-[#9B1D2C]"
              >
                <option value="all">All Fabric Weaves</option>
                <option value="Silk">Pure Silk</option>
                <option value="Brocade">Brocades</option>
                <option value="Chanderi">Chanderi</option>
                <option value="Tissue">Tissues</option>
                <option value="Linen">Linens</option>
              </select>
            </div>

            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs text-stone-700 focus:outline-none focus:border-[#9B1D2C]"
            >
              <option value="featured">Featured Weaves</option>
              <option value="rating">Top Rated</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'fabrics', label: 'Pure Fabrics & Yardage' },
            { id: 'brocades', label: 'Katan Silk Brocades' },
            { id: 'sarees', label: 'Heritage Sarees' },
            { id: 'lehengas', label: 'Bridal Lehengas' },
            { id: 'suits', label: 'Artisanal Suits' },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveCategory(tab.id as ProductCategory)}
              className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                activeCategory === tab.id
                  ? 'bg-[#1F1916] text-[#D8B26E] font-semibold shadow-xs'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-400'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProducts.map((product) => (
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

    </div>
  );
};
