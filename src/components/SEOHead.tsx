import React, { useEffect } from 'react';
import { PageView } from '../types';
import { siteContent } from '../config/siteContent';

interface SEOHeadProps {
  activePage: PageView;
}

/**
 * Dynamically updates document head tags (title, meta description,
 * canonical link, OpenGraph tags, Twitter cards, and structured JSON-LD data)
 * based on the active page and the centralized siteContent configuration.
 */
export const SEOHead: React.FC<SEOHeadProps> = ({ activePage }) => {
  useEffect(() => {
    const pageSeo = siteContent.seo[activePage] || siteContent.seo.home;
    const brand = siteContent.brand;

    // 1. Update Title
    document.title = pageSeo.title;

    // Helper to safely set or create a <meta> tag
    const setMetaTag = (attributeName: string, attributeValue: string, content: string) => {
      let element = document.querySelector(`meta[${attributeName}="${attributeValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attributeName, attributeValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Standard Meta Tags
    setMetaTag('name', 'description', pageSeo.metaDescription);
    if (pageSeo.keywords && pageSeo.keywords.length > 0) {
      setMetaTag('name', 'keywords', pageSeo.keywords.join(', '));
    }
    if (pageSeo.robots) {
      setMetaTag('name', 'robots', pageSeo.robots);
    }

    // 3. OpenGraph Tags
    const ogTitle = pageSeo.ogTitle || pageSeo.title;
    const ogDesc = pageSeo.ogDescription || pageSeo.metaDescription;
    const ogImg = pageSeo.ogImage || siteContent.seo.home.ogImage || '';

    setMetaTag('property', 'og:title', ogTitle);
    setMetaTag('property', 'og:description', ogDesc);
    setMetaTag('property', 'og:type', 'website');
    if (ogImg) {
      setMetaTag('property', 'og:image', ogImg);
    }
    if (pageSeo.canonicalUrl) {
      setMetaTag('property', 'og:url', pageSeo.canonicalUrl);
    }

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', ogTitle);
    setMetaTag('name', 'twitter:description', ogDesc);
    if (ogImg) {
      setMetaTag('name', 'twitter:image', ogImg);
    }

    // 5. Canonical Link Tag
    if (pageSeo.canonicalUrl) {
      let canonicalLink = document.querySelector('link[rel="canonical"]');
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', pageSeo.canonicalUrl);
    }

    // 6. Structured JSON-LD Data for SEO
    let jsonLdScript = document.querySelector('#seo-structured-data');
    if (!jsonLdScript) {
      jsonLdScript = document.createElement('script');
      jsonLdScript.id = 'seo-structured-data';
      jsonLdScript.setAttribute('type', 'application/ld+json');
      document.head.appendChild(jsonLdScript);
    }

    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": brand.name,
      "description": brand.tagline,
      "url": pageSeo.canonicalUrl || "https://shreedurgaagency.com/",
      "telephone": brand.contact.phoneDisplay,
      "email": brand.contact.email,
      "foundingDate": `${brand.estYear}`,
      "address": brand.contact.offices.map((addr) => ({
        "@type": "PostalAddress",
        "addressLocality": addr.city,
        "streetAddress": addr.area,
        "addressCountry": "IN",
      })),
    };

    jsonLdScript.textContent = JSON.stringify(structuredData);
  }, [activePage]);

  return null;
};
