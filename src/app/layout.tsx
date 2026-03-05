// src/app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'
import localFont from "next/font/local";
import type { Metadata } from 'next'
import Footer from '@/components/Footer';

const mokoto = localFont({
  src: [
    {
      path: "../../public/fonts/Mokoto.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-mokoto",
  display: "swap",
});

// Glacial Indifference — font base per tutto il resto
const glacial = localFont({
  src: [
    {
      path: "../../public/fonts/GlacialIndifference-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-glacial",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Gamar Engineering",
  description: "Tecnologia · Visione · Sicurezza",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it" className={`${mokoto.variable} ${glacial.variable}`}>
      <body className="bg-brand-dark text-white antialiased font-glacial">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}