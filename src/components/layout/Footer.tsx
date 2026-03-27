import { Phone, MapPin, Clock, Star } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
                <svg viewBox="0 0 24 24" fill="none" className="w-4.5 h-4.5 text-white" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8 2 4 6 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4-4-8-8-8z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
              </span>
              <div>
                <span className="block font-serif font-semibold text-background text-sm">Bien Être Alésia</span>
                <span className="block text-[10px] tracking-widest text-background/50 uppercase">Institut · Paris 14e</span>
              </div>
            </div>
            <p className="text-background/90 text-sm leading-relaxed">
              Institut de massage et de bien-être dans le 14e arrondissement de Paris. Massages asiatiques, soins du corps et esthétiques.
            </p>
            {/* Rating */}
            <div className="flex items-center gap-2 mt-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="text-background/70 text-xs font-medium">4.8 · Google</span>
            </div>
          </div>

          {/* Soins */}
          <div>
            <h3 className="font-serif font-semibold text-background text-sm uppercase tracking-wider mb-4">Nos soins</h3>
            <ul className="space-y-2 text-sm text-background/90">
              {[
                'Massage relaxant',
                'Massage chinois',
                'Massage Royal 4 mains',
                'Pierres chaudes',
                'Réflexologie plantaire',
                'Soins esthétiques',
              ].map((s) => (
                <li key={s}>
                  <a href="#soins" className="hover:text-background transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Horaires */}
          <div>
            <h3 className="font-serif font-semibold text-background text-sm uppercase tracking-wider mb-4">Horaires</h3>
            <div className="space-y-1.5 text-sm text-background/90">
              <div className="flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Lundi – Vendredi</span>
              </div>
              <p className="ml-5.5 pl-0.5 font-semibold text-background">10h30 – 21h30</p>
              <div className="flex items-center gap-2 mt-2">
                <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                <span>Samedi – Dimanche</span>
              </div>
              <p className="ml-5.5 pl-0.5 font-semibold text-background">10h30 – 21h30</p>
              <div className="mt-3 flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-green-400" />
                <span className="text-background/90 text-xs">Avec ou sans rendez-vous</span>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif font-semibold text-background text-sm uppercase tracking-wider mb-4">Nous trouver</h3>
            <div className="space-y-3 text-sm text-background/90">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent shrink-0 mt-0.5" />
                <span>31 Bis Rue d'Alésia<br />75014 Paris</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent shrink-0" />
                <a href="tel:+33772887952" className="hover:text-background transition-colors font-medium">
                  07 72 88 79 52
                </a>
              </div>
              <div className="mt-2 space-y-1 text-xs">
                <p>Métro : Alésia (Ligne 4)</p>
                <p>Tram : Porte d'Orléans</p>
                <p>Bus : Alésia – Gén. Leclerc</p>
              </div>
            </div>

            <a
              href="tel:+33772887952"
              className="mt-5 w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold py-2.5 px-4 rounded-xl hover:bg-primary/90 transition-all"
            >
              <Phone className="w-3.5 h-3.5" />
              Appeler maintenant
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-background/80">
          <p>© {new Date().getFullYear()} Bien Être Alésia — Institut de massage, Paris 14e</p>
          <p>Massage bien-être · Actes non médicaux · Massages asiatiques Paris</p>
        </div>
      </div>
    </footer>
  )
}
