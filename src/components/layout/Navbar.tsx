"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Sun, Moon, ChevronDown, Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch, Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2, ArrowRight, Camera, Fingerprint, Building, ShoppingCart, Zap, Network } from "lucide-react";
import { useTheme } from "@/components/ui/ThemeProvider";
import { navigation } from "@/data/navigation";
import Logo from "@/components/ui/Logo";

const iconMap: Record<string, React.ElementType> = {
  Code2, Globe, Smartphone, Cloud, Shield, Brain, Lightbulb, GitBranch,
  Laptop, Monitor, Server, Wifi, HardDrive, Printer, Headphones, Building2,
  Camera, Fingerprint, Building, ShoppingCart, Zap, Network
};

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [megaMenuOpen, setMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const { scrollY } = useScroll();
  const isHomePage = pathname === "/";
  const logoOpacity = useTransform(scrollY, [150, 300], [0, 1]);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobileOpen(false);
    setMegaMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileOpen(false);
        setMegaMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-[var(--border-color)] py-3"
            : "bg-transparent py-5"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo — Animated Image Logo */}
            <Link 
              href="/" 
              className="flex items-center gap-3 group relative h-10 w-40 md:w-48" 
              aria-label="SIMPLEIN Solutions Home"
              onClick={handleLogoClick}
            >
              <motion.div
                style={{ opacity: isHomePage ? logoOpacity : 1 }}
                className="absolute inset-0 flex items-center group-hover:scale-[1.03] group-hover:opacity-90 transition-all duration-500 ease-out origin-left"
              >
                <Logo priority />
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
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
                        type="button"
                        aria-expanded={megaMenuOpen}
                        aria-haspopup="true"
                        className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${pathname === item.href || pathname.startsWith("/services") || pathname.startsWith("/hardware")
                            ? "text-foreground"
                            : "text-muted-foreground hover:text-foreground"
                          }`}
                      >
                        {item.name}
                        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${megaMenuOpen ? "rotate-180" : ""}`} />
                      </button>

                      {/* Mega Menu */}
                      <AnimatePresence>
                        {megaMenuOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 8 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[680px] bg-background/95 backdrop-blur-xl border border-[var(--border-color)] p-8 shadow-lg"
                          >
                            <div className="grid grid-cols-2 gap-8">
                              {item.sections?.map((section) => (
                                <div key={section.title}>
                                  <Link
                                    href={section.href}
                                    className="flex items-center gap-2 text-sm font-bold tracking-tight text-foreground mb-4 hover:text-muted-foreground transition-colors group"
                                  >
                                    {section.title}
                                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                  </Link>
                                  <div className="space-y-1">
                                    {section.items.map((subItem) => {
                                      const Icon = iconMap[subItem.icon];
                                      return (
                                        <Link
                                          key={subItem.name}
                                          href={subItem.href}
                                          className="flex items-center gap-3 px-3 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-[var(--surface)] transition-all group"
                                        >
                                          {Icon && (
                                            <Icon className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
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
                    className={`px-4 py-2 text-sm font-medium transition-colors ${pathname === item.href
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                      }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative p-2.5 text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Toggle theme"
              >
                <motion.div
                  key={resolvedTheme}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="w-4 h-4" />
                  ) : (
                    <Moon className="w-4 h-4" />
                  )}
                </motion.div>
              </button>

              {/* CTA Button */}
              <Link 
                href="/contact#contact-form" 
                className="hidden md:inline-flex items-center justify-center h-10 px-6 bg-foreground text-background font-semibold text-xs uppercase tracking-[0.1em] hover:opacity-90 transition-opacity"
              >
                Get a Quote
              </Link>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                aria-expanded={isMobileOpen}
                aria-haspopup="true"
                className="lg:hidden p-2.5 text-foreground"
                aria-label="Toggle menu"
              >
                {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu — Full screen overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-background" onClick={() => setIsMobileOpen(false)} />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="absolute inset-0 bg-background overflow-y-auto"
            >
              <div className="px-8 pt-24 pb-12 space-y-2">
                {navigation.map((item) => {
                  if (item.name === "Hardware") return null;
                  return (
                    <div key={item.name}>
                      {item.megaMenu ? (
                        <div
                          className={`block py-4 text-3xl font-bold tracking-tight transition-colors border-b border-[var(--border-color)] text-foreground`}
                        >
                          {item.name}
                        </div>
                      ) : (
                        <Link
                          href={item.href}
                          className={`block py-4 text-3xl font-bold tracking-tight transition-colors border-b border-[var(--border-color)] ${pathname === item.href
                              ? "text-foreground"
                              : "text-muted-foreground hover:text-foreground"
                            }`}
                          onClick={() => setIsMobileOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                      {item.megaMenu && (
                        <div className="ml-4 mt-2 mb-4 space-y-2 border-l border-[var(--border-color)] pl-4">
                          <Link
                            href="/hardware"
                            className="block py-2 text-lg text-muted-foreground hover:text-foreground transition-colors"
                            onClick={() => setIsMobileOpen(false)}
                          >
                            IT Hardware
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
                <div className="pt-8">
                  <Link 
                    href="/contact#contact-form" 
                    className="flex items-center justify-center w-full h-12 bg-foreground text-background font-bold text-xs uppercase tracking-[0.1em]"
                    onClick={() => setIsMobileOpen(false)}
                  >
                    Get a Quote
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
