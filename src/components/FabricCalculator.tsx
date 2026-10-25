import React, { useState } from 'react';
import { Scissors, Sparkles, Plus, Check, ShoppingBag, ArrowRight, X } from 'lucide-react';
import { GARMENT_CALCULATOR_PRESETS, TEXTILE_PRODUCTS } from '../data/textilesData';
import { Product } from '../types';

interface FabricCalculatorProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
  onAddCustomKitToCart: (product: Product, meters: number, liningMeters: number) => void;
}

export const FabricCalculator: React.FC<FabricCalculatorProps> = ({
  isOpen,
  onClose,
  currency,
  onAddCustomKitToCart,
}) => {
  const [selectedPresetId, setSelectedPresetId] = useState(GARMENT_CALCULATOR_PRESETS[0].id);
  const [heightMultiplier, setHeightMultiplier] = useState<'standard' | 'tall' | 'extra_flare'>('standard');
  const [selectedProductId, setSelectedProductId] = useState(TEXTILE_PRODUCTS[0].id);
  const [includeLining, setIncludeLining] = useState(true);
  const [copiedSummary, setCopiedSummary] = useState(false);

  if (!isOpen) return null;

  const currentPreset = GARMENT_CALCULATOR_PRESETS.find(p => p.id === selectedPresetId) || GARMENT_CALCULATOR_PRESETS[0];
  const selectedProduct = TEXTILE_PRODUCTS.find(p => p.id === selectedProductId) || TEXTILE_PRODUCTS[0];

  // Calculations
  let multiplier = 1.0;
  if (heightMultiplier === 'tall') multiplier = 1.15;
  if (heightMultiplier === 'extra_flare') multiplier = 1.35;

  const calculatedFabricMeters = Number((currentPreset.baseMeters * multiplier).toFixed(2));
  const calculatedLiningMeters = includeLining ? Number((currentPreset.liningMeters * multiplier).toFixed(2)) : 0;
  
  // Costs
  const liningPricePerMeter = 250; // Standard premium santoon/crepe lining
  const fabricUnitCost = selectedProduct.priceUnit === 'per meter' ? selectedProduct.price : Math.round(selectedProduct.price / 5.5);
  const totalFabricCost = calculatedFabricMeters * fabricUnitCost;
  const totalLiningCost = calculatedLiningMeters * liningPricePerMeter;
  const grandTotal = totalFabricCost + totalLiningCost;

  const formatPrice = (amount: number) => {
    if (currency === 'USD') {
      return `$${Math.round(amount / 86)}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const handleCopySummary = () => {
    const summary = `BHASIN TEXTILES - TAILOR SPECIFICATION\n` +
      `Silhoutte: ${currentPreset.name}\n` +
      `Fabric Required: ${calculatedFabricMeters} meters (${selectedProduct.name})\n` +
      `Lining Required: ${calculatedLiningMeters} meters (Premium Santoon/Crepe)\n` +
      `Border / Lace: ${currentPreset.borderMeters} meters\n` +
      `Estimated Fabric Cost: ${formatPrice(grandTotal)}\n` +
      `Bhasin Textiles Chandni Chowk / Faridabad | +91 98110 54321`;
    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#1F1916] text-[#FAF8F5] p-6 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9B1D2C] flex items-center justify-center text-[#D8B26E] shadow-inner">
              <Scissors className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold tracking-wide">Bhasin Fabric & Yardage Calculator</h2>
              <p className="text-xs text-stone-300">Precise meters & lining requirements for Indian ethnic silhouettes</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          
          {/* 1. Garment Silhouette Selector */}
          <div>
            <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
              1. Select Garment Silhouette
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {GARMENT_CALCULATOR_PRESETS.map((preset) => (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setSelectedPresetId(preset.id)}
                  className={`text-left p-3 rounded-xl border text-xs transition-all cursor-pointer ${
                    selectedPresetId === preset.id
                      ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 text-[#1F1916] ring-1 ring-[#9B1D2C]'
                      : 'border-stone-200 hover:border-stone-400 text-stone-600 bg-white'
                  }`}
                >
                  <p className="font-semibold text-stone-900 truncate">{preset.name}</p>
                  <p className="text-[11px] text-stone-500 mt-0.5 line-clamp-1">{preset.description}</p>
                </button>
              ))}
            </div>
          </div>

          {/* 2. Height & Volume Preferences */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                2. Flare / Height Scale
              </label>
              <div className="flex rounded-lg border border-stone-200 p-1 bg-stone-50 text-xs">
                <button
                  type="button"
                  onClick={() => setHeightMultiplier('standard')}
                  className={`flex-1 py-1.5 rounded-md font-medium transition-all ${
                    heightMultiplier === 'standard' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Standard (5'2"–5'5")
                </button>
                <button
                  type="button"
                  onClick={() => setHeightMultiplier('tall')}
                  className={`flex-1 py-1.5 rounded-md font-medium transition-all ${
                    heightMultiplier === 'tall' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Tall (5'6"+)
                </button>
                <button
                  type="button"
                  onClick={() => setHeightMultiplier('extra_flare')}
                  className={`flex-1 py-1.5 rounded-md font-medium transition-all ${
                    heightMultiplier === 'extra_flare' ? 'bg-white shadow-xs text-stone-900' : 'text-stone-500 hover:text-stone-900'
                  }`}
                >
                  Royal 8m Ghera
                </button>
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                3. Choose Fabric from Catalog
              </label>
              <select
                value={selectedProductId}
                onChange={(e) => setSelectedProductId(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-stone-200 bg-white text-xs font-medium text-stone-800 focus:outline-none focus:ring-1 focus:ring-[#9B1D2C]"
              >
                {TEXTILE_PRODUCTS.filter(p => p.priceUnit === 'per meter').map((product) => (
                  <option key={product.id} value={product.id}>
                    {product.name} ({formatPrice(product.price)}/m)
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Include Lining Toggle */}
          <div className="flex items-center justify-between p-3 bg-[#FAF8F5] rounded-xl border border-stone-200/80">
            <div>
              <p className="text-xs font-semibold text-stone-800">Include Matching Santoon/Crepe Lining Fabric</p>
              <p className="text-[11px] text-stone-500">Essential for structure, fall, and opacity ({formatPrice(liningPricePerMeter)}/meter)</p>
            </div>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={includeLining}
                onChange={(e) => setIncludeLining(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-stone-300 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#9B1D2C]"></div>
            </label>
          </div>

          {/* 4. Yardage & Cost Calculation Breakdown */}
          <div className="bg-[#1F1916] text-[#FAF8F5] p-5 rounded-xl border border-stone-800">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center divide-x divide-stone-800/80">
              <div className="px-2">
                <span className="text-[11px] text-stone-400 uppercase tracking-wide">Main Fabric</span>
                <p className="text-2xl font-serif font-bold text-[#D8B26E] mt-1 tabular-nums">
                  {calculatedFabricMeters} <span className="text-xs font-sans text-stone-300 font-normal">meters</span>
                </p>
                <span className="text-[11px] text-stone-400 mt-0.5 block">{formatPrice(totalFabricCost)}</span>
              </div>

              <div className="px-2">
                <span className="text-[11px] text-stone-400 uppercase tracking-wide">Inner Lining</span>
                <p className="text-2xl font-serif font-bold text-stone-200 mt-1 tabular-nums">
                  {calculatedLiningMeters} <span className="text-xs font-sans text-stone-300 font-normal">meters</span>
                </p>
                <span className="text-[11px] text-stone-400 mt-0.5 block">{includeLining ? formatPrice(totalLiningCost) : 'Excluded'}</span>
              </div>

              <div className="px-2">
                <span className="text-[11px] text-stone-400 uppercase tracking-wide">Border / Lace</span>
                <p className="text-2xl font-serif font-bold text-stone-200 mt-1 tabular-nums">
                  {currentPreset.borderMeters} <span className="text-xs font-sans text-stone-300 font-normal">meters</span>
                </p>
                <span className="text-[11px] text-stone-400 mt-0.5 block">Hem & Sleeves</span>
              </div>

              <div className="px-2">
                <span className="text-[11px] text-[#D8B26E] uppercase tracking-wide font-medium">Estimated Total</span>
                <p className="text-2xl font-serif font-bold text-white mt-1 tabular-nums">
                  {formatPrice(grandTotal)}
                </p>
                <span className="text-[11px] text-stone-400 mt-0.5 block">Fabric + Lining</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
            <button
              type="button"
              onClick={handleCopySummary}
              className="px-4 py-2.5 rounded-lg border border-stone-300 hover:border-stone-500 text-xs font-medium text-stone-700 bg-white transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              {copiedSummary ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600" />
                  <span className="text-emerald-700">Specification Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Scissors className="w-4 h-4 text-stone-500" />
                  <span>Copy Tailor Specification</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => {
                onAddCustomKitToCart(selectedProduct, calculatedFabricMeters, calculatedLiningMeters);
                onClose();
              }}
              className="flex items-center gap-2 px-6 py-2.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#9B1D2C] hover:bg-[#7A1C28] rounded-lg transition-colors shadow-sm cursor-pointer ml-auto"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Add Complete Kit to Bag ({formatPrice(grandTotal)})</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
