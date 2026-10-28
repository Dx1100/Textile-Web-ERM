import React from 'react';
import { SourcingHubsSection } from '../components/SourcingHubsSection';
import { Navigation, Building, CheckCircle2, FileText, ChevronRight } from 'lucide-react';

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
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors cursor-pointer">
          Home
        </button>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <span className="text-[#1C2B4B] font-semibold">Sourcing Hub</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-stone-200">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#143D36] font-semibold mb-2 px-3 py-1 rounded-full bg-[#143D36]/10">
            <span>Direct Hub Access</span>
            <span aria-hidden="true">·</span>
            <span>Key Regional Textile Centers</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E293B] leading-tight mb-3">
            Where We Source Across India
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
            We operate consulting and inspection desks in Delhi, Surat, Jaipur, Panipat, Varanasi, and Kolkata. By tapping native production clusters, we help your business secure authentic wholesale rates with verified quality.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenRequirementModal()}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#1C2B4B] hover:bg-[#14223A] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-sm shrink-0 cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Ask Us to Source</span>
        </button>
      </div>

      {/* Sourcing Hubs Component */}
      <div className="mb-14">
        <SourcingHubsSection
          onSelectHub={(hub) => onOpenRequirementModal(hub)}
        />
      </div>

      {/* Cluster Advantages Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-10 border-t border-stone-200">
        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#1C2B4B]/10 text-[#1C2B4B] flex items-center justify-center mb-4">
            <Building className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
            Direct Hub Pricing
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Our sourcing relations are established directly with master weavers, specialized dyeing units, and verified manufacturers in historic wholesale katras.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-[#143D36]/10 text-[#143D36] flex items-center justify-center mb-4">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
            On-Ground Inspection
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Before any shipment leaves Surat, Varanasi, or Panipat, our field coordinators conduct 4-point fabric inspections and finish verifications before dispatch.
          </p>
        </div>

        <div className="p-6 bg-white rounded-2xl border border-stone-200 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-stone-100 text-[#143D36] flex items-center justify-center mb-4">
            <Navigation className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-base text-stone-900 mb-2">
            Consolidated Multi-Hub Logistics
          </h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Need home furnishing from Panipat, block prints from Jaipur, and sarees from Delhi? We aggregate all shipments into single consolidated freight, saving significantly on transport.
          </p>
        </div>
      </div>

    </div>
  );
};
