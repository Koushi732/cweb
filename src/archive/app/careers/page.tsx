import type { Metadata } from "next";
import CareersClient from "./CareersClient";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join SimpleIn Solutions — explore open positions, company culture, employee benefits, and apply to be part of our innovative team.",
};

export default function CareersPage() {
  return <CareersClient />;
}
