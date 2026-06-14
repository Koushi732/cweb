"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ExternalLink, X, Calendar, Users, Target } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper from "@/components/ui/ScrollAnimationWrapper";
import { portfolioProjects, portfolioCategories } from "@/data/portfolio";
import { useState } from "react";

export default function PortfolioClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const filteredProjects =
    activeCategory === "all"
      ? portfolioProjects
      : portfolioProjects.filter((p) => p.categorySlug === activeCategory);
  const selectedProjectData = portfolioProjects.find((p) => p.id === selectedProject);

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 gradient-hero overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Portfolio" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6"
          >
            Our <span className="bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">Portfolio</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl"
          >
            Explore our recent projects and see how we&apos;ve helped businesses transform with technology.
          </motion.p>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="flex flex-wrap justify-center gap-3 mb-12">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                  activeCategory === cat.slug
                    ? "bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white shadow-lg"
                    : "bg-[var(--surface)] text-muted border border-[var(--border-color)] hover:border-[var(--secondary)]/50"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <motion.button
                type="button"
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group text-left rounded-2xl overflow-hidden bg-[var(--surface)] border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover"
              >
                <div className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-white/20 text-7xl font-black">SI</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-6">
                  <span className="inline-block px-3 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs font-medium mb-3">
                    {project.category}
                  </span>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--secondary)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted line-clamp-2 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 rounded text-[10px] font-medium bg-[var(--background)] text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProjectData && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              className="relative z-10 w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[var(--surface)] rounded-3xl border border-[var(--border-color)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-48 bg-gradient-to-br ${selectedProjectData.gradient} flex items-center justify-center rounded-t-3xl relative`}>
                <div className="text-white/20 text-7xl font-black">SI</div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/30 backdrop-blur flex items-center justify-center text-white hover:bg-black/50 transition-colors"
                  aria-label="Close"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-8">
                <span className="inline-block px-3 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs font-medium mb-3">
                  {selectedProjectData.category}
                </span>
                <h2 className="text-2xl font-bold mb-3">{selectedProjectData.title}</h2>
                <p className="text-muted leading-relaxed mb-6">{selectedProjectData.description}</p>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Target className="w-4 h-4 text-[var(--secondary)]" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider">Challenge</h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed pl-6">{selectedProjectData.challenge}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-[var(--accent)]" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider">Solution</h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed pl-6">{selectedProjectData.solution}</p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-[var(--secondary)]" />
                      <h3 className="text-sm font-semibold uppercase tracking-wider">Results</h3>
                    </div>
                    <ul className="text-sm text-muted space-y-1 pl-6">
                      {selectedProjectData.results.map((r) => (
                        <li key={r} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[var(--secondary)]" />
                          {r}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-[var(--border-color)]">
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted mb-2">
                    Technologies
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedProjectData.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-medium bg-[var(--background)] border border-[var(--border-color)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
              Have a Project in <span className="bg-gradient-to-r from-[#22d3ee] to-[#a855f7] bg-clip-text text-transparent">Mind?</span>
            </h2>
            <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your vision to life with cutting-edge technology and proven expertise.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold text-lg hover:shadow-2xl hover:shadow-[var(--secondary)]/25 transition-all hover:scale-105"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
