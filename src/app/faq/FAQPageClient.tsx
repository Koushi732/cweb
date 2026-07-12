"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { generalFAQs, serviceFAQs, hardwareFAQs } from "@/data/faq";

export default function FAQPageClient() {
  const [openGeneralFaq, setOpenGeneralFaq] = useState<number | null>(null);
  const [openServiceFaq, setOpenServiceFaq] = useState<number | null>(null);
  const [openHardwareFaq, setOpenHardwareFaq] = useState<number | null>(null);

  const renderFaqSection = (
    title: string,
    faqs: { question: string; answer: string }[],
    openIdx: number | null,
    setOpenIdx: (idx: number | null) => void
  ) => {
    return (
      <div className="mb-20">
        <h3 className="text-2xl font-bold tracking-tight mb-8 border-b border-[var(--border-color)] pb-4">
          {title}
        </h3>
        <StaggerChildren className="space-y-4">
          {faqs.map((faq, idx) => (
            <StaggerItem key={idx}>
              <div 
                className={`border border-[var(--border-color)] bg-background transition-colors ${openIdx === idx ? "border-foreground" : "hover:border-muted-foreground"}`}
              >
                <button
                  onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 sm:p-8 text-left"
                >
                  <span className="text-lg font-bold tracking-tight text-foreground pr-4">{faq.question}</span>
                  <span className="shrink-0 text-foreground">
                    {openIdx === idx ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                {openIdx === idx && (
                  <div className="px-6 sm:px-8 pb-6 sm:pb-8 pt-0 text-base text-muted-foreground font-light leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    );
  };

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-48 md:pb-24 bg-background border-b border-[var(--border-color)] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080801a_1px,transparent_1px),linear-gradient(to_bottom,#8080801a_1px,transparent_1px)] bg-[size:64px_64px] opacity-30" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper animation="fade-up">
            <span className="inline-block text-xs font-bold text-foreground uppercase tracking-[0.2em] mb-6 font-mono border border-[var(--border-color)] px-4 py-2 bg-[var(--surface)]">
              Support
            </span>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-bold tracking-tighter leading-[1.1] mb-8">
              Frequently Asked <br className="hidden sm:block" /> Questions.
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl leading-[1.6]">
              Find detailed answers about our services, methodologies, and business operations.
            </p>
          </ScrollAnimationWrapper>
        </div>
      </section>

      <section className="py-24 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderFaqSection("General Questions", generalFAQs, openGeneralFaq, setOpenGeneralFaq)}
          {renderFaqSection("Services & Engagement", serviceFAQs, openServiceFaq, setOpenServiceFaq)}
          {renderFaqSection("Hardware Solutions", hardwareFAQs, openHardwareFaq, setOpenHardwareFaq)}
        </div>
      </section>
    </>
  );
}
