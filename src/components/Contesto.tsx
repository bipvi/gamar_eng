"use client";
import CircuitBackground from "./CircuitBackground";
import { FiCpu } from "react-icons/fi";
import { MdOutlineShield } from "react-icons/md";
import { TbBrain } from "react-icons/tb";
import { IconType } from "react-icons";

const items: { icon: IconType; title: string; desc: string }[] = [
  {
    icon: FiCpu,
    title: "Digitalizzazione dei sistemi militari",
    desc: "I sistemi di difesa moderni dipendono sempre più da architetture digitali complesse e interconnesse.",
  },
  {
    icon: MdOutlineShield,
    title: "Crescente esposizione a vulnerabilità informatiche",
    desc: "L'integrazione digitale apre nuovi vettori di attacco che richiedono soluzioni di sicurezza avanzate.",
  },
  {
    icon: TbBrain,
    title: "Integrazione hardware, software e AI",
    desc: "La convergenza di queste discipline crea sfide tecnologiche senza precedenti che richiedono competenze multidisciplinari.",
  },
];

export default function ContestoSection() {
  return (
    <section className="relative py-28 bg-[#010812] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,_#0a2a6e15_0%,_transparent_70%)]" />
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16">
          <p className="text-blue-400 text-sm tracking-[0.3em] mb-3 font-medium"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            IL CONTESTO
          </p>
          <h2 className="font-mokoto text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Il settore della Difesa<br />
            <span className="text-blue-400">sta cambiando</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-transparent mt-6" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="group relative border border-blue-900/50 rounded-lg p-8 bg-blue-950/20 backdrop-blur-sm hover:border-blue-500/50 transition-all duration-500"
              style={{ animationDelay: `${i * 150}ms` }}
            >
              {/* Corner decoration */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-blue-500/50 rounded-tl-lg" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-blue-500/50 rounded-br-lg" />

              {/* Glow on hover */}
              <div className="absolute inset-0 rounded-lg bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="mb-6 text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                <item.icon size={36} />
              </div>
              <h3 className="text-white font-bold text-lg mb-3 leading-snug">{item.title}</h3>
              <p className="text-blue-200/70 text-sm leading-relaxed">{item.desc}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 h-px w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-transparent transition-all duration-700 rounded-bl-lg" />
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-16 border-l-2 border-blue-500 pl-8">
          <p className="text-blue-100 text-xl italic leading-relaxed">
            "L'Europa investe 800 miliardi per la difesa — la trasformazione digitale è già in corso."
          </p>
        </div>
      </div>
    </section>
  );
}