import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | SIMPLEIN Solutions",
  description: "Get in touch with SIMPLEIN Solutions for your next software development or IT hardware project. We respond promptly during business hours.",
  alternates: {
    canonical: "https://SIMPLEINsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Us | SIMPLEIN Solutions",
    description: "Get in touch with SIMPLEIN Solutions for your next project.",
    url: "https://SIMPLEINsolutions.com/contact",
    type: "website",
  },
};

export default function ContactPage() {
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
        name: "Contact Us",
        item: "https://SIMPLEINsolutions.com/contact",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}
