export interface PortfolioProject {
  id: string;
  title: string;
  slug: string;
  client: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  challenge: string;
  solution: string;
  technologies: string[];
  results: string[];
  image: string;
  gradient?: string;
  description?: string;
}

export const portfolioProjects: PortfolioProject[] = [];

export const portfolioCategories = [
  { name: "All", slug: "all" },
];
