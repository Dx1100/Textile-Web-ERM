import React, { useState } from 'react';
import { X, Building2, CheckCircle2, FileText, Send, Sparkles, Phone, Mail } from 'lucide-react';
import { WholesaleQuoteRequest } from '../types';

interface WholesaleModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WholesaleModal: React.FC<WholesaleModalProps> = ({ isOpen, onClose }) => {
  const [form, setForm] = useState<WholesaleQuoteRequest>({
    companyName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    gstNumber: '',
    monthlyMeters: '100 - 500 meters',
    interestedFabrics: ['Pure Banarasi Brocades', 'Haute Bridal Raw Silk'],
    requireCustomDyeingOrPrinting: false,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const fabricOptions = [
    'Pure Banarasi Brocades',
    'Haute Bridal Raw Silk',
    'Chanderi Tissue & Cottons',
    'Pure Mulberry Silk Satin',
    'Glass Organza Foil',
    'Tanchoi Jamawar Sherwani',
    'Pure Linen 80 Lea',
    'Lucknowi Chikankari Georgette',
  ];

  const handleToggleFabric = (fabric: string) => {
    if (form.interestedFabrics.includes(fabric)) {
      setForm({
        ...form,
        interestedFabrics: form.interestedFabrics.filter(f => f !== fabric),
      });
    } else {
      setForm({
        ...form,
        interestedFabrics: [...form.interestedFabrics, fabric],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.companyName || !form.phone || !form.contactPerson) {
      alert('Please fill in required company and contact information.');
      return;
    }
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Bhasin Textiles Wholesale Desk! I am ${form.contactPerson || 'a buyer'} from ${form.companyName || 'our fashion studio'}. ` +
      `We require bulk textiles (${form.monthlyMeters}) in: ${form.interestedFabrics.join(', ')}. ` +
      `Please connect us with your B2B sales director.`
    );
    window.open(`https://wa.me/919811054321?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl max-w-2xl w-full shadow-2xl border border-stone-200 overflow-hidden my-6 animate-in zoom-in-95 duration-200">
        
        {/* Header */}
        <div className="bg-[#1F1916] text-[#FAF8F5] p-6 flex items-center justify-between border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#1C2B4B] flex items-center justify-center text-[#D8B26E] shadow-inner">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold tracking-wide">B2B Wholesale & Private Label Atelier</h2>
              <p className="text-xs text-stone-300">Direct hub sourcing, custom dyeing & export volumes since 1997</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1F1916]">
                Wholesale Inquiry Received
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{form.contactPerson}</strong>. Our commercial textile team will review your specifications for <strong>{form.companyName}</strong> and send wholesale swatch cards and price tiers to <strong>{form.email || form.phone}</strong> within 4 business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="px-5 py-2.5 bg-[#143D36] hover:bg-[#0E2E28] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Priority WhatsApp Follow-up →
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
              <div className="p-3 bg-stone-50 rounded-xl border border-stone-200/80 text-xs text-stone-600 flex items-center justify-between">
                <span>Minimum Order Quantity (MOQ): <strong>25–50 Meters/color</strong></span>
                <span className="text-[#1C2B4B] font-semibold">Physical Swatch Folder Dispatched on Request</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Brand / Boutique Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.companyName}
                    onChange={(e) => setForm({ ...form, companyName: e.target.value })}
                    placeholder="e.g. Sona Couture / London Garments"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.contactPerson}
                    onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                    placeholder="e.g. Vikram Bhasin"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
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
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
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
                    placeholder="sourcing@brand.com"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    City / Country *
                  </label>
                  <input
                    type="text"
                    required
                    value={form.city}
                    onChange={(e) => setForm({ ...form, city: e.target.value })}
                    placeholder="Delhi, Mumbai, Dubai..."
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Estimated Monthly Volume
                  </label>
                  <select
                    value={form.monthlyMeters}
                    onChange={(e) => setForm({ ...form, monthlyMeters: e.target.value })}
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg bg-white focus:outline-none focus:border-[#1C2B4B]"
                  >
                    <option value="50 - 200 meters">50 – 200 meters (Sampling & Capsule)</option>
                    <option value="200 - 1,000 meters">200 – 1,000 meters (Boutique Production)</option>
                    <option value="1,000 - 5,000+ meters">1,000 – 5,000+ meters (Export / Wholesale Rolls)</option>
                  </select>
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    GSTIN / Business Registration (Optional)
                  </label>
                  <input
                    type="text"
                    value={form.gstNumber}
                    onChange={(e) => setForm({ ...form, gstin: e.target.value } as any)}
                    placeholder="07AAAAA0000A1Z5"
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg uppercase focus:outline-none focus:border-[#1C2B4B]"
                  />
                </div>
              </div>

              {/* Interested Fabrics Chips */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1.5">
                  Fabrics of Interest
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {fabricOptions.map((fabric) => {
                    const isSelected = form.interestedFabrics.includes(fabric);
                    return (
                      <button
                        key={fabric}
                        type="button"
                        onClick={() => handleToggleFabric(fabric)}
                        className={`px-2.5 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer border ${
                          isSelected
                            ? 'bg-[#1F1916] text-[#D8B26E] border-[#1F1916]'
                            : 'bg-stone-50 text-stone-600 border-stone-200 hover:bg-stone-100'
                        }`}
                      >
                        {isSelected ? '✓ ' : '+ '}
                        {fabric}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Custom dyeing checkbox */}
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="customDye"
                  checked={form.requireCustomDyeingOrPrinting}
                  onChange={(e) => setForm({ ...form, requireCustomDyeingOrPrinting: e.target.checked })}
                  className="rounded border-stone-300 text-[#1C2B4B] focus:ring-[#1C2B4B]"
                />
                <label htmlFor="customDye" className="text-xs text-stone-700 cursor-pointer">
                  Require custom custom dyeing (Pantone shade matching) or private label digital printing
                </label>
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                  Specific Requirements or Sampling Notes
                </label>
                <textarea
                  rows={2}
                  value={form.notes}
                  onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  placeholder="Mention desired GSM, target price per meter, or dispatch timelines..."
                  className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                />
              </div>

              <div className="pt-3 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="text-xs text-emerald-800 hover:text-emerald-950 font-semibold flex items-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Instant WhatsApp Connect</span>
                </button>

                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2.5 bg-[#1C2B4B] hover:bg-[#14223A] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer ml-auto"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Wholesale Request</span>
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
