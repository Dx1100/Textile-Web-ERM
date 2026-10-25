import React from 'react';
import { Award, Globe2, Layers, ShieldCheck, UserCheck, Sparkles, CheckCircle2 } from 'lucide-react';

interface WhyUsSectionProps {
  onWorkWithUs: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onWorkWithUs }) => {
  const pillars = [
    {
      title: "25+ Years Industry Experience",
      subtitle: "Established in 1999",
      icon: Award,
      desc: "Over a quarter-century of navigating raw material cycles, yarn price fluctuations, and bridal fashion trends. We know which mills deliver on time and which fail.",
    },
    {
      title: "Unrivaled Market Network",
      subtitle: "7 Core Production Hubs",
      icon: Globe2,
      desc: "Direct access to 500+ weaving parks and garment manufacturing clusters in Delhi, Surat, Jaipur, Panipat, Meerut, Muzaffarnagar, and Kolkata.",
    },
    {
      title: "Comprehensive Product Range",
      subtitle: "Yarn to Finished Apparel",
      icon: Layers,
      desc: "One single coordination agency for pure silk brocades, raw silks, unstitched suit sets, home furnishings, and accessories.",
    },
    {
      title: "Pure 100% B2B Focus",
      subtitle: "Zero Retail Distraction",
      icon: ShieldCheck,
      desc: "We exclusively serve commercial buyers, retailers, and exporters. Our pricing models reflect pure ex-mill wholesale margins with zero retail markup.",
    },
    {
      title: "On-Ground Order Coordination",
      subtitle: "Your Eyes on the Loom",
      icon: UserCheck,
      desc: "We physically inspect goods at the mill floor before packing, generate compliant E-way bills, and coordinate seamless factory-to-doorstep freight.",
    },
    {
      title: "Financing by Threadlinc",
      subtitle: "Bill to – Ship to Architecture",
      icon: Sparkles,
      desc: "Unique institutional trade credit (30–90 days) powered by our sister firm Threadlinc, unlocking your working capital during peak seasonal manufacturing.",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Why Shree Durga Agency</span>
            <span aria-hidden="true">·</span>
            <span>25+ Years Sourcing Edge</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F1916]">
            The Competitive Edge in B2B Textile Sourcing
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light leading-relaxed">
            Eliminating supplier opacity, quality variance, and procurement delays through veteran market relationships and institutional trade credit.
          </p>
        </div>

        {/* 6 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 hover:border-stone-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#9B1D2C] mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#D8B26E] uppercase tracking-wider block mb-1">
                    {pil.subtitle}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-[#1F1916] mb-2">{pil.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed font-light">{pil.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust banner */}
        <div className="p-6 bg-[#1F1916] text-[#FAF8F5] rounded-2xl border border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-[#D8B26E] shrink-0" />
            <span className="text-xs font-medium text-stone-200">
              Trusted by 1,200+ boutiques, garment exporters, and wholesale traders across India & overseas.
            </span>
          </div>
          <button
            type="button"
            onClick={onWorkWithUs}
            className="px-5 py-2.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors shrink-0 cursor-pointer"
          >
            Work With Us
          </button>
        </div>

      </div>
    </section>
  );
};
