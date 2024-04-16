import Image from 'next/image'

import heroImage from '/src/images/rlb-hero-image.jpg'
import avatarLeaning from '/src/images/avatars/avatar-leaning.svg'

export function HeroImage() {
  return (
    <div className="relative flex flex-col items-center pb-16 pt-20 lg:pt-32">
      <Image
        className="w-[220px] lg:hidden"
        src={avatarLeaning}
        alt=""
        priority
      />
      <Image
        className="absolute -top-[34px] right-28 z-10 hidden w-[350px] lg:block"
        src={avatarLeaning}
        alt=""
        priority
      />
      <div className="relative h-[550px] w-full lg:h-[800px]">
        <Image
          style={{ objectFit: 'cover' }}
          fill
          src={heroImage}
          alt="Hero image"
        />
      </div>
    </div>
  )
}
