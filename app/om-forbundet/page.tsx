import { MainNav } from '@/components/main-nav'

const sections = [
  {
    title: 'Organisation',
    items: ['Styrelse', 'Kansli', 'Kommittéer', 'Stadgar'],
  },
  {
    title: 'Verksamhet',
    items: ['Strategi 2030', 'Verksamhetsberättelse', 'Ekonomisk information', 'Hållbarhetsarbete'],
  },
  {
    title: 'Kontakt',
    items: ['Kontaktuppgifter', 'Pressmeddelanden', 'Samarbetspartners', 'Jobb & uppdrag'],
  },
]

export default function OmForbundet() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Om förbundet
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Svenska Kickboxningsförbundet utvecklar kickboxning i Sverige
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        {/* Introduction */}
        <div className="bg-white border border-slate-200 rounded-xl p-8 mb-12 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Vår uppgift
          </h2>
          <div className="space-y-4 text-slate-700 leading-relaxed">
            <p>
              <strong>Svenska Kickboxningsförbundet (SKF)</strong> är specialidrottsförbund under Riksidrottsförbundet och ansvarar för kickboxningens utveckling i Sverige.
            </p>
            <p>
              Vi arbetar för att öka tillgängligheten till idrotten, stödja klubbar och utövare, samt företräda Sverige internationellt genom landslagsverksamhet.
            </p>
            <p>
              Genom <strong>Strategi 2030</strong> bygger vi en modern organisation med digital plattform, tydlig struktur och fokus på långsiktig utveckling.
            </p>
          </div>
        </div>

        {/* Sections Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {sections.map((section, index) => (
            <div
              key={index}
              className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all"
            >
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-sm text-slate-600">
                    <svg className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                Detta visar hur information om förbundet skulle struktureras. Detaljerad information, dokument och kontaktuppgifter läggs till i framtiden.
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
