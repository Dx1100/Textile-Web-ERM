import React from 'react';
import { Store, Scissors, Building2, Globe, ArrowRight } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface WhoWeServeSectionProps {
  onSelectBuyerType: (buyerType: string) => void;
}

export const WhoWeServeSection: React.FC<WhoWeServeSectionProps> = ({ onSelectBuyerType }) => {
  const { whoWeServe } = siteContent;

  const icons = [Store, Scissors, Building2, Globe];

  return (
    <section id="who-we-serve" className="py-20 sm:py-24 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Minimal Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="mb-4">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg bg-emerald-50 text-[#0D7A5F] border border-emerald-200/80 text-xs font-bold tracking-wider uppercase shadow-xs">
              {whoWeServe.badge}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-[#0B1B33] tracking-tight leading-tight mb-4">
            {whoWeServe.heading}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            {whoWeServe.subheading}
          </p>
        </div>

        {/* 4 Clean Buyer Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {whoWeServe.buyers.map((buyer, idx) => {
            const Icon = icons[idx % icons.length];

            return (
              <div
                key={buyer.title}
                className="bg-white p-7 rounded-2xl border border-stone-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#143D36] mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <span className="text-[10px] uppercase font-bold text-[#143D36] tracking-wider block mb-1">
                    {buyer.cityType}
                  </span>

                  <h3 className="text-xl font-serif font-bold text-[#1E293B] mb-3">
                    {buyer.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal mb-5">
                    {buyer.benefit}
                  </p>

                  <div className="p-3 bg-stone-50 rounded-xl text-xs text-stone-600">
                    <span className="text-[10px] uppercase font-bold text-stone-400 block tracking-wider">
                      Typical Order Size
                    </span>
                    <strong className="text-stone-800 font-semibold block mt-0.5">
                      {buyer.typicalOrder}
                    </strong>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-100">
                  <button
                    type="button"
                    onClick={() => onSelectBuyerType(buyer.title)}
                    className="w-full py-2.5 bg-stone-50 hover:bg-[#1F1916] text-stone-800 hover:text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Consult for {buyer.title.split(' ')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
