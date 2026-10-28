import React, { useState } from 'react';
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ArrowRight, Building2, Phone, HelpCircle, ChevronRight } from 'lucide-react';
import { siteContent } from '../config/siteContent';

interface ThreadlincPageProps {
  onNavigateHome: () => void;
  onOpenThreadlincModal: () => void;
  currency: 'INR' | 'USD';
}

export const ThreadlincPage: React.FC<ThreadlincPageProps> = ({
  onNavigateHome,
  onOpenThreadlincModal,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const { brand } = siteContent;

  const faqs = [
    {
      q: 'How does Threadlinc trade credit work for retail shopkeepers and wholesalers?',
      a: 'Threadlinc facilitates institutional trade credit for orders placed through Shree Durga Agency. Consignments are dispatched directly to your shop or warehouse with valid GST documentation while payment terms are extended across 30, 60, or 90 days. This allows you to sell inventory before settling the trade invoice.',
    },
    {
      q: 'Who qualifies for Threadlinc trade credit?',
      a: 'Registered textile retailers, saree showrooms, boutiques, regional wholesalers, and apparel manufacturers with an active GST identification number and established retail operations.',
    },
    {
      q: 'What documents are required to activate a credit line?',
      a: 'Standard business KYC: GST Registration Certificate, business PAN, bank statement of the last 6 months, and basic trade references. Credit line assessments are typically completed within 24 to 48 hours.',
    },
    {
      q: 'Can I combine multiple sourcing hubs under one Threadlinc credit account?',
      a: 'Yes. Whether you are sourcing Banarasi sarees from Varanasi, jacquards from Surat, or cottons from Jaipur, your combined orders can be cleared and settled under a consolidated Threadlinc credit facility.',
    },
    {
      q: 'Is there a minimum order requirement to use financing?',
      a: 'Threadlinc credit facilities are designed for commercial wholesale orders, typically starting from ₹50,000 and scaling up to ₹25,00,000 depending on your seasonal inventory requirements.',
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-slate-900 transition-colors cursor-pointer">
          Home
        </button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-[#0D7A5F] font-bold">Threadlinc Financing</span>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#0B1B33] text-white rounded-3xl p-8 sm:p-14 mb-12 relative overflow-hidden border border-slate-800 shadow-xl border-t-4 border-t-[#0D7A5F]">
        <div className="max-w-3xl relative z-10">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-emerald-300 font-bold mb-3 px-3 py-1 rounded-full bg-white/10">
            <span className="w-2 h-2 rounded-full bg-[#0D7A5F]" />
            <span>Financing Partner of {brand.name}</span>
            <span aria-hidden="true">·</span>
            <span>30 to 90 Days Credit</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-white mb-4 leading-tight">
            Threadlinc: Working Capital & Trade Financing for Textile Retailers
          </h1>
          
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal mb-8 max-w-2xl">
            Stock up for wedding and festive seasons without depleting working capital. Through <strong>Threadlinc</strong>, retailers and wholesalers sourcing via {brand.name} access structured commercial credit with flexible repayment windows.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenThreadlincModal}
              className="px-6 py-3.5 text-xs font-bold tracking-wider uppercase text-white bg-[#0D7A5F] hover:bg-[#0A634D] rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <CreditCard className="w-4 h-4 text-white" />
              <span>Check Financing Eligibility</span>
            </button>
            <a
              href="https://wa.me/919811054321?text=Hello%20Threadlinc!%20I%20am%20interested%20in%20trade%20credit%20financing%20for%20textiles."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 text-xs font-bold tracking-wider uppercase text-slate-200 bg-white/10 hover:bg-white/20 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-emerald-300" />
              <span>WhatsApp Financing Desk</span>
            </a>
          </div>
        </div>
      </div>

      {/* 3 Step Workflow Overview */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xs mb-16">
        <div className="max-w-2xl mb-8">
          <span className="text-xs uppercase tracking-wider text-[#143D36] font-semibold block mb-1">
            Simplified Process
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1E293B]">
            How Trade Credit Sourcing Operates
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1 leading-relaxed">
            A transparent 3-step mechanism that puts inventory on your shelves before payment is due.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Step 1 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-[#1C2B4B] text-white flex items-center justify-center font-bold text-xs mb-4">
                01
              </div>
              <span className="text-[11px] font-bold text-[#143D36] uppercase tracking-wider block mb-1">Select Catalog</span>
              <h3 className="font-serif font-bold text-base text-[#1E293B] mb-2">Order Finalization</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Choose your required sarees, unstitched suit sets, or fabric qualities across Delhi, Surat, Jaipur, or Varanasi with our consultant desk.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-stone-500 font-medium">
              Verified hub wholesale pricing
            </div>
          </div>

          {/* Step 2 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-[#143D36] text-white flex items-center justify-center font-bold text-xs mb-4">
                02
              </div>
              <span className="text-[11px] font-bold text-[#143D36] uppercase tracking-wider block mb-1">Credit Assessment</span>
              <h3 className="font-serif font-bold text-base text-[#1E293B] mb-2">Threadlinc Clearance</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Threadlinc approves your commercial trade credit line. We settle production centers upfront so your consignment enters prompt inspection and packing.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-stone-500 font-medium">
              30 to 90 days repayment tenure
            </div>
          </div>

          {/* Step 3 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-stone-800 text-white flex items-center justify-center font-bold text-xs mb-4">
                03
              </div>
              <span className="text-[11px] font-bold text-[#143D36] uppercase tracking-wider block mb-1">Direct Delivery</span>
              <h3 className="font-serif font-bold text-base text-[#1E293B] mb-2">Doorstep Dispatch</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                The inspected goods ship directly to your shop or godown with legitimate GST documentation and transit insurance. You sell first, then settle.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-stone-500 font-medium">
              Full transit protection & GST invoice
            </div>
          </div>

        </div>
      </div>

      {/* Key Advantages */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs">
          <ShieldCheck className="w-8 h-8 text-[#143D36] mb-4" />
          <h3 className="text-xl font-serif font-bold text-[#1E293B] mb-2">Preserve Seasonal Liquidity</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            Festival and wedding seasons require large upfront inventory investments. Threadlinc trade credit ensures you never miss peak retail demand due to temporary cash bottlenecks.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-xs">
          <Truck className="w-8 h-8 text-[#143D36] mb-4" />
          <h3 className="text-xl font-serif font-bold text-[#1E293B] mb-2">Complete GST & E-Way Compliance</h3>
          <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
            All shipments move with official e-way bills and clean GST tax invoices, ensuring seamless input tax credit reconciliation for your accounting and audit peace of mind.
          </p>
        </div>
      </div>

      {/* Frequently Asked Questions (Secondary Details moved to FAQs) */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-xs mb-16">
        <h2 className="text-2xl font-serif font-bold text-[#1E293B] mb-6 pb-3 border-b border-stone-200">
          Frequently Asked Questions About Threadlinc Financing
        </h2>

        <div className="divide-y divide-stone-200 space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="pt-4 first:pt-0">
              <button
                type="button"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                className="w-full text-left flex items-center justify-between text-sm font-semibold text-stone-900 cursor-pointer"
              >
                <span>{faq.q}</span>
                <span className="text-stone-400 font-normal text-lg">{activeFaq === idx ? '−' : '+'}</span>
              </button>
              {activeFaq === idx && (
                <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed pr-8 animate-in fade-in duration-200">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final Action Banner */}
      <div className="bg-[#1C2B4B] text-[#FAF8F5] p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border border-[#14223A]">
        <div>
          <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider block mb-1">
            Immediate Credit Onboarding
          </span>
          <h3 className="text-2xl font-serif font-bold mb-2">Ready to Structure Your Next Seasonal Order?</h3>
          <p className="text-xs sm:text-sm text-stone-300 max-w-xl font-light">
            Contact a Threadlinc trade finance officer today to establish an approved credit line for upcoming seasonal shipments.
          </p>
        </div>
        <div className="flex gap-3 shrink-0">
          <button
            type="button"
            onClick={onOpenThreadlincModal}
            className="px-6 py-3.5 bg-white hover:bg-stone-100 text-[#1C2B4B] rounded-xl text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer shadow-xs"
          >
            Check Eligibility
          </button>
        </div>
      </div>

    </div>
  );
};
