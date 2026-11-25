const MASSAGE_IMG = '/images/massage-relaxant-v2.webp'
const STONE_IMG = '/images/massage-pierres-chaudes.webp'
const CHINESE_IMG = '/images/massage-chinois.webp'
const FOUR_HANDS_IMG = '/images/massage-quatre-mains.webp'
const REFLEXOLOGY_IMG = '/images/reflexologie-plantaire.webp'
const BEAUTY_IMG = '/images/soins-esthetiques.webp'

const services = [
  {
    img: MASSAGE_IMG,
    width: 1536,
    height: 1024,
    title: 'Massage Relaxant',
    description: 'Un voyage sensoriel pour détendre l\'esprit et le corps. Techniques douces et enveloppantes, idéales pour libérer les tensions du quotidien.',
    duration: '30 ou 60 min',
    price: '30 min : 40 € · 60 min : 60 €',
    tag: 'Le plus demandé',
  },
  {
    img: STONE_IMG,
    width: 1600,
    height: 983,
    title: 'Massage aux Pierres Chaudes',
    description: 'La chaleur des pierres volcaniques pénètre en profondeur pour dénouer les tensions musculaires et favoriser une détente totale.',
    duration: '60 min',
    price: '60 min : 75 €',
    tag: 'Coup de cœur',
  },
  {
    img: CHINESE_IMG,
    width: 1536,
    height: 1024,
    title: 'Massage Chinois Traditionnel',
    description: 'Inspiré de l\'ancienne médecine chinoise, ce massage rééquilibre les énergies, stimule les méridiens et revitalise l\'organisme.',
    duration: '30 ou 60 min',
    price: '30 min : 35 € · 60 min : 55 €',
    tag: 'Tradition',
  },
  {
    img: FOUR_HANDS_IMG,
    width: 1536,
    height: 1024,
    title: 'Massage 4 mains',
    description: 'Une expérience unique : deux masseuses expérimentées œuvrent en harmonie pour un soin complet, profondément relaxant.',
    duration: '30 ou 60 min',
    price: '30 min : 70 € · 60 min : 130 €',
    tag: 'Exclusif',
  },
  {
    img: REFLEXOLOGY_IMG,
    width: 1536,
    height: 1024,
    title: 'Réflexologie Plantaire',
    description: 'Chaque point de réflexe du pied correspond à un organe. Ce soin rééquilibre et revitalise l\'ensemble du corps depuis la plante des pieds.',
    duration: '30 min',
    price: '30 min : 45 €',
    tag: 'Bien-être',
  },
  {
    img: '/images/massage-tonique.png',
    width: 1536,
    height: 1024,
    title: 'Massage tonique',
    description: 'Un massage dynamique aux gestes appuyés, avec une pression adaptée à vos préférences, pour une pause bien-être énergisante.',
    duration: '30 ou 60 min',
    price: '30 min : 40 € · 60 min : 60 €',
    tag: 'Énergie',
  },
  {
    img: '/images/massage-dos.png',
    width: 1536,
    height: 1024,
    title: 'Massage du dos',
    description: 'Une séance ciblée sur le dos pour un moment de détente, avec des gestes et une pression adaptés à votre confort.',
    duration: '30 min',
    price: '30 min : 35 €',
    tag: 'Détente ciblée',
  },
  {
    img: BEAUTY_IMG,
    width: 1536,
    height: 1024,
    title: 'Soins Esthétiques',
    description: 'Épilation, soin du visage et soins du corps pour un moment de beauté et de sérénité. Notre équipe vous accueille avec la plus grande attention.',
    duration: 'Sur devis',
    price: 'Tarif sur devis',
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="reveal group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ transitionDelay: `${i * 70}ms` }}
            >
              {/* Image */}
              {s.img ? <div className="relative h-48 overflow-hidden">
                <img
                  src={s.img}
                  alt={s.title}
                  width={s.width}
                  height={s.height}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
                <span className="absolute top-3 right-3 text-xs font-semibold bg-primary text-primary-foreground px-2.5 py-1 rounded-full">
                  {s.tag}
                </span>
              </div> : <div className="h-48 bg-secondary flex flex-col items-center justify-center gap-3 border-b border-primary/20 px-5 text-center">
                <span className="text-xs tracking-widest uppercase text-primary">{s.tag}</span>
                <span className="font-serif text-2xl text-primary">{s.title}</span>
                <span className="text-xs text-muted-foreground">Bien Être Alésia</span>
              </div>}

              {/* Content */}
              <div className="p-5">
                <div className="flex flex-wrap items-start gap-2 mb-2">
                  <h3 className="font-serif font-semibold text-foreground text-lg leading-snug">{s.title}</h3>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-0.5 rounded-full ml-2 shrink-0">
                    {s.duration}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
                <p className="mt-4 rounded-lg border border-primary/25 bg-secondary/50 px-3 py-2 text-sm font-semibold text-primary">
                  {s.price.split(' · ').map((price) => (
                    <span key={price} className="block whitespace-nowrap leading-relaxed">{price}</span>
                  ))}
                </p>
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
