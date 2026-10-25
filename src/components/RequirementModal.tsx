import React, { useState } from 'react';
import { X, FileText, CheckCircle2, Phone, CreditCard, Send, Sparkles } from 'lucide-react';
import { SourcingRequirement } from '../types';

interface RequirementModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const RequirementModal: React.FC<RequirementModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
}) => {
  const [form, setForm] = useState<SourcingRequirement>({
    category: (initialCategory as any) || "Women's Fashion",
    sourcingHub: "Any / Best Match",
    quantity: "500 – 2,000 units / meters",
    targetPrice: "",
    billToShipToFinance: true,
    businessName: "",
    contactPerson: "",
    phone: "",
    email: "",
    city: "",
    notes: "",
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const categories = [
    "Women's Fashion",
    "Men's Fashion",
    "Kidswear",
    "Fabrics",
    "Home Furnishing",
    "Accessories",
  ] as const;

  const hubs = [
    "Any / Best Match",
    "Delhi",
    "Surat",
    "Jaipur",
    "Panipat",
    "Meerut",
    "Muzaffarnagar",
    "Kolkata",
  ] as const;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessName || !form.phone || !form.contactPerson) {
      alert("Please fill in your business name, contact person, and phone number.");
      return;
    }
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Shree Durga Agency & Threadlinc! I am ${form.contactPerson || "a buyer"} from ${form.businessName || "our business"}. ` +
      `We have a sourcing requirement for ${form.category} (${form.quantity}) from ${form.sourcingHub} hub. ` +
      `Bill to - Ship to financing requested: ${form.billToShipToFinance ? "YES (Threadlinc)" : "No"}. ` +
      `Location: ${form.city || "India"}. Please connect us with your sourcing coordinator.`
    );
    window.open(`https://wa.me/919811054321?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#1F1916] text-[#FAF8F5] p-5 sm:p-6 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#9B1D2C] flex items-center justify-center text-[#D8B26E] shadow-inner">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold tracking-wide">Submit Sourcing Requirement</h2>
              <p className="text-xs text-stone-300">Shree Durga Agency · Mill Sourcing & Threadlinc Financing</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1F1916]">
                Requirement Received
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{form.contactPerson}</strong>. Our head of buyer coordination for <strong>{form.category}</strong> will tap our verified mills in <strong>{form.sourcingHub}</strong> and share shortlisted options and sample catalogs to <strong>{form.phone}</strong> within 3 business hours.
              </p>
              {form.billToShipToFinance && (
                <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-xs text-amber-900 max-w-md mx-auto">
                  <span className="font-bold">Threadlinc Note:</span> Your "Bill to – Ship to" trade credit evaluation has been flagged for priority onboarding.
                </div>
              )}
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="px-5 py-2.5 bg-[#143D36] hover:bg-[#0E2E28] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Direct WhatsApp Follow-up →
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-2.5 border border-stone-300 hover:bg-stone-100 text-stone-800 rounded-lg text-xs font-medium transition-colors"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Category Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                  1. What Category Do You Need Sourced? *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setForm({ ...form, category: cat })}
                      className={`p-2.5 rounded-lg border text-xs font-medium text-left transition-all cursor-pointer ${
                        form.category === cat
                          ? 'border-[#9B1D2C] bg-[#9B1D2C]/5 text-[#1F1916] ring-1 ring-[#9B1D2C] font-semibold'
                          : 'border-stone-200 text-stone-600 hover:border-stone-400 bg-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sourcing Hub & Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Preferred Sourcing Hub
                  </label>
                  <select
                    value={form.sourcingHub}
                    onChange={(e) => setForm({ ...form, sourcingHub: e.target.value as any })}
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#9B1D2C]"
                  >
                    {hubs.map((hub) => (
                      <option key={hub} value={hub}>{hub}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Estimated Quantity
                  </label>
                  <select
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: e.target.value })}
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#9B1D2C]"
                  >
                    <option value="100 – 500 units / meters">100 – 500 units / meters (Sampling / Boutique)</option>
                    <option value="500 – 2,000 units / meters">500 – 2,000 units / meters (Wholesale Lot)</option>
                    <option value="2,000 – 10,000+ units / meters">2,000 – 10,000+ units / meters (Bulk Mill Roll / Export)</option>
                  </select>
                </div>
              </div>

              {/* Threadlinc Bill to - Ship to Trade Credit Toggle */}
              <div className="p-3.5 bg-gradient-to-r from-stone-900 to-stone-800 text-white rounded-xl border border-stone-700 flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-5 h-5 text-[#D8B26E] shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-white">Threadlinc "Bill to – Ship to" Financing</p>
                    <p className="text-[11px] text-stone-300">Request 30–90 day credit line & direct factory dispatch</p>
                  </div>
                </div>
                <label className="relative inline-flex items-center cursor-pointer shrink-0">
                  <input
                    type="checkbox"
                    checked={form.billToShipToFinance}
                    onChange={(e) => setForm({ ...form, billToShipToFinance: e.target.checked })}
                    className="sr-only peer"
                  />
                  <div className="w-10 h-5 bg-stone-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-stone-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#D8B26E]"></div>
                </label>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Business / Brand Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.businessName}
                    onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                    placeholder="e.g. Ananya Textiles / Mumbai Retail"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
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
                    placeholder="e.g. Ramesh Kumar"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    placeholder="+91 98110 54321"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Official Email
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="purchase@brand.com"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    City / State *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Delhi, Jaipur, Bangalore..."
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Specific Specifications or Reference Details
                </label>
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Mention desired fabrics, GSM, weave type, colors, target price per meter/piece, or delivery date..."
                  className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#9B1D2C]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="text-xs text-emerald-800 hover:text-emerald-950 font-semibold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>WhatsApp Sourcing Coordinator</span>
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-2.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer ml-auto"
                >
                  Submit Requirement
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
