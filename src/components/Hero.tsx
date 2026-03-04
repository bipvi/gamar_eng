"use client";
import { useEffect, useState } from "react";
import CircuitBackground from "./CircuitBackground";
import Image from "next/image";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#010812]">
      {/* Radial bg glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,_#0a2a6e10_0%,_#020d1a_50%,_#020d28_100%)]" />
      <CircuitBackground />

      {/* Bokeh effects */}
      <div className="absolute inset-0 pointer-events-none">
        {[
          { cx: "8%", cy: "25%", r: 60, op: 0.18 },
          { cx: "5%", cy: "55%", r: 80, op: 0.15 },
          { cx: "12%", cy: "75%", r: 70, op: 0.14 },
          { cx: "3%", cy: "88%", r: 50, op: 0.16 },
          { cx: "20%", cy: "40%", r: 30, op: 0.2 },
          { cx: "15%", cy: "65%", r: 25, op: 0.18 },
        ].map((b, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: b.cx, top: b.cy,
              width: b.r * 2, height: b.r * 2,
              background: `radial-gradient(circle, rgba(59,130,246,${b.op}) 0%, transparent 70%)`,
              filter: "blur(20px)",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div
        className="z-10 text-center px-6"
        style={{ opacity: mounted ? 1 : 0, transition: "opacity 1s ease-in-out" }}
      >        <div className="flex items-center justify-center gap-4 mb-8">
          <Image src="logo.svg" alt="Gama.R Logo" width={2000} height={10} className="h-150 w-full group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300" />
        </div>

        {/* Animated divider */}
        <div className="w-48 h-px mx-auto mb-10 bg-gradient-to-r from-transparent via-blue-400 to-transparent" />

        <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed opacity-80">
          Tecnologia · Visione · Sicurezza
        </p>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 opacity-50">
          <div className="w-px h-12 bg-gradient-to-b from-blue-400 to-transparent animate-pulse" />
        </div>
      </div>
    </section>
  );
}