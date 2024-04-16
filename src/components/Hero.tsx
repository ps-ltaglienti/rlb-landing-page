import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl">
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
