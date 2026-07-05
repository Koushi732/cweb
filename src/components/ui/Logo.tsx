import React from "react";

interface LogoProps {
  className?: string;
  priority?: boolean;
}

export default function Logo({ className = "" }: LogoProps) {
  return (
    <svg 
      viewBox="0 0 400 120" 
      className={`w-full h-full text-foreground ${className}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMinYMid meet"
    >
      <g transform="translate(200, 60)">
        {/* Main Brand Name */}
        <text 
          x="0" 
          y="4" 
          textAnchor="middle" 
          fontSize="76" 
          fontWeight="700" 
          fontFamily="var(--font-inter), system-ui, sans-serif"
          letterSpacing="-0.04em"
        >
          SIMPLEIN
        </text>
        
        {/* Sub-brand / Divider container */}
        <g transform="translate(0, 42)">
          {/* Left line */}
          <line 
            x1="-185" 
            y1="-4" 
            x2="-115" 
            y2="-4" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            opacity="0.3" 
          />
          
          {/* Sub-brand Name */}
          <text 
            x="2" 
            y="1" 
            textAnchor="middle" 
            fontSize="15" 
            fontWeight="500" 
            fontFamily="var(--font-inter), system-ui, sans-serif"
            letterSpacing="0.5em"
            opacity="0.8"
          >
            SOLUTIONS
          </text>
          
          {/* Right line */}
          <line 
            x1="120" 
            y1="-4" 
            x2="190" 
            y2="-4" 
            stroke="currentColor" 
            strokeWidth="1.5" 
            opacity="0.3" 
          />
        </g>
      </g>
    </svg>
  );
}
