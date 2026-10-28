import React, { useState } from 'react';
import { X, CreditCard, CheckCircle2, ShieldCheck, Truck, ArrowRight, Phone, Building2 } from 'lucide-react';
import { ThreadlincInquiry } from '../types';
import { siteContent } from '../config/siteContent';

interface ThreadlincModalProps {
  isOpen: boolean;
  onClose: () => void;
  currency: 'INR' | 'USD';
}

export const ThreadlincModal: React.FC<ThreadlincModalProps> = ({
  isOpen,
  onClose,
  currency,
}) => {
  const { brand } = siteContent;
  const [procurementAmount, setProcurementAmount] = useState<number>(500000);
  const [creditTenure, setCreditTenure] = useState<'30 Days' | '60 Days' | '90 Days'>('60 Days');

  const [form, setForm] = useState<ThreadlincInquiry>({
    businessName: '',
    contactName: '',
    phone: '',
    email: '',
    gstNumber: '',
    creditRequirement: '₹5,00,000 – ₹15,00,000',
    creditTenure: '60 Days',
    billToCity: '',
    shipToCity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const formatPrice = (amount: number) => {
    if (currency === 'USD') {
      return `$${Math.round(amount / 86)}`;
    }
    return `₹${amount.toLocaleString('en-IN')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessName || !form.phone || !form.contactName) {
      alert('Please fill in your business name, contact person, and phone number.');
      return;
    }
    setSubmitted(true);
  };

  const handleDirectWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Threadlinc Financing Desk! I am ${form.contactName || 'a retailer/wholesaler'} from ${form.businessName || 'our business'}. ` +
      `We are sourcing textiles through ${brand.name} and require trade credit financing of approximately ${form.creditRequirement} with a ${creditTenure} repayment window. ` +
      `Business Location: ${form.billToCity || 'Our Shop/Warehouse'}. Please initiate credit eligibility review.`
    );
    window.open(`https://wa.me/919811054321?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 animate-in fade-in duration-200">
      <div className="relative bg-white rounded-2xl max-w-3xl w-full shadow-2xl border border-stone-200 overflow-hidden my-6">
        
        {/* Header */}
        <div className="bg-[#0B1B33] text-white p-5 sm:p-6 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 text-white flex items-center justify-center font-bold shadow-inner">
              <CreditCard className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-heading font-extrabold tracking-tight text-white">Threadlinc</h2>
                <span className="text-[10px] bg-[#0D7A5F] text-white px-2 py-0.5 rounded uppercase font-bold tracking-wider">
                  Trade Credit Partner
                </span>
              </div>
              <p className="text-xs text-slate-300 font-medium">
                Institutional 30 to 90 days trade financing with {brand.name}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-5 sm:p-8 max-h-[80vh] overflow-y-auto space-y-6">
          
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-[#1E293B]">
                Credit Application Transmitted
              </h3>
              <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong>{form.contactName}</strong>. The trade finance team at <strong>Threadlinc</strong> has received your credit inquiry for <strong>{form.businessName}</strong>. Our underwriter will contact you at <strong>{form.phone}</strong> within 3 business hours.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="px-5 py-2.5 bg-[#143D36] hover:bg-[#0E2E28] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors"
                >
                  Connect on WhatsApp Financing Desk →
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
            <>
              {/* Concept Overview Box */}
              <div className="p-4 bg-[#FAF8F5] rounded-xl border border-stone-200 text-xs text-stone-700 leading-relaxed">
                <div className="flex items-center gap-2 text-[#143D36] font-bold text-xs uppercase tracking-wide mb-1">
                  <ShieldCheck className="w-4 h-4" />
                  <span>How Threadlinc Trade Credit Supports Your Business</span>
                </div>
                <p>
                  As an apparel label, retailer, or regional wholesaler, you can procure bulk inventory across major manufacturing hubs with 30–90 days deferred settlement terms. Goods are dispatched directly to your shop or warehouse with complete GST tax invoices and e-way bill compliance.
                </p>
              </div>

              {/* Working Capital Calculator */}
              <div className="bg-[#0B1B33] text-white p-5 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs uppercase tracking-wider font-bold text-emerald-300">
                    Credit & Liquidity Estimator
                  </span>
                  <span className="text-[11px] text-slate-300">Powered by Threadlinc</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">
                      Monthly Fabric Procurement Volume: <strong className="text-white">{formatPrice(procurementAmount)}</strong>
                    </label>
                    <input
                      type="range"
                      min={100000}
                      max={5000000}
                      step={50000}
                      value={procurementAmount}
                      onChange={(e) => setProcurementAmount(Number(e.target.value))}
                      className="w-full accent-[#0D7A5F] cursor-pointer"
                    />
                    <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                      <span>₹1 Lakh</span>
                      <span>₹25 Lakhs</span>
                      <span>₹50 Lakhs</span>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] text-slate-300 mb-1">
                      Target Credit Tenure:
                    </label>
                    <div className="flex rounded-lg border border-slate-700 p-1 bg-slate-900 text-xs">
                      {(['30 Days', '60 Days', '90 Days'] as const).map(tenure => (
                        <button
                          key={tenure}
                          type="button"
                          onClick={() => {
                            setCreditTenure(tenure);
                            setForm({ ...form, creditTenure: tenure });
                          }}
                          className={`flex-1 py-1 rounded font-medium transition-all cursor-pointer ${
                            creditTenure === tenure
                              ? 'bg-[#0D7A5F] text-white font-bold shadow-xs'
                              : 'text-slate-400 hover:text-white'
                          }`}
                        >
                          {tenure}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-stone-700 grid grid-cols-2 sm:grid-cols-3 gap-3 text-center">
                  <div className="bg-white/5 p-2.5 rounded-xl">
                    <span className="text-[10px] text-stone-400 uppercase">Working Capital Preserved</span>
                    <p className="text-lg font-serif font-bold text-white tabular-nums mt-0.5">
                      {formatPrice(procurementAmount)}
                    </p>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl">
                    <span className="text-[10px] text-stone-400 uppercase">Upfront Cash Outlay</span>
                    <p className="text-lg font-serif font-bold text-emerald-400 tabular-nums mt-0.5">
                      ₹0 Upfront
                    </p>
                  </div>
                  <div className="bg-white/5 p-2.5 rounded-xl col-span-2 sm:col-span-1">
                    <span className="text-[10px] text-stone-400 uppercase">Order Clearance</span>
                    <p className="text-sm font-semibold text-white mt-1">
                      Immediate Dispatch
                    </p>
                  </div>
                </div>
              </div>

              {/* Application Form */}
              <form onSubmit={handleSubmit} className="space-y-4 pt-2">
                <h4 className="text-xs uppercase tracking-wider font-bold text-stone-800 pb-1 border-b border-stone-200">
                  Request Credit Line Onboarding
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      Business / Store Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="e.g. Royal Silks Showroom"
                      className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contactName}
                      onChange={(e) => setForm({ ...form, contactName: e.target.value })}
                      placeholder="e.g. Vivek Mehta"
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
                      placeholder="sourcing@business.com"
                      className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                      GSTIN (Optional)
                    </label>
                    <input
                      type="text"
                      value={form.gstNumber}
                      onChange={(e) => setForm({ ...form, gstNumber: e.target.value })}
                      placeholder="07AAAAA0000A1Z5"
                      className="w-full text-xs p-2.5 border border-stone-300 rounded-lg uppercase focus:outline-none focus:border-[#1C2B4B]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Store / Warehouse City & State
                  </label>
                  <input
                    type="text"
                    value={form.billToCity}
                    onChange={(e) => setForm({ ...form, billToCity: e.target.value })}
                    placeholder="e.g. Varanasi, Kanpur, Patna, Surat..."
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-wider font-semibold text-stone-700 mb-1">
                    Procurement Notes / Seasonal Requirement
                  </label>
                  <textarea
                    rows={2}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Mention goods being ordered (Sarees, Suits, Fabrics) and required delivery timeline..."
                    className="w-full text-xs p-2.5 border border-stone-300 rounded-lg focus:outline-none focus:border-[#1C2B4B]"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={handleDirectWhatsApp}
                    className="text-xs text-emerald-800 hover:text-emerald-950 font-semibold flex items-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>WhatsApp Priority Financing Line</span>
                  </button>

                  <button
                    type="submit"
                    className="w-full sm:w-auto px-6 py-2.5 bg-[#0D7A5F] hover:bg-[#0A634D] text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors shadow-sm cursor-pointer ml-auto"
                  >
                    Submit Application
                  </button>
                </div>
              </form>
            </>
          )}

        </div>

      </div>
    </div>
  );
};
