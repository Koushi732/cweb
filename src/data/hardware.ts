export interface HardwareCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  features: string[];
  brands: string[];
}

export const hardwareCategories: HardwareCategory[] = [
  {
    id: "laptops",
    title: "Business Laptops & Workstations",
    icon: "Laptop",
    description: "Business-grade laptops and high-performance workstations built for security, productivity, and durability.",
    features: ["Pre-configured enterprise images", "Extended warranty options", "Bulk deployment services", "Custom hardware specs"],
    brands: [],
  },
  {
    id: "desktops",
    title: "Desktop Systems",
    icon: "Monitor",
    description: "Powerful desktop computers designed for office productivity, creative work, and high-performance computing needs.",
    features: ["Custom build configurations", "Enterprise management tools", "Energy-efficient models", "Compact form factors"],
    brands: [],
  },

  {
    id: "networking",
    title: "Networking Equipment",
    icon: "Wifi",
    description: "Complete networking solutions for enterprise connectivity, ensuring reliable, fast, and secure data transfer.",
    features: ["Managed and unmanaged options", "PoE capabilities", "SD-WAN ready", "Network monitoring tools"],
    brands: [],
  },

  {
    id: "printers",
    title: "Printers & Office Equipment",
    icon: "Printer",
    description: "Business printing and scanning solutions from desktop printers to enterprise multifunction devices.",
    features: ["Managed print services", "Cloud printing support", "High-volume duty cycles", "Security features"],
    brands: [],
  },
  {
    id: "cctv",
    title: "CCTV & Surveillance Systems",
    icon: "Camera",
    description: "IP-based surveillance systems for physical security, monitoring, and recording of your business premises.",
    features: ["High-definition IP cameras", "NVR storage solutions", "Remote monitoring", "Motion detection alerts"],
    brands: [],
  },
  {
    id: "biometric",
    title: "Biometric Attendance Systems",
    icon: "Fingerprint",
    description: "Secure access control and attendance tracking systems using advanced biometric and RFID technologies.",
    features: ["Fingerprint and facial recognition", "Payroll integration", "Cloud-based reporting", "Door access control"],
    brands: [],
  },
  {
    id: "infrastructure-setup",
    title: "IT Infrastructure Setup",
    icon: "Building",
    description: "Complete end-to-end IT infrastructure design and setup for new offices or expansion projects.",
    features: ["Structured cabling", "Server room design", "Rack installation", "Power management (UPS)"],
    brands: [],
  },
  {
    id: "procurement-consulting",
    title: "Hardware Procurement Consulting",
    icon: "ShoppingCart",
    description: "Expert consulting services to help you select the right hardware within your budget and business requirements.",
    features: ["Requirement analysis", "Vendor comparison", "TCO calculation", "Scalability planning"],
    brands: [],
  },
  {
    id: "installation",
    title: "Installation & Configuration",
    icon: "Settings",
    description: "Professional hardware installation, configuration, and deployment services by certified engineers.",
    features: ["On-site installation", "OS deployment", "Network configuration", "User training"],
    brands: [],
  },


];
