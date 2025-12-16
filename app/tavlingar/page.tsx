import { MainNav } from '@/components/main-nav'
import Link from 'next/link'

const sections = [
  {
    title: 'Kalender',
    description: 'Kommande tävlingar och event i hela Sverige',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Resultat & ranking',
    description: 'Tävlingsresultat och nationella rankinglistor',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Regler',
    description: 'Tävlingsregler, viktklasser och tekniska bestämmelser',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Arrangörsstöd',
    description: 'Information och stöd för dig som vill arrangera tävlingar',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
]

export default function Tavlingar() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Tävlingar
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Allt om kickboxningtävlingar i Sverige
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
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 mb-4 group-hover:bg-blue-200 transition-colors">
                {section.icon}
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
                Detta är en översikt som visar hur tävlingsinformation skulle struktureras på plattformen.
                Detaljerad information och funktionalitet (kalendrar, anmälan, resultatdatabaser) implementeras i framtiden.
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
