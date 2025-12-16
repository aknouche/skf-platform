import { MainNav } from '@/components/main-nav'

const sections = [
  {
    title: 'Trupper',
    description: 'Aktuella landslagstrupper och uttagna utövare',
    color: 'bg-red-100 text-red-600',
  },
  {
    title: 'Uttagning',
    description: 'Kriterier och process för landslagsuttag',
    color: 'bg-orange-100 text-orange-600',
  },
  {
    title: 'Nyheter',
    description: 'Senaste nytt från landslaget',
    color: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Projekt',
    description: 'Pågående landslagsprojekt och utvecklingsinsatser',
    color: 'bg-purple-100 text-purple-600',
  },
]

export default function Landslaget() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Hero */}
      <div className="bg-gradient-to-br from-red-50 via-slate-50 to-red-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Landslaget
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Sveriges bästa kickboxare representerar landet i internationella tävlingar
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group bg-white border border-slate-200 rounded-xl p-8 hover:border-slate-300 hover:shadow-lg transition-all"
            >
              <div className={`w-12 h-12 ${section.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-slate-900 mb-3">
                {section.title}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {section.description}
              </p>
            </div>
          ))}
        </div>

        {/* Info Notice */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
          <div className="flex gap-4">
            <svg className="w-6 h-6 text-amber-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-semibold text-amber-900 mb-1">Konceptdemonstration</h3>
              <p className="text-sm text-amber-800 leading-relaxed">
                Detta visar hur landslagsinformation skulle struktureras. Detaljerad information om trupper, uttagningskriterier och projekt läggs till i framtiden.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-slate-200 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center text-sm text-slate-500">
          <p>SKF Digital Plattform · Strategi 2030 · Konceptdemonstration (POC)</p>
        </div>
      </footer>
    </div>
  )
}
