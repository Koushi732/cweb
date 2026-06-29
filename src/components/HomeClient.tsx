"use client";

import Link from "next/link";
import {
  ArrowRight, Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch,
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  Zap, Heart, GraduationCap, ShoppingBag, Factory, Truck, Landmark, Building, Rocket, Briefcase,
  Palette, Wrench, Target, Clock, Send, Phone, Mail, FileCheck, Network, Camera, Fingerprint, Settings, ShoppingCart, Plus, Minus, CheckCircle2
} from "lucide-react";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import SpotlightCard from "@/components/ui/SpotlightCard";
import MagneticButton from "@/components/ui/MagneticButton";
import dynamic from "next/dynamic";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { allTechnologies } from "@/data/technologies";
import { useState } from "react";

const ProcessSection = dynamic(() => import("@/components/ui/ProcessSection"), { ssr: true });
const WhyChooseUsSection = dynamic(() => import("@/components/ui/WhyChooseUsSection"), { ssr: true });

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch,
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  Palette, Wrench, Heart, GraduationCap, ShoppingBag, Factory, Truck,
  Landmark, Building, Rocket, Briefcase, Target, FileCheck, Network, Camera, Fingerprint, Settings, ShoppingCart,
};

const techStack = allTechnologies;

const techCategories = [
  { name: "Frontend", techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", techs: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"] },
  { name: "Database & Cloud", techs: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"] },
];

const faqs = [
  {
    question: "Do you build custom software from scratch?",
    answer: "Yes, we specialize in building custom software tailored exactly to your business requirements. We do not rely on pre-built templates for complex business applications."
  },
  {
    question: "What is your typical project timeline?",
    answer: "The timeline depends on the project. The minimum time for completing any project is 14 days and the maximum timeline could go up to 2 months."
  },

  {
    question: "Do you provide post-deployment support?",
    answer: "Absolutely. We consider ourselves long-term technology partners. We provide continuous maintenance, bug fixes, performance monitoring, and feature upgrades post-deployment."
  },
  {
    question: "What technologies do you use?",
    answer: "We use modern, scalable technologies including React, Next.js, Node.js, Python, PostgreSQL, AWS, and Docker, ensuring your software is fast, secure, and future-proof."
  },
  {
    question: "Can you supply hardware for our new office?",
    answer: "Yes, we provide complete enterprise IT hardware procurement, including workstations, servers, networking equipment, and security systems, followed by professional installation."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer both fixed-price contracts for well-defined projects and dedicated team/time-and-material models for ongoing, evolving development needs. We ensure complete transparency with no hidden costs."
  }
];

