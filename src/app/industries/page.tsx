import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | SimpleIn Solutions",
  description: "SimpleIn Solutions provides specialized IT software and hardware solutions tailored for Healthcare, Education, Retail, Finance, Manufacturing, Logistics, and more.",
  alternates: {
    canonical: "https://simpleinsolutions.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | SimpleIn Solutions",
    description: "Specialized IT software and hardware solutions tailored across various industries.",
    url: "https://simpleinsolutions.com/industries",
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
        item: "https://simpleinsolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Industries",
        item: "https://simpleinsolutions.com/industries",
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
