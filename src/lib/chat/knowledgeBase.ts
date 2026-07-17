// ===========================================================================
// SIMPLEIN Solutions — Enterprise Knowledge Base
// ===========================================================================
// This is the single source of truth for the chat assistant.
// It is structured for consultant-level conversations, not FAQ matching.
// ===========================================================================

export type ActionType = "quote" | "contact" | "whatsapp" | "email" | "call" | "consultation";

// ---------------------------------------------------------------------------
// Service Knowledge — deep, structured objects
// ---------------------------------------------------------------------------
export interface ServiceKnowledge {
  id: string;
  name: string;
  category: string;
  overview: string;
  problemsSolved: string[];
  businessValue: string;
  idealCustomer: string;
  features: string[];
  technologies: string[];
  deliverables: string[];
  estimatedTimeline: string;
  maintenance: string;
  faqs: { q: string; a: string }[];
  crossSell: string[];
  cta: string;
}

export interface HardwareKnowledge {
  id: string;
  name: string;
  overview: string;
  categories: string[];
  brands: string;
  deployment: string;
  support: string;
  warranty: string;
  crossSell: string[];
}

export interface IndustryKnowledge {
  id: string;
  name: string;
  overview: string;
  typicalSolutions: string[];
  technologies: string[];
}

export interface CompanyKnowledge {
  about: string;
  mission: string;
  vision: string;
  approach: string;
  whySIMPLEIN: string[];
  projectWorkflow: string[];
  pricingPhilosophy: string;
  contactProcess: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  whatsapp: string;
  hours: string;
}

// ---------------------------------------------------------------------------
// Intent definitions used by the conversation engine
// ---------------------------------------------------------------------------
export interface Intent {
  id: string;
  /** Primary keywords that strongly indicate this intent */
  keywords: string[];
  /** Broader terms or misspellings that might indicate this intent */
  synonyms: string[];
  /** The response builder receives the matched intent and conversation context */
  responseType: "service" | "hardware" | "industry" | "company" | "contact" | "pricing" | "faq" | "greeting" | "estimator" | "thanks";
  /** Links to a knowledge object id for detailed responses */
  knowledgeRef?: string;
  /** Confidence boost — if the user's previous message was about a related topic */
  relatedIntents?: string[];
}

