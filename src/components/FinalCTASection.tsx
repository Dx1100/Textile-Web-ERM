import React, { useState } from 'react';
import { Send, MessageCircle, CheckCircle2 } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface FinalCTASectionProps {
  onOpenRequirementModal?: () => void;
  onOpenThreadlincModal?: () => void;
}

export const FinalCTASection: React.FC<FinalCTASectionProps> = () => {
  const { brand } = siteContent;
  const [form, setForm] = useState({
    businessName: '',
    city: '',
    phone: '',
    category: "Sarees & Lehengas",
    details: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessName || !form.phone) return;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello ${brand.name}!\n\n` +
      `Business: ${form.businessName || "Retail Shop"}\n` +
      `City: ${form.city || "India"}\n` +
      `Category: ${form.category}\n\n` +
      `I want to enquire about sourcing with Threadlinc trade credit.`
    );
    window.open(`https://wa.me/${brand.contact.whatsappNumber}?text=${text}`, '_blank');
  };

  return (
    <section className="py-16 sm:py-24 bg-[#0B1B33] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Value Statement */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-emerald-500/15 text-emerald-300 border border-emerald-500/30 shadow-xs">
                Fast-Track Sourcing Desk
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
              Start Sourcing Directly For Your Showroom
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Tell us your textile requirement. Our consulting desk in Chandni Chowk connects you directly with verified regional producers, pre-dispatch quality checks, and structured trade credit.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={handleWhatsApp}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-[#0D7A5F] hover:bg-[#0A634D] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Sourcing Desk</span>
              </button>
              <span className="text-xs text-slate-400 font-medium">
                Direct consultant response within 2 hours
              </span>
            </div>
          </div>

          {/* Right Column: Clean, Minimal Form with Emerald Top Accent */}
          <div className="lg:col-span-6 bg-white text-slate-900 p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-xl border-t-4 border-t-[#0D7A5F]">
            {submitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 bg-emerald-50 text-[#0D7A5F] rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-bold text-slate-900">
                  Requirement Received
                </h3>
                <p className="text-xs text-slate-600 max-w-xs mx-auto leading-relaxed">
                  Thank you! Our consultant will contact <strong>{form.businessName}</strong> shortly with pricing and catalogs.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-[#0D7A5F] hover:underline cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <h3 className="text-lg font-heading font-extrabold text-[#0B1B33]">
                    Quick Sourcing Inquiry
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Direct wholesale quotes & fabric swatches.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-700 mb-1">
                      Shop / Business Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="e.g. Royal Sarees"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0D7A5F] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-700 mb-1">
                      City / State *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="e.g. Kanpur, UP"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0D7A5F] focus:bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-700 mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. 98110 54321"
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0D7A5F] focus:bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-700 mb-1">
                      Primary Interest
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0D7A5F] focus:bg-white"
                    >
                      <option value="Sarees (Banarasi, Surat, Organza)">Sarees & Drapes</option>
                      <option value="Suits & Dress Materials">Suits & Dress Materials</option>
                      <option value="Bridal & Festive Lehengas">Bridal Lehengas</option>
                      <option value="Running Fabrics & Brocades">Running Fabrics & Brocades</option>
                      <option value="Home Furnishings">Home Furnishings</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider font-bold text-slate-700 mb-1">
                    Requirement Notes (Optional)
                  </label>
                  <input
                    type="text"
                    value={form.details}
                    onChange={(e) => setForm({ ...form, details: e.target.value })}
                    placeholder="e.g. 25 Banarasi silk sarees under ₹4,000"
                    className="w-full text-xs p-2.5 bg-slate-50 border border-slate-300 rounded-lg focus:outline-none focus:border-[#0D7A5F] focus:bg-white"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#0B1B33] hover:bg-[#0D7A5F] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-sm mt-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Sourcing Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
