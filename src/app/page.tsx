import { CallToAction } from '@/components/CallToAction'
import { Comments } from '@/components/Comments'
import { DataNumbers } from '@/components/DataNumbers'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { HeroImage } from '@/components/HeroImage'
import { Presentation } from '@/components/Presentation'
import { Preview } from '@/components/Preview'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Questions } from '@/components/Questions'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HeroImage />
        <Presentation />
        <PrimaryFeatures />
        <Preview />
        <SecondaryFeatures />
        <Comments />
        <DataNumbers />
        <Questions />
        <CallToAction />
      </main>
      <Footer />
    </>
  )
}
