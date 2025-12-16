import { type Role } from '@/lib/role-context'

interface Section {
  title: string
  items: string[]
}

interface RoleContentProps {
  role: Role
}

const roleContent: Record<Exclude<Role, null>, { title: string; description: string; sections: Section[] }> = {
  forening: {
    title: 'Föreningsportal',
    description: 'Här hanterar föreningen sina medlemmar, administration och verksamhet.',
    sections: [
      {
        title: 'Medlemshantering',
        items: [
          'Registrera nya medlemmar',
          'Uppdatera medlemsinformation',
          'Exportera medlemslistor',
          'Hantera medlemsavgifter',
        ],
      },
      {
        title: 'Administration',
        items: [
          'Verksamhetsberättelser',
          'Ekonomiska rapporter',
          'Styrelseprotokoll',
          'Kontakt med förbundet',
        ],
      },
      {
        title: 'Tävlingar & Event',
        items: [
          'Anmäla föreningen till tävlingar',
          'Se kommande events',
          'Resultat från tidigare tävlingar',
        ],
      },
    ],
  },
  utovare: {
    title: 'Utövarportal',
    description: 'Din personliga portal för träning, tävling och utveckling.',
    sections: [
      {
        title: 'Min profil',
        items: [
          'Personlig information',
          'Licenser och certifikat',
          'Medlemskap',
          'Kontaktuppgifter',
        ],
      },
      {
        title: 'Tävlingsresultat',
        items: [
          'Mina matcher',
          'Placeringar',
          'Statistik',
          'Kommande tävlingar',
        ],
      },
      {
        title: 'Träning & Utveckling',
        items: [
          'Träningsschema',
          'Personliga mål',
          'Teknisk utveckling',
          'Fysiska tester',
        ],
      },
    ],
  },
  tranare: {
    title: 'Tränarportal',
    description: 'Verktyg och resurser för dig som tränar kickboxare.',
    sections: [
      {
        title: 'Utbildningar',
        items: [
          'Tränarutbildningar',
          'Fortbildningar',
          'Certifieringar',
          'Kursmaterial',
        ],
      },
      {
        title: 'Träningsverktyg',
        items: [
          'Träningsprogram',
          'Övningsbibliotek',
          'Tekniska instruktioner',
          'Träningsplanering',
        ],
      },
      {
        title: 'Mina utövare',
        items: [
          'Översikt över aktiva utövare',
          'Utvecklingsplaner',
          'Tävlingsanmälan',
          'Resultatuppföljning',
        ],
      },
    ],
  },
  domare: {
    title: 'Domarportal',
    description: 'För dig som dömer matcher och arbetar med domarutveckling.',
    sections: [
      {
        title: 'Certifiering',
        items: [
          'Domarlicenser',
          'Förnyelse av licenser',
          'Domarutbildningar',
          'Regeluppdateringar',
        ],
      },
      {
        title: 'Tilldelning',
        items: [
          'Kommande matcher',
          'Tillgänglighet',
          'Matchprotokoll',
          'Reserapporter',
        ],
      },
      {
        title: 'Utveckling',
        items: [
          'Videogranskning',
          'Feedback från kollegor',
          'Regeländringar',
          'Internationella standarder',
        ],
      },
    ],
  },
  landslag: {
    title: 'Landslagsportal',
    description: 'Information och verktyg för landslagsverksamheten.',
    sections: [
      {
        title: 'Landslagstrupp',
        items: [
          'Aktuell trupp',
          'Uttagna utövare',
          'Träningsläger',
          'Landslagsmöten',
        ],
      },
      {
        title: 'Internationella tävlingar',
        items: [
          'VM och EM',
          'Kvalificeringar',
          'Internationella cuper',
          'Ranking',
        ],
      },
      {
        title: 'Stöd & Resurser',
        items: [
          'Stipendier',
          'Resebidrag',
          'Träningsstöd',
          'Kontakt med ledare',
        ],
      },
    ],
  },
}

export function RoleContent({ role }: RoleContentProps) {
  if (!role) {
    return (
      <div className="text-center py-12">
        <p className="text-slate-500">Ingen roll vald</p>
      </div>
    )
  }

  const content = roleContent[role]

  return (
    <div className="space-y-10">
      {/* Header */}
      <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
        <h2 className="text-4xl font-bold text-slate-900 mb-3">
          {content.title}
        </h2>
        <p className="text-lg text-slate-600">{content.description}</p>
      </div>

      {/* Sections Grid */}
      <div>
        <h3 className="text-xl font-semibold text-slate-900 mb-6">
          Tillgängliga funktioner
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {content.sections.map((section, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-slate-200 transition-colors">
                  <svg className="w-5 h-5 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-slate-900 flex-1">
                  {section.title}
                </h3>
              </div>
              <ul className="space-y-2.5">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-slate-600 flex items-start gap-2.5 text-sm"
                  >
                    <svg className="w-4 h-4 text-slate-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Info Notice */}
      <div className="bg-amber-50 border border-amber-200 rounded-xl p-6">
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <svg className="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div>
            <h4 className="font-semibold text-amber-900 mb-1">Konceptdemonstration</h4>
            <p className="text-sm text-amber-800 leading-relaxed">
              Detta är en visualisering av hur innehållet skulle kunna struktureras per roll. Ingen av funktionerna är implementerade ännu – målet är att visa konceptet med rollbaserade portaler.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
