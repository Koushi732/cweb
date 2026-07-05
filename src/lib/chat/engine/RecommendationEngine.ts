import { ConversationContext } from "./Storage";
import { serviceMetadata } from "../knowledge/services";

export class RecommendationEngine {
  static getRecommendations(context: ConversationContext): string[] {
    const recommendations = new Set<string>();

    if (context.activeTopic && serviceMetadata[context.activeTopic]) {
      const meta = serviceMetadata[context.activeTopic];
      meta.upsells.forEach(r => recommendations.add(r));
      meta.crossSells.forEach(r => recommendations.add(r));
    }

    if (context.currentIndustry) {
      if (context.currentIndustry === "Healthcare") recommendations.add("custom-software");
      if (context.currentIndustry === "Retail") recommendations.add("web-development");
    }

    // Default fallbacks if none
    if (recommendations.size === 0) {
      recommendations.add("web-development");
      recommendations.add("cloud-devops");
    }

    return Array.from(recommendations).slice(0, 3);
  }
}
