import { BaseService } from "../provider/index";
import { ServiceMetadata } from "../knowledge/services";

import { ChatComponent } from "../engine/Storage";

export function buildServiceResponse(service: BaseService, meta: ServiceMetadata) {
  const lines: string[] = [];
  lines.push("Thinking...");
  lines.push(`✓ Analysing requirements for ${service.title}...`);
  lines.push("---");
  lines.push(`Here is a quick overview of **${service.title}** and how it can help your business.`);
  
  const components: ChatComponent[] = [
    {
      type: "ServiceCard",
      props: {
        title: service.title,
        features: service.benefits.slice(0, 4),
      }
    }
  ];

  if (service.technologies && service.technologies.length > 0) {
    components.push({
      type: "TechGrid",
      props: { technologies: service.technologies.slice(0, 6) }
    });
  }
  
  return {
    text: lines.join("\n"),
    components,
    suggestions: meta.suggestedQuestions,
    actions: ["consultation"] as string[],
  };
}
