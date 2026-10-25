import React, { useState } from 'react';
import { FileText, Search, ListChecks, CheckCircle2, ShoppingCart, Truck, PackageCheck, ArrowRight } from 'lucide-react';

interface HowWeWorkSectionProps {
  onStartRequirement: () => void;
}

export const HowWeWorkSection: React.FC<HowWeWorkSectionProps> = ({ onStartRequirement }) => {
  const [activeStep, setActiveStep] = useState<number>(1);

  const steps = [
    {
      num: 1,
      title: "Requirement",
      icon: FileText,
      tagline: "Define Fabric & Product Specifications",
      details: "You share your specifications: desired fabric composition, GSM, weave type, colors/prints, target price point, and expected delivery timeframe. Sample swatches or moodboard references can be uploaded.",
    },
    {
      num: 2,
      title: "Sourcing",
      icon: Search,
      tagline: "Tapping 500+ Verified Weaving Mills",
      details: "Our on-ground sourcing coordinators across Delhi, Surat, Jaipur, and Panipat evaluate real-time loom schedules, yarn availability, and ex-mill rates to find the exact production match.",
    },
    {
      num: 3,
      title: "Shortlisting",
      icon: ListChecks,
      tagline: "Curating Top 3–5 Quality Samples",
      details: "We filter out inconsistent lots and curate 3–5 premium options that match your budget. We provide clear lab dips, thread count tests, and transparent per-meter / per-piece pricing.",
    },
    {
      num: 4,
      title: "Approval",
      icon: CheckCircle2,
      tagline: "Physical Swatch & Counter Sample Sign-Off",
      details: "Physical samples and swatches are dispatched to your studio via express courier within 48 hours for touch, drape, and color sign-off by your merchandisers before commercial production.",
    },
    {
      num: 5,
      title: "Order",
      icon: ShoppingCart,
      tagline: "Commercial PO & Threadlinc Trade Financing",
      details: "Commercial Purchase Order issuance. If trade credit is desired, our financing firm Threadlinc approves 30–90 day credit and issues compliant 'Bill to – Ship to' GST documentation.",
    },
    {
      num: 6,
      title: "Dispatch",
      icon: Truck,
      tagline: "Strict Multi-Point Quality Audit & Packing",
      details: "Our field team conducts 100% on-loom inspection for weave defects, dye stains, and meterage accuracy. Sealed waterproof export packing with E-Way bills generated.",
    },
    {
      num: 7,
      title: "Delivery",
      icon: PackageCheck,
      tagline: "Direct Doorstep Factory or Warehouse Delivery",
      details: "Seamless door-to-door transit via verified logistics partners directly to your designated manufacturing factory, tailoring unit, or central warehouse across India or global air cargo.",
    },
  ];

  return (
    <section id="how-we-work" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Section 5</span>
            <span aria-hidden="true">·</span>
            <span>How We Work</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F1916]">
            Our 7-Step Seamless Sourcing Pipeline
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light leading-relaxed">
            From initial enquiry to doorstep factory delivery. We handle on-ground mill negotiations, physical sampling, quality audits, and Threadlinc trade financing under one coordinated umbrella.
          </p>
        </div>

        {/* 7-Step Interactive Pipeline Flow */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 mb-10">
          {steps.map((s) => {
            const Icon = s.icon;
            const isCurrent = activeStep === s.num;
            return (
              <button
                key={s.num}
                type="button"
                onClick={() => setActiveStep(s.num)}
                className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between ${
                  isCurrent
                    ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 ring-1 ring-[#9B1D2C] shadow-xs'
                    : 'border-stone-200 hover:border-stone-400 bg-[#FAF8F5]'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[11px] font-mono font-bold ${isCurrent ? 'text-[#9B1D2C]' : 'text-stone-400'}`}>
                    0{s.num}
                  </span>
                  <Icon className={`w-4 h-4 ${isCurrent ? 'text-[#9B1D2C]' : 'text-stone-400'}`} />
                </div>
                <h4 className={`text-xs font-bold leading-tight ${isCurrent ? 'text-stone-950 font-serif' : 'text-stone-700'}`}>
                  {s.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Box */}
        {(() => {
          const cur = steps.find(s => s.num === activeStep) || steps[0];
          const CurIcon = cur.icon;
          return (
            <div className="bg-[#1F1916] text-[#FAF8F5] p-6 sm:p-10 rounded-3xl border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="flex items-start gap-4 sm:gap-6 max-w-2xl">
                <div className="w-14 h-14 rounded-2xl bg-[#9B1D2C] flex items-center justify-center text-[#D8B26E] shrink-0 shadow-inner">
                  <CurIcon className="w-7 h-7" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-mono font-bold text-[#D8B26E]">Step 0{cur.num} of 07</span>
                    <span className="text-stone-500">·</span>
                    <span className="text-xs text-stone-300">{cur.tagline}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-white mb-2">{cur.title} Phase</h3>
                  <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light">
                    {cur.details}
                  </p>
                </div>
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <button
                  type="button"
                  onClick={onStartRequirement}
                  className="px-6 py-3 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm cursor-pointer whitespace-nowrap flex items-center justify-center gap-1.5"
                >
                  <span>Start Your Requirement</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          );
        })()}

      </div>
    </section>
  );
};
