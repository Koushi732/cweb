import type { Metadata } from "next";
import HardwareClient from "./HardwareClient";

export const metadata: Metadata = {
  title: "IT Hardware Solutions | SIMPLEIN Solutions",
  description: "Enterprise-grade IT hardware procurement, installation, and maintenance. We provide servers, networking gear, workstations, and cybersecurity appliances from top brands.",
  alternates: {
    canonical: "https://simpleinsolutions.com/hardware",
  },
  openGraph: {
    title: "IT Hardware Solutions | SIMPLEIN Solutions",
    description: "Enterprise-grade IT hardware procurement, installation, and maintenance.",
    url: "https://simpleinsolutions.com/hardware",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Hardware Solutions | SIMPLEIN Solutions",
    description: "Enterprise-grade IT hardware procurement, installation, and maintenance.",
  },
};

export default function HardwarePage() {
  return (
    <>
      <HardwareClient />
    </>
  );
}
