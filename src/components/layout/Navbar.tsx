import { useState, useEffect } from 'react'
import { Phone, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { label: 'Soins', href: '#soins' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'Avis', href: '#avis' },
    { label: 'Accès', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4 text-white" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2C8 2 4 6 4 10c0 5.25 8 12 8 12s8-6.75 8-12c0-4-4-8-8-8z" />
              <circle cx="12" cy="10" r="2.5" />
            </svg>
          </span>
          <div className="leading-tight">
            <span className="block font-serif font-semibold text-foreground text-sm leading-none">Bien Être</span>
            <span className="block text-[10px] tracking-widest text-muted-foreground uppercase">Alésia • Paris 14</span>
          </div>
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+33772887952"
            className="hidden md:flex items-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full hover:bg-primary/90 transition-all duration-200 hover:scale-105 active:scale-95"
          >
            <Phone className="w-3.5 h-3.5" />
            07 72 88 79 52
          </a>
          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-background/97 backdrop-blur-md border-b border-border px-4 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block py-3 text-sm font-medium text-foreground/70 border-b border-border/40 last:border-0"
              onClick={() => setMobileOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+33772887952"
            className="mt-3 flex items-center justify-center gap-2 bg-primary text-primary-foreground text-sm font-semibold px-4 py-3 rounded-xl"
          >
            <Phone className="w-4 h-4" />
            Appeler maintenant — 07 72 88 79 52
          </a>
        </div>
      )}
    </nav>
  )
}
