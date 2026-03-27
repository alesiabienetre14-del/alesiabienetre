import { Phone, MapPin, Clock, Train } from 'lucide-react'

export default function BookingSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 reveal">
          <span className="inline-block text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">
            Nous contacter
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-4">
            Venez nous rendre visite
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Appelez-nous pour réserver ou passez directement à l'institut. Avec ou sans rendez-vous, nous vous accueillerons avec plaisir.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Phone */}
          <div className="reveal bg-card rounded-2xl border border-border p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-serif font-semibold text-foreground text-lg mb-1">Téléphone</h3>
            <p className="text-muted-foreground text-sm mb-4">Réservez en quelques secondes</p>
            <a
              href="tel:+33786746711"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold px-5 py-3 rounded-xl hover:bg-primary/90 transition-all hover:scale-105 active:scale-95 w-full"
            >
              07 72 88 79 52
            </a>
          </div>

          {/* Address */}
          <div className="reveal bg-card rounded-2xl border border-border p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: '80ms' }}>
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-foreground text-lg mb-1">Adresse</h3>
            <p className="text-muted-foreground text-sm mb-2">31 Bis Rue d'Alésia</p>
            <p className="text-muted-foreground text-sm mb-4">75014 Paris</p>
            <a
              href="https://maps.google.com/?q=38+Avenue+Jean+Moulin+75014+Paris"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-primary text-primary font-semibold px-5 py-3 rounded-xl hover:bg-primary/5 transition-all w-full text-sm"
            >
              Voir sur Google Maps
            </a>
          </div>

          {/* Hours */}
          <div className="reveal bg-card rounded-2xl border border-border p-6 text-center hover:shadow-md transition-all duration-300 hover:-translate-y-1" style={{ transitionDelay: '160ms' }}>
            <div className="w-14 h-14 rounded-full bg-secondary flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif font-semibold text-foreground text-lg mb-1">Horaires</h3>
            <p className="text-muted-foreground text-sm mb-1">Tous les jours</p>
            <p className="font-semibold text-foreground text-base mb-3">10h30 – 21h30</p>
            <div className="flex items-center justify-center gap-1.5">
              <div className="w-2 h-2 rounded-full bg-green-400" />
              <span className="text-xs text-muted-foreground">Sans rendez-vous accepté</span>
            </div>
          </div>
        </div>

        {/* Access info */}
        <div className="reveal bg-secondary/50 rounded-2xl border border-border p-6 mb-10">
          <div className="flex items-center gap-2 mb-4">
            <Train className="w-5 h-5 text-primary" />
            <h3 className="font-serif font-semibold text-foreground text-base">Accès transports</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm text-muted-foreground">
            <div className="flex items-start gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary text-primary-foreground text-xs font-bold shrink-0">M</span>
              <span>Métro Alésia — Ligne 4</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/70 text-primary-foreground text-xs font-bold shrink-0">T</span>
              <span>Tram Porte d'Orléans</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/50 text-primary-foreground text-xs font-bold shrink-0">B</span>
              <span>Bus Alésia – Gén. Leclerc</span>
            </div>
          </div>
        </div>

        {/* Map */}
        <div className="reveal rounded-2xl overflow-hidden border border-border shadow-md h-72">
          <iframe
            title="Localisation Bien Être Alésia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.1!2d2.3253!3d48.8261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d879a9b43b%3A0x1!2s38+Av.+Jean+Moulin%2C+75014+Paris!5e0!3m2!1sfr!2sfr!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <p className="text-center text-xs text-muted-foreground mt-2">
          31 Bis Rue d'Alésia · 75014 Paris · Métro Alésia (Ligne 4) · Tram Porte d'Orléans
        </p>
      </div>
    </section>
  )
}
