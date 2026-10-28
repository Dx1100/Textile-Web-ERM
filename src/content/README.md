# Modular Content & Design Configuration Guide

Welcome to your centralized content management system. You can update any text, button destination, or image across the entire website by editing the files in this `/src/content/` folder without touching complex component code.

---

## 1. `sectionsContent.ts` — Update All Text Content
Located at: `/src/content/sectionsContent.ts`

Contains every headline, paragraph, kicker badge, and list across every section and page:
- **Brand Info**: Company name, role, headquarters, estYear, and official addresses.
- **Hero Section**: Eyebrow kicker, main headline, accent text, subtitle, and trust badges.
- **Partners Slider**: Section title, subtitle, and loop parameters.
- **What We Source**: Section title, subtitle, department tabs, and initial display counts.
- **Sourcing Hubs**: Hub descriptions, dispatch timeframes, and regional cluster specialties.
- **Core Services**: 4 service titles and detailed descriptions.
- **Who We Serve**: Buyer segment descriptions.
- **Why Us**: Trust pillars and guarantees.
- **Testimonials**: Merchant reviews, quotes, showroom names, and Tier 2/3 city locations.
- **Footer**: Taglines, consulting desk locations, and legal disclaimers.

---

## 2. `buttonsContent.ts` — Update Button Text & URLs
Located at: `/src/content/buttonsContent.ts`

Controls every interactive button, call-to-action (CTA), and link on the site:
- **Button Labels**: Change the visible label (e.g. `text: "Submit Sourcing Requirement"`).
- **External URLs**:
  - **WhatsApp**: Update the phone number or pre-filled greeting message.
  - **Telephone**: Update `tel:+919811054321` to your new direct calling line.
  - **External Links**: Link any button to external Google Drive catalogs or merchant portals.
- **Internal Actions / Navigation**: Point buttons to internal pages (`page: "products"`, `page: "stores"`) or modals (`action: "open_requirement_modal"`).

---

## 3. `mediaAssets.ts` — Update & Swap Images Easily
Located at: `/src/content/mediaAssets.ts`

Central repository for all images and visual media:
- **Hero Visuals**: Main banner image, fabric inspection badge, dispatch warehouse photography.
- **Partner Brand Logos**: 10 accredited textile producers and weaver guild imagery.
- **Product Category Visuals**: High-resolution photography for Women's, Men's, Kids, and Home Furnishings.
- **Sourcing Hub Photography**: Surat, Varanasi, Jaipur, Panipat, Delhi, Ludhiana, and Ahmedabad.
- **Showroom & Atelier Visuals**: Chandni Chowk showroom and Faridabad manufacturing plant photos.
- **Social Share Card**: OpenGraph preview image for WhatsApp/social sharing.

*To change any image, simply replace the `url` property with your new image URL or local asset path.*
