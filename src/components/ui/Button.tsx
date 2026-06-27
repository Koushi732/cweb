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
    const baseStyles = "inline-flex items-center justify-center gap-3 font-bold uppercase tracking-[0.1em] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none rounded-none whitespace-nowrap";
    
    const variants = {
      primary: "bg-foreground text-background hover:opacity-90 border border-foreground",
      outline: "border border-foreground bg-transparent hover:bg-foreground hover:text-background text-foreground",
      ghost: "bg-transparent hover:bg-[var(--surface)] text-foreground",
    };

    const sizes = {
      sm: "h-10 px-6 text-xs",
      md: "h-14 px-8 text-sm",
      lg: "h-16 px-10 text-sm",
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
