import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Ispirati ai toni scuri e freddi dell'immagine
        brand: {
          dark: "#0a0f16",     // Sfondo principale quasi nero
          card: "#111827",     // Sfondo delle card (leggermente più chiaro)
          blue: "#0ea5e9",     // Il blu elettrico dei dettagli
          accent: "#3b82f6",   // Blu per gli stati hover
          muted: "#64748b",    // Grigio per i testi secondari
        },
      },
      backgroundImage: {
        // La griglia tecnica che si vede nel mockup
        'tech-grid': "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        // Il gradiente radiale per l'effetto luce centrale
        'hero-glow': "radial-gradient(circle at center, rgba(14, 165, 233, 0.15) 0%, transparent 70%)",
      },
      fontFamily: {
        // Font "Mono" per un feeling da ingegneria
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        // Effetto neon per i bordi delle card
        'neon-blue': '0 0 15px rgba(14, 165, 233, 0.2)',
      }
    },
  },
  plugins: [],
};

export default config;