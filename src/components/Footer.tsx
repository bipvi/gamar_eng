"use client";
import Image from "next/image";
import Link from "next/link";
import CircuitBackground from "./CircuitBackground";
import { LuMapPin } from "react-icons/lu";
import { TbWorld } from "react-icons/tb";
import { HiOutlineMail } from "react-icons/hi";
import { FaPhoneAlt } from "react-icons/fa";

const links = [
  { href: "/chi-siamo", label: "Chi Siamo" },
  { href: "/servizi", label: "Servizi" },
  { href: "#contatti", label: "Contatti" },
];

// Sostituisci i path con i percorsi reali dei tuoi SVG in /public
const partnerLogos = [
  { src: "/partners/1.svg", alt: "Partner 1" },
  { src: "/partners/2.svg", alt: "Partner 2" },
  { src: "/partners/3.svg", alt: "Partner 3" },
  { src: "/partners/4.svg", alt: "Partner 4" },
  { src: "/partners/5.svg", alt: "Partner 5" },
  { src: "/partners/6.svg", alt: "Partner 6" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-[#00060e] overflow-hidden border-t border-blue-900/20">
      <CircuitBackground />

      {/* Top accent line */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* ── PARTNER LOGOS ── */}
        <div className="py-14 border-b border-blue-900/15">
          <p className="text-center text-blue-400/30 text-xs tracking-[0.4em] mb-10 uppercase"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            I Nostri Partner
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16">
            {partnerLogos.map((logo, i) => (
              <div
                key={i}
                className="group relative flex items-center justify-center hover:opacity-100 transition-opacity duration-500 grayscale hover:grayscale-0 hover:scale-110"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={48}
                  className="h-30 w-auto object-contain"
                />
                {/* Glow on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ filter: "drop-shadow(0 0 8px rgba(96,165,250,0.4))" }} />
              </div>
            ))}
          </div>
        </div>

        {/* ── MAIN FOOTER ── */}
        <div className="py-14 grid md:grid-cols-3 gap-12">

          {/* Col 1 — Logo + descrizione */}
          <div className="space-y-6">
            <p className="text-blue-200/35 text-sm leading-relaxed max-w-xs">
              Soluzioni integrate in A.I., cybersecurity avanzata e tecnologie quantistiche per la Difesa, l'Aereospazio e l'Industria ad alta tecnologia.
            </p>
            {/* Decorative circuit line */}
            <div className="flex items-center gap-2 pt-2">
              <div className="w-2 h-2 rounded-full bg-blue-500/25" />
              <div className="flex-1 h-px bg-gradient-to-r from-blue-500/15 to-transparent" />
            </div>
          </div>

          {/* Col 2 — Navigazione */}
          <div className="space-y-6">
            <p className="text-blue-400 text-xs tracking-[0.3em] uppercase font-medium"
              style={{ fontFamily: "'Orbitron', monospace" }}>
              Navigazione
            </p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-3 text-sm text-blue-200/35 hover:text-blue-300 transition-colors duration-300"
                  >
                    <div className="w-1 h-1 rounded-full bg-blue-500/20 group-hover:bg-blue-400 transition-colors" />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contatti + P.IVA */}
           <div className="space-y-6">
            <p className="text-blue-400 text-xs tracking-[0.3em] uppercase font-medium"
              style={{ fontFamily: "'Orbitron', monospace" }}>
              Contatti
            </p>
            <ul className="space-y-4 text-sm text-blue-200/35">
              <li className="flex items-start gap-3">
                <HiOutlineMail className="text-blue-500/60 mt-0.5 flex-shrink-0 w-4 h-4" />
                <a href="mailto:info@gamarengineering.com"
                  className="hover:text-blue-300 transition-colors break-all">
                  info@gamarengineering.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FaPhoneAlt  className="text-blue-500/60 mt-0.5 flex-shrink-0 w-4 h-4" />
                <a href="tel:+390546062422" className="hover:text-blue-300 transition-colors">
                  +39 0546 062422
                </a>
              </li>
              <li className="flex items-start gap-3">
                <LuMapPin className="text-blue-500/60 mt-0.5 flex-shrink-0 w-4 h-4" />
                <span>Castel Bolognese (RA)</span>
              </li>
              <li className="pt-2 border-t border-blue-900/15">
                <span className="text-blue-400/20 text-xs tracking-wide"
                  style={{ fontFamily: "'Orbitron', monospace" }}>
                  P.IVA: 02815210394
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── COPYRIGHT ── */}
        <div className="py-6 border-t border-blue-900/15 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-blue-200/20 text-xs tracking-widest"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            © {year} GAMAR ENGINEERING — ALL RIGHTS RESERVED
          </p>
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500/20 animate-pulse" />
          </div>
        </div>

      </div>
    </footer>
  );
}