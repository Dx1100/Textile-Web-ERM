import React from 'react';
import { TrendingUp, FileText, ArrowRight, BookOpen, Calendar, Tag, ShieldCheck } from 'lucide-react';

interface InsightsPageProps {
  onNavigateHome: () => void;
  onOpenRequirementModal: () => void;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({
  onNavigateHome,
  onOpenRequirementModal,
}) => {
  const articles = [
    {
      id: 1,
      title: "Surat vs. Delhi vs. Varanasi: Which Textile Hub Fits Your Next Collection?",
      tag: "Sourcing Intelligence",
      date: "October 2026",
      readTime: "5 min read",
      summary: "A practical breakdown of yarn costs, minimum order quantities (MOQs), and turnaround times across India's three dominant textile production capitals.",
    },
    {
      id: 2,
      title: "Understanding 'Bill to – Ship to' Trade Financing in the Indian Textile Sector",
      tag: "Trade Finance & Threadlinc",
      date: "September 2026",
      readTime: "6 min read",
      summary: "How modern retail chains and apparel brands leverage third-party financing partner Threadlinc to secure 60-day credit without locking up collateral.",
    },
    {
      id: 3,
      title: "Authenticating Pure Zari & Katan Silk: Avoiding Synthetic Dupes",
      tag: "Fabric Quality & Testing",
      date: "August 2026",
      readTime: "4 min read",
      summary: "Field techniques used by Shree Durga Agency QC officers to verify warp/weft silk filament counts and differentiate electroplated copper zari from genuine silver-gilt thread.",
    },
  ];

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#9B1D2C] font-semibold">Textile Market Insights & Intel</span>
      </nav>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 pb-6 border-b border-stone-200">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Market Intelligence</span>
            <span aria-hidden="true">·</span>
            <span>B2B Trends & Mill Analysis</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-serif font-bold text-[#1F1916] leading-tight mb-3">
            Textile Sourcing & Financing Insights
          </h1>
          <p className="text-sm sm:text-base text-stone-600 leading-relaxed font-light">
            Stay ahead of seasonal raw material price spikes, new weaving techniques, GST billing frameworks, and supply chain strategies straight from our on-ground coordinators.
          </p>
        </div>

        <button
          type="button"
          onClick={onOpenRequirementModal}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white text-xs font-semibold tracking-wider uppercase rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Submit Sourcing Requirement</span>
        </button>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        {articles.map((art) => (
          <article
            key={art.id}
            className="bg-white rounded-3xl border border-stone-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all group"
          >
            <div>
              <div className="flex items-center justify-between text-[11px] text-stone-500 mb-3 font-medium">
                <span className="text-[#9B1D2C] font-bold bg-[#9B1D2C]/8 px-2 py-0.5 rounded">
                  {art.tag}
                </span>
                <span>{art.readTime}</span>
              </div>
              <h2 className="text-lg font-serif font-bold text-[#1F1916] group-hover:text-[#9B1D2C] transition-colors mb-3 leading-snug">
                {art.title}
              </h2>
              <p className="text-xs text-stone-600 leading-relaxed">
                {art.summary}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-800">
              <span className="text-stone-400 text-[11px]">{art.date}</span>
              <span className="text-[#9B1D2C] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                Read Analysis →
              </span>
            </div>
          </article>
        ))}
      </div>

    </div>
  );
};