// ---------------------------------------------------------------------------
// Estimator definitions
// ---------------------------------------------------------------------------
export interface EstimatorStep {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

export interface Estimator {
  id: string;
  name: string;
  description: string;
  steps: EstimatorStep[];
}

// ===========================================================================
// KNOWLEDGE DATA
// ===========================================================================

export const companyKnowledge: CompanyKnowledge = {
  about: "SIMPLEIN Solutions is an enterprise IT service and technology company. We design, build, deploy, and maintain digital solutions for businesses of every size — from startups to large enterprises.",
  mission: "To make every service simple. We believe technology should empower businesses, not complicate them.",
  vision: "To become a trusted global technology partner known for building scalable, reliable, and beautifully designed digital solutions.",
  approach: "We follow a structured yet flexible process:\n\n1. Discovery & Requirements\n2. Technical Planning\n3. UI/UX Design\n4. Agile Development\n5. Testing & QA\n6. Deployment\n7. Ongoing Support & Optimization",
  whySIMPLEIN: [
    "End-to-end capabilities — hardware, software, cloud, and support",
    "Modern technology stack (React, Next.js, Python, Flutter)",
    "Enterprise-grade security and scalability",
    "Dedicated project management with transparent communication",
    "24/7 availability and post-launch support",
    "Competitive pricing with flexible engagement models",
  ],
  projectWorkflow: [
    "Initial consultation and requirement gathering",
    "Proposal with scope, timeline, and technology recommendations",
    "Iterative design and development sprints",
    "Regular demos and feedback cycles",
    "QA, security testing, and performance optimization",
    "Deployment and go-live support",
    "Ongoing maintenance and feature updates",
  ],
  pricingPhilosophy: "Every project is unique, so we don't publish fixed prices. Our pricing depends on:\n\n• Project scope and complexity\n• Feature requirements\n• Timeline expectations\n• Deployment model (cloud, on-premise, hybrid)\n• Ongoing support needs\n• Third-party integration complexity\n\nWe provide transparent, detailed proposals after understanding your specific needs. The best way to get started is a free consultation.",
  contactProcess: "Getting started is simple:\n\n1. Reach out via WhatsApp, email, or phone\n2. We schedule a free 30-minute consultation\n3. Our team prepares a tailored proposal\n4. Once approved, we kick off the project\n\nNo obligations, no pressure — just a conversation about how we can help.",
};

export const contactInfo: ContactInfo = {
  phone: "+91 984 8334 984",
  email: "info@simpleinsolutions.com",
  whatsapp: "https://wa.me/919848334984",
  hours: "Available 24/7",
};

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------
export const serviceKnowledge: ServiceKnowledge[] = [
  {
    id: "web-development",
    name: "Web Application Development",
    category: "Development",
    overview: "We build high-performance, scalable web applications using modern frameworks like React and Next.js. Our solutions range from business websites to complex enterprise platforms.",
    problemsSolved: [
      "Outdated or slow website",
      "Poor mobile experience",
      "Lack of online presence",
      "Manual processes that could be web-based",
      "Need for customer/client portals",
    ],
    businessValue: "A well-built web application becomes your most important digital asset — it generates leads, serves customers, and automates operations 24/7.",
    idealCustomer: "Businesses needing a professional web presence, customer portals, internal dashboards, or web-based SaaS products.",
    features: ["Responsive design", "SEO optimization", "Real-time features", "API integrations", "Admin dashboards", "Progressive Web App support"],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "PostgreSQL", "Vercel"],
    deliverables: ["Fully functional web application", "Admin panel", "Documentation", "Deployment to production", "30-day post-launch support"],
    estimatedTimeline: "Simple websites: 2–4 weeks. Complex platforms: 2–4 months. Enterprise portals: 3–6 months.",
    maintenance: "We offer ongoing maintenance plans including security updates, performance monitoring, feature additions, and priority support.",
    faqs: [
      { q: "Do you build e-commerce websites?", a: "Yes — we build custom e-commerce solutions tailored to your product catalog and business model." },
      { q: "Can you redesign my existing website?", a: "Absolutely. We frequently modernize existing websites while preserving SEO rankings and content." },
    ],
    crossSell: ["Mobile Development", "Cloud & DevOps", "Digital Marketing", "UI/UX Design"],
    cta: "Tell us about your web project and get a free consultation.",
  },
  {
    id: "mobile-development",
    name: "Mobile Application Development",
    category: "Development",
    overview: "We develop native and cross-platform mobile applications for iOS and Android using Flutter. Our apps focus on performance, intuitive UX, and robust architecture.",
    problemsSolved: [
      "No mobile presence for your business",
      "Need to reach customers on their phones",
      "Complex workflows that need a mobile interface",
      "Existing app with poor performance or design",
    ],
    businessValue: "Mobile apps provide direct access to your customers, enabling push notifications, offline access, and a seamless brand experience.",
    idealCustomer: "Businesses wanting to reach mobile users, field teams needing mobile tools, or startups building mobile-first products.",
    features: ["Cross-platform (iOS + Android)", "Offline support", "Push notifications", "Biometric authentication", "Camera/GPS integration", "App Store optimization"],
    technologies: ["Flutter", "Dart", "Supabase", "Node.js", "PostgreSQL"],
    deliverables: ["iOS and Android apps", "App Store submission", "Backend API", "Admin panel", "Documentation"],
    estimatedTimeline: "Simple apps: 4–6 weeks. Medium complexity: 2–3 months. Feature-rich platforms: 4–6 months.",
    maintenance: "Ongoing plans include OS updates compatibility, feature releases, crash monitoring, and performance optimization.",
    faqs: [
      { q: "Do you build for both iOS and Android?", a: "Yes — we use Flutter for cross-platform development, delivering both from a single codebase." },
    ],
    crossSell: ["Web Development", "AI & Automation", "Cloud & DevOps"],
    cta: "Describe your app idea and we'll provide a free technical assessment.",
  },
  {
    id: "custom-software",
    name: "Custom Software Development",
    category: "Development",
    overview: "We build tailored software solutions from the ground up, designed to fit your exact business workflows. No compromises, no generic templates.",
    problemsSolved: [
      "Off-the-shelf software doesn't fit your workflow",
      "Manual processes causing bottlenecks",
      "Need to connect multiple systems",
      "Data scattered across spreadsheets",
    ],
    businessValue: "Custom software eliminates inefficiencies and becomes a long-term competitive advantage that grows with your business.",
    idealCustomer: "Businesses with unique workflows, complex operations, or specific compliance requirements that off-the-shelf tools can't address.",
    features: ["Tailored business logic", "Role-based access control", "Analytics dashboards", "API integrations", "Audit trails", "Automated workflows"],
    technologies: ["React", "Node.js", "Python", "PostgreSQL", "Docker", "GitHub Actions"],
    deliverables: ["Custom application", "User documentation", "Admin tools", "Training sessions", "Deployment"],
    estimatedTimeline: "Depends on complexity. Typical range: 2–6 months for initial version.",
    maintenance: "We provide AMC (Annual Maintenance Contracts) with guaranteed response times and regular updates.",
    faqs: [
      { q: "Can you build an ERP system?", a: "Yes — we build custom ERP modules tailored to your industry and operations." },
      { q: "Do you offer maintenance after delivery?", a: "Yes — we offer flexible maintenance and support contracts." },
    ],
    crossSell: ["Enterprise Software", "AI & Automation", "Cloud & DevOps"],
    cta: "Share your requirements for a tailored proposal.",
  },
  {
    id: "ai-automation",
    name: "AI & Automation Solutions",
    category: "AI & Innovation",
    overview: "We help businesses leverage AI and automation to streamline operations. From intelligent document processing to workflow automation, we deliver measurable efficiency gains.",
    problemsSolved: [
      "Repetitive manual tasks consuming employee time",
      "Data entry errors",
      "Slow decision-making processes",
      "Unstructured data that's hard to analyze",
    ],
    businessValue: "AI automation can reduce manual workload by up to 60%, improve accuracy, and free your team to focus on high-value work.",
    idealCustomer: "Businesses with high-volume repetitive processes, data-heavy operations, or those wanting to build AI-powered products.",
    features: ["Workflow automation", "Document processing", "Chatbot development", "Predictive analytics", "Data extraction", "Process optimization"],
    technologies: ["Python", "OpenAI APIs", "Ollama", "n8n", "FastAPI", "PostgreSQL"],
    deliverables: ["Automation workflows", "AI model integration", "Dashboard for monitoring", "Documentation", "Training"],
    estimatedTimeline: "Simple automations: 1–2 weeks. Complex AI integrations: 1–3 months.",
    maintenance: "Ongoing model monitoring, retraining, and workflow optimization.",
    faqs: [
      { q: "Can you automate my invoicing process?", a: "Absolutely — we've automated invoicing, approvals, and document workflows for multiple clients." },
    ],
    crossSell: ["Custom Software", "Enterprise Software", "Cloud & DevOps"],
    cta: "Tell us about the processes you want to automate.",
  },
  {
    id: "cloud-devops",
    name: "Cloud & DevOps",
    category: "Infrastructure",
    overview: "We design, deploy, and manage cloud infrastructure. Our DevOps expertise ensures automated deployments, high availability, and optimized costs.",
    problemsSolved: [
      "Unreliable hosting causing downtime",
      "Slow deployment processes",
      "Unpredictable cloud costs",
      "No disaster recovery plan",
    ],
    businessValue: "Modern cloud infrastructure reduces costs, improves reliability, and enables your team to ship faster with confidence.",
    idealCustomer: "Businesses migrating to the cloud, teams wanting CI/CD pipelines, or companies needing scalable infrastructure.",
    features: ["Cloud architecture design", "CI/CD pipelines", "Auto-scaling", "Monitoring & alerting", "Disaster recovery", "Cost optimization"],
    technologies: ["Docker", "Vercel", "Cloudflare", "GitHub Actions", "PostgreSQL"],
    deliverables: ["Cloud architecture", "Automated deployment pipeline", "Monitoring dashboard", "Documentation"],
    estimatedTimeline: "Infrastructure setup: 1–3 weeks. Full migration: 1–2 months.",
    maintenance: "24/7 monitoring, incident response, and infrastructure optimization.",
    faqs: [],
    crossSell: ["Web Development", "Enterprise Software", "Networking & Security"],
    cta: "Let's discuss your cloud strategy.",
  },
  {
    id: "enterprise-software",
    name: "Enterprise Software Solutions",
    category: "Enterprise",
    overview: "We build robust enterprise applications — ERPs, CRMs, internal portals, and management systems — designed for scale, security, and seamless integration.",
    problemsSolved: [
      "Disconnected business systems",
      "Manual reporting consuming hours",
      "Lack of centralized data",
      "Legacy software holding back operations",
    ],
    businessValue: "Enterprise software centralizes operations, provides real-time visibility, and scales with your organization's growth.",
    idealCustomer: "Mid-size to large organizations needing custom ERP, CRM, or internal management platforms.",
    features: ["Custom ERP/CRM modules", "Role-based access", "Analytics dashboards", "Integration APIs", "Audit logging", "Multi-tenant support"],
    technologies: ["Next.js", "React", "Node.js", "Python", "FastAPI", "PostgreSQL", "Docker"],
    deliverables: ["Enterprise application", "Admin panel", "Integration documentation", "User training", "Deployment"],
    estimatedTimeline: "3–8 months depending on scope and module count.",
    maintenance: "Annual maintenance contracts with SLA-based support.",
    faqs: [],
    crossSell: ["AI & Automation", "Cloud & DevOps", "Custom Software"],
    cta: "Describe your enterprise needs for a tailored solution.",
  },
  {
    id: "digital-marketing",
    name: "Digital Marketing",
    category: "Marketing",
    overview: "We help businesses grow their online visibility through SEO, social media management, content marketing, and performance advertising.",
    problemsSolved: [
      "Low website traffic",
      "Poor search engine rankings",
      "No social media presence",
      "Low lead generation",
    ],
    businessValue: "Strategic digital marketing drives qualified traffic, builds brand authority, and converts visitors into customers.",
    idealCustomer: "Businesses looking to increase online visibility, generate leads, or build a brand presence.",
    features: ["SEO optimization", "Social media management", "Content marketing", "Google Ads", "Analytics & reporting", "Brand strategy"],
    technologies: ["Google Analytics", "SEO Tools", "Social Platforms", "CMS"],
    deliverables: ["Marketing strategy", "Monthly reports", "Content calendar", "Campaign management"],
    estimatedTimeline: "Ongoing engagement. Initial strategy: 1–2 weeks. Results typically visible in 2–3 months.",
    maintenance: "Continuous optimization based on performance data.",
    faqs: [],
    crossSell: ["Web Development", "UI/UX Design"],
    cta: "Let's grow your online presence together.",
  },
  {
    id: "networking-security",
    name: "Networking & Security",
    category: "Infrastructure",
    overview: "We design, deploy, and maintain network infrastructure and security systems — from structured cabling to CCTV and firewalls.",
    problemsSolved: [
      "Unreliable network connectivity",
      "Security vulnerabilities",
      "No surveillance system",
      "Unmanaged network infrastructure",
    ],
    businessValue: "A reliable, secure network is the foundation of modern business operations and data protection.",
    idealCustomer: "Businesses setting up new offices, expanding operations, or upgrading network security.",
    features: ["Network design", "Wi-Fi deployment", "Firewall management", "CCTV installation", "VPN setup", "Security audits"],
    technologies: ["Enterprise Routers", "Switches", "Firewalls", "CCTV Systems", "VPN"],
    deliverables: ["Network infrastructure", "Security system installation", "Configuration documentation", "Training"],
    estimatedTimeline: "Small setups: 1–2 weeks. Enterprise deployments: 2–6 weeks.",
    maintenance: "AMC with monitoring, incident response, and regular health checks.",
    faqs: [],
    crossSell: ["IT Hardware", "Cloud & DevOps", "Enterprise Software"],
    cta: "Let's secure your business infrastructure.",
  },
];

