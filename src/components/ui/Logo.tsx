import React from "react";
import Image from "next/image";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({ className = "", priority = false }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* 
        Light Theme Logo
        Uses: logo-light.png 
        Visibility: Hidden in dark mode 
      */}
      <Image
        src="/logo-light.png"
        alt="SimpleIn Solutions"
        width={400}
        height={120}
        className="w-full h-auto object-contain dark:hidden"
        priority={priority}
      />

      {/* 
        Dark Theme Logo 
        Uses: logo-dark.png
        Visibility: Block in dark mode, hidden in light mode 
      */}
      <Image
        src="/logo-dark.png"
        alt="SimpleIn Solutions"
        width={400}
        height={120}
        className="w-full h-auto object-contain hidden dark:block"
        priority={priority}
      />
    </div>
  );
}
