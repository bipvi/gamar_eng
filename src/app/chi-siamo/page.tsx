import Image from "next/image";

export default function ChiSiamo() {
  return (
    <div className="min-h-screen pt-32 px-6 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 font-mono text-brand-blue">
        <span className="opacity-50">//</span> CHI SIAMO
      </h1>
      <div className="grid md:grid-cols-2 gap-12">
        <p className="text-gray-400 leading-relaxed">
          Gamar Engineering nasce dalla passione per la precisione meccanica e l'innovazione digitale. 
          Siamo leader nello sviluppo di soluzioni integrate per l'Industria 4.0.
        </p>
        <div className="border border-white/10 bg-white/5 h-64 flex items-center justify-center">
          <Image src="/image.png" width={500} height={500} alt="Immagine del team" />
        </div>
      </div>
    </div>
  )
}