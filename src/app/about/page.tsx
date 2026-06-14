import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about SimpleIn Solutions — our story, mission, vision, core values, and the team driving innovation in IT services and hardware solutions.",
};

export default function AboutPage() {
  return <AboutClient />;
}
