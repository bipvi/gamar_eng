export default function Servizi() {
  const servizi = ["Prototipazione Rapida", "Automazione PLC", "Analisi Strutturale", "Manutenzione 4.0"];

  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-12 font-mono text-brand-blue">
        <span className="opacity-50">//</span> I NOSTRI SERVIZI
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {servizi.map((s, i) => (
          <div key={i} className="border border-white/10 p-8 bg-brand-card hover:border-brand-blue/50 transition-all">
            <h3 className="font-bold mb-2 uppercase text-sm">{s}</h3>
            <div className="h-[2px] w-8 bg-brand-blue mb-4"></div>
            <p className="text-xs text-gray-500 italic">Eccellenza tecnica garantita.</p>
          </div>
        ))}
      </div>
    </div>
  )
}