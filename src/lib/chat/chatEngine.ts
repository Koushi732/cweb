// ===========================================================================
// SIMPLEIN Solutions — Conversation Engine V3
// ===========================================================================
// Modular engine. To swap with an LLM, replace only `processMessage`.
// ===========================================================================

import {
  intents,
  serviceKnowledge,
  hardwareKnowledge,
  industryKnowledge,
  companyKnowledge,
  contactInfo,
  estimators,
  type ActionType,
  type Intent,
  type Estimator,
} from "./knowledgeBase";

// ---------------------------------------------------------------------------
// Public types
// ---------------------------------------------------------------------------
export interface ChatResponse {
  text: string;
  suggestions?: string[];
  actions?: ActionType[];
  estimator?: {
    id: string;
    stepIndex: number;
    question: string;
    options: { label: string; value: string }[];
  };
}

export interface LeadInfo {
  name?: string;
  company?: string;
  industry?: string;
  size?: string;
  timeline?: string;
  requirements?: string[];
}

export interface ConversationContext {
  lastIntentId?: string;
  /** Track the topic being discussed for context memory */
  activeTopic?: string;
  /** Collected lead qualification data */
  lead: LeadInfo;
  /** Number of substantive exchanges (for summary trigger) */
  turnCount: number;
  /** Estimator state */
  estimatorId?: string;
  estimatorStep?: number;
  estimatorAnswers?: Record<string, string>;
  /** Consultation mode: if the engine asked a clarifying question */
  awaitingClarification?: string;
}

export function createFreshContext(): ConversationContext {
  return { lead: {}, turnCount: 0 };
}

// ---------------------------------------------------------------------------
// Text utilities
// ---------------------------------------------------------------------------
function normalize(text: string): string {
  return text.toLowerCase().replace(/[^\w\s]/g, " ").replace(/\s+/g, " ").trim();
}

function tokenize(text: string): string[] {
  return normalize(text).split(" ").filter((w) => w.length > 1);
}

function levenshtein(a: string, b: string): number {
  const m = a.length, n = b.length;
  const dp: number[][] = Array.from({ length: m + 1 }, (_, i) =>
    Array.from({ length: n + 1 }, (_, j) => (i === 0 ? j : j === 0 ? i : 0))
  );
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      dp[i][j] = a[i - 1] === b[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
    }
  }
  return dp[m][n];
}

function fuzzyMatch(token: string, target: string): boolean {
  if (target.includes(token) || token.includes(target)) return true;
  if (token.length >= 4 && target.length >= 4) return levenshtein(token, target) <= 2;
  if (token.length >= 3) return levenshtein(token, target) <= 1;
  return false;
}

// ---------------------------------------------------------------------------
// Lead extraction — passively collects info from messages
// ---------------------------------------------------------------------------
function extractLeadInfo(message: string, existing: LeadInfo): LeadInfo {
  const lead = { ...existing };
  const lower = message.toLowerCase();

  // Industry detection
  const industryTerms: Record<string, string> = {
    healthcare: "Healthcare", hospital: "Healthcare", medical: "Healthcare",
    education: "Education", school: "Education", university: "Education",
    retail: "Retail", ecommerce: "Retail", "e-commerce": "Retail", shop: "Retail",
    manufacturing: "Manufacturing", factory: "Manufacturing",
    finance: "Finance", fintech: "Finance", banking: "Finance",
    "real estate": "Real Estate", property: "Real Estate",
    logistics: "Logistics", shipping: "Logistics",
    startup: "Startups",
  };
  for (const [term, industry] of Object.entries(industryTerms)) {
    if (lower.includes(term)) { lead.industry = industry; break; }
  }

  // Size detection
  if (/\b(small|startup|solo|freelance)\b/.test(lower)) lead.size = "Small / Startup";
  else if (/\b(medium|growing|mid-?size)\b/.test(lower)) lead.size = "Mid-size";
  else if (/\b(large|enterprise|corporate|big)\b/.test(lower)) lead.size = "Enterprise";

  // Timeline detection
  if (/\b(urgent|asap|immediately|rush|this week)\b/.test(lower)) lead.timeline = "Urgent";
  else if (/\b(1|2|3)\s*months?\b/.test(lower)) lead.timeline = "1–3 months";
  else if (/\b(flexible|no rush|no hurry)\b/.test(lower)) lead.timeline = "Flexible";

  return lead;
}

