import Image from 'next/image'

import { Container } from '@/components/Container'
import reiffeisenLogo from '@/images/icons/reiffeisen-logo.svg'
import uniGrazLogo from '@/images/icons/uni-graz-logo.svg'

export function Presentation() {
  return (
    <section id="das-spiel" aria-label="Presentation">
      <Container className="py-20 text-center lg:py-32">
        <h2 className="mx-auto max-w-4xl">
          Reale Marktszenarien mit wissenschaftlich fundierten Daten
        </h2>
        <p className="mx-auto mt-6 max-w-4xl text-lg tracking-tight">
          fit2invest wurde von der Raiffeisen-Landesbank Steiermark AG in
          Zusammenarbeit mit der <b>Universität Graz</b> entwickelt. Du sammelst
          Börsenerfahrung basierend auf <b>wissenschaftlich fundierten Daten</b>{' '}
          und erlebst reale Marktszenarien in nur ca. <b>5 Minuten pro Spiel</b>{' '}
          – und das ganz ohne dein Geld aufs Spiel zu setzen. Ein einzigartiges,
          spielerisches Konzept führt dich sicher und schrittweise in die{' '}
          <b>Prinzipien des Investierens</b> ein. So machst du dich fit für den
          Börsenmarkt und triffst <b>sichere Entscheidungen</b>, wenn es darauf
          ankommt.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-6 lg:flex-row">
          <div className="flex flex-row items-center justify-center gap-6">
            <Image
              className="h-11"
              src={reiffeisenLogo}
              alt="reiffeisen-logo"
              priority
            />
            <Image
              className="h-11"
              src={uniGrazLogo}
              alt="uni-graz-logo"
              priority
            />
          </div>

          <span className="text-sm">
            Powered by Raiffeisen-Landesbank AG | In Kooperation mit der
            Universität Graz
          </span>
        </div>
      </Container>
    </section>
  )
}
