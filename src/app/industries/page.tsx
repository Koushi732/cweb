import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | SIMPLEIN Solutions",
  description: "SIMPLEIN Solutions provides specialized IT software and hardware solutions tailored for Healthcare, Education, Retail, Finance, Manufacturing, Logistics, and more.",
  alternates: {
    canonical: "https://SIMPLEINsolutions.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | SIMPLEIN Solutions",
    description: "Specialized IT software and hardware solutions tailored across various industries.",
    url: "https://SIMPLEINsolutions.com/industries",
    type: "website",
  },
};

export default function IndustriesPage() {
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
        name: "Industries",
        item: "https://SIMPLEINsolutions.com/industries",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <IndustriesClient />
    </>
  );
}
