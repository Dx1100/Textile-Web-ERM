import { PageView } from '../types';

/**
 * ============================================================================
 * TEXTILE WEB ERM - MODULAR SITE CONTENT & SETTINGS
 * ============================================================================
 * Sourcing & Textile Consultant Configuration
 * Fast, modular, minimal, and easy to update.
 */

export interface ProductDetailConfig {
  id: string;
  title: string;
  category: string;
  tagline: string;
  moq: string;
  priceEstimate: string;
  hubs: string;
  popularItems: string[];
  image: string;
  badge: string;
}

export interface HubConfig {
  id: string;
  city: string;
  state: string;
  specialty: string;
  bestFor: string;
  dispatchTime: string;
  badge: string;
}

export interface CoreServiceConfig {
  number: string;
  title: string;
  tagline: string;
  description: string;
}

export interface BuyerTypeConfig {
  title: string;
  cityType: string;
  benefit: string;
  typicalOrder: string;
}

export interface SeoConfig {
  title: string;
  metaDescription: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
}

export interface SiteContentConfig {
  // 1. BRAND & CONTACT (No header phone, clean and direct)
  brand: {
    name: string;
    role: string; // "Sourcing & Textile Consultant"
    tagline: string;
    estYear: number;
    headquarters: string;
    contact: {
      phone: string;
      phoneDisplay: string;
      whatsappNumber: string;
      email: string;
      offices: {
        city: string;
        area: string;
        purpose: string;
      }[];
    };
    threadlinc: {
      firmName: string;
      concept: string; // "Bill to – Ship to"
      tagline: string;
      tenures: string;
      explanation: string;
    };
  };

  // 2. NAVIGATION
  navigation: {
    links: { id: PageView; label: string; badge?: string }[];
    ctaLabel: string;
  };

  // 3. HOMEPAGE HERO (Minimal, spacious, high-impact)
  hero: {
    badge: string;
    title: string;
    highlight: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    metrics: { label: string; value: string }[];
  };

  // 4. CORE SERVICES (Clear upfront what we do as consultants)
  services: {
    badge: string;
    heading: string;
    subheading: string;
    items: CoreServiceConfig[];
  };

  // 5. DETAILED PRODUCTS (Tailored for Tier 2 & 3 city retailers & wholesalers)
  productsShowcase: {
    badge: string;
    heading: string;
    subheading: string;
    items: ProductDetailConfig[];
  };

  // 6. SOURCING HUBS
  hubs: {
    badge: string;
    heading: string;
    subheading: string;
    cities: HubConfig[];
  };

  // 7. THREADLINC FINANCING BANNER
  financing: {
    badge: string;
    heading: string;
    subheading: string;
    steps: { num: string; title: string; text: string }[];
    ctaModal: string;
    ctaPage: string;
  };

  // 8. WHO WE SERVE
  whoWeServe: {
    badge: string;
    heading: string;
    subheading: string;
    buyers: BuyerTypeConfig[];
  };

  // 9. WHY CHOOSE US AS YOUR CONSULTANT
  whyUs: {
    badge: string;
    heading: string;
    subheading: string;
    points: { title: string; text: string }[];
  };

  // 10. FINAL INQUIRY CTA
  finalCta: {
    heading: string;
    subheading: string;
    buttonText: string;
    whatsappText: string;
  };

  // 11. HOMEPAGE SECTION CONTROLS (Easily toggle or reorder)
  homeSections: {
    order: Array<
      | 'hero'
      | 'partners'
      | 'services'
      | 'productsShowcase'
      | 'hubs'
      | 'financing'
      | 'testimonials'
      | 'whoWeServe'
      | 'whyUs'
      | 'finalCta'
    >;
    visibility: Record<string, boolean>;
  };

  // 12. DYNAMIC SEO
  seo: Record<PageView, SeoConfig>;
}

