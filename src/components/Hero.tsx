import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

export function Hero() {
  return (
    <Container className="pb-16 pt-20 text-center lg:pt-32">
      <h1 className="mx-auto max-w-4xl">
        Lerne spielend einfach dein Geld zu investieren – mit fit2invest
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg tracking-tight">
        Tauche <b>kostenlos</b> und <b>risikofrei</b> in die Welt der Börse ein.
        In nur 5 Minuten pro Spieldurchgang, erlebst du mehrere Jahre an der
        Börse.
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Button href="/register">Jetzt spielen</Button>
      </div>
    </Container>
  )
}
