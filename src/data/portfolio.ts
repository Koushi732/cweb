export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  gradient: string;
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: "healthplus-telemedicine",
    title: "HealthPlus Telemedicine Platform",
    category: "Web Application",
    categorySlug: "web",
    description: "A comprehensive telemedicine platform connecting patients with healthcare providers through video consultations, prescription management, and health tracking.",
    challenge: "The client needed a HIPAA-compliant platform that could handle 10,000+ concurrent video sessions with real-time health data synchronization.",
    solution: "We built a microservices-based platform using React, Node.js, and WebRTC with end-to-end encryption, integrated with major EHR systems.",
    results: ["50,000+ monthly active patients", "99.9% platform uptime", "35% reduction in patient wait times", "4.8★ app store rating"],
    technologies: ["React", "Node.js", "WebRTC", "PostgreSQL", "AWS", "Docker"],
    image: "/portfolio/health.svg",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    id: "retailmax-ecommerce",
    title: "RetailMax E-Commerce Platform",
    category: "E-Commerce",
    categorySlug: "web",
    description: "A high-performance e-commerce platform with real-time inventory management, AI-powered recommendations, and omnichannel order fulfillment.",
    challenge: "The retailer needed a platform that could handle 500K+ products, flash sales with 100K concurrent users, and integrate with 50+ warehouse locations.",
    solution: "We built a headless commerce platform with Next.js, GraphQL, and Elasticsearch, deployed on a multi-region cloud infrastructure.",
    results: ["200% increase in online sales", "3x faster page load times", "40% higher conversion rate", "500K+ products managed"],
    technologies: ["Next.js", "GraphQL", "Elasticsearch", "Redis", "Stripe", "AWS"],
    image: "/portfolio/retail.svg",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    id: "finedge-banking",
    title: "FinEdge Digital Banking Suite",
    category: "Enterprise",
    categorySlug: "enterprise",
    description: "A digital banking platform with mobile-first design, real-time transaction processing, and advanced fraud detection powered by machine learning.",
    challenge: "Migrating a legacy banking system to a modern, cloud-native architecture while maintaining 24/7 availability and regulatory compliance.",
    solution: "We implemented a event-driven microservices architecture with real-time fraud detection using TensorFlow and secure API gateway.",
    results: ["$200K annual infrastructure savings", "Zero downtime during migration", "95% fraud detection accuracy", "2M+ transactions/day processed"],
    technologies: ["React Native", "Java", "Kafka", "TensorFlow", "PostgreSQL", "Azure"],
    image: "/portfolio/finance.svg",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    id: "buildpro-iot",
    title: "BuildPro Smart Factory IoT",
    category: "IoT / Cloud",
    categorySlug: "cloud",
    description: "An IoT-powered smart factory solution with real-time monitoring, predictive maintenance, and production analytics dashboards.",
    challenge: "Connecting 5,000+ sensors across 3 manufacturing plants with real-time data processing and predictive failure alerts.",
    solution: "We deployed an edge computing solution with AWS IoT Core, time-series databases, and ML-based anomaly detection.",
    results: ["25% reduction in downtime", "15% increase in production efficiency", "5,000+ sensors connected", "Real-time dashboards for 3 plants"],
    technologies: ["AWS IoT", "Python", "TimescaleDB", "React", "TensorFlow", "MQTT"],
    image: "/portfolio/iot.svg",
    gradient: "from-orange-500 to-red-600",
  },
  {
    id: "edulearn-lms",
    title: "EduLearn Learning Management System",
    category: "Web Application",
    categorySlug: "web",
    description: "An AI-powered learning management system with adaptive learning paths, live virtual classrooms, and comprehensive analytics.",
    challenge: "Building a platform that scales to 100+ institutions with personalized learning experiences and real-time collaboration features.",
    solution: "We created a multi-tenant SaaS platform with AI-driven content recommendations, WebRTC-based classrooms, and comprehensive reporting.",
    results: ["100+ institutions onboarded", "500K+ students served", "40% improvement in learning outcomes", "98% user satisfaction score"],
    technologies: ["Next.js", "Python", "OpenAI", "WebRTC", "MongoDB", "Vercel"],
    image: "/portfolio/education.svg",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    id: "logisync-fleet",
    title: "LogiSync Fleet Management",
    category: "Mobile App",
    categorySlug: "mobile",
    description: "A comprehensive fleet management mobile app with GPS tracking, route optimization, driver management, and real-time delivery updates.",
    challenge: "Managing 2,000+ vehicles across India with real-time tracking, fuel optimization, and driver behavior monitoring.",
    solution: "We built native mobile apps with React Native, integrated with custom GPS hardware, and deployed ML-based route optimization.",
    results: ["30% fuel cost reduction", "2,000+ vehicles tracked", "20% faster delivery times", "Real-time tracking for 500+ clients"],
    technologies: ["React Native", "Node.js", "Google Maps API", "Redis", "PostgreSQL", "Firebase"],
    image: "/portfolio/logistics.svg",
    gradient: "from-amber-500 to-orange-600",
  },
];

export const portfolioCategories = [
  { name: "All", slug: "all" },
  { name: "Web", slug: "web" },
  { name: "Mobile", slug: "mobile" },
  { name: "Cloud", slug: "cloud" },
  { name: "Enterprise", slug: "enterprise" },
];