// ---------------------------------------------------------------------------
// Intent scoring
// ---------------------------------------------------------------------------
interface ScoredIntent { intent: Intent; score: number; }

function scoreIntents(userTokens: string[], rawInput: string, context: ConversationContext): ScoredIntent[] {
  const normalizedInput = normalize(rawInput);
  const scored: ScoredIntent[] = [];

  for (const intent of intents) {
    let score = 0;

    for (const kw of intent.keywords) {
      const nkw = normalize(kw);
      if (normalizedInput.includes(nkw)) { score += 4; continue; }
      for (const kt of nkw.split(" ")) {
        for (const ut of userTokens) {
          if (ut === kt) score += 2;
          else if (fuzzyMatch(ut, kt)) score += 1;
        }
      }
    }

    for (const syn of intent.synonyms) {
      const ns = normalize(syn);
      if (normalizedInput.includes(ns)) { score += 3; continue; }
      for (const st of ns.split(" ")) {
        for (const ut of userTokens) {
          if (ut === st) score += 1.5;
          else if (fuzzyMatch(ut, st)) score += 0.75;
        }
      }
    }

    // Context boost
    if (context.lastIntentId && intent.relatedIntents?.includes(context.lastIntentId)) {
      score *= 1.15;
    }

    if (score > 0) scored.push({ intent, score });
  }

  return scored.sort((a, b) => b.score - a.score);
}

// ---------------------------------------------------------------------------
// Response builders — consultant-style
// ---------------------------------------------------------------------------

function buildServiceResponse(knowledgeRef: string, ctx: ConversationContext): ChatResponse {
  const svc = serviceKnowledge.find((s) => s.id === knowledgeRef);
  if (!svc) return buildFallback();

  const lines: string[] = [];
  lines.push(svc.overview);
  lines.push("");
  lines.push("**What we typically help with:**");
  svc.problemsSolved.forEach((p) => lines.push(`• ${p}`));
  lines.push("");
  lines.push(`**Technologies:** ${svc.technologies.slice(0, 5).join(", ")}`);
  lines.push(`**Typical timeline:** ${svc.estimatedTimeline}`);
  lines.push("");

  // Contextual follow-up
  if (ctx.lead.industry) {
    lines.push(`Since you're in **${ctx.lead.industry}**, we can tailor this specifically for your sector.`);
    lines.push("");
  }

  lines.push("Would you like to discuss your specific requirements, or shall I walk you through what a typical project looks like?");

  const suggestions = [...svc.crossSell.slice(0, 2), "Project Timeline", "Get a Quote"];

  return { text: lines.join("\n"), suggestions, actions: ["consultation"] };
}

function buildHardwareResponse(ctx: ConversationContext): ChatResponse {
  const hw = hardwareKnowledge[0];
  const lines: string[] = [];
  lines.push(hw.overview);
  lines.push("");
  lines.push("**Categories we cover:**");
  hw.categories.forEach((c) => lines.push(`• ${c}`));
  lines.push("");
  lines.push(`**Deployment:** ${hw.deployment}`);
  lines.push("");

  if (ctx.lead.size) {
    lines.push(`For a **${ctx.lead.size}** organisation, we'd recommend starting with a requirements assessment to identify the right configuration and budget.`);
  } else {
    lines.push("What type of hardware are you looking for? I can help narrow down the right solution.");
  }

  return {
    text: lines.join("\n"),
    suggestions: ["Laptops", "Servers", "Networking", "CCTV", "Request a Quote"],
    actions: ["quote"],
  };
}