export const siteContent: SiteContentConfig = {
  // ==========================================================================
  // 1. BRAND & CONTACT
  // ==========================================================================
  brand: {
    name: "Shree Durga Agency",
    role: "Sourcing & Textile Consultant",
    tagline: "Your Personal Sourcing & Textile Consulting Partner Across India",
    estYear: 1999,
    headquarters: "Chandni Chowk, Delhi",
    contact: {
      phone: "+919811054321",
      phoneDisplay: "+91 98110 54321",
      whatsappNumber: "919811054321",
      email: "sourcing@shreedurgaagency.com",
      offices: [
        { city: "Delhi", area: "Katra Neel, Chandni Chowk", purpose: "Central Consulting Atelier & Saree/Suit Desk" },
        { city: "Surat", area: "Ring Road Textile Hub", purpose: "Synthetic Fabric, Jacquard & Print Sourcing Cell" },
        { city: "Panipat", area: "Industrial Area", purpose: "Furnishing & Bedding Sourcing Cell" },
      ],
    },
    threadlinc: {
      firmName: "Threadlinc",
      concept: "Trade Financing & Credit",
      tagline: "Flexible Trade Financing for Retailers & Wholesalers",
      tenures: "30 to 90 Days Credit",
      explanation: "Threadlinc provides structured trade credit for textile procurement. Stock arrives at your shop with verified invoices while Threadlinc facilitates deferred payment settlement over 30 to 90 days.",
    },
  },

  // ==========================================================================
  // 2. HEADER NAVIGATION (Exact 7 items, clean & minimal)
  // ==========================================================================
  navigation: {
    links: [
      { id: 'home', label: 'Home' },
      { id: 'products', label: 'What We Source' },
      { id: 'network', label: 'Sourcing Hub' },
      { id: 'whoweserve', label: 'Who We Serve' },
      { id: 'threadlinc', label: 'Threadlinc Financing' },
      { id: 'about', label: 'About' },
      { id: 'contact', label: 'Contact' },
    ],
    ctaLabel: "Submit Requirement",
  },

  // ==========================================================================
  // 3. HERO (Minimal, clean, spacious)
  // ==========================================================================
  hero: {
    badge: "Sourcing & Textile Consultant",
    title: "Direct Sourcing for Your Saree, Suit & Fabric Business.",
    highlight: "Curated from India's Premier Textile Centers.",
    subtitle: "We help retail shop owners, boutiques, and wholesalers in Tier 2 & Tier 3 cities procure inspected ethnic wear and fabrics directly with full quality assurance and flexible trade credit support.",
    ctaPrimary: "Tell Us What You Need",
    ctaSecondary: "Explore Sourced Products",
    metrics: [
      { value: "25+ Yrs", label: "Consulting Trust" },
      { value: "7 Major Hubs", label: "Delhi · Surat · Jaipur · Varanasi" },
      { value: "30–90 Days", label: "Trade Credit Available" },
      { value: "100%", label: "Defect-Free Check" },
    ],
  },

  // ==========================================================================
  // 4. CORE SERVICES (Clear & upfront for Tier 2/3 shopkeepers)
  // ==========================================================================
  services: {
    badge: "Our Consulting Services",
    heading: "What We Do For Your Shop",
    subheading: "Instead of traveling to five different cities and dealing with unknown brokers, let our expert sourcing team manage everything for you.",
    items: [
      {
        number: "01",
        title: "Direct Hub Sourcing",
        tagline: "Direct Manufacturer Rates",
        description: "We connect your store directly with verified producers in Surat, Varanasi, Jaipur, and Delhi. You get genuine wholesale prices with zero unnecessary markups.",
      },
      {
        number: "02",
        title: "Quality Inspection Before Dispatch",
        tagline: "Zero Defect Guarantee",
        description: "Our on-ground staff personally checks fabric color, cutting, stitching, and finishing before packing. You never receive damaged or wrong stock in your shop.",
      },
      {
        number: "03",
        title: "Physical Sample Swatches",
        tagline: "Touch & Feel at Your Shop",
        description: "Not sure about fabric quality? We courier actual fabric swatches and counter-samples directly to your address so you can inspect before committing.",
      },
      {
        number: "04",
        title: "Flexible Trade Credit",
        tagline: "30 to 90 Days Deferred Settlement",
        description: "Stock up for wedding and festival seasons without cash bottlenecks. Enjoy structured commercial credit while orders are delivered straight to your shop.",
      },
    ],
  },

  // ==========================================================================
  // 5. DETAILED PRODUCTS SHOWCASE (Transparent MOQ, Hubs, Price guidance)
  // ==========================================================================
  productsShowcase: {
    badge: "Clear Product Details Upfront",
    heading: "Products We Source For Retailers & Wholesalers",
    subheading: "Complete clarity on fabric types, minimum orders, wholesale price estimates, and source markets for shop owners in Tier 2 & Tier 3 cities.",
    items: [
      {
        id: "sarees",
        title: "Heritage & Festive Sarees",
        category: "Sarees",
        tagline: "Banarasi, Kanjivaram, Organza, Dola Silk & Daily Wear",
        moq: "Min 15 to 25 Pieces",
        priceEstimate: "₹350 – ₹18,000 / piece",
        hubs: "Varanasi · Surat · Delhi",
        popularItems: ["Pure Katan Silk Banarasi", "Surat Fancy Jacquards", "Organza Floral Embroidery", "Soft Cotton Daily Sarees"],
        image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
        badge: "Fastest Selling",
      },
      {
        id: "suits",
        title: "Unstitched Suit Sets & Dress Materials",
        category: "Suits & Kurtis",
        tagline: "Chanderi, Georgette, Pashmina, Cotton & Heavy Bridal Dupattas",
        moq: "Min 20 Sets (Assorted Colors)",
        priceEstimate: "₹450 – ₹4,500 / set",
        hubs: "Delhi · Jaipur · Surat",
        popularItems: ["Chanderi Zari Work Sets", "Jaipuri Cotton Cambric 60x60", "Heavy Embroidered Anarkali Cuts", "Winter Pashmina Suits"],
        image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80",
        badge: "High Margin",
      },
      {
        id: "lehengas",
        title: "Bridal & Semi-Stitched Lehengas",
        category: "Couture & Festive",
        tagline: "Handcrafted Zardozi, Mirror Work, Velvet & Net Ensembles",
        moq: "Min 5 to 10 Pieces",
        priceEstimate: "₹2,500 – ₹35,000 / piece",
        hubs: "Delhi (Chandni Chowk) · Surat",
        popularItems: ["Bridal Red Heritage Velvet Lehengas", "Pastel Floral Bridesmaid Sets", "Sequined Georgette Party Lehengas", "Crop Top Skirt Co-ords"],
        image: "https://images.unsplash.com/photo-1607344645866-009c320c5ab8?auto=format&fit=crop&w=700&q=80",
        badge: "Wedding Season",
      },
      {
        id: "fabrics",
        title: "Running Yardage & Greige Fabrics",
        category: "Fabrics",
        tagline: "Pure Silks, Brocades, Tissue, Raw Silk, Crepes & Linens",
        moq: "Min 25 to 50 Meters / Shade",
        priceEstimate: "₹95 – ₹1,800 / meter",
        hubs: "Surat · Varanasi · Meerut",
        popularItems: ["Pure Kadhwa Brocade Yardage", "Haute Bridal Raw Silk", "Viscose Chinon & Dola Silk", "Pure Flax Linen Greige"],
        image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=700&q=80",
        badge: "Silk Mark Available",
      },
      {
        id: "mens",
        title: "Men's Royal Ethnic Wear",
        category: "Menswear",
        tagline: "Sherwani Fabrics, Kurta Pyjama Sets, Modi Jackets & Safas",
        moq: "Min 10 Sets / Bundles",
        priceEstimate: "₹650 – ₹12,000 / piece",
        hubs: "Varanasi · Delhi · Meerut",
        popularItems: ["Imperial Tanchoi Sherwanis", "Chikankari Kurta Sets", "Brocade Nehru Jackets", "Zari Turbans & Stoles"],
        image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=700&q=80",
        badge: "Groom & Festive",
      },
      {
        id: "home",
        title: "Home Furnishing & Drapes",
        category: "Home Textiles",
        tagline: "Jacquard Upholstery, Curtains, Bed Linens & Export Quilts",
        moq: "Min 50 Pcs or 100 Meters",
        priceEstimate: "₹120 – ₹1,200 / unit",
        hubs: "Panipat · Surat",
        popularItems: ["Heavy Jacquard Sofa Fabrics", "Blackout Room Curtains", "All-Season Export Bedspreads", "Embroidered Cushion Covers"],
        image: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80",
        badge: "Panipat Direct",
      },
    ],
  },

  // ==========================================================================
  // 6. SOURCING HUBS (Where we coordinate for you)
  // ==========================================================================
  hubs: {
    badge: "PAN-India Coordination",
    heading: "The Sourcing Markets We Cover",
    subheading: "Instead of managing multiple travel trips, access all major textile markets through one single contact desk.",
    cities: [
      {
        id: "delhi",
        city: "Delhi NCR",
        state: "Delhi",
        specialty: "Bridal Lehengas, Heavy Suits & Designer Ethnic",
        bestFor: "Chandni Chowk couture curation & rapid dispatch",
        dispatchTime: "24–48 Hours",
        badge: "Head Office",
      },
      {
        id: "surat",
        city: "Surat",
        state: "Gujarat",
        specialty: "Fancy Sarees, Dola Silk, Viscose Crepes & Digital Prints",
        bestFor: "High-volume synthetic & festive fabrics at true wholesale prices",
        dispatchTime: "2–4 Days",
        badge: "Highest Volume",
      },
      {
        id: "varanasi",
        city: "Varanasi",
        state: "Uttar Pradesh",
        specialty: "Pure Katan Silk, Handloom Brocades & Bridal Sarees",
        bestFor: "Authentic Kadhwa and Tanchoi weaves from master artisan clusters",
        dispatchTime: "3–6 Days",
        badge: "Heritage GI",
      },
      {
        id: "jaipur",
        city: "Jaipur",
        state: "Rajasthan",
        specialty: "Bagru & Sanganeri Block Prints, Pure Cotton 60x60, Bandhej",
        bestFor: "Artisanal natural dye cottons and boutique suit materials",
        dispatchTime: "3–5 Days",
        badge: "Artisanal",
      },
      {
        id: "panipat",
        city: "Panipat",
        state: "Haryana",
        specialty: "Curtains, Upholstery Jacquards, Bedding & Blankets",
        bestFor: "Direct wholesale rates for home furnishings and drapes",
        dispatchTime: "2–3 Days",
        badge: "Furnishings",
      },
      {
        id: "kolkata",
        city: "Kolkata",
        state: "West Bengal",
        specialty: "Muslin Cottons, Jamdani Sarees, Kantha Hand Embroidery",
        bestFor: "Fine regional handlooms and lightweight cottons",
        dispatchTime: "4–6 Days",
        badge: "Handloom",
      },
    ],
  },

  // ==========================================================================
  // 7. THREADLINC FINANCING
  // ==========================================================================
  financing: {
    badge: "Trade Financing Partner",
    heading: "Procure Freely with Threadlinc Trade Credit",
    subheading: "Structured 30 to 90 days trade credit support for retail shop owners and wholesalers in Tier 2 and Tier 3 cities to purchase seasonal inventory with ease.",
    steps: [
      {
        num: "1",
        title: "Select Your Order",
        text: "Specify fabrics, sarees, or ensembles required across Delhi, Surat, Jaipur, or Varanasi.",
      },
      {
        num: "2",
        title: "Threadlinc Credit Approval",
        text: "Threadlinc approves your trade credit limit and coordinates commercial clearance.",
      },
      {
        num: "3",
        title: "Direct Delivery to Your Shop",
        text: "The inspected consignment is dispatched directly to your shop with complete GST documentation.",
      },
      {
        num: "4",
        title: "Deferred Settlement in 30–90 Days",
        text: "Rotate your seasonal stock and settle comfortably within agreed commercial timelines.",
      },
    ],
    ctaModal: "Check Financing Eligibility",
    ctaPage: "Learn About Threadlinc",
  },

  // ==========================================================================
  // 8. WHO WE SERVE
  // ==========================================================================
  whoWeServe: {
    badge: "Tailored For Your Business Scale",
    heading: "Who Benefits Most From Our Consulting",
    subheading: "Whether you run an established bridal showroom or a regional fabric distribution outlet, we adapt to your sourcing scale.",
    buyers: [
      {
        title: "Retail Showroom Owners",
        cityType: "Tier 2 & 3 City Store Owners",
        benefit: "Curated collections with verified quality and direct hub pricing. Fresh seasonal variety on demand.",
        typicalOrder: "15 to 50 pcs per category",
      },
      {
        title: "Boutiques & Custom Tailoring Ateliers",
        cityType: "Bridal & Designer Boutiques",
        benefit: "Access rare brocades, pure silks, and sample cuts from 10 meters without locking excessive capital.",
        typicalOrder: "10 to 30 meters per design",
      },
      {
        title: "Regional Wholesalers & Stockists",
        cityType: "Mandi & District Stockists",
        benefit: "High-volume pricing directly from production centers with extended trade credit options.",
        typicalOrder: "500 to 2000 meters / pieces",
      },
      {
        title: "Online Sellers & Fashion Brands",
        cityType: "D2C & Catalog Sellers",
        benefit: "Rapid sampling, verified quality check, and fast repeat batches for trending designs.",
        typicalOrder: "Flexible 50 pcs batches",
      },
    ],
  },

  // ==========================================================================
  // 9. WHY CHOOSE US AS YOUR CONSULTANT
  // ==========================================================================
  whyUs: {
    badge: "Why Shop Owners Trust Us",
    heading: "The Advantage of Having an Honest Sourcing Partner",
    subheading: "We work as your personal purchasing team in India's biggest textile markets.",
    points: [
      {
        title: "Save 15% to 25% on Procurement Cost",
        text: "By bypassing multi-layer middlemen and local brokers, you get genuine hub pricing.",
      },
      {
        title: "No Risk of Damaged Goods",
        text: "Our inspection team physically verifies each consignment before packing and transport.",
      },
      {
        title: "One Contact for All Markets",
        text: "Source Banarasi from Varanasi, Fancy Sarees from Surat, Cottons from Jaipur — through one person.",
      },
      {
        title: "Working Capital & Credit Support",
        text: "Never say no to a big customer order because of cash shortage. Use our 30-90 days trade financing.",
      },
    ],
  },

  // ==========================================================================
  // 10. FINAL INQUIRY CTA
  // ==========================================================================
  finalCta: {
    heading: "Tell Us What Products You Need For Your Shop",
    subheading: "Send us your requirement, target price, or sample photo. Our senior textile consultant will call you or connect on WhatsApp within 2 hours with exact wholesale options.",
    buttonText: "Submit Sourcing Requirement",
    whatsappText: "Chat on WhatsApp for Instant Rates",
  },

  // ==========================================================================
  // 11. HOMEPAGE SECTION CONTROLS (Easily toggle or reorder)
  // Note: 'howWeWork' has been removed per user instruction.
  // ==========================================================================
  homeSections: {
    order: [
      'hero',
      'partners',
      'productsShowcase',
      'hubs',
      'financing',
      'testimonials',
      'finalCta',
    ],
    visibility: {
      hero: true,
      partners: true,
      services: false,
      productsShowcase: true,
      hubs: true,
      financing: true,
      whoWeServe: false,
      whyUs: false,
      testimonials: true,
      finalCta: true,
    },
  },

  // ==========================================================================
  // 12. DYNAMIC SEO PER ROUTE
  // ==========================================================================
  seo: {
    home: {
      title: "Shree Durga Agency | Sourcing & Textile Consultant",
      metaDescription: "Trusted sourcing and textile consultant for retail and wholesale businesses in Tier 2 & 3 cities. Sarees, suits, lehengas, and fabrics sourced directly from Delhi, Surat, Jaipur, and Varanasi with Threadlinc trade credit support.",
      canonicalUrl: "https://shreedurgaagency.com/",
      ogTitle: "Shree Durga Agency - Sourcing & Textile Consultant",
      ogDescription: "Direct wholesale sourcing for sarees, suits, fabrics, and bridal wear with complete quality inspection and Threadlinc trade credit.",
      ogImage: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
    },
    products: {
      title: "What We Source | Shree Durga Agency - Textile Consultant",
      metaDescription: "Browse sourced product categories: sarees, suits, lehengas, running fabrics, and furnishings with clear wholesale estimates and MOQs.",
      canonicalUrl: "https://shreedurgaagency.com/products",
    },
    network: {
      title: "Sourcing Hub | Delhi, Surat, Jaipur, Varanasi | Shree Durga Agency",
      metaDescription: "Direct textile coordination across Delhi, Surat, Jaipur, Panipat, Varanasi, and Kolkata.",
      canonicalUrl: "https://shreedurgaagency.com/network",
    },
    process: {
      title: "Our Consulting Services | Shree Durga Agency",
      metaDescription: "How we assist retailers and wholesalers with sourcing, inspection, and trade credit.",
      canonicalUrl: "https://shreedurgaagency.com/process",
    },
    whoweserve: {
      title: "Who We Serve | Retailers, Boutiques & Wholesalers | Shree Durga Agency",
      metaDescription: "Tailored sourcing solutions for store owners in Tier 2 & 3 cities across India.",
      canonicalUrl: "https://shreedurgaagency.com/who-we-serve",
    },
    threadlinc: {
      title: "Threadlinc Financing | 30 to 90 Days Trade Credit",
      metaDescription: "Structured 30 to 90 days trade credit for retail shopkeepers and wholesalers to procure stock without cash bottlenecks.",
      canonicalUrl: "https://shreedurgaagency.com/threadlinc",
    },
    about: {
      title: "About Us | Sourcing & Textile Consultants Since 1999",
      metaDescription: "Over 25 years of ethical sourcing and textile consulting stewardship from Chandni Chowk, Delhi.",
      canonicalUrl: "https://shreedurgaagency.com/about",
    },
    contact: {
      title: "Contact Us | Sourcing Desks in Delhi, Surat & Panipat",
      metaDescription: "Connect directly with our sourcing coordinators for instant wholesale quotes and swatch samples.",
      canonicalUrl: "https://shreedurgaagency.com/contact",
    },
    insights: {
      title: "Textile Market Insights & Price Trends | Shree Durga Agency",
      metaDescription: "Seasonal fabric trends and wholesale rate guidance for shop owners.",
      canonicalUrl: "https://shreedurgaagency.com/insights",
    },
    wholesale: {
      title: "Wholesale Sourcing & Bulk Lots | Shree Durga Agency",
      metaDescription: "High-volume fabric and garment procurement with tiered wholesale rates.",
      canonicalUrl: "https://shreedurgaagency.com/wholesale",
    },
    fabrics: {
      title: "Running Fabrics & Greige Sourcing | Shree Durga Agency",
      metaDescription: "Pure silks, brocades, raw silks, crepes, and linens directly from weavers.",
      canonicalUrl: "https://shreedurgaagency.com/fabrics",
    },
    brocades: {
      title: "Banarasi & Zari Brocades | Shree Durga Agency",
      metaDescription: "Hand-woven Kadhwa and Tanchoi brocades direct from Varanasi artisan clusters.",
      canonicalUrl: "https://shreedurgaagency.com/brocades",
    },
    sarees: {
      title: "Wholesale Sarees Sourcing | Shree Durga Agency",
      metaDescription: "Banarasi, Kanjivaram, and Surat fancy sarees for retail showrooms.",
      canonicalUrl: "https://shreedurgaagency.com/sarees",
    },
    lehengas: {
      title: "Bridal Lehengas & Sets | Shree Durga Agency",
      metaDescription: "Semi-stitched bridal and partywear lehenga sets from Chandni Chowk and Surat.",
      canonicalUrl: "https://shreedurgaagency.com/lehengas",
    },
    suits: {
      title: "Unstitched Suit Sets Wholesale | Shree Durga Agency",
      metaDescription: "Chanderi, cotton, and festive suit sets with coordinating dupattas.",
      canonicalUrl: "https://shreedurgaagency.com/suits",
    },
    stores: {
      title: "Consulting Showrooms & Touchpoints | Shree Durga Agency",
      metaDescription: "Visit our Chandni Chowk consultation showroom and regional desks.",
      canonicalUrl: "https://shreedurgaagency.com/stores",
    },
  },
};
