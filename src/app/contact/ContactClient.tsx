"use client";

import { motion } from "framer-motion";
import {
  Send, Phone, Mail, Clock, MessageCircle, Plus, Minus, CheckCircle2
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import dynamic from "next/dynamic";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";

const CommunicationSection = dynamic(() => import("@/components/ui/CommunicationSection"), { ssr: true });
import { useState, useEffect } from "react";

export default function ContactClient() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", company: "", service: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  useEffect(() => {
    if (window.location.hash === "#contact-form") {
      setTimeout(() => {
        const el = document.getElementById("contact-form");
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero + Form */}
      <section id="contact-form" className="relative pt-24 pb-24 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] animate-[shimmer_60s_linear_infinite] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <Breadcrumb items={[{ label: "Contact" }]} />
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-none tracking-[-0.04em] mt-8 mb-8"
              >
                Get in Touch.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-lg sm:text-xl font-light text-muted-foreground max-w-xl leading-[1.6] mb-12"
              >
                Have a question or ready to start your project? Fill out the form and our team will get back to you shortly.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="space-y-4"
              >
                {[
                  "Free Technical Consultation",
                  "Fast & Priority Response",
                  "Enterprise-Grade Solutions",
                  "Dedicated Project Support"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-[var(--surface)] border border-[var(--border-color)] flex items-center justify-center shrink-0">
                      <CheckCircle2 className="w-3.5 h-3.5 text-foreground" />
                    </div>
                    <span className="font-medium text-foreground/80">{text}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            <ScrollAnimationWrapper animation="slide-left">
              <div className="bg-[var(--surface)] p-6 sm:p-8 border border-[var(--border-color)] relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-foreground/5 blur-3xl rounded-full pointer-events-none group-hover:bg-foreground/10 transition-colors duration-500" />
                
                <div className="mb-8 border-b border-[var(--border-color)] pb-6">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2 font-mono">
                    SEND A MESSAGE
                  </span>
                  <h3 className="text-2xl font-bold tracking-tight text-foreground mb-3">
                    Let's Build Something Together
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Tell us about your project and we'll get back to you shortly.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-8" noValidate>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative pt-4">
                      <input
                        id="name"
                        type="text"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-base rounded-none"
                        required
                      />
                      <label htmlFor="name" className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Full Name *</label>
                    </div>
                    <div className="relative pt-4">
                      <input
                        id="email"
                        type="email"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-base rounded-none"
                        required
                      />
                      <label htmlFor="email" className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Email *</label>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="relative pt-4">
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-base rounded-none"
                      />
                      <label htmlFor="phone" className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Phone</label>
                    </div>
                    <div className="relative pt-4">
                      <input
                        id="company"
                        type="text"
                        value={form.company}
                        onChange={(e) => setForm({ ...form, company: e.target.value })}
                        placeholder=" "
                        className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-base rounded-none"
                      />
                      <label htmlFor="company" className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Company</label>
                    </div>
                  </div>
                  <div className="relative pt-4">
                    <textarea
                      id="message"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      placeholder=" "
                      className="peer w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-2 text-base resize-none rounded-none"
                      required
                    />
                    <label htmlFor="message" className="absolute left-0 top-4 text-muted-foreground transition-all duration-300 peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-[10px] peer-focus:text-foreground peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-[10px] peer-[&:not(:placeholder-shown)]:text-foreground font-mono uppercase tracking-[0.2em] font-bold pointer-events-none">Message *</label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={submitted}
                    aria-disabled={submitted}
                    aria-live="polite"
                    className={`w-full flex items-center justify-center gap-3 px-6 py-4 font-semibold text-sm uppercase tracking-[0.1em] transition-colors rounded-none ${submitted ? 'bg-[var(--surface)] text-muted-foreground cursor-not-allowed' : 'bg-foreground text-background hover:opacity-90'}`}
                  >
                    {submitted ? "✓ Message Sent!" : <>Send Message <Send className="w-4 h-4" /></>}
                  </button>
                </form>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Contact Info Cards (overlapping hero) */}
      <section className="relative -mt-12 pb-24 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <StaggerChildren className="grid sm:grid-cols-1 md:grid-cols-3 gap-0 bg-background border border-[var(--border-color)]">
            {[
              {
                icon: Phone, title: "Call Us", info: "+91 984 8334 984",
                subInfo: "", href: "tel:+919848334984",
              },
              {
                icon: Mail, title: "General Email", info: "info@SimpleInsolutions.com",
                subInfo: "", href: "mailto:info@SimpleInsolutions.com",
              },
              {
                icon: MessageCircle, title: "WhatsApp", info: "Chat with us directly",
                subInfo: "", href: "https://wa.me/919848334984",
              },
            ].map((item, index) => (
              <StaggerItem key={item.title}>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className={`group block p-7 hover:bg-foreground hover:text-background transition-colors h-full ${
                    index !== 0 ? 'border-t md:border-t-0 md:border-l border-[var(--border-color)]' : ''
                  }`}
                >
                  <div className="mb-4 text-foreground group-hover:text-background transition-colors">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-foreground group-hover:text-background mb-3 font-mono transition-colors">{item.title}</h3>
                  <p className="text-base font-light text-foreground group-hover:text-background mb-1 transition-colors">{item.info}</p>
                  {item.subInfo && <p className="text-xs text-muted-foreground group-hover:text-muted transition-colors">{item.subInfo}</p>}
                </a>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>



      {/* Communication Section */}
      <CommunicationSection />


    </>
  );
}