// ---------------------------------------------------------------------------
// Hardware
// ---------------------------------------------------------------------------
export const hardwareKnowledge: HardwareKnowledge[] = [
  {
    id: "it-hardware",
    name: "IT Hardware Sales & Solutions",
    overview: "We supply enterprise-grade IT hardware including laptops, desktops, servers, networking equipment, CCTV systems, biometric devices, and peripherals. We handle procurement, configuration, deployment, and warranty support.",
    categories: ["Business Laptops & Workstations", "Desktop Systems", "Servers & Storage", "Networking Equipment", "Printers & Office Equipment", "CCTV & Surveillance", "Biometric Attendance Systems", "IT Infrastructure Setup"],
    brands: "We work with all major enterprise brands and can source any specific hardware requirements.",
    deployment: "We handle everything from procurement to deployment — including OS imaging, software installation, network configuration, and desk-ready delivery.",
    support: "Post-deployment support includes warranty management, hardware troubleshooting, and replacement coordination.",
    warranty: "Standard manufacturer warranties plus optional extended warranty and AMC plans.",
    crossSell: ["Networking & Security", "Cloud & DevOps", "IT Infrastructure Setup"],
  },
];

// ---------------------------------------------------------------------------
// Industries
// ---------------------------------------------------------------------------
export const industryKnowledge: IndustryKnowledge[] = [
  { id: "healthcare", name: "Healthcare", overview: "Hospital management, patient portals, appointment systems, and medical inventory solutions.", typicalSolutions: ["Hospital Management Systems", "Patient Portals", "Clinic Software", "Medical Inventory"], technologies: ["React", "Node.js", "PostgreSQL", "Flutter"] },
  { id: "education", name: "Education", overview: "LMS platforms, student portals, examination systems, and attendance management.", typicalSolutions: ["Learning Management Systems", "Student Portals", "Online Exams", "Attendance Systems"], technologies: ["React", "Next.js", "PostgreSQL", "Flutter"] },
  { id: "retail", name: "Retail & E-Commerce", overview: "E-commerce platforms, inventory management, billing systems, and customer engagement tools.", typicalSolutions: ["E-Commerce Websites", "Inventory Management", "POS Systems", "Order Tracking"], technologies: ["Next.js", "React", "Node.js", "PostgreSQL"] },
  { id: "manufacturing", name: "Manufacturing", overview: "ERP solutions, production monitoring, asset tracking, and workflow automation for factories.", typicalSolutions: ["ERP Solutions", "Production Monitoring", "Asset Tracking", "Workflow Automation"], technologies: ["React", "Python", "PostgreSQL", "Docker"] },
  { id: "finance", name: "Finance & FinTech", overview: "Financial dashboards, analytics platforms, secure portals, and process automation.", typicalSolutions: ["Financial Dashboards", "Analytics Platforms", "Secure Portals", "Process Automation"], technologies: ["React", "Node.js", "Python", "PostgreSQL"] },
  { id: "realestate", name: "Real Estate", overview: "Property management systems, CRM, lead management, and listing portals.", typicalSolutions: ["Property Management", "CRM", "Lead Management", "Listing Portals"], technologies: ["Next.js", "React", "PostgreSQL"] },
  { id: "logistics", name: "Logistics & Supply Chain", overview: "Fleet management, shipment tracking, warehouse management, and logistics dashboards.", typicalSolutions: ["Fleet Management", "Shipment Tracking", "Warehouse Management"], technologies: ["React", "Node.js", "PostgreSQL", "Flutter"] },
  { id: "startups", name: "Startups", overview: "MVP development, rapid prototyping, web & mobile apps, and process automation for early-stage companies.", typicalSolutions: ["MVP Development", "Web & Mobile Apps", "Process Automation"], technologies: ["Next.js", "Flutter", "Supabase", "Vercel"] },
];

