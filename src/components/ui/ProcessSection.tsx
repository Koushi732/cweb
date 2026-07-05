import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Map, PenTool, Code2, CheckSquare, Rocket, Settings, CheckCircle2 } from "lucide-react";
import { engagementProcess } from "@/data/process";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";

const iconMap: Record<string, React.ElementType> = {
  Search, Map, PenTool, Code2, CheckSquare, Rocket, Settings
};

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(1);

  return (
    <section className="py-32 bg-[var(--surface)] border-y border-[var(--border-color)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimationWrapper className="mb-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <span className="inline-block text-xs font-bold text-foreground uppercase tracking-widest mb-6 font-mono">
                How We Work
              </span>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
                Client Engagement Process.
              </h2>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                We act as a long-term technology partner. Our structured approach ensures clarity, transparency, and measurable business value at every step.
              </p>
            </div>
          </div>
        </ScrollAnimationWrapper>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          {/* Timeline Navigation */}
          <div className="lg:w-1/3 relative">
            {/* Mobile Progress Bar (Horizontal) */}
            <div className="lg:hidden absolute top-6 left-0 right-0 h-0.5 bg-[var(--border-color)] z-0">
              <motion.div 
                className="h-full bg-foreground" 
                initial={false}
                animate={{ width: `${((activeStep - 1) / (engagementProcess.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
            
            {/* Desktop Progress Bar (Vertical) */}
            <div className="hidden lg:block absolute left-[27px] top-4 bottom-4 w-0.5 bg-[var(--border-color)] z-0">
               <motion.div 
                className="w-full bg-foreground" 
                initial={false}
                animate={{ height: `${((activeStep - 1) / (engagementProcess.length - 1)) * 100}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>

            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible gap-8 lg:gap-12 relative z-10 pb-4 lg:pb-0 scrollbar-hide snap-x">
              {engagementProcess.map((step) => {
                const isActive = activeStep === step.step;
                const isPast = activeStep > step.step;

                return (
                  <button
                    key={step.step}
                    onClick={() => setActiveStep(step.step)}
                    className="flex lg:items-center flex-col lg:flex-row gap-4 lg:gap-8 group text-left min-w-[120px] lg:min-w-0 snap-start outline-none"
                  >
                    <div 
                      className={`w-14 h-14 rounded-full flex items-center justify-center shrink-0 border-2 transition-all duration-300 ${
                        isActive 
                          ? "bg-foreground border-foreground text-background scale-110 shadow-lg" 
                          : isPast 
                            ? "bg-[var(--surface)] border-foreground text-foreground" 
                            : "bg-[var(--surface)] border-[var(--border-color)] text-muted-foreground group-hover:border-foreground/50"
                      }`}
                    >
                      <span className="font-mono font-bold text-lg">{step.step}</span>
                    </div>
                    <h3 
                      className={`font-bold text-sm lg:text-xl transition-colors ${
                        isActive ? "text-foreground" : "text-muted-foreground group-hover:text-foreground/80"
                      }`}
                    >
                      {step.title}
                    </h3>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Detail Panel */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              {engagementProcess.filter(s => s.step === activeStep).map((step) => {
                const Icon = iconMap[step.icon] || Settings;
                return (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="bg-background border border-[var(--border-color)] p-8 lg:p-16 relative overflow-hidden"
                  >
                    <Icon className="absolute -right-8 -bottom-8 w-64 h-64 text-foreground/[0.03] pointer-events-none" />
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-6 mb-8">
                        <div className="w-16 h-16 rounded-none bg-foreground text-background flex items-center justify-center shrink-0">
                          <Icon className="w-8 h-8" />
                        </div>
                        <h3 className="text-3xl sm:text-4xl font-bold tracking-tight">{step.title}</h3>
                      </div>
                      
                      <p className="text-xl text-muted-foreground font-light mb-12 leading-relaxed">
                        {step.description}
                      </p>

                      <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-6 font-mono border-b border-[var(--border-color)] pb-4">Key Activities</h4>
                      <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <CheckCircle2 className="w-4 h-4 text-foreground mt-1 shrink-0" />
                            <span className="text-muted-foreground text-sm leading-relaxed">{activity}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="bg-[var(--surface)] p-6 border border-[var(--border-color)]">
                        <span className="block text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2 font-mono">
                          {step.step === 7 ? "Goal" : "Deliverable"}
                        </span>
                        <span className="text-foreground font-semibold text-lg">{step.deliverable}</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
