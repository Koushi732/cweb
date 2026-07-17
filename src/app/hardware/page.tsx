import type { Metadata } from "next";
import HardwareClient from "./HardwareClient";

export const metadata: Metadata = {
  title: "IT Hardware Solutions | SIMPLEIN Solutions",
  description: "Enterprise-grade IT hardware procurement, installation, and maintenance. We provide servers, networking gear, workstations, and cybersecurity appliances from top brands.",
  alternates: {
    canonical: "https://SIMPLEINsolutions.com/hardware",
  },
  openGraph: {
    title: "IT Hardware Solutions | SIMPLEIN Solutions",
    description: "Enterprise-grade IT hardware procurement, installation, and maintenance.",
    url: "https://SIMPLEINsolutions.com/hardware",
    type: "website",
  },
};

export default function HardwarePage() {
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
        name: "Hardware Solutions",
        item: "https://SIMPLEINsolutions.com/hardware",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <HardwareClient />
    </>
  );
}
