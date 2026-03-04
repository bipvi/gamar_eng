// CircuitBackground.tsx - SVG circuit board background reusable component
"use client";
import { useId } from "react";

export default function CircuitBackground({ className = "" }: { className?: string }) {
  const uid = useId().replace(/:/g, "");
  const glowId = `glow-${uid}`;
  const strongGlowId = `sglow-${uid}`;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute inset-0 w-full h-full opacity-40"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <filter id={glowId}>
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
          <filter id={strongGlowId}>
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur"/>
              <feMergeNode in="blur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* Top right cluster */}
        <g stroke="#2a5298" strokeWidth="1" fill="none" filter={`url(#${glowId})`} opacity="0.85">
          <polyline points="700,0 760,0 800,40 900,40 940,80 1200,80" />
          <polyline points="720,20 770,20 810,60 910,60 950,100 1200,100" />
          <polyline points="740,40 780,40 820,80 920,80 960,120 1200,120" />
          <polyline points="760,60 790,60 830,100 930,100 970,140" />
          <line x1="760" y1="0" x2="760" y2="40" />
          <line x1="800" y1="40" x2="800" y2="80" />
          <line x1="900" y1="40" x2="900" y2="80" />
          <line x1="940" y1="80" x2="940" y2="120" />
        </g>

        {/* Mid-right cluster */}
        <g stroke="#2a5298" strokeWidth="1" fill="none" filter={`url(#${glowId})`} opacity="0.75">
          <polyline points="800,250 870,250 910,290 1000,290 1050,340 1200,340" />
          <polyline points="820,270 880,270 920,310 1010,310 1060,360 1200,360" />
          <polyline points="800,290 860,290 900,330 990,330 1040,380 1200,380" />
          <polyline points="780,310 840,310 880,350 970,350 1020,400" />
          <polyline points="760,330 820,330 860,370 950,370 1000,420 1200,420" />
          <line x1="870" y1="250" x2="870" y2="290" />
          <line x1="1000" y1="290" x2="1000" y2="330" />
          <line x1="1050" y1="340" x2="1050" y2="380" />
        </g>

        {/* Bottom right cluster */}
        <g stroke="#2a5298" strokeWidth="1" fill="none" filter={`url(#${glowId})`} opacity="0.65">
          <polyline points="820,550 900,550 940,590 1040,590 1090,640 1200,640" />
          <polyline points="840,570 910,570 950,610 1050,610 1100,660 1200,660" />
          <polyline points="820,590 890,590 930,630 1030,630 1080,680 1200,680" />
          <polyline points="800,610 870,610 910,650 1010,650 1060,700" />
          <polyline points="780,630 850,630 890,670 990,670 1040,720 1200,720" />
          <polyline points="760,650 830,650 870,690 970,690 1020,740 1200,740" />
          <line x1="900" y1="550" x2="900" y2="590" />
          <line x1="1040" y1="590" x2="1040" y2="630" />
        </g>

        {/* Left corner decorations */}
        <g stroke="#2a5298" strokeWidth="1" fill="none" opacity="0.5">
          <polyline points="0,600 60,600 80,620 80,680 60,700 0,700" />
          <line x1="20" y1="620" x2="60" y2="620" />
          <line x1="20" y1="660" x2="60" y2="660" />
          <circle cx="20" cy="620" r="3" fill="#2a5298" />
          <circle cx="20" cy="660" r="3" fill="#2a5298" />
          <circle cx="60" cy="640" r="4" fill="#3b6fd4" filter={`url(#${glowId})`} />
        </g>

        {/* Glowing nodes */}
        <g filter={`url(#${strongGlowId})`}>
          <circle cx="940" cy="80"  r="5" fill="#3b6fd4" />
          <circle cx="800" cy="40"  r="4" fill="#2a5298" />
          <circle cx="1050" cy="340" r="5" fill="#3b6fd4" />
          <circle cx="870" cy="250" r="4" fill="#2a5298" />
          <circle cx="1090" cy="640" r="5" fill="#3b6fd4" />
          <circle cx="900" cy="550" r="4" fill="#2a5298" />
        </g>

        {/* Small scattered nodes */}
        <g opacity="0.45">
          <circle cx="760" cy="0"   r="3" fill="#2a5298" />
          <circle cx="900" cy="40"  r="3" fill="#2a5298" />
          <circle cx="1000" cy="290" r="3" fill="#2a5298" />
          <circle cx="1040" cy="590" r="3" fill="#2a5298" />
          <circle cx="870" cy="610" r="3" fill="#2a5298" />
        </g>
      </svg>
    </div>
  );
}