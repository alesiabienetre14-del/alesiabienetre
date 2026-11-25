import { Phone } from 'lucide-react'

const prices = [
  { name: 'Massage relaxant', options: [{ duration: '30 min', price: '40 €' }, { duration: '60 min', price: '60 €' }] },
  { name: 'Massage chinois', options: [{ duration: '30 min', price: '35 €' }, { duration: '60 min', price: '55 €' }] },
  { name: 'Massage tonique', options: [{ duration: '30 min', price: '40 €' }, { duration: '60 min', price: '60 €' }] },
  { name: 'Massage 4 mains', options: [{ duration: '30 min', price: '70 €' }, { duration: '60 min', price: '130 €' }] },
  { name: 'Massage aux pierres chaudes', options: [{ duration: '60 min', price: '75 €' }] },
  { name: 'Réflexologie plantaire', options: [{ duration: '45 min', price: '45 €' }] },
  { name: 'Massage du dos', options: [{ duration: '30 min', price: '35 €' }] },
]

export default function PricingSection() {
  return (
    <section id="tarifs" className="py-20 bg-secondary/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div className="reveal-left">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">
              Tarifs
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
              Des soins accessibles<br />pour tous les besoins
            </h2>
            <p className="text-muted-foreground text-base leading-relaxed mb-8">
              Toutes nos séances sont réalisées avec des produits de qualité. Paiement en espèces ou par carte. Sans rendez-vous accepté selon disponibilité.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:+33772887952"
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95"
              >
                <Phone className="w-4 h-4" />
                Réserver par téléphone
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border border-primary text-primary font-semibold px-5 py-3 rounded-xl hover:bg-primary/5 transition-all"
              >
                Nous trouver
              </a>
            </div>

            <p className="mt-4 text-xs text-muted-foreground">
              * Carte cadeau disponible — idéale pour offrir un moment de détente
            </p>
          </div>

          {/* Right — price list */}
          <div className="reveal">
            <div className="bg-card rounded-2xl border border-border overflow-hidden shadow-md">
              <div className="bg-primary px-5 py-4">
                <h3 className="font-serif text-white font-semibold text-lg">Grille tarifaire</h3>
                <p className="text-white/70 text-xs mt-0.5">Tarifs indicatifs — nous contacter pour soins esthétiques</p>
              </div>
              <div className="p-4 sm:p-5 space-y-4 bg-secondary/30">
                {prices.map((p) => (
                  <div
                    key={p.name}
                    className="relative rounded-2xl border border-primary/10 bg-card px-5 py-4 shadow-sm overflow-hidden"
                  >
                    <span aria-hidden="true" className="absolute left-0 top-5 bottom-5 w-0.5 rounded-full bg-accent/70" />
                    <h4 className="font-serif text-primary text-lg font-semibold leading-snug mb-3">{p.name}</h4>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {p.options.map((option) => (
                        <div key={option.duration} className="inline-flex items-baseline gap-3 rounded-xl bg-secondary/60 px-3 py-2">
                          <span className="text-sm text-muted-foreground whitespace-nowrap">{option.duration}</span>
                          <span aria-hidden="true" className="text-primary/30">·</span>
                          <span className="font-serif font-semibold text-primary text-xl whitespace-nowrap">{option.price}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="px-5 py-4 bg-secondary/60">
                <a
                  href="tel:+33772887952"
                  className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-xl hover:bg-primary/90 transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Appeler pour réserver — 07 72 88 79 52
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
