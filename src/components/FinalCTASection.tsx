import React, { useState } from 'react';
import { Send, Phone, CheckCircle2, ShieldCheck, ArrowRight, CreditCard } from 'lucide-react';
import { SourcingRequirement } from '../types';

interface FinalCTASectionProps {
  onOpenRequirementModal: () => void;
  onOpenThreadlincModal?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = ({
  onOpenRequirementModal,
  onOpenThreadlincModal,
}) => {
  const [quickForm, setQuickForm] = useState({
    businessName: '',
    phone: '',
    category: "Women's Fashion",
    requirement: '',
    billToShipTo: true,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!quickForm.businessName || !quickForm.phone) {
      alert("Please provide your business name and contact number.");
      return;
    }
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shree Durga Agency! I am from ${quickForm.businessName || "our business"}. ` +
      `We need to source ${quickForm.category}: "${quickForm.requirement || "bulk requirements"}". ` +
      `Bill to - Ship to trade credit requested: ${quickForm.billToShipTo ? "YES (Threadlinc)" : "No"}. ` +
      `Please connect with us.`
    );
    window.open(`https://wa.me/919811054321?text=${text}`, '_blank');
  };

  return (
    <section id="final-cta" className="py-16 sm:py-24 bg-[#1F1916] text-[#FAF8F5] relative overflow-hidden">
      {/* Background warm glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#9B1D2C]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Heading & Trust Copy from User Blueprint */}
          <div className="lg:col-span-6 space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold">
              <span>Section 10</span>
              <span aria-hidden="true">·</span>
              <span>Direct Mill Sourcing Coordination</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white leading-tight">
              Looking for a reliable textile sourcing partner?
            </h2>

            <p className="text-sm sm:text-base text-stone-300 leading-relaxed font-light max-w-lg">
              Tell us what you're looking for and our team will help you source it across Delhi, Surat, Jaipur, Panipat, Meerut, and Kolkata with transparent mill rates and Threadlinc trade credit.
            </p>

            <div className="pt-2 space-y-2 text-xs text-stone-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D8B26E]" />
                <span>Physical sample swatches delivered within 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D8B26E]" />
                <span>Structured "Bill to – Ship to" trade financing via Threadlinc</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#D8B26E]" />
                <span>Zero hidden brokerage fees · Direct ex-mill commercial rates</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="tel:+919811054321"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-stone-700 bg-stone-900/60 hover:bg-stone-800 text-xs text-white font-medium transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D8B26E]" />
                <span>Call Desk: +91 98110 54321</span>
              </a>

              {onOpenThreadlincModal && (
                <button
                  type="button"
                  onClick={onOpenThreadlincModal}
                  className="text-xs text-[#D8B26E] hover:underline underline-offset-4 font-semibold px-2"
                >
                  Need Threadlinc 30–90 Day Trade Credit? →
                </button>
              )}
            </div>
          </div>

          {/* Right Column: Embedded Sourcing Requirement Form */}
          <div className="lg:col-span-6 bg-white text-[#1F1916] p-6 sm:p-8 rounded-3xl shadow-2xl border border-stone-200">
            {submitted ? (
              <div className="text-center py-8 space-y-3">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-stone-900">
                  Requirement Logged
                </h3>
                <p className="text-xs text-stone-600 max-w-sm mx-auto leading-relaxed">
                  Thank you! Our textile merchandising coordinator will review your requirements for <strong>{quickForm.businessName}</strong> and contact you at <strong>{quickForm.phone}</strong> shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="px-5 py-2.5 bg-[#143D36] hover:bg-[#0E2E28] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp Follow-up Now</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between pb-2 border-b border-stone-100">
                  <h3 className="text-base font-serif font-bold text-stone-900">
                    Quick Sourcing Enquiry
                  </h3>
                  <button
                    type="button"
                    onClick={onOpenRequirementModal}
                    className="text-xs text-[#9B1D2C] hover:underline font-semibold cursor-pointer"
                  >
                    Open Detailed Form →
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      Business / Boutique Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={quickForm.businessName}
                      onChange={(e) => setQuickForm({ ...quickForm, businessName: e.target.value })}
                      placeholder="e.g. Maya Fashions"
                      className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={quickForm.phone}
                      onChange={(e) => setQuickForm({ ...quickForm, phone: e.target.value })}
                      placeholder="+91 98110 54321"
                      className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Primary Sourcing Category
                  </label>
                  <select
                    value={quickForm.category}
                    onChange={(e) => setQuickForm({ ...quickForm, category: e.target.value })}
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#9B1D2C]"
                  >
                    <option value="Women's Fashion">Women's Fashion (Sarees, Lehengas, Suits, Kurtis)</option>
                    <option value="Men's Fashion">Men's Fashion (Sherwanis, Kurta Sets, Suiting)</option>
                    <option value="Kidswear">Kidswear (Ethnic Sets & Cotton Outfits)</option>
                    <option value="Fabrics">Fabrics & Greige (Brocades, Raw Silks, Tissues, Linens)</option>
                    <option value="Home Furnishing">Home Furnishing (Upholstery, Drapes, Bed Linens)</option>
                    <option value="Accessories">Accessories (Dupattas, Borders, Trims)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Tell Us What You Need Sourced
                  </label>
                  <textarea
                    rows={2}
                    value={quickForm.requirement}
                    onChange={(e) => setQuickForm({ ...quickForm, requirement: e.target.value })}
                    placeholder="e.g. 500 meters of raw silk fabric + 100 sets of chanderi kurtas in pastel shades..."
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="financeQuick"
                    checked={quickForm.billToShipTo}
                    onChange={(e) => setQuickForm({ ...quickForm, billToShipTo: e.target.checked })}
                    className="rounded border-stone-300 text-[#9B1D2C] focus:ring-[#9B1D2C]"
                  />
                  <label htmlFor="financeQuick" className="text-xs text-stone-700 cursor-pointer">
                    Require <strong>Threadlinc "Bill to – Ship to"</strong> trade financing (30–90 days credit)
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Sourcing Requirement</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
