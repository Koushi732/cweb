import type { Metadata } from "next";
import PortfolioClient from "./PortfolioClient";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore SimpleIn Solutions' portfolio of successful projects — case studies, success stories, and results across web, mobile, cloud, and enterprise solutions.",
};

export default function PortfolioPage() {
  return <PortfolioClient />;
}
