import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "IT Services | SimpleIn Solutions",
  description: "Explore SimpleIn Solutions' comprehensive IT services: custom software development, web & mobile apps, cloud infrastructure, cybersecurity, AI solutions, DevOps, and IT consulting.",
  alternates: {
    canonical: "https://simpleinsolutions.com/services",
  },
  openGraph: {
    title: "IT Services | SimpleIn Solutions",
    description: "Explore comprehensive IT services, from custom software development to AI automation and cloud infrastructure.",
    url: "https://simpleinsolutions.com/services",
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
        item: "https://simpleinsolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Services",
        item: "https://simpleinsolutions.com/services",
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