// ---------------------------------------------------------------------------
// Intents
// ---------------------------------------------------------------------------
export const intents: Intent[] = [
  // --- Greetings ---
  { id: "greeting", keywords: ["hello", "hi", "hey", "good morning", "good afternoon", "good evening", "howdy", "sup"], synonyms: ["greetings", "hola", "namaste"], responseType: "greeting" },
  { id: "thanks", keywords: ["thank", "thanks", "thank you", "appreciate", "helpful", "great"], synonyms: ["cheers", "thx", "ty"], responseType: "thanks" },

  // --- Services ---
  { id: "intent_web", keywords: ["website", "web app", "web application", "web development", "frontend", "backend", "fullstack", "react", "nextjs", "landing page"], synonyms: ["site", "webpage", "online presence", "web platform", "web portal"], responseType: "service", knowledgeRef: "web-development", relatedIntents: ["intent_mobile", "intent_cloud", "intent_marketing"] },
  { id: "intent_mobile", keywords: ["mobile app", "mobile application", "ios app", "android app", "flutter", "smartphone app", "app development"], synonyms: ["phone app", "tablet app", "native app", "cross-platform"], responseType: "service", knowledgeRef: "mobile-development", relatedIntents: ["intent_web", "intent_ai"] },
  { id: "intent_software", keywords: ["custom software", "software development", "build software", "software solution", "erp", "crm", "management system", "business application"], synonyms: ["bespoke software", "tailored software", "custom app", "custom application", "custom system"], responseType: "service", knowledgeRef: "custom-software", relatedIntents: ["intent_enterprise", "intent_ai"] },
  { id: "intent_ai", keywords: ["ai", "artificial intelligence", "automation", "machine learning", "chatbot", "automate", "workflow", "bot", "intelligent", "ml"], synonyms: ["smart system", "auto", "automated", "rpa"], responseType: "service", knowledgeRef: "ai-automation", relatedIntents: ["intent_software", "intent_enterprise"] },
  { id: "intent_cloud", keywords: ["cloud", "devops", "hosting", "aws", "azure", "gcp", "deployment", "ci/cd", "docker", "infrastructure", "server hosting"], synonyms: ["cloud hosting", "cloud migration", "containerization", "server"], responseType: "service", knowledgeRef: "cloud-devops", relatedIntents: ["intent_web", "intent_enterprise"] },
  { id: "intent_enterprise", keywords: ["enterprise", "erp", "crm", "portal", "dashboard", "management platform", "internal system", "business platform"], synonyms: ["corporate software", "business system", "enterprise app"], responseType: "service", knowledgeRef: "enterprise-software", relatedIntents: ["intent_software", "intent_ai"] },
  { id: "intent_marketing", keywords: ["marketing", "seo", "social media", "digital marketing", "google ads", "content marketing", "branding"], synonyms: ["online marketing", "promotion", "advertising", "lead generation"], responseType: "service", knowledgeRef: "digital-marketing", relatedIntents: ["intent_web"] },
  { id: "intent_networking", keywords: ["networking", "network", "security", "firewall", "cctv", "surveillance", "vpn", "wifi", "wi-fi", "cable", "cabling"], synonyms: ["network setup", "internet setup", "lan", "wan"], responseType: "service", knowledgeRef: "networking-security", relatedIntents: ["intent_hardware"] },

  // --- Hardware ---
  { id: "intent_hardware", keywords: ["hardware", "laptop", "laptops", "desktop", "server", "printer", "workstation", "biometric", "buy hardware", "purchase", "equipment"], synonyms: ["computer", "device", "machine", "peripherals", "it equipment"], responseType: "hardware", knowledgeRef: "it-hardware", relatedIntents: ["intent_networking"] },

  // --- Industries ---
  { id: "intent_industry", keywords: ["industry", "industries", "healthcare", "education", "retail", "manufacturing", "finance", "real estate", "logistics", "startup", "sector"], synonyms: ["domain", "vertical", "segment"], responseType: "industry" },

  // --- Company ---
  { id: "intent_about", keywords: ["about", "company", "who are you", "what is SIMPLEIN", "what do you do", "tell me about"], synonyms: ["info", "background", "about us", "introduction"], responseType: "company", knowledgeRef: "about" },
  { id: "intent_why", keywords: ["why SIMPLEIN", "why choose", "what makes you different", "advantages", "benefits"], synonyms: ["differentiator", "unique", "special"], responseType: "company", knowledgeRef: "why" },
  { id: "intent_process", keywords: ["process", "how do you work", "workflow", "methodology", "approach", "how does it work"], synonyms: ["steps", "procedure", "method"], responseType: "company", knowledgeRef: "process" },

  // --- Contact ---
  { id: "intent_contact", keywords: ["contact", "reach", "phone", "email", "whatsapp", "call", "talk", "support", "help", "address", "location"], synonyms: ["get in touch", "connect", "reach out", "speak to someone"], responseType: "contact", relatedIntents: ["intent_pricing"] },

  // --- Pricing ---
  { id: "intent_pricing", keywords: ["price", "pricing", "cost", "how much", "budget", "quote", "quotation", "estimate", "rate", "fee", "charge", "expensive", "affordable", "cheap"], synonyms: ["fees", "rates", "investment", "spend"], responseType: "pricing", relatedIntents: ["intent_contact"] },

  // --- FAQ ---
  { id: "intent_timeline", keywords: ["how long", "timeline", "duration", "timeframe", "when", "delivery", "deadline", "how fast", "turnaround"], synonyms: ["time", "weeks", "months", "days", "eta"], responseType: "faq", knowledgeRef: "timeline" },
  { id: "intent_maintenance", keywords: ["maintenance", "support", "amc", "after delivery", "post launch", "ongoing", "updates", "bug fix"], synonyms: ["upkeep", "service contract", "warranty"], responseType: "faq", knowledgeRef: "maintenance" },
  { id: "intent_international", keywords: ["international", "global", "overseas", "foreign", "remote", "worldwide", "other country", "abroad"], synonyms: ["outside india", "global clients"], responseType: "faq", knowledgeRef: "international" },
  { id: "intent_technologies", keywords: ["technology", "technologies", "tech stack", "what technologies", "programming language", "framework", "tools"], synonyms: ["stack", "languages", "platform"], responseType: "faq", knowledgeRef: "technologies" },

  // --- Estimators ---
  { id: "intent_estimate_web", keywords: ["estimate website", "website cost estimate", "website estimator", "quote for website"], synonyms: ["website calculator", "web quote"], responseType: "estimator", knowledgeRef: "estimator_web" },
  { id: "intent_estimate_app", keywords: ["estimate app", "app cost estimate", "mobile app estimator", "quote for app"], synonyms: ["app calculator", "mobile quote"], responseType: "estimator", knowledgeRef: "estimator_app" },
  { id: "intent_estimate_ai", keywords: ["estimate automation", "automation estimator", "ai estimator", "quote for automation"], synonyms: ["automation calculator", "ai quote"], responseType: "estimator", knowledgeRef: "estimator_ai" },
  { id: "intent_estimate_hardware", keywords: ["estimate hardware", "hardware estimator", "hardware quote", "quote for hardware"], synonyms: ["hardware calculator", "equipment quote"], responseType: "estimator", knowledgeRef: "estimator_hardware" },
  { id: "intent_estimate_enterprise", keywords: ["estimate enterprise", "enterprise estimator", "erp estimator", "crm estimator", "quote for enterprise"], synonyms: ["enterprise calculator", "enterprise quote"], responseType: "estimator", knowledgeRef: "estimator_enterprise" },
];

