"use client";
import CircuitBackground from "@/components/CircuitBackground";
import TeamCTASection from "@/components/Team";
import { MdOutlineFactory } from "react-icons/md";
import { LuRocket } from "react-icons/lu";
import { TbRobot } from "react-icons/tb";
import { IconType } from "react-icons";

const sectors: { icon: IconType; label: string }[] = [
  { icon: MdOutlineFactory, label: "Settori di Difesa" },
  { icon: LuRocket,         label: "Aereospazio" },
  { icon: TbRobot,          label: "Industria ad Alta Tecnologia" },
];

export default function ChiSiamoSection() {
  return (
    <section id="chi-siamo" className="relative py-28 bg-[#010812] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,_#0a2a6e15_0%,_transparent_70%)]" />
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Big title */}
        <div className="text-center mb-20">
          <h2
            className="font-mokoto text-4xl md:text-6xl font-black tracking-widest text-white mb-4"
            
          >
            TECNOLOGIA · VISIONE · SICUREZZA
          </h2>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-6" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left - text */}
          <div>
            <p className="text-blue-100 text-lg leading-relaxed mb-8">
              Siamo una <span className="text-blue-400 font-semibold">nuova realtà italiana</span> specializzata nello sviluppo di soluzioni integrate in A.I., cybersecurity avanzata e tecnologie quantistiche.
            </p>
            <p className="text-blue-200/70 leading-relaxed mb-10">
              Nata dall'esperienza commerciale e tecnica maturata in oltre{" "}
              <span className="text-white font-bold">25 anni</span> con i principali attori nazionali, offriamo integrazione rapida, indipendenza tecnologica e competenze multidisciplinari per progetti ad alto contenuto innovativo.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { val: "25+", label: "Anni di\nesperienza" },
                { val: "12",  label: "Figure\nselezionate" },
                { val: "3",   label: "Settori\nstrategici" },
              ].map((s, i) => (
                <div key={i} className="border border-blue-800/50 rounded-lg p-4 text-center bg-blue-950/20">
                  <div className="text-3xl font-black text-blue-400 mb-1"
                    style={{ fontFamily: "'Orbitron', monospace" }}>{s.val}</div>
                  <div className="text-blue-200/60 text-xs whitespace-pre-line leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - sectors */}
          <div className="space-y-4">
            {sectors.map((s, i) => (
              <div
                key={i}
                className="group flex items-center gap-6 border border-blue-900/40 rounded-lg p-6 bg-blue-950/10 hover:border-blue-400/60 hover:bg-blue-900/20 transition-all duration-400 cursor-default"
              >
                <div className="flex-shrink-0 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300">
                  <s.icon size={36} />
                </div>
                <span className="text-white font-semibold text-lg group-hover:text-blue-300 transition-colors">
                  {s.label}
                </span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}