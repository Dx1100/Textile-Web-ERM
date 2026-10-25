import React from 'react';
import { SourcingHubsSection } from '../components/SourcingHubsSection';
import { MapPin, Navigation, Building, CheckCircle2, FileText, ArrowRight } from 'lucide-react';

interface SourcingNetworkPageProps {
  onNavigateHome: () => void;
  onOpenRequirementModal: (hub?: string) => void;
}

export const SourcingNetworkPage: React.FC<SourcingNetworkPageProps> = ({
  onNavigateHome,
  onOpenRequirementModal,
}) => {
  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">Sourcing Network (Major Indian Textile Markets)</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-stone-200">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Direct Market Access</span>
            <span aria-hidden="true">·</span>
            <span>7 Core Regional Production Clusters</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1916] leading-tight mb-3">
            Where We Source Across India
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            We operate boots on the ground in Delhi, Surat, Jaipur, Panipat, Meerut, Muzaffarnagar, and Kolkata. By tapping native production clusters, we bypass multiple layers of middlemen to secure direct ex-mill pricing and priority loom slots.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenRequirementModal()}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Ask Us to Source</span>
        </button>
      </div>

      {/* Section 4 Blueprint Component */}
      <div className="mb-14">
        <SourcingHubsSection
          onSelectHub={(hub) => onOpenRequirementModal(hub)}
        />
      </div>

      {/* Cluster Advantages Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone-200">
        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#9B1D2C]/10 text-[#9B1D2C] flex items-center justify-center mb-4">
            <Building className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
            No Intermediary Markups
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Our contracts are forged directly with master weavers, mill heads, and printing units in industrial GIDC estates and generational wholesale katras.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#143D36]/10 text-[#143D36] flex items-center justify-center mb-4">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
            Local QC Officers On-Site
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Before any shipment leaves Surat or Panipat, our field coordinators conduct 4-point fabric inspections and colorfastness rub tests right on the floor.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-[#D8B26E]/20 text-[#926F2D] flex items-center justify-center mb-4">
            <Navigation className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
            Consolidated Multi-Hub Logistics
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Need home furnishing from Panipat, block prints from Jaipur, and silks from Delhi? We aggregate all shipments into single consolidated freight, saving up to 35% on transport.
          </p>
        </div>
      </div>

    </div>
  );
};
