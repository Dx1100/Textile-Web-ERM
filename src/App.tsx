import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProductCard } from './components/ProductCard';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FabricCalculator } from './components/FabricCalculator';
import { CartDrawer } from './components/CartDrawer';
import { WholesaleModal } from './components/WholesaleModal';
import { ConsultationModal } from './components/ConsultationModal';
import { HeritageStory } from './components/HeritageStory';
import { Footer } from './components/Footer';

// Dedicated Page Views
import { BrocadesPage } from './pages/BrocadesPage';
import { SareesPage } from './pages/SareesPage';
import { LehengasPage } from './pages/LehengasPage';
import { SuitSetsPage } from './pages/SuitSetsPage';
import { FabricsPage } from './pages/FabricsPage';
import { AboutPage } from './pages/AboutPage';
import { WholesalePage } from './pages/WholesalePage';
import { StoresPage } from './pages/StoresPage';

import { TEXTILE_PRODUCTS } from './data/textilesData';
import { Product, ProductCategory, CartItem, PageView } from './types';
import { SlidersHorizontal, MessageCircle, Sparkles, Check, ArrowRight } from 'lucide-react';

export default function App() {
  // Page View routing
  const [activePage, setActivePage] = useState<PageView>('home');
  const [activeCategory, setActiveCategory] = useState<ProductCategory>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [filterWeaveOnly, setFilterWeaveOnly] = useState<string>('all');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Modals & Drawers
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isWholesaleOpen, setIsWholesaleOpen] = useState(false);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  // Cart State (Initialized with 1 sample for instant interaction)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      cartItemId: 'init-1',
      productId: TEXTILE_PRODUCTS[0].id,
      product: TEXTILE_PRODUCTS[0],
      purchaseType: 'swatch_sample',
      quantity: 1,
      selectedColor: TEXTILE_PRODUCTS[0].availableColors[0].name,
      unitPrice: 99,
    },
  ]);

  // Toast notification for actions
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Scroll to top whenever page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Navigation handler
  const handleNavigate = (page: PageView) => {
    setActivePage(page);
    setSearchQuery('');
    if (page === 'fabrics') setActiveCategory('fabrics');
    else if (page === 'brocades') setActiveCategory('brocades');
    else if (page === 'sarees') setActiveCategory('sarees');
    else if (page === 'lehengas') setActiveCategory('lehengas');
    else if (page === 'suits') setActiveCategory('suits');
    else setActiveCategory('all');
  };

  // Cart Operations
  const handleAddToCart = (product: Product, quantity: number, selectedColor?: string, isSwatch = false) => {
    const color = selectedColor || product.colorName;
    const type = isSwatch ? 'swatch_sample' : (product.priceUnit === 'per meter' ? 'fabric_meters' : 'ready_garment');
    const unitPrice = isSwatch ? product.swatchPrice : product.price;
    const id = `${product.id}-${color}-${type}`;

    setCartItems(prev => {
      const existing = prev.find(item => item.cartItemId === id);
      if (existing) {
        return prev.map(item => 
          item.cartItemId === id ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [
        ...prev,
        {
          cartItemId: id,
          productId: product.id,
          product,
          purchaseType: type,
          quantity,
          selectedColor: color,
          unitPrice,
        },
      ];
    });

    showToast(`Added ${isSwatch ? 'swatch sample' : `${quantity}m / pc`} of ${product.name} to your bag`);
  };

  const handleOrderSwatch = (product: Product) => {
    handleAddToCart(product, 1, product.availableColors[0]?.name || product.colorName, true);
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (cartItemId: string, newQty: number) => {
    setCartItems(prev => prev.map(item => {
      if (item.cartItemId === cartItemId) {
        return { ...item, quantity: Math.max(0.5, newQty) };
      }
      return item;
    }));
  };

  const handleRemoveItem = (cartItemId: string) => {
    setCartItems(prev => prev.filter(item => item.cartItemId !== cartItemId));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  const handleAddCustomKit = (product: Product, meters: number, liningMeters: number) => {
    handleAddToCart(product, meters, product.availableColors[0]?.name || product.colorName, false);
    if (liningMeters > 0) {
      const liningProduct = TEXTILE_PRODUCTS.find(p => p.id === 'prod-pure-mulberry-silk-satin') || product;
      const liningId = `lining-${product.id}-${liningMeters}`;
      setCartItems(prev => [
        ...prev,
        {
          cartItemId: liningId,
          productId: liningProduct.id,
          product: liningProduct,
          purchaseType: 'fabric_meters',
          quantity: liningMeters,
          selectedColor: 'Matching Santoon/Crepe',
          unitPrice: 250,
        },
      ]);
    }
    showToast(`Added tailored silhouette kit (${meters}m fabric + ${liningMeters}m lining) to bag!`);
    setIsCartOpen(true);
  };

  // Filtered & Sorted Products for Home / Search view
  const filteredProducts = useMemo(() => {
    return TEXTILE_PRODUCTS.filter(prod => {
      if (activeCategory !== 'all' && prod.category !== activeCategory) {
        return false;
      }
      if (filterWeaveOnly !== 'all') {
        if (!prod.subcategory.toLowerCase().includes(filterWeaveOnly.toLowerCase())) {
          return false;
        }
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = prod.name.toLowerCase().includes(q);
        const matchesComp = prod.composition.toLowerCase().includes(q);
        const matchesWeave = prod.weaveType.toLowerCase().includes(q);
        const matchesDesc = prod.description.toLowerCase().includes(q);
        const matchesColor = prod.colorName.toLowerCase().includes(q) || prod.availableColors.some(c => c.name.toLowerCase().includes(q));
        if (!matchesName && !matchesComp && !matchesWeave && !matchesDesc && !matchesColor) {
          return false;
        }
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.price - b.price;
      if (sortBy === 'price-high') return b.price - a.price;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0;
    });
  }, [activeCategory, filterWeaveOnly, searchQuery, sortBy]);

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1916] flex flex-col font-sans selection:bg-[#9B1D2C] selection:text-white">
      
      {/* 1. Header with Top Bar Contract */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        cartCount={cartItems.reduce((acc, item) => acc + (item.purchaseType === 'swatch_sample' ? 1 : Math.ceil(item.quantity)), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        currency={currency}
        onToggleCurrency={() => setCurrency(prev => prev === 'INR' ? 'USD' : 'INR')}
        searchQuery={searchQuery}
        onSearchChange={(q) => {
          setSearchQuery(q);
          if (q.trim() && activePage !== 'home') {
            setActivePage('home');
          }
        }}
      />

      {/* 2. Page View Router */}
      {searchQuery.trim() ? (
        /* Instant Search Results View */
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-10 w-full animate-in fade-in duration-200">
          <div className="mb-8 pb-4 border-b border-stone-200">
            <span className="text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold block mb-1">
              Search Results
            </span>
            <h1 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1916]">
              Search query: "{searchQuery}"
            </h1>
            <p className="text-xs text-stone-500 mt-1">
              Found {filteredProducts.length} matching textiles in archive.
            </p>
          </div>

          {filteredProducts.length === 0 ? (
            <div className="py-20 text-center bg-white rounded-2xl border border-stone-200">
              <p className="text-base font-serif font-semibold text-stone-700">No textiles matched your search</p>
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="mt-4 px-4 py-2 bg-[#9B1D2C] text-white text-xs font-semibold rounded-lg cursor-pointer"
              >
                Clear Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currency}
                  onQuickView={setSelectedProduct}
                  onOrderSwatch={handleOrderSwatch}
                  onAddToCart={(p, qty) => handleAddToCart(p, qty, p.availableColors[0]?.name || p.colorName, false)}
                />
              ))}
            </div>
          )}
        </main>
      ) : activePage === 'brocades' ? (
        <BrocadesPage
          currency={currency}
          onQuickView={setSelectedProduct}
          onOrderSwatch={handleOrderSwatch}
          onAddToCart={(p, qty) => handleAddToCart(p, qty, p.availableColors[0]?.name || p.colorName, false)}
          onNavigateHome={() => handleNavigate('home')}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
      ) : activePage === 'sarees' ? (
        <SareesPage
          currency={currency}
          onQuickView={setSelectedProduct}
          onOrderSwatch={handleOrderSwatch}
          onAddToCart={(p, qty) => handleAddToCart(p, qty, p.availableColors[0]?.name || p.colorName, false)}
          onNavigateHome={() => handleNavigate('home')}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      ) : activePage === 'lehengas' ? (
        <LehengasPage
          currency={currency}
          onQuickView={setSelectedProduct}
          onOrderSwatch={handleOrderSwatch}
          onAddToCart={(p, qty) => handleAddToCart(p, qty, p.availableColors[0]?.name || p.colorName, false)}
          onNavigateHome={() => handleNavigate('home')}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
      ) : activePage === 'suits' ? (
        <SuitSetsPage
          currency={currency}
          onQuickView={setSelectedProduct}
          onOrderSwatch={handleOrderSwatch}
          onAddToCart={(p, qty) => handleAddToCart(p, qty, p.availableColors[0]?.name || p.colorName, false)}
          onNavigateHome={() => handleNavigate('home')}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
        />
      ) : activePage === 'fabrics' ? (
        <FabricsPage
          currency={currency}
          onQuickView={setSelectedProduct}
          onOrderSwatch={handleOrderSwatch}
          onAddToCart={(p, qty) => handleAddToCart(p, qty, p.availableColors[0]?.name || p.colorName, false)}
          onNavigateHome={() => handleNavigate('home')}
          onOpenCalculator={() => setIsCalculatorOpen(true)}
          onOpenWholesale={() => setIsWholesaleOpen(true)}
        />
      ) : activePage === 'about' ? (
        <AboutPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenWholesale={() => setIsWholesaleOpen(true)}
        />
      ) : activePage === 'wholesale' ? (
        <WholesalePage
          onNavigateHome={() => handleNavigate('home')}
        />
      ) : activePage === 'stores' ? (
        <StoresPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      ) : (
        /* Home Page */
        <>
          <Hero
            onExploreFabrics={() => {
              const el = document.getElementById('catalog-section');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenCalculator={() => setIsCalculatorOpen(true)}
            onOpenWholesale={() => setIsWholesaleOpen(true)}
          />

          {/* Quick Collection Showcase Cards */}
          <section className="max-w-7xl mx-auto px-4 sm:px-8 py-10 w-full">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { page: 'brocades', title: 'Pure Silk Brocades', subtitle: 'Kadhwa & Tanchoi Weaves', bg: 'bg-[#143D36] text-white' },
                { page: 'sarees', title: 'Heritage Sarees', subtitle: '5.5m Katan & Kanjivaram', bg: 'bg-[#831825] text-white' },
                { page: 'lehengas', title: 'Bridal Lehengas', subtitle: 'Velvet & Brocade 8m Ghera', bg: 'bg-[#521018] text-white' },
                { page: 'suits', title: 'Unstitched Suits', subtitle: 'Chanderi & Chikankari', bg: 'bg-[#3D5A50] text-white' },
              ].map(cat => (
                <button
                  key={cat.page}
                  type="button"
                  onClick={() => handleNavigate(cat.page as PageView)}
                  className={`p-5 rounded-2xl text-left transition-all hover:-translate-y-1 hover:shadow-lg cursor-pointer ${cat.bg}`}
                >
                  <span className="text-[10px] text-[#D8B26E] font-bold uppercase tracking-wider block mb-1">Explore Collection →</span>
                  <h3 className="font-serif font-bold text-base sm:text-lg leading-snug">{cat.title}</h3>
                  <p className="text-[11px] opacity-80 mt-0.5">{cat.subtitle}</p>
                </button>
              ))}
            </div>
          </section>

          {/* Catalog & Swatch Switcher Section */}
          <main id="catalog-section" className="flex-1 max-w-7xl mx-auto px-4 sm:px-8 py-8 w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 pb-6 border-b border-stone-200">
              <div>
                <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#9B1D2C] font-semibold mb-2">
                  <span>Curated Master Archive</span>
                  <span aria-hidden="true">·</span>
                  <span>Direct Loom Sourcing</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#1F1916]">
                  {activeCategory === 'all' && 'Featured Heritage Weaves & Ensembles'}
                  {activeCategory === 'brocades' && 'Pure Banarasi Katan Silk Brocades'}
                  {activeCategory === 'fabrics' && 'Haute Couture Fabrics & Tissues'}
                  {activeCategory === 'sarees' && 'Virasat Heritage Bridal Sarees'}
                  {activeCategory === 'lehengas' && 'Handcrafted Royal Bridal Lehengas'}
                  {activeCategory === 'suits' && 'Unstitched Artisanal Suit Sets'}
                </h2>
                <p className="text-xs text-stone-500 mt-1">
                  Showing {filteredProducts.length} authentic Indian textiles with direct swatch ordering & custom yardage cutting.
                </p>
              </div>

              {/* Interactive Filter & Sort Controls */}
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-xs">
                  <SlidersHorizontal className="w-3.5 h-3.5 text-stone-400" />
                  <select
                    value={filterWeaveOnly}
                    onChange={(e) => setFilterWeaveOnly(e.target.value)}
                    className="bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs text-stone-700 focus:outline-none focus:border-[#9B1D2C]"
                  >
                    <option value="all">All Weaves</option>
                    <option value="Silk">Silks</option>
                    <option value="Brocade">Brocades</option>
                    <option value="Chanderi">Chanderi</option>
                    <option value="Tissue">Tissues</option>
                    <option value="Linen">Linens</option>
                  </select>
                </div>

                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="bg-white border border-stone-300 rounded-lg px-2.5 py-1.5 text-xs text-stone-700 focus:outline-none focus:border-[#9B1D2C]"
                >
                  <option value="featured">Featured Weaves</option>
                  <option value="rating">Top Rated by Ateliers</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                </select>
              </div>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-4 mb-8 text-xs font-medium scrollbar-none">
              {[
                { id: 'all', label: 'All Collections' },
                { id: 'brocades', label: 'Brocades & Zari' },
                { id: 'fabrics', label: 'Couture Yardage' },
                { id: 'sarees', label: 'Heritage Sarees' },
                { id: 'lehengas', label: 'Bridal Lehengas' },
                { id: 'suits', label: 'Unstitched Suits' },
              ].map(tab => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveCategory(tab.id as ProductCategory)}
                  className={`px-4 py-2 rounded-lg whitespace-nowrap transition-all cursor-pointer ${
                    activeCategory === tab.id
                      ? 'bg-[#1F1916] text-[#D8B26E] font-semibold shadow-xs'
                      : 'bg-white border border-stone-200 text-stone-600 hover:text-stone-900 hover:border-stone-400'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  currency={currency}
                  onQuickView={setSelectedProduct}
                  onOrderSwatch={handleOrderSwatch}
                  onAddToCart={(p, qty) => handleAddToCart(p, qty, p.availableColors[0]?.name || p.colorName, false)}
                />
              ))}
            </div>

            {/* Fabric Yardage Calculator Banner */}
            <div className="mt-16 bg-gradient-to-r from-[#143D36] to-[#1F544A] text-white rounded-2xl p-6 sm:p-10 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-xl">
                <span className="text-[#D8B26E] text-xs font-bold uppercase tracking-widest block mb-1">
                  Bespoke Yardage Assistant
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                  Uncertain how many meters to order for your tailor?
                </h3>
                <p className="text-xs text-stone-200 leading-relaxed font-light">
                  Use our interactive estimator to calculate exact meter lengths for 16-kali lehengas, anarkalis, blouses, and sherwanis, plus recommended santoon/crepe linings and border trims.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setIsCalculatorOpen(true)}
                className="px-6 py-3.5 bg-[#FAF8F5] text-[#143D36] hover:bg-white text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow-sm shrink-0 flex items-center gap-2 cursor-pointer"
              >
                <span>Open Fabric Calculator</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </main>

          {/* Heritage Story */}
          <HeritageStory
            onOpenConsultation={() => setIsConsultationOpen(true)}
            onOpenWholesale={() => setIsWholesaleOpen(true)}
          />
        </>
      )}

      {/* 3. Footer with Navigation */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenWholesaleModal={() => setIsWholesaleOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/919811054321?text=Hello%20Bhasin%20Textiles!%20I%20would%20like%20to%20inquire%20about%20fabrics,%20sarees,%20and%20swatches."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#143D36] hover:bg-[#0E2E28] text-white rounded-full shadow-xl hover:shadow-2xl transition-all text-xs font-semibold tracking-wide border border-[#D8B26E]/40"
          title="Direct WhatsApp Consultation"
        >
          <MessageCircle className="w-5 h-5 text-[#D8B26E]" />
          <span className="hidden sm:inline">WhatsApp Fabric Master</span>
        </a>
      </div>

      {/* Modals & Slide-overs */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        currency={currency}
        onAddToCart={handleAddToCart}
        onOpenCalculator={() => {
          setSelectedProduct(null);
          setIsCalculatorOpen(true);
        }}
        onOpenWholesale={() => {
          setSelectedProduct(null);
          setIsWholesaleOpen(true);
        }}
      />

      <FabricCalculator
        isOpen={isCalculatorOpen}
        onClose={() => setIsCalculatorOpen(false)}
        currency={currency}
        onAddCustomKitToCart={handleAddCustomKit}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
        currency={currency}
      />

      <WholesaleModal
        isOpen={isWholesaleOpen}
        onClose={() => setIsWholesaleOpen(false)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Floating Toast Notice */}
      {toastMessage && (
        <div className="fixed bottom-6 left-6 z-50 bg-[#1F1916] text-[#FAF8F5] px-4 py-3 rounded-xl shadow-xl border border-stone-700 text-xs flex items-center gap-2 animate-in slide-in-from-bottom duration-200">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

    </div>
  );
}
