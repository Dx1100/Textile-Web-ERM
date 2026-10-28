/**
 * ============================================================================
 * MODULAR SECTIONS & SUBSECTIONS TEXT CONTENT
 * ============================================================================
 * HOW TO UPDATE SECTION TEXT CONTENT:
 * 1. Find the section you want to modify (e.g., hero, whatWeSource, sourcingHubs).
 * 2. Update the `kicker`, `title`, `subtitle`, or `description` strings.
 * 3. Every section heading badge displays in an emerald rounded-edge square.
 * 4. All components read directly from this central repository.
 * ============================================================================
 */

export const sectionsContent = {
  // Brand Identity & Heritage
  brand: {
    name: "Shree Durga Agency",
    role: "Sourcing & Textile Consultant",
    tagline: "Your Personal Sourcing & Textile Consulting Partner Across India",
    estYear: 1999,
    headquarters: "Chandni Chowk, Delhi",
    kickerBadge: "Est. 1999 · Chandni Chowk, Delhi · Sourcing & Textile Consultant",
    phoneDisplay: "+91 98110 54321",
    phoneRaw: "+919811054321",
    whatsappNumber: "919811054321",
    email: "sourcing@shreedurgaagency.com",
    addressShort: "835/8, Katra Neel, Chandni Chowk, Old Delhi - 110006",
  },

  // 1. Hero Section
  hero: {
    kicker: "Est. 1999 · Chandni Chowk, Delhi · Sourcing & Textile Consultant",
    titlePrimary: "Direct Textile Sourcing",
    titleAccent: "& Trade Consultancy",
    subtitle: "Procure wholesale sarees, suits, lehengas, and fabrics directly from verified production hubs in Varanasi, Surat, and Panipat. Pre-dispatch physical inspection with structured 30 to 90 days trade credit.",
    trustBadges: [
      { text: "Inspected in Chandni Chowk · Dispatched PAN-India" },
      { text: "Direct Mill Billing · No Hidden Middleman Margins" },
      { text: "30 to 90 Days Structured Trade Credit Available" },
    ],
    experienceSummary: "Advising wholesale buyers & retailers from Chandni Chowk since 1999.",
  },

  // 2. Sliding Partner Brands & Looms Section
  partners: {
    kicker: "Trusted Production Partners & Looms",
    title: "Direct Mill Partnerships Across India",
    subtitle: "We partner directly with India's most respected textile mills, weaving clusters, and dye houses to bring transparent wholesale rates straight to your shop floor.",
    carouselSpeedMs: 3200,
  },

  // 3. What We Source Section (Product Range)
  whatWeSource: {
    kicker: "What We Source · Sourcing Range",
    title: "Complete Apparel & Home Textile Categories",
    subtitle: "Curated wholesale inventory sourced directly from primary production hubs. Inspect fabrics, compare price brackets, and request custom lot sizes.",
    departmentTabs: [
      { id: "women", label: "Women's Collection", countBadge: "8 Categories" },
      { id: "men", label: "Men's Apparel & Fabrics", countBadge: "6 Categories" },
      { id: "kids", label: "Kids Wear Range", countBadge: "4 Categories" },
      { id: "home", label: "Home Furnishings", countBadge: "5 Categories" },
    ],
    itemsPerCardInitial: 5,
  },

  // 4. Sourcing Hubs Section
  sourcingHubs: {
    kicker: "Direct Mill Access · 5 Production Clusters",
    title: "Sourcing Directly From India's Textile Capitals",
    subtitle: "Skip middlemen. Every category is sourced directly from its primary geographical origin, inspected on-loom, and dispatched straight to your warehouse.",
    hubsList: [
      {
        city: "Surat",
        state: "Gujarat",
        specialty: "Synthetic, Jacquard & Digital Print Sarees",
        dispatch: "24-48 Hours",
        highlights: "5,000+ SKU capacity, high-speed water jet looms, digital pigment printing.",
      },
      {
        city: "Varanasi",
        state: "Uttar Pradesh",
        specialty: "Pure Katan Silk & Banarasi Brocade Bridal",
        dispatch: "48-72 Hours",
        highlights: "Authentic Silk Mark certified master pit looms, pure Zari warp weaving.",
      },
      {
        city: "Jaipur",
        state: "Rajasthan",
        specialty: "Sanganeri Hand-Block & Pure Cotton Suits",
        dispatch: "24-48 Hours",
        highlights: "Natural vegetable dyes, artisan block carvers, high thread-count cambrics.",
      },
      {
        city: "Panipat",
        state: "Haryana",
        specialty: "Loomed Bedspreads, Drapes & Home Linen",
        dispatch: "3-5 Days",
        highlights: "Heavy GSM jacquard weaving, institutional hospitality bedsheets, yarn dyeing.",
      },
      {
        city: "Delhi NCR",
        state: "Chandni Chowk",
        specialty: "Couture Lehengas & Express Dispatch Hub",
        dispatch: "Same Day / 24 Hours",
        highlights: "Central inspection gallery, bridal lounge sampling, consolidated lot logistics.",
      },
    ],
  },

  // 5. Core Sourcing Services
  coreServices: {
    kicker: "Four Pillars of Reliability",
    title: "End-to-End Trade Consulting",
    subtitle: "Built to eliminate wholesale purchasing risks for retail shop owners and regional distributors.",
    services: [
      {
        number: "01",
        title: "On-Loom Quality Inspection",
        description: "Physical inspection of GSM, colorfastness, warp-weft alignment, and border embroidery before any bale is sealed.",
      },
      {
        number: "02",
        title: "Threadlinc Trade Credit (30–90 Days)",
        description: "Stock your showroom for festival seasons without upfront liquidity strain. Deferred settlement on verified business invoices.",
      },
      {
        number: "03",
        title: "Direct Mill Billing",
        description: "Zero undisclosed markups. Direct manufacturer invoices with transparent 2% to 3% advisory brokerage fee.",
      },
      {
        number: "04",
        title: "Consolidated Multimodal Dispatch",
        description: "Combine sarees from Varanasi, suits from Jaipur, and linen from Panipat into one single freight delivery.",
      },
    ],
  },

  // 6. Testimonials Section (Tier 2 & 3 Merchants)
  testimonials: {
    kicker: "Merchant Experiences · Tier 2 & 3 Cities",
    title: "Trusted by 2,500+ Showroom Owners Across India",
    subtitle: "Hear directly from retail proprietors and boutique owners who streamlined their seasonal textile procurement through our Chandni Chowk consulting desk.",
  },

  // 7. Company Heritage & Roots
  story: {
    kicker: "25+ Years of Textile Stewardship",
    title: "From Chandni Chowk Roots to PAN-India Reach",
    subtitle: "Founded in 1999 in Katra Neel, our mission has remained unswerving: empowering independent apparel retailers with the same buying power as national department chains.",
  },

  // 8. Final Call to Action Section
  finalCta: {
    kicker: "Fast-Track Sourcing Desk",
    title: "Ready to Upgrade Your Sourcing Pipeline?",
    subtitle: "Tell us your textile requirement. Our consulting desk in Chandni Chowk connects you directly with verified regional producers, pre-dispatch quality checks, and structured trade credit.",
    guarantees: [
      "No Minimum Order Barrier for Initial Sampling",
      "Direct Factory Gate Wholesale Pricing",
      "Dedicated Sourcing Desk Relationship Manager",
    ],
  },

  // 9. Global Footer
  footer: {
    kicker: "PAN-India Textile Consulting",
    tagline: "Empowering apparel retailers and distributors across Tier 2 and Tier 3 India with transparent wholesale procurement.",
    consultingDesksTitle: "Consulting Desks & Hubs",
    legalCopyright: "© 1999–2026 Shree Durga Agency. All rights reserved. Sourcing & Textile Consultants.",
    disclaimer: "Shree Durga Agency operates as an independent textile trade consultant and sourcing liaison. Trade credit financing is facilitated via Threadlinc Capital under formal merchant credit agreement.",
  },

  // 10. Threadlinc Trade Financing Section
  threadlinc: {
    kicker: "Threadlinc Trade Credit Facility",
    title: "Procure Today. Pay After Sales (30 to 90 Days)",
    subtitle: "Cash flow shouldn't bottleneck your festival inventory. Procure premium stock from top mills while Threadlinc finances the invoice with transparent credit terms.",
  },
};
