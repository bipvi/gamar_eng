export default function Contatti() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4 font-mono text-brand-blue uppercase">
        Connettiamoci
      </h1>
      <p className="text-gray-500 mb-12">Compila il form per una consulenza tecnica gratuita.</p>
      
      <form className="space-y-4 text-left">
        <input type="text" placeholder="NOME AZIENDA" className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-blue outline-none transition-all uppercase text-xs" />
        <input type="email" placeholder="EMAIL DI CONTATTO" className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-blue outline-none transition-all uppercase text-xs" />
        <textarea placeholder="MESSAGGIO" rows={5} className="w-full bg-white/5 border border-white/10 p-4 focus:border-brand-blue outline-none transition-all uppercase text-xs"></textarea>
        <button className="w-full bg-brand-blue text-brand-dark font-bold py-4 uppercase tracking-[0.2em] text-xs hover:bg-white transition-all">
          Invia Richiesta
        </button>
      </form>
    </div>
  )
}