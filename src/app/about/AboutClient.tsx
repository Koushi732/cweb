"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Lightbulb, Target, Eye, Users, Shield, Zap, Award, Heart } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { coreValues, milestones, stats } from "@/data/team";

const iconMap: Record<string, React.ElementType> = {
  Lightbulb, Award, Shield, Users, Zap, Target, Heart,
};

export default function AboutClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-tighter mt-8 mb-8"
          >
            About <span className="text-[var(--accent)]">Us.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-tight"
          >
            We&apos;re a passionate team of technology experts committed to empowering businesses with innovative IT solutions that drive growth and digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ScrollAnimationWrapper animation="slide-left">
              <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
                Our Story
              </span>
              <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-tight">
                Building the Future.
              </h2>
              <div className="space-y-6 text-lg text-muted-foreground font-light leading-relaxed">
                <p>
                  Founded in 2018, SimpleIn Solutions started with a simple mission: make enterprise-grade technology accessible to businesses of all sizes. What began as a small team of passionate developers has grown into a full-service IT company serving clients across multiple industries.
                </p>
                <p>
                  Today, we specialize in custom software development, cloud infrastructure, cybersecurity, AI solutions, and enterprise hardware procurement. Our 50+ team members bring diverse expertise and a shared commitment to excellence.
                </p>
                <p>
                  We&apos;ve successfully delivered 500+ projects to clients ranging from startups to large enterprises, always maintaining the same dedication to quality, innovation, and customer success that defined us from day one.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right" className="grid grid-cols-2 gap-6 lg:mt-24">
              {stats.map((stat) => (
                <div key={stat.label} className="p-8 bg-background border border-[var(--border-color)] text-left hover:border-foreground transition-colors">
                  <div className="text-4xl sm:text-5xl font-bold text-foreground mb-4 font-serif tracking-tighter">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{stat.label}</p>
                </div>
              ))}
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-32 bg-background border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
              Mission &amp; Vision
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-tight">
              What Drives Us.
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimationWrapper>
              <div className="h-full p-12 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-8">
                  <Target className="w-10 h-10 text-muted-foreground group-hover:text-[var(--accent)] transition-colors" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">Our Mission</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  To empower businesses with innovative, reliable, and scalable technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <div className="h-full p-12 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-8">
                  <Eye className="w-10 h-10 text-muted-foreground group-hover:text-[var(--accent)] transition-colors" />
                </div>
                <h3 className="text-3xl font-bold mb-6 text-foreground">Our Vision</h3>
                <p className="text-lg text-muted-foreground font-light leading-relaxed">
                  To be the most trusted IT partner for businesses worldwide, recognized for our technical excellence, innovative solutions, and unwavering commitment to client success.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
              What We Stand For
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Our Core Values.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl leading-tight">
              The principles that guide our work, our relationships, and our commitment to excellence.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => {
              const Icon = iconMap[value.icon] || Lightbulb;
              return (
                <StaggerItem key={value.title}>
                  <div className="group p-10 bg-background border border-[var(--border-color)] hover:border-foreground transition-colors h-full flex flex-col">
                    <div className="mb-8">
                      <Icon className="w-8 h-8 text-muted-foreground group-hover:text-[var(--accent)] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{value.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed flex-grow">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Growth Roadmap / Milestones */}
      <section className="py-32 bg-background border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
              Our Journey
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Growth Roadmap.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl leading-tight">
              From humble beginnings to becoming a trusted technology partner for businesses across India.
            </p>
          </ScrollAnimationWrapper>

          <div className="max-w-5xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <ScrollAnimationWrapper key={milestone.year} delay={i * 0.05}>
                  <div className="flex flex-col md:flex-row gap-8 p-10 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                    <div className="flex-shrink-0 md:w-32">
                      <div className="text-4xl font-serif tracking-tighter text-foreground group-hover:text-[var(--accent)] transition-colors">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="md:pl-8 md:border-l border-[var(--border-color)]">
                      <h3 className="text-2xl font-bold mb-4 text-foreground">{milestone.title}</h3>
                      <p className="text-lg text-muted-foreground font-light leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
              Why Trust Us
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-tight">
              The Advantage.
            </h2>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 gap-8">
            {[
              "Proven track record with 500+ successful projects",
              "Transparent pricing with no hidden costs",
              "24/7 support and dedicated account managers",
              "Industry-certified experts and continuous training",
              "Agile methodology with bi-weekly sprint reviews",
              "Post-launch support and maintenance contracts",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-4 p-8 bg-background border border-[var(--border-color)] hover:border-foreground transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-[var(--accent)] flex-shrink-0" />
                  <span className="text-lg text-foreground font-medium">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Ready to Work Together?
            </h2>
            <p className="text-xl sm:text-2xl text-muted font-light mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how SimpleIn Solutions can help you achieve your technology goals and drive your business forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}

