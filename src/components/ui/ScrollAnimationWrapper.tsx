"use client";

import { useRef, type ReactNode } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up" | "fade-down" | "text-reveal" | "mask-up";

interface ScrollAnimationWrapperProps {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const variants = {
  "fade-up": { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } },
  "fade-down": { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } },
  "fade-in": { hidden: { opacity: 0 }, visible: { opacity: 1 } },
  "slide-left": { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } },
  "slide-right": { hidden: { opacity: 0, x: 60 }, visible: { opacity: 1, x: 0 } },
  "scale-up": { hidden: { opacity: 0, scale: 0.9 }, visible: { opacity: 1, scale: 1 } },
  "text-reveal": { hidden: { opacity: 0, clipPath: "inset(0 100% 0 0)" }, visible: { opacity: 1, clipPath: "inset(0 0 0 0)" } },
  "mask-up": { hidden: { opacity: 0, y: "50%" }, visible: { opacity: 1, y: 0 } },
};

const reducedMotionVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export default function ScrollAnimationWrapper({
  children,
  animation = "fade-up",
  delay = 0,
  duration = 0.8,
  className = "",
  once = true,
}: ScrollAnimationWrapperProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-50px" });
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={shouldReduceMotion ? reducedMotionVariants : variants[animation]}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChildren({
  children,
  className = "",
  staggerDelay = 0.1,
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
