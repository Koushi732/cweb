import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Us | SIMPLEIN Solutions",
  description: "Learn about SIMPLEIN Solutions — our story, mission, vision, core values, and the team driving innovation in IT services and hardware solutions.",
  alternates: {
    canonical: "https://simpleinsolutions.com/about",
  },
  openGraph: {
    title: "About Us | SIMPLEIN Solutions",
    description: "Learn about SIMPLEIN Solutions — our story, mission, vision, and core values.",
    url: "https://simpleinsolutions.com/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | SIMPLEIN Solutions",
    description: "Learn about SIMPLEIN Solutions — our story, mission, vision, and core values.",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutContent />
    </>
  );
}
