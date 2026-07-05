import { LeadInfo } from "./Storage";

export class LeadEngine {
  static extractSignals(message: string, currentLead: LeadInfo): LeadInfo {
    const lead = { ...currentLead };
    const lower = message.toLowerCase();

    // Industry detection
    if (/(healthcare|medical|hospital)/.test(lower)) lead.industry = "Healthcare";
    else if (/(education|school|university)/.test(lower)) lead.industry = "Education";
    else if (/(retail|ecommerce|shop)/.test(lower)) lead.industry = "Retail";
    else if (/(manufacturing|factory)/.test(lower)) lead.industry = "Manufacturing";

    // Size detection
    if (/(small|startup|solo)/.test(lower)) lead.size = "Small / Startup";
    else if (/(medium|mid-size)/.test(lower)) lead.size = "Mid-size";
    else if (/(large|enterprise|corporate)/.test(lower)) lead.size = "Enterprise";

    // Timeline detection
    if (/(urgent|asap|immediately|rush)/.test(lower)) lead.timeline = "Urgent";
    else if (/(1|2|3)\s*months?/.test(lower)) lead.timeline = "1–3 months";
    else if (/(flexible|no rush)/.test(lower)) lead.timeline = "Flexible";

    // Buying signal detection
    if (/(quote|meeting|contact|call|start|price|cost)/.test(lower)) {
       lead.leadScore = "High"; // Force high score on buying intent
    }

    this.calculateScore(lead);
    return lead;
  }

  static generateSummary(lead: LeadInfo): string {
    return `Project Scope:\n• Industry: ${lead.industry || "Not specified"}\n• Size: ${lead.size || "Not specified"}\n• Timeline: ${lead.timeline || "Not specified"}`;
  }

  static calculateScore(lead: LeadInfo) {
    let score = 0;
    if (lead.industry) score += 20;
    if (lead.size) score += 30;
    if (lead.timeline) score += 20;
    if (lead.services && lead.services.length > 0) score += 30;

    if (score > 80) lead.leadScore = "High";
    else if (score > 40) lead.leadScore = "Medium";
    else lead.leadScore = "Low";
  }
}
