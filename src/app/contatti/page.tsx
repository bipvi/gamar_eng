"use client";
import { useState } from "react";
import CircuitBackground from "@/components/CircuitBackground";
import { HiOutlineMail } from "react-icons/hi";
import { LuUser, LuBuilding2, LuSend } from "react-icons/lu";
import { TbMessageDots } from "react-icons/tb";

type Status = "idle" | "loading" | "success" | "error";

export default function Contatti() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = {
      nomeAzienda: (form.elements.namedItem("nomeAzienda") as HTMLInputElement).value,
      nome:        (form.elements.namedItem("nome")        as HTMLInputElement).value,
      email:       (form.elements.namedItem("email")       as HTMLInputElement).value,
      messaggio:   (form.elements.namedItem("messaggio")   as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contatti", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="relative min-h-screen bg-[#010812] overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,_#0a2a6e15_0%,_transparent_70%)]" />
      <CircuitBackground />

      {/* Top accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="relative z-10 w-full max-w-2xl mx-auto px-6 pt-32 pb-20">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-blue-400 text-xs tracking-[0.4em] mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            INIZIAMO A COLLABORARE
          </p>
          <h1 className="font-mokoto text-4xl md:text-5xl font-black text-white tracking-widest mb-4"
            style={{ fontFamily: "'Orbitron', monospace" }}>
            CONNETTIAMOCI
          </h1>
          <div className="w-32 h-px mx-auto bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6" />
          <p className="text-blue-200/50 text-sm leading-relaxed">
            Compila il form per una consulenza tecnica gratuita.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">

          {/* Row 1 — Nome azienda */}
          <div className="relative group">
            <LuBuilding2 className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500/40 w-4 h-4 group-focus-within:text-blue-400 transition-colors" />
            <input
              name="nomeAzienda"
              type="text"
              placeholder="NOME AZIENDA"
              required
              className="w-full bg-blue-950/10 border border-blue-900/40 pl-11 pr-4 py-4 text-white placeholder:text-blue-400/30 text-xs tracking-widest uppercase outline-none focus:border-blue-500/60 focus:bg-blue-950/20 transition-all duration-300 rounded-lg"
              style={{ fontFamily: "'Orbitron', monospace" }}
            />
            <div className="absolute bottom-0 left-0 h-px w-0 group-focus-within:w-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 rounded-b-lg" />
          </div>

          {/* Row 2 — Nome referente */}
          <div className="relative group">
            <LuUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500/40 w-4 h-4 group-focus-within:text-blue-400 transition-colors" />
            <input
              name="nome"
              type="text"
              placeholder="NOME REFERENTE"
              required
              className="w-full bg-blue-950/10 border border-blue-900/40 pl-11 pr-4 py-4 text-white placeholder:text-blue-400/30 text-xs tracking-widest uppercase outline-none focus:border-blue-500/60 focus:bg-blue-950/20 transition-all duration-300 rounded-lg"
              style={{ fontFamily: "'Orbitron', monospace" }}
            />
            <div className="absolute bottom-0 left-0 h-px w-0 group-focus-within:w-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 rounded-b-lg" />
          </div>

          {/* Row 3 — Email */}
          <div className="relative group">
            <HiOutlineMail className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-500/40 w-4 h-4 group-focus-within:text-blue-400 transition-colors" />
            <input
              name="email"
              type="email"
              placeholder="EMAIL DI CONTATTO"
              required
              className="w-full bg-blue-950/10 border border-blue-900/40 pl-11 pr-4 py-4 text-white placeholder:text-blue-400/30 text-xs tracking-widest uppercase outline-none focus:border-blue-500/60 focus:bg-blue-950/20 transition-all duration-300 rounded-lg"
              style={{ fontFamily: "'Orbitron', monospace" }}
            />
            <div className="absolute bottom-0 left-0 h-px w-0 group-focus-within:w-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 rounded-b-lg" />
          </div>

          {/* Row 4 — Messaggio */}
          <div className="relative group">
            <TbMessageDots className="absolute left-4 top-4 text-blue-500/40 w-4 h-4 group-focus-within:text-blue-400 transition-colors" />
            <textarea
              name="messaggio"
              placeholder="MESSAGGIO"
              rows={5}
              required
              className="w-full bg-blue-950/10 border border-blue-900/40 pl-11 pr-4 py-4 text-white placeholder:text-blue-400/30 text-xs tracking-widest uppercase outline-none focus:border-blue-500/60 focus:bg-blue-950/20 transition-all duration-300 rounded-lg resize-none"
              style={{ fontFamily: "'Orbitron', monospace" }}
            />
            <div className="absolute bottom-0 left-0 h-px w-0 group-focus-within:w-full bg-gradient-to-r from-blue-500 to-cyan-400 transition-all duration-500 rounded-b-lg" />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "loading"}
            className="group w-full relative border border-blue-500/50 bg-blue-950/20 hover:bg-blue-600 text-blue-300 hover:text-white font-bold py-4 uppercase tracking-[0.3em] text-xs transition-all duration-400 rounded-lg overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: "'Orbitron', monospace" }}
          >
            <span className="relative z-10 flex items-center justify-center gap-3">
              {status === "loading" ? (
                <>
                  <div className="w-4 h-4 border border-blue-300/50 border-t-blue-300 rounded-full animate-spin" />
                  INVIO IN CORSO...
                </>
              ) : (
                <>
                  <LuSend className="w-4 h-4" />
                  INVIA RICHIESTA
                </>
              )}
            </span>
            {/* Slide-in glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          </button>
        </form>

        {/* Feedback messages */}
        {status === "success" && (
          <div className="mt-6 border border-blue-500/40 rounded-lg p-4 bg-blue-950/20 text-center">
            <p className="text-blue-300 text-xs tracking-widest" style={{ fontFamily: "'Orbitron', monospace" }}>
              ✓ MESSAGGIO INVIATO — TI RISPONDEREMO AL PIÙ PRESTO
            </p>
          </div>
        )}
        {status === "error" && (
          <div className="mt-6 border border-red-500/40 rounded-lg p-4 bg-red-950/20 text-center">
            <p className="text-red-400 text-xs tracking-widest" style={{ fontFamily: "'Orbitron', monospace" }}>
              ✗ ERRORE DI INVIO — RIPROVA O SCRIVICI A info@gamarengineering.com
            </p>
          </div>
        )}
      </div>
    </section>
  );
}