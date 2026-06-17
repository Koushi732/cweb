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
      <section className="relative pt-32 pb-24 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Portfolio" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-tighter mt-8 mb-8"
          >
            Our <span className="text-[var(--accent)]">Work.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-tight"
          >
            Explore our recent projects and see how we&apos;ve helped businesses transform with technology.
          </motion.p>
        </div>
      </section>

      {/* Filter & Projects */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimationWrapper className="flex flex-wrap justify-start gap-4 mb-16">
            {portfolioCategories.map((cat) => (
              <button
                key={cat.slug}
                onClick={() => setActiveCategory(cat.slug)}
                className={`px-6 py-3 text-sm font-bold tracking-widest uppercase transition-colors ${
                  activeCategory === cat.slug
                    ? "bg-foreground text-background"
                    : "bg-transparent text-muted-foreground border border-[var(--border-color)] hover:border-foreground hover:text-foreground"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </ScrollAnimationWrapper>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <motion.button
                type="button"
                key={project.id}
                onClick={() => setSelectedProject(project.id)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="group text-left bg-background border border-[var(--border-color)] hover:border-foreground transition-colors flex flex-col h-full"
              >
                <div className={`h-64 bg-gradient-to-br ${project.gradient} flex items-center justify-center relative overflow-hidden border-b border-[var(--border-color)]`}>
                  <div className="text-foreground/20 text-7xl font-bold font-serif tracking-tighter">SI.</div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                    <ExternalLink className="w-8 h-8 text-[var(--primary-foreground)] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="inline-block text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-4">
                    {project.category}
                  </span>
                  <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-[var(--accent)] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-base text-muted-foreground line-clamp-3 mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-[var(--border-color)]">
                    {project.technologies.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground border border-[var(--border-color)]"
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-background border border-[var(--border-color)] shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`h-64 sm:h-80 bg-gradient-to-br ${selectedProjectData.gradient} flex items-center justify-center relative border-b border-[var(--border-color)]`}>
                <div className="text-foreground/20 text-8xl font-bold font-serif tracking-tighter">SI.</div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-6 right-6 w-12 h-12 bg-foreground/10 hover:bg-foreground/20 backdrop-blur flex items-center justify-center text-[var(--primary-foreground)] transition-colors"
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              <div className="p-8 sm:p-12">
                <span className="inline-block text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-4">
                  {selectedProjectData.category}
                </span>
                <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-6">{selectedProjectData.title}</h2>
                <p className="text-xl text-muted-foreground font-light leading-relaxed mb-12 max-w-3xl">{selectedProjectData.description}</p>

                <div className="grid sm:grid-cols-3 gap-8 mb-12">
                  <div className="border-t border-[var(--border-color)] pt-6">
                    <div className="flex items-center gap-3 mb-4 text-foreground">
                      <Target className="w-5 h-5 text-[var(--accent)]" />
                      <h3 className="text-sm font-bold uppercase tracking-widest">Challenge</h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{selectedProjectData.challenge}</p>
                  </div>
                  <div className="border-t border-[var(--border-color)] pt-6">
                    <div className="flex items-center gap-3 mb-4 text-foreground">
                      <Users className="w-5 h-5 text-[var(--accent)]" />
                      <h3 className="text-sm font-bold uppercase tracking-widest">Solution</h3>
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">{selectedProjectData.solution}</p>
                  </div>
                  <div className="border-t border-[var(--border-color)] pt-6">
                    <div className="flex items-center gap-3 mb-4 text-foreground">
                      <Calendar className="w-5 h-5 text-[var(--accent)]" />
                      <h3 className="text-sm font-bold uppercase tracking-widest">Results</h3>
                    </div>
                    <ul className="text-base text-muted-foreground space-y-3">
                      {selectedProjectData.results.map((r) => (
                        <li key={r} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-[var(--accent)] mt-2 flex-shrink-0" />
                          <span>{r}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-8 border-t border-[var(--border-color)]">
                  <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-6">
                    Technologies Used
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {selectedProjectData.technologies.map((t) => (
                      <span
                        key={t}
                        className="px-4 py-2 text-xs font-bold uppercase tracking-widest bg-[var(--surface)] text-foreground border border-[var(--border-color)]"
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
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-none">
              Have a Project in Mind?
            </h2>
            <p className="text-xl sm:text-2xl text-muted font-light mb-12 max-w-2xl mx-auto">
              Let&apos;s discuss how we can bring your vision to life with cutting-edge technology and proven expertise.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-background text-foreground font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
            >
              Start Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}

