import Link from 'next/link'
import Image from 'next/image'

import { Container } from '@/components/Container'
import { NavLink } from '@/components/NavLink'

import socialFacebook from '@/images/icons/social-facebook.svg'
import socialInstagram from '@/images/icons/social-instagram.svg'
import socialLinkedin from '@/images/icons/social-linkedin.svg'

const socials: Array<any> = [
  {
    icon: socialFacebook,
    link: 'https://www.facebook.com/raiffeisen.steiermark',
    aria: 'social-facebook',
  },
  {
    icon: socialInstagram,
    link: 'https://www.instagram.com/raiffeisenclub_steiermark',
    aria: 'social-instagram',
  },
  {
    icon: socialLinkedin,
    link: 'https://www.linkedin.com/company/rlbsteiermark',
    aria: 'social-linkedin',
  },
]

export function Footer() {
  return (
    <footer className="bg-slate-50 pb-16 pt-40">
      <Container className="flex flex-col items-center py-16">
        <h3>Folge Raiffeisen auf Social Media</h3>
        <nav className="mt-10" aria-label="social links">
          <div className="flex justify-center gap-x-6">
            {socials.map((social) => (
              <div key={social.aria}>
                <Link
                  target="_blank"
                  href={social.link}
                  aria-label={social.aria}
                >
                  <Image src={social.icon} alt="" priority />
                </Link>
              </div>
            ))}
          </div>
        </nav>

        <nav className="flex w-full flex-col items-start gap-2 pt-20 lg:flex-row lg:justify-center lg:gap-8">
          <NavLink href="#" className="text-xl">
            Datenschutz
          </NavLink>
          <NavLink href="#" className="text-xl">
            Cookie-Präferenzen
          </NavLink>
          <NavLink href="#" className="text-xl">
            Nutzungsbedinungen
          </NavLink>
          <NavLink href="#" className="text-xl">
            Impressum
          </NavLink>
        </nav>
      </Container>
    </footer>
  )
}
