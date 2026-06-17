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
      <section className="relative pt-32 pb-24 bg-background overflow-hidden border-b border-[var(--border-color)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumb items={[{ label: "Blog" }]} />
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[10vw] sm:text-7xl md:text-[7rem] font-bold text-foreground leading-none tracking-tighter mt-8 mb-8"
          >
            Insights &amp; <span className="text-[var(--accent)]">News.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-xl sm:text-3xl font-light text-muted-foreground max-w-3xl leading-tight"
          >
            Stay ahead with expert insights on technology trends, best practices, and industry updates.
          </motion.p>
        </div>
      </section>

      {/* Featured Article */}
      {featured && (
        <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollAnimationWrapper>
              <Link href="#" className="group block">
                <div className="grid lg:grid-cols-2 gap-0 bg-background border border-[var(--border-color)] hover:border-foreground transition-colors h-full">
                  <div className={`h-80 lg:h-auto bg-gradient-to-br ${featured.gradient} flex items-center justify-center border-b lg:border-b-0 lg:border-r border-[var(--border-color)]`}>
                    <div className="text-foreground/20 text-8xl font-bold font-serif tracking-tighter">SI.</div>
                  </div>
                  <div className="p-10 lg:p-16 flex flex-col justify-center">
                    <span className="inline-block px-3 py-1 bg-foreground text-background text-xs font-bold uppercase tracking-widest mb-6 w-fit">
                      Featured
                    </span>
                    <h2 className="text-3xl sm:text-5xl font-bold mb-6 group-hover:text-[var(--accent)] transition-colors leading-tight">
                      {featured.title}
                    </h2>
                    <p className="text-lg text-muted-foreground font-light leading-relaxed mb-8">{featured.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-6 text-sm font-bold uppercase tracking-widest text-muted-foreground">
                      <span className="text-[var(--accent)]">{featured.category}</span>
                      <span className="flex items-center gap-2">
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
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 mb-16 pb-8 border-b border-[var(--border-color)]">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground pointer-events-none" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-8 pr-10 py-4 bg-transparent border-none text-foreground placeholder:text-muted-foreground focus:outline-none text-xl"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-0 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  aria-label="Clear search"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
            <div className="flex flex-wrap gap-4">
              {blogCategories.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 text-xs font-bold tracking-widest uppercase transition-colors ${
                    activeCategory === cat.slug
                      ? "text-foreground border-b-2 border-foreground"
                      : "text-muted-foreground border-b-2 border-transparent hover:text-foreground"
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>

          <StaggerChildren className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post) => (
              <StaggerItem key={post.id}>
                <Link href="#" className="group block h-full">
                  <div className="h-full bg-background border border-[var(--border-color)] hover:border-foreground transition-colors flex flex-col">
                    <div className={`h-48 bg-gradient-to-br ${post.gradient} flex items-center justify-center relative border-b border-[var(--border-color)]`}>
                      <BookOpen className="w-10 h-10 text-foreground/30" />
                    </div>
                    <div className="p-8 flex flex-col flex-grow">
                      <div className="flex flex-wrap items-center gap-4 mb-6 text-xs font-bold uppercase tracking-widest">
                        <span className="text-[var(--accent)]">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Clock className="w-4 h-4" /> {post.readTime}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-4 group-hover:text-[var(--accent)] transition-colors line-clamp-2 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-base text-muted-foreground font-light line-clamp-3 mb-8 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-foreground group-hover:text-[var(--accent)] transition-colors">
                        Read Article <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerChildren>

          {filtered.length === 0 && (
            <div className="text-center py-32">
              <p className="text-2xl font-light text-muted-foreground">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-32 bg-[var(--surface)] border-b border-[var(--border-color)] text-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollAnimationWrapper>
            <div className="w-16 h-16 bg-background flex items-center justify-center mx-auto mb-8 border border-[var(--border-color)]">
              <Send className="w-6 h-6 text-foreground" />
            </div>
            <h2 className="text-4xl sm:text-6xl font-bold tracking-tighter mb-6 leading-none">
              Subscribe.
            </h2>
            <p className="text-xl text-muted font-light mb-12 max-w-2xl mx-auto">
              Get the latest articles, insights, and updates delivered straight to your inbox. No spam, ever.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-0 max-w-2xl mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-5 bg-transparent border border-muted text-background placeholder:text-muted focus:outline-none focus:border-background transition-colors text-lg"
                required
              />
              <button
                type="submit"
                className="px-10 py-5 bg-background text-foreground font-bold text-sm uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors whitespace-nowrap"
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

