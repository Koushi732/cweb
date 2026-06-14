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
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 gradient-hero overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "About Us" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6"
          >
            About <span className="bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">SimpleIn Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-white/70 max-w-3xl"
          >
            We&apos;re a passionate team of technology experts committed to empowering businesses with innovative IT solutions that drive growth and digital transformation.
          </motion.p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimationWrapper animation="slide-left">
              <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Building the Future, <span className="gradient-text">One Solution at a Time</span>
              </h2>
              <p className="text-muted leading-relaxed mb-4">
                Founded in 2018, SimpleIn Solutions started with a simple mission: make enterprise-grade technology accessible to businesses of all sizes. What began as a small team of passionate developers has grown into a full-service IT company serving clients across multiple industries.
              </p>
              <p className="text-muted leading-relaxed mb-4">
                Today, we specialize in custom software development, cloud infrastructure, cybersecurity, AI solutions, and enterprise hardware procurement. Our 50+ team members bring diverse expertise and a shared commitment to excellence.
              </p>
              <p className="text-muted leading-relaxed">
                We&apos;ve successfully delivered 500+ projects to clients ranging from startups to large enterprises, always maintaining the same dedication to quality, innovation, and customer success that defined us from day one.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] text-center">
                    <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                      <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                    </div>
                    <p className="text-sm text-muted font-medium">{stat.label}</p>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Mission &amp; Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              What Drives Us <span className="gradient-text">Forward</span>
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 gap-6">
            <ScrollAnimationWrapper>
              <div className="h-full p-8 rounded-3xl bg-background border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-muted leading-relaxed">
                  To empower businesses with innovative, reliable, and scalable technology solutions that drive growth, efficiency, and competitive advantage in an ever-evolving digital landscape.
                </p>
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper>
              <div className="h-full p-8 rounded-3xl bg-background border border-[var(--border-color)] hover:border-[var(--accent)]/30 transition-all">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--accent)] to-purple-600 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-muted leading-relaxed">
                  To be the most trusted IT partner for businesses worldwide, recognized for our technical excellence, innovative solutions, and unwavering commitment to client success.
                </p>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              What We Stand For
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Our Core <span className="gradient-text">Values</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              The principles that guide our work, our relationships, and our commitment to excellence.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value) => {
              const Icon = iconMap[value.icon] || Lightbulb;
              return (
                <StaggerItem key={value.title}>
                  <div className="group p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[var(--secondary)]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{value.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Growth Roadmap / Milestones */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Our Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Growth <span className="gradient-text">Roadmap</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              From humble beginnings to becoming a trusted technology partner for businesses across India.
            </p>
          </ScrollAnimationWrapper>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              {milestones.map((milestone, i) => (
                <ScrollAnimationWrapper key={milestone.year} delay={i * 0.05}>
                  <div className="flex gap-4 p-6 rounded-2xl bg-background border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center text-white font-bold">
                        {milestone.year.slice(-2)}
                      </div>
                      <p className="text-xs text-center text-muted mt-1 font-semibold">{milestone.year}</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                </ScrollAnimationWrapper>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Why Trust Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The <span className="gradient-text">SimpleIn Advantage</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              What sets us apart from other IT service providers.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              "Proven track record with 500+ successful projects",
              "Transparent pricing with no hidden costs",
              "24/7 support and dedicated account managers",
              "Industry-certified experts and continuous training",
              "Agile methodology with bi-weekly sprint reviews",
              "Post-launch support and maintenance contracts",
            ].map((item) => (
              <StaggerItem key={item}>
                <div className="flex items-start gap-3 p-5 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all h-full">
                  <CheckCircle2 className="w-5 h-5 text-[var(--secondary)] mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Work <span className="bg-gradient-to-r from-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">Together?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how SimpleIn Solutions can help you achieve your technology goals and drive your business forward.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[var(--secondary)]/25 transition-all hover:scale-105"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
