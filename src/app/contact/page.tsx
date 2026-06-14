import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with SimpleIn Solutions — reach out via phone, email, WhatsApp, or visit our office. We're ready to help with your IT needs.",
};

export default function ContactPage() {
  return <ContactClient />;
}
