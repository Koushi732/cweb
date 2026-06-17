"use client";

import { motion } from "framer-motion";
import {
  Send, Phone, Mail, Clock, MessageCircle,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import dynamic from "next/dynamic";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";

const ProcessSection = dynamic(() => import("@/components/ui/ProcessSection"), { ssr: true });
const WhyChooseUsSection = dynamic(() => import("@/components/ui/WhyChooseUsSection"), { ssr: true });
const CommunicationSection = dynamic(() => import("@/components/ui/CommunicationSection"), { ssr: true });
import { generalFAQs } from "@/data/faq";
import { useState } from "react";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-32 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-tighter mt-8 mb-8"
          >
            Get in <span className="text-[var(--accent)]">Touch.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-tight"
          >
            Have a question or ready to start your project? Reach out to us and our team will respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards (overlapping hero) */}
      <section className="relative -mt-16 pb-32 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid sm:grid-cols-1 md:grid-cols-3 gap-0 bg-background border border-[var(--border-color)]">
            {[
              {
                icon: Phone, title: "Call Us", info: "+91 98765 43210",
                subInfo: "Mon - Fri, 9 AM - 6 PM", href: "tel:+919876543210",
              },
              {
                icon: Mail, title: "General Email", info: "info@simpleinsolutions.com",
                subInfo: "Support during business hours", href: "mailto:info@simpleinsolutions.com",
              },
              {
                icon: MessageCircle, title: "WhatsApp", info: "+91 98765 43210",
                subInfo: "Quick response", href: "https://wa.me/919876543210",
              },
            ].map((item, index) => (
              <StaggerItem key={item.title}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`block p-8 hover:bg-[var(--surface)] transition-colors h-full ${
                    index !== 0 ? 'border-t md:border-t-0 md:border-l border-[var(--border-color)]' : ''
                  }`}
                >
                  <div className="mb-6 text-[var(--accent)]">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">{item.title}</h3>
                  <p className="text-lg font-light text-foreground mb-2">{item.info}</p>
                  <p className="text-sm text-muted-foreground">{item.subInfo}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Communication Section */}
      <CommunicationSection />

      {/* Form + Map */}
      <section className="pb-32 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <ScrollAnimationWrapper animation="slide-left">
              <div className="h-full">
                <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
                  Send a Message
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-tight">We&apos;d Love to Hear From You.</h2>
                <p className="text-lg text-muted-foreground font-light mb-12">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Company</label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Service Interested In</label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg appearance-none cursor-pointer"
                    >
                      <option value="">Select a service</option>
                      <option value="software">Custom Software Development</option>
                      <option value="web">Web Application Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cloud">Cloud Infrastructure</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="ai">AI Solutions</option>
                      <option value="consulting">IT Consulting</option>
                      <option value="hardware">IT Hardware Sales</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={submitted}
                    aria-disabled={submitted}
                    aria-live="polite"
                    className={`w-full flex items-center justify-center gap-3 px-8 py-5 font-bold text-sm uppercase tracking-widest transition-colors ${submitted ? 'bg-[var(--surface)] text-[var(--accent)] cursor-not-allowed' : 'bg-foreground text-background hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)]'}`}
                  >
                    {submitted ? "✓ Message Sent!" : <>Send Message <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="space-y-8 h-full">
                <div className="p-10 bg-[var(--surface)] border border-[var(--border-color)]">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-8">Direct Contacts</h3>
                  <ul className="space-y-6 text-base">
                    <li className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-foreground">Sales Inquiries</p>
                        <a href="mailto:sales@simpleinsolutions.com" className="text-muted-foreground font-light hover:text-[var(--accent)] transition-colors">sales@simpleinsolutions.com</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-foreground">Technical Support</p>
                        <a href="mailto:support@simpleinsolutions.com" className="text-muted-foreground font-light hover:text-[var(--accent)] transition-colors">support@simpleinsolutions.com</a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-10 bg-[var(--surface)] border border-[var(--border-color)]">
                  <h3 className="text-xs font-bold uppercase tracking-widest text-foreground mb-8">Working Hours</h3>
                  <ul className="space-y-6 text-base">
                    <li className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-foreground">Monday - Friday</p>
                        <p className="text-muted-foreground font-light">9:00 AM - 6:00 PM (IST)</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4 opacity-50">
                      <Clock className="w-5 h-5 text-foreground mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-bold text-foreground">Saturday - Sunday</p>
                        <p className="text-muted-foreground font-light">Closed</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Process */}
      <ProcessSection />

      {/* FAQ */}
      <section className="py-32 bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8">
              Common Questions.
            </h2>
          </ScrollAnimationWrapper>

          <div className="space-y-4">
            {generalFAQs.map((faq, i) => (
              <ScrollAnimationWrapper key={i} delay={i * 0.05}>
                <details className="group bg-background border border-[var(--border-color)] hover:border-foreground transition-colors">
                  <summary className="flex items-center justify-between gap-6 p-8 cursor-pointer text-lg font-bold text-foreground list-none">
                    {faq.question}
                    <span className="text-[var(--accent)] text-2xl font-light leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-8 pb-8 text-base text-muted-foreground font-light leading-relaxed border-t border-[var(--border-color)] pt-6 mt-2">
                    {faq.answer}
                  </div>
                </details>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

