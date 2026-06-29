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
 * Generates a ProfessionalService / LocalBusiness JSON-LD schema
 */
export function generateBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "SimpleIn Solutions",
    description: "Premium IT services, custom software development, and enterprise IT hardware.",
    url: "https://simpleinsolutions.com",
    logo: "https://simpleinsolutions.com/logo.png",
    image: "https://simpleinsolutions.com/og-image.jpg",
    telephone: "+91-9848334984",
    email: "info@SimpleInsolutions.com",
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
    sameAs: [],
  };
}
