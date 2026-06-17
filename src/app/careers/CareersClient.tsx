"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, MapPin, Clock, Users, Briefcase,
  IndianRupee, Heart, Home, BookOpen, TrendingUp, Send, X, CheckCircle2,
} from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { jobPositions, benefits } from "@/data/careers";
import { useState } from "react";

const iconMap: Record<string, React.ElementType> = {
  IndianRupee, Heart, Home, BookOpen, Users, TrendingUp,
};

export default function CareersClient() {
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [appForm, setAppForm] = useState({ name: "", email: "", phone: "", coverLetter: "" });
  const [applied, setApplied] = useState(false);

  const selectedJobData = jobPositions.find((j) => j.id === selectedJob);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    setApplied(true);
    setAppForm({ name: "", email: "", phone: "", coverLetter: "" });
    setTimeout(() => {
      setApplied(false);
      setSelectedJob(null);
    }, 2500);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 pb-24 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Careers" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-tighter mt-8 mb-8"
          >
            Join Our <span className="text-[var(--accent)]">Team.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-tight"
          >
            Build your career at a company that values innovation, growth, and work-life balance. Explore exciting opportunities with us.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
              Benefits &amp; Perks
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Why Work Here.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl leading-tight">
              We believe in taking care of our team with comprehensive benefits and a culture that promotes growth.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon] || Heart;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="group p-10 bg-background border border-[var(--border-color)] hover:border-foreground transition-colors h-full flex flex-col">
                    <div className="mb-8">
                      <Icon className="w-8 h-8 text-muted-foreground group-hover:text-[var(--accent)] transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-foreground">{benefit.title}</h3>
                    <p className="text-base text-muted-foreground leading-relaxed flex-grow">{benefit.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-32 bg-background border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="mb-20">
            <span className="inline-block text-xs font-bold text-[var(--accent)] uppercase tracking-widest mb-6">
              Current Openings
            </span>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Open Positions.
            </h2>
            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-3xl leading-tight">
              Find the role that matches your skills and ambitions. We&apos;re always looking for talented individuals to join our team.
            </p>
          </ScrollAnimationWrapper>

          <div className="space-y-6 max-w-5xl mx-auto">
            {jobPositions.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group p-8 sm:p-10 bg-[var(--surface)] border border-[var(--border-color)] hover:border-foreground transition-colors"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-[var(--accent)] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4 uppercase tracking-widest font-semibold text-xs">
                      <span className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-[var(--accent)]" /> {job.department}
                      </span>
                      <span className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-[var(--accent)]" /> {job.location}
                      </span>
                      <span className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[var(--accent)]" /> {job.type}
                      </span>
                      <span className="px-3 py-1 bg-foreground text-background font-bold tracking-widest uppercase text-xs">
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-base text-muted-foreground line-clamp-2">{job.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job.id)}
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors whitespace-nowrap"
                  >
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJobData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedJob(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-background border border-[var(--border-color)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 sm:p-12">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-[var(--surface)] hover:bg-foreground flex items-center justify-center text-foreground hover:text-background transition-colors border border-[var(--border-color)]"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>

                <span className="inline-block text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-4">
                  {selectedJobData.department}
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">{selectedJobData.title}</h2>
                <div className="flex flex-wrap items-center gap-4 text-xs font-bold uppercase tracking-widest text-muted-foreground mb-10 pb-10 border-b border-[var(--border-color)]">
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[var(--accent)]" /> {selectedJobData.location}
                  </span>
                  <span className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[var(--accent)]" /> {selectedJobData.type}
                  </span>
                  <span>{selectedJobData.experience}</span>
                </div>

                <div className="mb-10">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-4">About the role</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">{selectedJobData.description}</p>
                </div>

                <div className="mb-10 pb-10 border-b border-[var(--border-color)]">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-foreground mb-6">Requirements</h3>
                  <ul className="space-y-4">
                    {selectedJobData.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-4 text-base text-muted-foreground">
                        <CheckCircle2 className="w-5 h-5 text-[var(--accent)] mt-0.5 flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleApply} className="space-y-8" noValidate>
                  <div className="grid sm:grid-cols-2 gap-8">
                    <div>
                      <label htmlFor="apply-name" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Full Name *</label>
                      <input
                        id="apply-name"
                        type="text"
                        value={appForm.name}
                        onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="apply-email" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Email *</label>
                      <input
                        id="apply-email"
                        type="email"
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="apply-phone" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Phone</label>
                    <input
                      id="apply-phone"
                      type="tel"
                      value={appForm.phone}
                      onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-cover" className="block text-xs font-bold uppercase tracking-widest text-foreground mb-4">Cover Letter</label>
                    <textarea
                      id="apply-cover"
                      rows={4}
                      value={appForm.coverLetter}
                      onChange={(e) => setAppForm({ ...appForm, coverLetter: e.target.value })}
                      placeholder="Tell us why you'd be a great fit..."
                      className="w-full bg-transparent border-b border-[var(--border-color)] text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-foreground transition-colors pb-3 text-lg resize-none"
                    />
                  </div>
                  <div className="pt-4">
                    <p className="text-sm text-muted-foreground mb-6 font-light">
                      Resume upload (coming soon) - For now, please email your resume to <a href="mailto:careers@simpleinsolutions.com" className="text-[var(--accent)] font-medium">careers@simpleinsolutions.com</a>
                    </p>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-foreground text-background font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
                    >
                      {applied ? "✓ Application Submitted!" : <>Submit Application <Send className="w-4 h-4" /></>}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

