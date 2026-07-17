import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "IT Services | SIMPLEIN Solutions",
  description: "Explore SIMPLEIN Solutions' comprehensive IT services: custom software development, web & mobile apps, cloud infrastructure, cybersecurity, AI solutions, DevOps, and IT consulting.",
  alternates: {
    canonical: "https://SIMPLEINsolutions.com/services",
  },
  openGraph: {
    title: "IT Services | SIMPLEIN Solutions",
    description: "Explore comprehensive IT services, from custom software development to AI automation and cloud infrastructure.",
    url: "https://SIMPLEINsolutions.com/services",
    type: "website",
  },
};

export default function ServicesPage() {
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
        name: "Services",
        item: "https://SIMPLEINsolutions.com/services",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesClient />
    </>
  );
}
