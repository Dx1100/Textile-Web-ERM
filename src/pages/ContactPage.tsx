import React, { useState } from 'react';
import { Phone, Mail, Building2, Send, CheckCircle2, ShieldCheck, Clock, CreditCard, ChevronRight } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface ContactPageProps {
  onNavigateHome: () => void;
  onOpenRequirementModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  onNavigateHome,
  onOpenRequirementModal,
}) => {
  const { brand } = siteContent;
  const [form, setForm] = useState({
    businessName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: '',
    category: "Sarees & Heritage Weaves",
    estimatedVolume: '15 – 50 pcs / 50 meters',
    financeInterest: true,
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.businessName || !form.phone) {
      alert('Please fill in required fields (Business Name and Phone).');
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors cursor-pointer">
          Home
        </button>
        <ChevronRight className="w-3 h-3 text-stone-400" />
        <span className="text-[#1C2B4B] font-semibold">Contact</span>
      </nav>

      {/* Header */}
      <div className="max-w-2xl mb-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-[#143D36] font-semibold mb-2 px-3 py-1 rounded-full bg-[#143D36]/10">
          <span>Direct Sourcing Desk</span>
          <span aria-hidden="true">·</span>
          <span>{brand.name}</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1E293B] leading-tight mb-3">
          Let’s Discuss Your Textile Sourcing Needs
        </h1>
        <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-normal">
          Connect directly with our sourcing coordinators in Delhi, Surat, Jaipur, and Panipat. Flexible trade credit options available for eligible wholesale buyers.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-stone-200 shadow-xs space-y-6">
            <h2 className="font-serif font-bold text-xl text-[#1E293B] pb-3 border-b border-stone-100">
              Consulting & Sourcing Desks
            </h2>

            {brand.contact.offices.map((off, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 mt-1 ${
                  idx === 0 
                    ? 'bg-[#1C2B4B]/10 text-[#1C2B4B]' 
                    : idx === 1 
                      ? 'bg-[#143D36]/10 text-[#143D36]' 
                      : 'bg-stone-100 text-stone-800'
                }`}>
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-stone-900">{off.city} Consulting Desk</h4>
                  <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                    {off.area}
                  </p>
                  <span className={`text-[11px] font-medium block mt-1 ${
                    idx === 0 ? 'text-[#1C2B4B]' : idx === 1 ? 'text-[#143D36]' : 'text-stone-600'
                  }`}>
                    {off.purpose}
                  </span>
                </div>
              </div>
            ))}

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#143D36]/10 text-[#143D36] flex items-center justify-center shrink-0 mt-1">
                <CreditCard className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-stone-900">{brand.threadlinc.firmName} Trade Finance Desk</h4>
                <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                  {brand.threadlinc.concept} structured credit processing & GST invoicing
                </p>
                <span className="text-[11px] text-[#143D36] font-semibold block mt-1">
                  Terms: {brand.threadlinc.tenures}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-100 space-y-3 text-xs text-stone-700">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#1C2B4B]" />
                <a href={`tel:${brand.contact.phone}`} className="font-bold hover:text-[#1C2B4B] transition-colors">
                  {brand.contact.phoneDisplay} (Direct Sourcing Desk)
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#1C2B4B]" />
                <a href={`mailto:${brand.contact.email}`} className="hover:text-[#1C2B4B] transition-colors">
                  {brand.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3 text-stone-500">
                <Clock className="w-4 h-4 text-stone-400" />
                <span>Monday – Saturday: 10:00 AM – 7:30 PM IST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Sourcing Enquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white p-6 sm:p-10 rounded-3xl border border-stone-200 shadow-xs">
            {submitted ? (
              <div className="py-12 text-center animate-in fade-in duration-300">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#1E293B] mb-2">
                  Enquiry Transmitted to Our Sourcing Cell
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed mb-6 font-normal">
                  Thank you, <strong>{form.contactPerson || form.businessName}</strong>. Our senior sourcing consultant will contact you via WhatsApp or phone within 2 business hours with verified options.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-[#1C2B4B] text-white text-xs font-semibold rounded-xl cursor-pointer"
                >
                  Submit Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="border-b border-stone-100 pb-3 mb-4">
                  <h3 className="font-serif font-bold text-xl text-[#1E293B]">
                    Submit Qualified B2B Sourcing Requirement
                  </h3>
                  <p className="text-xs text-stone-500 mt-1">
                    Direct access to hub wholesale quotes. All requirements treated with strict confidentiality.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Business / Store Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.businessName}
                      onChange={(e) => setForm({ ...form, businessName: e.target.value })}
                      placeholder="e.g. Royal Saree Showroom"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#1C2B4B] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.contactPerson}
                      onChange={(e) => setForm({ ...form, contactPerson: e.target.value })}
                      placeholder="e.g. Rajesh Singhal"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#1C2B4B] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      WhatsApp / Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#1C2B4B] focus:bg-white transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="buyer@business.com"
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#1C2B4B] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Product / Sourcing Category
                    </label>
                    <select
                      value={form.category}
                      onChange={(e) => setForm({ ...form, category: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#1C2B4B] focus:bg-white"
                    >
                      <option value="Sarees & Heritage Weaves">Sarees & Heritage Weaves</option>
                      <option value="Suits & Dress Materials">Suits & Dress Materials</option>
                      <option value="Bridal & Festive Lehengas">Bridal & Festive Lehengas</option>
                      <option value="Running Fabrics & Yardage">Running Fabrics & Yardage</option>
                      <option value="Men's Royal Ethnic Wear">Men's Royal Ethnic Wear</option>
                      <option value="Home Furnishing & Drapes">Home Furnishing & Drapes</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                      Destination City / State
                    </label>
                    <input
                      type="text"
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      placeholder="e.g. Kanpur, Varanasi, Patna..."
                      className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#1C2B4B] focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Threadlinc Checkbox */}
                <div className="p-3.5 bg-[#143D36]/8 rounded-xl border border-[#143D36]/20 flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="financeInterest"
                    checked={form.financeInterest}
                    onChange={(e) => setForm({ ...form, financeInterest: e.target.checked })}
                    className="mt-0.5 w-4 h-4 text-[#143D36] rounded border-stone-300 focus:ring-[#143D36] cursor-pointer"
                  />
                  <label htmlFor="financeInterest" className="text-xs text-stone-700 cursor-pointer">
                    <span className="font-bold text-[#143D36]">Include Threadlinc 30–90 days trade credit facility</span>
                    <span className="block text-[11px] text-stone-500 mt-0.5">
                      Check this if you require structured deferred credit terms with Threadlinc partner financing.
                    </span>
                  </label>
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                    Requirement Details (Fabrics, Colors, Quantity, Target Rate)
                  </label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="e.g. Looking for 25 Banarasi pure katan silk sarees for wedding counter. Delivery required within 15 days."
                    className="w-full px-3.5 py-2.5 bg-stone-50 border border-stone-300 rounded-xl text-xs text-stone-800 focus:outline-none focus:border-[#1C2B4B] focus:bg-white transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-[#1C2B4B] hover:bg-[#14223A] text-white text-xs font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Requirement to Sourcing Desk</span>
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
