import { Star, Users, Award, Clock } from 'lucide-react'

const stats = [
  { icon: Star, value: '4.8/5', label: 'Note Google', sub: '+180 avis' },
  { icon: Users, value: '5 000+', label: 'Clients satisfaits', sub: 'Depuis 2010' },
  { icon: Award, value: '15 ans', label: "D'expérience", sub: 'Massages asiatiques' },
  { icon: Clock, value: '10h30–21h30', label: 'Tous les jours', sub: 'Avec ou sans RDV' },
]

export default function TrustBar() {
  return (
    <section className="bg-primary py-10 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`reveal text-center flex flex-col items-center gap-2`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center mb-1">
                <s.icon className="w-5 h-5 text-white" />
              </div>
              <span className="font-serif text-white text-2xl font-semibold leading-none">{s.value}</span>
              <span className="text-white/90 text-sm font-medium">{s.label}</span>
              <span className="text-white/60 text-xs">{s.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