function buildIndustryResponse(ctx: ConversationContext): ChatResponse {
  // If we already know the industry, give specific info
  if (ctx.lead.industry) {
    const ind = industryKnowledge.find((i) => i.name === ctx.lead.industry);
    if (ind) {
      return {
        text: `Here's how we support **${ind.name}**:\n\n${ind.overview}\n\n**Typical solutions:**\n${ind.typicalSolutions.map((s) => `• ${s}`).join("\n")}\n\n**Technologies:** ${ind.technologies.join(", ")}\n\nWould you like to explore a specific solution, or shall we discuss your particular needs?`,
        suggestions: ["Custom Software", "Web Development", "Get a Quote"],
        actions: ["consultation"],
      };
    }
  }

  const top = industryKnowledge.slice(0, 6).map((i) => i.name);
  return {
    text: "We work across a range of industries, each with its own set of challenges.\n\nSome of the sectors we support:\n\n" +
      top.map((n) => `• ${n}`).join("\n") +
      "\n\nWhich industry are you in? I'll share relevant solutions and case approaches.",
    suggestions: top.slice(0, 4).concat(["Other"]),
  };
}

function buildCompanyResponse(ref?: string): ChatResponse {
  if (ref === "why") {
    return {
      text: "Here's what our clients typically appreciate about working with us:\n\n" +
        companyKnowledge.whySimplein.map((w) => `✓ ${w}`).join("\n") +
        "\n\nWe think of ourselves as a long-term technology partner, not just a vendor. The relationship doesn't end at delivery.",
      suggestions: ["Our Process", "Services", "Get a Quote"],
    };
  }
  if (ref === "process") {
    return {
      text: "Our process is designed to be transparent and collaborative:\n\n" + companyKnowledge.approach +
        "\n\nEvery step includes client check-ins so there are never surprises. Would you like to know more about a specific phase?",
      suggestions: ["Pricing", "Technologies", "Contact Us"],
    };
  }
  return {
    text: companyKnowledge.about +
      "\n\n**Mission:** " + companyKnowledge.mission +
      "\n\n**Vision:** " + companyKnowledge.vision +
      "\n\nWould you like to learn more about how we work, or explore our services?",
    suggestions: ["Why SIMPLEIN?", "Our Services", "Our Process"],
  };
}

function buildContactResponse(): ChatResponse {
  return {
    text: `Here's how you can reach us:\n\n📞 **Phone:** ${contactInfo.phone}\n✉️ **Email:** ${contactInfo.email}\n⏰ **Availability:** ${contactInfo.hours}\n\n${companyKnowledge.contactProcess}`,
    suggestions: ["Services", "About Us"],
    actions: ["whatsapp", "email", "call", "quote"],
  };
}

function buildPricingResponse(): ChatResponse {
  return {
    text: companyKnowledge.pricingPhilosophy +
      "\n\nThe best way to get an accurate estimate is a quick conversation with our team — it's completely free, no strings attached.",
    suggestions: ["Contact Us", "Our Process", "Services"],
    actions: ["quote", "whatsapp", "consultation"],
  };
}

