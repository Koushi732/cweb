import { ConversationContext, ChatComponent } from "./Storage";
import { IntentEngine } from "./IntentEngine";
import { LeadEngine } from "./LeadEngine";
import { RecommendationEngine } from "./RecommendationEngine";
import { buildServiceResponse } from "../templates/serviceResponse";
import { buildClarificationResponse } from "../templates/clarificationResponse";
import { serviceMetadata } from "../knowledge/services";

export interface ChatResponse {
  text: string;
  components?: ChatComponent[];
  suggestions?: string[];
  actions?: string[];
  estimator?: any;
}

export class ConversationEngine {
  static async processMessage(
    message: string, 
    context: ConversationContext
  ): Promise<{ response: ChatResponse, newContext: ConversationContext }> {
    // 1. Update Lead State
    const updatedLead = LeadEngine.extractSignals(message, context.lead);
    let newContext = { ...context, lead: updatedLead, turnCount: context.turnCount + 1 };
    
    // 2. Stage 3 Lead Capture Check (Waiting for details)
    if (newContext.leadCaptureStage === 3) {
      if (message === "Contact submitted") {
         return {
           response: { text: "Thinking...\n✓ Details received.\n---\nThank you. I have captured your details. One of our senior consultants will reach out to you shortly." },
           newContext: { ...newContext, leadCaptureStage: 1, visitorStage: "Ready to Contact" }
         };
      }
    }

    // 2.5 Stage 2 Lead Capture Check (High Score -> Generate Value)
    if (newContext.leadCaptureStage === 1 && newContext.lead.leadScore === "High") {
       newContext.leadCaptureStage = 3; // Jump to stage 3 to ask for details
       const summary = LeadEngine.generateSummary(newContext.lead);
       return {
         response: {
           text: `Thinking...\n✓ Generating project summary...\n---\nBased on our conversation, here is a summary of your requirements:\n\n${summary}\n\nWould you like me to arrange a consultation with our team?`,
           components: [{ type: "LeadForm", props: {} }],
         },
         newContext
       };
    }

    // 3. Resolve Intent
    const intent = await IntentEngine.resolveIntent(message, newContext);
    
    // 3. Progressive Flow (Consultation First Rule)
    // If the user hasn't provided industry or timeline, we intercept the flow before dumping a massive service description
    if (intent.primaryIntent === "service" && (!newContext.lead.industry || !newContext.lead.timeline)) {
      if (newContext.activeTopic && intent.data.id !== newContext.activeTopic) {
        // Conversation Recovery: They switched topics abruptly
        newContext.savedTopics = [...(newContext.savedTopics || []), newContext.activeTopic];
      }
      newContext.activeTopic = intent.data.id;
      return { response: buildClarificationResponse(intent.primaryIntent, newContext.activeTopic), newContext };
    }

    // 4. Fallback / Low Confidence
    if (intent.confidence < 60) {
      return {
        response: {
          text: "Thinking...\n✓ Processing request...\n---\nI want to make sure I understand correctly. Are you looking for a specific service or hardware?",
          suggestions: ["Web Development", "Hardware", "Contact Sales"]
        },
        newContext
      };
    }

    // 5. Build Response based on Intent Type
    let response: ChatResponse = { text: "I'm still learning." };
    if (intent.primaryIntent === "service") {
      newContext.activeTopic = intent.data.id;
      const meta = serviceMetadata[intent.data.id];
      if (meta) {
        response = buildServiceResponse(intent.data, meta);
        // Add conversation recovery text if we had a saved topic
        if (newContext.savedTopics && newContext.savedTopics.length > 0) {
           const oldTopic = newContext.savedTopics.pop();
           response.text = `Thinking...\n✓ Returning to previous discussion...\n---\nWe can certainly continue with ${intent.data.title}. But I remember we were previously discussing ${oldTopic}. We can always return to that later.\n\n` + response.text.replace("Thinking...\n", "");
        }
      } else {
        response.text = intent.data.description;
      }
    } else if (intent.primaryIntent === "faq") {
      response = { text: `Thinking...\n✓ Finding answer...\n---\n${intent.data.answer}`, suggestions: ["More Services", "Get a Quote"] };
    } else if (intent.primaryIntent === "hardware") {
      response = { text: `Thinking...\n✓ Analyzing hardware catalog...\n---\n${intent.data.description}`, suggestions: intent.data.suggestedQuestions };
    }

    // 5. Inject Dynamic Recommendations (if any)
    const recs = RecommendationEngine.getRecommendations(newContext);
    if (!response.suggestions || response.suggestions.length < 3) {
      response.suggestions = [...(response.suggestions || []), ...recs];
    }

    // 6. Summarization (Every 10 turns)
    if (newContext.turnCount % 10 === 0) {
      newContext.goal = `User is interested in ${newContext.activeTopic || "services"}.`;
    }

    return { response, newContext };
  }
}
