import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, CreditCard, Send, Truck } from 'lucide-react';

interface ThreadlincBannerProps {
  onOpenThreadlincModal: () => void;
  onNavigateThreadlincPage?: () => void;
}

export const ThreadlincBanner: React.FC<ThreadlincBannerProps> = ({
  onOpenThreadlincModal,
  onNavigateThreadlincPage,
}) => {
  return (
    <section className="py-12 bg-gradient-to-br from-[#1C2430] via-[#151D28] to-[#0E1520] text-[#FAF8F5] relative overflow-hidden border-y border-stone-800">
      {/* Subtle background circuit/grid styling representing financial infrastructure */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#D8B26E_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Brand & Concept */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold">
              <span className="w-2 h-2 rounded-full bg-[#D8B26E]" />
              <span>Associate Financial Firm of Bhasin Textiles</span>
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-white tracking-tight leading-snug">
              Trade Financing & "Bill to – Ship to" Powered by <span className="text-[#D8B26E]">Threadlinc</span>
            </h2>

            <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light max-w-2xl">
              Through our sister financing entity <strong>Threadlinc</strong>, we empower boutique owners, fashion labels, and garment exporters with structured working capital financing. We bill your corporate financing entity while shipping fabric bolts directly to your job-workers, cutting units, or manufacturing plants.
            </p>

            {/* 3 Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 pb-2">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                <Truck className="w-4 h-4 text-[#D8B26E] mb-1.5" />
                <h4 className="text-xs font-semibold text-white">Bill to – Ship to</h4>
                <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                  Tripartite GST invoicing with direct factory dropship.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                <CreditCard className="w-4 h-4 text-[#D8B26E] mb-1.5" />
                <h4 className="text-xs font-semibold text-white">30–90 Days Credit</h4>
                <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                  Preserve cash flow during peak bridal and festive seasons.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl">
                <ShieldCheck className="w-4 h-4 text-[#D8B26E] mb-1.5" />
                <h4 className="text-xs font-semibold text-white">Zero Loom Delay</h4>
                <p className="text-[11px] text-stone-400 mt-0.5 leading-snug">
                  Immediate dispatch clearance backed by Threadlinc approval.
                </p>
              </div>
            </div>

            {/* Action Row */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                type="button"
                onClick={onOpenThreadlincModal}
                className="px-5 py-2.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors shadow-sm cursor-pointer flex items-center gap-2"
              >
                <span>Apply for Threadlinc Credit Line</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>

              {onNavigateThreadlincPage && (
                <button
                  type="button"
                  onClick={onNavigateThreadlincPage}
                  className="px-5 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-stone-200 text-xs font-medium tracking-wider uppercase rounded-lg transition-colors cursor-pointer"
                >
                  Learn How Bill-to-Ship-to Works
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Visual Diagram of Bill to - Ship to */}
          <div className="lg:col-span-5 bg-[#121922] p-5 sm:p-6 rounded-2xl border border-stone-700/80 shadow-xl">
            <div className="flex items-center justify-between pb-3 border-b border-stone-800 text-xs">
              <span className="font-semibold text-stone-300">Tripartite Flow Architecture</span>
              <span className="text-[10px] text-[#D8B26E] font-mono uppercase">GST Compliant</span>
            </div>

            <div className="space-y-3.5 py-4 text-xs">
              {/* Step 1 */}
              <div className="flex items-start gap-3 bg-stone-900/60 p-3 rounded-xl border border-stone-800">
                <div className="w-6 h-6 rounded-full bg-[#9B1D2C] text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                  1
                </div>
                <div>
                  <p className="font-semibold text-white">Fabric Sourcing at Bhasin Textiles</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">You select bulk brocades, raw silks, or suit yardages.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-start gap-3 bg-stone-900/60 p-3 rounded-xl border border-stone-800">
                <div className="w-6 h-6 rounded-full bg-[#D8B26E] text-stone-950 text-[11px] font-bold flex items-center justify-center shrink-0">
                  2
                </div>
                <div>
                  <p className="font-semibold text-white">"Bill To" Threadlinc Financing</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Threadlinc verifies and settles/finances the procurement invoice on your behalf.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-start gap-3 bg-stone-900/60 p-3 rounded-xl border border-stone-800">
                <div className="w-6 h-6 rounded-full bg-emerald-600 text-white text-[11px] font-bold flex items-center justify-center shrink-0">
                  3
                </div>
                <div>
                  <p className="font-semibold text-white">"Ship To" Your Factory / Job-Worker</p>
                  <p className="text-[11px] text-stone-400 mt-0.5">Physical goods dispatch directly to your tailor/cutter with clean E-way bills.</p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-stone-800 text-center">
              <p className="text-[11px] text-stone-400">
                Managed seamlessly under the <strong>Bhasin Textiles × Threadlinc</strong> umbrella.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
