import { CallToAction } from '@/components/CallToAction'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
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
        <PrimaryFeatures />
        <Preview />
        <SecondaryFeatures />
        <Questions />
        <CallToAction />
        <Footer />
      </main>
      <Footer />
    </>
  )
}
