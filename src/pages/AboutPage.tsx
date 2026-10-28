import React from 'react';
import { Award, Compass, Feather, ShieldCheck, CheckCircle2, ArrowRight, ChevronRight, Phone } from 'lucide-react';
import { siteContent } from '../config/siteContent';

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
  const { brand } = siteContent;

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors cursor-pointer">
          Home
        </button>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <span className="text-[#1C2B4B] font-semibold">About</span>
      </nav>

      {/* Hero */}
      <div className="max-w-3xl mb-14">
        <div className="mb-4">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-emerald-50 text-[#0D7A5F] border border-emerald-200/80 shadow-xs">
            {brand.name} · Est. {brand.estYear} · {brand.headquarters}
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0B1B33] leading-tight mb-6">
          Your Dedicated Sourcing & Textile Consulting Partner Across India.
        </h1>
        <p className="text-base sm:text-lg text-stone-600 leading-relaxed font-normal">
          Founded in {brand.estYear} in the historic Katra Neel market of Chandni Chowk, {brand.name} serves as the on-ground sourcing desk for retail shop owners, boutiques, and regional wholesalers across Tier 2 & Tier 3 Indian cities.
        </p>
      </div>

      {/* Generational Milestones */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xs mb-16">
        <h2 className="text-2xl font-serif font-bold text-[#1E293B] mb-8 pb-4 border-b border-stone-200">
          Our Journey & Sourcing Stewardship
        </h2>

        <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-stone-200">
          <div className="relative flex items-start gap-6">
            <div className="w-7 h-7 rounded-full bg-[#1C2B4B] text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
              1
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#1C2B4B]">{brand.estYear}</span>
              <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                Foundation in Katra Neel, Chandni Chowk
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Commenced textile consulting and saree wholesale representation, building direct ties with master weaving clusters in Varanasi, Surat, and Chanderi.
              </p>
            </div>
          </div>

          <div className="relative flex items-start gap-6">
            <div className="w-7 h-7 rounded-full bg-[#143D36] text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
              2
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-[#143D36]">2010</span>
              <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                Expansion to Multi-Hub Coordination Desks
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Established dedicated on-ground quality verification cells in Surat for synthetic jacquards and prints, and in Panipat for home furnishings.
              </p>
            </div>
          </div>

          <div className="relative flex items-start gap-6">
            <div className="w-7 h-7 rounded-full bg-stone-800 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
              3
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-stone-700">2020</span>
              <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                Threadlinc Trade Credit Integration
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Partnered with financing firm Threadlinc to provide 30–90 days trade credit for retail shopkeepers in Tier 2 and Tier 3 cities, freeing up seasonal working capital.
              </p>
            </div>
          </div>

          <div className="relative flex items-start gap-6">
            <div className="w-7 h-7 rounded-full bg-emerald-700 text-white flex items-center justify-center text-xs font-bold shrink-0 z-10">
              4
            </div>
            <div>
              <span className="text-xs font-mono font-bold text-emerald-800">Present Day</span>
              <h3 className="text-base font-serif font-bold text-stone-900 mt-0.5">
                Pan-India Sourcing Network with Doorstep Swatch Service
              </h3>
              <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                Directly serving hundreds of independent retail stores across India with 100% pre-dispatch quality checks, express courier sample books, and complete GST compliance.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 2 Core Principles */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200 shadow-2xs">
          <Award className="w-8 h-8 text-[#143D36] mb-4" />
          <h3 className="text-lg font-serif font-bold text-[#1E293B] mb-2">Pre-Dispatch Quality Inspection</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            Every batch of sarees, suits, or fabrics is personally verified on-ground by our inspection coordinators before packing. No defective pieces, color mismatches, or cut errors ever reach your counter.
          </p>
        </div>

        <div className="bg-[#FAF8F5] p-8 rounded-2xl border border-stone-200 shadow-2xs">
          <Compass className="w-8 h-8 text-[#143D36] mb-4" />
          <h3 className="text-lg font-serif font-bold text-[#1E293B] mb-2">Ethical Direct Hub Pricing</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
            We act as your purchasing eyes and ears in India's leading textile markets. By eliminating speculative middlemen and layered commissions, your store retains higher retail profit margins.
          </p>
        </div>
      </div>

      {/* CTA Box */}
      <div className="bg-[#1C2B4B] text-white p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#14223A]">
        <div>
          <h3 className="text-2xl font-serif font-bold mb-2">Connect With Our Senior Consultant</h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-lg font-light">
            Discuss your seasonal fabric and ethnic wear sourcing requirements directly with our head office desk in Chandni Chowk, Delhi.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenConsultation}
            className="px-6 py-3.5 bg-white hover:bg-stone-100 text-[#1C2B4B] rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shadow-xs"
          >
            Request Consultation
          </button>
        </div>
      </div>

    </div>
  );
};
