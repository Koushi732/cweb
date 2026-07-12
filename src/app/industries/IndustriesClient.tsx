"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Heart, GraduationCap, ShoppingBag, Factory, Truck, Landmark, Building, Building2, Rocket, Briefcase, HeartHandshake, Monitor, Wrench, Settings, Users, Target } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { industries } from "@/data/industries";

const iconMap: Record<string, React.ElementType> = {
  Heart, GraduationCap, ShoppingBag, Factory, Truck, Landmark, Building, Building2, Rocket, Briefcase, HeartHandshake, Monitor, Wrench, Settings, Users, Target
};

// We won't need the bento grid function anymore

export default function IndustriesClient() {
  const mainIndustries = industries.filter(i => !["startups", "smb", "enterprises"].includes(i.id));
  const businessSizes = industries.filter(i => ["startups", "smb", "enterprises"].includes(i.id));
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] animate-[shimmer_60s_linear_infinite] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Industries" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-none tracking-[-0.04em] mt-8 mb-8"
          >
            Industries We Serve.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-2xl font-light text-muted-foreground max-w-2xl leading-[1.6]"
          >
            Domain expertise across diverse sectors enables us to deliver solutions that address industry-specific challenges.
          </motion.p>
        </div>
      </section>

      {/* Industries Bento Grid */}
      <section className="py-24 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Sectors We Work In
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] mb-6">
                Tailored Solutions.
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground font-light max-w-xl leading-[1.6]">
                We understand that every industry has unique operational challenges. Our approach is to design and develop technology solutions tailored to each client&apos;s specific business goals.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {mainIndustries.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              
              return (
                <StaggerItem key={industry.id}>
                  <div className="group relative p-8 bg-background border border-[var(--border-color)] hover:border-foreground hover:bg-foreground hover:text-background transition-colors flex flex-col items-center justify-center text-center h-full">
                    <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-10 h-10 text-muted-foreground group-hover:text-background transition-colors" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground group-hover:text-background transition-colors tracking-tight mb-3">
                      {industry.title}
                    </h3>
                    <p className="text-sm text-muted-foreground group-hover:text-background/80 font-light leading-relaxed">
                      {industry.description}
                    </p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Business Size / Scale Section */}
      <section className="py-24 bg-background border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-16 text-center max-w-3xl mx-auto">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-4 font-mono">
              Operating at Every Scale
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-foreground mb-6">
              Scaled to Your Size.
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-[1.6]">
              Whether you are building your first MVP or modernizing legacy enterprise systems, we adapt our engineering approach to match your scale, speed, and budget.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {businessSizes.map((size) => {
              const Icon = iconMap[size.icon] || Rocket;
              return (
                <StaggerItem key={size.id}>
                  <div className="p-8 md:p-10 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-all duration-300 h-full flex flex-col group text-center items-center">
                    <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center border border-[var(--border-color)] mb-8 group-hover:scale-110 group-hover:bg-foreground transition-all duration-500 shadow-sm">
                      <Icon className="w-8 h-8 text-foreground group-hover:text-background transition-colors" />
                    </div>
                    <h3 className="text-2xl font-bold tracking-tight mb-4">{size.title}</h3>
                    <p className="text-muted-foreground font-light leading-[1.6] mb-8 flex-grow">{size.description}</p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {size.solutions.slice(0, 2).map((sol) => (
                        <span key={sol} className="text-xs font-bold text-foreground bg-background border border-[var(--border-color)] px-2 py-1 uppercase tracking-widest font-mono">
                          {sol}
                        </span>
                      ))}
                    </div>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-background border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6 leading-none">
              Don&apos;t See Your Industry?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-[1.6]">
              We work across all sectors and customize solutions to your specific needs. Let&apos;s discuss how we can help your business.
            </p>
            <a
              href="https://wa.me/919848334984?text=Hi%20SimpleIn%20Solutions%2C%20I%20was%20checking%20out%20the%20Industries%20page%20and%20would%20like%20to%20discuss%20our%20needs."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
            >
              Discuss Your Needs <ArrowRight className="w-5 h-5" />
            </a>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
