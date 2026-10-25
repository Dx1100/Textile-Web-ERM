import React from 'react';
import { Star, ShieldCheck, Quote } from 'lucide-react';

export const TrustProofSection: React.FC = () => {
  const metrics = [
    { value: "25+", label: "Years in Textile Trade", sub: "Established in 1999" },
    { value: "500+", label: "Verified Production Mills", sub: "Looms, dye-vats & print houses" },
    { value: "7 Hubs", label: "National Sourcing Network", sub: "Delhi, Surat, Jaipur, Panipat..." },
    { value: "12,000+", label: "Commercial Shipments", sub: "Zero-loss transit delivery" },
  ];

  const testimonials = [
    {
      name: "Meenakshi Kulkarni",
      role: "Founder & Creative Director",
      company: "Aura Bridal Couture (Bandra, Mumbai)",
      quote: "Sourcing Katan brocades and raw silks used to mean multiple exhausting trips to Varanasi and Delhi. Shree Durga Agency coordinates our entire seasonal bridal yardage with certified Silk Mark swatches, while Threadlinc gives us a 60-day credit cushion.",
      rating: 5,
    },
    {
      name: "Sanjay Singhal",
      role: "Managing Director",
      company: "Singhal Tex-Fab Exports (Noida SEZ)",
      quote: "The 'Bill to – Ship to' model by Threadlinc transformed our contract manufacturing. Invoices are billed to our corporate office while fabric rolls land directly at our stitching unit with 100% compliant E-Way bills. We haven't had a single day of loom downtime.",
      rating: 5,
    },
    {
      name: "Harishchandra Rao",
      role: "Wholesale Merchandiser",
      company: "Rao Textiles (Commercial Street, Bangalore)",
      quote: "They give us pure ex-mill pricing from Surat and Panipat that no standard broker could offer. Their on-ground coordinators inspect the goods before they're loaded onto trucks. 10 years of trusted partnership.",
      rating: 5,
    },
  ];

  return (
    <section id="trust-proof" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Section 9</span>
            <span aria-hidden="true">·</span>
            <span>Business & Trust Proof</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F1916]">
            Backed by Proven Numbers & Trade Reputation
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light leading-relaxed">
            In an industry where trust and delivery timelines make or break collections, here is how we perform for India’s top fashion houses and retail distributors.
          </p>
        </div>

        {/* 4 Quantitative Metrics */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 text-center flex flex-col justify-center"
            >
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1916] tabular-nums">
                {m.value}
              </span>
              <span className="text-xs font-semibold text-[#9B1D2C] mt-1 uppercase tracking-wide">
                {m.label}
              </span>
              <span className="text-[11px] text-stone-500 mt-0.5">
                {m.sub}
              </span>
            </div>
          ))}
        </div>

        {/* 3 Attributable Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 flex flex-col justify-between shadow-2xs hover:shadow-sm transition-all"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-stone-700 leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80">
                <h4 className="text-xs font-bold text-stone-900">{t.name}</h4>
                <p className="text-[11px] text-[#9B1D2C] font-medium">{t.role}</p>
                <p className="text-[11px] text-stone-500 truncate">{t.company}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
