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
import { useScroll, useTransform, motion } from "framer-motion";
import Logo from "@/components/ui/Logo";

const WhyChooseUsSection = dynamic(() => import("@/components/ui/WhyChooseUsSection"), { ssr: true });

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch,
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  Palette, Wrench, Heart, GraduationCap, ShoppingBag, Factory, Truck,
  Landmark, Building, Rocket, Briefcase, Target, FileCheck, Network, Camera, Fingerprint, Settings, ShoppingCart,
};

const techStack = allTechnologies;

const techCategories = [
  { name: "Frontend", icon: Monitor, techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"] },
  { name: "Backend", icon: Server, techs: ["Node.js", "Python", "Go", "GraphQL", "REST APIs"] },
  { name: "Database & Cloud", icon: Cloud, techs: ["PostgreSQL", "MongoDB", "Redis", "AWS", "Docker", "Kubernetes"] },
];


export default function HomeClient() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: '50%', y: '50%' });
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

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

  const { scrollY } = useScroll();
  const logoScale = useTransform(scrollY, [0, 300], [1, 0.35]);
  const logoY = useTransform(scrollY, [0, 300], [0, -120]);
  const logoOpacity = useTransform(scrollY, [150, 300], [1, 0]);
  const logoX = useTransform(scrollY, [0, 300], [0, -100]); // slightly move left

  return (
    <>
      {/* ==================== SECTION 1: HERO ==================== */}
      <section
        id="hero"
        className="relative min-h-[100vh] flex flex-col justify-center bg-background border-b border-[var(--border-color)] overflow-hidden pt-24 pb-16"
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


        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-5xl">
            <ScrollAnimationWrapper animation="text-reveal">
              <div className="inline-flex items-center gap-3 text-sm font-bold tracking-[0.2em] uppercase text-muted-foreground mb-8 font-mono">
                <span className="w-2 h-2 bg-foreground rounded-full animate-pulse" />
                Welcome To
              </div>
            </ScrollAnimationWrapper>

            <div className="mb-10">
              <motion.div
                style={{ scale: logoScale, y: logoY, x: logoX, opacity: logoOpacity }}
                className="flex justify-start min-h-[90px] sm:min-h-[120px] md:min-h-[150px] relative w-full max-w-[70vw] sm:max-w-lg origin-left"
              >
                <motion.div
                  initial={{ y: 15, scale: 0.98 }}
                  animate={{ y: 0, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full origin-left"
                >
                  <Logo priority />
                </motion.div>
              </motion.div>
            </div>

            <ScrollAnimationWrapper animation="fade-up" delay={0.25}>
              <h1 className="text-3xl sm:text-4xl text-foreground font-bold tracking-[-0.02em] mb-4">
                Every Service Made Simple.
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground font-light leading-[1.6] mb-12 max-w-2xl">
                Transforming complex challenges into elegant, future-proof technological solutions.
              </p>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="fade-up" delay={0.3}>
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <MagneticButton>
                  <Link
                    href="#expertise"
                    className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-semibold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
                  >
                    Explore Services
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: COMPANY INTRO ==================== */}
      <section className="py-24 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <ScrollAnimationWrapper animation="slide-left">
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold leading-[1.1] tracking-[-0.04em] mb-6">
                Architects of the Complete IT Ecosystem.
              </h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="mb-16">
                <p className="text-lg md:text-xl text-muted-foreground font-light leading-[1.6] mb-8 max-w-prose">
                  We are a unified team of software engineers and infrastructure specialists. We design custom software to solve complex challenges and supply the enterprise-grade hardware to power it—giving you one reliable partner for your entire technology foundation.
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

      {/* ==================== SECTION 1.5: THE SIMPLEIN ACRONYM (ADVANCED HOVER) ==================== */}
      <section className="py-12 border-b border-[var(--border-color)] bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <ScrollAnimationWrapper className="mb-8 text-center">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-4 font-mono">
              The Philosophy
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em]">
              The Core of SIMPLEIN.
            </h2>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up">
            <div className="flex flex-col md:flex-row h-auto md:h-[200px] w-full gap-4">
              {[
                { letter: "S", title: "Simple", desc: "Technology that is easy to use.", bg: "bg-background" },
                { letter: "IN", title: "Innovative", desc: "Driven by AI, automation, and modern engineering.", bg: "bg-foreground" },
              ].map((item, idx) => {
                const isHovered = activeAccordion === idx;
                const isDark = item.bg === "bg-foreground";

                return (
                  <motion.div
                    key={item.letter}
                    onHoverStart={() => setActiveAccordion(idx)}
                    onHoverEnd={() => setActiveAccordion(null)}
                    onClick={() => setActiveAccordion(idx)}
                    layout
                    animate={{
                      flex: isHovered ? 3 : 1
                    }}
                    transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative overflow-hidden cursor-pointer rounded-2xl flex flex-col justify-between p-6 sm:p-8 min-h-[160px] md:min-h-0 ${item.bg} border border-[var(--border-color)]`}
                  >
                    {/* Background Letter Watermark */}
                    <motion.div
                      className={`absolute -right-8 -bottom-16 text-[12rem] leading-none font-bold select-none ${isDark ? 'text-background/5' : 'text-foreground/5'}`}
                      animate={{ scale: isHovered ? 1.1 : 1, right: isHovered ? '-2rem' : '-3rem' }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      {item.letter}
                    </motion.div>

                    {/* Top Letter */}
                    <div className={`text-6xl font-bold tracking-tighter ${isDark ? 'text-background' : 'text-foreground'}`}>
                      {item.letter}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 mt-auto">
                      <motion.h3
                        layout="position"
                        className={`text-2xl sm:text-3xl font-bold uppercase tracking-[0.2em] mb-4 whitespace-nowrap ${isDark ? 'text-background' : 'text-foreground'}`}
                      >
                        {item.title}
                      </motion.h3>
                      <motion.div
                        initial={false}
                        animate={{
                          height: isHovered ? "auto" : 0,
                          opacity: isHovered ? 1 : 0,
                          marginTop: isHovered ? "1rem" : "0"
                        }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className={`text-lg font-light leading-[1.6] max-w-sm ${isDark ? 'text-background/80' : 'text-muted-foreground'}`}>
                          {item.desc}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </ScrollAnimationWrapper>

          <ScrollAnimationWrapper animation="fade-up" delay={0.2}>
            <div className="mt-12 text-center border-t border-[var(--border-color)] pt-12">
              <p className="text-2xl md:text-3xl font-light leading-[1.4] text-foreground tracking-[-0.02em]">
                <span className="font-bold">Simple</span> in approach. <span className="font-bold">Innovative</span> in execution.
              </p>
            </div>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* ==================== SECTION 3: SERVICES OVERVIEW ==================== */}
      <section id="expertise" className="py-24 border-b border-[var(--border-color)] bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
                Expertise
              </span>
              <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] mb-6">
                Comprehensive IT Solutions
              </h2>
            </div>
            <div>
              <p className="text-lg text-muted-foreground font-light max-w-xl leading-[1.6]">
                Two major pillars of our business — cutting-edge IT services and reliable hardware solutions — all under one roof.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* IT Services */}
            <ScrollAnimationWrapper animation="slide-left">
              <div className="h-full p-8 md:p-12 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-10">
                  <div className="mb-8">
                    <Code2 className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.02em] mb-4">Software Solutions</h3>
                  <p className="text-base text-muted-foreground font-light leading-[1.6] mb-10 max-w-prose">
                    Full-stack software engineering, scalable cloud architectures, and intelligent automation designed to power global enterprises.
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
              <div className="h-full p-8 md:p-12 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-10">
                  <div className="mb-8">
                    <Monitor className="w-10 h-10 text-foreground" />
                  </div>
                  <h3 className="text-2xl font-bold tracking-[-0.02em] mb-4">Hardware Solutions</h3>
                  <p className="text-base text-muted-foreground font-light leading-[1.6] mb-10 max-w-prose">
                    Enterprise-grade IT infrastructure procurement, deployment, and management, delivering uncompromised performance and security.
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




      {/* ==================== SECTION 8: WHY CHOOSE US ==================== */}
      <WhyChooseUsSection />

      {/* ==================== SECTION 6: TECHNOLOGY STACK (REDESIGNED) ==================== */}
      <section
        className="py-24 border-b border-[var(--border-color)] bg-background relative overflow-hidden"
      >

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono">
              Technology Stack
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-[-0.04em] mb-6">
              The Arsenal of Innovation.
            </h2>
            <p className="text-lg text-muted-foreground font-light max-w-2xl leading-[1.6]">
              We utilize modern, battle-tested technologies to build scalable and high-performance digital products.
            </p>
          </ScrollAnimationWrapper>
        </div>

        <div className="relative border-t border-b border-[var(--border-color)] py-4 md:py-8 bg-[var(--surface)] overflow-hidden w-full group/marquee">
          {/* Subtle gradient overlay to fade edges */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-64 bg-gradient-to-r from-[var(--surface)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-64 bg-gradient-to-l from-[var(--surface)] to-transparent z-10 pointer-events-none" />

          <div className="flex w-full relative">
            <div className="flex whitespace-nowrap animate-marquee group-hover/marquee:[animation-play-state:paused] transition-all duration-300 [animation-duration:500s]">
              {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
                <div key={i} className="flex items-center group/item">
                  <span className="mx-6 md:mx-12 text-3xl sm:text-5xl lg:text-6xl font-bold text-muted-foreground/40 hover:text-foreground transition-colors duration-500 cursor-default select-none tracking-[-0.02em]">
                    {tech}
                  </span>
                  <span className="text-foreground/30 text-xl md:text-4xl mx-2 md:mx-4 group-hover/item:text-foreground group-hover/item:rotate-180 transition-all duration-700">
                    ✦
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* ==================== SECTION 10: CTA ==================== */}
      <section className="py-20 bg-[var(--surface)] text-foreground text-center px-4 relative overflow-hidden">
        {/* Subtle background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-foreground/5 rounded-full blur-[100px] pointer-events-none" />

        <ScrollAnimationWrapper className="relative z-10">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-[-0.04em] mb-6 max-w-5xl mx-auto leading-[1]">
            Ready to Build <br /> Something Great?
          </h2>
          <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-8 text-muted-foreground">
            Let&apos;s discuss how SIMPLEIN Solutions can architect, automate, and scale your technology operations.
          </p>
          <div className="flex justify-center">
            <Link
              href="/contact#contact-form"
              className="group flex items-center justify-center gap-4 px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-[0.1em] hover:opacity-90 transition-opacity rounded-none"
            >
              Start a Conversation <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </section>


    </>
  );
}
