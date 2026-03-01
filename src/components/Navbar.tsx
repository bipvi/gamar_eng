// src/components/Navbar.tsx
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-brand-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {/* Sostituisci con il tuo SVG del logo */}
          <Link href="/" className="font-bold text-xl tracking-tighter uppercase">
            Gamar <span className="text-brand-blue font-light italic">Engineering</span>
          </Link>
        </div>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-gray-400">
          <Link href="/chi-siamo" className="hover:text-brand-blue transition-colors">Chi Siamo</Link>
          <Link href="/servizi" className="hover:text-brand-blue transition-colors">Servizi</Link>
          <Link href="/progetti" className="hover:text-brand-blue transition-colors">Progetti</Link>
          <Link href="/contatti" className="hover:text-brand-blue transition-colors">Contatti</Link>
        </div>

        <button className="border border-brand-blue px-6 py-2 text-xs uppercase tracking-widest hover:bg-brand-blue/10 transition-all">
          Area Riservata
        </button>
      </div>
    </nav>
  )
}

export default Navbar;