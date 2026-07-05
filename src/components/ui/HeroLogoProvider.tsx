"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { usePathname } from "next/navigation";

interface HeroLogoContextType {
  isHomePage: boolean;
  scrollProgress: number; // 0 = top (hero logo large), 1 = scrolled past threshold (navbar logo)
  heroLogoThreshold: number; // px from top at which transition completes
}

const HeroLogoContext = createContext<HeroLogoContextType>({
  isHomePage: false,
  scrollProgress: 0,
  heroLogoThreshold: 300,
});

export function useHeroLogo() {
  return useContext(HeroLogoContext);
}

export default function HeroLogoProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const heroLogoThreshold = 300;
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    if (!isHomePage) {
      setScrollProgress(1);
      return;
    }

    const handleScroll = () => {
      const progress = Math.min(window.scrollY / heroLogoThreshold, 1);
      setScrollProgress(progress);
    };

    handleScroll(); // Set initial state
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, heroLogoThreshold]);

  return (
    <HeroLogoContext.Provider value={{ isHomePage, scrollProgress, heroLogoThreshold }}>
      {children}
    </HeroLogoContext.Provider>
  );
}
