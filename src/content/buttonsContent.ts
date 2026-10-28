/**
 * ============================================================================
 * MODULAR BUTTONS, CTAs & LINKS CONFIGURATION
 * ============================================================================
 * HOW TO UPDATE BUTTON TEXT & URLs:
 * 1. Locate the button configuration below.
 * 2. Update `text` for the visible label.
 * 3. Update `url` to change external destinations (e.g., WhatsApp link, tel:, https://).
 * 4. Update `action` or `page` to adjust internal modal or navigation behavior.
 * ============================================================================
 */

export interface ButtonConfig {
  id: string;
  text: string;
  url?: string;
  action?: string;
  page?: string;
  icon?: string;
  variant?: 'primary' | 'secondary' | 'outline' | 'whatsapp' | 'ghost';
  ariaLabel?: string;
}

export const buttonsContent = {
  // Global Header Buttons
  header: {
    brandHome: {
      text: "Shree Durga Agency",
      page: "home",
      ariaLabel: "Go to homepage",
    },
    requirementCta: {
      text: "Submit Requirement",
      action: "open_requirement_modal",
      variant: "primary" as const,
      ariaLabel: "Open textile requirement consultation modal",
    },
    navLinks: [
      { id: "home", text: "Home", page: "home" },
      { id: "products", text: "What We Source", page: "products" },
      { id: "network", text: "Sourcing Hubs", page: "network" },
      { id: "whoweserve", text: "Who We Serve", page: "whoweserve" },
      { id: "threadlinc", text: "Threadlinc Financing", page: "threadlinc" },
      { id: "about", text: "About", page: "about" },
      { id: "contact", text: "Contact", page: "contact" },
    ],
  },

  // Hero Section Buttons
  hero: {
    primaryRequirement: {
      id: "hero-primary-cta",
      text: "Submit Sourcing Requirement",
      action: "open_requirement_modal",
      variant: "primary" as const,
      ariaLabel: "Submit your wholesale sourcing requirement",
    },
    secondaryCatalog: {
      id: "hero-secondary-cta",
      text: "Explore Sourcing Range",
      action: "explore_categories",
      page: "products",
      variant: "outline" as const,
      ariaLabel: "View complete product catalog",
    },
    whatsappDesk: {
      id: "hero-whatsapp",
      text: "Quick WhatsApp Desk: +91 98110 54321",
      url: "https://wa.me/919811054321?text=Hello%20Shree%20Durga%20Agency,%20I%20would%20like%20to%20inquire%20about%20textile%20sourcing.",
      variant: "whatsapp" as const,
      ariaLabel: "Chat with sourcing desk on WhatsApp",
    },
    phoneDesk: {
      id: "hero-phone",
      text: "Call Desk: +91 98110 54321",
      url: "tel:+919811054321",
      variant: "ghost" as const,
      ariaLabel: "Direct telephone call to sourcing consultant",
    },
  },

  // Partners & Mills Section Buttons
  partners: {
    exploreAllPartners: {
      text: "Consult On Mill Partnerships",
      action: "open_requirement_modal",
      ariaLabel: "Connect directly with verified partner mills",
    },
  },

  // Product Category & Sourcing Range Buttons
  productsSection: {
    viewFullCatalog: {
      text: "Browse Full Sourcing Catalog",
      page: "products",
      ariaLabel: "Open complete product catalog page",
    },
    expandMoreItems: {
      textMoreTemplate: "+{count} more",
      textLess: "Show less",
    },
    itemEnquiryTemplate: {
      textPrefix: "Submit sourcing enquiry for",
      action: "open_item_enquiry",
    },
  },

  // Sourcing Hubs Section Buttons
  sourcingHubs: {
    inquireHub: {
      text: "Inquire This Hub",
      action: "open_requirement_with_hub",
      ariaLabel: "Submit sourcing requirement for selected production hub",
    },
    viewNetwork: {
      text: "View Full Sourcing Network",
      page: "network",
      ariaLabel: "Explore PAN-India production network",
    },
  },

  // Testimonials Section Buttons
  testimonials: {
    joinNetwork: {
      text: "Start Sourcing With Us",
      action: "open_requirement_modal",
      variant: "primary" as const,
      ariaLabel: "Become a registered merchant partner",
    },
  },

  // Core Services Section Buttons
  coreServices: {
    learnFinancing: {
      text: "Explore Threadlinc 30–90 Days Credit",
      page: "threadlinc",
      ariaLabel: "Learn about trade credit financing",
    },
  },

  // Final CTA Section Buttons
  finalCta: {
    primaryRequirement: {
      text: "Submit Sourcing Requirement",
      action: "open_requirement_modal",
      variant: "primary" as const,
      ariaLabel: "Submit custom textile specification",
    },
    directCall: {
      text: "Direct Desk: +91 98110 54321",
      url: "tel:+919811054321",
      variant: "outline" as const,
      ariaLabel: "Direct call to head office consulting desk",
    },
    whatsappDesk: {
      text: "Instant WhatsApp Chat",
      url: "https://wa.me/919811054321?text=Hi%20Shree%20Durga%20Agency,%20I%20have%20an%20urgent%20sourcing%20requirement.",
      variant: "whatsapp" as const,
      ariaLabel: "Chat with representative on WhatsApp",
    },
  },

  // Footer Links & Buttons
  footer: {
    mainLinks: [
      { text: "What We Source", page: "products" },
      { text: "Sourcing Hubs", page: "network" },
      { text: "Trade Financing (Threadlinc)", page: "threadlinc" },
      { text: "Who We Serve", page: "whoweserve" },
      { text: "Heritage & About", page: "about" },
      { text: "Showrooms & Looms", page: "stores" },
      { text: "Consulting Desk", page: "contact" },
    ],
    consultationCta: {
      text: "Book Showroom / Video Consultation",
      action: "open_consultation",
      ariaLabel: "Schedule live consultation session",
    },
  },

  // Modal Action Buttons
  modals: {
    requirementSubmit: {
      text: "Submit Sourcing Requirement",
      submittingText: "Dispatching to Sourcing Desk...",
      cancelText: "Cancel",
    },
    consultationSubmit: {
      text: "Confirm Sourcing Slot",
      submittingText: "Scheduling Appointment...",
      cancelText: "Close",
    },
  },
};