function buildFaqResponse(ref?: string): ChatResponse {
  if (ref === "timeline") {
    return {
      text: "Timelines vary quite a bit depending on the project, but here are some typical ranges:\n\n" +
        "• **Landing pages:** 1–2 weeks\n• **Business websites:** 2–4 weeks\n• **Web applications:** 1–3 months\n• **Mobile apps:** 2–4 months\n• **Enterprise platforms:** 3–8 months\n\n" +
        "These are starting points — we always discuss your specific deadline during the initial consultation.\n\nAre you working within a particular timeline?",
      suggestions: ["Pricing", "Our Process", "Get a Quote"],
    };
  }
  if (ref === "maintenance") {
    return {
      text: "We don't just build and walk away. Post-launch support is a core part of what we do:\n\n" +
        "• Bug fixes and security patches\n• Feature enhancements and iterations\n• Performance monitoring\n• Annual Maintenance Contracts (AMC)\n• Priority support with guaranteed response times\n\n" +
        "Most of our clients continue working with us well after the initial launch.",
      suggestions: ["Services", "Pricing", "Contact Us"],
    };
  }
  if (ref === "international") {
    return {
      text: "Yes — we work with clients globally and have a smooth remote collaboration process:\n\n" +
        "• Structured project management across time zones\n• Regular video demos and progress updates\n• Async communication via Slack, Teams, or email\n• Detailed documentation at every stage\n\n" +
        "We've delivered projects for clients across multiple countries without any friction.",
      suggestions: ["Our Process", "Services", "Contact Us"],
    };
  }
  if (ref === "technologies") {
    return {
      text: "We choose the right technology for each project rather than forcing a single stack. Here's what we work with:\n\n" +
        "**Frontend:** React, Next.js, TypeScript, Tailwind CSS\n" +
        "**Mobile:** Flutter, Dart\n" +
        "**Backend:** Node.js, Python, FastAPI, Express\n" +
        "**Database:** PostgreSQL, Supabase\n" +
        "**Cloud:** Docker, Vercel, Cloudflare\n" +
        "**AI/ML:** OpenAI APIs, Ollama, Python ML\n" +
        "**DevOps:** GitHub Actions, CI/CD pipelines\n\n" +
        "Is there a particular technology you're interested in, or would you like a recommendation?",
      suggestions: ["Web Development", "Mobile Apps", "AI Automation", "Get a Quote"],
    };
  }
  return buildFallback();
}

function buildGreetingResponse(): ChatResponse {
  return {
    text: "Hello! 👋\n\nWelcome to SIMPLEIN Solutions. I'm here to help you find the right technology solution for your business.\n\nFeel free to ask about any of our services, or tell me what you're working on and I'll guide you from there.",
    suggestions: ["Explore Services", "Web Development", "Mobile Apps", "IT Hardware", "Get a Quote"],
  };
}

function buildThanksResponse(): ChatResponse {
  return {
    text: "Happy to help! 😊\n\nIf anything else comes to mind, I'm right here. Otherwise, feel free to reach out to our team directly whenever you're ready to move forward.",
    suggestions: ["Services", "Contact Us"],
    actions: ["whatsapp"],
  };
}

function buildFallback(): ChatResponse {
  return {
    text: "That's a great question — I want to make sure you get the most accurate answer.\n\nOur team can help you with this directly. It's free, no obligation — just a conversation.",
    suggestions: ["Explore Services", "About Us"],
    actions: ["whatsapp", "email", "call", "quote"],
  };
}

function buildClarification(topIntents: ScoredIntent[]): ChatResponse {
  const labels = topIntents.slice(0, 3).map((si) => {
    const svc = serviceKnowledge.find((s) => s.id === si.intent.knowledgeRef);
    return svc?.name || si.intent.id.replace("intent_", "").replace(/_/g, " ");
  });
  return {
    text: "I want to make sure I point you in the right direction.\n\nAre you looking for help with:",
    suggestions: [...labels, "Something else"],
  };
}

// ---------------------------------------------------------------------------
// Consultation mode — ask before answering
// ---------------------------------------------------------------------------
function buildConsultationEntry(topic: string): ChatResponse | null {
  if (topic === "web-development") {
    return {
      text: "I'd be happy to help with that.\n\nTo give you the most relevant information, could you tell me what kind of web project you have in mind?",
      suggestions: ["Business Website", "E-Commerce", "Web Application", "Internal Portal", "Landing Page"],
    };
  }
  if (topic === "mobile-development") {
    return {
      text: "Great — mobile apps are one of our strengths.\n\nWhat kind of app are you thinking about?",
      suggestions: ["iOS & Android", "Customer-facing App", "Internal Tool", "E-Commerce App", "Not sure yet"],
    };
  }
  if (topic === "custom-software") {
    return {
      text: "Custom software is what we do best.\n\nCould you share a bit about what you need? For example:",
      suggestions: ["CRM System", "ERP System", "Inventory Management", "Business Portal", "Something else"],
    };
  }
  if (topic === "ai-automation") {
    return {
      text: "AI and automation can be a real game-changer.\n\nWhat are you looking to achieve?",
      suggestions: ["Automate workflows", "Build a chatbot", "Data analysis", "Document processing", "Not sure yet"],
    };
  }
  return null;
}

