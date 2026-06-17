export interface FAQItem {
  question: string;
  answer: string;
}

export const generalFAQs: FAQItem[] = [
  {
    question: "What services does SimpleIn Solutions offer?",
    answer: "We offer comprehensive IT solutions including Custom Software Development, Web & Mobile App Development, Cloud Infrastructure, DevOps, Cybersecurity, AI Solutions, IT Consulting, and IT Hardware Sales & Procurement.",
  },
  {
    question: "How do you ensure the quality of your deliverables?",
    answer: "We follow industry best practices including Agile development methodologies, comprehensive code reviews, automated testing (unit, integration, and end-to-end), continuous integration/delivery pipelines, and thorough QA processes at every stage.",
  },
  {
    question: "What is your typical project timeline?",
    answer: "Project timelines vary based on complexity and scope. A typical MVP takes 8-12 weeks, while enterprise projects range from 3-9 months. We provide detailed timelines during our discovery phase and maintain transparency throughout.",
  },
  {
    question: "Do you offer post-launch support and maintenance?",
    answer: "Absolutely. We offer flexible support and maintenance packages including proactive monitoring, bug fixes, security updates, performance optimization, and feature enhancements. Our AMC contracts ensure your systems run at peak performance.",
  },
  {
    question: "Can you work with our existing technology stack?",
    answer: "Yes, our team has expertise across a wide range of technologies and frameworks. We can integrate with your existing systems, extend current applications, or recommend modernization paths when beneficial.",
  },
  {
    question: "How do you handle data security and privacy?",
    answer: "Security is built into every phase of our process. We follow OWASP guidelines, implement encryption at rest and in transit, conduct regular security audits, and ensure compliance with relevant standards (GDPR, HIPAA, SOC 2, etc.).",
  },
];

export const serviceFAQs: FAQItem[] = [
  {
    question: "What technologies do you specialize in?",
    answer: "Our core expertise spans the modern web, mobile, and cloud ecosystems. We specialize in Frontend (React.js, Next.js, Tailwind CSS), Backend (Node.js, Python, FastAPI), Mobile (Flutter), Database (PostgreSQL, Supabase), and Cloud/DevOps (Docker, Vercel, GitHub Actions). We also have extensive experience with AI & Automation using OpenAI APIs and Python-based workflow automation tools.",
  },
  {
    question: "Do you provide dedicated development teams?",
    answer: "Yes, we offer dedicated team models where our developers work exclusively on your project as an extension of your in-house team, with daily standups, sprint planning, and transparent reporting.",
  },
  {
    question: "What is your engagement model?",
    answer: "We operate on a custom consultation and quotation model. Every business has unique requirements, so instead of fixed pricing packages, we provide a free initial consultation, requirement analysis, and a tailored proposal to ensure you get exactly what you need.",
  },
];

export const hardwareFAQs: FAQItem[] = [
  {
    question: "Do you provide hardware installation services?",
    answer: "Yes, we provide end-to-end hardware services including procurement, configuration, installation, data migration, network setup, and user training. We also offer ongoing maintenance contracts.",
  },
  {
    question: "What brands do you supply?",
    answer: "We supply a wide range of enterprise-grade hardware from leading global manufacturers. We focus on sourcing the right equipment tailored to your specific performance, security, and budgetary requirements.",
  },
  {
    question: "Do you offer Annual Maintenance Contracts (AMC)?",
    answer: "Yes, our AMC packages cover preventive maintenance, repairs, parts replacement, and priority support. We offer customizable plans to suit your hardware fleet and budget requirements.",
  },
];
