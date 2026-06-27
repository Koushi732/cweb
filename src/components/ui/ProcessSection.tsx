import React from "react";
import { motion } from "framer-motion";
import { Search, Map, PenTool, Code2, CheckSquare, Rocket, Settings, CheckCircle2 } from "lucide-react";
import { engagementProcess } from "@/data/process";

const iconMap: Record<string, React.ElementType> = {
  Search, Map, PenTool, Code2, CheckSquare, Rocket, Settings
};

export default function ProcessSection() {
  return (
    <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block text-xs font-bold text-foreground uppercase tracking-widest mb-6"
          >
            How We Work
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold tracking-tight mb-6"
          >
            Our Client Engagement Process
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-muted-foreground font-light leading-relaxed"
          >
            We act as a long-term technology partner. Our structured approach ensures clarity, transparency, and measurable business value at every step.
          </motion.p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop timeline */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-[var(--border-color)] -translate-x-1/2" />
          
          <div className="space-y-16 lg:space-y-32">
            {engagementProcess.map((step, index) => {
              const Icon = iconMap[step.icon] || Settings;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="relative flex flex-col lg:flex-row items-center gap-8 lg:gap-0 group"
                >
                  {/* Timeline dot */}
                  <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-none bg-background border-2 border-[var(--border-color)] group-hover:border-foreground items-center justify-center z-10 transition-colors duration-500">
                    <span className="text-sm font-bold text-muted-foreground group-hover:text-foreground transition-colors">{step.step}</span>
                  </div>

                  {/* Mobile step number */}
                  <div className="lg:hidden w-12 h-12 rounded-none bg-[var(--surface)] border border-[var(--border-color)] text-foreground flex items-center justify-center font-bold text-xl mb-4 shrink-0">
                    {step.step}
                  </div>

                  {/* Content Box */}
                  <div className={`w-full lg:w-1/2 ${isEven ? "lg:pr-24 lg:text-right" : "lg:pl-24 lg:ml-auto"}`}>
                    <div className={`bg-background p-8 border border-[var(--border-color)] hover:border-foreground transition-colors duration-300 relative ${isEven ? "lg:ml-auto" : ""}`}>
                      <div className={`flex items-center gap-4 mb-6 ${isEven ? "lg:flex-row-reverse" : ""}`}>
                        <div className="w-12 h-12 rounded-none bg-[var(--surface)] border border-[var(--border-color)] group-hover:bg-foreground group-hover:text-background transition-colors flex items-center justify-center text-foreground shrink-0">
                          <Icon className="w-6 h-6 text-foreground group-hover:text-background transition-colors" />
                        </div>
                        <h3 className="text-2xl font-bold tracking-tight">{step.title}</h3>
                      </div>
                      
                      <p className="text-muted-foreground text-lg font-light mb-8 leading-relaxed">
                        {step.description}
                      </p>

                      <ul className={`grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8 ${isEven ? "lg:text-left text-left" : "text-left"}`}>
                        {step.activities.map((activity, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                            <CheckCircle2 className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors shrink-0 mt-0.5" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>

                      <div className={`bg-[var(--surface)] p-4 border border-[var(--border-color)] ${isEven ? "lg:text-left text-left" : "text-left"}`}>
                        <span className="block text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                          {step.step === 7 ? "Goal" : "Deliverable"}
                        </span>
                        <span className="text-sm text-foreground font-medium">{step.deliverable}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
