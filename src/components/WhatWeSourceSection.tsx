import React from 'react';
import { Sparkles, ArrowRight, Layers, Check } from 'lucide-react';

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
      name: "Women's Fashion",
      subtitle: "Bridal, festive & contemporary ethnic couture",
      items: ["Banarasi & Kanjivaram Sarees", "Hand-Embroidered Bridal Lehengas", "Chanderi & Anarkali Suits", "Co-ord Sets & Tunics", "Festive Dupattas"],
      hubs: "Delhi · Surat · Jaipur · Kolkata",
      accent: "from-[#8E1616] to-[#5C101A]",
      badge: "Highest Volume",
    },
    {
      id: "mens",
      name: "Men's Fashion",
      subtitle: "Royal groomswear, ethnic sets & premium shirting",
      items: ["Imperial Tanchoi Sherwanis", "Bandhgala & Jodhpuri Coats", "Kurta Pyjama Sets", "Nehru / Modi Jackets", "Loom Safas & Turbans"],
      hubs: "Varanasi · Delhi · Meerut",
      accent: "from-[#1F2E45] to-[#141C2B]",
      badge: "Royal Weaves",
    },
    {
      id: "kids",
      name: "Kidswear",
      subtitle: "Traditional ethnic & breathable cotton outfits",
      items: ["Boys Dhoti Kurta & Waistcoat Sets", "Girls Lehenga Choli Ensembles", "Festive Kurti Shararas", "Organic Cotton Casuals"],
      hubs: "Delhi · Surat · Jaipur",
      accent: "from-[#3D5A50] to-[#253932]",
      badge: "Skin-Friendly",
    },
    {
      id: "fabrics",
      name: "Fabrics & Greige",
      subtitle: "Pure silks, brocades, sheer tissues & mill roll goods",
      items: ["Pure Mulberry Katan Brocades", "Haute Bridal Raw Silk", "Chanderi Gold Tissue", "Dola Silk & Crepes", "80 Lea Pure Flax Linen"],
      hubs: "Surat · Delhi · Meerut · Panipat",
      accent: "from-[#8B6B23] to-[#5C4512]",
      badge: "Silk Mark Tested",
    },
    {
      id: "home",
      name: "Home Furnishing",
      subtitle: "Jacquard upholstery, curtains, drapes & bed linen",
      items: ["High-GSM Jacquard Upholstery", "Blackout & Sheer Drapes", "Export Bedspreads & Quilts", "Cushion Covers & Throws", "Recycled Cotton Yarns"],
      hubs: "Panipat · Surat · Delhi",
      accent: "from-[#4A3B32] to-[#2E241E]",
      badge: "Export Grade",
    },
    {
      id: "accessories",
      name: "Accessories & Trims",
      subtitle: "Heirloom borders, laces, dupattas & embellishments",
      items: ["Zari Jacquard Saree Borders", "Gota Patti & Cutwork Trims", "Hand-Dyed Bandhani Dupattas", "Embroidered Velvet Shawls"],
      hubs: "Surat · Jaipur · Delhi",
      accent: "from-[#7A2832] to-[#48121A]",
      badge: "Artisan Finished",
    },
  ];

  return (
    <section id="what-we-source" className="py-16 sm:py-20 bg-white border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
              <span>Sourcing Portfolio</span>
              <span aria-hidden="true">·</span>
              <span>Direct Loom & Mill Network</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F1916]">
              What We Source: Broad-Spectrum Textile & Apparel
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light leading-relaxed">
              From pure handloom brocades and bridal couture to mass commercial fabrics and export-grade home furnishings. Tap verified production mills across India through a single coordination agency.
            </p>
          </div>

          {onExploreFullCatalog && (
            <button
              type="button"
              onClick={onExploreFullCatalog}
              className="px-4 py-2.5 rounded-lg border border-stone-300 hover:border-stone-800 text-xs font-semibold text-stone-800 transition-colors whitespace-nowrap cursor-pointer shrink-0 self-start md:self-end"
            >
              Browse Detailed Catalog Archive →
            </button>
          )}
        </div>

        {/* 6 Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group bg-[#FAF8F5] rounded-2xl border border-stone-200/90 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card Banner Header */}
              <div className={`p-6 bg-gradient-to-r ${cat.accent} text-white relative overflow-hidden`}>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] uppercase font-bold tracking-wider text-amber-200/90 bg-black/25 px-2 py-0.5 rounded">
                    {cat.badge}
                  </span>
                  <span className="text-[11px] text-white/80 font-mono">Hubs: {cat.hubs.split('·')[0]}</span>
                </div>
                <h3 className="text-xl font-serif font-bold tracking-wide text-white">{cat.name}</h3>
                <p className="text-xs text-white/80 mt-1 font-light">{cat.subtitle}</p>
              </div>

              {/* Items List */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <span className="text-[10px] uppercase tracking-wider font-bold text-stone-500 block mb-2">
                    Key Sourced Items:
                  </span>
                  <ul className="space-y-1.5 text-xs text-stone-700">
                    {cat.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#9B1D2C] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-stone-200/80">
                  <div className="text-[11px] text-stone-500 mb-3 flex items-center justify-between">
                    <span>Direct Mill Access:</span>
                    <strong className="text-stone-800">{cat.hubs}</strong>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectCategoryRequirement(cat.name)}
                    className="w-full py-2.5 px-3 bg-[#1F1916] group-hover:bg-[#9B1D2C] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 shadow-xs cursor-pointer"
                  >
                    <span>Send Product Requirement</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
