// src/app/page.tsx
import ContestoSection from '@/components/Contesto'
import FeatureCard from '@/components/FeatureCard'
import HeroSection from '@/components/Hero'
import MercatoSection from '@/components/Mercato'
import TeamCTASection from '@/components/Team'
import ValoriSection from '@/components/Valori'
import VisionMissionSection from '@/components/Visionmission'
import ChiSiamoSection from './chi-siamo/page'
import ServiziSection from './servizi/page'

export default function Home() {
  return (

    <div>
      <HeroSection />
      <ChiSiamoSection />
      <ServiziSection />
      <VisionMissionSection />
      <ValoriSection />
      <MercatoSection />
      <TeamCTASection />

    </div>
  )
}