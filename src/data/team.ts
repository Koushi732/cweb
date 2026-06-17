export const teamMembers = [
  {
    name: "Leadership Team",
    description: "Our experienced leadership team brings decades of combined experience in technology, business strategy, and innovation.",
  },
];

export const coreValues = [
  { title: "Client Success First", description: "Every solution should solve real business problems and create measurable impact.", icon: "HeartHandshake" },
  { title: "Innovation", description: "Continuously adopt modern technologies, AI, and automation to deliver better solutions.", icon: "Lightbulb" },
  { title: "Quality", description: "Maintain high engineering standards, clean code, security, performance, and reliability.", icon: "Shield" },
  { title: "Transparency", description: "Communicate honestly with clients throughout every project.", icon: "Eye" },
  { title: "Continuous Improvement", description: "Learn, improve, and evolve our processes, technology, and services.", icon: "Target" },
];

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface StatItem {
  label: string;
  value: number;
  suffix?: string;
}

export const milestones: MilestoneItem[] = [];
export const stats: StatItem[] = [];
