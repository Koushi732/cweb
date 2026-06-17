export interface ProcessStep {
  step: number;
  title: string;
  description: string;
  activities: string[];
  deliverable: string;
  icon: string;
}

export const engagementProcess: ProcessStep[] = [
  {
    step: 1,
    title: "Discovery & Consultation",
    description: "Every project begins with understanding the client's business.",
    activities: [
      "Free initial consultation",
      "Understanding business objectives",
      "Requirement gathering",
      "Identifying business challenges",
      "Technical feasibility discussion",
      "Budget discussion",
      "Timeline estimation",
      "Defining project scope"
    ],
    deliverable: "A clear understanding of business goals and project requirements before development begins.",
    icon: "Search"
  },
  {
    step: 2,
    title: "Planning & Solution Architecture",
    description: "Once requirements are finalized, we prepare the project roadmap.",
    activities: [
      "Solution architecture",
      "Technology selection",
      "Feature prioritization",
      "Database planning",
      "API planning",
      "UI/UX planning",
      "Project milestones",
      "Delivery roadmap"
    ],
    deliverable: "A structured implementation plan approved before development starts.",
    icon: "Map"
  },
  {
    step: 3,
    title: "UI/UX Design",
    description: "Before writing production code, we design the user experience.",
    activities: [
      "Wireframes",
      "UI mockups",
      "User flow planning",
      "Responsive design",
      "Client feedback",
      "Design revisions",
      "Final approval"
    ],
    deliverable: "An approved design ready for development.",
    icon: "PenTool"
  },
  {
    step: 4,
    title: "Development",
    description: "Development follows a milestone-based approach with continuous communication.",
    activities: [
      "Clean architecture",
      "Modular development",
      "Git version control",
      "Regular progress updates",
      "Feature-based milestones",
      "Code reviews",
      "Secure coding practices",
      "Performance-focused implementation"
    ],
    deliverable: "Working software delivered incrementally throughout the project.",
    icon: "Code2"
  },
  {
    step: 5,
    title: "Testing & Quality Assurance",
    description: "Every feature is tested before deployment.",
    activities: [
      "Functional testing",
      "UI testing",
      "Responsive testing",
      "Cross-browser compatibility",
      "Performance optimization",
      "Bug fixing",
      "Final client review"
    ],
    deliverable: "A stable and production-ready application.",
    icon: "CheckSquare"
  },
  {
    step: 6,
    title: "Deployment",
    description: "After client approval, the solution is deployed.",
    activities: [
      "Production deployment",
      "Domain configuration",
      "Hosting configuration",
      "SSL setup",
      "Performance optimization",
      "Final verification",
      "Go-live support"
    ],
    deliverable: "A fully deployed and operational solution.",
    icon: "Rocket"
  },
  {
    step: 7,
    title: "Maintenance & Long-Term Support",
    description: "Our relationship continues after deployment.",
    activities: [
      "Bug fixes",
      "Security updates",
      "Performance improvements",
      "Feature enhancements",
      "Technical assistance",
      "Application monitoring",
      "Continuous improvements"
    ],
    deliverable: "To help clients maintain, improve, and scale their digital solutions over time.",
    icon: "Settings"
  }
];
