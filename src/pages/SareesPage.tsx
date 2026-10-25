import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { TEXTILE_PRODUCTS } from '../data/textilesData';
import { Product } from '../types';
import { Sparkles, Video, CheckCircle2, Scissors, ShieldCheck, ArrowRight } from 'lucide-react';

interface SareesPageProps {
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onOrderSwatch: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
}

export const SareesPage: React.FC<SareesPageProps> = ({
  currency,
  onQuickView,
  onOrderSwatch,
  onAddToCart,
  onNavigateHome,
  onOpenConsultation,
}) => {
  const [selectedOccasion, setSelectedOccasion] = useState<string>('all');
  const [activeDrapeTab, setActiveDrapeTab] = useState<'nivi' | 'seedha' | 'atpoure' | 'belted'>('nivi');
  const [includeFallPico, setIncludeFallPico] = useState<boolean>(true);

  const sareeProducts = useMemo(() => {
    return TEXTILE_PRODUCTS.filter(p => p.category === 'sarees').filter(p => {
      if (selectedOccasion === 'all') return true;
      if (selectedOccasion === 'bridal') return p.suitableFor.some(s => s.toLowerCase().includes('bridal') || s.toLowerCase().includes('muhuratham') || s.toLowerCase().includes('pheras'));
      if (selectedOccasion === 'reception') return p.suitableFor.some(s => s.toLowerCase().includes('reception') || s.toLowerCase().includes('cocktail'));
      return true;
    });
  }, [selectedOccasion]);

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">Virasat Heritage Saree Collection</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-[#1F1916] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden border border-stone-800 shadow-xl">
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold mb-3">
            <span>Pure Handloom Sarees</span>
            <span aria-hidden="true">·</span>
            <span>5.5m Saree + 1m Blouse Included</span>
            <span aria-hidden="true">·</span>
            <span>Silk Mark Certified</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Virasat Heritage Saree Collection
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
            Drape generational majesty. From pure Varanasi Kadhwa Katan silks with Shikargah tapestries to south Indian Korvai temple borders and weightless Khaddi georgettes. Each saree represents over 160 hours of continuous loom craftsmanship.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#9B1D2C] hover:bg-[#7A1C28] rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <Video className="w-4 h-4 text-[#D8B26E]" />
              <span>Book 1-on-1 Video Draping</span>
            </button>
            <div className="text-xs text-stone-300 flex items-center gap-1.5 px-3 py-2 bg-stone-900/60 rounded-lg border border-stone-800">
              <ShieldCheck className="w-4 h-4 text-[#D8B26E]" />
              <span>Free Pre-Stitched Fall & Pico Included</span>
            </div>
          </div>
        </div>
      </div>

      {/* Draping & Styling Visual Guide */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs mb-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <span className="text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold block mb-1">
              Styling Atelier
            </span>
            <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916]">
              How to Drape & Style Your Bhasin Heritage Saree
            </h2>
          </div>
          <button
            type="button"
            onClick={onOpenConsultation}
            className="text-xs text-[#9B1D2C] hover:underline font-semibold flex items-center gap-1"
          >
            <span>Need personalized styling? Ask our Draper</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Drape Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
          {[
            { id: 'nivi', title: 'Classic Nivi Drape', desc: 'Universal royal pleats' },
            { id: 'seedha', title: 'Seedha Pallu', desc: 'Highlights front zari pallu' },
            { id: 'atpoure', title: 'Bengali Atpoure', desc: 'Broad pleats with key ornament' },
            { id: 'belted', title: 'Contemporary Belted', desc: 'Sculpted waistline silhouette' },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveDrapeTab(tab.id as any)}
              className={`p-3 rounded-xl border text-left text-xs transition-all cursor-pointer ${
                activeDrapeTab === tab.id
                  ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 font-semibold text-stone-900 ring-1 ring-[#9B1D2C]'
                  : 'border-stone-200 text-stone-600 hover:border-stone-400 bg-white'
              }`}
            >
              <p className="font-bold text-stone-900">{tab.title}</p>
              <p className="text-[10px] text-stone-500 mt-0.5">{tab.desc}</p>
            </button>
          ))}
        </div>

        {/* Drape Description */}
        <div className="bg-[#FAF8F5] p-5 rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
          {activeDrapeTab === 'nivi' && (
            <p><strong>The Classic Nivi:</strong> Originating from Andhra Pradesh and popularized as India’s national drape. 6–7 even pleats gathered at the center waist, tucked in snugly, with the pallu draped gracefully over the left shoulder. Accentuates the fluid weight of our Katan and Kanjivaram silks.</p>
          )}
          {activeDrapeTab === 'seedha' && (
            <p><strong>The Gujarati Seedha Pallu:</strong> Pleats tucked at center waist, but the pallu is brought from the back over the right shoulder and pinned across the chest. This is the premier drape to display intricate Meenakari or Shikargah pallu tapestries in wedding photography.</p>
          )}
          {activeDrapeTab === 'atpoure' && (
            <p><strong>The Royal Bengali Atpoure:</strong> Wide box pleats with the pallu brought around both shoulders and finished with an antique silver or gold ornamental key chain (chabi-guchha). Ideal for heavy Katan silks and ceremonial pujas.</p>
          )}
          {activeDrapeTab === 'belted' && (
            <p><strong>Contemporary Belted Drape:</strong> Nivi pleats secured with a matching hand-embroidered raw silk kamardhani (waistbelt). Creates an elongating architectural silhouette for evening cocktail receptions.</p>
          )}
        </div>
      </div>

      {/* Filter Tabs for Sarees */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
        <div className="flex items-center gap-1.5 text-xs overflow-x-auto">
          {[
            { id: 'all', label: 'All Heritage Sarees' },
            { id: 'bridal', label: 'Bridal & Muhuratham' },
            { id: 'reception', label: 'Reception & Sangeet' },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedOccasion(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedOccasion === tab.id
                  ? 'bg-[#1F1916] text-[#D8B26E] font-semibold'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Fall & Pico toggle */}
        <div className="flex items-center gap-2 text-xs text-stone-700">
          <input
            type="checkbox"
            id="fallPico"
            checked={includeFallPico}
            onChange={(e) => setIncludeFallPico(e.target.checked)}
            className="rounded text-[#9B1D2C] focus:ring-[#9B1D2C]"
          />
          <label htmlFor="fallPico" className="cursor-pointer">
            Include Fall & Hand-Rolled Pico (+₹0 Free)
          </label>
        </div>
      </div>

      {/* Saree Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {sareeProducts.map(product => (
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

      {/* Blouse Stitching Assistance Box */}
      <div className="bg-gradient-to-r from-[#1F1916] to-[#361318] text-[#FAF8F5] rounded-2xl p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <span className="text-[#D8B26E] text-xs font-semibold uppercase tracking-widest block mb-1">
            Bespoke Blouse Tailoring
          </span>
          <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
            Every Saree Includes an Unstitched 1-Meter Brocade Blouse Piece
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed font-light">
            Need custom padding, princess cut, sweetheart neckline, or elbow sleeve zardozi border placement? Our Delhi master tailors can tailor your blouse to your exact measurements before dispatch.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenConsultation}
          className="px-6 py-3.5 bg-[#FAF8F5] text-[#1F1916] hover:bg-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm shrink-0 flex items-center gap-2 cursor-pointer"
        >
          <Scissors className="w-4 h-4 text-[#9B1D2C]" />
          <span>Consult Blouse Master</span>
        </button>
      </div>

    </div>
  );
};
