import Image from 'next/image'

import screenPreview from '../images/screenshots/screen-preview.svg'
import avatarFeedback from '../images/avatars/avatar-feedback.svg'

export function Preview() {
  return (
    <section
      id="preview"
      aria-label="Check the interface"
      className="bg-rlb-gray-light py-20 sm:py-32 "
    >
      <div className="ml-auto max-w-none pl-4 sm:pl-6 lg:pl-8">
        <div className="mt-16 grid grid-cols-1 items-center gap-x-6 gap-y-2 pt-10 sm:gap-y-6 md:mt-20 lg:grid-cols-12 lg:pl-20 lg:pt-0">
          <div className="mx-auto flex max-w-2xl flex-col gap-8 pr-4 sm:pr-6 lg:col-span-7 lg:pr-8">
            <h2>Steigere kostenlos deine finanzielle Fitness</h2>
            <p>
              Im Trainingsbereich siehst du, ob sich deine
              Investitionsstrategien von Spiel zu Spiel verbessern. Nutze unsere
              interaktiven Trainingsmodule, um dein Wissen zu erweitern und
              deine Fähigkeiten zu schärfen.
            </p>
            <Image src={avatarFeedback} alt="" height={200} priority />
          </div>

          <div className="flex w-full items-end justify-end lg:col-span-5">
            <Image
              className="h-full"
              src={screenPreview}
              alt=""
              priority
              sizes="(min-width: 1024px) 67.8125rem, (min-width: 640px) 100vw, 45rem"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
