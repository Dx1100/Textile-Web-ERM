import React, { useState } from 'react';
import { Building2, Globe2, Truck, CheckCircle2, Phone, Mail, FileText, Send, Sparkles, CreditCard } from 'lucide-react';
import { WholesaleQuoteRequest } from '../types';

interface WholesalePageProps {
  onNavigateHome: () => void;
  onOpenThreadlincModal?: () => void;
  onNavigateThreadlinc?: () => void;
}

export const WholesalePage: React.FC<WholesalePageProps> = ({ 
  onNavigateHome,
  onOpenThreadlincModal,
  onNavigateThreadlinc,
}) => {
  const [form, setForm] = useState<WholesaleQuoteRequest>({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    gstNumber: '',
    monthlyMeters: '200 - 1,000 meters',
    interestedFabrics: ['Pure Banarasi Brocades', 'Haute Bridal Raw Silk'],
    requireCustomDyeingOrPrinting: false,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.companyName || !form.phone || !form.contactPerson) {
      alert('Please fill in your company and contact details.');
      return;
    }
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Bhasin Textiles Wholesale Desk! I am ${form.contactPerson || 'a buyer'} from ${form.companyName || 'our brand'}. ` +
      `We require bulk textiles (${form.monthlyMeters}) in: ${form.interestedFabrics.join(', ')}. ` +
      `Please connect us with your export sales manager.`
    );
    window.open(`https://wa.me/919811054321?text=${text}`, '_blank');
  };

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#1C2B4B] font-semibold">B2B Wholesale & Wholesale Sourcing Portal</span>
      </nav>

      {/* Hero Banner */}
      <div className="bg-[#1F1916] text-[#FAF8F5] rounded-3xl p-8 sm:p-12 mb-12 relative overflow-hidden border border-stone-800 shadow-xl">
        <div className="max-w-2xl relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold mb-3">
            <span>Direct Direct Supply</span>
            <span aria-hidden="true">·</span>
            <span>Worldwide Export (24+ Countries)</span>
            <span aria-hidden="true">·</span>
            <span>GST & IEC Registered</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold mb-4 leading-tight">
            Wholesale, Private Label & Bulk Wholesale Sourcing
          </h1>
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-6">
            Supplying leading couture houses, export labels, and ethnic retail chains across India, Europe, the Middle East, and North America. Custom jacquard weaving, Pantone lab dips, and rolled fabric bolts with door-to-door express delivery.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="px-5 py-3 text-xs font-semibold tracking-wider uppercase text-white bg-[#143D36] hover:bg-[#0E2E28] rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <Phone className="w-4 h-4 text-[#D8B26E]" />
              <span>Direct B2B WhatsApp Desk (+91 98110 54321)</span>
            </button>
          </div>
        </div>
      </div>

      {/* Tiered Order Volumes & MOQ Table */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <span className="text-xs font-bold text-[#1C2B4B] uppercase tracking-wide block mb-1">Tier 1: Sampling & Capsule</span>
          <h3 className="text-xl font-serif font-bold text-[#1F1916] mb-2">25 – 100 Meters</h3>
          <p className="text-xs text-stone-600 mb-4 leading-relaxed">
            Ideal for independent fashion designers, runway capsule collections, and bespoke bridal studios testing new color palettes and silhouettes.
          </p>
          <ul className="text-xs text-stone-600 space-y-1.5 border-t border-stone-100 pt-3">
            <li className="flex items-center gap-1.5">✓ Running catalog fabrics in stock</li>
            <li className="flex items-center gap-1.5">✓ 48-Hour dispatch from Delhi</li>
            <li className="flex items-center gap-1.5">✓ GST invoice included</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#1C2B4B]/40 ring-1 ring-[#1C2B4B]/20 shadow-md">
          <span className="text-xs font-bold text-[#1C2B4B] uppercase tracking-wide block mb-1">Tier 2: Boutique Production</span>
          <h3 className="text-xl font-serif font-bold text-[#1F1916] mb-2">100 – 1,000 Meters</h3>
          <p className="text-xs text-stone-600 mb-4 leading-relaxed">
            Tailored for established bridal boutiques, luxury pret labels, and multi-designer stores. Includes custom dyeing and dedicated account manager.
          </p>
          <ul className="text-xs text-stone-600 space-y-1.5 border-t border-stone-100 pt-3">
            <li className="flex items-center gap-1.5">✓ Custom Pantone shade lab dips</li>
            <li className="flex items-center gap-1.5">✓ Wholesale pricing tier discount (15–25%)</li>
            <li className="flex items-center gap-1.5">✓ Free physical swatch folders</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200">
          <span className="text-xs font-bold text-[#1C2B4B] uppercase tracking-wide block mb-1">Tier 3: Export & Wholesale Rolls</span>
          <h3 className="text-xl font-serif font-bold text-[#1F1916] mb-2">1,000 – 10,000+ Meters</h3>
          <p className="text-xs text-stone-600 mb-4 leading-relaxed">
            Designed for international garment manufacturers, department store brands, and global ethnic wear distributors.
          </p>
          <ul className="text-xs text-stone-600 space-y-1.5 border-t border-stone-100 pt-3">
            <li className="flex items-center gap-1.5">✓ Bespoke jacquard weave development</li>
            <li className="flex items-center gap-1.5">✓ Air (DHL/FedEx) or Sea Freight FOB Delhi</li>
            <li className="flex items-center gap-1.5">✓ Complete export documentation & phytosanitary</li>
          </ul>
        </div>
      </div>

      {/* Threadlinc Trade Financing Callout */}
      <div className="bg-[#121922] text-[#FAF8F5] rounded-2xl p-6 sm:p-8 mb-12 border border-stone-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-md">
        <div className="space-y-2 max-w-xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold">
            <CreditCard className="w-4 h-4" />
            <span>Structured Trade Credit & Financing</span>
          </div>
          <h3 className="text-xl font-serif font-bold text-white">
            Need 30–90 Day Trade Credit for Bulk Orders?
          </h3>
          <p className="text-xs text-stone-300 leading-relaxed font-light">
            Through structured trade credit facilities, we coordinate order clearance and delivery with full GST E-way bill compliance directly to your units.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-3 shrink-0">
          {onOpenThreadlincModal && (
            <button
              type="button"
              onClick={onOpenThreadlincModal}
              className="px-5 py-2.5 bg-[#D8B26E] hover:bg-[#C5A059] text-stone-950 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Apply for Trade Credit
            </button>
          )}
          {onNavigateThreadlinc && (
            <button
              type="button"
              onClick={onNavigateThreadlinc}
              className="px-4 py-2.5 bg-white/10 hover:bg-white/15 border border-white/20 text-stone-200 rounded-lg text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer"
            >
              How It Works →
            </button>
          )}
        </div>
      </div>

      {/* Embedded Wholesale Inquiry Form */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm max-w-3xl mx-auto mb-16">
        <div className="max-w-xl mb-8">
          <span className="text-xs uppercase tracking-widest text-[#1C2B4B] font-semibold block mb-1">
            Commercial RFP
          </span>
          <h2 className="text-2xl font-serif font-bold text-[#1F1916]">
            Request a Bulk Wholesale Quotation & Swatch Kit
          </h2>
          <p className="text-xs text-stone-500 mt-1">
            Our textile merchandising desk responds with tailored price tiers within 4 business hours.
          </p>
        </div>

        {submitted ? (
          <div className="text-center py-10 space-y-4 bg-[#FAF8F5] rounded-2xl p-6 border border-stone-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-[#1F1916]">
              Wholesale Request Confirmed
            </h3>
            <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
              Thank you, <strong>{form.contactPerson}</strong>. Our commercial team has received your inquiry for <strong>{form.companyName}</strong>. A dedicated wholesale catalog and price schedule have been dispatched to <strong>{form.email || form.phone}</strong>.
            </p>
            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="mt-4 px-6 py-3 bg-[#143D36] hover:bg-[#0E2E28] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Priority WhatsApp Follow-up →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Brand / Studio Name *
                </label>
                <input
                  type="text"
                  required
                  value={form.companyName}
                  onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                  placeholder="e.g. Sona Couture Mumbai"
                  className="w-full text-xs p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  value={form.contactPerson}
                  onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                  placeholder="e.g. Vikram Bhasin"
                  className="w-full text-xs p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Phone (WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="+91 98110 54321"
                  className="w-full text-xs p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Official Email *
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="merchandising@brand.com"
                  className="w-full text-xs p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  City & Country *
                </label>
                <input
                  type="text"
                  required
                  value={form.city}
                  onChange={(e) => setForm({ ...form, city: e.target.value })}
                  placeholder="Delhi / London / Dubai"
                  className="w-full text-xs p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                Estimated Volume
              </label>
              <select
                value={form.monthlyMeters}
                onChange={(e) => setForm({ ...form, monthlyMeters: e.target.value })}
                className="w-full text-xs p-3 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#1C2B4B]"
              >
                <option value="25 - 100 meters">25 – 100 meters (Sampling / Capsule)</option>
                <option value="100 - 1,000 meters">100 – 1,000 meters (Boutique Production)</option>
                <option value="1,000 - 10,000+ meters">1,000 – 10,000+ meters (Export Wholesale Rolls)</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                Target Fabric Details & Requirements
              </label>
              <textarea
                rows={3}
                value={form.notes}
                onChange={(e) => setForm({ ...form, notes: e.target.value })}
                placeholder="Mention desired GSM, pure zari vs tested zari preference, target price per meter, and delivery deadlines..."
                className="w-full text-xs p-3 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-[#1C2B4B] hover:bg-[#14223A] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors shadow-sm cursor-pointer"
            >
              Submit Wholesale Inquiry
            </button>
          </form>
        )}
      </div>

    </div>
  );
};
