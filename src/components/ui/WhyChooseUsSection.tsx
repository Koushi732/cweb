import React from "react";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { differentiators } from "@/data/differentiators";
import { CheckCircle2, Repeat, Layers, Code2, Shield, Settings, BarChart } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Repeat, Layers, Code2, Shield, Settings, BarChart, CheckCircle2
};

export default function WhyChooseUsSection() {
  return (
    <section className="py-32 bg-[var(--surface)] border-y border-[var(--border-color)] overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--background)] to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper className="mb-20">
          <span className="inline-block text-xs font-bold text-foreground uppercase tracking-widest mb-6">
            The SimpleIn Advantage
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-8 max-w-3xl leading-tight">
            Why Partner With Us?
          </h2>
          <p className="text-xl text-muted-foreground font-light max-w-2xl leading-relaxed">
            We focus on creating measurable business value through modern technology, transparent communication, and quality engineering.
          </p>
        </ScrollAnimationWrapper>

        <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((item, index) => {
            const Icon = iconMap[item.icon] || CheckCircle2;
            // Make the first item take up 2 columns on large screens for a dynamic layout
            const isFeatured = index === 0;

            return (
              <StaggerItem
                key={item.id}
                className={`group relative bg-background border border-[var(--border-color)] hover:border-foreground transition-all duration-500 overflow-hidden ${
                  isFeatured ? "md:col-span-2 lg:col-span-2 p-10 lg:p-12" : "p-8 lg:p-10"
                }`}
              >
                {/* Hover gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`mb-6 flex items-center justify-center rounded-none bg-[var(--surface)] border border-[var(--border-color)] group-hover:bg-foreground group-hover:text-background transition-colors ${
                    isFeatured ? "w-16 h-16" : "w-12 h-12"
                  }`}>
                    <Icon className={`${isFeatured ? "w-8 h-8" : "w-6 h-6"} text-foreground group-hover:text-background transition-colors`} />
                  </div>
                  
                  <h3 className={`${isFeatured ? "text-2xl lg:text-3xl" : "text-xl"} font-bold tracking-tight text-foreground mb-4`}>
                    {item.title}
                  </h3>
                  
                  <p className={`text-muted-foreground font-light leading-relaxed mt-auto ${isFeatured ? "text-lg max-w-2xl" : "text-base"}`}>
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </div>
    </section>
  );
}
