import React from "react";
import { communicationPolicy } from "@/data/communication";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { CheckCircle2, Lightbulb, Shield } from "lucide-react";

export default function CommunicationSection() {
  const { projectCommunication, documentation, support } = communicationPolicy;

  return (
    <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper className="mb-20 text-center">
          <span className="inline-block text-xs font-bold text-foreground uppercase tracking-widest mb-6">
            Client Communication
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-6">
            Let&apos;s Build Something <span className="text-muted-foreground">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Ready to transform your business with intelligent technology solutions? We&apos;re here to help.
          </p>
        </ScrollAnimationWrapper>

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Strategic Consultation */}
          <ScrollAnimationWrapper animation="fade-up">
            <div className="bg-background border border-[var(--border-color)] p-6 sm:p-8 hover:border-foreground transition-colors h-full group">
              <div className="flex items-center gap-4 mb-5">
                <Lightbulb className="w-6 h-6 text-foreground" />
                <h3 className="text-lg font-bold tracking-tight">Strategic Consultation</h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                We begin with a deep dive into your business to understand your core operational challenges and architect a tailored roadmap.
              </p>
              <ul className="space-y-3">
                {[
                  "Business requirement analysis",
                  "Technology stack selection",
                  "Architecture & planning",
                  "Feasibility studies"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>

          {/* Long-Term Partnership */}
          <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
            <div className="bg-background border border-[var(--border-color)] p-6 sm:p-8 hover:border-foreground transition-colors h-full group">
              <div className="flex items-center gap-4 mb-5">
                <Shield className="w-6 h-6 text-foreground" />
                <h3 className="text-lg font-bold tracking-tight">Long-Term Partnership</h3>
              </div>
              <p className="text-muted-foreground font-light leading-relaxed mb-6">
                SimpleIn serves as your dedicated technology partner, providing continuous support and proactive enhancements to scale alongside your business.
              </p>
              <ul className="space-y-3">
                {[
                  "Dedicated account management",
                  "Proactive system monitoring",
                  "Continuous feature development",
                  "Scalability & growth planning"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                    <span className="text-sm font-medium text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* 3 Pillars */}
        <StaggerChildren className="grid md:grid-cols-3 gap-6">
          {[projectCommunication, documentation, support].map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="h-full bg-background border border-[var(--border-color)] p-6 sm:p-8 hover:border-foreground transition-colors group">
                <div className="flex items-center gap-4 mb-5">
                  <pillar.icon className="w-6 h-6 text-foreground" />
                  <h3 className="text-lg font-bold tracking-tight">{pillar.title}</h3>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mb-6">
                  {pillar.description}
                </p>
                <ul className="space-y-3">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