export default function HomeClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100 + '%';
    const y = ((e.clientY - rect.top) / rect.height) * 100 + '%';
    setMousePos({ x, y });
  };

  return (
    <>
      {/* ==================== SECTION 1: HERO ==================== */}
      <section 
        className="relative min-h-[100vh] flex flex-col justify-center bg-background border-b border-[var(--border-color)] overflow-hidden pt-32 pb-24"
        onMouseMove={handleMouseMove}
      >
        {/* Animated grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] animate-[shimmer_60s_linear_infinite] opacity-50" />
        
        {/* Interactive Cursor Glow */}
        <div 
          className="absolute inset-0 pointer-events-none transition-[background] duration-500 ease-out z-0"
          style={{
            background: `radial-gradient(circle at ${mousePos.x} ${mousePos.y}, rgba(128,128,128,0.15) 0%, transparent 40%)`
          }}
        />

        {/* Abstract Premium Geometry */}
        <div className="absolute top-1/4 right-[10%] w-[500px] h-[500px] border border-[var(--border-color)] rounded-full opacity-20 animate-spin-slow pointer-events-none z-0" />
        <div className="absolute top-[30%] right-[15%] w-[300px] h-[300px] border border-[var(--border-color)] rounded-full opacity-30 animate-spin-slow pointer-events-none z-0" style={{ animationDirection: 'reverse', animationDuration: '40s' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-5xl">
            <ScrollAnimationWrapper animation="text-reveal">
              <div className="inline-flex items-center gap-3 px-6 py-3 bg-[var(--surface)] text-xs font-bold tracking-[0.2em] uppercase text-foreground mb-8 font-mono border border-[var(--border-color)] shadow-sm">
                <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
                Every Service Made Simple
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="mask-up" delay={0.1}>
              <h1 className="text-5xl sm:text-7xl lg:text-[7.5rem] font-bold text-foreground leading-[0.95] tracking-[-0.04em] mb-8">
                Building Intelligent <br className="hidden lg:block"/> Digital Solutions.
              </h1>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="mask-up" delay={0.2}>
              <p className="text-xl sm:text-2xl text-muted-foreground font-light leading-[1.6] mb-12 max-w-3xl">
                We design, develop, and deliver enterprise-grade software, web applications, mobile apps, and IT infrastructure that power your business forward.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticButton>
                  <Link
                    href="/services"
                    className="group flex items-center justify-center gap-3 px-10 py-5 bg-foreground text-background font-bold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
                <MagneticButton>
                  <Link
                    href="/contact"
                    className="group flex items-center justify-center gap-3 px-10 py-5 border border-foreground bg-transparent text-foreground font-bold text-sm uppercase tracking-[0.1em] hover:bg-foreground hover:text-background transition-colors rounded-none"
                  >
                    Get a Quote
                  </Link>
                </MagneticButton>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: COMPANY INTRO ==================== */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <ScrollAnimationWrapper animation="slide-left">
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-[-0.04em] mb-8">
                Your Technology Partner for the Digital Age.
              </h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="mb-16">
                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-[1.6] mb-8">
                  SimpleIn Solutions is a modern IT services company dedicated to helping businesses accelerate growth through innovative technology. We focus on delivering reliable, scalable, and business-driven solutions that create measurable value for our clients. No shortcuts, just solid engineering and honest partnerships.
                </p>
                <Link
                  href="/about"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1"
                >
                  More About Us <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: SERVICES OVERVIEW ==================== */}
      <section className="py-32 border-b border-[var(--border-color)] bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Capabilities
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6">
                Comprehensive IT Solutions
              </h2>
            </div>
            <div>
              <p className="text-xl text-muted-foreground font-light max-w-xl leading-[1.6]">
                Two major pillars of our business — cutting-edge IT services and reliable hardware solutions — all under one roof.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* IT Services */}
            <ScrollAnimationWrapper animation="slide-left">
              <div className="h-full p-10 md:p-14 bg-background border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-10">
                  <div className="mb-8">
                    <Code2 className="w-12 h-12 text-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-[-0.02em] mb-4">IT Services</h3>
                  <p className="text-lg text-muted-foreground font-light leading-[1.6] mb-10">
                    End-to-end software development, cloud migration, cybersecurity, and AI-powered solutions to accelerate your digital transformation.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                  {[
                    { icon: Code2, name: "Custom Software" },
                    { icon: Globe, name: "Web Development" },
                    { icon: Smartphone, name: "Mobile Apps" },
                    { icon: Brain, name: "AI Automation" },
                    { icon: Zap, name: "Process Automation" },
                    { icon: Building2, name: "Enterprise Software" },
                    { icon: Network, name: "Networking & Security" },
                    { icon: Cloud, name: "Cloud & DevOps" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3 text-base font-medium">
                      <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/services"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-foreground hover:text-muted-foreground transition-colors"
                >
                  Explore IT Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimationWrapper>

            {/* IT Hardware */}
            <ScrollAnimationWrapper animation="slide-right">
              <div className="h-full p-10 md:p-14 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-10">
                  <div className="mb-8">
                    <Monitor className="w-12 h-12 text-foreground" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-[-0.02em] mb-4">IT Hardware</h3>
                  <p className="text-lg text-muted-foreground font-light leading-[1.6] mb-10">
                    Premium IT hardware from leading brands with expert procurement, installation, and maintenance services for enterprises.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-8 mb-12">
                  {[
                    { icon: Laptop, name: "Business Laptops" },
                    { icon: Monitor, name: "Desktop Systems" },
                    { icon: Server, name: "Enterprise Servers" },
                    { icon: Network, name: "Routers & Switches" },
                    { icon: Wifi, name: "Wi-Fi Infrastructure" },
                    { icon: Shield, name: "Firewalls" },
                    { icon: HardDrive, name: "Storage (NAS/SAN)" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3 text-base font-medium text-foreground">
                      <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/hardware"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-[0.1em] text-foreground hover:text-muted-foreground transition-colors"
                >
                  Explore Hardware <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 4: SERVICES GRID (HIGH CONTRAST REWRITE) ==================== */}
      <section className="py-32 border-b border-[var(--border-color)] bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Services
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-4">
                What We Build
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.1em] text-foreground hover:text-muted-foreground transition-colors border-b border-foreground pb-1"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.slice(0, 6).map((service, index) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <StaggerItem key={service.id}>
                  <Link 
                    href={`/services#${service.id}`} 
                    className="group block relative overflow-hidden border border-[var(--border-color)] bg-background h-full"
                  >
                    {/* Hover wipe effect */}
                    <div className="absolute inset-0 bg-foreground translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.25,0.46,0.45,0.94)] z-0" />
                    
                    <div className="relative z-10 p-10 md:p-12 flex flex-col h-full">
                      <div className="mb-8 flex items-center justify-between">
                        <Icon className="w-10 h-10 text-foreground group-hover:text-background transition-colors duration-500" />
                        <span className="text-muted-foreground group-hover:text-background/50 font-mono text-sm transition-colors duration-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold tracking-tight mb-4 text-foreground group-hover:text-background transition-colors duration-500">
                        {service.title}
                      </h3>
                      <p className="text-base text-muted-foreground group-hover:text-background/80 font-light leading-[1.6] mb-8 flex-grow transition-colors duration-500">
                        {service.shortDescription}
                      </p>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.1em] text-foreground group-hover:text-background transition-colors duration-500 font-mono">
                        Explore <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== SECTION 5: INDUSTRIES ==================== */}
      <section className="py-32 border-b border-[var(--border-color)] bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground font-light leading-[1.6]">
              Domain expertise across diverse sectors enables us to deliver solutions that address industry-specific challenges.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-[var(--border-color)] border border-[var(--border-color)] mb-16">
            {industries.slice(0, 12).map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <StaggerItem key={industry.id}>
                  <div className="group flex flex-col items-center justify-center text-center gap-5 px-6 py-14 bg-background hover:bg-foreground hover:text-background transition-colors duration-300 cursor-default h-full">
                    <Icon className="w-8 h-8 text-muted-foreground group-hover:text-background transition-colors duration-300" />
                    <span className="text-sm font-bold uppercase tracking-[0.1em]">{industry.title}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== SECTION 6: TECHNOLOGY STACK (REDESIGNED) ==================== */}
      <section 
        className="py-32 border-b border-[var(--border-color)] bg-background relative overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
              Technology Stack
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6">
              Engineering Excellence.
            </h2>
            <p className="text-xl text-muted-foreground font-light max-w-2xl leading-[1.6]">
              We utilize modern, battle-tested technologies to build scalable and high-performance digital products.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid lg:grid-cols-3 gap-8 mb-20">
            {techCategories.map((category) => (
              <StaggerItem key={category.name} className="h-full">
                <SpotlightCard className="p-10 bg-[var(--surface)] hover:border-foreground/40" spotlightColor="rgba(128,128,128,0.12)">
                  <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-8 font-mono border-b border-[var(--border-color)] pb-4 relative z-10">{category.name}</h3>
                  <div className="flex flex-col gap-4 relative z-10">
                    {category.techs.map((tech) => (
                      <div key={tech} className="flex items-center gap-3">
                        <CheckCircle2 className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="text-lg font-medium text-foreground">{tech}</span>
                      </div>
                    ))}
                  </div>
                </SpotlightCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>

        {/* Marquee for Visual Impact */}
        <div className="relative border-t border-b border-[var(--border-color)] py-12 bg-[var(--surface)]">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="mx-12 text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground/30 hover:text-foreground transition-colors duration-300 cursor-default select-none tracking-[-0.04em]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 7: PROCESS WORKFLOW ==================== */}
      <ProcessSection />

      {/* ==================== SECTION 8: WHY CHOOSE US ==================== */}
      <WhyChooseUsSection />

      {/* ==================== SECTION 9: FAQ ==================== */}
      <section className="py-32 border-b border-[var(--border-color)] bg-[var(--surface)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
              FAQ
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6">
              Common Questions.
            </h2>
          </ScrollAnimationWrapper>

          <StaggerChildren className="space-y-4">
            {faqs.map((faq, idx) => (
              <StaggerItem key={idx}>
                <div 
                  className={`border border-[var(--border-color)] bg-background transition-colors ${openFaq === idx ? "border-foreground" : "hover:border-muted-foreground"}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full flex items-center justify-between p-8 text-left"
                  >
                    <span className="text-xl font-bold tracking-tight text-foreground">{faq.question}</span>
                    <span className="ml-4 shrink-0 text-foreground">
                      {openFaq === idx ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                    </span>
                  </button>
                  {openFaq === idx && (
                    <div className="px-8 pb-8 pt-0 text-lg text-muted-foreground font-light leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== SECTION 10: CTA ==================== */}
      <section className="py-40 bg-foreground text-background text-center px-4 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-background/5 rounded-full blur-[100px] pointer-events-none" />
        
        <ScrollAnimationWrapper className="relative z-10">
          <h2 className="text-5xl sm:text-7xl lg:text-[8rem] font-bold tracking-[-0.04em] mb-8 max-w-6xl mx-auto leading-[0.9]">
            Ready to Build <br /> Something Great?
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-16 text-muted-foreground">
            Let&apos;s discuss how SimpleIn Solutions can help you integrate, automate, and scale your technology operations.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-4 px-12 py-6 bg-background text-foreground font-bold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
            >
              Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* ==================== SECTION 11: CONTACT ==================== */}
      <section className="py-32 bg-background border-b border-[var(--border-color)]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            <ScrollAnimationWrapper animation="slide-left">
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Let&apos;s Connect.
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6">
                Get In Touch.
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-12 max-w-md leading-[1.6]">
                Reach out and our team will respond shortly to discuss your technological requirements.
              </p>
              
              <div className="space-y-8 mb-12 lg:mb-0">
                {[
                  { icon: Phone, title: "Call Us", info: "+91 984 8334 984", link: "tel:+919848334984" },
                  { icon: Mail, title: "Email Us", info: "info@SimpleInsolutions.com", link: "mailto:info@SimpleInsolutions.com" },
                  { icon: Clock, title: "Working Hours", info: "Available 24/7", link: "#" },
                ].map((item, idx) => (
                  <a key={idx} href={item.link} className="group flex items-start gap-6">
                    <div className="w-14 h-14 border border-[var(--border-color)] flex items-center justify-center group-hover:border-foreground group-hover:bg-foreground group-hover:text-background transition-colors duration-300 bg-[var(--surface)] text-foreground shrink-0">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-[0.1em] mb-2 font-mono group-hover:text-foreground transition-colors">{item.title}</h3>
                      <p className="text-muted-foreground font-light group-hover:text-foreground transition-colors">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <form onSubmit={handleFormSubmit} className="space-y-10 bg-[var(--surface)] p-10 sm:p-14 border border-[var(--border-color)]">
                <div className="space-y-8">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-foreground font-mono">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors rounded-none text-xl"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-foreground font-mono">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors rounded-none text-xl"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold tracking-[0.2em] uppercase mb-3 text-foreground font-mono">Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none rounded-none text-xl"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-6 bg-foreground text-background font-bold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
                >
                  {formSubmitted ? "✓ Message Sent!" : <>Send Message <Send className="w-5 h-5" /></>}
                </button>
              </form>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </>
  );
}
