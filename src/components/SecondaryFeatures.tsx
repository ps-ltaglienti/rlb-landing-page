import Image, { type ImageProps } from 'next/image'
import { Container } from '@/components/Container'

import dataIcon from '@/images/icons/data-icon.svg'
import bulbIcon from '@/images/icons/bulb-icon.svg'
import messageIcon from '@/images/icons/message-icon.svg'

interface Feature {
  name: React.ReactNode
  description: string
  icon: ImageProps['src']
}

const features: Array<Feature> = [
  {
    name: 'Realistische Daten',
    description: 'Erlebe immer wieder aufs Neue, echte Anlagesituationen',
    icon: dataIcon,
  },
  {
    name: 'Besseres Marktverständnis',
    description: 'Werde sicherer in deinen Anlageentscheidungen',
    icon: bulbIcon,
  },
  {
    name: 'Professionelles Feedback',
    description: 'Verfolge kontinuierlich wie du dich verbesserst',
    icon: messageIcon,
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      className="pb-14 pt-20 sm:pb-20 sm:pt-32 lg:pb-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2>Ausprobieren zahlt sich aus</h2>
        </div>
        <div className="divide-rlb-black-default mt-20 grid grid-rows-3 divide-y-2 px-4 lg:grid-cols-3 lg:grid-rows-none lg:divide-x-2 lg:divide-y-0">
          {features.map((feature) => (
            <div
              key={feature.description}
              className="flex flex-col items-center gap-2 py-8 pr-4 lg:items-start lg:pb-20 lg:pt-0 lg:[&:not(:first-child)]:pl-8"
            >
              <Image className="h-16 w-16 pb-2" src={feature.icon} alt="" />
              <h3>{feature.name}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
