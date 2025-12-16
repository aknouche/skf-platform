import { MainNav } from '@/components/main-nav'
import Link from 'next/link'

const newsItems = [
  {
    id: 1,
    date: '2025-01-15',
    title: 'Ny utbildningssatsning för tränare',
    excerpt: 'SKF lanserar en omfattande utbildningsplan för att stärka tränarnas kompetens. Första kursen startar i mars 2025.',
    category: 'Utbildning',
  },
  {
    id: 2,
    date: '2025-01-10',
    title: 'SM 2025 - Datum och plats bekräftade',
    excerpt: 'Svenska Mästerskapen i kickboxning äger rum 15-16 november i Malmö Arena. Anmälan öppnar i april.',
    category: 'Tävling',
  },
  {
    id: 3,
    date: '2025-01-05',
    title: 'Nya medlemsförmåner införs',
    excerpt: 'Alla aktiva medlemmar får nu tillgång till digitala träningsresurser och rabatter hos våra samarbetspartners.',
    category: 'Medlemskap',
  },
  {
    id: 4,
    date: '2024-12-20',
    title: 'Framgångsrikt EM för svenska landslaget',
    excerpt: 'Sveriges kickboxare tog hem 3 guld, 2 silver och 4 brons vid EM i Portugal. Ett historiskt resultat!',
    category: 'Landslag',
  },
]

export default function Nyheter() {
  return (
    <div className="min-h-screen bg-white">
      <MainNav />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6 py-16 text-center">
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Nyheter & Förbundet
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Information och nyheter från Svenska Kickboxningsförbundet
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content - News */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Senaste nyheterna
              </h2>

              <div className="space-y-6">
                {newsItems.map((item) => (
                  <article
                    key={item.id}
                    className="bg-white border border-slate-200 rounded-xl p-6 hover:border-slate-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="inline-flex items-center px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                            {item.category}
                          </span>
                          <time className="text-sm text-slate-500">
                            {new Date(item.date).toLocaleDateString('sv-SE', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric'
                            })}
                          </time>
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-slate-600 leading-relaxed">
                          {item.excerpt}
                        </p>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>

            {/* Admin Notice */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <svg className="w-6 h-6 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-900 mb-2">
                    Administration av innehåll
                  </h4>
                  <p className="text-sm text-slate-600 mb-4 leading-relaxed">
                    Nyheter och information administreras av behöriga personer på förbundet via inloggning.
                  </p>
                  <button
                    disabled
                    className="inline-flex items-center gap-2 px-4 py-2 bg-slate-200 text-slate-500 text-sm font-medium rounded-lg cursor-not-allowed"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    Logga in (kommer senare)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* About Federation */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <h3 className="text-xl font-bold text-slate-900 mb-4">
                Om förbundet
              </h3>
              <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
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
            </div>

            {/* Quick Links */}
            <div className="bg-white rounded-xl p-6 border border-slate-200">
              <h3 className="text-lg font-semibold text-slate-900 mb-4">
                Snabblänkar
              </h3>
              <div className="space-y-2">
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
                    Detta är exempelinnehåll för att visa hur nyheter skulle kunna presenteras.
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
