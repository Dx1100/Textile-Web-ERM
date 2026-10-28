import React, { useState } from 'react';
import { X, Star, ShoppingBag, Layers, MessageSquare, ShieldCheck, Check, Sparkles, Plus, Minus, Ruler } from 'lucide-react';
import { Product, ProductColor } from '../types';
import { FabricTextureViewer } from './FabricTextureViewer';

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  currency: 'INR' | 'USD';
  onAddToCart: (product: Product, quantity: number, selectedColor: string, isSwatch: boolean) => void;
  onOpenCalculator: () => void;
  onOpenWholesale: () => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  currency,
  onAddToCart,
  onOpenCalculator,
  onOpenWholesale,
}) => {
  if (!product) return null;

  const [selectedColor, setSelectedColor] = useState<ProductColor>(
    product.availableColors[0] || { name: product.colorName, hex: product.colorHex }
  );
  const [purchaseMode, setPurchaseMode] = useState<'meters' | 'swatch'>(
    product.priceUnit === 'per meter' ? 'meters' : 'meters'
  );
  const [meterQuantity, setMeterQuantity] = useState<number>(
    product.priceUnit === 'per meter' ? 2.5 : 1
  );
  const [addedNotice, setAddedNotice] = useState(false);

  const formatPrice = (amount: number) => {
    if (currency === 'USD') {
      return `$${Math.round(amount / 86)}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const unitPrice = purchaseMode === 'swatch' ? product.swatchPrice : product.price;
  const totalPrice = purchaseMode === 'swatch' ? product.swatchPrice : Math.round(unitPrice * meterQuantity);

  const handleAddToCart = () => {
    onAddToCart(product, purchaseMode === 'swatch' ? 1 : meterQuantity, selectedColor.name, purchaseMode === 'swatch');
    setAddedNotice(true);
    setTimeout(() => setAddedNotice(false), 2500);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Shree Durga Agency! I am inquiring about "${product.name}" (${product.id}) in color "${selectedColor.name}". ` +
      `I am interested in ${purchaseMode === 'swatch' ? 'ordering a swatch sample' : `${meterQuantity} meters / pieces`}. ` +
      `Could you please confirm current batch availability and dispatch time?`
    );
    window.open(`https://wa.me/919811054321?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-4xl w-full shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 text-stone-400 hover:text-stone-800 bg-white/80 hover:bg-white rounded-full transition-colors shadow-xs"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-12 max-h-[85vh] overflow-y-auto">
          
          {/* Left Column: Visual Texture Viewer & Micro Weave Inspection */}
          <div className="md:col-span-6 bg-stone-100 flex flex-col justify-between p-6 border-b md:border-b-0 md:border-r border-stone-200">
            <div>
              <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-md border border-stone-200 mb-4">
                <FabricTextureViewer
                  texture={product.texturePattern}
                  colorHex={selectedColor.hex}
                  colorName={selectedColor.name}
                  weaveName={product.weaveType}
                  gsm={product.gsm}
                  className="w-full h-full"
                  allowZoom={true}
                />
              </div>

              {/* Color variant thumbnail selection */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-stone-600 mb-2">
                  Selected Color: <span className="text-stone-900">{selectedColor.name}</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.availableColors.map((col, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setSelectedColor(col)}
                      className={`flex items-center gap-2 px-2.5 py-1.5 rounded-lg border text-xs transition-all cursor-pointer ${
                        selectedColor.name === col.name
                          ? 'border-[#1C2B4B] bg-white ring-1 ring-[#1C2B4B] shadow-2xs font-semibold text-stone-900'
                          : 'border-stone-200 bg-stone-50 hover:bg-white text-stone-600'
                      }`}
                    >
                      <span className="w-3.5 h-3.5 rounded-full border border-stone-300" style={{ backgroundColor: col.hex }} />
                      <span>{col.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Silk Mark & Authenticity Guarantee */}
            <div className="mt-6 pt-4 border-t border-stone-200 flex items-center gap-3 text-stone-600 text-xs">
              <ShieldCheck className="w-5 h-5 text-[#143D36] shrink-0" />
              <div>
                <p className="font-semibold text-stone-900">Authentic Sourcing & Quality Inspection</p>
                <p className="text-[11px] text-stone-500">Quality tested for color fastness, thread density & finish.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Contiguous Purchase Module & Specifications */}
          <div className="md:col-span-6 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              {/* Category & Rating */}
              <div className="flex items-center justify-between text-xs text-stone-500 uppercase tracking-wider mb-1 font-medium">
                <span>{product.subcategory}</span>
                <span className="flex items-center gap-1 text-stone-800">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span className="tabular-nums font-bold">{product.rating}</span>
                  <span className="text-stone-400">({product.reviewsCount} reviews)</span>
                </span>
              </div>

              {/* Title & Subtitle */}
              <h2 className="text-2xl font-serif font-bold text-[#1F1916] leading-snug mb-2">
                {product.name}
              </h2>
              <p className="text-xs text-stone-600 mb-5 leading-relaxed">
                {product.description}
              </p>

              {/* Purchase Mode Segmented Control (Fabric Meters vs Swatch) */}
              {product.priceUnit === 'per meter' && (
                <div className="mb-5">
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-2">
                    Purchase Option
                  </label>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-stone-100 rounded-lg">
                    <button
                      type="button"
                      onClick={() => setPurchaseMode('meters')}
                      className={`py-2 px-3 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                        purchaseMode === 'meters'
                          ? 'bg-white text-stone-900 shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      Buy by Meter ({formatPrice(product.price)}/m)
                    </button>

                    <button
                      type="button"
                      onClick={() => setPurchaseMode('swatch')}
                      className={`py-2 px-3 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                        purchaseMode === 'swatch'
                          ? 'bg-white text-stone-900 shadow-xs'
                          : 'text-stone-600 hover:text-stone-900'
                      }`}
                    >
                      Order Swatch ({formatPrice(product.swatchPrice)})
                    </button>
                  </div>
                </div>
              )}

              {/* Meter Quantity Stepper or Swatch Explanation */}
              {purchaseMode === 'meters' && product.priceUnit === 'per meter' ? (
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider font-semibold text-stone-700">
                      Select Yardage (Meters)
                    </label>
                    <button
                      type="button"
                      onClick={onOpenCalculator}
                      className="text-xs text-[#1C2B4B] hover:underline flex items-center gap-1 font-medium"
                    >
                      <Ruler className="w-3 h-3" />
                      <span>Not sure? Open Yardage Calculator</span>
                    </button>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex items-center border border-stone-300 rounded-lg overflow-hidden bg-white">
                      <button
                        type="button"
                        onClick={() => setMeterQuantity(Math.max(1, Number((meterQuantity - 0.5).toFixed(1))))}
                        className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="w-16 text-center text-sm font-semibold text-stone-900 tabular-nums">
                        {meterQuantity}m
                      </span>
                      <button
                        type="button"
                        onClick={() => setMeterQuantity(Number((meterQuantity + 0.5).toFixed(1)))}
                        className="px-3 py-2 text-stone-600 hover:bg-stone-100 transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    {/* Quick Presets */}
                    <div className="flex items-center gap-1.5 text-xs">
                      {[1, 2.5, 5, 8].map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => setMeterQuantity(m)}
                          className={`px-2.5 py-1.5 rounded-md border text-xs font-medium transition-colors ${
                            meterQuantity === m
                              ? 'bg-stone-900 text-white border-stone-900'
                              : 'bg-stone-50 border-stone-200 text-stone-700 hover:bg-stone-100'
                          }`}
                        >
                          {m}m
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : purchaseMode === 'swatch' ? (
                <div className="mb-5 p-3 bg-stone-50 border border-stone-200 rounded-xl text-xs text-stone-800">
                  <p className="font-semibold mb-0.5 text-[#143D36]">Physical Tactile Swatch Sample (10×10 cm)</p>
                  <p className="text-[11px] text-stone-600">Delivered within 3–5 working days so you can verify color tone, weight, handfeel, and luster before placing bulk orders.</p>
                </div>
              ) : null}

              {/* Technical Specifications Accordion / Grid */}
              <div className="border-t border-b border-stone-200 py-3 mb-6">
                <p className="text-[11px] uppercase tracking-wider font-bold text-stone-700 mb-2.5">
                  Technical Specifications
                </p>
                <div className="grid grid-cols-2 gap-y-2 gap-x-4 text-xs">
                  <div>
                    <span className="text-stone-400 block text-[10px]">COMPOSITION</span>
                    <span className="font-medium text-stone-800">{product.composition}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">WIDTH</span>
                    <span className="font-medium text-stone-800">{product.width}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">FABRIC WEIGHT (GSM)</span>
                    <span className="font-medium text-stone-800 tabular-nums">{product.gsm} GSM</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">WEAVE TYPE</span>
                    <span className="font-medium text-stone-800">{product.weaveType}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">TRANSPARENCY</span>
                    <span className="font-medium text-stone-800">{product.transparency}</span>
                  </div>
                  <div>
                    <span className="text-stone-400 block text-[10px]">CARE</span>
                    <span className="font-medium text-stone-800">{product.care}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Actions: Subtotal + Add to Cart + WhatsApp */}
            <div>
              <div className="flex items-baseline justify-between mb-4">
                <div>
                  <span className="text-xs text-stone-500 uppercase tracking-wide">Total Amount:</span>
                  <p className="text-2xl font-serif font-bold text-[#1E293B] tabular-nums">
                    {formatPrice(totalPrice)}
                  </p>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-stone-500 block">Dispatch in 24–48 Hours</span>
                  <span className="text-[11px] text-emerald-700 font-medium">Free Shipping Above ₹2,999</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#1C2B4B] hover:bg-[#14223A] text-white rounded-lg font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                >
                  {addedNotice ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-300" />
                      <span>Added to Bag!</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>{purchaseMode === 'swatch' ? 'Order Swatch' : 'Add to Bag'}</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInquiry}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#143D36] hover:bg-[#0E2E28] text-white rounded-lg font-semibold text-xs tracking-wider uppercase transition-colors shadow-sm cursor-pointer"
                  title="Direct WhatsApp chat with fabric master"
                >
                  <MessageSquare className="w-4 h-4 text-[#D8B26E]" />
                  <span>WhatsApp Inquiry</span>
                </button>
              </div>

              {/* Wholesale banner link */}
              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={() => {
                    onClose();
                    onOpenWholesale();
                  }}
                  className="text-xs text-stone-500 hover:text-stone-800 underline underline-offset-2"
                >
                  Need 50+ meters for boutique production or export? Request Wholesale Rate →
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
