export * from "./laptops";
export * from "./servers";
export * from "./networking";
export * from "./cctv";
export * from "./biometric";

export interface HardwareProduct {
  id: string;
  category: string;
  name: string;
  description: string;
  targetAudience: string;
  brands: string[];
  suggestedQuestions: string[];
  upsells: string[];
}
