import { Phone, MapPin, Clock } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left info */}
          <div className="lg:col-span-2 reveal-left">
            <span className="inline-block text-xs font-semibold tracking-widest text-primary/70 uppercase mb-3">
              Nous trouver
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-foreground mb-6">
              Venez nous rendre visite
            </h2>

            <div className="space-y-4">
              <a
                href="tel:+33772887952"
                className="flex items-center gap-4 p-4 bg-secondary rounded-xl border border-border hover:shadow-md transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Téléphone</p>
                  <p className="font-semibold text-primary text-base group-hover:underline">07 72 88 79 52</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Adresse</p>
                  <p className="font-semibold text-foreground text-sm">31 Bis Rue d'Alésia</p>
                  <p className="text-muted-foreground text-sm">75014 Paris</p>
                  <p className="text-muted-foreground text-xs mt-1">Métro Alésia (L4) · Tram Porte d'Orléans</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-secondary rounded-xl border border-border">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                  <Clock className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">Horaires</p>
                  <p className="font-semibold text-foreground text-sm">Tous les jours</p>
                  <p className="text-muted-foreground text-sm">10h30 – 21h30</p>
                  <div className="flex items-center gap-1.5 mt-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span className="text-xs text-muted-foreground">Avec ou sans rendez-vous</span>
                  </div>
                </div>
              </div>

              <a
                href="tel:+33772887952"
                className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3.5 rounded-xl hover:bg-primary/90 transition-all hover:scale-[1.01] active:scale-[0.99]"
              >
                <Phone className="w-4 h-4" />
                Appeler pour réserver — 07 72 88 79 52
              </a>
            </div>
          </div>

          {/* Right — map */}
          <div className="lg:col-span-3 reveal">
            <div className="rounded-2xl overflow-hidden border border-border shadow-md h-[420px]">
              <iframe
                title="Localisation Bien Être Alésia — 31 Bis Rue d'Alésia Paris 14"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.3!2d2.3247!3d48.8285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671c7830279d7%3A0xf31d6421f69a461f!2s31+Bis+Rue+d'Al%C3%A9sia%2C+75014+Paris!5e0!3m2!1sfr!2sfr!4v1700000001"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <p className="text-center text-xs text-muted-foreground mt-2">
              31 Bis Rue d'Alésia · 75014 Paris · Métro Alésia (Ligne 4) · Tram Porte d'Orléans
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
