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
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 gradient-hero overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Careers" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6"
          >
            Join Our <span className="bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl"
          >
            Build your career at a company that values innovation, growth, and work-life balance. Explore exciting opportunities with us.
          </motion.p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Benefits &amp; Perks
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Why Work at <span className="gradient-text">SimpleIn Solutions?</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              We believe in taking care of our team with comprehensive benefits and a culture that promotes growth.
            </p>
          </ScrollAnimationWrapper>

          <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => {
              const Icon = iconMap[benefit.icon] || Heart;
              return (
                <StaggerItem key={benefit.title}>
                  <div className="group p-8 rounded-2xl bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover text-center h-full">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--secondary)]/10 to-[var(--accent)]/10 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-8 h-8 text-[var(--secondary)]" />
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerChildren>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="text-center mb-16">
            <span className="inline-block text-sm font-semibold text-[var(--secondary)] uppercase tracking-wider mb-4">
              Current Openings
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Open <span className="gradient-text">Positions</span>
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Find the role that matches your skills and ambitions. We&apos;re always looking for talented individuals to join our team.
            </p>
          </ScrollAnimationWrapper>

          <div className="space-y-4 max-w-4xl mx-auto">
            {jobPositions.map((job) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="group p-6 rounded-2xl bg-background border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--secondary)] transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted mb-3">
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" /> {job.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {job.type}
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs font-medium">
                        {job.experience}
                      </span>
                    </div>
                    <p className="text-sm text-muted line-clamp-2">{job.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedJob(job.id)}
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all whitespace-nowrap"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedJob(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto bg-[var(--surface)] rounded-3xl border border-[var(--border-color)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <button
                  onClick={() => setSelectedJob(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[var(--background)] flex items-center justify-center text-muted hover:bg-[var(--surface-hover)] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>

                <span className="inline-block px-3 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs font-medium mb-3">
                  {selectedJobData.department}
                </span>
                <h2 className="text-2xl font-bold mb-2">{selectedJobData.title}</h2>
                <div className="flex flex-wrap items-center gap-3 text-sm text-muted mb-6">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {selectedJobData.location}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> {selectedJobData.type}
                  </span>
                  <span>{selectedJobData.experience}</span>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-2">About the role</h3>
                  <p className="text-sm text-muted leading-relaxed">{selectedJobData.description}</p>
                </div>

                <div className="mb-6">
                  <h3 className="text-sm font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {selectedJobData.requirements.map((r) => (
                      <li key={r} className="flex items-start gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-[var(--secondary)] mt-0.5 flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <form onSubmit={handleApply} className="space-y-4" noValidate>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="apply-name" className="block text-sm font-medium mb-2">Full Name</label>
                      <input
                        id="apply-name"
                        type="text"
                        value={appForm.name}
                        onChange={(e) => setAppForm({ ...appForm, name: e.target.value })}
                        placeholder="John Doe"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="apply-email" className="block text-sm font-medium mb-2">Email</label>
                      <input
                        id="apply-email"
                        type="email"
                        value={appForm.email}
                        onChange={(e) => setAppForm({ ...appForm, email: e.target.value })}
                        placeholder="you@email.com"
                        className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="apply-phone" className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      id="apply-phone"
                      type="tel"
                      value={appForm.phone}
                      onChange={(e) => setAppForm({ ...appForm, phone: e.target.value })}
                      placeholder="+91 XXXXX XXXXX"
                      className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="apply-cover" className="block text-sm font-medium mb-2">Cover Letter</label>
                    <textarea
                      id="apply-cover"
                      rows={4}
                      value={appForm.coverLetter}
                      onChange={(e) => setAppForm({ ...appForm, coverLetter: e.target.value })}
                      placeholder="Tell us why you'd be a great fit..."
                      className="w-full px-4 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors resize-none"
                    />
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-muted mb-3">
                      Resume upload (coming soon) - For now, please email your resume to <a href="mailto:careers@simpleinsolutions.com" className="text-[var(--secondary)]">careers@simpleinsolutions.com</a>
                    </p>
                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg hover:scale-[1.02] transition-all"
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
