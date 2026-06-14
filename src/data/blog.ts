export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  date: string;
  readTime: string;
  author: string;
  featured: boolean;
  gradient: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-ai-enterprise",
    title: "The Future of AI in Enterprise: Trends to Watch in 2025",
    excerpt: "Explore how artificial intelligence is reshaping enterprise operations, from automated decision-making to predictive analytics, and what businesses need to prepare for.",
    category: "Artificial Intelligence",
    categorySlug: "ai",
    date: "2025-01-15",
    readTime: "8 min read",
    author: "SimpleIn Solutions",
    featured: true,
    gradient: "from-purple-600 to-blue-600",
  },
  {
    id: "cloud-migration-guide",
    title: "Complete Guide to Cloud Migration: Strategy, Planning & Execution",
    excerpt: "A comprehensive guide covering everything from assessment and planning to execution and optimization for successful cloud migration projects.",
    category: "Cloud Computing",
    categorySlug: "cloud",
    date: "2025-01-10",
    readTime: "12 min read",
    author: "SimpleIn Solutions",
    featured: false,
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    id: "cybersecurity-best-practices",
    title: "10 Cybersecurity Best Practices Every Business Must Follow in 2025",
    excerpt: "With cyber threats evolving rapidly, learn the essential security practices that protect your business data, applications, and reputation.",
    category: "Cybersecurity",
    categorySlug: "cybersecurity",
    date: "2025-01-05",
    readTime: "6 min read",
    author: "SimpleIn Solutions",
    featured: false,
    gradient: "from-red-600 to-orange-600",
  },
  {
    id: "react-native-vs-flutter",
    title: "React Native vs Flutter: Which Framework to Choose in 2025?",
    excerpt: "A detailed comparison of the two leading cross-platform mobile development frameworks, covering performance, ecosystem, and real-world use cases.",
    category: "Mobile Development",
    categorySlug: "mobile",
    date: "2024-12-28",
    readTime: "10 min read",
    author: "SimpleIn Solutions",
    featured: false,
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    id: "devops-transformation",
    title: "How DevOps Transformation Accelerates Software Delivery",
    excerpt: "Learn how implementing DevOps practices and CI/CD pipelines can reduce deployment time by 50% and improve software quality.",
    category: "DevOps",
    categorySlug: "devops",
    date: "2024-12-20",
    readTime: "7 min read",
    author: "SimpleIn Solutions",
    featured: false,
    gradient: "from-green-600 to-emerald-600",
  },
  {
    id: "hardware-procurement-tips",
    title: "IT Hardware Procurement: 7 Tips for Smart Enterprise Purchasing",
    excerpt: "Strategic hardware procurement can save enterprises thousands. Learn the best practices for negotiating, sourcing, and managing IT hardware at scale.",
    category: "IT Hardware",
    categorySlug: "hardware",
    date: "2024-12-15",
    readTime: "5 min read",
    author: "SimpleIn Solutions",
    featured: false,
    gradient: "from-amber-600 to-yellow-600",
  },
];

export const blogCategories = [
  { name: "All", slug: "all" },
  { name: "Artificial Intelligence", slug: "ai" },
  { name: "Cloud Computing", slug: "cloud" },
  { name: "Cybersecurity", slug: "cybersecurity" },
  { name: "Mobile Development", slug: "mobile" },
  { name: "DevOps", slug: "devops" },
  { name: "IT Hardware", slug: "hardware" },
];
