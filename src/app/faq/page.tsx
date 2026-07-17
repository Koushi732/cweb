import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SIMPLEIN Solutions",
  description: "Find answers to common questions about our IT services, custom software development, hardware sales, and more.",
  alternates: {
    canonical: "https://SIMPLEINsolutions.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | SIMPLEIN Solutions",
    description: "Find answers to common questions about our IT services and hardware solutions.",
    url: "https://SIMPLEINsolutions.com/faq",
    type: "website",
  },
};

export default function FaqPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://SIMPLEINsolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://SIMPLEINsolutions.com/faq",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <FAQPageClient />
    </>
  );
}
