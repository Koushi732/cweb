export interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

export const jobPositions: JobPosition[] = [
  {
    id: "senior-react-developer",
    title: "Senior React Developer",
    department: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "5+ years",
    description: "We are looking for a Senior React Developer to build high-performance web applications and mentor junior developers.",
    responsibilities: [
      "Develop and maintain complex React applications",
      "Collaborate with designers and backend engineers",
      "Write clean, testable, and well-documented code",
      "Mentor junior developers and conduct code reviews",
      "Contribute to architecture decisions and technical roadmap",
    ],
    requirements: [
      "5+ years of experience with React.js",
      "Strong proficiency in TypeScript",
      "Experience with Next.js and server-side rendering",
      "Familiarity with state management (Redux, Zustand)",
      "Understanding of CI/CD pipelines",
    ],
  },
  {
    id: "fullstack-developer",
    title: "Full Stack Developer",
    department: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3+ years",
    description: "Join our team as a Full Stack Developer to build end-to-end solutions using modern web technologies.",
    responsibilities: [
      "Build full-stack web applications from concept to deployment",
      "Design and implement RESTful APIs and database schemas",
      "Collaborate with cross-functional teams to define and ship features",
      "Optimize applications for performance and scalability",
      "Participate in agile development processes",
    ],
    requirements: [
      "3+ years of full-stack development experience",
      "Proficiency in React, Node.js, and TypeScript",
      "Experience with SQL and NoSQL databases",
      "Understanding of cloud platforms (AWS/Azure/GCP)",
      "Strong problem-solving skills",
    ],
  },
  {
    id: "devops-engineer",
    title: "DevOps Engineer",
    department: "Infrastructure",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "4+ years",
    description: "We need a DevOps Engineer to build and maintain our CI/CD pipelines, cloud infrastructure, and monitoring systems.",
    responsibilities: [
      "Design and maintain CI/CD pipelines",
      "Manage cloud infrastructure on AWS and Azure",
      "Implement Infrastructure as Code using Terraform",
      "Set up monitoring, logging, and alerting systems",
      "Ensure security best practices across all environments",
    ],
    requirements: [
      "4+ years of DevOps experience",
      "Strong knowledge of AWS or Azure cloud services",
      "Experience with Docker, Kubernetes, and Terraform",
      "Proficiency in scripting (Python, Bash)",
      "Understanding of networking and security concepts",
    ],
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3+ years",
    description: "We are looking for a creative UI/UX Designer to craft beautiful, intuitive interfaces for our client projects.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement pixel-perfect designs",
      "Maintain and evolve design systems",
      "Stay current with design trends and best practices",
    ],
    requirements: [
      "3+ years of UI/UX design experience",
      "Proficiency in Figma and prototyping tools",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of front-end development concepts",
      "Excellent communication and presentation skills",
    ],
  },
  {
    id: "business-development-manager",
    title: "Business Development Manager",
    department: "Sales",
    location: "Hyderabad",
    type: "Full-time",
    experience: "5+ years",
    description: "Drive business growth by identifying new opportunities, building client relationships, and closing enterprise deals.",
    responsibilities: [
      "Identify and pursue new business opportunities",
      "Build and maintain relationships with enterprise clients",
      "Prepare proposals, presentations, and RFP responses",
      "Collaborate with technical teams on solution design",
      "Achieve quarterly and annual revenue targets",
    ],
    requirements: [
      "5+ years of B2B sales experience in IT services",
      "Proven track record of closing enterprise deals",
      "Strong understanding of IT services and solutions",
      "Excellent negotiation and presentation skills",
      "MBA preferred but not mandatory",
    ],
  },
];

export const benefits = [
  { title: "Competitive Salary", description: "Industry-leading compensation packages with annual revisions.", icon: "IndianRupee" },
  { title: "Health Insurance", description: "Comprehensive health coverage for you and your family.", icon: "Heart" },
  { title: "Flexible Work", description: "Remote-friendly culture with flexible working hours.", icon: "Home" },
  { title: "Learning Budget", description: "Annual learning allowance for courses, certifications, and conferences.", icon: "BookOpen" },
  { title: "Team Outings", description: "Regular team building activities, retreats, and celebrations.", icon: "Users" },
  { title: "Growth Path", description: "Clear career progression with mentorship and leadership opportunities.", icon: "TrendingUp" },
];
