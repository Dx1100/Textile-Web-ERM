import React from 'react';
import { ArrowRight } from 'lucide-react';

interface CompanyStorySectionProps {
  onTalkToTeam: () => void;
}

export const CompanyStorySection: React.FC<CompanyStorySectionProps> = ({ onTalkToTeam }) => {
  const milestones = [
    {
      year: "1999",
      phase: "Inception & Delhi Roots",
      desc: "Founded in Delhi as a textile sourcing agency. Built direct bridges between Chandni Chowk merchants and artisanal Varanasi pit loom families, ensuring honest yarn counts and fair mill pricing.",
    },
    {
      year: "2008",
      phase: "Growth into Western Hubs",
      desc: "Expanded sourcing operations to Surat's rapid-growing synthetic and digital print mills and Jaipur's vegetable-dyed Sanganeri block-printing clusters to meet escalating boutique demand.",
    },
    {
      year: "2018",
      phase: "Expansion & Industrial Scale",
      desc: "Scaled into Panipat's export home furnishings, Meerut's industrial grey weaves, and Kolkata's Bengal handlooms, establishing a multi-hub coordination network across 7 states.",
    },
    {
      year: "Today",
      phase: "Full-Stack Agency & Threadlinc Trade Financing",
      desc: "Operating as an integrated textile sourcing power with associate financing firm Threadlinc. Providing structured 30–90 day credit and Bill to – Ship to delivery for modern fashion brands and global exporters.",
    },
  ];

  return (
    <section id="company-story" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Section 8</span>
            <span aria-hidden="true">·</span>
            <span>Company Story</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F1916]">
            1999 → Growth → Expansion → Today
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light leading-relaxed">
            From a dedicated Delhi textile brokerage to a multi-state sourcing agency financing Indian fashion manufacturing.
          </p>
        </div>

        {/* 4-Phase Chronological Timeline Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-2xs hover:shadow-md transition-all"
            >
              <div>
                <span className="text-2xl font-serif font-bold text-[#9B1D2C] block mb-1">
                  {m.year}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#D8B26E] uppercase tracking-wider block mb-2">
                  {m.phase}
                </span>
                <p className="text-xs text-stone-600 leading-relaxed font-light">
                  {m.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={onTalkToTeam}
            className="px-6 py-3 bg-[#1F1916] hover:bg-[#9B1D2C] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors shadow-sm cursor-pointer inline-flex items-center gap-2"
          >
            <span>Talk to Our Founding Team</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
};
