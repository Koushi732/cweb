import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us | SimpleIn Solutions",
  description: "Get in touch with SimpleIn Solutions for your next software development or IT hardware project. We respond promptly during business hours.",
  alternates: {
    canonical: "https://simpleinsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Us | SimpleIn Solutions",
    description: "Get in touch with SimpleIn Solutions for your next project.",
    url: "https://simpleinsolutions.com/contact",
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
        item: "https://simpleinsolutions.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Contact Us",
        item: "https://simpleinsolutions.com/contact",
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
