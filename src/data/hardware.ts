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
    title: "Enterprise Laptops",
    icon: "Laptop",
    description: "Business-grade laptops built for performance, security, and durability. We supply leading brands with custom configurations for enterprise deployments.",
    features: ["Pre-configured enterprise images", "Extended warranty options", "Bulk deployment services", "Custom hardware specs"],
    brands: ["Dell", "HP", "Lenovo", "Apple", "ASUS"],
  },
  {
    id: "desktops",
    title: "Business Desktops",
    icon: "Monitor",
    description: "Powerful desktop workstations designed for office productivity, creative work, and high-performance computing needs.",
    features: ["Custom build configurations", "Enterprise management tools", "Energy-efficient models", "Compact form factors"],
    brands: ["Dell OptiPlex", "HP ProDesk", "Lenovo ThinkCentre", "Apple iMac"],
  },
  {
    id: "workstations",
    title: "Workstations",
    icon: "Cpu",
    description: "High-performance workstations for CAD, video editing, 3D rendering, AI development, and other compute-intensive tasks.",
    features: ["Multi-GPU support", "ECC memory options", "ISV certifications", "Quiet operation design"],
    brands: ["Dell Precision", "HP Z Series", "Lenovo ThinkStation"],
  },
  {
    id: "servers",
    title: "Servers",
    icon: "Server",
    description: "Enterprise-grade servers for data centers, on-premise deployments, and hybrid cloud environments with maximum uptime and scalability.",
    features: ["Rack and tower configurations", "Hot-swappable components", "Redundant power supplies", "Remote management (iDRAC/iLO)"],
    brands: ["Dell PowerEdge", "HP ProLiant", "Lenovo ThinkSystem", "Supermicro"],
  },
  {
    id: "networking",
    title: "Networking Equipment",
    icon: "Wifi",
    description: "Complete networking solutions including switches, routers, access points, and firewalls for enterprise connectivity.",
    features: ["Managed and unmanaged options", "PoE capabilities", "SD-WAN ready", "Network monitoring tools"],
    brands: ["Cisco", "Juniper", "Aruba", "Ubiquiti", "Fortinet"],
  },
  {
    id: "routers-switches",
    title: "Routers & Switches",
    icon: "Network",
    description: "Enterprise routing and switching solutions for building secure, high-performance networks at any scale.",
    features: ["Layer 2 and Layer 3 switching", "Advanced routing protocols", "VLAN support", "Quality of Service (QoS)"],
    brands: ["Cisco Catalyst", "Juniper EX", "Aruba CX", "MikroTik"],
  },
  {
    id: "storage",
    title: "Storage Systems",
    icon: "HardDrive",
    description: "Enterprise storage solutions from NAS to SAN, including all-flash arrays and hybrid storage for demanding workloads.",
    features: ["Scalable capacity", "Data deduplication", "Snapshot and replication", "Tiered storage options"],
    brands: ["Dell EMC", "NetApp", "Synology", "QNAP", "Pure Storage"],
  },
  {
    id: "printers",
    title: "Printers & Scanners",
    icon: "Printer",
    description: "Business printing and scanning solutions from desktop printers to enterprise multifunction devices with fleet management.",
    features: ["Managed print services", "Cloud printing support", "High-volume duty cycles", "Security features"],
    brands: ["HP", "Canon", "Epson", "Brother", "Xerox"],
  },
  {
    id: "accessories",
    title: "Accessories",
    icon: "Headphones",
    description: "Complete range of IT peripherals and accessories including monitors, keyboards, mice, docking stations, and more.",
    features: ["Ergonomic options", "Wireless connectivity", "Multi-device support", "Premium build quality"],
    brands: ["Logitech", "Dell", "HP", "Microsoft", "Jabra"],
  },
  {
    id: "procurement",
    title: "Hardware Procurement",
    icon: "ShoppingCart",
    description: "End-to-end procurement services including vendor negotiation, bulk ordering, logistics, and asset tracking for enterprises.",
    features: ["Competitive pricing", "Vendor management", "Asset tagging and tracking", "Delivery coordination"],
    brands: [],
  },
  {
    id: "installation",
    title: "Installation Services",
    icon: "Settings",
    description: "Professional hardware installation, configuration, and deployment services. From single workstations to complete office setups.",
    features: ["On-site installation", "Data migration", "Network setup", "User training"],
    brands: [],
  },
  {
    id: "amc",
    title: "AMC & Maintenance Contracts",
    icon: "FileCheck",
    description: "Annual Maintenance Contracts (AMC) that cover preventive maintenance, repairs, and replacement parts for all your IT hardware.",
    features: ["Preventive maintenance schedules", "Priority support response", "Parts replacement coverage", "Regular health checks"],
    brands: [],
  },
];
