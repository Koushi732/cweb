export interface Differentiator {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const differentiators: Differentiator[] = [
  {
    id: "business-first",
    title: "Business-First Approach",
    description: "We begin by understanding your business objectives before recommending technology. We build solutions that solve business problems rather than simply delivering software.",
    icon: "BarChart",
  },
  {
    id: "end-to-end",
    title: "End-to-End Technology Partner",
    description: "We support you throughout the complete lifecycle: consultation, planning, design, development, deployment, maintenance, and long-term support. We are a long-term technology partner, not a one-time vendor.",
    icon: "Repeat",
  },
  {
    id: "modern-tech",
    title: "Modern Technology Stack",
    description: "We use modern, battle-tested technologies that are scalable, secure, and maintainable. No outdated legacy systems.",
    icon: "Layers",
  },
  {
    id: "custom-solutions",
    title: "Custom Solutions",
    description: "Every business is unique. We do not believe in one-size-fits-all software. Every solution is meticulously tailored to your specific requirements.",
    icon: "Code2",
  },
  {
    id: "quality-engineering",
    title: "Quality Engineering",
    description: "Our development philosophy centers on clean architecture, modular code, scalable systems, performance optimization, and strict security best practices.",
    icon: "Shield",
  },
  {
    id: "transparent-communication",
    title: "Transparent Communication",
    description: "You receive regular progress updates, milestone reviews, clear timelines, honest communication, and collaborative decision-making at every step.",
    icon: "CheckCircle2",
  },
  {
    id: "long-term-support",
    title: "Long-Term Support",
    description: "Deployment is not the end of the project. We continue helping clients through ongoing maintenance, feature enhancements, technical support, and future scaling.",
    icon: "Settings",
  },
];
