"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const links = [
  { href: "#chi-siamo", label: "Chi Siamo" },
  { href: "#servizi", label: "Prodotti & Servizi" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-blue-900/20 bg-[#00060e]/95 backdrop-blur-md shadow-lg shadow-black/50"
            : "border-b border-white/5 bg-[#00060e]/80 backdrop-blur-sm"
        }`}
      >
        {/* Top circuit accent line */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.svg"
              alt="Gama.R Logo"
              width={180}
              height={30}
              className="navlogo h-30 mt-4 w-auto group-hover:drop-shadow-[0_0_8px_rgba(96,165,250,0.8)] transition-all duration-300"
            />
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="relative text-xs tracking-[0.2em] font-medium text-blue-200/50 hover:text-blue-300 transition-colors duration-300 group uppercase"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500" />
              </Link>
            ))}
            <Link
                href="#contatti"
                className="relative text-xs tracking-[0.2em] font-medium text-blue-200/50 hover:text-blue-300 transition-colors duration-300 group uppercase"
                style={{ fontFamily: "'Orbitron', monospace" }}
              >
                Contatti
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-500" />
              </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span className={`block w-6 h-px bg-blue-300/70 transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-px bg-blue-300/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-px bg-blue-300/70 transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Bottom circuit accent */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-900/30 to-transparent" />
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed top-20 left-0 w-full z-40 transition-all duration-400 md:hidden overflow-hidden ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-[#00060e]/98 backdrop-blur-md border-b border-blue-900/20 px-6 py-6 flex flex-col gap-6">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-3 text-xs tracking-[0.2em] font-medium text-blue-200/50 hover:text-blue-300 transition-colors uppercase"
              style={{ fontFamily: "'Orbitron', monospace" }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
              {l.label}
            </Link>
          ))}
          <Link 
            href="#contatti"
             className="flex items-center gap-3 text-xs tracking-[0.2em] font-medium text-blue-200/50 hover:text-blue-300 transition-colors uppercase"
              style={{ fontFamily: "'Orbitron', monospace" }}>
              <div className="w-1.5 h-1.5 rounded-full bg-blue-500/30" />
              Contatti
            </Link>
        </div>
      </div>
    </>
  );
}