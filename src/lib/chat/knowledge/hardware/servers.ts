import { HardwareProduct } from "./index";

export const serversData: HardwareProduct[] = [
  {
    id: "servers-storage",
    category: "Servers & Storage",
    name: "Enterprise Servers & NAS Storage",
    description: "Rack, tower, and blade servers along with Network Attached Storage (NAS) and SAN solutions for robust data management.",
    targetAudience: "Data centers, medium-to-large enterprises, hospitals, and educational institutions.",
    brands: ["Dell EMC", "HPE", "Synology", "QNAP"],
    suggestedQuestions: ["Server installation", "NAS vs SAN", "Cloud vs On-premise"],
    upsells: ["networking", "ups-power", "cloud-devops"],
  }
];
