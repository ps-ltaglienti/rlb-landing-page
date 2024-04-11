import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoLaravel from '@/images/logos/laravel.svg'
import logoMirage from '@/images/logos/mirage.svg'
import logoStatamic from '@/images/logos/statamic.svg'
import logoStaticKit from '@/images/logos/statickit.svg'
import logoTransistor from '@/images/logos/transistor.svg'
import logoTuple from '@/images/logos/tuple.svg'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight sm:text-7xl">
        Mit fit2invest spielend einfach Börsenerfahrung sammeln
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight">
        Tauche kostenlos und risikofrei in die Welt der Börse ein. In nur 5
        Minuten pro Spieldurchgang sammelst du die Anlageerfahrung mehrerer
        Jahre an der Börse.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register" color="yellow">
          Jetzt spielen
        </Button>
      </div>
    </Container>
  )
}
