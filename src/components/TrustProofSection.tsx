import React from 'react';
import { Star, ShieldCheck } from 'lucide-react';
import { siteContent } from '../config/siteContent';

export const TrustProofSection: React.FC = () => {
  const metrics = [
    { value: "25+ Yrs", label: "Consulting Experience" },
    { value: "7 Major Hubs", label: "Nationwide Network" },
    { value: "100%", label: "Defect-Free Inspection" },
    { value: "30-90 Days", label: "Threadlinc Credit" },
  ];

  const testimonials = [
    {
      author: "Vikram Singhania",
      role: "Managing Director",
      city: "Singhania Bridal, Lucknow",
      quote: "Shree Durga Agency helps us source sarees and lehengas directly from Surat and Varanasi with zero defects and complete peace of mind.",
    },
    {
      author: "Meenakshi Agarwal",
      role: "Store Owner",
      city: "Roohani Pret, Jaipur",
      quote: "Threadlinc's Trade Credit (30–90 Days) facility allowed our boutique to procure festive inventory without stressing our working capital bank accounts.",
    },
    {
      author: "Rajesh Singhal",
      role: "Wholesale Merchant",
      city: "Kanpur",
      quote: "Their team checks goods at the source before dispatch. We have never faced quality or meterage discrepancies.",
    },
  ];

  return (
    <section id="trust-proof" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C2B4B]/8 text-[#1C2B4B] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>Verified Track Record</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1916]">
            Trusted by Store Owners Across India
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((m, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#FAF8F5] border border-stone-200 text-center flex flex-col justify-center"
            >
              <span className="text-3xl sm:text-4xl font-serif font-bold text-[#1C2B4B] tabular-nums mb-1">
                {m.value}
              </span>
              <span className="text-xs font-bold text-stone-800 uppercase tracking-wide">
                {m.label}
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200 flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center gap-1 text-[#D8B26E] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-stone-700 leading-relaxed font-light italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-stone-200/80">
                <h4 className="text-xs font-bold text-stone-900">{t.author}</h4>
                <p className="text-[11px] text-[#1C2B4B] font-medium">{t.role}</p>
                <span className="text-[10px] text-stone-500 block mt-0.5">{t.city}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
