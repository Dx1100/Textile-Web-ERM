import React, { useState } from 'react';
import { Star, CheckCircle, Quote, Building2 } from 'lucide-react';

interface Testimonial {
  id: string;
  clientName: string;
  businessName: string;
  city: string;
  state: string;
  businessType: 'Retail Showroom' | 'Regional Wholesaler' | 'Bridal Boutique' | 'Textile Merchant';
  sourcedCategory: string;
  orderVolume: string;
  quote: string;
  rating: number;
  partnershipYears: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 'kanpur-agarwal',
    clientName: 'Rajesh Agarwal',
    businessName: 'Agarwal Sarees & Silks',
    city: 'Kanpur',
    state: 'Uttar Pradesh',
    businessType: 'Retail Showroom',
    sourcedCategory: 'Banarasi Katan, Organza & Jacquard Sarees',
    orderVolume: '150–250 Pcs / Month',
    quote: 'Before connecting with Shree Durga Agency, we had to travel frequently between Varanasi and Surat to inspect lots. Now, their team does physical pre-dispatch meterage and weave audits on our behalf. Our return rate dropped to zero, and we get genuine origin wholesale pricing.',
    rating: 5,
    partnershipYears: '4 Years',
  },
  {
    id: 'patna-somani',
    clientName: 'Vikram Somani',
    businessName: 'Somani Cloth Emporium',
    city: 'Patna',
    state: 'Bihar',
    businessType: 'Regional Wholesaler',
    sourcedCategory: 'Chanderi Suits, Rayon Prints & Dress Materials',
    orderVolume: '1,500+ Meters / Shipment',
    quote: 'The transparency in fabric pricing is something rare in wholesale markets. There are no surprise broker cuts. When festive season arrives, they courier tactile sample swatches straight to our shop in Patna so we can verify the fall and handfeel before committing capital.',
    rating: 5,
    partnershipYears: '3 Years',
  },
  {
    id: 'jaipur-rathore',
    clientName: 'Meenakshi Rathore',
    businessName: 'Rathore Couture & Bridal Studio',
    city: 'Jaipur',
    state: 'Rajasthan',
    businessType: 'Bridal Boutique',
    sourcedCategory: 'Pure Silk Brocades & Hand-Zari Lehengas',
    orderVolume: 'Custom Designer Lots (20–40 Mtrs)',
    quote: 'As a bespoke boutique owner, standard wholesale mills refuse small cut orders. Shree Durga Agency curates limited-run master brocades directly from Varanasi master weavers for our bridal orders. Their quality inspection is strict and dependable.',
    rating: 5,
    partnershipYears: '2 Years',
  },
  {
    id: 'gorakhpur-goel',
    clientName: 'Amitabh Goel',
    businessName: 'Goel Textile Mandi',
    city: 'Gorakhpur',
    state: 'Uttar Pradesh',
    businessType: 'Textile Merchant',
    sourcedCategory: 'Daily-Wear Georgettes & Synthetic Suitings',
    orderVolume: '500+ Sarees / Season',
    quote: 'Their 30 to 90 days trade credit support gave our firm the liquidity required to double our inventory ahead of wedding season. Direct dispatch with complete GST e-way bills means zero tax hassles at our district borders.',
    rating: 5,
    partnershipYears: '5 Years',
  },
  {
    id: 'indore-khatri',
    clientName: 'Sunil Khatri',
    businessName: 'Khatri Fabrics & Garments',
    city: 'Indore',
    state: 'Madhya Pradesh',
    businessType: 'Retail Showroom',
    sourcedCategory: 'Cotton Cambric, Muslin & Sanganeri Block Prints',
    orderVolume: '300+ Meters per Print Run',
    quote: 'Honest sourcing advice. If a lot from Surat or Jaipur has substandard yarn quality, their consultant tells us upfront not to buy it. Having an experienced partner on the ground protects our shop reputation with our regular customers.',
    rating: 5,
    partnershipYears: '3 Years',
  },
  {
    id: 'ranchi-gupta',
    clientName: 'Manoj Gupta',
    businessName: 'Gupta Bros Vastralaya',
    city: 'Ranchi',
    state: 'Jharkhand',
    businessType: 'Retail Showroom',
    sourcedCategory: 'Silk Sarees, Dupattas & Festive Kurtis',
    orderVolume: '80–120 Ensembles / Batch',
    quote: 'Timely parcel dispatch with verified transport receipts. Even during festival rush when transport gets stuck, their Delhi desk follows up until the bundle safely reaches our showroom door in Ranchi.',
    rating: 5,
    partnershipYears: '4 Years',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [filterType, setFilterType] = useState<string>('all');

  const filteredTestimonials = filterType === 'all'
    ? TESTIMONIALS
    : TESTIMONIALS.filter(t => t.businessType === filterType);

  const businessTypes = ['all', 'Retail Showroom', 'Regional Wholesaler', 'Bridal Boutique'];

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0D7A5F] uppercase mb-2">
              <span className="w-6 h-0.5 bg-[#0D7A5F]" />
              <span>Merchant Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B33] tracking-tight">
              Trusted by Showroom Owners in Tier 2 & Tier 3 Cities
            </h2>
            <p className="text-sm sm:text-base text-slate-600 font-normal mt-2 max-w-xl">
              Real business owners share their direct sourcing experience, quality assurance, and trade credit support.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 self-start sm:self-end">
            {businessTypes.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => setFilterType(type)}
                className={`text-xs px-3.5 py-1.5 rounded-lg font-medium transition-colors cursor-pointer ${
                  filterType === type
                    ? 'bg-[#0B1B33] text-white font-semibold'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
                }`}
              >
                {type === 'all' ? 'All Merchants' : type}
              </button>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredTestimonials.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl border border-slate-200 p-6 sm:p-7 flex flex-col justify-between hover:border-[#0D7A5F] hover:shadow-md transition-all group"
            >
              <div>
                {/* Header Row: Rating + Verified Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-semibold text-[#0D7A5F] bg-emerald-50 px-2 py-0.5 rounded">
                    <CheckCircle className="w-3 h-3" />
                    <span>Verified Buyer ({item.partnershipYears})</span>
                  </div>
                </div>

                {/* Quote Content */}
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal mb-6 relative">
                  "{item.quote}"
                </p>
              </div>

              {/* Client Info & Category */}
              <div className="pt-4 border-t border-slate-100 space-y-2">
                <div>
                  <h3 className="text-sm font-heading font-bold text-[#0B1B33]">
                    {item.clientName}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-0.5">
                    <Building2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span className="font-semibold text-slate-700">{item.businessName}</span>
                    <span className="text-slate-300">·</span>
                    <span>{item.city}, {item.state}</span>
                  </div>
                </div>

                <div className="pt-1 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="text-slate-400 font-medium">Sourced Category:</span>
                  <span className="font-bold text-[#0B1B33] truncate max-w-[170px]" title={item.sourcedCategory}>
                    {item.sourcedCategory}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Sourcing Guarantee Footer Strip */}
        <div className="mt-12 p-6 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#0D7A5F]" />
            <span className="font-semibold text-[#0B1B33]">
              100% Pre-Dispatch Quality Inspection Guarantee
            </span>
            <span className="text-slate-400 hidden sm:inline">— Physical check before transport dispatch.</span>
          </div>
          <span className="text-slate-500 font-medium">
            Serving 450+ retail merchants across 18 states
          </span>
        </div>

      </div>
    </section>
  );
};
