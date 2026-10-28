import React, { useState, useMemo } from 'react';
import { ProductCard } from '../components/ProductCard';
import { TEXTILE_PRODUCTS } from '../data/textilesData';
import { JM_JAIN_CATALOG, DepartmentData, CatalogSubcategory } from '../data/jmjainCatalog';
import { Product, ProductCategory } from '../types';
import { 
  Search, 
  FileText, 
  ChevronRight,
  ChevronDown,
  ChevronUp,
  X,
  ArrowRight
} from 'lucide-react';

interface ProductsPageProps {
  currency: 'INR' | 'USD';
  onQuickView: (product: Product) => void;
  onOrderSwatch: (product: Product) => void;
  onAddToCart: (product: Product, quantity: number) => void;
  onNavigateHome: () => void;
  onOpenRequirementModal: (initialCat?: string) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  currency,
  onQuickView,
  onOrderSwatch,
  onAddToCart,
  onNavigateHome,
  onOpenRequirementModal,
}) => {
  // Main view mode: 'categories' (JM Jain Full Categories) vs 'swatches' (Textile Swatches)
  const [viewMode, setViewMode] = useState<'categories' | 'swatches'>('categories');
  
  // Category Navigation State (JM Jain)
  const [activeDept, setActiveDept] = useState<'WOMEN' | 'MEN' | 'KIDS' | 'HOME'>('WOMEN');
  const [activeSubcatFilter, setActiveSubcatFilter] = useState<string>('all');
  const [categorySearch, setCategorySearch] = useState<string>('');
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>({});

  // Swatches Filter State
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [activeSubcategory, setActiveSubcategory] = useState<string>('all');
  const [swatchSearch, setSwatchSearch] = useState<string>('');
  const [selectedHub, setSelectedHub] = useState<string>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');

  const currentDeptData: DepartmentData = useMemo(() => {
    return JM_JAIN_CATALOG.find((d) => d.id === activeDept) || JM_JAIN_CATALOG[0];
  }, [activeDept]);

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

    if (categorySearch.trim() !== '') {
      const q = categorySearch.toLowerCase().trim();
      list = currentDeptData.subcategories.filter((sc) => {
        const matchesTitle = sc.title.toLowerCase().includes(q);
        const matchesDesc = sc.description.toLowerCase().includes(q);
        const matchesHub = sc.primaryHubs.toLowerCase().includes(q);
        const matchesItems = sc.items.some((item) => item.toLowerCase().includes(q));
        return matchesTitle || matchesDesc || matchesHub || matchesItems;
      });
    }

    return list;
  }, [currentDeptData, activeSubcatFilter, categorySearch]);

  const categoriesList: { id: ProductCategory; label: string; count: number }[] = useMemo(() => {
    return [
      { id: 'all', label: 'All Weaves', count: TEXTILE_PRODUCTS.length },
      { id: 'sarees', label: 'Heritage Sarees', count: TEXTILE_PRODUCTS.filter(p => p.category === 'sarees').length },
      { id: 'suits', label: 'Suits & Materials', count: TEXTILE_PRODUCTS.filter(p => p.category === 'suits').length },
      { id: 'lehengas', label: 'Bridal Lehengas', count: TEXTILE_PRODUCTS.filter(p => p.category === 'lehengas').length },
      { id: 'fabrics', label: 'Running Fabrics', count: TEXTILE_PRODUCTS.filter(p => p.category === 'fabrics').length },
      { id: 'brocades', label: 'Katan Brocades', count: TEXTILE_PRODUCTS.filter(p => p.category === 'brocades').length },
    ];
  }, []);

  const availableSubcategories = useMemo(() => {
    const relevantProducts = activeCategory === 'all' 
      ? TEXTILE_PRODUCTS 
      : TEXTILE_PRODUCTS.filter(p => p.category === activeCategory);

    const subcats = Array.from(new Set(relevantProducts.map(p => p.subcategory).filter(Boolean)));
    return ['all', ...subcats];
  }, [activeCategory]);

  const filteredProducts = useMemo(() => {
    return TEXTILE_PRODUCTS.filter((prod) => {
      if (activeCategory !== 'all' && prod.category !== activeCategory) return false;
      if (activeSubcategory !== 'all' && prod.subcategory !== activeSubcategory) return false;
      if (selectedHub !== 'all') {
        const textToSearch = `${prod.description} ${prod.composition} ${prod.suitableFor?.join(' ')}`.toLowerCase();
        if (!textToSearch.includes(selectedHub.toLowerCase())) return false;
      }
      if (swatchSearch.trim() !== '') {
        const q = swatchSearch.toLowerCase().trim();
        const match = 
          prod.name.toLowerCase().includes(q) ||
          prod.subcategory.toLowerCase().includes(q) ||
          prod.weaveType.toLowerCase().includes(q) ||
          prod.composition.toLowerCase().includes(q);
        if (!match) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [activeCategory, activeSubcategory, selectedHub, swatchSearch, sortBy]);

  return (
    <div className="py-8 px-4 sm:px-8 max-w-7xl mx-auto w-full animate-in fade-in duration-300">
      
      {/* Breadcrumb Navigation */}
      <nav className="flex items-center gap-2 text-xs text-slate-500 mb-6">
        <button type="button" onClick={onNavigateHome} className="hover:text-slate-900 transition-colors cursor-pointer">
          Home
        </button>
        <ChevronRight className="w-3 h-3 text-slate-400" />
        <span className="text-[#0D7A5F] font-bold">What We Source</span>
      </nav>

      {/* Hero Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-slate-200">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#0D7A5F] text-[11px] font-semibold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#0D7A5F]" />
            <span>Sourcing Portfolio · Verified Hub Network</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-[#0B1B33] leading-tight mb-2">
            What We Source for Retailers & Wholesalers
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed font-normal">
            Comprehensive sourcing catalog across Women, Men, Kids, and Home Furnishings. Pre-dispatch physical quality checks and flexible trade financing.
          </p>
        </div>

        <button
          type="button"
          onClick={() => onOpenRequirementModal()}
          className="flex items-center gap-2 px-6 py-3.5 bg-[#0D7A5F] hover:bg-[#0A634D] text-white text-xs font-bold tracking-wider uppercase rounded-xl transition-all shadow-sm shrink-0 cursor-pointer"
        >
          <FileText className="w-4 h-4" />
          <span>Send Sourcing Requirement</span>
        </button>
      </div>

      {/* Dual Mode Selector */}
      <div className="flex items-center gap-3 mb-8">
        <button
          type="button"
          onClick={() => setViewMode('categories')}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer text-center border ${
            viewMode === 'categories'
              ? 'bg-[#0B1B33] text-white border-[#0B1B33] shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
          }`}
        >
          <span>1. Product Categories (Women · Men · Kids · Home)</span>
        </button>
        <button
          type="button"
          onClick={() => setViewMode('swatches')}
          className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer text-center border ${
            viewMode === 'swatches'
              ? 'bg-[#0B1B33] text-white border-[#0B1B33] shadow-xs'
              : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'
          }`}
        >
          <span>2. Live Swatches & Fabric Qualities ({TEXTILE_PRODUCTS.length})</span>
        </button>
      </div>

      {/* VIEW MODE 1: JM JAIN FULL CATEGORIES */}
      {viewMode === 'categories' && (
        <div className="space-y-6">
          
          {/* Department Tabs */}
          <div className="flex items-center gap-2 p-1.5 bg-slate-100 rounded-xl overflow-x-auto">
            {JM_JAIN_CATALOG.map((dept) => (
              <button
                key={dept.id}
                type="button"
                onClick={() => {
                  setActiveDept(dept.id);
                  setActiveSubcatFilter('all');
                  setExpandedCards({});
                }}
                className={`flex-1 min-w-[100px] py-2.5 px-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5 whitespace-nowrap ${
                  activeDept === dept.id
                    ? 'bg-[#0B1B33] text-white shadow-sm'
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

          {/* Department Tagline & Search */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-4 border-b border-slate-200">
            <p className="text-xs text-slate-600 max-w-xl">
              {currentDeptData.tagline}
            </p>

            <div className="relative w-full lg:w-72">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={categorySearch}
                onChange={(e) => setCategorySearch(e.target.value)}
                placeholder={`Search in ${currentDeptData.label}...`}
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-50 border border-slate-300 rounded-lg text-[#0B1B33] placeholder:text-slate-400 focus:outline-none focus:border-[#0D7A5F] focus:bg-white transition-colors"
              />
              {categorySearch && (
                <button
                  type="button"
                  onClick={() => setCategorySearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-slate-700 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Subcategory Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <button
              type="button"
              onClick={() => setActiveSubcatFilter('all')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer shrink-0 ${
                activeSubcatFilter === 'all'
                  ? 'bg-[#0D7A5F] text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              All Subcategories
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

          {/* Compact Subcategories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedSubcategories.map((subcat) => {
              const isExpanded = !!expandedCards[subcat.id];
              const visibleItems = isExpanded ? subcat.items : subcat.items.slice(0, 5);
              const remainingCount = subcat.items.length - 5;

              return (
                <div
                  key={subcat.id}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden flex flex-col justify-between hover:border-[#0D7A5F] hover:shadow-sm transition-all group"
                >
                  {/* Compact Header Strip (Reduced Height) */}
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

                  {/* Body with 4-5 items and dropdown toggle */}
                  <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-3">
                    <div>
                      {/* Sourcing Hubs Text without MapPin */}
                      <div className="text-[11px] text-slate-500 font-medium mb-1.5 flex items-center gap-1.5">
                        <span className="text-[#0D7A5F] font-bold uppercase text-[10px] tracking-wider">
                          Hubs:
                        </span>
                        <span className="text-slate-700 truncate">{subcat.primaryHubs}</span>
                      </div>

                      <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed font-normal mb-3">
                        {subcat.description}
                      </p>

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

                        <div className="flex flex-wrap gap-1 pt-0.5">
                          {visibleItems.map((item) => (
                            <button
                              key={item}
                              type="button"
                              onClick={() => onOpenRequirementModal(`${subcat.title}: ${item}`)}
                              className="px-2 py-0.5 text-[10px] sm:text-[11px] bg-slate-50 hover:bg-[#0D7A5F] hover:text-white border border-slate-200 rounded text-slate-700 font-medium transition-colors cursor-pointer text-left"
                              title={`Submit sourcing enquiry for ${item}`}
                            >
                              <span>{item}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between gap-2">
                      <button
                        type="button"
                        onClick={() => onOpenRequirementModal(subcat.title)}
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

        </div>
      )}

      {/* VIEW MODE 2: LIVE TEXTILE SWATCHES */}
      {viewMode === 'swatches' && (
        <div>
          {/* Swatches Category Tabs */}
          <div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 mb-6 shadow-xs">
            <div className="border-b border-slate-100 pb-3 mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  Select Fabric Category
                </span>
                <span className="text-xs text-slate-500">
                  {filteredProducts.length} Qualities Available
                </span>
              </div>

              <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
                {categoriesList.map((cat) => {
                  const isActive = activeCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        setActiveCategory(cat.id);
                        setActiveSubcategory('all');
                      }}
                      className={`px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer ${
                        isActive
                          ? 'bg-[#0B1B33] text-white shadow-xs font-semibold'
                          : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200/70'
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                        isActive ? 'bg-white/20 text-white' : 'bg-slate-200 text-slate-600'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Subcategory Pills */}
            {availableSubcategories.length > 1 && (
              <div className="mb-3">
                <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-500 block mb-1.5">
                  Filter by Weave:
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {availableSubcategories.map((subcat) => {
                    const isSubActive = activeSubcategory === subcat;
                    return (
                      <button
                        key={subcat}
                        type="button"
                        onClick={() => setActiveSubcategory(subcat)}
                        className={`px-2.5 py-1 rounded-md text-xs transition-colors cursor-pointer ${
                          isSubActive
                            ? 'bg-[#0D7A5F] text-white font-semibold shadow-2xs'
                            : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:border-slate-400'
                        }`}
                      >
                        {subcat === 'all' ? 'All Varieties' : subcat}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Search, Hub (Without MapPin), and Sort */}
            <div className="pt-3 border-t border-slate-100 flex flex-col md:flex-row md:items-center justify-between gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={swatchSearch}
                  onChange={(e) => setSwatchSearch(e.target.value)}
                  placeholder="Search by weave, fabric name, or composition..."
                  className="w-full pl-9 pr-8 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#0D7A5F] focus:bg-white transition-colors"
                />
                {swatchSearch && (
                  <button
                    type="button"
                    onClick={() => setSwatchSearch('')}
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              <div className="flex items-center gap-2">
                <select
                  value={selectedHub}
                  onChange={(e) => setSelectedHub(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-[#0D7A5F]"
                >
                  <option value="all">All Sourcing Hubs</option>
                  <option value="Varanasi">Varanasi Hub</option>
                  <option value="Surat">Surat Hub</option>
                  <option value="Delhi">Delhi NCR Hub</option>
                  <option value="Jaipur">Jaipur Hub</option>
                  <option value="Panipat">Panipat Hub</option>
                </select>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5 text-xs text-slate-700 focus:outline-none focus:border-[#0D7A5F]"
                >
                  <option value="featured">Featured Weaves</option>
                  <option value="rating">Top Rated</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>
          </div>

          {/* Product Cards Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currency}
                  onQuickView={onQuickView}
                  onOrderSwatch={onOrderSwatch}
                  onAddToCart={(p, qty) => onAddToCart(p, qty)}
                />
              ))}
            </div>
          ) : (
            <div className="py-12 text-center bg-white rounded-xl border border-slate-200 p-6 max-w-xl mx-auto">
              <p className="text-sm font-heading font-bold text-slate-800 mb-1.5">No matching products found</p>
              <p className="text-xs text-slate-500 mb-4">
                We source customized specifications on demand. Send us a photo or requirement details and our sourcing desk will locate it for you.
              </p>
              <button
                type="button"
                onClick={() => onOpenRequirementModal()}
                className="px-4 py-2 bg-[#0D7A5F] hover:bg-[#0A634D] text-white text-xs font-bold rounded-lg uppercase tracking-wider cursor-pointer shadow-sm"
              >
                Submit Custom Sourcing Request
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
