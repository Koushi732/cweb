import { ChatResponse } from "../engine/ConversationEngine";

const confidencePrefixes = [
  "To recommend the right solution, I need to understand a bit more about your business.",
  "I'd be happy to help with that. So I can provide an accurate answer, could you clarify one thing?",
  "Absolutely. Before I give you a massive list of options, let's narrow it down.",
];

export function buildClarificationResponse(intentType: string, activeTopic?: string): ChatResponse {
  const prefix = confidencePrefixes[Math.floor(Math.random() * confidencePrefixes.length)];
  
  let text = `${prefix}\n\nWhat industry are you operating in?`;
  let suggestions = ["Healthcare", "Retail", "Education", "Manufacturing", "Other"];

  if (activeTopic === "custom-software" || intentType === "service") {
    text = `${prefix}\n\nWhat is your approximate timeline for this project?`;
    suggestions = ["Urgent", "1-3 months", "Flexible", "Just researching"];
  }

  return {
    text: `Thinking...\n✓ Analyzing request...\n---\n${text}`,
    suggestions,
  };
}
