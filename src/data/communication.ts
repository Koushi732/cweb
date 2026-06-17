import { Clock, MessageCircle, Video, Phone, Calendar, FileText, Settings, Mail } from "lucide-react";

export const communicationPolicy = {
  initialResponse: {
    title: "Initial Response",
    description: "Every enquiry receives an initial acknowledgement, a thorough requirement review, and consultation scheduling.",
    commitment: "We aim to respond as promptly as possible during business hours.",
    icon: Clock
  },
  channels: [
    { name: "Email", icon: Mail },
    { name: "WhatsApp Business", icon: MessageCircle },
    { name: "Google Meet", icon: Video },
    { name: "Microsoft Teams", icon: Video },
    { name: "Zoom", icon: Video },
    { name: "Phone Calls (when required)", icon: Phone }
  ],
  projectCommunication: {
    title: "Project Communication",
    description: "During development, you stay fully informed. We manage projects using milestone-based planning.",
    items: [
      "Regular progress updates",
      "Milestone reviews",
      "Requirement confirmations",
      "Feedback discussions",
      "Delivery updates"
    ],
    icon: Calendar
  },
  documentation: {
    title: "Documentation",
    description: "We provide comprehensive documentation to ensure transparency and maintainability.",
    items: [
      "Requirement summaries",
      "Feature documentation",
      "Deployment documentation",
      "User guidance"
    ],
    icon: FileText
  },
  support: {
    title: "Post-Deployment Support",
    description: "After deployment, we continue to provide dedicated support to keep your systems running smoothly.",
    items: [
      "Bug fixes",
      "Technical assistance",
      "Feature enhancement discussions",
      "Performance improvements"
    ],
    icon: Settings
  }
};
