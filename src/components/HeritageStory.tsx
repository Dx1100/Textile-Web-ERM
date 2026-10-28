import React from 'react';
import { Award, Compass, Feather, CheckCircle2 } from 'lucide-react';

interface HeritageStoryProps {
  onOpenConsultation: () => void;
  onOpenWholesale: () => void;
}

export const HeritageStory: React.FC<HeritageStoryProps> = ({
  onOpenConsultation,
  onOpenWholesale,
}) => {
  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5] border-t border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Lead */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#1C2B4B] font-semibold mb-3">
            <span>Our Craft Philosophy</span>
            <span aria-hidden="true">·</span>
            <span>Est. 1997 in Delhi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1916] leading-tight mb-5" style={{ textWrap: 'balance' }}>
            Preserving Royal Weaves with Artisanal Precision & Master Karigars.
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-light">
            Founded with a commitment to uncompromised pure handlooms, Bhasin Textiles bridges generational weavers from Varanasi, Chanderi, and Bengal directly to high-fashion houses, luxury bridal couturiers, and modern connoisseurs.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-7 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#1C2B4B] mb-5">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1F1916] mb-2">
                Pure Silk Mark Guarantee
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Every meter of pure katan silk, brocade, and raw silk is certified by the Silk Mark Organization of India. Tested warp tension, genuine electroplated zari, and zero synthetic polyester fillers.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
              100% Tested Zari & Pure Mulberry Silk
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#1C2B4B] mb-5">
                <Compass className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1F1916] mb-2">
                Loom Lab Dips & Custom Dyeing
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Operating high-precision dyeing vats capable of matching exact Pantone shade cards within 48 hours. Providing bridal ateliers and design houses with uniform color lots from 5 meters to 5,000 meters.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
              AZO-Free Eco Pigments & Color Fastness
            </div>
          </div>

          <div className="bg-white p-7 rounded-2xl border border-stone-200/90 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#1C2B4B] mb-5">
                <Feather className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-serif font-bold text-[#1F1916] mb-2">
                Sample Swatch Transparency
              </h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                We believe you must touch and feel the weight, grain, and luster before investing in bridal yardage. That is why physical 10×10 cm swatches of all running fabrics are dispatched across India for just ₹99.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-stone-100 text-[11px] text-stone-500 font-medium">
              Doorstep Swatch Delivery in 3–5 Days
            </div>
          </div>
        </div>

        {/* Heritage Banner with Video Consultation CTA */}
        <div className="bg-[#1F1916] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 relative overflow-hidden border border-stone-800">
          <div className="max-w-2xl relative z-10">
            <span className="text-[#D8B26E] text-xs font-semibold uppercase tracking-widest block mb-2">
              Virtual Atelier Consultation
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4">
              Planning a Bridal Trousseau or Designing a Boutique Collection?
            </h3>
            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-light">
              Connect via one-on-one live video call with our Chandni Chowk master drapers. We drape fabrics on mannequins, examine the golden sheen under ambient lighting, and compute precise yardage tailored to your tailor’s cutting specifications.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#1C2B4B] hover:bg-[#14223A] rounded-lg transition-colors cursor-pointer"
              >
                Book Live Video Draping
              </button>
              <button
                type="button"
                onClick={onOpenWholesale}
                className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-stone-200 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer"
              >
                Request Swatch Catalog Book
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
