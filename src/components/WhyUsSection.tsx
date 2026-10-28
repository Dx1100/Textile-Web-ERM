import React from 'react';
import { Award, ShieldCheck, Layers, Sparkles } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface WhyUsSectionProps {
  onWorkWithUs: () => void;
}

export const WhyUsSection: React.FC<WhyUsSectionProps> = ({ onWorkWithUs }) => {
  const { whyUs } = siteContent;

  const icons = [Award, ShieldCheck, Layers, Sparkles];

  return (
    <section id="why-us" className="py-20 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Minimal Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 text-[#0D7A5F] border border-emerald-200/80 text-xs font-bold tracking-wider uppercase shadow-xs">
              {whyUs.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B1B33] tracking-tight leading-tight mb-4">
            {whyUs.heading}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            {whyUs.subheading}
          </p>
        </div>

        {/* 4 Clean Advantages */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16">
          {whyUs.points.map((pt, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={pt.title}
                className="p-7 rounded-2xl bg-[#FAF8F5] border border-stone-200/90 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white border border-stone-200 flex items-center justify-center text-[#143D36] mb-6 shadow-2xs">
                    <Icon className="w-5 h-5" />
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#1E293B] mb-2.5">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    {pt.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Bottom Banner */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#1C2B4B] text-[#FAF8F5] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-serif font-bold text-white mb-2">
              Ready to Upgrade Your Sourcing Margins?
            </h3>
            <p className="text-sm text-stone-300 font-normal">
              Tell our consulting team what you want to source for your shop.
            </p>
          </div>
          <button
            type="button"
            onClick={onWorkWithUs}
            className="px-7 py-3.5 bg-white hover:bg-stone-100 text-[#1C2B4B] rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer shadow-sm"
          >
            Start Sourcing Consultation
          </button>
        </div>

      </div>
    </section>
  );
};
