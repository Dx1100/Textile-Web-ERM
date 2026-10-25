import React from 'react';
import { WhoWeServeSection } from '../components/WhoWeServeSection';
import { MessageCircle, Phone, ArrowRight, CheckCircle2, ShieldCheck } from 'lucide-react';

interface WhoWeServePageProps {
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
  onOpenRequirementModal: (buyerType?: string) => void;
}

export const WhoWeServePage: React.FC<WhoWeServePageProps> = ({
  onNavigateHome,
  onOpenConsultation,
  onOpenRequirementModal,
}) => {
  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">Who We Serve (Client Archetypes)</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-stone-200">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Tailored Sourcing Solutions</span>
            <span aria-hidden="true">·</span>
            <span>Retailers · Wholesalers · Boutiques · Brands</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1916] leading-tight mb-3">
            Who We Serve in the Textile Industry
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            Whether you operate a bridal couture boutique requiring 5 bespoke pieces, a pan-India retail chain buying 50,000 meters of viscose rayon, or an institutional trader seeking trade credit financing, our solutions fit your scale.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenConsultation}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
        >
          <Phone className="w-4 h-4" />
          <span>Talk to Our Team</span>
        </button>
      </div>

      {/* Section 6 Blueprint Component */}
      <div className="mb-14">
        <WhoWeServeSection
          onSelectBuyerType={(type) => onOpenRequirementModal(type)}
        />
      </div>

      {/* Case studies / Client proof */}
      <div className="bg-white p-8 sm:p-10 rounded-3xl border border-stone-200 shadow-sm">
        <h2 className="text-2xl font-serif font-bold text-[#1F1916] mb-6 pb-4 border-b border-stone-200">
          How Different Buyers Scale With Shree Durga Agency
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#9B1D2C] block mb-1">
              Multi-Store Retail Chain · Lucknow
            </span>
            <h4 className="font-serif font-bold text-stone-900 text-sm mb-2">
              Zero Festive Stockouts With 48-Hour Replenishment
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              "We source our unstitched suits and festive lehengas through Shree Durga Agency. When a design clicks, they rush re-orders directly from Surat looms within 3 business days."
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#143D36] block mb-1">
              Designer Bridal Atelier · Delhi NCR
            </span>
            <h4 className="font-serif font-bold text-stone-900 text-sm mb-2">
              Exclusive 100% Tested Pure Zari Katan Silks
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              "Their team in Chandni Chowk curates handloom katan brocades with real silver/gold tested zari that our celebrity bridal clientele expects. True master weavers."
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-stone-200">
            <span className="text-[10px] font-bold uppercase tracking-wider text-[#D8B26E] font-semibold block mb-1">
              Fabric Trader & Distributor · Hyderabad
            </span>
            <h4 className="font-serif font-bold text-stone-900 text-sm mb-2">
              Threadlinc Bill to – Ship to Working Capital Flexibility
            </h4>
            <p className="text-xs text-stone-600 leading-relaxed">
              "Threadlinc financing transformed our liquidity. We buy large lots from Panipat and Surat on 60-day credit, allowing us to serve our retail clients without cash flow bottlenecks."
            </p>
          </div>
        </div>
      </div>

    </div>
  );
};
