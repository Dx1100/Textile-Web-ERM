import React, { useState, useMemo, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhatWeSourceSection } from './components/WhatWeSourceSection';
import { SourcingHubsSection } from './components/SourcingHubsSection';
import { HowWeWorkSection } from './components/HowWeWorkSection';
import { WhoWeServeSection } from './components/WhoWeServeSection';
import { WhyUsSection } from './components/WhyUsSection';
import { CompanyStorySection } from './components/CompanyStorySection';
import { TrustProofSection } from './components/TrustProofSection';
import { FinalCTASection } from './components/FinalCTASection';
import { ThreadlincBanner } from './components/ThreadlincBanner';
import { Footer } from './components/Footer';

// Modals
import { RequirementModal } from './components/RequirementModal';
import { ThreadlincModal } from './components/ThreadlincModal';
import { CartDrawer } from './components/CartDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';
import { FabricCalculator } from './components/FabricCalculator';
import { WholesaleModal } from './components/WholesaleModal';
import { ConsultationModal } from './components/ConsultationModal';

// Dedicated Subpages
import { ProductsPage } from './pages/ProductsPage';
import { SourcingNetworkPage } from './pages/SourcingNetworkPage';
import { OurProcessPage } from './pages/OurProcessPage';
import { WhoWeServePage } from './pages/WhoWeServePage';
import { ThreadlincPage } from './pages/ThreadlincPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { InsightsPage } from './pages/InsightsPage';
import { BrocadesPage } from './pages/BrocadesPage';
import { SareesPage } from './pages/SareesPage';
import { LehengasPage } from './pages/LehengasPage';
import { SuitSetsPage } from './pages/SuitSetsPage';
import { FabricsPage } from './pages/FabricsPage';
import { WholesalePage } from './pages/WholesalePage';
import { StoresPage } from './pages/StoresPage';

import { TEXTILE_PRODUCTS } from './data/textilesData';
import { Product, ProductCategory, CartItem, PageView } from './types';
import { MessageCircle, Check } from 'lucide-react';

