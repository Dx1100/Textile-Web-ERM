import React from 'react';
import { ArrowRight } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface SourcingHubsSectionProps {
  onSelectHub: (hubName: string) => void;
}

export const SourcingHubsSection: React.FC<SourcingHubsSectionProps> = ({ onSelectHub }) => {
  const { hubs } = siteContent;

  return (
    <section id="sourcing-hubs" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Minimal Section Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0D7A5F] uppercase mb-2">
            <span className="w-6 h-0.5 bg-[#0D7A5F]" />
            <span>Sourcing Network</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B33] tracking-tight">
            Regional Sourcing Hubs
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal mt-2 max-w-xl">
            On-ground sourcing and pre-dispatch physical inspection desks across India.
          </p>
        </div>

        {/* Aligned 4-Column Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {hubs.cities.map((city) => (
            <div
              key={city.id}
              className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between hover:border-[#0D7A5F] hover:shadow-md transition-all group"
            >
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 mb-2">
                  <span className="text-[#0D7A5F] font-bold text-[10px] uppercase tracking-wider">Region:</span>
                  <span>{city.state}</span>
                </div>
                <h3 className="text-xl font-heading font-extrabold text-[#0B1B33] mb-2 group-hover:text-[#0D7A5F] transition-colors">
                  {city.city}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  {city.specialty}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-500 font-medium">
                  {city.dispatchTime}
                </span>
                <button
                  type="button"
                  onClick={() => onSelectHub(city.city)}
                  className="text-xs font-bold text-[#0B1B33] hover:text-[#0D7A5F] flex items-center gap-1 cursor-pointer transition-colors"
                >
                  <span>Enquire</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
