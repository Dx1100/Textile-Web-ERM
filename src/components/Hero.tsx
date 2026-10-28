import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface HeroProps {
  onOpenRequirementModal: () => void;
  onExploreCategories: () => void;
  onOpenThreadlincModal?: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenRequirementModal,
  onExploreCategories,
  onOpenThreadlincModal,
}) => {
  const { brand } = siteContent;

  return (
    <>
      <section className="relative bg-white border-b border-slate-200">
      <div
        className="max-w-7xl mx-auto px-4 sm:px-8 pt-16 sm:pt-24 pb-0"
        style={{ paddingBottom: '0px' }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Main Value Proposition Column */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Minimal Unboxed Kicker with Emerald Accent */}
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0D7A5F] uppercase mb-4">
              <span className="w-6 h-0.5 bg-[#0D7A5F]" />
              <span>Est. {brand.estYear} · {brand.headquarters} · {brand.role}</span>
            </div>

            {/* Direct High-Impact Architectural Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B1B33] leading-[1.1] tracking-tight mb-5">
              Direct Textile Sourcing <span className="text-[#0D7A5F]">&</span> Trade Consultancy
            </h1>

            {/* Crisp, Direct Value Statement */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl mb-8 font-normal">
              Procure wholesale sarees, suits, lehengas, and fabrics directly from verified production hubs in Varanasi, Surat, and Panipat. Pre-dispatch physical inspection with structured 30 to 90 days trade credit.
            </p>

            {/* Aligned Actions: Emerald Primary & Navy Secondary */}
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                type="button"
                onClick={onOpenRequirementModal}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#0D7A5F] hover:bg-[#0A634D] rounded-lg transition-all shadow-sm cursor-pointer"
              >
                <span>Submit Sourcing Requirement</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                type="button"
                onClick={onExploreCategories}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-[#0B1B33] bg-white border border-[#0B1B33] hover:bg-[#0B1B33] hover:text-white rounded-lg transition-colors cursor-pointer"
              >
                <span>What We Source</span>
              </button>
            </div>
          </div>

          {/* Right Column: Architectural Visual Showcase Card with Emerald Top Accent */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm border-t-4 border-t-[#0D7A5F]">
              <div className="aspect-4/3 overflow-hidden bg-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=900&q=80"
                  alt="Authentic Indian Textile Weaves"
                  className="w-full h-full object-cover object-center"
                  style={{ marginLeft: '0px' }}
                />
              </div>

              {/* Minimal Aligned Footer Bar with applied padding-bottom: 20px */}
              <div
                className="p-5 flex items-center justify-between gap-4 bg-white"
                style={{ paddingBottom: '20px' }}
              >
                <div>
                  <p className="text-sm font-heading font-bold text-[#0B1B33]">
                    Heritage Weaves & Wholesale Lots
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Inspected in Chandni Chowk · Dispatched PAN-India
                  </p>
                </div>
                <div className="text-xs font-bold text-[#0D7A5F] flex items-center gap-1 shrink-0">
                  <span>Direct Origin</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

    {/* STANDALONE INDIVIDUAL METRICS SECTION (Positioned Below Section 1 with Prominent Typography) */}
    <section className="relative bg-slate-50 border-b border-slate-200 py-14 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Metric 1 */}
          <div className="flex flex-col border-l-2 border-[#0B1B33] pl-5 sm:pl-6">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#0D7A5F] mb-1">
              Consulting Heritage
            </span>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B1B33] tracking-tight tabular-nums">
              25<span className="text-[#0D7A5F]">+</span> Yrs
            </p>
            <h3 className="text-base sm:text-lg font-heading font-bold text-[#0B1B33] mt-2">
              Delhi Trade Consulting
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              Advising wholesale buyers & retailers from Chandni Chowk since 1999.
            </p>
          </div>

          {/* Metric 2 */}
          <div className="flex flex-col border-l-2 border-[#0B1B33] pl-5 sm:pl-6">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#0D7A5F] mb-1">
              Verified Production
            </span>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B1B33] tracking-tight tabular-nums">
              4 Hubs
            </p>
            <h3 className="text-base sm:text-lg font-heading font-bold text-[#0B1B33] mt-2">
              Direct Origin Sourcing
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              Surat synthetics, Varanasi brocades & Panipat home textiles.
            </p>
          </div>

          {/* Metric 3 */}
          <div className="flex flex-col border-l-2 border-[#0B1B33] pl-5 sm:pl-6">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#0D7A5F] mb-1">
              Pre-Dispatch Protocol
            </span>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0B1B33] tracking-tight tabular-nums">
              100%
            </p>
            <h3 className="text-base sm:text-lg font-heading font-bold text-[#0B1B33] mt-2">
              Quality Inspection
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              Zero-defect check with physical lot, weave & meter verification.
            </p>
          </div>

          {/* Metric 4 */}
          <div className="flex flex-col border-l-2 border-[#0D7A5F] pl-5 sm:pl-6">
            <span className="text-[11px] font-bold tracking-widest uppercase text-[#0D7A5F] mb-1">
              Trade Liquidity
            </span>
            <p className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[#0D7A5F] tracking-tight tabular-nums">
              30–90 D
            </p>
            <h3 className="text-base sm:text-lg font-heading font-bold text-[#0B1B33] mt-2 flex items-center gap-1.5">
              <span>Trade Credit Facility</span>
              {onOpenThreadlincModal && (
                <button
                  type="button"
                  onClick={onOpenThreadlincModal}
                  className="text-xs font-bold text-[#0D7A5F] hover:underline cursor-pointer inline-flex items-center"
                  title="View financing details"
                >
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              )}
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 leading-relaxed">
              Structured commercial trade financing for Tier 2 & 3 merchant stores.
            </p>
          </div>

        </div>
      </div>
    </section>
  </>
);
};
