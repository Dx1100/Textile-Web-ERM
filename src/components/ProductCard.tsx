import React from 'react';
import { Star, ShoppingBag, Eye, Layers } from 'lucide-react';
import { Product } from '../types';
import { FabricTextureViewer } from './FabricTextureViewer';

interface ProductCardProps {
  product: Product;
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onOrderSwatch: (product: Product) => void;
  onAddToCart: (product: Product, meters: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  currency,
  onQuickView,
  onOrderSwatch,
  onAddToCart,
}) => {
  const formatPrice = (amount: number) => {
    if (currency === 'USD') {
      return `$${Math.round(amount / 86)}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  return (
    <div 
      className="group bg-white rounded-xl border border-stone-200/80 overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-lg relative"
    >
      {/* Visual Canvas Container (65%-70% height emphasis) */}
      <div 
        onClick={() => onQuickView(product)}
        className="relative aspect-[4/3] w-full overflow-hidden cursor-pointer bg-stone-100"
      >
        <FabricTextureViewer
          texture={product.texturePattern}
          colorHex={product.colorHex}
          colorName={product.colorName}
          weaveName={product.weaveType}
          gsm={product.gsm}
          className="w-full h-full"
          allowZoom={false}
        />

        {/* Quiet Single Text Tag if applicable (Zero-Pill discipline: no candy capsule badges) */}
        {product.isMasterWeave && (
          <div className="absolute top-3 left-3 bg-[#1F1916]/90 backdrop-blur-xs text-[#D8B26E] text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-xs">
            Master Weave
          </div>
        )}
        {!product.isMasterWeave && product.isBestseller && (
          <div className="absolute top-3 left-3 bg-[#143D36]/90 backdrop-blur-xs text-white text-[10px] font-semibold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-xs">
            Bestseller
          </div>
        )}

        {/* Quick View overlay on hover */}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
          <div className="px-3.5 py-2 bg-white/95 backdrop-blur-sm text-[#1E293B] text-xs font-semibold rounded-md shadow-md flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
            <Eye className="w-3.5 h-3.5" />
            <span>Inspect Fabric & Specs</span>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-4 flex-1 flex flex-col justify-between">
        <div>
          {/* Category kicker */}
          <div className="flex items-center justify-between text-[11px] text-stone-500 uppercase tracking-wider mb-1 font-medium">
            <span>{product.subcategory}</span>
            <span className="flex items-center gap-1 text-stone-700">
              <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
              <span className="tabular-nums font-semibold">{product.rating}</span>
            </span>
          </div>

          {/* Product Title */}
          <h3 
            onClick={() => onQuickView(product)}
            className="text-base font-serif font-bold text-[#1E293B] hover:text-[#1C2B4B] transition-colors cursor-pointer line-clamp-1 mb-1"
          >
            {product.name}
          </h3>

          {/* Technical One-liner */}
          <p className="text-xs text-stone-500 line-clamp-1 mb-3">
            {product.composition} · {product.width}
          </p>

          {/* Color Swatch Dots */}
          <div className="flex items-center gap-1.5 mb-4">
            {product.availableColors.slice(0, 5).map((col, idx) => (
              <span
                key={idx}
                className="w-3 h-3 rounded-full border border-stone-300 shadow-2xs"
                style={{ backgroundColor: col.hex }}
                title={col.name}
              />
            ))}
            {product.availableColors.length > 5 && (
              <span className="text-[10px] text-stone-400">+{product.availableColors.length - 5}</span>
            )}
          </div>
        </div>

        {/* Price & Primary Buy Actions */}
        <div className="pt-3 border-t border-stone-100">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-1.5">
              <span className="text-base font-bold text-[#1E293B] tabular-nums font-serif">
                {formatPrice(product.price)}
              </span>
              <span className="text-[11px] text-stone-500">
                /{product.priceUnit === 'per meter' ? 'meter' : 'pc'}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-stone-400 line-through tabular-nums ml-1">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>

            {product.inStock ? (
              <span className="text-[11px] text-emerald-700 font-medium">In Stock</span>
            ) : (
              <span className="text-[11px] text-amber-700 font-medium">Pre-Order (14 Days)</span>
            )}
          </div>

          {/* Action Buttons Row */}
          <div className="grid grid-cols-2 gap-2">
            {product.swatchAvailable ? (
              <button
                type="button"
                onClick={() => onOrderSwatch(product)}
                className="px-2.5 py-2 text-[11px] font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center justify-center gap-1 truncate cursor-pointer"
                title="Order 10x10 cm tactile fabric swatch"
              >
                <Layers className="w-3 h-3 text-stone-500 shrink-0" />
                <span className="truncate">Swatch {formatPrice(product.swatchPrice)}</span>
              </button>
            ) : (
              <button
                type="button"
                onClick={() => onQuickView(product)}
                className="px-2.5 py-2 text-[11px] font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-md transition-colors flex items-center justify-center gap-1 truncate cursor-pointer"
              >
                <Eye className="w-3 h-3 text-stone-500 shrink-0" />
                <span className="truncate">View Specs</span>
              </button>
            )}

            <button
              type="button"
              onClick={() => onAddToCart(product, product.priceUnit === 'per meter' ? 1 : 1)}
              className="px-2.5 py-2 text-[11px] font-semibold text-white bg-[#1C2B4B] hover:bg-[#14223A] rounded-md transition-colors flex items-center justify-center gap-1 cursor-pointer truncate shadow-2xs"
            >
              <ShoppingBag className="w-3 h-3 shrink-0" />
              <span>{product.priceUnit === 'per meter' ? 'Add 1 Meter' : 'Add to Bag'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
