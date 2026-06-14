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
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 gradient-hero overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Industries" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6"
          >
            Industries We Serve
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl"
          >
            Domain expertise across diverse sectors enables us to deliver solutions that address industry-specific challenges.
          </motion.p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Sectors We Work In
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Tailored Solutions for <span className="gradient-text">Every Industry</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We understand the unique challenges of each industry and deliver solutions that drive real business outcomes.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid md:grid-cols-2 gap-6">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <StaggerItem key={industry.id}>
                  <div className="group relative p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]/10 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                        <Icon className="w-7 h-7 text-[var(--secondary)]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold mb-1">{industry.title}</h3>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                          ))}
                          <span className="text-xs text-muted ml-1">Industry Expert</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-muted leading-relaxed mb-6">{industry.description}</p>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-3">Key Solutions:</p>
                      <div className="grid sm:grid-cols-2 gap-2">
                        {industry.solutions.map((solution) => (
                          <div key={solution} className="flex items-center gap-2 text-sm text-muted">
                            <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] flex-shrink-0" />
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
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              We work across all sectors and customize solutions to your specific needs. Let&apos;s discuss how we can help your business.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[var(--secondary)]/25 transition-all hover:scale-105"
            >
              Discuss Your Needs <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
