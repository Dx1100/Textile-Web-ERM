/**
 * ============================================================================
 * MODULAR MEDIA ASSETS & IMAGES REPOSITORY
 * ============================================================================
 * HOW TO UPDATE OR REPLACE IMAGES:
 * 1. Change the URL below to your new image URL or local path (e.g., '/images/my-photo.jpg').
 * 2. Every component across the website pulls from this central repository.
 * 3. All images are optimized with high-performance CDNs and descriptive alt text.
 * ============================================================================
 */

export interface MediaAsset {
  id: string;
  url: string;
  alt: string;
  category?: string;
  aspectRatio?: string;
}

export const mediaAssets = {
  // Brand & Logos
  brand: {
    logoMark: {
      url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=400&q=80",
      alt: "Shree Durga Agency Emblem - Indian Textile Heritage & Consulting",
    },
    metaOgImage: {
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&h=630&q=85",
      alt: "Shree Durga Agency - Direct Textile Sourcing & Trade Consultancy",
    },
  },

  // Hero Section Visuals
  hero: {
    primaryVisual: {
      url: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
      alt: "Master loom weaver handcrafting pure Zari Banarasi brocade textile",
    },
    fabricInspectionBadge: {
      url: "https://images.unsplash.com/photo-1607613009820-a29f7bb81c04?auto=format&fit=crop&w=600&q=80",
      alt: "Textile quality testing and thread count physical verification",
    },
    dispatchWarehouse: {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
      alt: "Inspected wholesale textile bales ready for PAN-India dispatch",
    },
  },

  // Production Partners & Brands (Sliding Partners Section)
  partnerBrands: [
    {
      id: "varanasi-silk-heritage",
      name: "Varanasi Silk Heritage Looms",
      city: "Varanasi, UP",
      specialty: "Pure Katan & Organza Zari Sarees",
      logo: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=240&h=120&q=80",
    },
    {
      id: "surat-jacquard-textiles",
      name: "Surat Jacquard & Dobby Looms",
      city: "Surat, Gujarat",
      specialty: "Digital Print Georgettes & Viscose Fabrics",
      logo: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=240&h=120&q=80",
    },
    {
      id: "panipat-home-textiles",
      name: "Panipat Tex-Weave Industries",
      city: "Panipat, Haryana",
      specialty: "Loomed Bedspreads, Curtains & Jacquard Rugs",
      logo: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=240&h=120&q=80",
    },
    {
      id: "jaipur-block-printers",
      name: "Sanganer Royal Block Printers",
      city: "Jaipur, Rajasthan",
      specialty: "Hand-Block Cambric Cotton & Chanderi Suits",
      logo: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=240&h=120&q=80",
    },
    {
      id: "ludhiana-knitwear-cluster",
      name: "Ludhiana Wool & Knit Co.",
      city: "Ludhiana, Punjab",
      specialty: "Winter Cashmere Wool Stoles & Acrylic Shawls",
      logo: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=240&h=120&q=80",
    },
    {
      id: "bhagalpur-tussar-cluster",
      name: "Bhagalpur Silk Guild",
      city: "Bhagalpur, Bihar",
      specialty: "Raw Tussar & Matka Silk Unstitched Suits",
      logo: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=240&h=120&q=80",
    },
    {
      id: "tirupur-combed-cotton",
      name: "Tirupur Knit Hub",
      city: "Tirupur, Tamil Nadu",
      specialty: "Combed Cotton Hosiery & Daily Wear Essentials",
      logo: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=240&h=120&q=80",
    },
    {
      id: "chanderi-weavers-coop",
      name: "Chanderi Handloom Apex",
      city: "Chanderi, MP",
      specialty: "Silk Cotton Booti Sarees & Dupattas",
      logo: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=240&h=120&q=80",
    },
    {
      id: "delhi-couture-embroidery",
      name: "Katra Neel Embroidery Guild",
      city: "Chandni Chowk, Delhi",
      specialty: "Hand Zardozi & Gota Patti Bridal Lehengas",
      logo: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=240&h=120&q=80",
    },
    {
      id: "ahmedabad-cotton-calico",
      name: "Sabarmati Cotton Calico",
      city: "Ahmedabad, Gujarat",
      specialty: "Modal Satin, Rayon Slub & Pure Linen Shirting",
      logo: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=240&h=120&q=80",
    },
  ],

  // Product Category Card Imagery (Sourcing Range)
  categories: {
    women: {
      sarees: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=700&q=80",
      suits: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=700&q=80",
      lehengas: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=700&q=80",
      fabrics: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=700&q=80",
      dupattas: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=700&q=80",
      western: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=700&q=80",
      kurtis: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=700&q=80",
      sleepwear: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
    },
    men: {
      shirting: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80",
      suiting: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=700&q=80",
      ethnic: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=700&q=80",
      trousering: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80",
      activewear: "https://images.unsplash.com/photo-1483721074573-500b73c0be8d?auto=format&fit=crop&w=700&q=80",
      denims: "https://images.unsplash.com/photo-1542272604-780c96856592?auto=format&fit=crop&w=700&q=80",
    },
    kids: {
      boysEthnic: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=700&q=80",
      girlsEthnic: "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?auto=format&fit=crop&w=700&q=80",
      dailyWear: "https://images.unsplash.com/photo-1522771930-78848d9293e8?auto=format&fit=crop&w=700&q=80",
      infantWear: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?auto=format&fit=crop&w=700&q=80",
    },
    home: {
      bedlinen: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
      curtains: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=700&q=80",
      cushions: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=700&q=80",
      towels: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=700&q=80",
      rugs: "https://images.unsplash.com/photo-1600121848594-d8644e57abab?auto=format&fit=crop&w=700&q=80",
    },
  },

  // Sourcing Hubs Visuals
  hubs: {
    delhi: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?auto=format&fit=crop&w=600&q=80",
    surat: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=600&q=80",
    jaipur: "https://images.unsplash.com/photo-1606760227091-3dd870d97f1d?auto=format&fit=crop&w=600&q=80",
    varanasi: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80",
    panipat: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=600&q=80",
    ludhiana: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&w=600&q=80",
    ahmedabad: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=600&q=80",
  },

  // Showrooms & Heritage Centers
  showrooms: {
    chandniChowk: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
    faridabadCenter: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
  },
};
