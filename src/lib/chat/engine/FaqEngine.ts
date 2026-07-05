import { SearchIndex } from "./SearchIndex";

export class FaqEngine {
  static async findAnswer(question: string) {
    const results = await SearchIndex.search(question);
    const faqMatch = results.find(r => r.type === "faq");
    
    if (faqMatch && faqMatch.score > 3) {
      return faqMatch.data;
    }
    return null;
  }
}
