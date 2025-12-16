import { MainNav } from '@/components/main-nav'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <MainNav />

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50 border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-6 py-20 text-center">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            Konceptdemonstration
          </div>

          <h1 className="text-6xl font-bold text-slate-900 mb-6 tracking-tight">
            SKF Digital Plattform
          </h1>

          <p className="text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            En gemensam digital identitet.<br />
            Olika portaler beroende på roll.
          </p>

          <Link
            href="/valj-roll"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-4 rounded-xl transition-all shadow-lg shadow-blue-600/20 hover:shadow-xl hover:shadow-blue-600/30 hover:-translate-y-0.5"
          >
            Utforska demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>

      {/* Vision Section */}
      <div className="max-w-5xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Strategi 2030
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            En plattform som anpassar sig efter din roll i svensk kickboxning
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-8">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">En identitet</h3>
            <p className="text-slate-600">
              Varje person har en gemensam digital identitet
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Många roller</h3>
            <p className="text-slate-600">
              Samma person kan ha flera roller i organisationen
            </p>
          </div>

          <div className="text-center p-8">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">Anpassat innehåll</h3>
            <p className="text-slate-600">
              Portalen visar innehåll baserat på din aktiva roll
            </p>
          </div>
        </div>

        {/* Examples */}
        <div className="bg-slate-50 rounded-2xl p-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Exempel på roller
          </h3>

          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                F
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Förening</h4>
                <p className="text-slate-600">Administration, medlemshantering och ekonomiska rapporter</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                U
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Utövare</h4>
                <p className="text-slate-600">Tävlingsresultat, personlig utveckling och träningsschema</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                T
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Tränare</h4>
                <p className="text-slate-600">Utbildningar, träningsverktyg och uppföljning av utövare</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-orange-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                D
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Domare</h4>
                <p className="text-slate-600">Certifiering, matchtilldelning och regeluppdateringar</p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center flex-shrink-0 text-white font-bold">
                L
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-1">Landslag</h4>
                <p className="text-slate-600">Landslagstrupp, internationella tävlingar och stöd</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-slate-900 text-white py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Redo att utforska konceptet?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Testa hur portalen anpassar sig efter olika roller
          </p>
          <Link
            href="/valj-roll"
            className="inline-flex items-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-semibold px-10 py-4 rounded-xl transition-all"
          >
            Starta demo
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </main>
  );
}
