"use client";

import React, { useRef } from "react";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { differentiators } from "@/data/differentiators";
import { CheckCircle2, Repeat, Layers, Code2, Shield, Settings, BarChart, ChevronLeft, ChevronRight } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Repeat, Layers, Code2, Shield, Settings, BarChart, CheckCircle2
};

export default function WhyChooseUsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (offset: number) => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (offset > 0 && scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 10, behavior: 'smooth' }); // jump back to start
      } else if (offset < 0 && scrollLeft <= 0) {
        scrollContainerRef.current.scrollTo({ left: scrollWidth - clientWidth - 10, behavior: 'smooth' });
      } else {
        scrollContainerRef.current.scrollBy({ left: offset, behavior: 'smooth' });
      }
    }
  };

  const handleManualScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      // If scrolled to the very end of the duplicated items
      if (scrollLeft + clientWidth >= scrollWidth - 5) {
        // Silently jump to the middle (start of the second set)
        scrollContainerRef.current.scrollTo({ left: scrollWidth / 2 - clientWidth / 2, behavior: 'instant' });
      } else if (scrollLeft <= 0) {
        // Silently jump to the middle
        scrollContainerRef.current.scrollTo({ left: scrollWidth / 2 - clientWidth / 2, behavior: 'instant' });
      }
    }
  };

  return (
    <section className="py-24 bg-[var(--surface)] border-y border-[var(--border-color)] overflow-hidden relative">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--background)] to-transparent opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollAnimationWrapper className="mb-20 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-3xl">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-widest mb-6">
              The SimpleIn Advantage
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight mb-8 leading-tight">
              Why Partner With Us?
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed">
              We focus on creating measurable business value through modern technology, transparent communication, and quality engineering.
            </p>
          </div>
          
          <div className="flex items-center gap-4 hidden md:flex">
            <button 
              onClick={() => handleScroll(-400)}
              className="w-12 h-12 flex items-center justify-center border border-[var(--border-color)] bg-background text-foreground hover:bg-foreground hover:text-background transition-colors"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => handleScroll(400)}
              className="w-12 h-12 flex items-center justify-center border border-[var(--border-color)] bg-background text-foreground hover:bg-foreground hover:text-background transition-colors"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </ScrollAnimationWrapper>

        <div 
          ref={scrollContainerRef}
          onScroll={handleManualScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-12 pt-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 hide-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {[...differentiators, ...differentiators, ...differentiators].map((item, index) => {
              const Icon = iconMap[item.icon] || CheckCircle2;

              return (
                <div
                  key={`${item.id}-${index}`}
                  className="snap-start shrink-0 group relative bg-background border border-[var(--border-color)] hover:border-foreground transition-all duration-500 overflow-hidden p-8 lg:p-10 w-[85vw] sm:w-[350px] lg:w-[400px]"
                >
                  {/* Hover gradient background effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10 flex flex-col h-full">
                    <div className="mb-6 flex items-center justify-center rounded-none bg-[var(--surface)] border border-[var(--border-color)] group-hover:bg-foreground group-hover:text-background transition-colors w-12 h-12">
                      <Icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                    </div>
                    
                    <h3 className="text-xl font-bold tracking-tight text-foreground mb-4">
                      {item.title}
                    </h3>
                    
                    <p className="text-muted-foreground font-light leading-relaxed mt-auto text-[15px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
