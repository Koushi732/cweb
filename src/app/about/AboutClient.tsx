"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Target, Eye, Users, Shield, Zap, Award, Heart } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import dynamic from "next/dynamic";
import { coreValues } from "@/data/team";

const ProcessSection = dynamic(() => import("@/components/ui/ProcessSection"), { ssr: true });
const WhyChooseUsSection = dynamic(() => import("@/components/ui/WhyChooseUsSection"), { ssr: true });

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Award, Shield, Users, Zap, Target, Heart,
};

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] animate-[shimmer_60s_linear_infinite] opacity-50" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-[-0.04em] mt-8 mb-8"
          >
            About Us.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-[1.6]"
          >
            We&apos;re a passionate team of technology experts committed to empowering businesses with innovative IT solutions.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollAnimationWrapper animation="slide-left" className="lg:sticky lg:top-40">
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.02em] mb-8 leading-tight">
                Building the Future.
              </h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="space-y-12 text-xl text-muted-foreground font-light leading-[1.8]">
                <p>
                  SimpleIn Solutions acts as a long-term technology partner, helping Startups, SMBs, and Growing Enterprises design, build, automate, and scale their digital operations.
                </p>
                <p>
                  We focus on delivering practical, high-quality, and future-ready technology solutions that align with your business objectives, rather than simply completing development projects.
                </p>
                <p>
                  By building integrated digital ecosystems, we streamline your operations, improve collaboration, and support long-term growth. No shortcuts, just solid engineering and honest partnerships.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-background border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollAnimationWrapper className="lg:sticky lg:top-40">
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Mission &amp; Vision
              </span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.02em] mb-8 leading-tight">
                What Drives Us.
              </h2>
            </ScrollAnimationWrapper>

            <div className="space-y-8">
              <ScrollAnimationWrapper>
              <div className="h-full p-12 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-8">
                  <Target className="w-10 h-10 text-foreground group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-foreground tracking-[-0.01em]">Our Mission</h3>
                <p className="text-lg text-muted-foreground font-light leading-[1.6]">
                  Our mission is to help businesses accelerate growth through innovative software development, AI automation, cloud technologies, enterprise IT solutions, and digital transformation. We focus on delivering reliable, scalable, and business-driven technology solutions that create measurable value for our clients.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <div className="h-full p-12 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-8">
                  <Eye className="w-10 h-10 text-foreground group-hover:scale-110 transition-transform" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-foreground tracking-[-0.01em]">Our Vision</h3>
                <p className="text-lg text-muted-foreground font-light leading-[1.6]">
                  To become a globally trusted technology company recognized for building intelligent digital products, delivering high-quality IT services, and empowering businesses through innovation, automation, and modern software solutions.
                </p>
              </div>
            </ScrollAnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
              What We Stand For
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-[-0.02em] mb-8 leading-tight">
              Our Core Values.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl leading-[1.6]">
              The principles that guide our work, our relationships, and our commitment to excellence.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const Icon = iconMap[value.icon] || Lightbulb;
              return (
                <StaggerItem key={value.title}>
                  <div className="group p-10 bg-background border border-[var(--border-color)] hover:border-foreground hover:bg-foreground hover:text-background transition-colors h-full flex flex-col">
                    <div className="mb-8">
                      <Icon className="w-8 h-8 text-foreground group-hover:text-background transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground group-hover:text-background transition-colors tracking-tight">{value.title}</h3>
                    <p className="text-base text-muted-foreground group-hover:text-muted leading-[1.6] flex-grow transition-colors">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUsSection />

      {/* Process */}
      <ProcessSection />

      {/* CTA */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-[-0.04em] mb-8 leading-none">
              Ready to Work Together?
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground font-light mb-12 max-w-2xl mx-auto leading-[1.6]">
              Let&apos;s discuss how SimpleIn Solutions can help you achieve your technology goals and drive your business forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
