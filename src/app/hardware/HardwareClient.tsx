"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, CheckCircle2, Laptop, Monitor, Server, Wifi, HardDrive,
  Printer, Headphones, Building2, Cpu, Settings, ShoppingCart, FileCheck,
  Network, Send,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { hardwareCategories } from "@/data/hardware";
import { hardwareFAQs } from "@/data/faq";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  Cpu, Settings, ShoppingCart, FileCheck, Network,
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
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 gradient-hero overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "IT Hardware" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6"
          >
            IT Hardware <span className="bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">Sales</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl"
          >
            Premium IT hardware from leading brands with expert procurement, installation, and maintenance services.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="#quote"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Request a Quote <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Browse Products
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Hardware Categories */}
      <section className="py-24" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Product Categories
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Enterprise Hardware <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From laptops to servers and networking equipment — we provide end-to-end hardware procurement for businesses.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hardwareCategories.map((category) => {
              const Icon = iconMap[category.icon] || Monitor;
              return (
                <StaggerItem key={category.id}>
                  <div className="group h-full p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7 text-[var(--secondary)]" />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{category.title}</h3>
                    <p className="text-sm text-muted leading-relaxed mb-5">
                      {category.description}
                    </p>

                    {category.features.length > 0 && (
                      <ul className="space-y-2 mb-5">
                        {category.features.slice(0, 4).map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] mt-0.5 flex-shrink-0" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    )}

                    {category.brands.length > 0 && (
                      <div className="pt-5 border-t border-[var(--border-color)]">
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                          Top Brands
                        </p>
                        <div className="flex flex-wrap gap-1.5">
                          {category.brands.slice(0, 5).map((b) => (
                            <span
                              key={b}
                              className="px-2 py-0.5 rounded text-[11px] font-medium bg-[var(--background)] border border-[var(--border-color)]"
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
      <section className="py-24 bg-[var(--surface)]" id="quote">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Get a Quote
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Request a Hardware <span className="gradient-text">Quote</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Tell us what you need and our team will provide a detailed quote with the best prices from authorized distributors.
            </p>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper>
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-background border border-[var(--border-color)]" noValidate>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="quote-name" className="block text-sm font-medium mb-2">Name *</label>
                  <input
                    id="quote-name"
                    type="text"
                    value={quoteForm.name}
                    onChange={(e) => setQuoteForm({ ...quoteForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="quote-email" className="block text-sm font-medium mb-2">Email *</label>
                  <input
                    id="quote-email"
                    type="email"
                    value={quoteForm.email}
                    onChange={(e) => setQuoteForm({ ...quoteForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                    placeholder="you@email.com"
                    required
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="quote-company" className="block text-sm font-medium mb-2">Company</label>
                  <input
                    id="quote-company"
                    type="text"
                    value={quoteForm.company}
                    onChange={(e) => setQuoteForm({ ...quoteForm, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                    placeholder="Company name"
                  />
                </div>
                <div>
                  <label htmlFor="quote-product" className="block text-sm font-medium mb-2">Product Type *</label>
                  <select
                    id="quote-product"
                    value={quoteForm.product}
                    onChange={(e) => setQuoteForm({ ...quoteForm, product: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-foreground focus:outline-none focus:border-[var(--secondary)] transition-colors"
                    required
                  >
                    <option value="">Select a category</option>
                    {hardwareCategories.map((c) => (
                      <option key={c.id} value={c.id}>{c.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="quote-quantity" className="block text-sm font-medium mb-2">Quantity</label>
                <input
                  id="quote-quantity"
                  type="text"
                  value={quoteForm.quantity}
                  onChange={(e) => setQuoteForm({ ...quoteForm, quantity: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                  placeholder="e.g., 50 units"
                />
              </div>
              <div className="mt-4">
                <label htmlFor="quote-message" className="block text-sm font-medium mb-2">Specifications &amp; Requirements</label>
                <textarea
                  id="quote-message"
                  rows={4}
                  value={quoteForm.message}
                  onChange={(e) => setQuoteForm({ ...quoteForm, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors resize-none"
                  placeholder="Required specs, brands preferred, delivery timeline, etc."
                />
              </div>
              <button
                type="submit"
                className="w-full mt-6 flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg hover:shadow-[var(--secondary)]/25 transition-all hover:scale-[1.02]"
              >
                {submitted ? "✓ Quote Request Sent!" : <>Request Quote <Send className="w-4 h-4" /></>}
              </button>
            </form>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Hardware <span className="gradient-text">Questions</span>
            </h2>
          </ScrollAnimationWrapper>

          <div className="space-y-3">
            {hardwareFAQs.map((faq, i) => (
              <ScrollAnimationWrapper key={i} delay={i * 0.05}>
                <details className="group rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all">
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

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Need Help Choosing?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Our hardware experts can help you select the right equipment for your business needs and budget.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[var(--secondary)]/25 transition-all hover:scale-105"
            >
              Talk to an Expert <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
