"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Laptop, Monitor, Server, Wifi, HardDrive,
  Printer, Headphones, Building2, Cpu, Settings, ShoppingCart, FileCheck,
  Network, Send, Camera, Fingerprint, Building, Shield
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { hardwareCategories } from "@/data/hardware";
import { hardwareFAQs } from "@/data/faq";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  Cpu, Settings, ShoppingCart, FileCheck, Network, Camera, Fingerprint, Building, Shield,
};

export default function HardwareClient() {
  const [quoteForm, setQuoteForm] = useState({
    name: "", email: "", company: "", product: "", quantity: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setQuoteForm({ name: "", email: "", company: "", product: "", quantity: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] animate-[shimmer_60s_linear_infinite] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "IT Hardware" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-[-0.04em] mt-8 mb-8"
          >
            Hardware Sales.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-[1.6]"
          >
            Premium IT hardware from leading brands with expert procurement, installation, and maintenance services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#quote"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background font-bold text-sm hover:opacity-90 transition-opacity uppercase tracking-[0.1em] rounded-none"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-3 px-8 py-5 border border-foreground text-foreground font-bold text-sm hover:bg-foreground hover:text-background transition-colors uppercase tracking-[0.1em] rounded-none"
            >
              Browse Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hardware Categories */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-4 font-mono">
              Product Categories
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.02em] text-foreground mb-6">
              Enterprise Hardware Solutions.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl leading-[1.6]">
              From laptops to servers and networking equipment — we provide end-to-end hardware procurement for businesses.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {hardwareCategories.map((category) => {
              const Icon = iconMap[category.icon] || Monitor;
              return (
                <StaggerItem key={category.id}>
                  <div className="group h-full p-10 bg-background border border-[var(--border-color)] hover:border-foreground transition-colors flex flex-col hover:bg-foreground hover:text-background">
                    <div className="mb-8">
                      <Icon className="w-10 h-10 text-muted-foreground group-hover:text-background transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-background mb-4 transition-colors tracking-tight">{category.title}</h3>
                    <p className="text-base text-muted-foreground group-hover:text-muted leading-[1.6] mb-8 flex-grow transition-colors">
                      {category.description}
                    </p>

                    {category.features.length > 0 && (
                      <ul className="space-y-4 mb-8">
                        {category.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-start gap-4">
                            <CheckCircle2 className="w-5 h-5 text-muted-foreground group-hover:text-background mt-0.5 flex-shrink-0 transition-colors" />
                            <span className="text-base text-foreground group-hover:text-background transition-colors">{f}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {category.brands.length > 0 && (
                      <div className="pt-6 border-t border-[var(--border-color)] group-hover:border-background/20 transition-colors">
                        <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground group-hover:text-background mb-4 font-mono transition-colors">
                          Top Brands
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {category.brands.slice(0, 5).map((b) => (
                            <span
                              key={b}
                              className="px-3 py-2 border border-[var(--border-color)] group-hover:border-background/20 text-xs font-bold text-muted-foreground group-hover:text-background uppercase tracking-[0.1em] transition-colors rounded-none font-mono"
                            >
                              {b}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Request Quote Form */}
      <section className="py-32 bg-background border-b border-[var(--border-color)]" id="quote">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.02em] text-foreground mb-6">
              Request a Quote.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground leading-[1.6]">
              Tell us what you need and our team will provide a detailed quote with the best prices from authorized distributors.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <form onSubmit={handleSubmit} className="border-t border-[var(--border-color)] pt-12" noValidate>
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="quote-name" className="block text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4 font-mono">Name *</label>
                  <input
                    id="quote-name"
                    type="text"
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg rounded-none"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="block text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4 font-mono">Email *</label>
                  <input
                    id="quote-email"
                    type="email"
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg rounded-none"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-8 mb-8">
                <div>
                  <label htmlFor="quote-company" className="block text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4 font-mono">Company</label>
                  <input
                    id="quote-company"
                    type="text"
                    value={quoteForm.company}
                    onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg rounded-none"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="quote-product" className="block text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4 font-mono">Product Type *</label>
                  <select
                    id="quote-product"
                    value={quoteForm.product}
                    onChange={(e) => setQuoteForm({ ...quoteForm, product: e.target.value })}
                    className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg appearance-none cursor-pointer rounded-none"
                    required
                  >
                    <option value="" disabled className="text-muted-foreground">Select a category</option>
                    {hardwareCategories.map((c) => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-8">
                <label htmlFor="quote-quantity" className="block text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4 font-mono">Quantity</label>
                <input
                  id="quote-quantity"
                  type="text"
                  value={quoteForm.quantity}
                  onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })}
                  className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg rounded-none"
                  placeholder="e.g., 50 units"
                />
              </div>
              <div className="mb-12">
                <label htmlFor="quote-message" className="block text-xs font-bold uppercase tracking-[0.2em] text-foreground mb-4 font-mono">Specifications &amp; Requirements</label>
                <textarea
                  id="quote-message"
                  rows={4}
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg resize-none rounded-none"
                  placeholder="Required specs, brands preferred, delivery timeline, etc."
                />
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background font-bold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
              >
                {submitted ? "✓ Quote Request Sent!" : <>Request Quote <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.02em] text-foreground mb-6">
              FAQ.
            </h2>
          </ScrollAnimationWrapper>

          <div className="border-t border-[var(--border-color)]">
            {hardwareFAQs.map((faq, i) => (
              <ScrollAnimationWrapper key={i} delay={i * 0.05}>
                <details className="group border-b border-[var(--border-color)]">
                  <summary className="flex items-center justify-between gap-4 py-8 cursor-pointer text-xl font-bold text-foreground list-none">
                    {faq.question}
                    <span className="text-muted-foreground transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <div className="pb-8 text-lg text-muted-foreground font-light leading-relaxed">
                    {faq.answer}
                  </div>
                </details>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-8 leading-none">
              Need Help Choosing?
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-[1.6]">
              Our hardware experts can help you select the right equipment for your business needs and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
            >
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
