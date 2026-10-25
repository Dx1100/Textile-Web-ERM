import React from 'react';
import { Award, Compass, Feather, ShieldCheck, MapPin, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
  onOpenWholesale: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onNavigateHome,
  onOpenConsultation,
  onOpenWholesale,
}) => {
  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">Our Heritage & Craftsmanship (Est. 1997)</span>
      </nav>

      {/* Hero */}
      <div className="max-w-3xl mb-14">
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-3">
          <span>The Bhasin Textiles Legacy</span>
          <span aria-hidden="true">·</span>
          <span>Chandni Chowk & Faridabad</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-[#1F1916] leading-tight mb-6">
          Preserving India's Royal Textile Heritage for Modern Runways.
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-light">
          Founded in 1997 in the historic cloth alleys of Katra Neel, Chandni Chowk, Bhasin Textiles has evolved into one of northern India’s most respected fabric manufacturers, wholesalers, and private-label ateliers.
        </p>
      </div>

      {/* Historical Milestones */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-16">
        <h2 className="text-2xl font-serif font-bold text-[#1F1916] mb-8 pb-4 border-b border-stone-200">
          Our Generational Milestones
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-stone-200">
          <div className="relative flex items-start gap-6">
            <div className="w-7 h-7 rounded-full bg-[#9B1D2C] text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
              1
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#9B1D2C]">1997</span>
              <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                Foundation in Katra Neel, Chandni Chowk
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Commenced trading in pure silk and handloom brocades, establishing direct partnerships with master weaving families in Varanasi and Chanderi.
              </p>
            </div>
          </div>

          <div className="relative flex items-start gap-6">
            <div className="w-7 h-7 rounded-full bg-[#1F1916] text-[#D8B26E] flex items-center justify-center text-xs font-bold shrink-0 z-10">
              2
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#9B1D2C]">2005</span>
              <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                Faridabad Manufacturing Plant & Dyeing Vats
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Commissioned dedicated weaving looms and high-precision temperature-controlled dyeing vats in Sector 24, Industrial Area, Faridabad to guarantee uniform color lots.
              </p>
            </div>
          </div>

          <div className="relative flex items-start gap-6">
            <div className="w-7 h-7 rounded-full bg-[#1F1916] text-[#D8B26E] flex items-center justify-center text-xs font-bold shrink-0 z-10">
              3
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#9B1D2C]">2014</span>
              <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                Global Export Division & Lakmé Fashion Week Ateliers
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Expanded supply to couture fashion designers across London, Dubai, Toronto, and Mumbai, certifying 100% of pure silk inventory under Silk Mark India.
              </p>
            </div>
          </div>

          <div className="relative flex items-start gap-6">
            <div className="w-7 h-7 rounded-full bg-[#D8B26E] text-stone-950 flex items-center justify-center text-xs font-bold shrink-0 z-10">
              4
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#9B1D2C]">Present Day</span>
              <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                Digital Swatch Atelier & Sustainable Weaves
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Dispatching physical ₹99 tactile swatches across India, hosting 1-on-1 virtual video draping for NRI brides, and weaving certified European flax linen and organic mulberry silks.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Pillars of Excellence */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200">
          <Award className="w-8 h-8 text-[#9B1D2C] mb-4" />
          <h3 className="text-lg font-serif font-bold text-[#1F1916] mb-2">Silk Mark India Certification</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Every roll of silk brocade, katan saree, and raw silk carries the official Silk Mark authentication label issued by the Central Silk Board of India, guaranteeing 100% natural silk content with tested zari electroplating.
          </p>
        </div>

        <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200">
          <Compass className="w-8 h-8 text-[#9B1D2C] mb-4" />
          <h3 className="text-lg font-serif font-bold text-[#1F1916] mb-2">Sustainable & Eco-Dyeing Standards</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Our Faridabad plant employs closed-loop water treatment and uses certified AZO-free pigments that preserve fabric tensile strength while minimizing ecological footprint.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#1F1916] text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-2">Visit Our Showroom or Weaving Mill</h3>
          <p className="text-xs text-stone-300 max-w-lg">
            Experience our fabrics in person at Chandni Chowk, Delhi, or discuss bulk manufacturing at our Faridabad plant.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-5 py-3 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Book Showroom Visit
          </button>
          <button
            type="button"
            onClick={onOpenWholesale}
            className="px-5 py-3 bg-stone-800 hover:bg-stone-700 text-stone-200 rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            B2B Inquiries
          </button>
        </div>
      </div>

    </div>
  );
};