// ---------------------------------------------------------------------------
// Estimator flow
// ---------------------------------------------------------------------------
function startEstimator(estimatorId: string): ChatResponse {
  const est = estimators.find((e) => e.id === estimatorId);
  if (!est) return buildFallback();
  const step = est.steps[0];
  return {
    text: `Let's figure out the right approach for your project.\n\n**${est.name}**\n\n${step.question}`,
    estimator: { id: est.id, stepIndex: 0, question: step.question, options: step.options },
  };
}

function continueEstimator(context: ConversationContext, userAnswer: string): ChatResponse {
  const est = estimators.find((e) => e.id === context.estimatorId);
  if (!est || context.estimatorStep === undefined) return buildFallback();

  const nextIndex = context.estimatorStep + 1;
  if (nextIndex >= est.steps.length) {
    const answers = { ...context.estimatorAnswers, [est.steps[context.estimatorStep].id]: userAnswer };
    return buildEstimatorSummary(est, answers);
  }

  const nextStep = est.steps[nextIndex];
  return {
    text: `Got it.\n\n${nextStep.question}`,
    estimator: { id: est.id, stepIndex: nextIndex, question: nextStep.question, options: nextStep.options },
  };
}

function buildEstimatorSummary(est: Estimator, answers: Record<string, string>): ChatResponse {
  const entries = Object.entries(answers)
    .map(([key, val]) => `• **${key.charAt(0).toUpperCase() + key.slice(1)}:** ${val}`)
    .join("\n");

  return {
    text: `Here's a summary of what you're looking for:\n\n${entries}\n\n**Recommended next step:** A free consultation with our technical team. We'll review this together, discuss the best approach, and put together a tailored proposal.\n\nShall I connect you?`,
    suggestions: ["Contact Us", "Explore More Services"],
    actions: ["consultation", "whatsapp", "quote"],
  };
}

// ---------------------------------------------------------------------------
// Lead summary — generated after enough info is collected
// ---------------------------------------------------------------------------
function shouldShowSummary(ctx: ConversationContext): boolean {
  const { lead, turnCount } = ctx;
  const infoCount = [lead.industry, lead.size, lead.timeline].filter(Boolean).length;
  return turnCount >= 5 && infoCount >= 2;
}

function buildLeadSummary(ctx: ConversationContext): ChatResponse {
  const { lead, activeTopic } = ctx;
  const lines: string[] = [];
  lines.push("Based on our conversation, here's what I've gathered:\n");
  if (activeTopic) {
    const svc = serviceKnowledge.find((s) => s.id === activeTopic);
    lines.push(`**Interested in:** ${svc?.name || activeTopic}`);
  }
  if (lead.industry) lines.push(`**Industry:** ${lead.industry}`);
  if (lead.size) lines.push(`**Organisation size:** ${lead.size}`);
  if (lead.timeline) lines.push(`**Timeline:** ${lead.timeline}`);
  lines.push("");
  lines.push("The best next step would be a quick consultation with our technical team. They can review your requirements and put together a detailed proposal — no cost, no obligation.");

  return {
    text: lines.join("\n"),
    suggestions: ["Contact Us"],
    actions: ["consultation", "whatsapp", "quote", "email"],
  };
}

