"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch, Palette, Wrench, Megaphone, Network, Zap, Building2 } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { services } from "@/data/services";
import dynamic from "next/dynamic";

const ProcessSection = dynamic(() => import("@/components/ui/ProcessSection"), { ssr: true });

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch, Palette, Wrench, Megaphone, Network, Zap, Building2
};

export default function ServicesClient() {
  const [activeService, setActiveService] = useState<string | null>(null);

  const handleServiceSelect = (id: string) => {
    if (activeService === id) {
      setActiveService(null);
      return;
    }
    setActiveService(id);
    setTimeout(() => {
      document.getElementById('service-details')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] animate-[shimmer_60s_linear_infinite] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "IT Services" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-none tracking-[-0.04em] mt-8 mb-8"
          >
            Our Services.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-2xl font-light text-muted-foreground max-w-2xl leading-[1.6]"
          >
            Comprehensive IT services designed to accelerate your digital transformation and drive business growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-12 flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-semibold text-sm hover:opacity-90 transition-opacity uppercase tracking-[0.1em] rounded-none"
            >
              Get Started <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Master-Detail View */}
      <section className="py-24 bg-background" id="services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-16">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-4 font-mono">
              What We Offer
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] text-foreground mb-6">
              Complete IT Service Portfolio
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl font-light leading-[1.6]">
              From custom software development to AI integration and cloud infrastructure.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {services.map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              const isActive = activeService === service.id;
              
              return (
                <StaggerItem key={service.id}>
                  <button
                    id={service.id}
                    onClick={() => handleServiceSelect(service.id)}
                    className={`w-full text-left h-full border p-5 transition-all duration-300 group scroll-mt-32 ${
                      isActive 
                        ? 'border-foreground bg-foreground text-background shadow-lg scale-[1.02]' 
                        : 'border-[var(--border-color)] hover:border-foreground/50 bg-background hover:bg-[var(--surface)] text-foreground'
                    }`}
                  >
                    <div className="mb-5">
                      <Icon className={`w-7 h-7 transition-colors ${isActive ? 'text-background' : 'text-muted-foreground group-hover:text-foreground'}`} />
                    </div>
                    <h3 className={`text-base font-bold mb-2 ${isActive ? 'text-background' : 'text-foreground'}`}>{service.title}</h3>
                    <p className={`text-sm leading-relaxed line-clamp-2 max-w-prose ${isActive ? 'text-background/80' : 'text-muted-foreground'}`}>{service.description}</p>
                  </button>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
          
          {/* Dynamic Detail Panel */}
          <div id="service-details" className="scroll-mt-32">
            <AnimatePresence mode="wait">
              {services.filter(s => s.id === activeService).map((service) => {
                const Icon = iconMap[service.icon] || Code2;
                const currentIndex = services.findIndex(s => s.id === activeService);
                const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
                const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-[var(--surface)] border border-[var(--border-color)] p-6 lg:p-8 relative overflow-hidden"
                  >
                    <Icon className="absolute -right-8 -top-8 w-64 h-64 text-foreground/[0.03] pointer-events-none" />
                    
                    <div className="relative z-10 max-w-4xl">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-12 h-12 bg-foreground text-background flex items-center justify-center shrink-0">
                          <Icon className="w-6 h-6" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">{service.title}</h3>
                      </div>
                      
                      <p className="text-base sm:text-lg font-light leading-[1.6] mb-6 max-w-3xl text-foreground/90">
                        {service.description}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-4 font-mono border-b border-[var(--border-color)] pb-3">Key Benefits</h4>
                          <ul className="space-y-3">
                            {service.benefits.map((benefit) => (
                              <li key={benefit} className="flex items-start gap-3">
                                <CheckCircle2 className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-4 font-mono border-b border-[var(--border-color)] pb-3">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {service.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-2.5 py-1 border border-[var(--border-color)] bg-background text-[10px] font-bold text-foreground uppercase tracking-[0.1em] rounded-none font-mono"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                          
                          <div className="mt-8">
                            <Link
                              href="/contact"
                              className="inline-flex items-center gap-3 px-6 py-3 bg-foreground text-background font-bold text-xs uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none w-full justify-center sm:w-auto"
                            >
                              Discuss This Service <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </div>
                      </div>
                      
                      {/* Navigation Controls */}
                      <div className="mt-10 pt-6 border-t border-[var(--border-color)] flex items-center justify-between">
                        <button
                          onClick={() => prevService && handleServiceSelect(prevService.id)}
                          disabled={!prevService}
                          className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors disabled:opacity-20 disabled:cursor-not-allowed font-mono"
                        >
                          ← Previous Service
                        </button>
                        <button
                          onClick={() => nextService && handleServiceSelect(nextService.id)}
                          disabled={!nextService}
                          className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors disabled:opacity-20 disabled:cursor-not-allowed font-mono"
                        >
                          Next Service →
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection />
      {/* CTA */}
      <section className="py-24 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6 leading-none">
              Ready to Start?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-[1.6]">
              Let&apos;s discuss how we can help you achieve your technology goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 border border-foreground bg-foreground text-background font-semibold text-sm uppercase tracking-[0.1em] hover:bg-background hover:text-foreground transition-colors rounded-none"
            >
              Get a Consultation <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
