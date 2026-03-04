"use client";
import CircuitBackground from "./CircuitBackground";
import { LuRocket } from "react-icons/lu";
import { TbBrain } from "react-icons/tb";

export default function VisionMissionSection() {
  return (
     <section className="relative py-28 bg-[#010812] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_#0a1a5018_0%,_transparent_80%)]" />
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* VISION */}
        <div className="group relative border border-blue-800/40 rounded-2xl p-10 bg-gradient-to-br from-blue-950/30 to-transparent hover:border-blue-500/50 transition-all duration-500">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-2xl" />

          <p className="text-blue-400 text-xs tracking-[0.4em] mb-4 font-medium"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            LA NOSTRA VISION
          </p>
          <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
            Punto di riferimento<br />
            <span className="text-blue-400">per la tecnologia</span><br />
            di frontiera
          </h3>
          <div className="w-16 h-px bg-blue-500 mb-6" />
          <p className="text-blue-200/70 leading-relaxed">
            Diventare un punto di riferimento per lo sviluppo e la qualificazione di tecnologie di frontiera applicate alla Sicurezza, alla Difesa, allo Spazio, oltre ai settori più tecnologici dell'Industria italiana, contribuendo alla crescita dei settori strategici ad alta intensità innovativa.
          </p>

          {/* Icon */}
          <div className="mt-8 text-blue-400 opacity-20 group-hover:opacity-40 transition-opacity">
            <LuRocket size={48} />
          </div>
        </div>

        {/* MISSION */}
        <div className="group relative border border-blue-800/40 rounded-2xl p-10 bg-gradient-to-br from-blue-950/30 to-transparent hover:border-blue-500/50 transition-all duration-500 mt-0 md:mt-12">
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-blue-500 rounded-tl-2xl" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-blue-500 rounded-br-2xl" />

          <p className="text-blue-400 text-xs tracking-[0.4em] mb-4 font-medium"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            LA NOSTRA MISSION
          </p>
          <h3 className="text-3xl font-bold text-white mb-6 leading-tight">
            Generare valore<br />
            <span className="text-blue-400">attraverso</span><br />
            la ricerca avanzata
          </h3>
          <div className="w-16 h-px bg-blue-500 mb-6" />
          <p className="text-blue-200/70 leading-relaxed">
            Generare valore attraverso ricerca avanzata in A.I., crittografia quantistica, robotica e meccatronica intelligente, sviluppando soluzioni proprietarie e collaborando con partner industriali, Enti di ricerca ed Università per accelerare l'innovazione.
          </p>

          {/* Icon */}
          <div className="mt-8 text-blue-400 opacity-20 group-hover:opacity-40 transition-opacity">
            <TbBrain size={48} />
          </div>
        </div>
      </div>
    </section>
  );
}