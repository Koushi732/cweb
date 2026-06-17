"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch, Palette, Wrench } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { services } from "@/data/services";
import dynamic from "next/dynamic";
import { serviceFAQs } from "@/data/faq";

const ProcessSection = dynamic(() => import("@/components/ui/ProcessSection"), { ssr: true });
const WhyChooseUsSection = dynamic(() => import("@/components/ui/WhyChooseUsSection"), { ssr: true });

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch, Palette, Wrench,
};

export default function ServicesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "IT Services" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-tighter mt-8 mb-8"
          >
            Our <span className="text-[var(--accent)]">Services.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-tight"
          >
            Comprehensive IT services designed to accelerate your digital transformation and drive business growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-12 flex flex-col sm:flex-row gap-6"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-medium text-sm hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#services-list"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-[var(--border-color)] text-foreground font-medium text-sm hover:bg-[var(--surface)] transition-colors"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Overview Grid */}
      <section className="py-32 bg-background" id="services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-16">
            <span className="inline-block text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">
              Complete IT Service Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl font-light">
              From custom software development to AI integration and cloud infrastructure.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <StaggerItem key={service.id}>
                  <Link
                    href={`#${service.id}`}
                    className="group block h-full border-t border-[var(--border-color)] pt-8 hover:border-foreground transition-colors"
                  >
                    <div className="mb-6">
                      <Icon className="w-8 h-8 text-muted-foreground group-hover:text-[var(--accent)] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{service.description}</p>
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
            className={`py-32 border-t border-[var(--border-color)] ${index % 2 === 0 ? "bg-background" : "bg-[var(--surface)]"}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <ScrollAnimationWrapper>
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
                  <div className="max-w-3xl">
                    <span className="text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-4 block">
                      Service {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">{service.title}</h2>
                    <p className="text-xl md:text-2xl font-light text-muted-foreground leading-tight">{service.description}</p>
                  </div>
                  <Icon className="w-16 h-16 text-muted-foreground/20 hidden md:block" />
                </div>
              </ScrollAnimationWrapper>

              <div className="grid lg:grid-cols-12 gap-16 lg:gap-8 mt-16">
                <div className="lg:col-span-7">
                  <ScrollAnimationWrapper>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-8">Key Benefits</h3>
                    <ul className="space-y-6">
                      {service.benefits.map((benefit) => (
                        <li key={benefit} className="flex items-start gap-4">
                          <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                          <span className="text-lg text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-3 mt-12 px-8 py-4 bg-foreground text-background font-medium text-sm hover:bg-[var(--accent)] transition-colors"
                    >
                      Discuss This Service <ArrowRight className="w-4 h-4" />
                    </Link>
                  </ScrollAnimationWrapper>
                </div>

                <div className="lg:col-span-5 lg:pl-12 mt-12 lg:mt-0">
                  <ScrollAnimationWrapper>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-8">Technologies</h3>
                    <div className="flex flex-wrap gap-3">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 border border-[var(--border-color)] text-sm font-medium text-foreground uppercase tracking-wider"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </ScrollAnimationWrapper>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ */}
      <section className="py-32 bg-background border-t border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-16">
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
              FAQ.
            </h2>
          </ScrollAnimationWrapper>

          <div className="border-t border-[var(--border-color)]">
            {serviceFAQs.map((faq, i) => (
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
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Ready to Start?
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your technology goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
            >
              Get a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}

