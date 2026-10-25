import React from 'react';
import { Store, Building2, Scissors, TrendingUp, Layers, Sparkles, ArrowRight } from 'lucide-react';

interface WhoWeServeSectionProps {
  onSelectBuyerType: (buyerType: string) => void;
}

export const WhoWeServeSection: React.FC<WhoWeServeSectionProps> = ({ onSelectBuyerType }) => {
  const buyerProfiles = [
    {
      id: "retailers",
      title: "Retailers",
      icon: Store,
      tag: "Store Owners & Multi-Brand Outlets",
      need: "Fresh trending stock, lower minimums, and rapid replenishment ahead of festive rushes.",
      solution: "Consolidated catalog deliveries with zero deadstock risk and verified quality checks.",
    },
    {
      id: "wholesalers",
      title: "Wholesalers",
      icon: Building2,
      tag: "B2B Volume Stockists",
      need: "Direct mill rate access with bulk price margins across large lot quantities.",
      solution: "Volume tiers with transparent ex-mill contracts and roll-to-roll consistency.",
    },
    {
      id: "boutiques",
      title: "Boutiques & Designers",
      icon: Scissors,
      tag: "Bridal Ateliers & Couturiers",
      need: "Authentic Silk Mark handlooms, custom Pantone lab dips, and tactile swatches.",
      solution: "Kadhwa brocades, raw silks, and sample kits delivered directly to your cutting room.",
    },
    {
      id: "traders",
      title: "Traders",
      icon: TrendingUp,
      tag: "Fabric Brokers & Merchants",
      need: "Reliable grey cloth, steady margin spreads, and dependable delivery schedules.",
      solution: "Direct access to Western UP and Surat weaving clusters with seamless trade logistics.",
    },
    {
      id: "distributors",
      title: "Distributors",
      icon: Layers,
      tag: "Regional Distribution Networks",
      need: "Multi-category supply chain consolidation across regional Indian markets.",
      solution: "One-stop invoicing and combined freight logistics across Delhi, Surat, and Panipat.",
    },
    {
      id: "fashion_brands",
      title: "Fashion Businesses & D2C Labels",
      icon: Sparkles,
      tag: "Modern Apparel Brands",
      need: "End-to-end tech-pack sampling, private label manufacturing, and cash flow flexibility.",
      solution: "Full supply chain execution plus Threadlinc 30–90 day 'Bill to – Ship to' trade credit.",
    },
  ];

  return (
    <section id="who-we-serve" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Who We Serve</span>
            <span aria-hidden="true">·</span>
            <span>Retailers · Wholesalers · Boutiques · Brands</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F1916]">
            Built for Every Tier of the Textile Trade
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light leading-relaxed">
            Whether you operate an independent designer boutique in Mumbai or manage nationwide wholesale distribution, our sourcing infrastructure adapts to your order scale and credit requirements.
          </p>
        </div>

        {/* 6 Buyer Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {buyerProfiles.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="bg-white p-6 rounded-2xl border border-stone-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#FAF8F5] border border-stone-200 flex items-center justify-center text-[#9B1D2C] mb-4">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] uppercase font-mono font-bold text-[#D8B26E] tracking-wider block mb-1">
                    {p.tag}
                  </span>
                  <h3 className="text-xl font-serif font-bold text-[#1F1916] mb-2">{p.title}</h3>
                  <div className="space-y-2 text-xs text-stone-600 leading-relaxed">
                    <p><strong className="text-stone-800">Your Challenge:</strong> {p.need}</p>
                    <p><strong className="text-stone-800">Our Solution:</strong> {p.solution}</p>
                  </div>
                </div>

                <div className="pt-5 border-t border-stone-100 mt-5">
                  <button
                    type="button"
                    onClick={() => onSelectBuyerType(p.title)}
                    className="w-full py-2 bg-stone-50 hover:bg-[#1F1916] text-stone-800 hover:text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Talk to Our Team for {p.title}</span>
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
