import React from 'react';
import { HowWeWorkSection } from '../components/HowWeWorkSection';
import { FileText, ArrowRight, ShieldCheck, CreditCard } from 'lucide-react';

interface OurProcessPageProps {
  onNavigateHome: () => void;
  onOpenRequirementModal: () => void;
  onOpenThreadlincModal?: () => void;
}

export const OurProcessPage: React.FC<OurProcessPageProps> = ({
  onNavigateHome,
  onOpenRequirementModal,
  onOpenThreadlincModal,
}) => {
  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">How We Work (7-Step Sourcing Pipeline)</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-stone-200">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Transparent Operations</span>
            <span aria-hidden="true">·</span>
            <span>Requirement to Doorstep Delivery</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1916] leading-tight mb-3">
            Our 7-Step Sourcing Process
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            Every sourcing assignment follows a strict, predictable pipeline: Requirement → Sourcing → Shortlisting → Approval → Order → Dispatch → Delivery. Including our seamless <span className="font-semibold text-stone-900">Threadlinc Bill to – Ship to</span> financing at Step 5.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenRequirementModal}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Start Your Requirement</span>
        </button>
      </div>

      {/* Section 5 Blueprint Component */}
      <div className="mb-14">
        <HowWeWorkSection onStartRequirement={onOpenRequirementModal} />
      </div>

      {/* Threadlinc Bill to - Ship to Integration Spotlight */}
      <div className="p-8 bg-gradient-to-r from-[#143D36] to-[#1F544A] text-white rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-[#D8B26E] text-xs font-bold uppercase tracking-widest mb-2">
            <CreditCard className="w-4 h-4" />
            <span>Financing Integration · Sister Concern Threadlinc</span>
          </div>
          <h2 className="text-2xl font-serif font-bold mb-2">
            How Does "Bill to – Ship to" Work in the Order Phase?
          </h2>
          <p className="text-xs text-stone-200 leading-relaxed font-light">
            During Step 5 (Order Placement), you don't need to freeze working capital. Threadlinc acts as the billing entity (Bill to: Threadlinc), purchasing directly from the mill on your behalf, while the consignment ships straight to your store or warehouse (Ship to: Your Business). Flexible 30 to 90 days trade credit.
          </p>
        </div>

        {onOpenThreadlincModal && (
          <button
            type="button"
            onClick={onOpenThreadlincModal}
            className="px-6 py-3.5 bg-[#FAF8F5] text-[#143D36] hover:bg-white text-xs font-bold uppercase tracking-wider rounded-xl transition-colors shadow-sm shrink-0 flex items-center gap-2 cursor-pointer"
          >
            <span>Learn About Bill to – Ship to</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
};
