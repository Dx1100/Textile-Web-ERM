import React from 'react';
import { ArrowRight, Sparkles, ShieldCheck, CheckCircle2, Layers, Search, Globe, Users, PackageCheck, CreditCard } from 'lucide-react';

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
  const coreStrengths = [
    { title: "Textile Sourcing", desc: "Pure silk brocades, sheer tissues, crepes, linens & custom mill yardage", icon: Layers },
    { title: "Product Sourcing", desc: "Finished bridal sarees, lehengas, suits, men's & kids ethnic wear", icon: PackageCheck },
    { title: "Market Access", desc: "Direct access to 500+ looms across Delhi, Surat, Jaipur & Panipat", icon: Globe },
    { title: "Buyer Coordination", desc: "Dedicated sampling, lab dips, quality audits & custom specs handling", icon: Users },
    { title: "Order Coordination", desc: "End-to-end inspection, batch dispatch & doorstep logistics delivery", icon: Search },
  ];

  return (
    <section className="relative overflow-hidden bg-[#FAF8F5] border-b border-stone-200">
      {/* Subtle atmospheric heritage background gradient */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-[#F3EDE2] via-[#FAF8F5] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-10 sm:pt-14 pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Clear B2B Sourcing Intent & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Clean kicker with trust badges */}
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-widest text-stone-500 mb-4 font-medium">
              <span className="text-[#9B1D2C] font-bold">SHREE DURGA AGENCY</span>
              <span aria-hidden="true">·</span>
              <span>Est. 1999</span>
              <span aria-hidden="true">·</span>
              <span>Delhi · Surat · Jaipur · Panipat</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#D8B26E] font-semibold bg-[#D8B26E]/10 px-2 py-0.5 rounded">B2B Sourcing Partner</span>
            </div>

            {/* Display Headline with balanced typography */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1F1916] leading-[1.15] tracking-tight mb-5">
              India's Trusted B2B Textile & Product Sourcing Partner.
            </h1>

            {/* Lead Paragraph */}
            <p className="text-base sm:text-lg text-stone-600 leading-relaxed max-w-2xl mb-7 font-normal">
              Connecting retailers, wholesalers, boutiques, and fashion businesses directly with premier manufacturing mills across Delhi, Surat, Jaipur, Panipat, and Kolkata. Backed by <span className="font-semibold text-stone-800">Threadlinc Bill to – Ship to</span> trade financing.
            </p>

            {/* Primary Action Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              <button
                type="button"
                onClick={onOpenRequirementModal}
                className="flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold tracking-wider uppercase text-white bg-[#9B1D2C] hover:bg-[#7A1C28] rounded-xl transition-all shadow-md hover:shadow-lg cursor-pointer"
              >
                <span>Submit Your Requirement</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onExploreCategories}
                className="flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-medium tracking-wider uppercase text-[#1F1916] bg-white border border-stone-300 hover:border-[#1F1916] hover:bg-stone-50 rounded-xl transition-colors cursor-pointer"
              >
                <span>What We Source</span>
              </button>

              {onOpenThreadlincModal && (
                <button
                  type="button"
                  onClick={onOpenThreadlincModal}
                  className="flex items-center gap-1.5 text-xs text-[#143D36] bg-[#143D36]/8 hover:bg-[#143D36]/15 font-semibold px-3 py-2 rounded-lg transition-colors cursor-pointer"
                >
                  <CreditCard className="w-3.5 h-3.5 text-[#143D36]" />
                  <span>Bill to – Ship to Financing</span>
                </button>
              )}
            </div>

            {/* Editorial Heritage Credentials */}
            <div className="pt-5 border-t border-stone-200/90 w-full grid grid-cols-3 gap-4 text-stone-700">
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916] tabular-nums">25+ Yrs</p>
                <p className="text-[11px] text-stone-500 uppercase tracking-wide mt-0.5">Sourcing Heritage (1999)</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916] tabular-nums">500+ Mills</p>
                <p className="text-[11px] text-stone-500 uppercase tracking-wide mt-0.5">Direct Loom Network</p>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#1F1916] tabular-nums">1,200+</p>
                <p className="text-[11px] text-stone-500 uppercase tracking-wide mt-0.5">B2B Clients Across India</p>
              </div>
            </div>
          </div>

          {/* Right Column: 5 Core Strengths Box (Image 1 Blueprint Specification) */}
          <div className="lg:col-span-5 relative">
            <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-xl border border-stone-200">
              <div className="flex items-center justify-between pb-3.5 border-b border-stone-100 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#9B1D2C]" />
                  <span className="text-xs font-bold uppercase tracking-wider text-stone-800">
                    5 Core Service Capabilities
                  </span>
                </div>
                <span className="text-[11px] text-[#9B1D2C] font-semibold">End-to-End Execution</span>
              </div>

              {/* 5 Core Strengths list */}
              <div className="space-y-3">
                {coreStrengths.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#FAF8F5] transition-colors border border-transparent hover:border-stone-200"
                    >
                      <div className="w-8 h-8 rounded-lg bg-[#FAF8F5] border border-stone-200 flex items-center justify-center shrink-0 text-[#9B1D2C] font-bold text-xs">
                        {idx + 1}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-stone-900 tracking-wide">{item.title}</h4>
                        </div>
                        <p className="text-[11px] text-stone-500 leading-snug mt-0.5">{item.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Sister Concern Intro Banner (Threadlinc) */}
              <div className="mt-5 p-3.5 bg-[#143D36]/8 rounded-xl border border-[#143D36]/20 flex items-start gap-3">
                <CreditCard className="w-5 h-5 text-[#143D36] shrink-0 mt-0.5" />
                <div className="text-left text-xs">
                  <div className="flex items-center gap-2 font-bold text-[#143D36]">
                    <span>Sister Concern: Threadlinc</span>
                    <span className="text-[10px] bg-[#143D36] text-white px-1.5 py-0.5 rounded font-normal">Financing</span>
                  </div>
                  <p className="text-[11px] text-stone-600 mt-1 leading-snug">
                    Seamless <strong>Bill to – Ship to</strong> trade credit. We purchase & finance while goods ship directly to your store or warehouse.
                  </p>
                </div>
              </div>

            </div>

            {/* Quality Seal */}
            <div className="mt-3 bg-[#1F1916] text-[#FAF8F5] px-4 py-2.5 rounded-xl shadow-md border border-[#D8B26E]/30 flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[#D8B26E] shrink-0" />
              <div className="text-xs">
                <span className="font-semibold tracking-wide text-white">Direct Ex-Mill Pricing</span>
                <span className="text-stone-400 block text-[11px]">Strict 4-point fabric & garment QC before dispatch</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Trust & Markets Adjacency Strip */}
      <div className="border-t border-stone-200 bg-white py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4 text-xs text-stone-600">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9B1D2C]" />
            <span className="font-semibold text-stone-800">Sourcing Markets:</span>
            <span>Delhi · Surat · Jaipur · Panipat · Meerut · Kolkata</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9B1D2C]" />
            <span className="font-semibold text-stone-800">Bill to – Ship to:</span>
            <span>Threadlinc Trade Credit Available</span>
          </div>

          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-[#9B1D2C]" />
            <span className="font-semibold text-stone-800">Quality Assured:</span>
            <span>Lab Dips & Pre-Dispatch Swatches</span>
          </div>
        </div>
      </div>
    </section>
  );
};

