// Base types from website data (src/data/*) to ensure strict typing when pulling from the CMS adapter

export interface BaseService {
  id: string;
  title: string;
  slug: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  technologies: string[];
}

export interface BaseHardwareCategory {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface BaseIndustry {
  id: string;
  title: string;
  slug: string;
  description: string;
  challenges?: string[];
  solutions?: string[];
}

export interface BaseCompanyInfo {
  name: string;
  about: string;
  mission: string;
  vision: string;
  differentiators: string[];
}

export interface KnowledgeProvider {
  getServices(): Promise<BaseService[]>;
  getHardwareCategories(): Promise<BaseHardwareCategory[]>;
  getIndustries(): Promise<BaseIndustry[]>;
  getCompanyInfo(): Promise<BaseCompanyInfo>;
}
