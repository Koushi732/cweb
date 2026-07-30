/* eslint-disable @typescript-eslint/no-explicit-any */
export interface LeadInfo {
  id: string;
  createdAt: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  industry?: string;
  size?: string;
  timeline?: string;
  budget?: string;
  requirements?: string[];
  services?: string[];
  leadScore?: string;
  conversationSummary?: string;
}

export interface ChatComponent {
  type: "ServiceCard" | "TechGrid" | "ProcessTimeline" | "ComparisonTable" | "Pricing" | "Recommendation" | "LeadForm";
  props: any;
}

export interface ConversationContext {
  mode?: string;
  visitorStage?: string;
  lastIntentId?: string;
  activeTopic?: string;
  currentIndustry?: string;
  currentService?: string;
  recentQuestions?: string[];
  collectedDetails?: string[];
  goal?: string;
  lastRecommendation?: string;
  lead: LeadInfo;
  turnCount: number;
  estimatorId?: string;
  estimatorStep?: number;
  estimatorAnswers?: Record<string, string>;
  awaitingClarification?: string;
  savedTopics?: string[];
  leadCaptureStage?: 1 | 2 | 3;
}

export function createFreshContext(): ConversationContext {
  return {
    mode: "General Inquiry",
    visitorStage: "Browsing",
    recentQuestions: [],
    collectedDetails: [],
    lead: {
      id: `lead_${Date.now()}`,
      createdAt: new Date().toISOString(),
    },
    turnCount: 0,
    savedTopics: [],
    leadCaptureStage: 1,
  };
}

export function exportLeadToJSON(lead: LeadInfo): string {
  return JSON.stringify(lead, null, 2);
}

export function exportLeadToCSV(lead: LeadInfo): string {
  const keys = Object.keys(lead) as (keyof LeadInfo)[];
  const header = keys.join(",");
  const values = keys.map((k) => {
    const val = lead[k];
    if (Array.isArray(val)) return `"${val.join(";")}"`;
    if (typeof val === "string" && val.includes(",")) return `"${val}"`;
    return val || "";
  }).join(",");
  return `${header}\n${values}`;
}

export function triggerDownload(content: string, filename: string, type: string) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}
