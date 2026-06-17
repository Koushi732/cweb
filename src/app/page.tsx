import HomeClient from "@/components/HomeClient";
import { Metadata } from "next";

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

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <HomeClient />
    </>
  );
}
