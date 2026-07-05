import { LeadInfo } from "./Storage";

export interface PricingEstimate {
  complexity: "Low" | "Medium" | "High" | "Enterprise";
  estimatedTimeline: string;
  budgetRange: string;
}

export class PricingEngine {
  static estimate(lead: LeadInfo): PricingEstimate {
    let complexity = 1;
    if (lead.size === "Enterprise") complexity += 2;
    if (lead.size === "Mid-size") complexity += 1;
    if (lead.services?.includes("custom-software")) complexity += 2;
    if (lead.services?.includes("enterprise-systems")) complexity += 3;

    if (complexity >= 5) {
      return { complexity: "Enterprise", estimatedTimeline: "4-8 months", budgetRange: "Enterprise Custom Quote" };
    } else if (complexity >= 3) {
      return { complexity: "High", estimatedTimeline: "2-4 months", budgetRange: "Medium-High Range" };
    } else if (complexity >= 2) {
      return { complexity: "Medium", estimatedTimeline: "4-8 weeks", budgetRange: "Standard Range" };
    } else {
      return { complexity: "Low", estimatedTimeline: "2-4 weeks", budgetRange: "Startup/Entry Range" };
    }
  }
}
