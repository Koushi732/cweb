import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: "SimpleIn Solutions serves healthcare, education, retail, manufacturing, logistics, finance, real estate, government, startups, and enterprises with tailored IT solutions.",
};

export default function IndustriesPage() {
  return <IndustriesClient />;
}
