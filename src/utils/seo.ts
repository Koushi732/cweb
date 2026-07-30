import { FAQItem } from "@/data/faq";

/**
 * Generates a BreadcrumbList JSON-LD schema
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generates a FAQPage JSON-LD schema
 */
export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generates an Organization and ProfessionalService JSON-LD schema linked via @id
 */
export function generateBusinessSchema() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://simpleinsolutions.com/#organization",
      name: "SIMPLEIN Solutions",
      url: "https://simpleinsolutions.com",
      logo: "https://simpleinsolutions.com/light-back-logo.png",
      image: "https://simpleinsolutions.com/og-image.jpg",
      sameAs: [
        "https://x.com/simplein30"
      ],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-9848334984",
          contactType: "customer support",
          email: "info@simpleinsolutions.com",
          availableLanguage: "English"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": "https://simpleinsolutions.com/#service",
      parentOrganization: {
        "@id": "https://simpleinsolutions.com/#organization"
      },
      name: "SIMPLEIN Solutions IT Services",
      description: "Premium IT services, custom software development, and enterprise IT hardware.",
      telephone: "+91-9848334984",
      email: "info@simpleinsolutions.com",
      address: {
        "@type": "PostalAddress",
        addressRegion: "Worldwide",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "00:00",
          closes: "23:59",
        },
      ],
    }
  ];
}

/**
 * Generates a ContactPage JSON-LD schema
 */
export function generateContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact SIMPLEIN Solutions",
    description: "Get in touch with SIMPLEIN Solutions for your next software development or IT hardware project.",
    url: "https://simpleinsolutions.com/contact",
  };
}

/**
 * Generates a WebPage JSON-LD schema for legal/informational pages
 */
export function generateWebPageSchema(title: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: title,
    description: description,
    url: url,
  };
}
