import { Container } from '@/components/Container'
import Image from 'next/image'

import firstPerson from '/src/images/comment-person-1.jpg'
import secondPerson from '/src/images/comment-person-2.jpg'

export function Comments() {
  return (
    <Container className="flex flex-col justify-center gap-16 py-20 text-center lg:py-32">
      <h2 className="mx-auto max-w-4xl">
        Was Spieler:innen über fit2invest sagen
      </h2>
      <div className="bg-rlb-black-default flex h-auto min-h-[560px] flex-col items-center overflow-hidden rounded-4xl lg:h-[400px] lg:min-h-0 lg:flex-row">
        <div className="relative h-[280px] w-full lg:h-full lg:w-1/2">
          <Image
            fill
            src={firstPerson}
            alt="First commenting person"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="flex h-1/2 w-full flex-col items-start justify-start gap-4 p-12 font-semibold text-white lg:h-full lg:w-1/2">
          <h3 className="hidden text-left lg:block">
            Dank fit2invest habe ich das Investieren richtig verstanden und
            fühle mich sicherer bei meinen Entscheidungen.
          </h3>
          <h4 className="block text-left lg:hidden">
            Dank fit2invest habe ich das Investieren richtig verstanden und
            fühle mich sicherer bei meinen Entscheidungen.
          </h4>
          <span>Anna, 28</span>
        </div>
      </div>

      <div className="bg-rlb-black-default flex h-auto min-h-[560px] flex-col items-center overflow-hidden rounded-4xl lg:h-[400px] lg:min-h-0 lg:flex-row-reverse">
        <div className="relative h-[280px] w-full lg:h-full lg:w-1/2">
          <Image
            style={{ objectFit: 'cover' }}
            fill
            src={secondPerson}
            alt="Second commenting person"
          />
        </div>
        <div className="flex h-1/2 w-full flex-col items-start justify-start gap-4 p-12 font-semibold text-white lg:h-full lg:w-1/2">
          <h3 className="hidden text-left lg:block">
            Mit fit2invest konnte ich unterschiedliche Anlagestrategien
            risikolos ausprobieren. Jetzt weiß ich was zu mir passt.
          </h3>
          <h4 className="block text-left lg:hidden">
            Mit fit2invest konnte ich unterschiedliche Anlagestrategien
            risikolos ausprobieren. Jetzt weiß ich was zu mir passt.
          </h4>
          <span>Simon, 39</span>
        </div>
      </div>
    </Container>
  )
}
