import { fuzzyMatch, tokenize } from "./Utils";
import { localProvider } from "../provider/localProvider";
import { serviceMetadata } from "../knowledge/services";
import { faqDatabase } from "../faqDatabase";

export interface SearchResult {
  id: string;
  type: "service" | "hardware" | "faq" | "industry";
  score: number;
  data: any;
}

export class SearchIndex {
  static async search(query: string): Promise<SearchResult[]> {
    const tokens = tokenize(query);
    const results: SearchResult[] = [];

    // Search Services
    const services = await localProvider.getServices();
    services.forEach((svc) => {
      let score = 0;
      const meta = serviceMetadata[svc.id];
      if (meta) {
        meta.synonyms.forEach((syn) => {
          if (query.toLowerCase().includes(syn)) score += 3;
          tokens.forEach((t) => { if (fuzzyMatch(t, syn)) score += 1; });
        });
      }
      tokens.forEach((t) => {
        if (fuzzyMatch(t, svc.title.toLowerCase())) score += 2;
        if (svc.description.toLowerCase().includes(t)) score += 0.5;
      });
      if (score > 0) results.push({ id: svc.id, type: "service", score, data: svc });
    });

    // Search FAQs
    faqDatabase.forEach((faq) => {
      let score = 0;
      faq.tags.forEach((tag) => {
        if (query.toLowerCase().includes(tag)) score += 2;
        tokens.forEach((t) => { if (fuzzyMatch(t, tag)) score += 1; });
      });
      tokens.forEach((t) => {
        if (faq.question.toLowerCase().includes(t)) score += 1.5;
      });
      if (score > 0) results.push({ id: faq.id, type: "faq", score, data: faq });
    });

    return results.sort((a, b) => b.score - a.score);
  }
}
