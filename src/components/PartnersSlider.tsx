import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { mediaAssets } from '../content';

interface Partner {
  id: string;
  name: string;
  hub: string;
  logoUrl?: string;
  monogram: string;
}

const PARTNERS: Partner[] = [
  {
    id: 'varanasi-guild',
    name: 'Varanasi Silk Weavers Guild',
    hub: 'Varanasi, UP',
    logoUrl: mediaAssets.partnerBrands[0]?.logo,
    monogram: 'VS',
  },
  {
    id: 'surat-producers',
    name: 'Surat Jacquard & Textile Hub',
    hub: 'Surat, Gujarat',
    logoUrl: mediaAssets.partnerBrands[1]?.logo,
    monogram: 'SJ',
  },
  {
    id: 'jaipur-consortium',
    name: 'Jaipur Block Craft Consortium',
    hub: 'Jaipur, Rajasthan',
    logoUrl: mediaAssets.partnerBrands[3]?.logo,
    monogram: 'JB',
  },
  {
    id: 'panipat-network',
    name: 'Panipat Home Loom Network',
    hub: 'Panipat, Haryana',
    logoUrl: mediaAssets.partnerBrands[2]?.logo,
    monogram: 'PL',
  },
  {
    id: 'silk-mark',
    name: 'Silk Mark Certified Guild',
    hub: 'Varanasi · Bengaluru',
    logoUrl: mediaAssets.partnerBrands[0]?.logo,
    monogram: 'SM',
  },
  {
    id: 'chanderi-heritage',
    name: 'Chanderi Handloom Heritage',
    hub: 'Chanderi, MP',
    logoUrl: mediaAssets.partnerBrands[7]?.logo,
    monogram: 'CH',
  },
  {
    id: 'tirupur-collective',
    name: 'Tirupur Knitwear Collective',
    hub: 'Tirupur, TN',
    logoUrl: mediaAssets.partnerBrands[6]?.logo,
    monogram: 'TK',
  },
  {
    id: 'ludhiana-knitwear',
    name: 'Ludhiana Wool & Thermal Weaves',
    hub: 'Ludhiana, Punjab',
    logoUrl: mediaAssets.partnerBrands[4]?.logo,
    monogram: 'LW',
  },
  {
    id: 'bhagalpur-tussar',
    name: 'Bhagalpur Tussar Craft Council',
    hub: 'Bhagalpur, Bihar',
    logoUrl: mediaAssets.partnerBrands[5]?.logo,
    monogram: 'BT',
  },
  {
    id: 'delhi-couture',
    name: 'Katra Neel Embroidery Guild',
    hub: 'Chandni Chowk, Delhi',
    logoUrl: mediaAssets.partnerBrands[8]?.logo,
    monogram: 'KN',
  },
];

export const PartnersSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = PARTNERS.length;
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auto moving then pausing then moving effect (2.8s display interval)
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
              Direct origin ties with India's accredited textile clusters and artisan networks.
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
        <div className="relative overflow-hidden py-1">
          <div
            className="flex transition-transform duration-700 ease-in-out gap-4 sm:gap-5"
            style={{
              transform: `translateX(-${currentIndex * (100 / (window.innerWidth >= 1024 ? 4.8 : window.innerWidth >= 640 ? 3.2 : 1.8))}%)`,
            }}
          >
            {/* Duplicated array for seamless continuous sliding */}
            {[...PARTNERS, ...PARTNERS].map((partner, idx) => (
              <div
                key={`${partner.id}-${idx}`}
                className="w-[52%] sm:w-[29%] lg:w-[19.2%] shrink-0 bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col items-center justify-between text-center hover:border-[#0D7A5F] hover:shadow-sm transition-all group min-h-[148px]"
              >
                {/* 1. Logo Display Option */}
                <div className="w-full h-14 flex items-center justify-center p-1">
                  {partner.logoUrl ? (
                    <div className="w-full h-full flex items-center justify-center bg-slate-50/80 rounded-lg p-1.5 border border-slate-100 group-hover:border-emerald-200/80 group-hover:bg-emerald-50/30 transition-all">
                      <img
                        src={partner.logoUrl}
                        alt={`${partner.name} logo`}
                        className="max-h-10 max-w-[120px] object-cover rounded filter grayscale group-hover:grayscale-0 transition-all duration-300"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 font-bold text-sm tracking-wider group-hover:bg-emerald-50 group-hover:text-[#0D7A5F] group-hover:border-emerald-200 transition-colors">
                      {partner.monogram}
                    </div>
                  )}
                </div>

                {/* 2. Partner Name (No category mentioned) */}
                <div className="w-full mt-2 pt-2 border-t border-slate-100">
                  <h3 className="text-xs sm:text-[13px] font-heading font-bold text-[#0B1B33] group-hover:text-[#0D7A5F] transition-colors line-clamp-1 w-full" title={partner.name}>
                    {partner.name}
                  </h3>
                  <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate w-full">
                    {partner.hub}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Navigation Indicator */}
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
