"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart, GraduationCap, ShoppingBag, Factory, Truck, Landmark, Building, Building2, Rocket, Briefcase, Star } from "lucide-react";
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
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Industries" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-tighter mt-8 mb-8"
          >
            Industries We <span className="text-[var(--accent)]">Serve.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-tight"
          >
            Domain expertise across diverse sectors enables us to deliver solutions that address industry-specific challenges.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-semibold text-[var(--accent)] uppercase tracking-widest mb-4">
              Sectors We Work In
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground mb-6">
              Tailored Solutions.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl leading-tight">
              We understand the unique challenges of each industry and deliver solutions that drive real business outcomes.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid md:grid-cols-2 gap-8">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <StaggerItem key={industry.id}>
                  <div className="group relative p-10 bg-background border border-[var(--border-color)] hover:border-foreground transition-colors flex flex-col h-full">
                    <div className="flex items-start gap-6 mb-8">
                      <div className="mb-6 group-hover:scale-110 transition-transform flex-shrink-0">
                        <Icon className="w-10 h-10 text-muted-foreground group-hover:text-[var(--accent)] transition-colors" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 text-foreground">{industry.title}</h3>
                        <div className="flex items-center gap-2">
                          <div className="flex gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-foreground fill-foreground" />
                            ))}
                          </div>
                          <span className="text-xs uppercase tracking-widest text-muted-foreground font-semibold">Industry Expert</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed mb-8 flex-grow">{industry.description}</p>
                    <div className="pt-6 border-t border-[var(--border-color)]">
                      <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-4">Key Solutions</p>
                      <div className="grid sm:grid-cols-2 gap-4">
                        {industry.solutions.map((solution) => (
                          <div key={solution} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle2 className="w-4 h-4 text-[var(--accent)] flex-shrink-0 mt-0.5" />
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
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-xl sm:text-2xl text-muted font-light mb-12 max-w-2xl mx-auto">
              We work across all sectors and customize solutions to your specific needs. Let&apos;s discuss how we can help your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
            >
              Discuss Your Needs <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}

