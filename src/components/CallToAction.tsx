import Image from 'next/image'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'

import avatarHoldingPhone from '@/images/avatars/avatar-holding-phone.svg'

export function CallToAction() {
  return (
    <section id="call-to-action" className="relative h-0">
      <div className="absolute w-full overflow-hidden">
        <Container className="relative flex flex-col items-center justify-center">
          <Image
            className="relative -bottom-[19px] h-36 md:-bottom-[23px] md:left-14 md:h-44 lg:-bottom-[30px] lg:left-28 lg:h-auto"
            src={avatarHoldingPhone}
            alt=""
            priority
          />
          <div className="bg-rlb-black-default flex max-w-[1060px] flex-col justify-between gap-8 rounded-md px-8 py-6 text-white lg:flex-row lg:px-14 lg:py-12">
            <div className="flex flex-col gap-4">
              <h3>Bereit den Markt zu erobern?</h3>
              <p>
                Mit fit2invest bekommst du ein gutes Gefühl für Chancen und
                Risiken bei Veranlagungen.
              </p>
            </div>
            <Button href="/register" color="yellow">
              Jetzt spielen
            </Button>
          </div>
        </Container>
      </div>
    </section>
  )
}
