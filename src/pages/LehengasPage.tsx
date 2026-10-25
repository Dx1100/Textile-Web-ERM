import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { TEXTILE_PRODUCTS } from '../data/textilesData';
import { Product } from '../types';
import { Sparkles, Video, Crown, Scissors, CheckCircle2, Ruler } from 'lucide-react';

interface LehengasPageProps {
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onOrderSwatch: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
  onOpenCalculator: () => void;
}

export const LehengasPage: React.FC<LehengasPageProps> = ({
  currency,
  onQuickView,
  onOrderSwatch,
  onAddToCart,
  onNavigateHome,
  onOpenConsultation,
  onOpenCalculator,
}) => {
  const [selectedFabric, setSelectedFabric] = useState<string>('all');
  const [selectedGhera, setSelectedGhera] = useState<'standard' | 'royal'>('standard');
  const [includeCanCan, setIncludeCanCan] = useState<boolean>(true);

  const lehengaProducts = useMemo(() => {
    return TEXTILE_PRODUCTS.filter(p => p.category === 'lehengas').filter(p => {
      if (selectedFabric === 'all') return true;
      if (selectedFabric === 'velvet') return p.composition.toLowerCase().includes('velvet');
      if (selectedFabric === 'brocade') return p.composition.toLowerCase().includes('brocade') || p.name.toLowerCase().includes('brocade');
      if (selectedFabric === 'rawsilk') return p.composition.toLowerCase().includes('raw silk') || p.name.toLowerCase().includes('raw silk');
      return true;
    });
  }, [selectedFabric]);

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">Haute Couture Bridal & Festive Lehengas</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-[#1F1916] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden border border-stone-800 shadow-xl">
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold mb-3">
            <span>Chandni Chowk Couture</span>
            <span aria-hidden="true">·</span>
            <span>Hand Zardozi & Pit Loom Kalis</span>
            <span aria-hidden="true">·</span>
            <span>Double Can-Can Support</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Haute Couture Bridal Lehengas
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
            Designed for royal grandeur. Each ensemble includes an intricately crafted kalidar skirt with structured waistband, pure silk unstitched blouse piece with sleeve borders, and a gossamer 2.7-meter handwoven dupatta.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#9B1D2C] hover:bg-[#7A1C28] rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <Video className="w-4 h-4 text-[#D8B26E]" />
              <span>Book Virtual Bridal Consultation</span>
            </button>
            <button
              type="button"
              onClick={onOpenCalculator}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-stone-200 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
            >
              <Ruler className="w-4 h-4 text-[#D8B26E]" />
              <span>Compute Bespoke Yardage</span>
            </button>
          </div>
        </div>
      </div>

      {/* Flare & Architecture Studio */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-stone-200/90 shadow-xs mb-12">
        <div className="max-w-xl mb-6">
          <span className="text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold block mb-1">
            Bridal Silhouette Engineering
          </span>
          <h2 className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916]">
            The Bhasin Ghera & Flare Standard
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Every bride deserves a flawless twirl. Choose your preferred skirt volume and structure below:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
          <div 
            onClick={() => setSelectedGhera('standard')}
            className={`p-5 rounded-xl border text-xs cursor-pointer transition-all ${
              selectedGhera === 'standard' 
                ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 ring-1 ring-[#9B1D2C]' 
                : 'border-stone-200 hover:border-stone-400'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-[#1F1916]">Standard 5.5 Meter Ghera (16-Kali)</span>
              <span className="text-xs font-semibold text-[#9B1D2C]">Signature Cut</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              Balanced traditional flare that is comfortable to walk, sit for wedding rituals, and dance. Provides elegant natural folds with built-in canvas waistband and santoon lining.
            </p>
          </div>

          <div 
            onClick={() => setSelectedGhera('royal')}
            className={`p-5 rounded-xl border text-xs cursor-pointer transition-all ${
              selectedGhera === 'royal' 
                ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 ring-1 ring-[#9B1D2C]' 
                : 'border-stone-200 hover:border-stone-400'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-sm text-[#1F1916]">Royal 8.0 Meter Ghera (24-Kali)</span>
              <span className="text-xs font-semibold text-[#D8B26E]">Grandeur Twirl</span>
            </div>
            <p className="text-stone-600 leading-relaxed">
              360-degree dramatic ballroom volume for brides who desire an awe-inspiring royal entrance. Features extra kalis woven seamlessly to avoid excessive weight at the waist.
            </p>
          </div>
        </div>

        {/* Double Can-Can toggle */}
        <div className="flex items-center justify-between p-4 bg-[#FAF8F5] rounded-xl border border-stone-200 text-xs">
          <div>
            <p className="font-semibold text-stone-900">Include Double Stiff Can-Can & Buckram Hem Layering</p>
            <p className="text-stone-500 text-[11px]">Keeps the skirt flares evenly expanded without collapsing inward during steps.</p>
          </div>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={includeCanCan}
              onChange={(e) => setIncludeCanCan(e.target.checked)}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9B1D2C]"></div>
          </label>
        </div>
      </div>

      {/* Filter Tabs for Lehengas */}
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-stone-200">
        <div className="flex items-center gap-1.5 text-xs overflow-x-auto">
          {[
            { id: 'all', label: 'All Lehengas' },
            { id: 'velvet', label: 'Micro-Velvet 9000' },
            { id: 'brocade', label: 'Kadhwa Brocade Kalidar' },
            { id: 'rawsilk', label: 'Haute Raw Silk' },
          ].map(tab => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedFabric(tab.id)}
              className={`px-3.5 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                selectedFabric === tab.id
                  ? 'bg-[#1F1916] text-[#D8B26E] font-semibold'
                  : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Lehengas Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
        {lehengaProducts.map(product => (
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

      {/* Video Consultation Callout */}
      <div className="bg-[#FAF8F5] border border-stone-300 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-[#9B1D2C] flex items-center justify-center text-[#D8B26E] shrink-0">
            <Crown className="w-6 h-6" />
          </div>
          <div>
            <h3 className="text-base font-serif font-bold text-[#1F1916]">
              Planning Your Wedding Trousseau from USA, UK, or Dubai?
            </h3>
            <p className="text-xs text-stone-600 mt-1 max-w-xl">
              We arrange direct live HD video call draping sessions with our Chandni Chowk showroom specialists. See the velvet luster under ambient lighting, inspect needlework close-ups, and get custom measurements recorded.
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={onOpenConsultation}
          className="px-5 py-2.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors shrink-0 shadow-sm cursor-pointer"
        >
          Book Video Session
        </button>
      </div>

    </div>
  );
};
