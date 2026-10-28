import React from 'react';
import { Search, ShieldCheck, MailCheck, CreditCard, ArrowRight } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface CoreServicesSectionProps {
  onOpenRequirementModal: () => void;
  onOpenThreadlincModal?: () => void;
}

export const CoreServicesSection: React.FC<CoreServicesSectionProps> = ({
  onOpenRequirementModal,
  onOpenThreadlincModal,
}) => {
  const { services } = siteContent;

  const icons = [Search, ShieldCheck, MailCheck, CreditCard];

  return (
    <section id="services" className="py-20 sm:py-24 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Minimal Section Header with Generous Whitespace */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1C2B4B]/8 text-[#1C2B4B] text-xs font-semibold uppercase tracking-wider mb-4">
            <span>{services.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#1E293B] tracking-tight leading-tight mb-4">
            {services.heading}
          </h2>
          <p className="text-base sm:text-lg text-stone-600 font-normal leading-relaxed">
            {services.subheading}
          </p>
        </div>

        {/* 4 Clean, Airy Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.items.map((svc, idx) => {
            const Icon = icons[idx % icons.length];
            const isThreadlinc = idx === 3;

            return (
              <div
                key={svc.number}
                className={`p-7 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                  isThreadlinc
                    ? 'bg-[#143D36]/5 border-[#143D36]/20 hover:border-[#143D36]/40'
                    : 'bg-[#FAF8F5] border-stone-200/90 hover:border-stone-400 hover:shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                      isThreadlinc ? 'bg-[#143D36] text-white' : 'bg-[#1C2B4B] text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-xs font-bold text-stone-400">
                      {svc.number}
                    </span>
                  </div>

                  <span className={`text-[11px] font-bold uppercase tracking-wider block mb-1.5 ${
                    isThreadlinc ? 'text-[#143D36]' : 'text-[#1C2B4B]'
                  }`}>
                    {svc.tagline}
                  </span>
                  
                  <h3 className="text-xl font-serif font-bold text-[#1E293B] mb-3">
                    {svc.title}
                  </h3>

                  <p className="text-sm text-stone-600 leading-relaxed font-normal">
                    {svc.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-stone-200/70">
                  {isThreadlinc && onOpenThreadlincModal ? (
                    <button
                      type="button"
                      onClick={onOpenThreadlincModal}
                      className="text-xs font-bold text-[#143D36] hover:text-[#0b2420] inline-flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
                    >
                      <span>Check Credit Terms</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={onOpenRequirementModal}
                      className="text-xs font-bold text-[#1C2B4B] hover:text-[#14223A] inline-flex items-center gap-1.5 cursor-pointer uppercase tracking-wider"
                    >
                      <span>Consult Sourcing Desk</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