// ---------------------------------------------------------------------------
// Estimators
// ---------------------------------------------------------------------------
export const estimators: Estimator[] = [
  {
    id: "estimator_web",
    name: "Website Project Estimator",
    description: "Let me help you understand the scope of your web project.",
    steps: [
      { id: "type", question: "What type of web project do you need?", options: [{ label: "Business Website", value: "business" }, { label: "E-Commerce Store", value: "ecommerce" }, { label: "Web Application (SaaS)", value: "saas" }, { label: "Internal Portal / Dashboard", value: "portal" }, { label: "Landing Page", value: "landing" }] },
      { id: "pages", question: "How many pages or sections do you anticipate?", options: [{ label: "1–5 pages", value: "small" }, { label: "5–15 pages", value: "medium" }, { label: "15–50 pages", value: "large" }, { label: "50+ pages", value: "enterprise" }] },
      { id: "features", question: "Which features are most important?", options: [{ label: "Contact forms & CMS", value: "basic" }, { label: "User accounts & dashboards", value: "accounts" }, { label: "Payments & transactions", value: "payments" }, { label: "Real-time features", value: "realtime" }, { label: "API integrations", value: "integrations" }] },
      { id: "timeline", question: "What's your ideal timeline?", options: [{ label: "ASAP (2–4 weeks)", value: "urgent" }, { label: "Standard (1–2 months)", value: "standard" }, { label: "Flexible (3+ months)", value: "flexible" }] },
    ],
  },
  {
    id: "estimator_app",
    name: "Mobile App Estimator",
    description: "Let's understand what you need for your mobile app.",
    steps: [
      { id: "platform", question: "Which platforms do you need?", options: [{ label: "iOS only", value: "ios" }, { label: "Android only", value: "android" }, { label: "Both iOS & Android", value: "both" }] },
      { id: "complexity", question: "How complex is the app?", options: [{ label: "Simple (informational, few screens)", value: "simple" }, { label: "Medium (user accounts, API calls)", value: "medium" }, { label: "Complex (payments, real-time, offline)", value: "complex" }] },
      { id: "backend", question: "Do you already have a backend/API?", options: [{ label: "Yes, I have an existing backend", value: "existing" }, { label: "No, I need a backend built too", value: "new" }, { label: "Not sure", value: "unsure" }] },
      { id: "timeline", question: "What's your timeline?", options: [{ label: "Urgent (1–2 months)", value: "urgent" }, { label: "Standard (2–4 months)", value: "standard" }, { label: "Flexible", value: "flexible" }] },
    ],
  },
  {
    id: "estimator_ai",
    name: "AI & Automation Estimator",
    description: "Let's identify the right automation approach.",
    steps: [
      { id: "goal", question: "What's the primary goal?", options: [{ label: "Automate repetitive tasks", value: "workflow" }, { label: "Build a chatbot or assistant", value: "chatbot" }, { label: "Analyse data & generate insights", value: "analytics" }, { label: "Process documents automatically", value: "documents" }, { label: "Something else", value: "other" }] },
      { id: "volume", question: "What's the volume of work you want to automate?", options: [{ label: "A few tasks per day", value: "low" }, { label: "Dozens of tasks per day", value: "medium" }, { label: "Hundreds or more per day", value: "high" }] },
      { id: "existing", question: "Do you have existing systems this needs to connect to?", options: [{ label: "Yes — CRM, ERP, or other tools", value: "yes" }, { label: "No — starting fresh", value: "no" }, { label: "Not sure yet", value: "unsure" }] },
      { id: "timeline", question: "When do you need this?", options: [{ label: "As soon as possible", value: "urgent" }, { label: "Within 2–3 months", value: "standard" }, { label: "Flexible", value: "flexible" }] },
    ],
  },
  {
    id: "estimator_hardware",
    name: "Hardware Requirement Estimator",
    description: "Let's figure out your hardware needs.",
    steps: [
      { id: "type", question: "What hardware do you need?", options: [{ label: "Laptops / Desktops", value: "computers" }, { label: "Servers & Storage", value: "servers" }, { label: "Networking Equipment", value: "networking" }, { label: "CCTV / Surveillance", value: "cctv" }, { label: "Biometric Systems", value: "biometric" }, { label: "Complete IT Setup", value: "complete" }] },
      { id: "quantity", question: "How many units or how large is the deployment?", options: [{ label: "1–10 units", value: "small" }, { label: "10–50 units", value: "medium" }, { label: "50–200 units", value: "large" }, { label: "200+ units", value: "enterprise" }] },
      { id: "services", question: "Do you need additional services?", options: [{ label: "Just hardware procurement", value: "procurement" }, { label: "Procurement + installation", value: "install" }, { label: "Full setup including networking", value: "full" }, { label: "Ongoing AMC / maintenance", value: "amc" }] },
      { id: "timeline", question: "When do you need delivery?", options: [{ label: "Within a week", value: "urgent" }, { label: "Within a month", value: "standard" }, { label: "Planning ahead", value: "flexible" }] },
    ],
  },
  {
    id: "estimator_enterprise",
    name: "Enterprise Software Estimator",
    description: "Let's scope your enterprise platform.",
    steps: [
      { id: "type", question: "What type of enterprise system do you need?", options: [{ label: "ERP (Enterprise Resource Planning)", value: "erp" }, { label: "CRM (Customer Relationship Management)", value: "crm" }, { label: "Internal Portal / Dashboard", value: "portal" }, { label: "Inventory Management", value: "inventory" }, { label: "Custom Management System", value: "custom" }] },
      { id: "users", question: "How many users will the system support?", options: [{ label: "Under 50", value: "small" }, { label: "50–200", value: "medium" }, { label: "200–1000", value: "large" }, { label: "1000+", value: "enterprise" }] },
      { id: "integrations", question: "Does it need to integrate with existing systems?", options: [{ label: "Yes — accounting, HR, etc.", value: "yes" }, { label: "No — standalone system", value: "no" }, { label: "Not sure yet", value: "unsure" }] },
      { id: "timeline", question: "What's your expected timeline?", options: [{ label: "3–6 months", value: "standard" }, { label: "6–12 months", value: "extended" }, { label: "Flexible", value: "flexible" }] },
    ],
  },
];

// ---------------------------------------------------------------------------
// Welcome message
// ---------------------------------------------------------------------------
export const welcomeMessage = {
  text: "Hello 👋\n\nWelcome to SIMPLEIN Solutions.\n\nI'm your digital technology consultant. I can help you explore our services, understand our approach, and guide you toward the right solution.\n\nWhat brings you here today?",
  suggestions: ["Explore Services", "Web Development", "Mobile Apps", "AI & Automation", "IT Hardware", "Get a Quote", "Contact Us"],
};
