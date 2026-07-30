import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "IT Services | SIMPLEIN Solutions",
  description: "Explore SIMPLEIN Solutions' comprehensive IT services: custom software development, web & mobile apps, cloud infrastructure, cybersecurity, AI solutions, DevOps, and IT consulting.",
  alternates: {
    canonical: "https://simpleinsolutions.com/services",
  },
  openGraph: {
    title: "IT Services | SIMPLEIN Solutions",
    description: "Explore comprehensive IT services, from custom software development to AI automation and cloud infrastructure.",
    url: "https://simpleinsolutions.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services | SIMPLEIN Solutions",
    description: "Explore comprehensive IT services, from custom software development to AI automation and cloud infrastructure.",
  },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesClient />
    </>
  );
}
