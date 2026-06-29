"use client";

import { motion } from "framer-motion";
import {
  Send, Phone, Mail, Clock, MessageCircle, Plus, Minus
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
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] animate-[shimmer_60s_linear_infinite] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-[-0.04em] mt-8 mb-8"
          >
            Get in Touch.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-[1.6]"
          >
            Have a question or ready to start your project? Reach out to us and our team will respond shortly.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards (overlapping hero) */}
      <section className="relative -mt-16 pb-32 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid sm:grid-cols-1 md:grid-cols-3 gap-0 bg-background border border-[var(--border-color)]">
            {[
              {
                icon: Phone, title: "Call Us", info: "+91 984 8334 984",
                subInfo: "Available Anytime", href: "tel:+919848334984",
              },
              {
                icon: Mail, title: "General Email", info: "info@SimpleInsolutions.com",
                subInfo: "Support always available", href: "mailto:info@SimpleInsolutions.com",
              },
              {
                icon: MessageCircle, title: "WhatsApp", info: "+91 984 8334 984",
                subInfo: "Quick response", href: "https://wa.me/919848334984",
              },
            ].map((item, index) => (
              <StaggerItem key={item.title}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`group block p-10 hover:bg-foreground hover:text-background transition-colors h-full ${
                    index !== 0 ? 'border-t md:border-t-0 md:border-l border-[var(--border-color)]' : ''
                  }`}
                >
                  <div className="mb-6 text-foreground group-hover:text-background transition-colors">
                    <item.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground group-hover:text-background mb-4 font-mono transition-colors">{item.title}</h3>
                  <p className="text-lg font-light text-foreground group-hover:text-background mb-2 transition-colors">{item.info}</p>
                  <p className="text-sm text-muted-foreground group-hover:text-muted transition-colors">{item.subInfo}</p>
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
                <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                  Send a Message
                </span>
                <h2 className="text-4xl sm:text-5xl font-bold mb-6 tracking-[-0.02em]">We&apos;d Love to Hear From You.</h2>
                <p className="text-lg text-muted-foreground font-light mb-12">
                  Fill out the form and our team will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-10" noValidate>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="relative pt-6">
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg rounded-none"
                        required
                      />
                      <label htmlFor="name" className="absolute left-0 top-6 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:-top-2 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Full Name *</label>
                    </div>
                    <div className="relative pt-6">
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg rounded-none"
                        required
                      />
                      <label htmlFor="email" className="absolute left-0 top-6 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:-top-2 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Email *</label>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div className="relative pt-6">
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg rounded-none"
                      />
                      <label htmlFor="phone" className="absolute left-0 top-6 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:-top-2 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Phone</label>
                    </div>
                    <div className="relative pt-6">
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg rounded-none"
                      />
                      <label htmlFor="company" className="absolute left-0 top-6 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:-top-2 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Company</label>
                    </div>
                  </div>
                  <div className="relative pt-6">
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg appearance-none cursor-pointer rounded-none [&>option]:bg-background [&>option]:text-foreground"
                    >
                      <option value="">Select a service</option>
                      <option value="software">Custom Software Development</option>
                      <option value="web">Web Application Development</option>
                      <option value="mobile">Mobile App Development</option>
                      <option value="cloud">Cloud Infrastructure</option>
                      <option value="cybersecurity">Networking & Security</option>
                      <option value="ai">AI Solutions</option>
                      <option value="marketing">Digital Marketing</option>
                      <option value="hardware">IT Hardware Sales</option>
                      <option value="other">Other</option>
                    </select>
                    <label htmlFor="service" className="absolute left-0 -top-2 text-xs font-mono uppercase tracking-[0.2em] font-bold text-foreground pointer-events-none">Service Interested In</label>
                  </div>
                  <div className="relative pt-6">
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg resize-none rounded-none"
                      required
                    />
                    <label htmlFor="message" className="absolute left-0 top-6 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-lg peer-focus:-top-2 peer-focus:text-xs peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-xs peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Message *</label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitted}
                    aria-disabled={submitted}
                    aria-live="polite"
                    className={`w-full flex items-center justify-center gap-3 px-8 py-5 font-bold text-sm uppercase tracking-[0.1em] transition-colors rounded-none ${submitted ? 'bg-[var(--surface)] text-muted-foreground cursor-not-allowed' : 'bg-foreground text-background hover:opacity-90'}`}
                  >
                    {submitted ? "✓ Message Sent!" : <>Send Message <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="space-y-8 h-full">
                <div className="p-10 bg-background border border-[var(--border-color)] hover:border-foreground transition-colors group">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-8 font-mono">Direct Contacts</h3>
                  <ul className="space-y-6 text-base">
                    <li className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground mt-0.5 flex-shrink-0 transition-colors" />
                      <div>
                        <p className="font-bold text-foreground">Sales Inquiries</p>
                        <a href="mailto:info@SimpleInsolutions.com" className="text-muted-foreground font-light hover:text-foreground transition-colors">info@SimpleInsolutions.com</a>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <Mail className="w-5 h-5 text-muted-foreground group-hover:text-foreground mt-0.5 flex-shrink-0 transition-colors" />
                      <div>
                        <p className="font-bold text-foreground">Technical Support</p>
                        <a href="mailto:info@SimpleInsolutions.com" className="text-muted-foreground font-light hover:text-foreground transition-colors">info@SimpleInsolutions.com</a>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="p-10 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-8 font-mono">Working Hours</h3>
                  <ul className="space-y-6 text-base">
                    <li className="flex items-start gap-4">
                      <Clock className="w-5 h-5 text-muted-foreground group-hover:text-foreground mt-0.5 flex-shrink-0 transition-colors" />
                      <div>
                        <p className="font-bold text-foreground">Available 24/7</p>
                        <p className="text-muted-foreground font-light">We can take on work at any time</p>
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
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.02em] mb-8">
              Common Questions.
            </h2>
          </ScrollAnimationWrapper>

          <div className="space-y-4">
            {generalFAQs.map((faq, idx) => (
              <StaggerItem key={idx}>
                <div 
                  className={`border border-[var(--border-color)] bg-background transition-colors ${openFaq === idx ? "border-foreground" : "hover:border-muted-foreground"}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <span className="text-xl font-bold tracking-tight text-foreground">{faq.question}</span>
                    <span className="ml-4 shrink-0 text-foreground">
                      {openFaq === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-8 pb-8 pt-0 text-lg text-muted-foreground font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
