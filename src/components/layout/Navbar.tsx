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
            ? "bg-background/80 backdrop-blur-md border-b border-[var(--border-color)] py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-none border border-[var(--border-color)] bg-foreground flex items-center justify-center text-background font-serif text-xl transition-transform group-hover:scale-95">
                S
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-tight text-foreground leading-none">
                  SimpleIn
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-muted-foreground mt-1">
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
                        className={`flex items-center gap-1 px-4 py-2 rounded-none text-sm font-medium transition-colors ${pathname === item.href || pathname.startsWith("/services") || pathname.startsWith("/hardware")
                            ? "text-foreground bg-[var(--surface)]"
                            : "text-muted-foreground hover:text-foreground hover:bg-[var(--surface-hover)]"
                          }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${megaMenuOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Mega Menu */}
                      <AnimatePresence>
                        {megaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.98 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-4 w-[680px] bg-background border border-[var(--border-color)] rounded-none p-8"
                          >
                            <div className="grid grid-cols-2 gap-8">
                              {item.sections?.map((section) => (
                                <div key={section.title}>
                                  <Link
                                    href={section.href}
                                    className="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground mb-4 hover:text-[var(--accent)] transition-colors group"
                                  >
                                    {section.title}
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                  <div className="space-y-2">
                                    {section.items.map((subItem) => {
                                      const Icon = iconMap[subItem.icon];
                                      return (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="flex items-center gap-3 px-3 py-2.5 rounded-none text-sm text-muted-foreground hover:text-foreground hover:bg-[var(--surface)] transition-all group"
                                        >
                                          {Icon && (
                                            <Icon className="w-4 h-4 text-[var(--accent)] group-hover:scale-110 transition-transform" />
                                          )}
                                          <span className="font-medium">{subItem.name}</span>
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
                    className={`px-4 py-2 rounded-none text-sm font-medium transition-colors ${pathname === item.href
                        ? "text-foreground bg-[var(--surface)]"
                        : "text-muted-foreground hover:text-foreground hover:bg-[var(--surface-hover)]"
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
                className="relative p-2.5 rounded-none hover:bg-[var(--surface)] border border-transparent hover:border-[var(--border-color)] transition-colors"
                aria-label="Toggle theme"
              >
                <motion.div
                  key={resolvedTheme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-4 h-4 text-foreground" />
                  ) : (
                    <Moon className="w-4 h-4 text-foreground" />
                  )}
                </motion.div>
              </button>

              {/* CTA Button */}
              <Link
                href="/contact"
                className="hidden sm:flex items-center gap-2 px-6 py-2.5 rounded-none border border-[var(--border-color)] bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
              >
                Get a Quote
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="lg:hidden p-2.5 rounded-none border border-transparent hover:border-[var(--border-color)] hover:bg-[var(--surface)] transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
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
            <div className="absolute inset-0 bg-background/90 backdrop-blur-md" onClick={() => setIsMobileOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-80 max-w-[85vw] bg-background border-l border-[var(--border-color)] shadow-none overflow-y-auto">
              <div className="p-8 pt-24 space-y-4">
                {navigation.map((item) => {
                  if (item.name === "Hardware") return null;
                  return (
                    <div key={item.name}>
                      <Link
                        href={item.href}
                        className={`block px-4 py-3 rounded-none border-b border-[var(--border-color)] text-base font-medium transition-colors ${pathname === item.href
                            ? "text-foreground bg-[var(--surface)]"
                            : "text-muted-foreground hover:bg-[var(--surface)] hover:text-foreground"
                          }`}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.name}
                      </Link>
                      {item.megaMenu && (
                        <div className="ml-4 mt-2 space-y-1 border-l-2 border-[var(--border-color)] pl-4">
                          <Link
                            href="/hardware"
                            className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            IT Hardware Sales
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="pt-8 border-t border-[var(--border-color)]">
                  <Link
                    href="/contact"
                    className="block w-full text-center px-6 py-4 rounded-none border border-[var(--border-color)] bg-foreground text-background text-sm font-bold uppercase tracking-widest hover:bg-[var(--accent)] hover:text-[var(--primary-foreground)] transition-colors"
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
