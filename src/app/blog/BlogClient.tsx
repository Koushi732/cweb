"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Clock, ArrowRight, Send, BookOpen, Search, X } from "lucide-react";
import Breadcrumb from "@/components/ui/Breadcrumb";
import ScrollAnimationWrapper, { StaggerChildren, StaggerItem } from "@/components/ui/ScrollAnimationWrapper";
import { blogPosts, blogCategories } from "@/data/blog";
import { useState } from "react";

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const filtered = blogPosts
    .filter((p) => activeCategory === "all" || p.categorySlug === activeCategory)
    .filter(
      (p) =>
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const featured = blogPosts.find((p) => p.featured);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-20 gradient-hero overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mt-6 mb-6"
          >
            Our <span className="bg-gradient-to-r from-[#22d3ee] via-[#a855f7] to-[#22d3ee] bg-clip-text text-transparent animate-gradient bg-[length:200%_200%]">Blog</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-lg sm:text-xl text-white/70 max-w-2xl"
          >
            Stay ahead with expert insights on technology trends, best practices, and industry updates.
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimationWrapper>
              <Link href="#" className="group block">
                <div className="grid lg:grid-cols-2 gap-8 rounded-3xl bg-[var(--surface)] border border-[var(--border-color)] overflow-hidden hover:border-[var(--secondary)]/30 transition-all">
                  <div className={`h-64 lg:h-auto bg-gradient-to-br ${featured.gradient} flex items-center justify-center`}>
                    <div className="text-white/20 text-8xl font-black">SI</div>
                  </div>
                  <div className="p-8 lg:p-10 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs font-medium mb-4 w-fit">
                      Featured
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-[var(--secondary)] transition-colors">
                      {featured.title}
                    </h2>
                    <p className="text-muted leading-relaxed mb-6">{featured.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted">
                      <span className="px-3 py-1 rounded-full bg-[var(--background)]">{featured.category}</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" /> {featured.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </ScrollAnimationWrapper>
          </div>
        </section>
      )}

      {/* Search & Filter */}
      <section className="py-12 bg-[var(--surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
            <div className="relative w-full md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-11 pr-10 py-3 rounded-xl bg-background border border-[var(--border-color)] text-foreground placeholder:text-muted focus:outline-none focus:border-[var(--secondary)] transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-2">
              {blogCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    activeCategory === cat.slug
                      ? "bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white shadow-md"
                      : "bg-background text-muted border border-[var(--border-color)] hover:border-[var(--secondary)]/50"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((post) => (
              <StaggerItem key={post.id}>
                <Link href="#" className="group block h-full">
                  <div className="h-full rounded-2xl overflow-hidden bg-background border border-[var(--border-color)] hover:border-[var(--secondary)]/30 transition-all card-hover">
                    <div className={`h-40 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative`}>
                      <BookOpen className="w-12 h-12 text-white/30" />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2.5 py-1 rounded-full bg-[var(--secondary)]/10 text-[var(--secondary)] text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--secondary)] transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted line-clamp-2 mb-4">{post.excerpt}</p>
                      <div className="flex items-center gap-1 text-sm font-semibold text-[var(--secondary)]">
                        Read More <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-24 gradient-hero relative overflow-hidden">
        <div className="hero-particles" />
        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-lg text-white/70 mb-8">
              Get the latest articles, insights, and updates delivered straight to your inbox. No spam, ever.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-5 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 transition-colors"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold hover:shadow-lg transition-all hover:scale-105 whitespace-nowrap"
              >
                {subscribed ? "✓ Subscribed!" : "Subscribe"}
              </button>
            </form>
          </ScrollAnimationWrapper>
        </div>
      </section>
    </>
  );
}
