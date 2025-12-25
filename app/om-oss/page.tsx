import { MainNav } from '@/components/main-nav'
import Link from 'next/link'

export default function OmOss() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Om förbundet
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Svenska Kickboxningsförbundet – vårt uppdrag och organisation
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* About Section */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Vår verksamhet
              </h2>
              <div className="space-y-4 text-slate-700 leading-relaxed">
                <p>
                  <strong>Svenska Kickboxningsförbundet (SKF)</strong> är specialidrottsförbund under Riksidrottsförbundet och arbetar för att utveckla kickboxning i Sverige.
                </p>
                <p>
                  Vi ansvarar för landslag, utbildningar, tävlingar och stöd till föreningar och utövare runt om i landet.
                </p>
                <p>
                  Genom Strategi 2030 arbetar vi för en modern, digital plattform som samlar alla delar av verksamheten.
                </p>
              </div>
            </section>

            {/* Organization */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Organisation
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Förbundsstyrelse
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Förbundsstyrelsen ansvarar för den övergripande verksamheten och strategi.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Kommittéer
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Specialist-kommittéer driver utveckling inom sina respektive områden.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Föreningar
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Lokala föreningar driver träning och tävlingsverksamhet över hela landet.
                  </p>
                </div>
                <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-3">
                    Landslag
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    Våra landslag representerar Sverige vid internationella tävlingar.
                  </p>
                </div>
              </div>
            </section>

            {/* Strategy 2030 */}
            <section>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Strategi 2030
              </h2>
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-8">
                <p className="text-slate-700 leading-relaxed mb-4">
                  Vår vision är att bli ett modernt, digitalt förbund som ger bästa möjliga service till alla medlemmar – från nybörjare till elitutövare.
                </p>
                <ul className="space-y-2 text-slate-700">
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Digital plattform för alla användarbehov</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Utveckling av utbildningar och tränare</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Stärkt internationell närvaro</span>
                  </li>
                  <li className="flex gap-3">
                    <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Ökat stöd till föreningar</span>
                  </li>
                </ul>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Snabblänkar
              </h3>
              <div className="space-y-2">
                <Link
                  href="/nyheter"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Senaste nyheterna
                </Link>
                <Link
                  href="/valj-roll"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Utforska portalen (demo)
                </Link>
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  Tillbaka till startsidan
                </Link>
              </div>
            </div>

            {/* Contact Info */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Kontakt
              </h3>
              <div className="space-y-3 text-sm text-slate-700">
                <p>
                  <strong>Svenska Kickboxningsförbundet</strong>
                </p>
                <p className="text-slate-600">
                  Kontaktinformation kommer att finnas tillgänglig via plattformen.
                </p>
              </div>
            </div>

            {/* POC Notice */}
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
              <div className="flex gap-3">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="font-semibold text-amber-900 text-sm mb-1">
                    Konceptdemonstration
                  </h4>
                  <p className="text-xs text-amber-800 leading-relaxed">
                    Detta är exempelinnehåll för att visa strukturen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-slate-200 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              <p>SKF Digital Plattform · Strategi 2030</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-200 text-slate-600 text-xs rounded-full">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Konceptdemonstration (POC)
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
