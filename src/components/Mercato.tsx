"use client";
import CircuitBackground from "./CircuitBackground";
import { TbChartArrowsVertical } from "react-icons/tb";
import { LuTarget } from "react-icons/lu";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { IconType } from "react-icons";

const partners = ["ENEA", "CNR", "Università Federico II", "Univ. Bologna"];

const clienti = [
  "Leonardo Company", "Iveco Defence", "Fincantieri", "Thales", "Thales Alenia Space",
  "WASS", "Elettronica spa", "Navarm", "MMI", "Saipem", "ENI", "L3 Communication",
  "Agusta Westland", "CIRA", "Ferrari", "Ducati Corse", "Brembo",
];

export default function MercatoSection() {
  return (
    <section className="relative py-28 bg-[#010812] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_60%,_#0a2a6e12_0%,_transparent_70%)]" />
      <CircuitBackground />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* TARGET DI MERCATO */}
        <div className="">
          <div className="text-center mb-14">
            <p className="text-blue-400 text-sm tracking-[0.3em] mb-3"
              style={{ fontFamily: "'Orbitron', monospace" }}>DOVE OPERIAMO</p>
            <h2 className="font-mokoto text-4xl md:text-5xl font-black text-white tracking-widest"
              >
              TARGET DI MERCATO
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {(
              [
                {
                  Icon: TbChartArrowsVertical,
                  title: "Settore in Evoluzione",
                  desc: "La Difesa e la Sicurezza cibernetica stanno vivendo una espansione globale. L'Europa investe in A.I. Militare, Quantum Communication e Cyber Defense.",
                },
                {
                  Icon: LuTarget,
                  title: "Target di Mercato",
                  desc: "Industrie della Difesa e settori industriali altamente tecnologici e strategici, Centri di Ricerca, Enti Governativi.",
                },
                {
                  Icon: MdOutlineRocketLaunch,
                  title: "Vantaggio Competitivo",
                  desc: "Agilità di una struttura privata, network consolidato e competenze integrate in A.I., software e Hardware.",
                },
              ] as { Icon: IconType; title: string; desc: string }[]
            ).map((item, i) => (
              <div key={i} className="group border border-blue-900/40 rounded-xl p-8 bg-blue-950/10 hover:border-blue-500/40 transition-all duration-400">
                <div className="mb-5 text-blue-400 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300 w-fit">
                  <item.Icon size={36} />
                </div>
                <h3 className="text-blue-300 font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-blue-200/60 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}