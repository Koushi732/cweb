"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch, Palette, Wrench } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { services } from "@/data/services";
import { serviceFAQs } from "@/data/faq";

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch, Palette, Wrench,
};

export default function ServicesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 gradient-hero overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "IT Services" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6"
          >
            Our <span className="bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">Services</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl"
          >
            Comprehensive IT services designed to accelerate your digital transformation and drive business growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg transition-all hover:scale-105"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#services-list"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border-2 border-white/20 text-white font-semibold hover:bg-white/10 transition-all"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-24" id="services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Complete IT Service <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From custom software development to AI integration and cloud infrastructure — we deliver end-to-end solutions.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <StaggerItem key={service.id}>
                  <Link
                    href={`#${service.id}`}
                    className="group block h-full"
                  >
                    <div className="relative p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover text-center h-full">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-7 h-7 text-[var(--secondary)]" />
                      </div>
                      <h3 className="text-sm font-semibold">{service.title}</h3>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, index) => {
        const Icon = iconMap[service.icon] || Code2;
        return (
          <section
            key={service.id}
            id={service.id}
            className={`py-24 ${index % 2 === 0 ? "" : "bg-[var(--surface)]"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollAnimationWrapper>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold">{service.title}</h2>
                  </div>
                </div>
                <p className="text-lg text-muted max-w-3xl mb-12">{service.description}</p>
              </ScrollAnimationWrapper>

              <div className="grid lg:grid-cols-2 gap-12">
                <ScrollAnimationWrapper>
                  <h3 className="text-xl font-semibold mb-6">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-start gap-3 text-sm">
                        <CheckCircle2 className="w-5 h-5 text-[var(--secondary)] mt-0.5 flex-shrink-0" />
                        <span className="text-foreground">{benefit}</span>
                      </li>
                    ))}
                  </ul>

                  <h3 className="text-xl font-semibold mt-10 mb-4">Technologies We Use</h3>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 rounded-lg bg-[var(--surface)] border border-[var(--border-color)] text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all"
                  >
                    Discuss This Service <ArrowRight className="w-4 h-4" />
                  </Link>
                </ScrollAnimationWrapper>

                <ScrollAnimationWrapper>
                  <h3 className="text-xl font-semibold mb-6">Our Process</h3>
                  <div className="space-y-4">
                    {service.process.map((step) => (
                      <div
                        key={step.step}
                        className="flex gap-4 p-5 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all"
                      >
                        <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-sm">
                          {String(step.step).padStart(2, "0")}
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">{step.title}</h4>
                          <p className="text-sm text-muted leading-relaxed">{step.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollAnimationWrapper>
              </div>
            </div>
          </section>
        );
      })}

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
            {serviceFAQs.map((faq, i) => (
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

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Start Your <span className="bg-gradient-to-r from-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">Project?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your technology goals. Get a free consultation with our experts.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[var(--secondary)]/25 transition-all hover:scale-105"
            >
              Get a Free Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