export default function App() {
  // Page Routing State
  const [activePage, setActivePage] = useState<PageView>('home');
  const [currency, setCurrency] = useState<'INR' | 'USD'>('INR');

  // Modals & Drawers State
  const [isRequirementModalOpen, setIsRequirementModalOpen] = useState(false);
  const [requirementInitialCategory, setRequirementInitialCategory] = useState<string | undefined>(undefined);
  const [isThreadlincOpen, setIsThreadlincOpen] = useState(false);
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

  // Toast notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  // Scroll to top on navigation
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activePage]);

  // Navigation handler
  const handleNavigate = (page: PageView) => {
    setActivePage(page);
  };

  const handleOpenRequirement = (initialCategory?: string) => {
    setRequirementInitialCategory(initialCategory);
    setIsRequirementModalOpen(true);
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

    showToast(`Added ${isSwatch ? 'swatch sample' : `${quantity}m / pc`} of ${product.name} to your sample bag`);
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
    showToast(`Added bespoke tailored silhouette kit (${meters}m fabric + ${liningMeters}m lining) to bag!`);
    setIsCartOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] text-[#1F1916] flex flex-col font-sans selection:bg-[#9B1D2C] selection:text-white">
      
      {/* 1. Strictly Clean Single-Row Unified Header (No confusing double stacked menus) */}
      <Header
        activePage={activePage}
        onNavigate={handleNavigate}
        cartCount={cartItems.reduce((acc, item) => acc + (item.purchaseType === 'swatch_sample' ? 1 : Math.ceil(item.quantity)), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenRequirementModal={() => handleOpenRequirement()}
        currency={currency}
        onToggleCurrency={() => setCurrency(prev => prev === 'INR' ? 'USD' : 'INR')}
      />

      {/* 2. Page Router */}
      {activePage === 'products' ? (
        <ProductsPage
          currency={currency}
          onQuickView={setSelectedProduct}
          onOrderSwatch={handleOrderSwatch}
          onAddToCart={(p, qty) => handleAddToCart(p, qty, p.availableColors[0]?.name || p.colorName, false)}
          onNavigateHome={() => handleNavigate('home')}
          onOpenRequirementModal={(cat) => handleOpenRequirement(cat)}
        />
      ) : activePage === 'network' ? (
        <SourcingNetworkPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenRequirementModal={(hub) => handleOpenRequirement(hub)}
        />
      ) : activePage === 'process' ? (
        <OurProcessPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenRequirementModal={() => handleOpenRequirement()}
          onOpenThreadlincModal={() => setIsThreadlincOpen(true)}
        />
      ) : activePage === 'whoweserve' ? (
        <WhoWeServePage
          onNavigateHome={() => handleNavigate('home')}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenRequirementModal={(buyer) => handleOpenRequirement(buyer)}
        />
      ) : activePage === 'threadlinc' ? (
        <ThreadlincPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenThreadlincModal={() => setIsThreadlincOpen(true)}
          currency={currency}
        />
      ) : activePage === 'about' ? (
        <AboutPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenWholesale={() => setIsWholesaleOpen(true)}
        />
      ) : activePage === 'contact' ? (
        <ContactPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenRequirementModal={() => handleOpenRequirement()}
        />
      ) : activePage === 'insights' ? (
        <InsightsPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenRequirementModal={() => handleOpenRequirement()}
        />
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
      ) : activePage === 'wholesale' ? (
        <WholesalePage
          onNavigateHome={() => handleNavigate('home')}
          onOpenThreadlincModal={() => setIsThreadlincOpen(true)}
          onNavigateThreadlinc={() => handleNavigate('threadlinc')}
        />
      ) : activePage === 'stores' ? (
        <StoresPage
          onNavigateHome={() => handleNavigate('home')}
          onOpenConsultation={() => setIsConsultationOpen(true)}
        />
      ) : (
        /* HOME PAGE: Complete 10-Section Architecture from User's Blueprint */
        <main className="flex-1 w-full animate-in fade-in duration-200">
          
          {/* Hero + 5 Core Service Capabilities + Threadlinc Notice */}
          <Hero
            onOpenRequirementModal={() => handleOpenRequirement()}
            onExploreCategories={() => {
              const el = document.getElementById('what-we-source');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            onOpenThreadlincModal={() => setIsThreadlincOpen(true)}
          />

          {/* What We Source (Visual Category Cards) */}
          <div id="what-we-source" className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
            <WhatWeSourceSection
              onSelectCategoryRequirement={(catName) => handleOpenRequirement(catName)}
              onExploreFullCatalog={() => handleNavigate('products')}
            />
          </div>

          {/* Where We Source From (India Map + 7 Sourcing Markets) */}
          <div id="sourcing-hubs" className="bg-stone-100/60 border-y border-stone-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <SourcingHubsSection
                onSelectHub={(hubName) => handleOpenRequirement(hubName)}
              />
            </div>
          </div>

          {/* How We Work (7-Step Pipeline: Requirement -> Sourcing -> Shortlisting -> Approval -> Order -> Dispatch -> Delivery) */}
          <div id="how-we-work" className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
            <HowWeWorkSection
              onStartRequirement={() => handleOpenRequirement()}
            />
          </div>

          {/* Threadlinc "Bill to – Ship to" Trade Financing Banner */}
          <div className="max-w-7xl mx-auto px-4 sm:px-8 pb-16">
            <ThreadlincBanner
              onOpenThreadlincModal={() => setIsThreadlincOpen(true)}
              onNavigateThreadlincPage={() => handleNavigate('threadlinc')}
            />
          </div>

          {/* Who We Serve (Retailers | Wholesalers | Boutiques | Traders | Distributors | Fashion Businesses) */}
          <div id="who-we-serve" className="bg-white border-y border-stone-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <WhoWeServeSection
                onSelectBuyerType={(type) => handleOpenRequirement(type)}
              />
            </div>
          </div>

          {/* Why Shree Durga Agency (Experience, Network, Product Range, B2B Focus, Coordination, Expertise) */}
          <div id="why-us" className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
            <WhyUsSection
              onWorkWithUs={() => handleOpenRequirement()}
            />
          </div>

          {/* Company Story (1999 -> Growth -> Expansion -> Today) */}
          <div id="company-story" className="bg-[#FAF8F5] border-t border-stone-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <CompanyStorySection
                onTalkToTeam={() => handleOpenRequirement()}
              />
            </div>
          </div>

          {/* Business / Trust Proof (Verified Numbers, Testimonials, Experience) */}
          <div id="trust-proof" className="bg-white border-y border-stone-200 py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
              <TrustProofSection />
            </div>
          </div>

          {/* Final CTA ("Looking for a reliable textile sourcing partner? Tell us what you're looking for...") */}
          <div id="final-cta" className="max-w-7xl mx-auto px-4 sm:px-8 py-16">
            <FinalCTASection
              onOpenRequirementModal={() => handleOpenRequirement()}
              onOpenThreadlincModal={() => setIsThreadlincOpen(true)}
            />
          </div>

        </main>
      )}

      {/* 3. Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenCalculator={() => setIsCalculatorOpen(true)}
        onOpenWholesaleModal={() => setIsWholesaleOpen(true)}
        onOpenConsultation={() => setIsConsultationOpen(true)}
      />

      {/* Floating WhatsApp Action Button */}
      <div className="fixed bottom-6 right-6 z-30">
        <a
          href="https://wa.me/919811054321?text=Hello%20Shree%20Durga%20Agency!%20I%20would%20like%20to%20discuss%20a%20textile%20sourcing%20requirement."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 bg-[#143D36] hover:bg-[#0E2E28] text-white rounded-full shadow-xl hover:shadow-2xl transition-all text-xs font-semibold tracking-wide border border-[#D8B26E]/40"
          title="Direct WhatsApp Sourcing Desk"
        >
          <MessageCircle className="w-5 h-5 text-[#D8B26E]" />
          <span className="hidden sm:inline">WhatsApp Sourcing Desk</span>
        </a>
      </div>

      {/* Modals */}
      <RequirementModal
        isOpen={isRequirementModalOpen}
        onClose={() => setIsRequirementModalOpen(false)}
        initialCategory={requirementInitialCategory}
      />

      <ThreadlincModal
        isOpen={isThreadlincOpen}
        onClose={() => setIsThreadlincOpen(false)}
        currency={currency}
      />

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
        onOpenThreadlinc={() => setIsThreadlincOpen(true)}
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
