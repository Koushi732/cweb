import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve | SIMPLEIN Solutions",
  description: "SIMPLEIN Solutions provides specialized IT software and hardware solutions tailored for Healthcare, Education, Retail, Finance, Manufacturing, Logistics, and more.",
  alternates: {
    canonical: "https://simpleinsolutions.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | SIMPLEIN Solutions",
    description: "Specialized IT software and hardware solutions tailored across various industries.",
    url: "https://simpleinsolutions.com/industries",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Industries We Serve | SIMPLEIN Solutions",
    description: "Specialized IT software and hardware solutions tailored across various industries.",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <IndustriesClient />
    </>
  );
}
