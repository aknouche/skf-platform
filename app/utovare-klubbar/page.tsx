import { MainNav } from '@/components/main-nav'

const sections = [
  {
    title: 'Hitta klubb',
    description: 'Sök och hitta kickboxningklubbar i hela Sverige',
    items: ['Klubbkarta', 'Kontaktinformation', 'Träningsformer'],
  },
  {
    title: 'Medlemskap',
    description: 'Information om medlemskap i SKF',
    items: ['Bli medlem', 'Medlemsförmåner', 'Licenser', 'Avgifter'],
  },
  {
    title: 'Träna & tävla',
    description: 'Guider och information för utövare',
    items: ['Kom igång', 'Träningsprogram', 'Tävlingsanmälan', 'Regler'],
  },
  {
    title: 'För tränare',
    description: 'Utbildningar och verktyg för tränare',
    items: ['Tränarutbildningar', 'Fortbildning', 'Certifiering', 'Träningsverktyg'],
  },
  {
    title: 'För domare',
    description: 'Domarutbildning och regeluppdateringar',
    items: ['Domarutbildning', 'Licensförnyelse', 'Regeländringar', 'Internationella regler'],
  },
  {
    title: 'För klubbar',
    description: 'Administration och stöd för föreningar',
    items: ['Medlemshantering', 'Bidrag', 'Försäkringar', 'Kontakt med förbundet'],
  },
]

export default function UtovareKlubbar() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 via-green-50 to-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            För utövare & klubbar
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Allt du behöver för att träna, tävla och utvecklas i kickboxning
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-lg transition-all"
            >
              <h2 className="text-xl font-bold text-slate-900 mb-3">
                {section.title}
              </h2>
              <p className="text-slate-600 mb-4 text-sm">
                {section.description}
              </p>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
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
                Detta är en strukturell översikt. Detaljerad information, formulär och funktionalitet läggs till i framtida faser.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center text-sm text-slate-500">
          <p>SKF Digital Plattform · Strategi 2030 · Konceptdemonstration (POC)</p>
        </div>
      </footer>
    </div>
  )
}
