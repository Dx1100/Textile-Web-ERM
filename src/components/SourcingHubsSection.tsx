import React, { useState } from 'react';
import { MapPin, Navigation, ArrowRight, CheckCircle2, ShieldCheck, Building } from 'lucide-react';

interface SourcingHubsSectionProps {
  onSelectHub: (hubName: string) => void;
}

export const SourcingHubsSection: React.FC<SourcingHubsSectionProps> = ({ onSelectHub }) => {
  const [selectedHub, setSelectedHub] = useState<string>('Delhi');

  const hubs = [
    {
      name: "Delhi",
      region: "North India (Capital Hub)",
      specialty: "Bridal Wear, Sarees, Unstitched Suits & Ready Ethnic Garments",
      clusters: ["Chandni Chowk (Katra Neel & Krishna Cloth Market)", "Gandhi Nagar", "Okhla Garment Cluster"],
      turnaround: "24–48 Hours Dispatch",
      description: "Our historic headquarters and retail heartland. Connects directly to generational bridal katan weavers, couture embroidery ateliers, and mass ready-to-wear manufacturers.",
    },
    {
      name: "Surat",
      region: "West India (Textile Capital)",
      specialty: "Synthetics, Digital Prints, Dola Silk, Jacquards & Embroidery",
      clusters: ["Ring Road Cloth Market", "Salabatpura", "Pandesara GIDC"],
      turnaround: "3–5 Days Mill Production",
      description: "India's highest-volume hub for poly-georgette, viscose crepes, digital floral foils, and rapid continuous roll manufacturing at direct loom prices.",
    },
    {
      name: "Jaipur",
      region: "Rajasthan (Hand-Craft Center)",
      specialty: "Sanganeri & Bagru Hand-Block Prints, Cotton Cambric, Bandhej & Quilts",
      clusters: ["Sanganer", "Bagru", "Sitapura Industrial Area", "Purohit Ji Ka Katla"],
      turnaround: "3–7 Days Hand Dyeing",
      description: "Renowned for pure vegetable dye wooden block prints, breathable 60x60 cotton cambrics, tie-dye bandhej, and artisanal bohemian pret.",
    },
    {
      name: "Panipat",
      region: "Haryana (Furnishing Capital)",
      specialty: "Home Furnishings, Jacquard Upholstery, Curtains, Bed Linens & Throws",
      clusters: ["Sector 29 HUDA", "Old Industrial Area", "Barsat Road"],
      turnaround: "48 Hours Bulk Clearance",
      description: "The global center for home textiles. Supplies hotel-grade blackout drapes, textured jacquard sofa upholstery, export bedsheets, and recycled cotton yarns.",
    },
    {
      name: "Meerut & Muzaffarnagar",
      region: "Western UP (Weaving Clusters)",
      specialty: "Grey Fabric Weaving, Cotton Drills, Powerloom Muslin & Towels",
      clusters: ["Pilkhuwa", "Meerut Cantt Weavers", "Muzaffarnagar Loom Park"],
      turnaround: "2–4 Days Mill Bales",
      description: "High-density balanced plain weaves, grey cloth base for printing mills, industrial duck cotton, and traditional handloom towels.",
    },
    {
      name: "Kolkata",
      region: "East India (Artisanal Handlooms)",
      specialty: "Muslin Cotton, Jamdani Weaves, Kantha Stitch Embroidery & Tant Sarees",
      clusters: ["Burrabazar", "Shantipur / Phulia Weavers", "Howrah Textile Center"],
      turnaround: "5–7 Days Artisan Dispatch",
      description: "Exquisite hand-spun gossamer muslins, royal Jamdani motifs, and intricate Kantha needlework on pure tussar and cotton sarees.",
    },
  ];

  const currentHubData = hubs.find(h => h.name.includes(selectedHub)) || hubs[0];

  return (
    <section id="sourcing-hubs" className="py-16 sm:py-20 bg-[#FAF8F5] border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
            <span>Section 4</span>
            <span aria-hidden="true">·</span>
            <span>Where We Source From</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-[#1F1916]">
            India’s Prime Sourcing Markets at Your Fingertips
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-2 font-light leading-relaxed">
            Eliminate traveling to multiple state markets and negotiating with unverified middle-men. We maintain on-ground sourcing teams and direct mill access across all key Indian textile centers.
          </p>
        </div>

        {/* Hub Selector Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {hubs.map((hub) => (
            <button
              key={hub.name}
              type="button"
              onClick={() => setSelectedHub(hub.name)}
              className={`px-4 py-2.5 rounded-xl whitespace-nowrap text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center gap-1.5 ${
                selectedHub === hub.name
                  ? 'bg-[#1F1916] text-[#D8B26E] shadow-sm'
                  : 'bg-white border border-stone-200 text-stone-700 hover:border-stone-400'
              }`}
            >
              <MapPin className="w-3.5 h-3.5 text-[#9B1D2C]" />
              <span>{hub.name}</span>
            </button>
          ))}
        </div>

        {/* Hub Detailed Spotlight Box */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-stone-200/90 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#9B1D2C] uppercase tracking-wider">
                {currentHubData.region}
              </span>
              <span className="text-stone-300">·</span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium">
                {currentHubData.turnaround}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1916]">
              {currentHubData.name} Sourcing Network
            </h3>

            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-light">
              {currentHubData.description}
            </p>

            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-stone-200 text-xs space-y-2">
              <p><strong className="text-stone-900">Key Specialty:</strong> {currentHubData.specialty}</p>
              <p><strong className="text-stone-900">Covered Mill Clusters:</strong> {currentHubData.clusters.join(', ')}</p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={() => onSelectHub(currentHubData.name)}
                className="px-6 py-3 bg-[#9B1D2C] hover:bg-[#7A1C28] text-white rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm cursor-pointer flex items-center gap-2"
              >
                <span>Submit Requirement for {currentHubData.name}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* India Regional Map Schematic Representation */}
          <div className="lg:col-span-5 bg-[#1F1916] text-[#FAF8F5] p-6 rounded-2xl border border-stone-800">
            <div className="flex items-center justify-between text-xs text-stone-400 mb-4 pb-2 border-b border-stone-800">
              <span className="uppercase font-mono text-[#D8B26E]">Sourcing Route Map</span>
              <span>7 Coordinated Hubs</span>
            </div>

            <div className="space-y-3 text-xs">
              {hubs.map((h) => (
                <div 
                  key={h.name}
                  onClick={() => setSelectedHub(h.name)}
                  className={`p-2.5 rounded-lg border transition-all cursor-pointer flex items-center justify-between ${
                    selectedHub === h.name
                      ? 'border-[#D8B26E] bg-white/10 text-white font-semibold'
                      : 'border-stone-800 hover:border-stone-700 text-stone-400 hover:text-stone-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${selectedHub === h.name ? 'bg-[#D8B26E]' : 'bg-stone-600'}`} />
                    <span>{h.name}</span>
                  </div>
                  <span className="text-[11px] text-stone-400 truncate max-w-[150px]">{h.specialty.split(',')[0]}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
