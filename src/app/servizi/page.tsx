"use client";
import CircuitBackground from "@/components/CircuitBackground";
import { TbBrain } from "react-icons/tb";
import { LuCode } from "react-icons/lu";
import { GoShieldLock } from "react-icons/go";
import { MdOutlineHub } from "react-icons/md";
import { PiWaveformBold } from "react-icons/pi";
import { IconType } from "react-icons";

const servizi: {
  icon: IconType;
  title: string;
  desc: string;
  tag: string;
  highlight?: boolean;
}[] = [
  {
    icon: TbBrain,
    title: "Intelligenza Artificiale",
    desc: "Sviluppo di algoritmi avanzati per portare vantaggio competitivo e ridurre le attività low value, concentrando le risorse sulle attività high value.",
    tag: "AI",
  },
  {
    icon: LuCode,
    title: "Sviluppo Software",
    desc: "Software per alta tecnologia in robotica e meccatronica usando Python, C++, JavaScript e Rust, con focus su innovazione e performance.",
    tag: "SOFTWARE",
  },
  {
    icon: GoShieldLock,
    title: "Cybersecurity & Penetration Test",
    desc: "Penetration test per identificare vulnerabilità nei sistemi informatici, seguendo un approccio security by design.",
    tag: "SECURITY",
  },
  {
    icon: MdOutlineHub,
    title: "Crittografia Quantistica",
    desc: "Quantum Key Distribution (QKD): distribuzione di chiavi crittografiche impossibili da intercettare senza essere scoperti. Non si basa sulla complessità matematica, ma sulla natura stessa della realtà.",
    tag: "QUANTUM",
  },
];

export default function ServiziSection() {
  return (
    <section id="servizi" className="relative py-28 bg-[#010812] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,_#0a2a6e12_0%,_transparent_70%)]" />
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm tracking-[0.3em] mb-3"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            COSA OFFRIAMO
          </p>
          <h2 className="font-mokoto text-4xl md:text-5xl font-black text-white tracking-widest"
            >
            PRODOTTI & SERVIZI
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8" />
        </div>

        {/* Top 3 standard */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {servizi.slice(0, 4).map((s, i) => (
            <ServiceCard key={i} s={s} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ s, large = false }: { s: typeof servizi[number]; large?: boolean }) {
  return (
    <div
      className={`group relative border rounded-xl p-8 backdrop-blur-sm transition-all duration-500 overflow-hidden
        ${s.highlight
          ? "border-blue-500/50 bg-blue-950/30 hover:border-blue-400"
          : "border-blue-900/40 bg-blue-950/10 hover:border-blue-600/50"
        }
        ${large ? "p-10" : ""}
      `}
    >
      {/* Tag */}
      <div className="absolute top-4 right-4">
        <span className="text-xs tracking-widest text-blue-400/60 border border-blue-800/50 rounded px-2 py-1"
          style={{ fontFamily: "'Orbitron', monospace" }}>
          {s.tag}
        </span>
      </div>

      {/* Corner accents for highlighted */}
      {s.highlight && (
        <>
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-400/60 rounded-tl-xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-400/60 rounded-br-xl" />
        </>
      )}

      <div className={`mb-5 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300 w-fit ${large ? "" : ""}`}>
        <s.icon size={large ? 48 : 36} />
      </div>
      <h3 className={`font-bold text-white mb-3 ${large ? "text-2xl" : "text-lg"}`}>{s.title}</h3>
      <p className="text-blue-200/65 leading-relaxed text-sm">{s.desc}</p>

      {/* Bottom glow line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-700" />
    </div>
  );
}