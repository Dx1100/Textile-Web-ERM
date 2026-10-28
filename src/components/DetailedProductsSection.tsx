import React, { useState, useMemo } from 'react';
import { ArrowRight, Search, ChevronDown, ChevronUp } from 'lucide-react';
import { JM_JAIN_CATALOG, DepartmentData, CatalogSubcategory } from '../data/jmjainCatalog';

interface DetailedProductsSectionProps {
  onSelectProductRequirement: (categoryName: string) => void;
  onExploreFullCatalog?: () => void;
}

export const DetailedProductsSection: React.FC<DetailedProductsSectionProps> = ({
  onSelectProductRequirement,
  onExploreFullCatalog,
}) => {
  const [activeDept, setActiveDept] = useState<'WOMEN' | 'MEN' | 'KIDS' | 'HOME'>('WOMEN');
  const [activeSubcatFilter, setActiveSubcatFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  const currentDeptData: DepartmentData = useMemo(() => {
    return JM_JAIN_CATALOG.find((d) => d.id === activeDept) || JM_JAIN_CATALOG[0];
  }, [activeDept]);

  const handleDeptChange = (dept: 'WOMEN' | 'MEN' | 'KIDS' | 'HOME') => {
    setActiveDept(dept);
    setActiveSubcatFilter('all');
    setExpandedCards({});
  };

  const toggleExpand = (subcatId: string) => {
    setExpandedCards((prev) => ({
      ...prev,
      [subcatId]: !prev[subcatId],
    }));
  };

  const displayedSubcategories: CatalogSubcategory[] = useMemo(() => {
    let list = currentDeptData.subcategories;

    if (activeSubcatFilter !== 'all') {
      list = list.filter((sc) => sc.id === activeSubcatFilter);
    }

    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase().trim();
      list = currentDeptData.subcategories.filter((sc) => {
        const matchesTitle = sc.title.toLowerCase().includes(q);
        const matchesDesc = sc.description.toLowerCase().includes(q);
        const matchesHub = sc.primaryHubs.toLowerCase().includes(q);
        const matchesItems = sc.items.some((item) => item.toLowerCase().includes(q));
        return matchesTitle || matchesDesc || matchesHub || matchesItems;
      });
    }

    return list;
  }, [currentDeptData, activeSubcatFilter, searchQuery]);

  const totalDepartmentItems = useMemo(() => {
    return currentDeptData.subcategories.reduce((acc, sc) => acc + sc.items.length, 0);
  }, [currentDeptData]);

  return (
    <section id="products-showcase" className="py-14 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#0D7A5F] uppercase mb-1.5">
              <span className="w-5 h-0.5 bg-[#0D7A5F]" />
              <span>What We Source</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-extrabold text-[#0B1B33] tracking-tight">
              Product Categories & Sourcing Range
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal mt-1.5 max-w-xl">
              Direct hub sourcing across apparel, footwear, accessories, and home furnishings. Transparent wholesale ordering for Tier 2 & Tier 3 retail showrooms.
            </p>
          </div>

          {onExploreFullCatalog && (
            <button
              type="button"
              onClick={onExploreFullCatalog}
              className="text-xs font-bold uppercase tracking-wider text-[#0B1B33] hover:text-[#0D7A5F] flex items-center gap-1.5 cursor-pointer self-start sm:self-end pb-1 border-b border-slate-300 hover:border-[#0D7A5F] transition-colors"
            >
              <span>View Full Sourcing Desk</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* 4 Primary Department Navigation Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl mb-6 overflow-x-auto">
          {JM_JAIN_CATALOG.map((dept) => (
            <button
              key={dept.id}
              type="button"
              onClick={() => handleDeptChange(dept.id)}
              className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap ${
                activeDept === dept.id
                  ? 'bg-[#0B1B33] text-white shadow-xs'
                  : 'text-slate-600 hover:text-[#0B1B33] hover:bg-white/60'
              }`}
            >
              <span>{dept.label}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                activeDept === dept.id ? 'bg-[#0D7A5F] text-white' : 'bg-slate-200 text-slate-700'
              }`}>
                {dept.subcategories.reduce((sum, s) => sum + s.items.length, 0)}
              </span>
            </button>
          ))}
        </div>

        {/* Department Info & Compact Search */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 mb-6 pb-4 border-b border-slate-200">
          <p className="text-xs text-slate-600 max-w-xl">
            {currentDeptData.tagline}
          </p>

          <div className="relative w-full lg:w-72">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search in ${currentDeptData.label} (e.g. Sarees, Shirts)...`}
              className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-[#0B1B33] placeholder:text-slate-400 focus:outline-none focus:border-[#0D7A5F] focus:bg-white transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Subcategory Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6">
          <button
            type="button"
            onClick={() => setActiveSubcatFilter('all')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
              activeSubcatFilter === 'all'
                ? 'bg-[#0D7A5F] text-white'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
            }`}
          >
            All Subcategories ({totalDepartmentItems})
          </button>
          {currentDeptData.subcategories.map((subcat) => (
            <button
              key={subcat.id}
              type="button"
              onClick={() => setActiveSubcatFilter(subcat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                activeSubcatFilter === subcat.id
                  ? 'bg-[#0D7A5F] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {subcat.title} ({subcat.items.length})
            </button>
          ))}
        </div>

        {/* Compact Subcategory Cards Grid */}
        {displayedSubcategories.length === 0 ? (
          <div className="text-center py-12 bg-slate-50 rounded-xl border border-slate-200">
            <p className="text-xs text-slate-600 mb-2">No matching products found for "{searchQuery}".</p>
            <button
              type="button"
              onClick={() => {
                setSearchQuery('');
                setActiveSubcatFilter('all');
              }}
              className="text-xs font-bold text-[#0D7A5F] hover:underline cursor-pointer"
            >
              Reset Search & Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSubcategories.map((subcat) => {
              const isExpanded = !!expandedCards[subcat.id];
              // Show only first 4-5 items initially, remaining via dropdown toggle
              const visibleItems = isExpanded ? subcat.items : subcat.items.slice(0, 5);
              const remainingCount = subcat.items.length - 5;

              return (
                <div
                  key={subcat.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-[#0D7A5F] hover:shadow-sm transition-all group"
                >
                  {/* Compact Visual Header Strip (Reduced Height) */}
                  <div className="relative h-28 sm:h-32 overflow-hidden bg-slate-100">
                    <img
                      src={subcat.image}
                      alt={subcat.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent flex items-end p-3 sm:p-4">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-300 block leading-tight">
                          {currentDeptData.label} Department
                        </span>
                        <h3 className="text-base sm:text-lg font-heading font-extrabold text-white leading-tight mt-0.5">
                          {subcat.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  {/* Card Body with Compact Spacing */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Sourcing Hubs Text (No MapPin icon per instruction) */}
                      <div className="text-[11px] text-slate-500 font-medium mb-1.5 flex items-center gap-1.5">
                        <span className="text-[#0D7A5F] font-bold uppercase text-[10px] tracking-wider">
                          Hubs:
                        </span>
                        <span className="text-slate-700 truncate">{subcat.primaryHubs}</span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal mb-3">
                        {subcat.description}
                      </p>

                      {/* Initial 4-5 items + Expand Dropdown */}
                      <div className="space-y-1.5">
                        <div className="flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          <span>Key Sourced Items ({subcat.items.length})</span>
                          {remainingCount > 0 && (
                            <button
                              type="button"
                              onClick={() => toggleExpand(subcat.id)}
                              className="text-[#0D7A5F] hover:text-[#0A634D] hover:underline flex items-center gap-0.5 cursor-pointer lowercase first-letter:uppercase"
                            >
                              <span>{isExpanded ? 'Show less' : `+${remainingCount} more`}</span>
                              {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                            </button>
                          )}
                        </div>

                        {/* Interactive Clickable Item Badges */}
                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {visibleItems.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => onSelectProductRequirement(`${subcat.title}: ${item}`)}
                              className="px-2 py-0.5 text-[10px] sm:text-[11px] bg-slate-50 hover:bg-[#0D7A5F] hover:text-white border border-slate-200 rounded text-slate-700 font-medium transition-colors cursor-pointer text-left"
                              title={`Submit sourcing enquiry for ${item}`}
                            >
                              <span>{item}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Compact Action Button */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onSelectProductRequirement(subcat.title)}
                        className="w-full py-2 px-3 rounded-lg bg-slate-50 border border-slate-200 hover:border-[#0D7A5F] hover:bg-[#0D7A5F] hover:text-white text-xs font-bold uppercase tracking-wider text-[#0B1B33] transition-colors flex items-center justify-center gap-1.5 cursor-pointer shadow-2xs"
                      >
                        <span>Enquire {subcat.title}</span>
                        <ArrowRight className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
};
