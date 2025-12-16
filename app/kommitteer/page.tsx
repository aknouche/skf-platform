import { MainNav } from '@/components/main-nav'

const committees = [
  {
    name: 'Tävlingskommittén',
    description: 'Ansvarar för tävlingsverksamheten, regeländringar och arrangemang',
  },
  {
    name: 'Utbildningskommittén',
    description: 'Utvecklar och genomför utbildningar för tränare och domare',
  },
  {
    name: 'Landslagskommittén',
    description: 'Stödjer landslagsverksamheten och internationella tävlingar',
  },
  {
    name: 'Ungdomskommittén',
    description: 'Arbetar för att utveckla kickboxning bland ungdomar',
  },
]

export default function Kommitteer() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 via-purple-50 to-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Kommittéer
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Förbundets kommittéer driver olika delar av verksamheten
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="bg-slate-50 rounded-xl p-8 mb-12 border border-slate-200">
          <p className="text-slate-700 leading-relaxed">
            SKF:s verksamhet drivs av engagerade personer i olika kommittéer. Varje kommitté arbetar inom sitt område för att utveckla kickboxning i Sverige enligt Strategi 2030.
          </p>
        </div>

        {/* Committees Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {committees.map((committee, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                {committee.name}
              </h2>
              <p className="text-slate-600 leading-relaxed">
                {committee.description}
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
                Detta visar hur kommittéernas arbete skulle presenteras. Detaljerad information om varje kommitté, kontaktpersoner och pågående projekt läggs till i framtiden.
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
