import React from 'react';
import { ArrowRight, CreditCard } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface ThreadlincBannerProps {
  onOpenThreadlincModal: () => void;
  onNavigateThreadlincPage?: () => void;
}

export const ThreadlincBanner: React.FC<ThreadlincBannerProps> = ({
  onOpenThreadlincModal,
  onNavigateThreadlincPage,
}) => {
  const { brand } = siteContent;

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="bg-[#0B1B33] text-white rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row md:items-center justify-between gap-8 shadow-md border-t-4 border-t-[#0D7A5F]">
          
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-3">
              <CreditCard className="w-4 h-4 text-emerald-400" />
              <span>{brand.threadlinc.firmName} Trade Financing</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-heading font-extrabold text-white tracking-tight mb-2">
              30 to 90 Days Structured Trade Credit
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed font-normal">
              Stock bulk goods today for your retail shop. Stock arrives with verified invoices while Threadlinc provides deferred payment settlement over 30 to 90 days.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onOpenThreadlincModal}
              className="px-6 py-3.5 bg-[#0D7A5F] hover:bg-[#0A634D] text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm"
            >
              <span>Check Eligibility</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            {onNavigateThreadlincPage && (
              <button
                type="button"
                onClick={onNavigateThreadlincPage}
                className="px-5 py-3.5 border border-white/20 hover:border-emerald-400 hover:text-emerald-300 text-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer"
              >
                <span>Learn More</span>
              </button>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
