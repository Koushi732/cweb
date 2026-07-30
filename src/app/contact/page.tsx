import type { Metadata } from "next";
import ContactClient from "./ContactClient";
import { generateContactPageSchema } from "@/utils/seo";

export const metadata: Metadata = {
  title: "Contact Us | SIMPLEIN Solutions",
  description: "Get in touch with SIMPLEIN Solutions for your next software development or IT hardware project. We respond promptly during business hours.",
  alternates: {
    canonical: "https://simpleinsolutions.com/contact",
  },
  openGraph: {
    title: "Contact Us | SIMPLEIN Solutions",
    description: "Get in touch with SIMPLEIN Solutions for your next project.",
    url: "https://simpleinsolutions.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | SIMPLEIN Solutions",
    description: "Get in touch with SIMPLEIN Solutions for your next project.",
  },
};

export default function ContactPage() {
  const contactSchema = generateContactPageSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <ContactClient />
    </>
  );
}
