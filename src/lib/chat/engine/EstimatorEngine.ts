import { ConversationContext } from "./Storage";

export interface EstimatorStep {
  id: string;
  question: string;
  options: { label: string; value: string }[];
}

export interface Estimator {
  id: string;
  name: string;
  description: string;
  steps: EstimatorStep[];
}

export class EstimatorEngine {
  static estimators: Estimator[] = [
    {
      id: "estimator_web",
      name: "Website Estimator",
      description: "Scope your web project.",
      steps: [
        { id: "type", question: "What type of website?", options: [{label: "Business", value: "business"}, {label: "E-Commerce", value: "ecommerce"}] },
        { id: "pages", question: "How many pages?", options: [{label: "1-5", value: "small"}, {label: "5-15", value: "medium"}, {label: "15+", value: "large"}] },
      ]
    }
    // More would go here, moved from knowledgeBase.ts
  ];

  static start(estimatorId: string) {
    return this.estimators.find(e => e.id === estimatorId);
  }

  static nextStep(context: ConversationContext) {
    if (!context.estimatorId || context.estimatorStep === undefined) return null;
    const est = this.start(context.estimatorId);
    if (!est) return null;
    const nextIndex = context.estimatorStep + 1;
    if (nextIndex >= est.steps.length) return null; // Finished
    return { estimator: est, step: est.steps[nextIndex], index: nextIndex };
  }
}
