import { localProvider } from "../provider/localProvider";
import { serviceMetadata } from "../knowledge/services";
import { faqDatabase } from "../faqDatabase";

async function validateKnowledge() {
  console.log("Starting Knowledge Validation...");
  let errors = 0;

  // 1. Validate Services Provider vs Metadata
  const services = await localProvider.getServices();
  services.forEach(service => {
    if (!serviceMetadata[service.id]) {
      console.warn(`[WARNING] Service "${service.id}" exists in provider but is missing in Chat Metadata.`);
      errors++;
    }
  });

  Object.keys(serviceMetadata).forEach(key => {
    if (!services.find(s => s.id === key)) {
      console.warn(`[WARNING] Chat Metadata references service "${key}", but it does not exist in provider.`);
      errors++;
    }
  });

  // 2. Validate Duplicate FAQs
  const faqIds = new Set<string>();
  faqDatabase.forEach(faq => {
    if (faqIds.has(faq.id)) {
      console.error(`[ERROR] Duplicate FAQ ID found: "${faq.id}"`);
      errors++;
    }
    faqIds.add(faq.id);
  });

  // 3. Validation Summary
  if (errors > 0) {
    console.error(`Validation failed with ${errors} warnings/errors.`);
    process.exit(1);
  } else {
    console.log("Knowledge Validation Passed. All data is consistent.");
  }
}

validateKnowledge();
