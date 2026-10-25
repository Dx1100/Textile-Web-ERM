import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { FabricTextureViewer } from './FabricTextureViewer';

interface HeroProps {
  onExploreFabrics: () => void;
  onOpenCalculator: () => void;
  onOpenWholesale: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreFabrics,
  onOpenCalculator,
  onOpenWholesale,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-stone-200">
      {/* Subtle atmospheric heritage background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#F3EDE2] via-[#FAF8F5] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Intentional Prose */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Clean unboxed heritage kicker with typographic separator */}
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-4 font-medium">
              <span>Established 1997</span>
              <span aria-hidden="true">·</span>
              <span>Chandni Chowk, Delhi</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#9B1D2C] font-semibold">Master Handloom & Mill Weaves</span>
            </div>

            {/* Display Headline with text-wrap: balance */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-[#1F1916] leading-[1.12] tracking-tight mb-6" style={{ textWrap: 'balance' }}>
              Timeless Indian Weaves & Haute Couture Textiles.
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-8 font-light">
              Supplying premier fashion designers, bridal ateliers, and discerning connoisseurs worldwide with authentic Banarasi katan brocades, raw silks, Chanderi tissues, and handcrafted ethnic ensembles straight from master looms.
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-10">
              <button
                type="button"
                onClick={onExploreFabrics}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-white bg-[#9B1D2C] hover:bg-[#7A1C28] rounded-lg transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Explore Fabric Archive</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenCalculator}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium tracking-wider uppercase text-[#1F1916] bg-white border border-stone-300 hover:border-[#1F1916] hover:bg-stone-50 rounded-lg transition-colors cursor-pointer"
              >
                <span>Fabric Calculator</span>
              </button>

              <button
                type="button"
                onClick={onOpenWholesale}
                className="text-xs text-stone-600 hover:text-[#9B1D2C] transition-colors underline underline-offset-4 font-medium px-2 py-2"
              >
                Wholesale & Export Inquiry →
              </button>
            </div>

            {/* Editorial Heritage Credentials (Claim-to-Proof Adjacency) */}
            <div className="pt-6 border-t border-stone-200/90 w-full grid grid-cols-3 gap-4 text-stone-700">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916] tabular-nums">28+ Yrs</p>
                <p className="text-[11px] text-stone-500 uppercase tracking-wide mt-0.5">Weaving Legacy</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916] tabular-nums">50,000 m</p>
                <p className="text-[11px] text-stone-500 uppercase tracking-wide mt-0.5">Monthly Capacity</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916] tabular-nums">1,200+</p>
                <p className="text-[11px] text-stone-500 uppercase tracking-wide mt-0.5">Ateliers Supplied</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Focal Anchor & Tactile Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Layered Showcase Card */}
            <div className="relative bg-white p-3 rounded-2xl shadow-xl border border-stone-200/90">
              {/* Main Interactive Swatch Box */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-inner">
                <FabricTextureViewer
                  texture="zari-brocade"
                  colorHex="#143D36"
                  colorName="Royal Banarasi Emerald Gold Zari"
                  weaveName="Kadhwa Handloom Pit Loom"
                  gsm={135}
                  className="w-full h-full"
                />
              </div>

              {/* Curated Swatch Palette Strip */}
              <div className="mt-3 p-3 bg-[#FAF8F5] rounded-xl border border-stone-200/70">
                <div className="flex items-center justify-between text-xs text-stone-600 mb-2 font-medium">
                  <span className="flex items-center gap-1.5 text-stone-800">
                    <Sparkles className="w-3.5 h-3.5 text-[#D8B26E]" />
                    Featured Master Weave Swatches
                  </span>
                  <span className="text-[#9B1D2C] font-semibold text-[11px]">₹99 Sample Delivery</span>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  <div className="flex flex-col items-center gap-1">
                    <div className="w-full aspect-square rounded-lg border border-stone-300 overflow-hidden relative shadow-xs">
                      <div className="w-full h-full bg-[#143D36]" />
                    </div>
                    <span className="text-[10px] text-stone-600 truncate w-full text-center">Emerald</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-full aspect-square rounded-lg border border-stone-300 overflow-hidden relative shadow-xs">
                      <div className="w-full h-full bg-[#9B1D2C]" />
                    </div>
                    <span className="text-[10px] text-stone-600 truncate w-full text-center">Crimson</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-full aspect-square rounded-lg border border-stone-300 overflow-hidden relative shadow-xs">
                      <div className="w-full h-full bg-[#D8B26E]" />
                    </div>
                    <span className="text-[10px] text-stone-600 truncate w-full text-center">Antique Gold</span>
                  </div>

                  <div className="flex flex-col items-center gap-1">
                    <div className="w-full aspect-square rounded-lg border border-stone-300 overflow-hidden relative shadow-xs">
                      <div className="w-full h-full bg-[#521018]" />
                    </div>
                    <span className="text-[10px] text-stone-600 truncate w-full text-center">Velvet Wine</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Quality Seal */}
            <div className="absolute -bottom-4 -left-4 bg-[#1F1916] text-[#FAF8F5] px-4 py-2.5 rounded-xl shadow-lg border border-[#D8B26E]/40 flex items-center gap-2.5">
              <ShieldCheck className="w-5 h-5 text-[#D8B26E] shrink-0" />
              <div>
                <p className="text-[11px] font-semibold tracking-wide">100% SILK MARK CERTIFIED</p>
                <p className="text-[10px] text-stone-300">Pure Zari & Tested Handloom Authenticity</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust & Craft Adjacency Strip */}
      <div className="border-t border-stone-200 bg-white py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9B1D2C]" />
            <span className="font-medium text-stone-800">Physical Fabric Swatches Available</span>
            <span className="text-stone-400 hidden sm:inline">(10x10 cm sample for ₹99)</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9B1D2C]" />
            <span className="font-medium text-stone-800">Custom Dyeing & Mill Lab Dips</span>
            <span className="text-stone-400 hidden sm:inline">(Pantone color matching)</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9B1D2C]" />
            <span className="font-medium text-stone-800">B2B Wholesale & Private Label</span>
            <span className="text-stone-400 hidden sm:inline">(Export to 24+ countries)</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9B1D2C]" />
            <span className="font-medium text-stone-800">Direct WhatsApp Master Consultation</span>
          </div>
        </div>
      </div>
    </section>
  );
};
