import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle2, Building, ShieldCheck } from 'lucide-react';

interface Partner {
  id: string;
  name: string;
  specialty: string;
  hub: string;
  type: string;
  cert: string;
}

const PARTNERS: Partner[] = [
  {
    id: 'varanasi-guild',
    name: 'Varanasi Silk Weavers Guild',
    specialty: 'Pure Katan Silk & Jamdani Brocades',
    hub: 'Varanasi, UP',
    type: 'Heritage Loom Guild',
    cert: 'Silk Mark Certified',
  },
  {
    id: 'surat-mills',
    name: 'Surat Jacquard & Textile Hub',
    specialty: 'Georgette, Chiffon & Fancy Blends',
    hub: 'Surat, Gujarat',
    type: 'High-Volume Production',
    cert: 'ISO 9001 Sourcing',
  },
  {
    id: 'jaipur-consortium',
    name: 'Jaipur Block Craft Consortium',
    specialty: 'Sanganeri & Bagru Hand Prints',
    hub: 'Jaipur, Rajasthan',
    type: 'Artisan Textile Cluster',
    cert: 'GI Tag Verified',
  },
  {
    id: 'panipat-network',
    name: 'Panipat Home Loom Network',
    specialty: 'Bedsheets, Dohars & Heavy Curtains',
    hub: 'Panipat, Haryana',
    type: 'Home Furnishing Hub',
    cert: 'Export Quality Audit',
  },
  {
    id: 'silk-mark',
    name: 'Silk Mark Registered Producers',
    specialty: '100% Pure Natural Silk Guarantee',
    hub: 'Varanasi · Bengaluru',
    type: 'Government Recognized',
    cert: 'Govt. Silk Board',
  },
  {
    id: 'chanderi-heritage',
    name: 'Chanderi Handloom Heritage',
    specialty: 'Zari Tissue, Organza & Chanderi Silk',
    hub: 'Chanderi, MP',
    type: 'Master Weaver Trust',
    cert: 'GI Tag Certified',
  },
  {
    id: 'tirupur-collective',
    name: 'Tirupur Knitwear Collective',
    specialty: 'Combed Cotton Tees & Activewear',
    hub: 'Tirupur, TN',
    type: 'Knitting & Export Unit',
    cert: 'OEKO-TEX Certified',
  },
  {
    id: 'ludhiana-mills',
    name: 'Ludhiana Wool & Thermal Mills',
    specialty: 'Winter Sweaters, Thermals & Cardigans',
    hub: 'Ludhiana, Punjab',
    type: 'Knit & Fleece Hub',
    cert: 'Direct Mill Partner',
  },
  {
    id: 'bhagalpur-tussar',
    name: 'Bhagalpur Tussar Craft Council',
    specialty: 'Matka Silks & Raw Texture Weaves',
    hub: 'Bhagalpur, Bihar',
    type: 'Wild Silk Cluster',
    cert: 'Handloom Certified',
  },
  {
    id: 'bhadohi-rugs',
    name: 'Bhadohi Carpet & Rug Guild',
    specialty: 'Hand-Tufted Carpets & Dhurries',
    hub: 'Bhadohi, UP',
    type: 'Flooring Craft Center',
    cert: 'Craft Mark Verified',
  },
];

export const PartnersSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = PARTNERS.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto moving then pausing then moving effect
  // Smoothly step forward, pause for 2.5 seconds, then move again
  useEffect(() => {
    if (isPaused) return;

    timeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, 2800);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex, isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  // We display 3 cards visible on desktop, 2 on tablet, 1 on mobile
  // To create a seamless sliding effect:
  return (
    <section 
      className="py-10 bg-slate-50/80 border-b border-slate-200 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Header with Title & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
          <div>
            <div className="mb-2">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-emerald-50 text-[#0D7A5F] border border-emerald-200/80 shadow-xs">
                Our Sourcing Partners
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-heading font-extrabold text-[#0B1B33] tracking-tight">
              Verified Production Centers & Weaver Guilds
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-normal mt-0.5">
              Direct origin ties with India's premier accredited textile clusters and certified artisan networks.
            </p>
          </div>

          <div className="flex items-center gap-2 self-start sm:self-auto">
            <span className="text-[11px] font-semibold text-slate-400 mr-2 hidden sm:inline">
              Auto-advancing · Hover to pause
            </span>
            <button
              type="button"
              onClick={handlePrev}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#0B1B33] hover:border-[#0D7A5F] hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
              aria-label="Previous partner"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:text-[#0B1B33] hover:border-[#0D7A5F] hover:bg-slate-50 transition-colors cursor-pointer shadow-2xs"
              aria-label="Next partner"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Sliding Carousel Track */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-4 sm:gap-6"
            style={{
              transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 3.5 : window.innerWidth >= 640 ? 2.2 : 1.1))}%)`,
            }}
          >
            {/* Duplicated list to create infinite smooth feel */}
            {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="w-[88%] sm:w-[46%] lg:w-[27.5%] shrink-0 bg-white rounded-xl border border-slate-200 p-4.5 sm:p-5 flex flex-col justify-between hover:border-[#0D7A5F] hover:shadow-md transition-all group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[10px] font-bold tracking-wider uppercase text-[#0D7A5F] bg-emerald-50 px-2 py-0.5 rounded">
                      {partner.type}
                    </span>
                    <span className="text-[10px] text-slate-400 font-medium">
                      {partner.hub}
                    </span>
                  </div>

                  <h3 className="text-sm sm:text-base font-heading font-bold text-[#0B1B33] group-hover:text-[#0D7A5F] transition-colors line-clamp-1">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-slate-600 mt-1 line-clamp-2 leading-relaxed">
                    {partner.specialty}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px]">
                  <div className="flex items-center gap-1 text-[#0D7A5F] font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Verified Partner</span>
                  </div>
                  <span className="text-slate-400 text-[10px]">
                    {partner.cert}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex items-center justify-center gap-1.5 mt-5">
          {PARTNERS.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setCurrentIndex(i)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                currentIndex === i 
                  ? 'w-6 bg-[#0D7A5F]' 
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};
