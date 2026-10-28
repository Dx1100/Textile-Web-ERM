import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { TEXTILE_PRODUCTS } from '../data/textilesData';
import { Product } from '../types';
import { Sparkles, ShieldCheck, Layers, BookOpen, Check, ArrowRight } from 'lucide-react';

interface BrocadesPageProps {
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onOrderSwatch: (product: Product) => void;
  onAddToCart: (product: Product, meters: number) => void;
  onNavigateHome: () => void;
  onOpenCalculator: () => void;
}

export const BrocadesPage: React.FC<BrocadesPageProps> = ({
  currency,
  onQuickView,
  onOrderSwatch,
  onAddToCart,
  onNavigateHome,
  onOpenCalculator,
}) => {
  const [selectedSubtype, setSelectedSubtype] = useState<string>('all');
  const [selectedTechnique, setSelectedTechnique] = useState<'kadhwa' | 'tanchoi' | 'meenakari' | 'tissue'>('kadhwa');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');

  const brocadeProducts = useMemo(() => {
    return TEXTILE_PRODUCTS.filter(p => p.category === 'brocades').filter(p => {
      if (selectedSubtype === 'all') return true;
      if (selectedSubtype === 'menswear') return p.suitableFor.some(s => s.toLowerCase().includes('sherwani') || s.toLowerCase().includes('achkan'));
      if (selectedSubtype === 'bridal') return p.suitableFor.some(s => s.toLowerCase().includes('bridal') || s.toLowerCase().includes('lehenga'));
      if (selectedSubtype === 'kadhwa') return p.weaveType.toLowerCase().includes('kadhwa');
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      return 0;
    });
  }, [selectedSubtype, sortBy]);

  const handleOrderSwatchBinder = () => {
    const primaryBrocade = TEXTILE_PRODUCTS.find(p => p.id === 'prod-banarasi-katan-brocade') || TEXTILE_PRODUCTS[0];
    onAddToCart({
      ...primaryBrocade,
      id: 'bundle-brocade-swatch-binder',
      name: 'Curated Brocade Master Swatch Binder (8 Swatches)',
      price: 499,
      priceUnit: 'per piece',
    }, 1);
  };

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#1C2B4B] font-semibold">Pure Silk Brocades Archive</span>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#1F1916] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden border border-stone-800 shadow-xl">
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold mb-3">
            <span>Varanasi Pit Looms</span>
            <span aria-hidden="true">·</span>
            <span>Est. 1997</span>
            <span aria-hidden="true">·</span>
            <span>Silk Mark Certified</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Banarasi & Tanchoi Brocades Archive
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
            Hand-interlocked Kadhwa weaves, royal menswear Tanchoi floats, and luminous tissue zari brocades. Woven with pure mulberry silk filaments and certified electroplated gold zari for generational heirlooms.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleOrderSwatchBinder}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C2B4B] hover:bg-[#14223A] rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <BookOpen className="w-4 h-4 text-[#D8B26E]" />
              <span>Order 8-Swatch Brocade Binder (₹499)</span>
            </button>
            <button
              type="button"
              onClick={onOpenCalculator}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-stone-200 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
            >
              Sherwani & Lehenga Yardage Calculator
            </button>
          </div>
        </div>

        {/* Decorative corner seal */}
        <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#1C2B4B]/10 rounded-full blur-2xl pointer-events-none" />
      </div>

      {/* Interactive Weave Classification Guide */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs mb-12">
        <div className="max-w-xl mb-6">
          <span className="text-xs uppercase tracking-widest text-[#1C2B4B] font-semibold block mb-1">
            Artisan Guide
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916]">
            Understanding Historic Brocade Weaving Techniques
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Select a technique below to understand how the warp and weft intersect on traditional pit looms.
          </p>
        </div>

        {/* Technique Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {[
            { id: 'kadhwa', name: 'Kadhwa Weave', tag: 'Hand-locked Butis' },
            { id: 'tanchoi', name: 'Tanchoi Floatless', tag: 'Zero Loose Threads' },
            { id: 'meenakari', name: 'Meenakari Inset', tag: 'Jewel Resham' },
            { id: 'tissue', name: 'Tissue Zari', tag: 'Liquid Metallic' },
          ].map(tech => (
            <button
              key={tech.id}
              type="button"
              onClick={() => setSelectedTechnique(tech.id as any)}
              className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                selectedTechnique === tech.id
                  ? 'border-[#1C2B4B] bg-[#1C2B4B]/5 font-semibold text-stone-900 ring-1 ring-[#1C2B4B]'
                  : 'border-stone-200 text-stone-600 hover:border-stone-400 bg-white'
              }`}
            >
              <p className="font-bold text-stone-900">{tech.name}</p>
              <p className="text-[10px] text-stone-500 mt-0.5">{tech.tag}</p>
            </button>
          ))}
        </div>

        {/* Selected Technique Details */}
        <div className="bg-[#FAF8F5] p-5 rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
          {selectedTechnique === 'kadhwa' && (
            <div>
              <h3 className="font-bold text-sm text-[#1F1916] mb-1">The Kadhwa Handloom Tradition</h3>
              <p>In authentic Kadhwa weaving, each motif is individually crafted on the loom by hand. Unlike commercial jacquard with loose backside floating threads that can snag, Kadhwa motifs are self-locked into the warp. It requires two weavers up to 4 weeks per 10 meters, resulting in a cleaner reverse and unparalleled durability.</p>
            </div>
          )}
          {selectedTechnique === 'tanchoi' && (
            <div>
              <h3 className="font-bold text-sm text-[#1F1916] mb-1">Tanchoi Multi-Color Floatless Technique</h3>
              <p>Introduced by three Parsi brothers trained in China and mastered in Varanasi. Tanchoi interweaves fine silk warps with multiple tinted wefts so that the front surface resembles an oil painting while the reverse is entirely smooth without loose floats. Ideal for royal sherwanis, achkans, and high-movement garments.</p>
            </div>
          )}
          {selectedTechnique === 'meenakari' && (
            <div>
              <h3 className="font-bold text-sm text-[#1F1916] mb-1">Meenakari Enamel Inset Embroidery</h3>
              <p>Replicating royal Rajasthani and Mughal enamel jewellery art. Dyed pure silk resham threads (ruby, turquoise, leaf green) are inlaid into the gold zari floral frames during weaving, producing radiant color highlights on dark grounds.</p>
            </div>
          )}
          {selectedTechnique === 'tissue' && (
            <div>
              <h3 className="font-bold text-sm text-[#1F1916] mb-1">Banarasi Metallic Tissue</h3>
              <p>The warp is strung with gossamer 100% pure silk yarns while the entire weft is made of micro-fine tested electroplated gold zari wire. Produces a fluid, liquid-gold reflection under banquet chandeliers that drapes gracefully without stiffness.</p>
            </div>
          )}
        </div>
      </div>

      {/* Filter and Sort Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
        <div className="flex items-center gap-1.5 overflow-x-auto text-xs">
          {[
            { id: 'all', label: 'All Brocades' },
            { id: 'kadhwa', label: 'Kadhwa Handloom' },
            { id: 'bridal', label: 'Bridal Lehengas & Blouses' },
            { id: 'menswear', label: 'Sherwanis & Achkans' },
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

        <div className="flex items-center gap-2 text-xs">
          <span className="text-stone-500">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-stone-300 rounded-lg px-2.5 py-1 text-xs text-stone-700"
          >
            <option value="featured">Featured Weaves</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
      </div>

      {/* Brocades Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {brocadeProducts.map(product => (
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

      {/* Swatch Sample Box Promotion */}
      <div className="bg-[#FAF8F5] border border-stone-300 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#1C2B4B] flex items-center justify-center text-[#D8B26E] shrink-0">
            <Layers className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-serif font-bold text-[#1F1916]">
              Ordering for an Atelier or Designer Collection?
            </h3>
            <p className="text-xs text-stone-600 mt-1 max-w-xl">
              Get our complete Brocade Hardbound Swatch Folder containing 8 master weave swatches with GSM tags, width certifications, and wholesale price sheets dispatched to your studio.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={handleOrderSwatchBinder}
          className="px-5 py-2.5 bg-[#1F1916] hover:bg-[#1C2B4B] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors shrink-0 shadow-sm"
        >
          Add Swatch Folder to Bag (₹499)
        </button>
      </div>

    </div>
  );
};
