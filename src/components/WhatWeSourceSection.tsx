import React from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface WhatWeSourceSectionProps {
  onSelectCategoryRequirement: (categoryName: string) => void;
  onExploreFullCatalog?: () => void;
}

export const WhatWeSourceSection: React.FC<WhatWeSourceSectionProps> = ({
  onSelectCategoryRequirement,
  onExploreFullCatalog,
}) => {
  const categories = [
    {
      id: "womens",
      name: "Sarees & Suits",
      subtitle: "Banarasi, Kanjivaram, Chanderi & Designer Sets",
      items: ["Banarasi Silk Sarees", "Surat Fancy Jacquards", "Chanderi Suit Sets", "Festive Dupattas"],
      hubs: "Varanasi · Surat · Delhi",
      badge: "Highest Demand",
    },
    {
      id: "lehengas",
      name: "Bridal Couture",
      subtitle: "Handcrafted Zardozi & Wedding Ensembles",
      items: ["Bridal Lehengas", "Partywear Sets", "Velvet & Net Cuts", "Gota Patti"],
      hubs: "Delhi · Surat",
      badge: "Wedding Season",
    },
    {
      id: "fabrics",
      name: "Running Fabrics",
      subtitle: "Silks, Brocades, Tissue & Linens",
      items: ["Pure Mulberry Brocades", "Raw Silk", "Chanderi Gold Tissue", "Dola Silk"],
      hubs: "Surat · Varanasi · Meerut",
      badge: "Silk Mark Tested",
    },
  ];

  return (
    <section id="what-we-source" className="py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1916]">
              Products We Source Across India
            </h2>
            <p className="text-sm text-stone-600 mt-2 font-normal leading-relaxed">
              Curated ethnic wear, sarees, suits, and fabrics directly sourced from verified weaver clusters and producers.
            </p>
          </div>

          {onExploreFullCatalog && (
            <button
              type="button"
              onClick={onExploreFullCatalog}
              className="px-5 py-2.5 rounded-xl border border-stone-300 hover:border-stone-800 text-xs font-semibold text-stone-800 transition-colors whitespace-nowrap cursor-pointer shrink-0 self-start md:self-end"
            >
              Browse Detailed Catalog →
            </button>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="p-6 bg-[#FAF8F5] rounded-2xl border border-stone-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#143D36] bg-[#143D36]/10 px-2.5 py-1 rounded-md inline-block mb-3">
                  {cat.badge}
                </span>
                <h3 className="text-xl font-serif font-bold text-[#1E293B] mb-1">{cat.name}</h3>
                <p className="text-xs text-stone-500 mb-4">{cat.subtitle}</p>

                <ul className="space-y-1.5 text-xs text-stone-700 mb-6">
                  {cat.items.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#143D36] shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-stone-200">
                <span className="text-[11px] text-stone-500 block mb-3">
                  Primary Hubs: <strong className="text-stone-800">{cat.hubs}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => onSelectCategoryRequirement(cat.name)}
                  className="w-full py-2.5 px-3 bg-[#1C2B4B] hover:bg-[#14223A] text-white rounded-xl text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <span>Send Requirement</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
