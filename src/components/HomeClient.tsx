"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight, Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch,
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  Zap, Heart, GraduationCap, ShoppingBag, Factory, Truck, Landmark, Building, Rocket, Briefcase,
  Palette, Wrench, Target, Clock, Send, Phone, Mail, FileCheck, Network, Camera, Fingerprint, Settings, ShoppingCart,
} from "lucide-react";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import dynamic from "next/dynamic";
import { services } from "@/data/services";
import { hardwareCategories } from "@/data/hardware";
import { industries } from "@/data/industries";
import { allTechnologies } from "@/data/technologies";

const ProcessSection = dynamic(() => import("@/components/ui/ProcessSection"), { ssr: true });
const WhyChooseUsSection = dynamic(() => import("@/components/ui/WhyChooseUsSection"), { ssr: true });

import { stats } from "@/data/team";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch,
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  Palette, Wrench, Heart, GraduationCap, ShoppingBag, Factory, Truck,
  Landmark, Building, Rocket, Briefcase, Target, FileCheck, Network, Camera, Fingerprint, Settings, ShoppingCart,
};

const techStack = allTechnologies;

export default function HomeClient() {
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
      <section className="relative min-h-[90vh] flex flex-col justify-center bg-background border-b border-[var(--border-color)] overflow-hidden pt-32 pb-24">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 border-l-2 border-[var(--accent)] bg-[var(--surface)] text-xs font-bold tracking-widest uppercase text-foreground mb-12">
                Smart IT Solutions
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-6xl sm:text-7xl lg:text-[7rem] font-bold text-foreground leading-[0.95] tracking-tighter mb-8"
            >
              Empowering Businesses{" "}
              <br className="hidden sm:block" />
              <span className="text-[var(--accent)]">with Technology.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-xl sm:text-3xl text-muted-foreground font-light leading-tight mb-12 max-w-3xl"
            >
              Building Intelligent Digital Solutions for Modern Businesses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="flex flex-col sm:flex-row items-start gap-4"
            >
              <Link
                href="/services"
                className="group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-3 px-8 py-4 border border-[var(--border-color)] bg-background text-foreground font-bold text-sm uppercase tracking-widest hover:bg-[var(--surface)] transition-colors"
              >
                Get a Quote
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 2: COMPANY INTRO ==================== */}
      <section className="py-32 bg-background border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-start">
            <ScrollAnimationWrapper animation="slide-left">
              <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
                Who We Are
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] tracking-tight mb-8">
                Your Trusted Partner in <span className="text-muted-foreground">Digital Transformation.</span>
              </h2>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <div className="mb-16">
                <p className="text-xl md:text-2xl text-muted-foreground font-light leading-relaxed mb-8">
                  Our mission is to help businesses accelerate growth through innovative software development, AI automation, cloud technologies, enterprise IT solutions, and digital transformation. We focus on delivering reliable, scalable, and business-driven technology solutions that create measurable value for our clients.
                </p>
              </div>

              {stats.length > 0 && (
                <div className="grid sm:grid-cols-3 gap-8 pt-12 border-t border-[var(--border-color)]">
                  {stats.map((item) => (
                    <div key={item.label} className="flex flex-col gap-2">
                      <span className="text-4xl md:text-5xl font-light tracking-tighter text-foreground">{item.value}</span>
                      <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">{item.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 3: WHY CHOOSE US ==================== */}
      <WhyChooseUsSection />

      {/* ==================== SECTION 4: FEATURED SERVICES ==================== */}
      <section className="py-32 border-b border-[var(--border-color)] bg-background" id="featured-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20 grid lg:grid-cols-2 gap-12 items-end">
            <div>
              <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
                Capabilities
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Comprehensive IT Solutions
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-xl">
                Two major pillars of our business — cutting-edge IT services and reliable hardware solutions — all under one roof.
              </p>
            </div>
          </ScrollAnimationWrapper>

          <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
            {/* IT Services */}
            <ScrollAnimationWrapper animation="slide-left">
              <div className="h-full p-10 md:p-14 bg-background border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-10">
                  <div className="text-[var(--accent)] mb-8">
                    <Code2 className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight mb-3">IT Services</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
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
                    { icon: Palette, name: "UI/UX Design" },
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
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[var(--accent)] hover:text-foreground transition-colors"
                >
                  Explore IT Services <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimationWrapper>

            {/* IT Hardware */}
            <ScrollAnimationWrapper animation="slide-right">
              <div className="h-full p-10 md:p-14 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors group">
                <div className="mb-10">
                  <div className="text-[var(--accent)] mb-8">
                    <Monitor className="w-12 h-12" />
                  </div>
                  <h3 className="text-3xl font-bold tracking-tight mb-3">IT Hardware</h3>
                  <p className="text-lg text-muted-foreground font-light leading-relaxed mb-10">
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
                    { icon: FileCheck, name: "AMC Contracts" },
                  ].map((item) => (
                    <div key={item.name} className="flex items-center gap-3 text-base font-medium text-foreground">
                      <item.icon className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                      <span>{item.name}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  href="/hardware"
                  className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-[var(--accent)] hover:text-foreground transition-colors"
                >
                  Explore Hardware <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>

      {/* ==================== SECTION 5: IT SERVICES OVERVIEW ==================== */}
      <section className="py-32 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Services
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-xl">
                Explore our full suite of IT services designed to solve complex challenges.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--accent)] hover:text-foreground transition-colors"
            >
              View All Services <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-color)]">
            {services.slice(0, 8).map((service) => {
              const Icon = iconMap[service.icon] || Code2;
              return (
                <StaggerItem key={service.id}>
                  <Link href={`/services#${service.id}`} className="group block bg-background p-8 md:p-10 hover:bg-[var(--surface)] transition-colors h-full">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <Icon className="w-8 h-8 text-[var(--accent)] transition-transform group-hover:scale-110" />
                      </div>
                      <h3 className="text-xl font-bold tracking-tight mb-3 transition-colors">{service.title}</h3>
                      <p className="text-base text-muted-foreground font-light leading-relaxed mb-6 flex-grow">{service.shortDescription}</p>
                      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest opacity-50 group-hover:opacity-100 group-hover:text-[var(--accent)] transition-all">
                        Explore <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== SECTION 6: IT HARDWARE OVERVIEW ==================== */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
                Hardware
              </h2>
              <p className="text-xl text-muted-foreground font-light max-w-xl">
                Premium IT hardware from leading brands, with expert procurement.
              </p>
            </div>
            <Link
              href="/hardware"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--accent)] hover:text-foreground transition-colors"
            >
              View All Hardware <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--border-color)]">
            {hardwareCategories.slice(0, 8).map((category) => {
              const Icon = iconMap[category.icon] || Monitor;
              return (
                <StaggerItem key={category.id}>
                  <Link href={`/hardware#${category.id}`} className="group block bg-[var(--surface)] h-full p-8 md:p-10 hover:bg-background transition-colors">
                    <div className="mb-8">
                      <Icon className="w-8 h-8 text-[var(--accent)] transition-transform group-hover:scale-110" />
                    </div>
                    <h3 className="text-xl font-bold tracking-tight mb-3">{category.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{category.description}</p>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* ==================== SECTION 7: INDUSTRIES ==================== */}
      <section className="py-32 border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-muted-foreground font-light">
              Domain expertise across diverse sectors enables us to deliver solutions that address industry-specific challenges.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-px bg-[var(--border-color)] border border-[var(--border-color)] mb-16">
            {industries.map((industry) => {
              const Icon = iconMap[industry.icon] || Briefcase;
              return (
                <StaggerItem key={industry.id}>
                  <div className="group flex flex-col items-center justify-center text-center gap-4 px-6 py-10 bg-background hover:bg-[var(--surface)] transition-all cursor-default">
                    <Icon className="w-8 h-8 text-[var(--accent)] transition-colors" />
                    <span className="text-sm font-bold uppercase tracking-widest">{industry.title}</span>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>

          <ScrollAnimationWrapper className="text-center mt-10">
            <Link
              href="/industries"
              className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-[var(--accent)] hover:text-foreground transition-colors"
            >
              Explore All Industries <ArrowRight className="w-4 h-4" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>

      {/* ==================== SECTION 8: TECH STACK MARQUEE ==================== */}
      <section className="py-32 overflow-hidden bg-background">
        <ScrollAnimationWrapper className="text-center mb-12">
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">
            Technologies We Work With
          </span>
        </ScrollAnimationWrapper>
        <div className="relative">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...techStack, ...techStack].map((tech, i) => (
              <span
                key={i}
                className="mx-8 sm:mx-12 text-3xl sm:text-4xl lg:text-5xl font-bold text-muted-foreground hover:text-foreground transition-colors cursor-default select-none tracking-tighter"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 9: PROCESS WORKFLOW ==================== */}
      <ProcessSection />

      {/* ==================== SECTION 11: SUCCESS METRICS ==================== */}
      <section className="py-32 border-b border-[var(--border-color)] bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 divide-x divide-[var(--border-color)]">
            {stats.map((stat, idx) => (
              <ScrollAnimationWrapper key={stat.label} animation="scale-up" className={idx === 0 ? "" : "pl-8"}>
                <div className="flex flex-col">
                  <div className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter mb-4 text-foreground">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-xs font-bold uppercase tracking-widest text-[var(--accent)]">{stat.label}</p>
                </div>
              </ScrollAnimationWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== SECTION 13: CTA ==================== */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground text-center px-4">
        <ScrollAnimationWrapper>
          <h2 className="text-5xl sm:text-6xl lg:text-8xl font-bold tracking-tighter mb-8 max-w-5xl mx-auto leading-[0.95]">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto mb-16 text-muted-foreground">
            Let&apos;s discuss how SimpleIn Solutions can help you integrate, automate, and scale your technology operations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="group flex items-center justify-center gap-3 px-10 py-5 bg-[var(--accent)] text-[var(--primary-foreground)] font-bold text-sm uppercase tracking-widest hover:bg-background hover:text-foreground transition-colors"
            >
              Start a Project <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </ScrollAnimationWrapper>
      </section>

      {/* ==================== SECTION 14: CONTACT ==================== */}
      <section className="py-32 bg-background border-b border-[var(--border-color)]" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 md:gap-24">
            <ScrollAnimationWrapper animation="slide-left">
              <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
                Start a Conversation
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Let&apos;s Connect.
              </h2>
              <p className="text-xl text-muted-foreground font-light mb-12 max-w-md">
                Get in touch with our experts to discuss your next big idea.
              </p>
              
              <div className="space-y-8 mb-12 lg:mb-0">
                {[
                  { icon: Phone, title: "Call Us", info: "+91 98765 43210", link: "tel:+919876543210" },
                  { icon: Mail, title: "Email Us", info: "info@simpleinsolutions.com", link: "mailto:info@simpleinsolutions.com" },
                  { icon: Clock, title: "Working Hours", info: "Mon-Fri, 9AM - 6PM (IST)", link: "#" },
                ].map((item) => (
                  <a key={item.title} href={item.link} className="group flex items-start gap-6">
                    <div className="w-12 h-12 border border-[var(--border-color)] flex items-center justify-center group-hover:border-foreground transition-colors bg-[var(--surface)]">
                      <item.icon className="w-5 h-5 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm uppercase tracking-widest mb-2">{item.title}</h3>
                      <p className="text-muted-foreground font-light">{item.info}</p>
                    </div>
                  </a>
                ))}
              </div>
            </ScrollAnimationWrapper>

            <ScrollAnimationWrapper animation="slide-right">
              <form onSubmit={handleFormSubmit} className="space-y-8 bg-[var(--surface)] p-12 border border-[var(--border-color)]">
                <div className="space-y-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold tracking-widest uppercase mb-3 text-foreground">Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors rounded-none text-lg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold tracking-widest uppercase mb-3 text-foreground">Email</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors rounded-none text-lg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-bold tracking-widest uppercase mb-3 text-foreground">Message</label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your project..."
                      className="w-full px-0 py-3 bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors resize-none rounded-none text-lg"
                      required
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
                >
                  {formSubmitted ? "✓ Message Sent!" : <>Send Message <Send className="w-4 h-4" /></>}
                </button>
              </form>
            </ScrollAnimationWrapper>
          </div>
        </div>
      </section>
    </>
  );
}