// ---------------------------------------------------------------------------
// Main entry point
// ---------------------------------------------------------------------------
export async function processMessage(
  message: string,
  context: ConversationContext
): Promise<{ response: ChatResponse; newContext: ConversationContext }> {
  await new Promise((r) => setTimeout(r, 500 + Math.random() * 600));

  const trimmed = message.trim();
  let ctx = { ...context, lead: { ...context.lead }, turnCount: context.turnCount + 1 };

  // Passively extract lead info from every message
  ctx.lead = extractLeadInfo(trimmed, ctx.lead);

  // --- Estimator flow ---
  if (ctx.estimatorId) {
    const response = continueEstimator(ctx, trimmed);
    const newCtx: ConversationContext = response.estimator
      ? {
          ...ctx,
          estimatorStep: response.estimator.stepIndex,
          estimatorAnswers: {
            ...ctx.estimatorAnswers,
            ...(ctx.estimatorStep !== undefined
              ? { [estimators.find((e) => e.id === ctx.estimatorId)!.steps[ctx.estimatorStep].id]: trimmed }
              : {}),
          },
        }
      : { ...ctx, estimatorId: undefined, estimatorStep: undefined, estimatorAnswers: undefined };
    return { response, newContext: newCtx };
  }

  const tokens = tokenize(trimmed);
  if (tokens.length === 0) {
    return {
      response: { text: "Could you tell me a bit more about what you're looking for?", suggestions: ["Services", "Contact Us", "Pricing"] },
      newContext: ctx,
    };
  }

  const scored = scoreIntents(tokens, trimmed, ctx);

  // No matches
  if (scored.length === 0 || scored[0].score < 1.5) {
    // Check if we have enough info for a lead summary
    if (shouldShowSummary(ctx)) {
      return { response: buildLeadSummary(ctx), newContext: ctx };
    }
    return { response: buildFallback(), newContext: ctx };
  }

  // Ambiguous
  if (scored.length >= 2 && scored[1].score > 0 && scored[0].score - scored[1].score < 1.5 && scored[0].score < 5) {
    return { response: buildClarification(scored), newContext: ctx };
  }

  const matched = scored[0].intent;
  let response: ChatResponse;
  ctx.lastIntentId = matched.id;

  // Track active topic for context memory
  if (matched.knowledgeRef && (matched.responseType === "service" || matched.responseType === "hardware")) {
    ctx.activeTopic = matched.knowledgeRef;
  }

  switch (matched.responseType) {
    case "service": {
      // Consultation mode: if the message is short/generic, ask before dumping info
      const isGenericAsk = tokens.length <= 4;
      if (isGenericAsk && !ctx.awaitingClarification) {
        const consultEntry = buildConsultationEntry(matched.knowledgeRef!);
        if (consultEntry) {
          ctx.awaitingClarification = matched.knowledgeRef!;
          return { response: consultEntry, newContext: ctx };
        }
      }
      ctx.awaitingClarification = undefined;
      response = buildServiceResponse(matched.knowledgeRef!, ctx);
      break;
    }
    case "hardware":
      response = buildHardwareResponse(ctx);
      break;
    case "industry":
      response = buildIndustryResponse(ctx);
      break;
    case "company":
      response = buildCompanyResponse(matched.knowledgeRef);
      break;
    case "contact":
      response = buildContactResponse();
      break;
    case "pricing":
      response = buildPricingResponse();
      break;
    case "faq":
      response = buildFaqResponse(matched.knowledgeRef);
      break;
    case "greeting":
      response = buildGreetingResponse();
      break;
    case "thanks":
      response = buildThanksResponse();
      break;
    case "estimator":
      response = startEstimator(matched.knowledgeRef!);
      if (response.estimator) {
        ctx = { ...ctx, estimatorId: response.estimator.id, estimatorStep: 0, estimatorAnswers: {} };
      }
      break;
    default:
      response = buildFallback();
  }

  // After enough turns with collected info, offer a lead summary
  if (shouldShowSummary(ctx) && matched.responseType === "service") {
    response.text += "\n\n---\n\nI've gathered some useful context from our conversation. Would you like me to summarise it so our team can prepare a tailored proposal?";
    response.suggestions = [...(response.suggestions || []).slice(0, 2), "Yes, summarise", "Not yet"];
  }

  return { response, newContext: ctx };
}
