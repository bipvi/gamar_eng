"use client";
import Link from "next/link";
import CircuitBackground from "./CircuitBackground";

export default function TeamCTASection() {
  return (
    <>
      {/* TEAM */}
      <section className="relative py-28 bg-[#010812] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_#0a2a6e12_0%,_transparent_70%)]" />
        <CircuitBackground />

        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-400 text-sm tracking-[0.3em] mb-3"
              style={{ fontFamily: "'Orbitron', monospace" }}>LE PERSONE</p>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-widest"
              style={{ fontFamily: "'Orbitron', monospace" }}>
              IL TEAM
            </h2>
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mt-8" />
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="border border-blue-800/40 rounded-xl p-8 bg-blue-950/20 hover:border-blue-500/40 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl font-black text-blue-400"
                    style={{ fontFamily: "'Orbitron', monospace" }}>12</div>
                  <div>
                    <h3 className="text-white font-bold text-lg">Figure Selezionate</h3>
                    <p className="text-blue-300/60 text-sm">Senior specialist e junior engineering</p>
                  </div>
                </div>
                <p className="text-blue-200/65 leading-relaxed text-sm">
                  Competenze integrate in AI, cybersecurity e sviluppo software, selezionate per affrontare le sfide tecnologiche più avanzate.
                </p>
              </div>

              <div className="border border-blue-800/40 rounded-xl p-8 bg-blue-950/20 hover:border-blue-500/40 transition-all">
                <h3 className="text-white font-bold text-lg mb-3">Un Mix Vincente</h3>
                <p className="text-blue-200/65 leading-relaxed text-sm">
                  Esperienza e energia giovane coordinati da una direzione con anni di esperienza nel settore commerciale verso le più importanti aziende italiane dell'Industria e dell'alta tecnologia.
                </p>
              </div>
            </div>

            {/* Visual decoration */}
            <div className="relative h-64 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 rounded-full border border-blue-500/20 animate-pulse" />
                <div className="absolute w-32 h-32 rounded-full border border-blue-400/30" style={{ animationDelay: "0.5s" }} />
                <div className="absolute w-16 h-16 rounded-full bg-blue-500/10 border border-blue-400/50" />
              </div>
              <div className="relative z-10 text-center">
                <div className="text-6xl font-black text-blue-400/80"
                  style={{ fontFamily: "'Orbitron', monospace" }}>12</div>
                <div className="text-blue-200/60 text-sm mt-2 tracking-widest">ESPERTI</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="relative py-28 bg-[#010812] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,_#0a2a6e12_0%,_transparent_70%)]" />
        <CircuitBackground />

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <p className="text-blue-400 text-sm tracking-[0.4em] mb-6"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            AMBITION
          </p>
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight">
            Siamo pronti a<br />
            costruirlo…<span className="text-blue-400">Insieme</span>
          </h2>
          <div className="w-48 h-px mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-8" />
          <p className="text-blue-200/70 text-lg leading-relaxed mb-12 max-w-2xl mx-auto">
            Gamar Engineering: una nuova realtà con radici solide nel settore della Difesa e dello sviluppo tecnologico. Vogliamo essere il partner agile, affidabile e visionario per le aziende che vogliono anticipare il futuro.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contatti"
              className="px-10 py-4 border border-blue-500/50 text-blue-300 hover:border-blue-400 hover:text-white font-bold rounded-lg transition-all duration-300 tracking-wider text-sm hover:bg-blue-900/30"
              style={{ fontFamily: "'Orbitron', monospace" }}
            >
              CONTATTACI
            </Link>
          </div>

          <p className="mt-12 text-blue-400/40 text-sm tracking-widest"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            www.gamarengineering.com
          </p>
        </div>
      </section>
    </>
  );
}