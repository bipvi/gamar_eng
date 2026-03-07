// src/app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'
import localFont from "next/font/local";
import type { Metadata } from 'next'
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Gamar Engineering",
  description: "Tecnologia · Visione · Sicurezza",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="it">
      <body className="bg-brand-dark text-white antialiased font-glacial">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}