import { Star, Quote } from 'lucide-react'

const reviews = [
  {
    name: 'Sophie M.',
    date: 'Il y a 2 semaines',
    rating: 5,
    text: 'Un moment de pur bonheur ! La masseuse était très professionnelle, à l\'écoute de mes besoins. Le cadre est zen et propre. Je recommande vivement !',
    service: 'Massage relaxant 60 min',
  },
  {
    name: 'Jean-Pierre L.',
    date: 'Il y a 1 mois',
    rating: 5,
    text: 'Accueil chaleureux, massage excellent. Les techniques chinoises m\'ont permis de dénouer des tensions que j\'avais depuis des semaines. Je reviendrai !',
    service: 'Massage chinois traditionnel',
  },
  {
    name: 'Amira K.',
    date: 'Il y a 3 semaines',
    rating: 5,
    text: 'Je suis cliente depuis plusieurs années. L\'équipe est toujours aussi attentive. La propreté est impeccable. Les massages aux 4 mains sont une expérience inoubliable.',
    service: 'Massage Royal 4 mains',
  },
  {
    name: 'Thomas B.',
    date: 'Il y a 2 mois',
    rating: 5,
    text: 'Parfait pour décompresser après une semaine chargée. Sans rendez-vous, j\'ai pu être reçu immédiatement. Massages de qualité professionnelle à prix raisonnable.',
    service: 'Massage du dos',
  },
  {
    name: 'Claire D.',
    date: 'Il y a 1 semaine',
    rating: 5,
    text: 'Le massage aux pierres chaudes est absolument divin. Je me suis sentie renaître ! L\'ambiance du salon est très apaisante, on se sent comme dans un vrai spa.',
    service: 'Massage aux pierres chaudes',
  },
  {
    name: 'Maxime R.',
    date: 'Il y a 3 mois',
    rating: 4,
    text: 'Très bon massage, masseuse compétente et professionnelle. L\'endroit est facile d\'accès depuis le métro Alésia. Je reviendrai certainement.',
    service: 'Réflexologie plantaire',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="avis" className="py-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">
            Témoignages
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Ce que nos clients disent de nous
          </h2>

          {/* Google rating summary */}
          <div className="inline-flex items-center gap-3 bg-card border border-border px-5 py-3 rounded-full shadow-sm mt-2">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-4 object-contain"
              loading="lazy"
              decoding="async"
            />
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="font-semibold text-foreground text-sm">4.8</span>
            <span className="text-muted-foreground text-xs">· +180 avis Google</span>
          </div>
        </div>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((r, i) => (
            <div
              key={r.name}
              className="reveal bg-card rounded-2xl border border-border p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 flex flex-col gap-3"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {/* Stars */}
              <div className="flex items-center gap-0.5">
                {[...Array(r.rating)].map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <div className="relative">
                <Quote className="absolute -top-1 -left-1 w-4 h-4 text-accent/40" />
                <p className="text-foreground/80 text-sm leading-relaxed pl-3 italic">{r.text}</p>
              </div>

              {/* Service tag */}
              <span className="inline-block text-xs text-primary/70 bg-secondary px-2.5 py-1 rounded-full w-fit">
                {r.service}
              </span>

              {/* Author */}
              <div className="flex items-center justify-between pt-2 border-t border-border/50 mt-auto">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary/15 flex items-center justify-center text-primary font-semibold text-xs">
                    {r.name.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-foreground">{r.name}</span>
                </div>
                <span className="text-xs text-muted-foreground">{r.date}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Google link */}
        <div className="text-center mt-10 reveal">
          <a
            href="https://www.google.com/maps/place//data=!4m2!3m1!1s0x47e671c7830279d7:0xf31d6421f69a461f?sa=X&ved=1t:8290&ictx=111"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:underline"
          >
            Voir tous les avis sur Google
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
