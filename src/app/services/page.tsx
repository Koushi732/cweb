import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "IT Services",
  description: "Explore SimpleIn Solutions' comprehensive IT services: custom software development, web & mobile apps, cloud infrastructure, cybersecurity, AI solutions, DevOps, and IT consulting.",
};

export default function ServicesPage() {
  return <ServicesClient />;
}
