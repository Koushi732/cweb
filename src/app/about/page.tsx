import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us | SimpleIn Solutions",
  description: "Learn about SimpleIn Solutions — our story, mission, vision, core values, and the team driving innovation in IT services and hardware solutions.",
  alternates: {
    canonical: "https://simpleinsolutions.com/about",
  },
  openGraph: {
    title: "About Us | SimpleIn Solutions",
    description: "Learn about SimpleIn Solutions — our story, mission, vision, and core values.",
    url: "https://simpleinsolutions.com/about",
    type: "website",
  },
};

export default function AboutPage() {
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
        name: "About Us",
        item: "https://simpleinsolutions.com/about",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}
