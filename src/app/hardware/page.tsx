import type { Metadata } from "next";
import HardwareClient from "./HardwareClient";

export const metadata: Metadata = {
  title: "IT Hardware Sales",
  description: "Enterprise IT hardware sales — laptops, desktops, servers, networking equipment, storage, printers, and accessories from leading brands with procurement, installation, and AMC services.",
};

export default function HardwarePage() {
  return <HardwareClient />;
}
