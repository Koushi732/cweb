/* eslint-disable @typescript-eslint/no-explicit-any */
import { KnowledgeProvider, BaseService, BaseHardwareCategory, BaseIndustry, BaseCompanyInfo } from "./index";

// Import directly from the website's data sources
import { services } from "@/data/services";
import { hardwareCategories } from "@/data/hardware";
import { industries } from "@/data/industries";
import { differentiators } from "@/data/differentiators";

class LocalKnowledgeProvider implements KnowledgeProvider {
  async getServices(): Promise<BaseService[]> {
    return services.map(s => ({
      id: s.id,
      title: s.title,
      slug: s.slug,
      shortDescription: s.shortDescription,
      description: s.description,
      benefits: s.benefits,
      technologies: s.technologies,
    }));
  }

  async getHardwareCategories(): Promise<BaseHardwareCategory[]> {
    return hardwareCategories.map(h => ({
      id: h.id,
      title: h.title,
      description: h.description,
      features: h.features,
    }));
  }

  async getIndustries(): Promise<BaseIndustry[]> {
    return industries.map(i => ({
      id: i.id,
      title: i.title,
      slug: (i as any).slug || i.id,
      description: i.description,
      // mapping website data if they have challenges/solutions
      challenges: (i as any).challenges || [],
      solutions: (i as any).solutions || [],
    }));
  }

  async getCompanyInfo(): Promise<BaseCompanyInfo> {
    return {
      name: "SIMPLEIN Solutions",
      about: "We are an enterprise IT service and technology company.",
      mission: "To make every service simple. We believe technology should empower businesses, not complicate them.",
      vision: "To become a trusted global technology partner known for building scalable, reliable, and beautifully designed digital solutions.",
      differentiators: differentiators.map(d => d.title),
    };
  }
}

export const localProvider = new LocalKnowledgeProvider();
