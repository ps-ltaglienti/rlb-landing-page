'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import zeitreiseMobile from '../images/screenshots/zeitreise-mobile.svg'
import feedbackMobile from '../images/screenshots/feedback-mobile.svg'
import spielMobile from '../images/screenshots/spiel-mobile.svg'

const features = [
  {
    title: 'Zeitreise',
    description:
      'Du reist in die Vergangenheit ohne den genauen Zeitpunkt zu wissen.',
    image: zeitreiseMobile,
  },
  {
    title: 'Das Spiel',
    description:
      'Du erlebst Spiel für Spiel neue und reale Anlagesituationen und triffst Entscheidungen.',
    image: spielMobile,
  },
  {
    title: 'Feedback und Spielanalyse',
    description:
      'Du erhältst Feedback zu deinem Spiel und eine Analyse deiner Ergebnisse.',
    image: feedbackMobile,
  },
]

export function PrimaryFeatures() {
  let [tabOrientation, setTabOrientation] = useState<'horizontal' | 'vertical'>(
    'horizontal',
  )

  useEffect(() => {
    let lgMediaQuery = window.matchMedia('(min-width: 1024px)')

    function onMediaQueryChange({ matches }: { matches: boolean }) {
      setTabOrientation(matches ? 'vertical' : 'horizontal')
    }

    onMediaQueryChange(lgMediaQuery)
    lgMediaQuery.addEventListener('change', onMediaQueryChange)

    return () => {
      lgMediaQuery.removeEventListener('change', onMediaQueryChange)
    }
  }, [])

  return (
    <section
      id="features"
      aria-label="Features for running your books"
      className="relative overflow-hidden bg-rlb-yellow pb-28 pt-20 sm:py-32"
    >
      <Container className="relative">
        <Tab.Group
          as="div"
          className="mt-16 grid grid-cols-1 items-center gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:px-20 lg:pt-0"
          vertical={tabOrientation === 'vertical'}
        >
          {({ selectedIndex }) => (
            <>
              <div className="-mx-4 flex overflow-x-auto pb-4 sm:mx-0 sm:overflow-visible sm:pb-0 lg:col-span-7">
                <Tab.List className="relative z-10 flex w-full gap-x-4 whitespace-nowrap px-4 sm:mx-auto sm:px-0 lg:mx-0 lg:block lg:gap-x-0 lg:gap-y-1 lg:whitespace-normal">
                  {features.map((feature, featureIndex) => (
                    <div
                      key={feature.title}
                      className={clsx(
                        'group relative rounded-full px-4 py-1 lg:rounded-l-xl lg:rounded-r-none lg:p-10',
                        selectedIndex === featureIndex
                          ? 'bg-white lg:bg-white'
                          : 'hover:bg-white/30 lg:hover:bg-white/20',
                      )}
                    >
                      <h3>
                        <Tab className="font-display text-lg ui-not-focus-visible:outline-none">
                          <span className="absolute inset-0 rounded-full lg:rounded-l-xl lg:rounded-r-none" />
                          {feature.title}
                        </Tab>
                      </h3>
                      <p className="mt-2 hidden text-sm lg:block">
                        {feature.description}
                      </p>
                    </div>
                  ))}
                </Tab.List>
              </div>
              <Tab.Panels className="lg:col-span-5">
                {features.map((feature) => (
                  <Tab.Panel key={feature.title} unmount={false}>
                    <div className="relative sm:px-6 lg:hidden">
                      <p className="relative mx-auto max-w-2xl text-base sm:text-center">
                        {feature.description}
                      </p>
                    </div>
                    <div className="mt-10 flex w-full justify-center overflow-hidden sm:w-auto lg:mt-0 lg:w-[67.8125rem] lg:justify-start">
                      <Image
                        className="h-full"
                        src={feature.image}
                        alt=""
                        priority
                        sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
                      />
                    </div>
                  </Tab.Panel>
                ))}
              </Tab.Panels>
            </>
          )}
        </Tab.Group>
      </Container>
    </section>
  )
}
