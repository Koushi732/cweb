import { SearchIndex } from "./SearchIndex";
import { ConversationContext } from "./Storage";

export interface IntentResult {
  primaryIntent: string;
  confidence: number;
  data: any;
}

export class IntentEngine {
  static async resolveIntent(message: string, context: ConversationContext): Promise<IntentResult> {
    const results = await SearchIndex.search(message);
    
    if (results.length === 0) {
      return { primaryIntent: "unknown", confidence: 0, data: null };
    }

    const topMatch = results[0];
    let confidence = Math.min(topMatch.score * 20, 100); // 0-100 scale

    // Boost confidence if it matches current topic
    if (context.activeTopic === topMatch.id) {
      confidence = Math.min(confidence + 15, 100);
    }

    return {
      primaryIntent: topMatch.type,
      confidence,
      data: topMatch.data,
    };
  }
}
