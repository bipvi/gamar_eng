"use client";
import CircuitBackground from "./CircuitBackground";
import { MdOutlineBalance } from "react-icons/md";
import { HiOutlineLightBulb } from "react-icons/hi";
import { GoShieldLock } from "react-icons/go";
import { PiLeafLight } from "react-icons/pi";
import { IconType } from "react-icons";

const valori: { icon: IconType; title: string; desc: string; color: string }[] = [
  {
    icon: MdOutlineBalance,
    title: "Integrità",
    desc: "Fiducia, trasparenza e responsabilità guidano ogni progetto.",
    color: "from-blue-500/20 to-transparent",
  },
  {
    icon: HiOutlineLightBulb,
    title: "Competenza",
    desc: "Innovazione solida, basata su eccellenza tecnica e valorizzazione delle persone.",
    color: "from-cyan-500/20 to-transparent",
  },
  {
    icon: GoShieldLock,
    title: "Riservatezza",
    desc: "Protezione rigorosa delle informazioni, elemento essenziale del nostro settore.",
    color: "from-blue-400/20 to-transparent",
  },
  {
    icon: PiLeafLight,
    title: "Innovazione Sostenibile",
    desc: "Tecnologie progettate per durare, creare valore e generare impatto reale.",
    color: "from-teal-500/20 to-transparent",
  },
];

export default function ValoriSection() {
  return (
    <section className="relative py-28 bg-[#010812] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,_#0a2a6e10_0%,_transparent_70%)]" />
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-blue-400 text-sm tracking-[0.3em] mb-3"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            I NOSTRI
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            VALORI FONDAMENTALI
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {valori.map((v, i) => (
            <div
              key={i}
              className={`group relative border border-blue-900/40 rounded-xl p-8 bg-gradient-to-br ${v.color} hover:border-blue-400/50 transition-all duration-500 overflow-hidden`}
            >
              {/* Circuit corner decoration */}
              <div className="absolute top-0 right-0 w-12 h-12 opacity-20">
                <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polyline points="40,0 20,0 0,20" stroke="#3b82f6" strokeWidth="1"/>
                  <circle cx="20" cy="0" r="2" fill="#3b82f6"/>
                  <circle cx="0" cy="20" r="2" fill="#3b82f6"/>
                </svg>
              </div>

              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 mt-1 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">
                  <v.icon size={36} />
                </div>
                <div>
                  <h3 className="text-blue-300 font-bold text-xl mb-3">{v.title}</h3>
                  <p className="text-blue-100/70 leading-relaxed">{v.desc}</p>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{ boxShadow: "inset 0 0 30px rgba(59,130,246,0.05)" }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}