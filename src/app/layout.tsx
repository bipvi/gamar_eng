// src/app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'
import { Roboto_Mono, Roboto } from 'next/font/google'
import type { Metadata } from 'next'
import Footer from '@/components/Footer';

// Configurazione Roboto (Sans-serif)
const roboto = Roboto({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto", 
});

// Configurazione Roboto Mono (Per i richiami tecnici // )
const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Gamar Engineering | Precision Solutions",
  description: "Sistemi integrati ad alta precisione e Industria 4.0",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${roboto.variable} ${robotoMono.variable}`}>
      <body className="bg-brand-dark text-white antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}