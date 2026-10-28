import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface CompanyStorySectionProps {
  onTalkToTeam: () => void;
}

export const CompanyStorySection: React.FC<CompanyStorySectionProps> = ({ onTalkToTeam }) => {
  const milestones = [
    { year: "1999", title: "Chandni Chowk Roots", desc: "Started as a textile sourcing consultancy connecting Delhi traders to master weavers in Varanasi and Surat.", highlight: "Founded" },
    { year: "2008", title: "Expansion to Surat & Jaipur", desc: "Established direct desks on Ring Road, Surat, and Sitapura, Jaipur for fast turnaround printing and festive fabrics.", highlight: "Multi-Hub" },
    { year: "2018", title: "Quality Inspection Setup", desc: "Instituted strict on-ground quality control desks across all partner production clusters.", highlight: "Zero Defect" },
    { year: "Today", title: "Threadlinc Financing", desc: "Serving retail and wholesale store owners across Tier 2 & 3 cities with Trade Credit (30–90 Days) trade credit.", highlight: "Trade Credit" },
  ];

  return (
    <section id="company-story" className="py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C2B4B]/8 text-[#1C2B4B] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Our Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1916]">
            From Chandni Chowk to PAN-India Textile Consulting
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {milestones.map((m, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-stone-200 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <span className="text-2xl font-serif font-bold text-[#1C2B4B] block mb-1">
                  {m.year}
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-stone-800 block mb-3">
                  {m.title}
                </span>
                <p className="text-xs text-stone-600 leading-relaxed font-normal">
                  {m.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 mt-4 flex items-center justify-between text-[11px] text-stone-500 font-mono">
                <span>Phase 0{idx + 1}</span>
                <span className="text-[#D8B26E] font-semibold">{m.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="p-8 rounded-2xl bg-white border border-stone-200 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h3 className="text-lg font-serif font-bold text-[#1F1916]">
              25+ Years of Dedicated Textile Sourcing
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              Personalized sourcing support tailored for retail store owners in Tier 2 and Tier 3 cities.
            </p>
          </div>

          <button
            type="button"
            onClick={onTalkToTeam}
            className="px-6 py-3 bg-[#1F1916] hover:bg-[#1C2B4B] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 shadow-sm flex items-center gap-2 cursor-pointer"
          >
            <span>Consult Our Sourcing Team</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
