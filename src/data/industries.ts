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
    description: "Digital solutions that improve patient care, streamline operations, and ensure HIPAA compliance for healthcare providers.",
    solutions: ["Electronic Health Records (EHR)", "Telemedicine platforms", "Patient portals", "Medical device integration", "Healthcare analytics"],
  },
  {
    id: "education",
    title: "Education",
    icon: "GraduationCap",
    description: "EdTech solutions that transform learning experiences with interactive platforms, LMS systems, and student management tools.",
    solutions: ["Learning Management Systems", "Virtual classrooms", "Student information systems", "E-learning content platforms", "Assessment tools"],
  },
  {
    id: "retail",
    title: "Retail & E-Commerce",
    icon: "ShoppingBag",
    description: "Omnichannel retail solutions that drive sales, improve customer experience, and optimize inventory management.",
    solutions: ["E-commerce platforms", "POS systems", "Inventory management", "Customer loyalty programs", "Supply chain optimization"],
  },
  {
    id: "manufacturing",
    title: "Manufacturing",
    icon: "Factory",
    description: "Smart manufacturing solutions that optimize production, improve quality control, and enable Industry 4.0 transformation.",
    solutions: ["IoT sensor integration", "Production monitoring", "Quality management systems", "Predictive maintenance", "Supply chain automation"],
  },
  {
    id: "logistics",
    title: "Logistics & Transportation",
    icon: "Truck",
    description: "End-to-end logistics solutions for fleet management, route optimization, and real-time tracking across the supply chain.",
    solutions: ["Fleet management systems", "Route optimization", "Warehouse management", "Real-time tracking", "Last-mile delivery solutions"],
  },
  {
    id: "finance",
    title: "Finance & Banking",
    icon: "Landmark",
    description: "Secure fintech solutions that modernize banking operations, enhance customer experience, and ensure regulatory compliance.",
    solutions: ["Digital banking platforms", "Payment processing", "Fraud detection", "Regulatory compliance tools", "Financial analytics dashboards"],
  },
  {
    id: "realestate",
    title: "Real Estate",
    icon: "Building",
    description: "PropTech solutions that streamline property management, enhance listings, and improve buyer/seller experiences.",
    solutions: ["Property listing platforms", "Virtual tour integration", "CRM for real estate", "Property management tools", "Market analytics"],
  },
  {
    id: "government",
    title: "Government",
    icon: "Building2",
    description: "GovTech solutions that digitize public services, improve citizen engagement, and ensure data security and compliance.",
    solutions: ["Citizen portals", "Digital document management", "Public safety systems", "E-governance platforms", "Open data initiatives"],
  },
  {
    id: "startups",
    title: "Startups",
    icon: "Rocket",
    description: "MVP development and scalable tech solutions that help startups launch fast, iterate quickly, and grow sustainably.",
    solutions: ["MVP development", "Product-market fit validation", "Scalable architecture", "Growth engineering", "Investor-ready dashboards"],
  },
  {
    id: "enterprises",
    title: "Enterprises",
    icon: "Briefcase",
    description: "Enterprise-grade digital transformation solutions that modernize operations, improve efficiency, and drive innovation at scale.",
    solutions: ["ERP integration", "Legacy modernization", "Enterprise mobility", "Business intelligence", "Workflow automation"],
  },
];
