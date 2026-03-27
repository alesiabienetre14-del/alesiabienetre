const MASSAGE_IMG = 'https://v3b.fal.media/files/b/0a92669a/3utCutZpmnEvAI2k-896a_RpNboI9c.png'
const STONE_IMG = 'https://v3b.fal.media/files/b/0a92669a/y3ODmkopjyv54NRQ_Lj6d_QSkyMajE.png'

const services = [
  {
    img: MASSAGE_IMG,
    title: 'Massage Relaxant',
    description: 'Un voyage sensoriel pour détendre l\'esprit et le corps. Techniques douces et enveloppantes, idéales pour libérer les tensions du quotidien.',
    duration: '60 min',
    tag: 'Le plus demandé',
  },
  {
    img: STONE_IMG,
    title: 'Massage aux Pierres Chaudes',
    description: 'La chaleur des pierres volcaniques pénètre en profondeur pour dénouer les tensions musculaires et favoriser une détente totale.',
    duration: '90 min',
    tag: 'Coup de cœur',
  },
  {
    img: MASSAGE_IMG,
    title: 'Massage Chinois Traditionnel',
    description: 'Inspiré de l\'ancienne médecine chinoise, ce massage rééquilibre les énergies, stimule les méridiens et revitalise l\'organisme.',
    duration: '60 min',
    tag: 'Tradition',
  },
  {
    img: STONE_IMG,
    title: 'Massage Royal aux 4 Mains',
    description: 'Une expérience unique : deux masseuses expérimentées œuvrent en harmonie pour un soin complet, profondément relaxant.',
    duration: '60 min',
    tag: 'Exclusif',
  },
  {
    img: MASSAGE_IMG,
    title: 'Réflexologie Plantaire',
    description: 'Chaque point de réflexe du pied correspond à un organe. Ce soin rééquilibre et revitalise l\'ensemble du corps depuis la plante des pieds.',
    duration: '45 min',
    tag: 'Bien-être',
  },
  {
    img: STONE_IMG,
    title: 'Soins Esthétiques',
    description: 'Épilation, soin du visage et soins du corps pour un moment de beauté et de sérénité. Notre équipe vous accueille avec la plus grande attention.',
    duration: 'Sur devis',
    tag: 'Beauté',
  },
]

export default function ServicesSection() {
  return (
    <section id="soins" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">
            Nos Soins
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Une gamme complète de massages<br className="hidden sm:block" /> et soins bien-être
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Nos masseuses, formées aux techniques asiatiques traditionnelles, vous proposent des soins personnalisés dans un cadre serein.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <span className="absolute top-3 right-3 text-xs font-semibold bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-serif font-semibold text-foreground text-lg leading-snug">{s.title}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full ml-2 shrink-0">
                    {s.duration}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                <a
                  href="tel:+33772887952"
                  className="mt-4 inline-flex items-center gap-1.5 text-primary text-sm font-semibold hover:underline group"
                >
                  Réserver ce soin
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
