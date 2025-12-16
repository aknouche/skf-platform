'use client'

import { useRole, type Role } from '@/lib/role-context'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const roles = [
  {
    id: 'forening' as Role,
    name: 'Förening',
    description: 'Administration och medlemshantering',
    icon: 'F',
    gradient: 'from-blue-500 to-blue-600',
    hoverGradient: 'hover:from-blue-600 hover:to-blue-700',
  },
  {
    id: 'utovare' as Role,
    name: 'Utövare',
    description: 'Tävlingsresultat och personlig utveckling',
    icon: 'U',
    gradient: 'from-green-500 to-green-600',
    hoverGradient: 'hover:from-green-600 hover:to-green-700',
  },
  {
    id: 'tranare' as Role,
    name: 'Tränare',
    description: 'Utbildningar och träningsverktyg',
    icon: 'T',
    gradient: 'from-purple-500 to-purple-600',
    hoverGradient: 'hover:from-purple-600 hover:to-purple-700',
  },
  {
    id: 'domare' as Role,
    name: 'Domare',
    description: 'Certifiering och domartilldelning',
    icon: 'D',
    gradient: 'from-orange-500 to-orange-600',
    hoverGradient: 'hover:from-orange-600 hover:to-orange-700',
  },
  {
    id: 'landslag' as Role,
    name: 'Landslag',
    description: 'Landslagsverksamhet och internationella tävlingar',
    icon: 'L',
    gradient: 'from-red-500 to-red-600',
    hoverGradient: 'hover:from-red-600 hover:to-red-700',
  },
]

export default function ValjRoll() {
  const { setRole } = useRole()
  const router = useRouter()

  const handleRoleSelect = (roleId: Role) => {
    setRole(roleId)
    router.push('/portal')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-50">
      {/* Header with navigation */}
      <div className="border-b border-slate-200 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Tillbaka till startsidan
            </Link>
            <Link
              href="/nyheter"
              className="text-sm text-slate-600 hover:text-slate-900 transition-colors"
            >
              Nyheter
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-800 text-sm font-medium rounded-full mb-6">
            Demo · Simulerad inloggning
          </div>
          <h1 className="text-5xl font-bold text-slate-900 mb-4">
            Välj din roll
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Välj vilken roll du vill uppleva portalen som. I verkligheten skulle du logga in med din identitet och få tillgång till alla dina roller.
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {roles.map((role) => (
            <button
              key={role.id}
              onClick={() => handleRoleSelect(role.id)}
              className={`group relative bg-gradient-to-br ${role.gradient} ${role.hoverGradient} text-white p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 text-left overflow-hidden`}
            >
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>

              {/* Icon */}
              <div className="relative mb-4">
                <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-bold mb-4 group-hover:scale-110 transition-transform">
                  {role.icon}
                </div>
              </div>

              {/* Content */}
              <h2 className="text-2xl font-bold mb-3 relative">{role.name}</h2>
              <p className="text-white/90 relative leading-relaxed">{role.description}</p>

              {/* Arrow indicator */}
              <div className="absolute bottom-6 right-6 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Info Box */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <div className="flex gap-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Om denna demo</h3>
              <p className="text-slate-600 leading-relaxed">
                I en verklig implementation skulle du logga in en gång med din digitala identitet. Systemet skulle sedan automatiskt visa alla roller du har tillgång till. Du kan växla mellan roller utan att logga in igen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
