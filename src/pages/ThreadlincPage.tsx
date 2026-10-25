import React, { useState } from 'react';
import { CreditCard, Truck, ShieldCheck, CheckCircle2, ArrowRight, Building2, Phone, HelpCircle } from 'lucide-react';
import { ThreadlincModal } from '../components/ThreadlincModal';

interface ThreadlincPageProps {
  onNavigateHome: () => void;
  onOpenThreadlincModal: () => void;
  currency: 'INR' | 'USD';
}

export const ThreadlincPage: React.FC<ThreadlincPageProps> = ({
  onNavigateHome,
  onOpenThreadlincModal,
  currency,
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: 'What is the "Bill to – Ship to" model under Threadlinc?',
      a: 'Under Indian GST laws (Section 10(1)(b) of CGST Act), "Bill to – Ship to" allows goods to be billed to one party (e.g., your corporate entity or Threadlinc as financing facilitator) while being physically shipped to another party (such as your job-work printing mill, embroidery workshop, or garment manufacturing factory). This avoids double freight costs and permits seamless input tax credit flow.',
    },
    {
      q: 'How does Threadlinc finance textile orders from Bhasin Textiles?',
      a: 'When you place a bulk order for pure silk brocades, raw silks, or unstitched suits with Bhasin Textiles, Threadlinc approves an institutional credit line. Threadlinc settles the fabric mill immediately so your fabric enters cutting/dispatch without delay, granting your label a 30, 60, or 90-day repayment tenure.',
    },
    {
      q: 'Who is eligible for Threadlinc trade credit lines?',
      a: 'Verified fashion boutiques, apparel exporters, retail chain stores, private label brands, and independent bridal couturiers holding active GST registrations and a minimum track record of 6 months in operation.',
    },
    {
      q: 'What documents are required for credit onboarding?',
      a: 'Basic KYC: GST Registration Certificate, PAN Card of entity/proprietor, past 6 months bank statement, and purchase order copy. Approvals are typically finalized within 4 to 24 business hours.',
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors cursor-pointer">
          Home
        </button>
        <span>/</span>
        <span className="text-stone-500">Associate Entities</span>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">Threadlinc Trade Financing</span>
      </nav>

      {/* Hero Section */}
      <div className="bg-[#121922] text-[#FAF8F5] rounded-3xl p-8 sm:p-14 mb-12 relative overflow-hidden border border-stone-800 shadow-xl">
        <div className="max-w-3xl relative z-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8B26E] font-semibold mb-3">
            <span className="w-2 h-2 rounded-full bg-[#D8B26E]" />
            <span>Associate Firm of Bhasin Textiles</span>
            <span aria-hidden="true">·</span>
            <span>Est. for Textile Trade Credit</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white mb-4 leading-tight">
            Threadlinc: Institutional Textile Financing & "Bill to – Ship to" Solutions
          </h1>
          
          <p className="text-xs sm:text-sm text-stone-300 leading-relaxed font-light mb-8 max-w-2xl">
            Bridging fabric procurement and garment production cash flows. Through <strong>Threadlinc</strong>, we provide specialized trade credit and tripartite billing for fashion labels, exporters, and boutique retailers sourcing from Bhasin Textiles.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={onOpenThreadlincModal}
              className="px-6 py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#9B1D2C] hover:bg-[#7A1C28] rounded-lg transition-colors cursor-pointer flex items-center gap-2 shadow-sm"
            >
              <CreditCard className="w-4 h-4 text-[#D8B26E]" />
              <span>Apply for Threadlinc Credit Line</span>
            </button>
            <a
              href="https://wa.me/919811054321?text=Hello%20Threadlinc!%20I%20am%20interested%20in%20Bill-to-Ship-to%20financing%20for%20textiles."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 text-xs font-semibold tracking-wider uppercase text-stone-200 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors cursor-pointer flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-[#D8B26E]" />
              <span>WhatsApp Financing Desk</span>
            </a>
          </div>
        </div>

        {/* Financial seal icon in background */}
        <div className="absolute top-1/2 -right-8 -translate-y-1/2 w-80 h-80 bg-[#D8B26E]/5 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Visual Deep-Dive: The "Bill to – Ship to" Architecture */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200/90 shadow-sm mb-16">
        <div className="max-w-2xl mb-8">
          <span className="text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold block mb-1">
            Operational Blueprint
          </span>
          <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1916]">
            How "Bill to – Ship to" Works in Practice
          </h2>
          <p className="text-xs text-stone-500 mt-1 leading-relaxed">
            Eliminating cash-flow bottlenecks between fabric buying and garment manufacturing dispatch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          
          {/* Card 1 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-[#1F1916] text-[#D8B26E] flex items-center justify-center font-bold text-xs mb-4">
                01
              </div>
              <span className="text-[11px] font-bold text-[#9B1D2C] uppercase tracking-wider block mb-1">Procurement Phase</span>
              <h3 className="font-serif font-bold text-base text-[#1F1916] mb-2">Order Placement</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                You select your seasonal requirements from Bhasin Textiles (Banarasi Katan brocades, raw silks, Chanderi tissues, or unstitched suits) and specify your target manufacturing units.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-stone-500 font-medium">
              Zero delays in mill yarn allocation
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-[#9B1D2C] text-white flex items-center justify-center font-bold text-xs mb-4">
                02
              </div>
              <span className="text-[11px] font-bold text-[#9B1D2C] uppercase tracking-wider block mb-1">Financing & Billing Phase</span>
              <h3 className="font-serif font-bold text-base text-[#1F1916] mb-2">"Bill To" Threadlinc</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Threadlinc steps in to approve trade credit terms (30, 60, or 90 days). Tax invoices are billed to the registered corporate buyer, ensuring complete GST input tax credit (ITC) reconciliation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-stone-500 font-medium">
              30–90 Day deferred settlement
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-stone-200 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-full bg-[#143D36] text-white flex items-center justify-center font-bold text-xs mb-4">
                03
              </div>
              <span className="text-[11px] font-bold text-[#9B1D2C] uppercase tracking-wider block mb-1">Logistics Phase</span>
              <h3 className="font-serif font-bold text-base text-[#1F1916] mb-2">"Ship To" Factory Direct</h3>
              <p className="text-xs text-stone-600 leading-relaxed">
                Bhasin Textiles dispatches the physical fabric rolls with an E-Way Bill straight to your designated job-worker, embroidery studio, or garment factory anywhere in India or to air cargo ports.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-stone-200/60 text-[11px] text-stone-500 font-medium">
              Eliminates double freight & handling
            </div>
          </div>

        </div>
      </div>

      {/* Benefits Grid for Fashion Labels & Boutiques */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <div className="bg-white p-8 rounded-2xl border border-stone-200/90 shadow-xs">
          <ShieldCheck className="w-8 h-8 text-[#9B1D2C] mb-4" />
          <h3 className="text-xl font-serif font-bold text-[#1F1916] mb-2">Preserve Seasonal Cash Flow</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            In fashion and bridal couture, cash is often locked in pending customer deliveries and bridal balances. Threadlinc trade credit ensures you never miss a festive production window because of short-term liquidity constraints.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200/90 shadow-xs">
          <Truck className="w-8 h-8 text-[#9B1D2C] mb-4" />
          <h3 className="text-xl font-serif font-bold text-[#1F1916] mb-2">Multi-State GST & E-Way Compliance</h3>
          <p className="text-xs text-stone-600 leading-relaxed">
            Whether your corporate head office is in Mumbai, your brand in Bangalore, and your cutting factory in Noida or Jaipur, Threadlinc ensures pristine compliance under GST rules without risk of in-transit tax seizures.
          </p>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="bg-white rounded-3xl p-8 sm:p-12 border border-stone-200 shadow-sm mb-16">
        <h2 className="text-2xl font-serif font-bold text-[#1F1916] mb-6 pb-3 border-b border-stone-200">
          Frequently Asked Questions About Threadlinc
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
                <p className="mt-2 text-xs text-stone-600 leading-relaxed pr-8">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Final Action Banner */}
      <div className="bg-[#121922] text-[#FAF8F5] p-8 sm:p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 border border-stone-800">
        <div>
          <span className="text-[#D8B26E] text-xs font-semibold uppercase tracking-wider block mb-1">
            Immediate Credit Onboarding
          </span>
          <h3 className="text-2xl font-serif font-bold mb-2">Ready to Structure Your Next Seasonal Order?</h3>
          <p className="text-xs text-stone-300 max-w-xl">
            Talk to a Threadlinc trade finance officer today to establish your initial credit line for upcoming Bhasin Textiles shipments.
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={onOpenThreadlincModal}
            className="px-6 py-3.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white rounded-lg text-xs font-semibold tracking-wider uppercase transition-colors cursor-pointer shadow-sm"
          >
            Open Credit Application
          </button>
        </div>
      </div>

    </div>
  );
};
