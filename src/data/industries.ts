export interface Industry {
  id: string;
  title: string;
  icon: string;
  description: string;
  solutions: string[];
}

export const industries: Industry[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    icon: "Heart",
    description: "Customized digital solutions designed to improve patient care, streamline hospital operations, and securely manage medical data.",
    solutions: [
      "Hospital Management Systems",
      "Appointment Booking Systems",
      "Patient Portals",
      "Clinic Management Software",
      "Medical Inventory Management"
    ],
  },
  {
    id: "education",
    title: "Education",
    icon: "GraduationCap",
    description: "Technology solutions that transform learning experiences, simplify administration, and connect students with educational institutions.",
    solutions: [
      "Student Management Systems",
      "Learning Management Systems (LMS)",
      "Attendance Systems",
      "Online Examination Platforms",
      "College & School Portals"
    ],
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    icon: "ShoppingBag",
    description: "Scalable retail technology that drives online sales, improves customer experience, and optimizes complex inventory operations.",
    solutions: [
      "E-Commerce Websites",
      "Inventory Management",
      "Billing & POS Systems",
      "Customer Management",
      "Order Tracking Systems"
    ],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: "Factory",
    description: "Smart software solutions designed to optimize production lines, track assets, and automate manufacturing workflows.",
    solutions: [
      "ERP Solutions",
      "Production Monitoring",
      "Inventory Management",
      "Asset Tracking",
      "Workflow Automation"
    ],
  },
  {
    id: "finance",
    title: "Finance & FinTech",
    icon: "Landmark",
    description: "Secure, high-performance financial software tailored for reporting, analytics, and streamlined process automation.",
    solutions: [
      "Financial Dashboards",
      "Business Analytics",
      "Secure Internal Portals",
      "Process Automation",
      "Document Management"
    ],
  },
  {
    id: "realestate",
    title: "Real Estate",
    icon: "Building",
    description: "Custom real estate solutions that streamline property management, organize leads, and improve the buyer/seller experience.",
    solutions: [
      "Property Management Systems",
      "CRM Solutions",
      "Lead Management",
      "Property Listing Portals",
      "Booking & Inquiry Systems"
    ],
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    icon: "Truck",
    description: "End-to-end logistics solutions for fleet tracking, warehouse automation, and real-time supply chain visibility.",
    solutions: [
      "Fleet Management",
      "Shipment Tracking",
      "Warehouse Management",
      "Inventory Automation",
      "Logistics Dashboards"
    ],
  },
  {
    id: "hospitality",
    title: "Hospitality",
    icon: "HeartHandshake",
    description: "Integrated hospitality platforms for hotel management, bookings, and building stronger customer relationships.",
    solutions: [
      "Hotel Management Systems",
      "Booking Platforms",
      "Restaurant Management",
      "Customer Relationship Systems"
    ],
  },
  {
    id: "professional-services",
    title: "Professional Services",
    icon: "Briefcase",
    description: "Workflow automation and client management tools tailored for consulting, legal, and professional service firms.",
    solutions: [
      "CRM Solutions",
      "Project Management Systems",
      "Internal Business Portals",
      "Workflow Automation",
      "Client Management Systems"
    ],
  },
  {
    id: "it",
    title: "Information Technology",
    icon: "Monitor",
    description: "Advanced internal tools and integrations to support growing IT operations and infrastructure scaling.",
    solutions: [
      "Custom Software Development",
      "API Integrations",
      "Internal Dashboards"
    ],
  },
  {
    id: "construction",
    title: "Construction & Infrastructure",
    icon: "Wrench",
    description: "Digital systems to manage construction projects, track resources, and organize site operations efficiently.",
    solutions: [
      "Project Management Systems",
      "Resource Tracking",
      "Workflow Automation"
    ],
  },
  {
    id: "automotive",
    title: "Automotive",
    icon: "Settings",
    description: "Custom software solutions supporting dealership operations, parts inventory, and customer service.",
    solutions: [
      "Inventory Management",
      "CRM Solutions",
      "Service Booking Portals"
    ],
  },
  {
    id: "government",
    title: "Government & Public Sector",
    icon: "Building2",
    description: "Secure, reliable, and scalable portals designed to improve public service delivery and citizen engagement.",
    solutions: [
      "Citizen Portals",
      "Document Management",
      "Internal Operations Dashboards"
    ],
  },
  {
    id: "startups",
    title: "Startups",
    icon: "Rocket",
    description: "Scalable technology partnerships to help startups build their MVP, iterate quickly, and automate operations.",
    solutions: [
      "MVP Development",
      "Web & Mobile Applications",
      "Process Automation"
    ],
  },
  {
    id: "smb",
    title: "Small & Medium Businesses (SMBs)",
    icon: "Users",
    description: "Tailored digital solutions to help SMBs eliminate manual processes and accelerate growth.",
    solutions: [
      "Custom CRM/ERP",
      "Workflow Automation",
      "Business Portals"
    ],
  },
  {
    id: "enterprises",
    title: "Enterprises",
    icon: "Target",
    description: "Enterprise-grade digital transformation solutions that modernize operations and drive innovation at scale.",
    solutions: [
      "Enterprise Software Solutions",
      "System Integration",
      "Custom Internal Dashboards"
    ],
  },
];
