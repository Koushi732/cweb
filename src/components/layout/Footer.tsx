"use client";

import Link from "next/link";
import { Mail, Phone, ArrowUp } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer ref={containerRef} className="relative bg-background pt-0 pb-12 border-t border-[var(--border-color)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div style={{ opacity, y }} className="mb-20 md:mb-24">
          <Link href="/" className="inline-block group">
            <motion.h2
              style={{ scale }}
              className="text-7xl sm:text-8xl lg:text-[8rem] font-bold leading-none tracking-tighter text-foreground transition-colors uppercase origin-left"
            >
              GROWTH.
            </motion.h2>
          </Link>
          <p className="text-lg md:text-2xl font-light text-muted-foreground max-w-2xl mt-6 leading-tight">
            Technology built for Business growth.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Column 1: Services */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-foreground">Services</h3>
            <ul className="space-y-4">
              {[
                { name: "IT Hardware Sales", href: "/hardware" },
                { name: "Custom Software", href: "/services#custom-software" },
                { name: "Web & Mobile", href: "/services#web-development" },
                { name: "AI & Automation", href: "/services#ai-automation" },
                { name: "Cloud & DevOps", href: "/services#cloud-deployment" },
                { name: "Enterprise Systems", href: "/services#enterprise-software" },
                { name: "Digital Marketing", href: "/services#digital-marketing" },
                { name: "Networking & Security", href: "/services#networking-security" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-foreground">Company</h3>
            <ul className="space-y-4">
              {[
                { name: "About Us", href: "/about" },
                { name: "Industries", href: "/industries" },
                { name: "FAQ", href: "/faq" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[15px] text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-foreground">Reach Us</h3>
            <ul className="space-y-4 text-[15px] text-muted-foreground">
              <li className="flex items-start gap-3 hover:text-foreground transition-colors">
                <a href="tel:+919848334984" className="flex items-center gap-2">
                  <Phone className="w-4 h-4 shrink-0" /> <span>+91 984 8334 984</span>
                </a>
              </li>
              <li className="flex items-start gap-3 hover:text-foreground transition-colors">
                <a href="mailto:info@simpleinsolutions.com" className="flex items-center gap-2">
                  <Mail className="w-4 h-4 shrink-0" /> <span>info@simpleinsolutions.com</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter & Social */}
          <div className="lg:col-span-4 lg:pl-12">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-foreground">Newsletter</h3>
            <form onSubmit={handleSubscribe} className="relative flex items-center border-b border-[var(--border-color)] focus-within:border-foreground transition-colors mb-12 pb-2 gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-transparent text-[15px] text-foreground placeholder:text-muted-foreground focus:outline-none border-none focus:ring-0 p-0"
                required
              />
              <button
                type="submit"
                className="shrink-0 text-foreground hover:text-muted-foreground font-bold text-sm transition-colors uppercase tracking-wider"
              >
                {subscribed ? "Subscribed" : "Subscribe"}
              </button>
            </form>

            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-foreground">Social</h3>
            <div className="flex gap-4">
              {[
                { icon: TwitterIcon, href: "https://x.com/simplein30", label: "X (Twitter)" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 rounded-none border border-[var(--border-color)] flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[var(--border-color)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm font-medium tracking-wide text-muted-foreground">
            © {new Date().getFullYear()} SimpleIn Solutions. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-none border border-[var(--border-color)] flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors ml-2 sm:ml-4"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
