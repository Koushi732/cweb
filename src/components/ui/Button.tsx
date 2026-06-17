import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  className?: string;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", href, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center gap-3 font-bold uppercase tracking-widest transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] disabled:opacity-50 disabled:pointer-events-none rounded-none";
    
    const variants = {
      primary: "bg-primary text-primary-foreground hover:bg-[var(--accent)] border border-transparent",
      outline: "border border-[var(--border-color)] bg-transparent hover:border-foreground text-foreground",
      ghost: "bg-transparent hover:bg-[var(--surface)] text-foreground",
    };

    const sizes = {
      sm: "h-10 px-6 text-xs",
      md: "h-14 px-8 text-sm",
      lg: "h-16 px-10 text-base",
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
