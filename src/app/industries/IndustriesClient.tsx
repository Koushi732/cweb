"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart, GraduationCap, ShoppingBag, Factory, Truck, Landmark, Building, Building2, Rocket, Briefcase } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { industries } from "@/data/industries";

const iconMap: Record<string, React.ElementType> = {
  Heart, GraduationCap, ShoppingBag, Factory, Truck, Landmark, Building, Building2, Rocket, Briefcase,
};

export default function IndustriesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] animate-[shimmer_60s_linear_infinite] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Industries" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-[-0.04em] mt-8 mb-8"
          >
            Industries We Serve.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-[1.6]"
          >
            Domain expertise across diverse sectors enables us to deliver solutions that address industry-specific challenges.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-4 font-mono">
              Sectors We Work In
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.02em] text-foreground mb-6">
              Tailored Solutions.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-4xl leading-[1.6]">
              We understand that every industry has unique operational challenges. Our approach is to design and develop technology solutions tailored to each client&apos;s specific business goals rather than offering one-size-fits-all products.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <StaggerItem key={industry.id}>
                  <div className="group relative p-10 bg-background border border-[var(--border-color)] hover:border-foreground hover:bg-foreground hover:text-background transition-colors flex flex-col h-full">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                        <Icon className="w-10 h-10 text-muted-foreground group-hover:text-background transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-background transition-colors tracking-tight">{industry.title}</h3>
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground group-hover:text-muted leading-[1.6] mb-8 flex-grow transition-colors">{industry.description}</p>
                    <div className="pt-6 border-t border-[var(--border-color)] group-hover:border-background/20 transition-colors">
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-foreground group-hover:text-background mb-4 font-mono transition-colors">Key Solutions</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {industry.solutions.map((solution) => (
                          <div key={solution} className="flex items-start gap-3 text-sm text-muted-foreground group-hover:text-background transition-colors">
                            <CheckCircle2 className="w-4 h-4 text-foreground group-hover:text-background flex-shrink-0 mt-0.5 transition-colors" />
                            <span>{solution}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-background border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-8 leading-none">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-[1.6]">
              We work across all sectors and customize solutions to your specific needs. Let&apos;s discuss how we can help your business.
            </p>
            <a
              href="https://wa.me/919848334984?text=Hi%20SimpleIn%20Solutions%2C%20I%20was%20checking%20out%20the%20Industries%20page%20and%20would%20like%20to%20discuss%20our%20needs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
            >
              Discuss Your Needs <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
