export const techCategories = [
  {
    category: "Frontend",
    technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "Flutter"],
  },
  {
    category: "Backend",
    technologies: ["Node.js", "Express.js", "Python", "FastAPI"],
  },
  {
    category: "Mobile",
    technologies: ["Flutter", "Dart"],
  },
  {
    category: "Database",
    technologies: ["PostgreSQL", "MySQL", "SQLite", "Supabase"],
  },
  {
    category: "AI & Automation",
    technologies: ["OpenAI APIs", "Ollama", "AI Agents", "Workflow Automation", "n8n", "Python Automation"],
  },
  {
    category: "Cloud & Deployment",
    technologies: ["Vercel", "Cloudflare", "Docker", "GitHub", "GitHub Actions"],
  },
  {
    category: "Development Tools",
    technologies: ["Git", "VS Code", "Claude Code", "AntiGravity", "Postman", "Figma"],
  },
];

export const allTechnologies = Array.from(new Set(techCategories.flatMap(c => c.technologies)));
