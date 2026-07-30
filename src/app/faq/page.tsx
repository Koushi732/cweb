import type { Metadata } from "next";
import FAQPageClient from "./FAQPageClient";
import { generateFAQSchema } from "@/utils/seo";
import { generalFAQs, serviceFAQs, hardwareFAQs } from "@/data/faq";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | SIMPLEIN Solutions",
  description: "Find answers to common questions about our IT services, custom software development, hardware sales, and more.",
  alternates: {
    canonical: "https://simpleinsolutions.com/faq",
  },
  openGraph: {
    title: "Frequently Asked Questions | SIMPLEIN Solutions",
    description: "Find answers to common questions about our IT services and hardware solutions.",
    url: "https://simpleinsolutions.com/faq",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | SIMPLEIN Solutions",
    description: "Find answers to common questions about our IT services and hardware solutions.",
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
        item: "https://simpleinsolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "FAQ",
        item: "https://simpleinsolutions.com/faq",
      },
    ],
  };

  const allFaqs = [...generalFAQs, ...serviceFAQs, ...hardwareFAQs];
  const faqSchema = generateFAQSchema(allFaqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([breadcrumbSchema, faqSchema]) }}
      />
      <FAQPageClient />
    </>
  );
}
