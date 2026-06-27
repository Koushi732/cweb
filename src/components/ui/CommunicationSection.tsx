import React from "react";
import { communicationPolicy } from "@/data/communication";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { CheckCircle2 } from "lucide-react";

export default function CommunicationSection() {
  const { initialResponse, channels, projectCommunication, documentation, support } = communicationPolicy;

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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Initial Response */}
          <ScrollAnimationWrapper animation="fade-up">
            <div className="bg-background border border-[var(--border-color)] p-10 hover:border-foreground transition-colors h-full">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[var(--surface)] border border-[var(--border-color)] rounded-none">
                  <initialResponse.icon className="w-6 h-6 text-foreground" />
                </div>
                <h3 className="text-2xl font-bold tracking-tight">{initialResponse.title}</h3>
              </div>
              <p className="text-muted-foreground text-lg font-light leading-relaxed mb-6">
                {initialResponse.description}
              </p>
              <div className="bg-[var(--surface)] border-l-2 border-foreground p-6">
                <p className="text-foreground font-medium italic">
                  &quot;{initialResponse.commitment}&quot;
                </p>
              </div>
            </div>
          </ScrollAnimationWrapper>

          {/* Channels */}
          <ScrollAnimationWrapper animation="fade-up" delay={0.1}>
            <div className="bg-background border border-[var(--border-color)] p-10 hover:border-foreground transition-colors h-full">
              <h3 className="text-2xl font-bold tracking-tight mb-8">Supported Channels</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-6">
                {channels.map((channel) => (
                  <div key={channel.name} className="flex flex-col items-center text-center gap-3 p-4 bg-[var(--surface)] border border-[var(--border-color)] rounded-none group hover:border-foreground hover:bg-foreground transition-colors">
                    <channel.icon className="w-6 h-6 text-muted-foreground group-hover:text-background transition-colors" />
                    <span className="text-sm font-medium text-foreground group-hover:text-background transition-colors">{channel.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollAnimationWrapper>
        </div>

        {/* 3 Pillars */}
        <StaggerChildren className="grid md:grid-cols-3 gap-8">
          {[projectCommunication, documentation, support].map((pillar) => (
            <StaggerItem key={pillar.title}>
              <div className="h-full bg-background border border-[var(--border-color)] p-10 hover:border-foreground transition-colors group">
                <div className="flex items-center gap-4 mb-6">
                  <pillar.icon className="w-8 h-8 text-foreground" />
                  <h3 className="text-xl font-bold tracking-tight">{pillar.title}</h3>
                </div>
                <p className="text-muted-foreground font-light leading-relaxed mb-8 h-24">
                  {pillar.description}
                </p>
                <ul className="space-y-4">
                  {pillar.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-foreground flex-shrink-0 mt-0.5" />
                      <span className="text-foreground font-medium">{item}</span>
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
