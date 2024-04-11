import { Container } from '@/components/Container'

const testimonials = [
  [
    {
      title: 'Für wen ist fit2invest geeignet?',
      content:
        'Das Spiel richtet sich an Einsteiger:innen und Fortgeschrittene, die ihr Verständnis für Finanzen und Investitionen erweitern möchten. Unabhängig vom Vorwissen bietet fit2invest eine spannende und lehrreiche Erfahrung für für jede:n, der oder die mehr über Geldanlage lernen möchte.',
    },
    {
      title: 'Wie kann ich meine Leistung bei fit2invest verbessern?',
      content:
        'fit2invest bietet individuelles Feedback zu deinen Entscheidungen und eine Analyse deiner Spielstrategien. Nutze das Feedback von Alex und die kostenlosen interaktiven Module im Trainingsbereich, um dein Wissen zu vertiefen, und vergleiche deine Strategien miteinander, um neue Perspektiven und Techniken zu gewinnen.',
    },
  ],
  [
    {
      title: 'Was passiert, wenn ich im Spiel Geld verliere?',
      content:
        'Verluste im Spiel haben keine realen finanziellen Auswirkungen. Sie dienen als Lernchance, um Strategien zu überdenken und aus Fehlentscheidungen zu lernen. fit2invest ermutigt Spieler:innen, verschiedene Ansätze auszuprobieren und das Gelernte in zukünftigen Szenarien anzuwenden.',
    },
    {
      title: 'Kann ich bei fit2invest echtes Geld investieren oder gewinnen?',
      content:
        'Nein, alle Veranlagungen innerhalb von fit2invest sind rein virtuell. Das Spiel bietet eine sichere Umgebung, in der man  unterschiedliche Anlagestrategien  risikolos ausprobieren kann.',
    },
  ],
  [
    {
      title: 'Wie realistisch sind die Simulationen?',
      content:
        'Die Simulationen in fit2invest basieren auf realen Marktprinzipien und historischen Daten, um eine möglichst authentische Lernerfahrung zu bieten. Sie sind vereinfacht, um das Lernen zu erleichtern, reflektieren aber realistische Marktbedingungen und bieten eine solide Grundlage für das Verständnis von Veranlagungskonzepten.',
    },
    {
      title:
        'Wie fange ich an zu spielen und was sind die ersten Schritte in fit2invest?',
      content:
        'Registriere dich einfach für ein kostenloses Konto auf der fit2invest Website und durchlaufe das interaktive Tutorial, das dir die Grundlagen des Spiels näherbringt. Danach kannst du direkt in die Börsenwelt eintauchen und deine Fähigkeiten unter realistischen Bedingungen spielerisch verbessern.',
    },
  ],
]

export function Questions() {
  return (
    <section
      id="questions"
      aria-label="What our customers are saying"
      className="bg-rlb-yellow py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight sm:text-4xl">
            Hast du noch Fragen?
          </h2>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:gap-8 lg:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {testimonials.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-6 sm:gap-y-8">
                {column.map((testimonial, testimonialIndex) => (
                  <li key={testimonialIndex}>
                    <figure className="relative rounded-md bg-white p-6">
                      <h4 className="mb-4">{testimonial.title}</h4>

                      <p className="text-black-light text-[17px]">
                        {testimonial.content}
                      </p>
                    </figure>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>

        <div className="mx-auto mt-12 max-w-2xl md:text-center">
          <p className="mb-4 text-[17px]">
            Wenn du mehr wissen möchtest kontaktiere uns gerne
          </p>
          <a className="text-lg font-semibold uppercase">Zum Kontaktformular</a>
        </div>
      </Container>
    </section>
  )
}
