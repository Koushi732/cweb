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
    id: "servers",
    title: "Enterprise Servers",
    icon: "Server",
    description: "Enterprise-grade servers for data centers, on-premise deployments, and hybrid cloud environments with maximum uptime.",
    features: ["Rack and tower configurations", "Hot-swappable components", "Redundant power supplies", "Remote management"],
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
    id: "routers-switches",
    title: "Routers & Switches",
    icon: "Network",
    description: "Enterprise routing and switching solutions for building secure, high-performance networks at any scale.",
    features: ["Layer 2 and Layer 3 switching", "Advanced routing protocols", "VLAN support", "Quality of Service (QoS)"],
    brands: [],
  },
  {
    id: "wifi",
    title: "Wi-Fi Infrastructure",
    icon: "Wifi",
    description: "Enterprise-grade wireless access points and controllers for seamless, high-density wireless coverage.",
    features: ["Wi-Fi 6/6E solutions", "Cloud-managed controllers", "Guest network isolation", "Seamless roaming"],
    brands: [],
  },
  {
    id: "firewalls",
    title: "Firewalls & Security Appliances",
    icon: "Shield",
    description: "Next-generation firewalls and unified threat management appliances to protect your network perimeter.",
    features: ["Intrusion prevention (IPS)", "VPN connectivity", "Deep packet inspection", "Web filtering"],
    brands: [],
  },
  {
    id: "storage",
    title: "Storage Solutions (NAS/SAN)",
    icon: "HardDrive",
    description: "Enterprise storage solutions from NAS to SAN, including all-flash arrays and hybrid storage for demanding workloads.",
    features: ["Scalable capacity", "Data deduplication", "Snapshot and replication", "Tiered storage options"],
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
  {
    id: "amc",
    title: "Annual Maintenance Contracts (AMC)",
    icon: "FileCheck",
    description: "Comprehensive Annual Maintenance Contracts that cover preventive maintenance, repairs, and replacement parts.",
    features: ["Preventive maintenance schedules", "Priority support response", "Hardware repair", "Regular health checks"],
    brands: [],
  },
  {
    id: "enterprise-support",
    title: "Enterprise IT Support",
    icon: "Headphones",
    description: "Dedicated IT support services to troubleshoot hardware issues, manage warranties, and minimize downtime.",
    features: ["Remote troubleshooting", "On-site support", "Warranty management", "Asset lifecycle tracking"],
    brands: [],
  },
];
