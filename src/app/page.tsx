// src/app/page.tsx
import FeatureCard from '@/components/FeatureCard'

export default function Home() {
  return (
    <div className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Effect: Griglia e Glow centrale */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-blue/20 rounded-full blur-[120px] pointer-events-none" />

      <section className="relative z-10 flex flex-col items-center justify-center pt-32 pb-20 px-6">
        {/* Main Logo / Hero Content */}
        <div className="text-center mb-32">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-4 opacity-90">
            GAMAR
          </h1>
          <p className="text-brand-blue font-mono tracking-[0.3em] text-sm md:text-lg uppercase">
            Precision Engineering Solutions
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl w-full mt-20">
          <FeatureCard 
            title="Automazione" 
            description="Sistemi integrati ad alta precisione per l'industria moderna." 
          />
          <FeatureCard 
            title="Ricerca" 
            description="Sviluppo prototipi avanzati per l'Industria 4.0." 
          />
          <FeatureCard 
            title="Supporto" 
            description="Consulenza tecnica specializzata e manutenzione predittiva." 
          />
        </div>
      </section>
    </div>
  )
}