"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch,
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  CheckCircle2, Star, ChevronRight, ArrowDown, Zap, Users, Award, HeartHandshake,
  Heart, GraduationCap, ShoppingBag, Factory, Truck, Landmark, Building, Rocket, Briefcase,
  Palette, Wrench, Target, Clock, Send, Phone, Mail, MapPin,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { services } from "@/data/services";
import { hardwareCategories } from "@/data/hardware";
import { industries } from "@/data/industries";
import { testimonials } from "@/data/testimonials";
import { blogPosts } from "@/data/blog";
import { stats } from "@/data/team";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch,
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  Palette, Wrench, Heart, GraduationCap, ShoppingBag, Factory, Truck,
  Landmark, Building, Rocket, Briefcase, Target,
};

const techStack = [
  "React", "Next.js", "Node.js", "Python", "TypeScript", "AWS",
  "Azure", "Docker", "Kubernetes", "TensorFlow", "Flutter", "PostgreSQL",
  "MongoDB", "GraphQL", "Terraform", "Figma",
];

export default function HomeClient() {
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <>
      {/* ==================== SECTION 1: HERO ==================== */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="hero-particles" />
        {/* Grid overlay */}
        <div className="absolute inset-0 grid-pattern opacity-30" />
        {/* Floating orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-[var(--secondary)]/10 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--accent)]/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium text-white/90 mb-8">
              <Zap className="w-4 h-4 text-[var(--secondary)]" />
              Smart IT Solutions for a Digital Future
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6"
          >
            Empowering Businesses{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">
              with Technology
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl mx-auto mb-10"
          >
            From custom software development and cloud solutions to enterprise hardware — we deliver
            end-to-end IT solutions that transform your business and drive growth.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/services"
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[var(--secondary)]/25 transition-all hover:scale-105"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="group flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-white/20 text-white font-semibold text-lg hover:bg-white/10 transition-all"
            >
              Get a Quote
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="flex flex-col items-center gap-2 text-white/40"
            >
              <span className="text-xs uppercase tracking-wider">Scroll</span>
              <ArrowDown className="w-4 h-4" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ==================== SECTION 2: COMPANY INTRO ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollAnimationWrapper animation="slide-left">
              <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
                Who We Are
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                Your Trusted Partner in{" "}
                <span className="gradient-text">Digital Transformation</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                SimpleIn Solutions is a full-service IT company dedicated to helping businesses thrive in the digital age. With expertise spanning software development, cloud infrastructure, cybersecurity, AI, and IT hardware, we deliver comprehensive technology solutions that drive real business outcomes.
              </p>
              <p className="text-muted leading-relaxed mb-8">
                Our team of 50+ skilled professionals combines deep technical expertise with a passion for innovation, serving clients across healthcare, finance, retail, manufacturing, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: Award, label: "7+ Years Experience" },
                  { icon: Users, label: "50+ Team Members" },
                  { icon: CheckCircle2, label: "500+ Projects" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border-color)]">
                    <item.icon className="w-4 h-4 text-[var(--secondary)]" />
                    <span className="text-sm font-medium">{item.label}</span>
                  </div>
                ))}
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-[var(--secondary)]/20 to-[var(--accent)]/20 p-8 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4 w-full max-w-sm">
                    {[Code2, Cloud, Shield, Brain, Globe, Server, Smartphone, Zap, Lightbulb].map((Icon, i) => (
                      <motion.div
                        key={i}
                        className="aspect-square rounded-2xl glass flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Icon className="w-8 h-8 text-[var(--secondary)]" />
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Decorative dots */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-[var(--secondary)]/10 blur-xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-[var(--accent)]/10 blur-xl" />
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: WHY CHOOSE US ==================== */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why SimpleIn <span className="gradient-text">Solutions?</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We combine technical excellence with business acumen to deliver solutions that don&apos;t just work — they transform.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: "Innovation First", description: "We leverage cutting-edge technologies and creative approaches to solve complex business challenges." },
              { icon: Shield, title: "Reliable & Secure", description: "Enterprise-grade security and 99.9% uptime guarantee. Your data and systems are always protected." },
              { icon: Users, title: "Expert Team", description: "50+ certified professionals with deep expertise across the full technology spectrum." },
              { icon: HeartHandshake, title: "Client-Centric", description: "We build lasting partnerships, not just projects. Your success drives every decision we make." },
            ].map((item) => (
              <StaggerItem key={item.title}>
                <div className="group relative p-8 rounded-2xl bg-background border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <item.icon className="w-7 h-7 text-[var(--secondary)]" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{item.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== SECTION 4: FEATURED SERVICES (IT Services + Hardware) ==================== */}
      <section className="py-24 relative overflow-hidden" id="featured-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Our Solutions
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Comprehensive <span className="gradient-text">IT Solutions</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Two major pillars of our business — cutting-edge IT services and reliable hardware solutions — all under one roof.
            </p>
          </ScrollAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* IT Services */}
            <ScrollAnimationWrapper animation="slide-left">
              <div className="h-full p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/20 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-blue-600 flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">IT Services</h3>
                    <p className="text-sm text-muted">Software & Digital Solutions</p>
                  </div>
                </div>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  End-to-end software development, cloud migration, cybersecurity, and AI-powered solutions to accelerate your digital transformation.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Code2, name: "Software Development" },
                    { icon: Globe, name: "Web Development" },
                    { icon: Smartphone, name: "Mobile Apps" },
                    { icon: Cloud, name: "Cloud Solutions" },
                    { icon: Lightbulb, name: "IT Consulting" },
                    { icon: Shield, name: "Cybersecurity" },
                    { icon: Brain, name: "AI Solutions" },
                    { icon: Zap, name: "Digital Transformation" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background text-sm">
                      <item.icon className="w-4 h-4 text-[var(--secondary)] flex-shrink-0" />
                      <span className="text-foreground truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimationWrapper>

            {/* IT Hardware */}
            <ScrollAnimationWrapper animation="slide-right">
              <div className="h-full p-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--accent)]/20 transition-all">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)] to-purple-600 flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">IT Hardware Sales</h3>
                    <p className="text-sm text-muted">Enterprise Hardware & Procurement</p>
                  </div>
                </div>
                <p className="text-muted text-sm mb-6 leading-relaxed">
                  Premium IT hardware from leading brands with expert procurement, installation, and maintenance services for enterprises.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {[
                    { icon: Laptop, name: "Laptops" },
                    { icon: Monitor, name: "Desktops" },
                    { icon: Server, name: "Servers" },
                    { icon: Wifi, name: "Networking" },
                    { icon: HardDrive, name: "Storage Solutions" },
                    { icon: Printer, name: "Printers" },
                    { icon: Headphones, name: "Accessories" },
                    { icon: Building2, name: "Enterprise Hardware" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-background text-sm">
                      <item.icon className="w-4 h-4 text-[var(--accent)] flex-shrink-0" />
                      <span className="text-foreground truncate">{item.name}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href="/hardware"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--accent)] to-purple-600 text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: IT SERVICES OVERVIEW ==================== */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              IT Services
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technology Solutions That <span className="gradient-text">Drive Results</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Explore our full suite of IT services designed to solve complex challenges and unlock new opportunities.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.slice(0, 8).map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <StaggerItem key={service.id}>
                  <Link href={`/services#${service.id}`} className="group block">
                    <div className="relative p-6 rounded-2xl bg-background border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[var(--secondary)]" />
                      </div>
                      <h3 className="text-base font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted leading-relaxed line-clamp-3">{service.shortDescription}</p>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-[var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn More <ArrowRight className="w-3 h-3" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <ScrollAnimationWrapper className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--secondary)] text-[var(--secondary)] font-semibold hover:bg-[var(--secondary)] hover:text-white transition-all"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* ==================== SECTION 6: IT HARDWARE OVERVIEW ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--accent)] uppercase tracking-wider mb-4">
              IT Hardware
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Enterprise <span className="gradient-text">Hardware Solutions</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Premium IT hardware from leading brands, with expert procurement, installation, and maintenance services.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {hardwareCategories.slice(0, 8).map((category) => {
              const Icon = iconMap[category.icon] || Monitor;
              return (
                <StaggerItem key={category.id}>
                  <Link href={`/hardware#${category.id}`} className="group block">
                    <div className="relative p-6 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--accent)]/30 transition-all card-hover h-full">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--accent)]/10 to-purple-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-[var(--accent)]" />
                      </div>
                      <h3 className="text-base font-semibold mb-2">{category.title}</h3>
                      <p className="text-sm text-muted leading-relaxed line-clamp-3">{category.description}</p>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <ScrollAnimationWrapper className="text-center mt-10">
            <Link
              href="/hardware"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border-2 border-[var(--accent)] text-[var(--accent)] font-semibold hover:bg-[var(--accent)] hover:text-white transition-all"
            >
              View All Hardware <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* ==================== SECTION 7: INDUSTRIES ==================== */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Industries
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Industries <span className="gradient-text">We Serve</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Domain expertise across diverse sectors enables us to deliver solutions that address industry-specific challenges.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <StaggerItem key={industry.id}>
                  <div className="group relative p-6 rounded-2xl bg-background border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover text-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]/10 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 text-[var(--secondary)]" />
                    </div>
                    <h3 className="text-sm font-semibold">{industry.title}</h3>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <ScrollAnimationWrapper className="text-center mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-[var(--secondary)] font-semibold hover:gap-3 transition-all"
            >
              Explore All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* ==================== SECTION 8: TECH STACK MARQUEE ==================== */}
      <section className="py-16 overflow-hidden border-y border-[var(--border-color)]">
        <ScrollAnimationWrapper className="text-center mb-8">
          <span className="text-sm font-semibold text-muted uppercase tracking-wider">
            Technologies We Work With
          </span>
        </ScrollAnimationWrapper>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="mx-6 sm:mx-10 text-2xl sm:text-3xl font-bold text-muted/20 hover:text-[var(--secondary)]/40 transition-colors cursor-default select-none"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: PROCESS WORKFLOW ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              How We <span className="gradient-text">Deliver Results</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              A proven, structured approach that ensures quality, transparency, and on-time delivery.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Discover", description: "We listen, analyze, and understand your requirements, goals, and challenges through stakeholder workshops.", icon: Target, color: "from-cyan-500 to-blue-500" },
              { step: "02", title: "Design", description: "Our team architects the solution, creates prototypes, and defines the technical roadmap for your project.", icon: Palette, color: "from-violet-500 to-purple-500" },
              { step: "03", title: "Develop", description: "Agile development with bi-weekly sprints, continuous integration, and regular demos for your feedback.", icon: Code2, color: "from-emerald-500 to-teal-500" },
              { step: "04", title: "Deploy", description: "Rigorous testing, smooth deployment, and post-launch monitoring to ensure everything runs perfectly.", icon: Rocket, color: "from-orange-500 to-red-500" },
            ].map((process) => (
              <StaggerItem key={process.step}>
                <div className="relative p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] card-hover text-center">
                  <div className="text-5xl font-black text-[var(--border-color)] absolute top-4 right-4">
                    {process.step}
                  </div>
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${process.color} flex items-center justify-center mx-auto mb-6`}>
                    <process.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{process.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{process.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== SECTION 10: TESTIMONIALS ==================== */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Testimonials
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped transform.
            </p>
          </ScrollAnimationWrapper>

          <div className="max-w-4xl mx-auto">
            <ScrollAnimationWrapper>
              <div className="glass rounded-3xl p-8 sm:p-12">
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: testimonials[testimonialIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="text-lg sm:text-xl text-white/90 leading-relaxed mb-8 italic">
                  &ldquo;{testimonials[testimonialIndex].text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center text-white font-bold">
                    {testimonials[testimonialIndex].avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonials[testimonialIndex].name}</p>
                    <p className="text-sm text-white/60">
                      {testimonials[testimonialIndex].designation}, {testimonials[testimonialIndex].company}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollAnimationWrapper>

            <div className="flex items-center justify-center gap-2 mt-8">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setTestimonialIndex(i)}
                  className={`w-3 h-3 rounded-full transition-all ${i === testimonialIndex ? "bg-[var(--secondary)] w-8" : "bg-white/30 hover:bg-white/50"
                    }`}
                  aria-label={`View testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 11: SUCCESS METRICS ==================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Our Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold">
              Numbers That <span className="gradient-text">Speak</span>
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <ScrollAnimationWrapper key={stat.label} animation="scale-up">
                <div className="text-center p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] card-hover">
                  <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted font-medium">{stat.label}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 12: LATEST INSIGHTS ==================== */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Latest <span className="gradient-text">Insights</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Stay ahead with expert insights on technology trends, best practices, and industry updates.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {blogPosts.slice(0, 3).map((post) => (
              <StaggerItem key={post.id}>
                <Link href="/blog" className="group block">
                  <div className="rounded-2xl overflow-hidden bg-background border border-[var(--border-color)] card-hover h-full">
                    <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center`}>
                      <div className="text-white/20 text-6xl font-bold">SI</div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted">{post.readTime}</span>
                      </div>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-[var(--secondary)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted line-clamp-2">{post.excerpt}</p>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          <ScrollAnimationWrapper className="text-center mt-10">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[var(--secondary)] font-semibold hover:gap-3 transition-all"
            >
              Read All Articles <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* ==================== SECTION 13: CTA ==================== */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--secondary)]/5 to-[var(--accent)]/5" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Ready to Transform Your{" "}
              <span className="gradient-text">Business?</span>
            </h2>
            <p className="text-lg text-muted mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how SimpleIn Solutions can help you achieve your technology goals. Get a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[var(--secondary)]/25 transition-all hover:scale-105"
              >
                Start a Project <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="group flex items-center gap-2 px-8 py-4 rounded-2xl border-2 border-[var(--border-color)] font-semibold text-lg hover:border-[var(--secondary)] hover:text-[var(--secondary)] transition-all"
              >
                View Our Work <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* ==================== SECTION 14: CONTACT ==================== */}
      <section className="py-24 bg-[var(--surface)]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Get in Touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
          </ScrollAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-12">
            <ScrollAnimationWrapper animation="slide-left">
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium mb-2">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium mb-2">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg hover:scale-105 transition-all"
                >
                  {formSubmitted ? "✓ Message Sent!" : <>Send Message <Send className="w-4 h-4" /></>}
                </button>
              </form>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Call Us", info: "+91 XXXX XXXX XX", link: "tel:+91XXXXXXXXXX" },
                  { icon: Mail, title: "Email Us", info: "info@simpleinsolutions.com", link: "mailto:info@simpleinsolutions.com" },
                  { icon: MapPin, title: "Visit Us", info: "Hyderabad, Telangana, India", link: "#" },
                  { icon: Clock, title: "Business Hours", info: "Mon - Sat: 9:00 AM - 7:00 PM", link: "#" },
                ].map((item) => (
                  <a key={item.title} href={item.link} className="flex items-start gap-4 p-5 rounded-2xl bg-background border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover">
                    <div className="w-12 h-12 rounded-xl bg-[var(--secondary)]/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-5 h-5 text-[var(--secondary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="text-sm text-muted">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
