import { Container } from '@/components/Container'
import Image from 'next/image'

import avatarLookingDown from '@/images/avatars/avatar-looking-down.svg'

interface Feature {
  name: string
  value: number
}

const features: Array<Feature> = [
  {
    name: 'Aktive \nNutzer:innen',
    value: 18,
  },
  {
    name: 'Absolvierte \nInvestmentspiele',
    value: 102,
  },
  {
    name: 'Erlebte \nBörsenjahre',
    value: 1.351,
  },
]

export function DataNumbers() {
  return (
    <>
      <div className="flex w-full justify-center">
        <Image
          className="relative -bottom-[28px] h-36 md:-bottom-[35px] md:h-44 lg:-bottom-[40px] lg:h-auto"
          src={avatarLookingDown}
          alt=""
          priority
        />
      </div>

      <section
        id="secondary-features"
        className="bg-rlb-gray-light pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
      >
        <Container>
          <div className="grid grid-rows-3 px-4 lg:grid-cols-3 lg:grid-rows-none">
            {features.map((feature, index) => (
              <div
                key={index + feature.name}
                className="flex flex-col items-center gap-2 py-8"
              >
                <span className="text-[88px] font-semibold">
                  {feature.value}
                </span>
                <span className="whitespace-pre-line text-center text-[26px] font-semibold leading-[36px]">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}
