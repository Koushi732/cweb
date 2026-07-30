import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight, LayoutGrid, ArrowRight } from "lucide-react";
import { ChatComponent } from "@/lib/chat/engine/Storage";

export function RenderComponent({ comp, onAction }: { comp: ChatComponent, onAction: (action: string) => void }) {
  switch (comp.type) {
    case "ServiceCard":
      return (
        <div className="mt-3 p-4 rounded-xl bg-background border border-[var(--border-color)]">
          <h4 className="font-semibold text-foreground flex items-center gap-2 mb-2">
            <LayoutGrid className="w-4 h-4 text-emerald-500" />
            {comp.props.title}
          </h4>
          <ul className="space-y-1.5 mb-4">
            {comp.props.features?.map((f: string, i: number) => (
              <li key={i} className="text-xs text-muted-foreground flex items-start gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500/70 shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          <button 
            onClick={() => onAction(`Tell me more about ${comp.props.title}`)}
            className="w-full py-2 bg-foreground text-background text-xs font-semibold rounded-lg hover:bg-foreground/90 transition-colors"
          >
            Learn More
          </button>
        </div>
      );
      
    case "TechGrid":
      return (
        <div className="mt-3 grid grid-cols-2 gap-2">
          {comp.props.technologies?.map((tech: string, i: number) => (
            <div key={i} className="p-2 text-center text-xs font-medium border border-[var(--border-color)] rounded-lg bg-foreground/5 text-foreground">
              {tech}
            </div>
          ))}
        </div>
      );

    case "ProcessTimeline":
      return (
        <div className="mt-3 border-l-2 border-foreground/10 ml-2 pl-4 py-1 space-y-4">
          {comp.props.steps?.map((step: string, i: number) => (
            <div key={i} className="relative">
              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-background" />
              <p className="text-xs font-medium text-foreground">{step}</p>
            </div>
          ))}
        </div>
      );

    case "LeadForm":
      return (
        <div className="mt-3 p-4 rounded-xl bg-[var(--surface)] border border-[var(--border-color)] flex flex-col gap-3">
          <p className="text-xs font-medium text-foreground mb-1">Let&apos;s get in touch.</p>
          <input type="text" placeholder="Your Name" className="w-full bg-background border border-[var(--border-color)] rounded-md px-3 py-2 text-xs text-foreground focus:outline-none focus:border-emerald-500 transition-colors" />
          <input type="email" placeholder="Your Email" className="w-full bg-background border border-[var(--border-color)] rounded-md px-3 py-2 text-xs text-foreground focus:outline-none focus:border-emerald-500 transition-colors" />
          <input type="text" placeholder="Company Name" className="w-full bg-background border border-[var(--border-color)] rounded-md px-3 py-2 text-xs text-foreground focus:outline-none focus:border-emerald-500 transition-colors" />
          <button 
            onClick={() => onAction("Contact submitted")}
            className="w-full py-2 mt-1 bg-emerald-500 text-white text-xs font-bold rounded-md hover:bg-emerald-600 transition-colors"
          >
            Request Consultation
          </button>
        </div>
      );

    default:
      return null;
  }
}
