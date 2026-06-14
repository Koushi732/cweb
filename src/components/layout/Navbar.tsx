"use client";
/* eslint-disable react-hooks/set-state-in-effect */

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch, Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2, ArrowRight } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { navigation } from "@/data/navigation";

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch,
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "glass-strong shadow-lg py-2"
            : "bg-transparent py-4"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--secondary)] to-[var(--accent)] flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-110">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight text-foreground">
                  SimpleIn
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase text-muted -mt-1">
                  Solutions
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navigation.map((item) => {
                if (item.megaMenu) {
                  return (
                    <div
                      key={item.name}
                      className="relative"
                      onMouseEnter={() => setMegaMenuOpen(true)}
                      onMouseLeave={() => setMegaMenuOpen(false)}
                    >
                      <button
                        className={`flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === item.href || pathname.startsWith("/services") || pathname.startsWith("/hardware")
                            ? "text-[var(--secondary)]"
                            : "text-foreground hover:text-[var(--secondary)]"
                          }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Mega Menu */}
                      <AnimatePresence>
                        {megaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[680px] glass rounded-2xl p-6 shadow-2xl"
                          >
                            <div className="grid grid-cols-2 gap-6">
                              {item.sections?.map((section) => (
                                <div key={section.title}>
                                  <Link
                                    href={section.href}
                                    className="flex items-center gap-2 text-sm font-semibold text-foreground mb-3 hover:text-[var(--secondary)] transition-colors"
                                  >
                                    {section.title}
                                    <ArrowRight className="w-3 h-3" />
                                  </Link>
                                  <div className="space-y-1">
                                    {section.items.map((subItem) => {
                                      const Icon = iconMap[subItem.icon];
                                      return (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm text-muted hover:text-foreground hover:bg-[var(--surface-hover)] transition-all group"
                                        >
                                          {Icon && (
                                            <Icon className="w-4 h-4 text-[var(--secondary)] group-hover:scale-110 transition-transform" />
                                          )}
                                          <span>{subItem.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (item.name === "Hardware") return null; // In mega menu already

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === item.href
                        ? "text-[var(--secondary)]"
                        : "text-foreground hover:text-[var(--secondary)]"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2 rounded-xl hover:bg-[var(--surface-hover)] transition-colors"
                aria-label="Toggle theme"
              >
                <motion.div
                  key={resolvedTheme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-5 h-5 text-yellow-400" />
                  ) : (
                    <Moon className="w-5 h-5 text-slate-700" />
                  )}
                </motion.div>
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white text-sm font-semibold hover:shadow-lg hover:shadow-[var(--secondary)]/25 transition-all hover:scale-105"
              >
                Get a Quote
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2 rounded-xl hover:bg-[var(--surface-hover)] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setIsMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-[var(--surface)] shadow-2xl overflow-y-auto">
              <div className="p-6 pt-20 space-y-2">
                {navigation.map((item) => {
                  if (item.name === "Hardware") return null;
                  return (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${pathname === item.href
                            ? "text-[var(--secondary)] bg-[var(--surface-hover)]"
                            : "text-foreground hover:bg-[var(--surface-hover)]"
                          }`}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.megaMenu && (
                        <div className="ml-4 mt-1 space-y-1">
                          <Link
                            href="/hardware"
                            className="block px-4 py-2 rounded-lg text-sm text-muted hover:text-foreground hover:bg-[var(--surface-hover)] transition-colors"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            IT Hardware Sales
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-5 py-3 rounded-xl bg-gradient-to-r from-[var(--secondary)] to-[var(--accent)] text-white font-semibold"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
