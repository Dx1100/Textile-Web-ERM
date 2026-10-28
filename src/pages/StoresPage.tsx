import React from 'react';
import { Building2, Phone, Mail, Clock, Navigation, Calendar, CheckCircle2 } from 'lucide-react';

interface StoresPageProps {
  onNavigateHome: () => void;
  onOpenConsultation: () => void;
}

export const StoresPage: React.FC<StoresPageProps> = ({
  onNavigateHome,
  onOpenConsultation,
}) => {
  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-stone-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-stone-900 transition-colors">
          Home
        </button>
        <span>/</span>
        <span className="text-[#1C2B4B] font-semibold">Flagship Showrooms & Production Center Locations</span>
      </nav>

      {/* Hero */}
      <div className="max-w-3xl mb-12">
        <div className="mb-4">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-bold tracking-wider uppercase bg-emerald-50 text-[#0D7A5F] border border-emerald-200/80 shadow-xs">
            Delhi NCR Heritage Centers · Chandni Chowk & Faridabad
          </span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-extrabold text-[#0B1B33] leading-tight mb-4">
          Visit Our Heritage Atelier & Weaving Looms
        </h1>
        <p className="text-base text-stone-600 leading-relaxed font-light">
          We welcome bridal parties, couture designers, and wholesale buyers to experience the tactile drape of our fabrics under natural and banquet lighting.
        </p>
      </div>

      {/* Showroom Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
        
        {/* 1. Chandni Chowk Flagship */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#1C2B4B] uppercase tracking-wider">
                Flagship Retail & Bridal Floor
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">Open Today</span>
            </div>

            <h2 className="text-2xl font-serif font-bold text-[#1F1916] mb-2">
              Chandni Chowk Heritage Gallery
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed mb-6">
              Located in the heart of Old Delhi's historic cloth market. Houses our full archive of pure Katan silk brocades, hand-embroidered bridal lehengas, and unstitched suits with dedicated private bridal viewing lounges.
            </p>

            <div className="space-y-3 text-xs text-stone-700 border-t border-b border-stone-100 py-4 mb-6">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#D8B26E] shrink-0 mt-0.5" />
                <span>835/8, New Krishna Cloth Market, Katra Neel, Chandni Chowk, Old Delhi - 110006</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D8B26E] shrink-0" />
                <span>11:00 AM – 08:00 PM (Monday to Saturday) · Sunday by Bridal Appointment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Navigation className="w-4 h-4 text-[#D8B26E] shrink-0" />
                <span>Nearest Metro: Chandni Chowk (Yellow Line, Gate 5) / Lal Quila (Violet Line)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#D8B26E] shrink-0" />
                <span>+91 98110 54321 / +91 11 2386 XXXX</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="flex-1 py-3 bg-[#1C2B4B] hover:bg-[#14223A] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors text-center"
            >
              Book Showroom Slot
            </button>
            <a
              href="https://maps.google.com/?q=Katra+Neel+Chandni+Chowk+Delhi"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

        {/* 2. Faridabad Production Center & Weaving Park */}
        <div className="bg-white rounded-3xl p-8 border border-stone-200/90 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono font-bold text-[#D8B26E] uppercase tracking-wider">
                Manufacturing & Production Center
              </span>
              <span className="text-xs text-stone-600 bg-stone-100 px-2 py-0.5 rounded font-medium">B2B & Exports</span>
            </div>

            <h2 className="text-2xl font-serif font-bold text-[#1F1916] mb-2">
              Faridabad Textile Plant & Lab Dips
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed mb-6">
              Our core manufacturing campus featuring high-capacity mechanical rapier looms, traditional pit loom clusters, color fastness testing laboratories, and fabric roll storage for commercial roll-to-roll orders.
            </p>

            <div className="space-y-3 text-xs text-stone-700 border-t border-b border-stone-100 py-4 mb-6">
              <div className="flex items-start gap-2.5">
                <Building2 className="w-4 h-4 text-[#D8B26E] shrink-0 mt-0.5" />
                <span>Plot 42, Sector 24, Industrial Area, Faridabad, Haryana - 121005</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#D8B26E] shrink-0" />
                <span>10:00 AM – 06:30 PM (Monday to Saturday) · Factory sampling by appointment</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Navigation className="w-4 h-4 text-[#D8B26E] shrink-0" />
                <span>Nearest Metro: Bata Chowk / Escorts Mujesar (Violet Line)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#D8B26E] shrink-0" />
                <span>exports@bhasintextiles.com</span>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onOpenConsultation}
              className="flex-1 py-3 bg-[#1F1916] hover:bg-[#1C2B4B] text-white text-xs font-semibold tracking-wider uppercase rounded-lg transition-colors text-center"
            >
              Schedule Factory Visit
            </button>
            <a
              href="https://maps.google.com/?q=Sector+24+Industrial+Area+Faridabad"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 border border-stone-300 hover:bg-stone-50 text-stone-800 text-xs font-medium rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Navigation className="w-3.5 h-3.5" />
              <span>Get Directions</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
};
