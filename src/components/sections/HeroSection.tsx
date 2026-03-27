import { Phone, Star, MapPin, Clock } from 'lucide-react'

const HERO_IMG = 'https://v3b.fal.media/files/b/0a926698/UORup6qFDQq0jKM4vyV18_C9uEEOdr.png'

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={HERO_IMG}
          alt="Institut Bien Être Alésia - Espace de massage"
          className="w-full h-full object-cover object-center"
          fetchpriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/75 via-foreground/55 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-xl">
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-medium px-3 py-1.5 rounded-full mb-6">
            <MapPin className="w-3 h-3" />
            Paris 14e — Quartier Alésia
          </div>

          {/* Heading */}
          <h1 className="animate-fade-in-up stagger-1 font-serif text-white text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight mb-4">
            Un moment de<br />
            <em className="italic text-accent">sérénité absolue</em><br />
            au cœur de Paris
          </h1>

          <p className="animate-fade-in-up stagger-2 text-white/85 text-base sm:text-lg leading-relaxed mb-8 max-w-md">
            Institut de massage et de bien-être au cœur du 14e arrondissement. Massages relaxants, soins du corps, épilation — avec ou sans rendez-vous.
          </p>

          {/* Social proof */}
          <div className="animate-fade-in-up stagger-3 flex items-center gap-3 mb-8">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-white/90 text-sm font-medium">4.8/5 — +180 avis clients</span>
          </div>

          {/* CTAs */}
          <div className="animate-fade-in-up stagger-4 flex flex-col sm:flex-row gap-3">
            <a
              href="tel:+33772887952"
              className="pulse-phone flex items-center justify-center gap-2.5 bg-primary text-primary-foreground font-semibold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95 shadow-lg"
            >
              <Phone className="w-4 h-4" />
              Appeler — 07 72 88 79 52
            </a>
            <a
              href="#soins"
              className="flex items-center justify-center gap-2.5 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-semibold px-6 py-3.5 rounded-xl hover:bg-white/25 transition-all duration-200"
            >
              Découvrir nos soins
            </a>
          </div>

          {/* Opening hours pill */}
          <div className="animate-fade-in-up stagger-5 flex items-center gap-2 mt-6">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-white/80 text-sm flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              Ouvert tous les jours · 10h30 – 21h30
            </span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-9 border-2 border-white/40 rounded-full flex items-start justify-center p-1">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
