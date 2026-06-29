import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";
import { generateFAQSchema } from "@/utils/seo";
import { generalFAQs } from "@/data/faq";

export const metadata: Metadata = {
  title: "SimpleIn Solutions | Smart IT Solutions for a Digital Future",
  description: "SimpleIn Solutions is a trusted technology partner providing custom software development, web applications, AI automation, and enterprise IT hardware.",
  alternates: {
    canonical: "https://simpleinsolutions.com",
  },
  openGraph: {
    title: "SimpleIn Solutions | Smart IT Solutions for a Digital Future",
    description: "Premium IT services, custom software development, and enterprise IT hardware.",
    url: "https://simpleinsolutions.com",
    type: "website",
    images: [
      {
        url: "https://simpleinsolutions.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SimpleIn Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SimpleIn Solutions | Smart IT Solutions for a Digital Future",
    description: "Premium IT services, custom software development, and enterprise IT hardware.",
    images: ["https://simpleinsolutions.com/og-image.jpg"],
  },
};

export default function Home() {
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "SimpleIn Solutions",
    url: "https://simpleinsolutions.com",
    potentialAction: {
      "@type": "SearchAction",
      target: "https://simpleinsolutions.com/services?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  };

  const faqSchema = generateFAQSchema(generalFAQs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HomeClient />
    </>
  );
}
