"use client";

import { motion } from "framer-motion";
import {
  Send, Phone, Mail, MapPin, Clock, MessageCircle,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
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
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 gradient-hero overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Contact" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6"
          >
            Get in <span className="bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">Touch</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl"
          >
            Have a question or ready to start your project? Reach out to us and our team will respond within 24 hours.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards (overlapping hero) */}
      <section className="relative -mt-16 pb-24 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                icon: Phone, title: "Call Us", info: "+91 XXXX XXXX XX",
                subInfo: "Mon - Sat, 9 AM - 7 PM", href: "tel:+91XXXXXXXXXX",
              },
              {
                icon: Mail, title: "Email Us", info: "info@simpleinsolutions.com",
                subInfo: "24/7 support", href: "mailto:info@simpleinsolutions.com",
              },
              {
                icon: MessageCircle, title: "WhatsApp", info: "+91 XXXX XXXX XX",
                subInfo: "Quick response", href: "https://wa.me/91XXXXXXXXXX",
              },
              {
                icon: MapPin, title: "Visit Us", info: "Hyderabad, Telangana",
                subInfo: "India", href: "#map",
              },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover h-full"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center mb-4">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-base font-semibold mb-1">{item.title}</h3>
                  <p className="text-sm text-foreground mb-1">{item.info}</p>
                  <p className="text-xs text-muted">{item.subInfo}</p>
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Form + Map */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            <ScrollAnimationWrapper animation="slide-left">
              <div className="p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-color)] h-full">
                <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-3">
                  Send a Message
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold mb-2">We&apos;d Love to Hear From You</h2>
                <p className="text-muted text-sm mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company</label>
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder="Company name"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">Service Interested In</label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground focus:outline-none focus:border-[var(--secondary)] transition-colors"
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
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                    <textarea
                      id="message"
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors resize-none"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--secondary)]/25 transition-all hover:scale-[1.02]"
                  >
                    {submitted ? "✓ Message Sent!" : <>Send Message <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="space-y-6 h-full" id="map">
                <div
                  className="rounded-3xl overflow-hidden border border-[var(--border-color)] h-64 bg-[var(--surface)] flex items-center justify-center relative"
                  style={{
                    backgroundImage: "linear-gradient(45deg, var(--surface) 25%, transparent 25%), linear-gradient(-45deg, var(--surface) 25%, transparent 25%), linear-gradient(45deg, transparent 75%, var(--surface) 75%), linear-gradient(-45deg, transparent 75%, var(--surface) 75%)",
                    backgroundSize: "20px 20px",
                    backgroundPosition: "0 0, 0 10px, 10px -10px, 10px 0px",
                    backgroundColor: "var(--background)",
                  }}
                >
                  <div className="text-center px-6 bg-[var(--surface)] p-6 rounded-2xl border border-[var(--border-color)]">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center mx-auto mb-3">
                      <MapPin className="w-7 h-7 text-white" />
                    </div>
                    <p className="text-base font-semibold mb-1">Hyderabad, Telangana, India</p>
                    <p className="text-sm text-muted">Map integration placeholder</p>
                  </div>
                </div>

                <div className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)]">
                  <h3 className="font-semibold mb-4">Office Hours</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[var(--secondary)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Monday - Friday</p>
                        <p className="text-muted">9:00 AM - 7:00 PM</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-[var(--secondary)] mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Saturday</p>
                        <p className="text-muted">10:00 AM - 5:00 PM</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-muted mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-muted">Sunday</p>
                        <p className="text-muted">Closed</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </ScrollAnimationWrapper>

          <div className="space-y-3">
            {generalFAQs.map((faq, i) => (
              <ScrollAnimationWrapper key={i} delay={i * 0.05}>
                <details className="group rounded-2xl bg-background border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all">
                  <summary className="flex items-center justify-between gap-4 p-5 cursor-pointer text-sm font-semibold text-foreground list-none">
                    {faq.question}
                    <span className="text-[var(--secondary)] text-xl leading-none transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
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
