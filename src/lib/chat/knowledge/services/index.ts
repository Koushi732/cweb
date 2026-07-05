export const version = "1.0.0";
export const lastUpdated = new Date().toISOString();

export interface ServiceMetadata {
  id: string;
  synonyms: string[];
  upsells: string[];
  crossSells: string[];
  idealCustomer: string;
  suggestedQuestions: string[];
}

// Extends the base services from src/data/services.ts
export const serviceMetadata: Record<string, ServiceMetadata> = {
  "custom-software": {
    id: "custom-software",
    synonyms: ["bespoke software", "tailored software", "custom application", "erp", "crm"],
    upsells: ["enterprise-systems", "ai-automation"],
    crossSells: ["cloud-devops", "digital-marketing"],
    idealCustomer: "Medium to large enterprises looking to digitise manual workflows or replace legacy off-the-shelf software.",
    suggestedQuestions: [
      "Custom Software Timeline",
      "Custom Software Cost",
      "Maintenance & Support",
      "Development Process",
    ],
  },
  "web-development": {
    id: "web-development",
    synonyms: ["website", "web app", "landing page", "ecommerce", "portal"],
    upsells: ["custom-software", "digital-marketing"],
    crossSells: ["cloud-devops"],
    idealCustomer: "Any business needing a professional online presence, customer portal, or e-commerce store.",
    suggestedQuestions: [
      "Website Pricing",
      "Website Timeline",
      "Hosting & Domain",
      "SEO & Marketing",
    ],
  },
  "mobile-development": {
    id: "mobile-development",
    synonyms: ["mobile app", "ios app", "android app", "flutter app", "smartphone app"],
    upsells: ["custom-software"],
    crossSells: ["cloud-devops", "web-development"],
    idealCustomer: "Businesses with customer-facing services or internal field teams requiring mobile access.",
    suggestedQuestions: [
      "Mobile App Cost",
      "iOS vs Android",
      "App Timeline",
      "App Store Submission",
    ],
  },
  "ai-automation": {
    id: "ai-automation",
    synonyms: ["artificial intelligence", "machine learning", "automation", "chatbot", "workflow automation"],
    upsells: ["enterprise-systems"],
    crossSells: ["custom-software", "cloud-devops"],
    idealCustomer: "Data-heavy or repetitive-task-heavy businesses wanting to increase efficiency.",
    suggestedQuestions: [
      "What can be automated?",
      "AI Integration Cost",
      "Data Security",
    ],
  },
  "cloud-devops": {
    id: "cloud-devops",
    synonyms: ["cloud hosting", "aws", "azure", "deployment", "server migration", "ci/cd"],
    upsells: ["enterprise-systems"],
    crossSells: ["networking-security", "web-development"],
    idealCustomer: "Companies experiencing scaling issues or needing higher uptime and automated deployments.",
    suggestedQuestions: [
      "Cloud Migration Process",
      "Cloud Hosting Cost",
      "Security & Backups",
    ],
  },
};
