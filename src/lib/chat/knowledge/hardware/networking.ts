import { HardwareProduct } from "./index";

export const networkingData: HardwareProduct[] = [
  {
    id: "networking-equipment",
    category: "Networking Equipment",
    name: "Enterprise Networking & Wi-Fi",
    description: "Switches, routers, firewalls, and enterprise Wi-Fi access points for secure and high-speed connectivity.",
    targetAudience: "Offices, warehouses, schools, and enterprise campuses.",
    brands: ["Cisco", "Ubiquiti", "Aruba", "Fortinet"],
    suggestedQuestions: ["Wi-Fi installation", "Firewall setup", "Structured cabling"],
    upsells: ["servers", "cctv", "biometric"],
  }
];
