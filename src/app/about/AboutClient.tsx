"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Target, Eye, Users, Shield, Zap, Award, Heart } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import dynamic from "next/dynamic";
import { coreValues } from "@/data/team";



const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Award, Shield, Users, Zap, Target, Heart,
};

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-24 pb-16 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] animate-[shimmer_60s_linear_infinite] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-foreground leading-none tracking-[-0.04em] mt-8 mb-8"
          >
            About Us.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg sm:text-2xl font-light text-muted-foreground max-w-2xl leading-[1.6]"
          >
            We&apos;re a passionate team of technology experts committed to empowering businesses with innovative IT solutions.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollAnimationWrapper animation="slide-left" className="lg:sticky lg:top-40">
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] mb-6 leading-tight">
                Building the Future.
              </h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="space-y-8 text-lg text-muted-foreground font-light leading-[1.6] max-w-prose">
                <p>
                  SimpleIn Solutions acts as a strategic technology partner, helping SMBs and modern enterprises architect, automate, and scale their digital infrastructure.
                </p>
                <p>
                  We focus on engineering high-performance, future-ready technology solutions that directly align with your business objectives, moving beyond simple project delivery to actual business transformation.
                </p>
                <p>
                  By building integrated digital ecosystems, we streamline your operations, improve collaboration, and ensure scalable long-term growth. No shortcuts, just uncompromising engineering standards and honest partnerships.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollAnimationWrapper className="lg:sticky lg:top-40">
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Mission &amp; Vision
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] mb-8 leading-tight">
                What Drives Us.
              </h2>
            </ScrollAnimationWrapper>

            <div className="space-y-8">
              <ScrollAnimationWrapper>
              <div className="h-full p-10 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-8">
                  <Target className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground tracking-[-0.01em]">Our Mission</h3>
                <p className="text-[15px] max-w-prose text-muted-foreground font-light leading-[1.6]">
                  To accelerate enterprise growth by architecting state-of-the-art software, integrating AI-driven automation, and deploying resilient cloud infrastructure. We are committed to engineering excellence and delivering scalable technology that creates compounding value for our clients.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <div className="h-full p-10 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-8">
                  <Eye className="w-8 h-8 text-foreground group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-foreground tracking-[-0.01em]">Our Vision</h3>
                <p className="text-[15px] max-w-prose text-muted-foreground font-light leading-[1.6]">
                  To be the global benchmark for enterprise technology partnerships, recognized for uncompromising quality, engineering intelligence, and our ability to drive industry-defining digital transformation.
                </p>
              </div>
            </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
              What We Stand For
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.02em] mb-6 leading-tight">
              Our Core Values.
            </h2>
            <p className="text-lg md:text-xl font-light text-muted-foreground max-w-2xl leading-[1.6]">
              The principles that guide our work, our relationships, and our commitment to excellence.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const Icon = iconMap[value.icon] || Lightbulb;
              return (
                <StaggerItem key={value.title}>
                  <div className="group p-8 bg-background border border-[var(--border-color)] hover:border-foreground hover:bg-foreground hover:text-background transition-colors h-full flex flex-col">
                    <div className="mb-6">
                      <Icon className="w-7 h-7 text-foreground group-hover:text-background transition-colors" />
                    </div>
                    <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-background transition-colors tracking-tight">{value.title}</h3>
                    <p className="text-[15px] max-w-prose text-muted-foreground group-hover:text-muted leading-[1.6] flex-grow transition-colors">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6 leading-none">
              Ready to Work Together?
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground font-light mb-10 max-w-2xl mx-auto leading-[1.6]">
              Let&apos;s discuss how SimpleIn Solutions can help you achieve your technology goals and drive your business forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
