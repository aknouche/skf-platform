'use client'

import { useRole } from '@/lib/role-context'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { RoleContent } from '@/components/role-content'
import Link from 'next/link'

const roleData: Record<string, { name: string; color: string; bgColor: string }> = {
  forening: { name: 'Förening', color: 'text-blue-700', bgColor: 'bg-blue-100' },
  utovare: { name: 'Utövare', color: 'text-green-700', bgColor: 'bg-green-100' },
  tranare: { name: 'Tränare', color: 'text-purple-700', bgColor: 'bg-purple-100' },
  domare: { name: 'Domare', color: 'text-orange-700', bgColor: 'bg-orange-100' },
  landslag: { name: 'Landslag', color: 'text-red-700', bgColor: 'bg-red-100' },
}

export default function Portal() {
  const { role, setRole } = useRole()
  const router = useRouter()

  useEffect(() => {
    if (!role) {
      router.push('/valj-roll')
    }
  }, [role, router])

  if (!role) {
    return null
  }

  const currentRole = roleData[role]

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <Link href="/" className="text-slate-400 hover:text-slate-600 transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </Link>
              <div>
                <h1 className="text-xl font-bold text-slate-900">
                  SKF Plattform
                </h1>
                <div className="flex items-center gap-2 mt-0.5">
                  <span className="text-sm text-slate-600">Aktiv roll:</span>
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${currentRole.bgColor} ${currentRole.color}`}>
                    <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                    {currentRole.name}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setRole(null)
                  router.push('/valj-roll')
                }}
                className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 bg-white border border-slate-300 rounded-lg hover:bg-slate-50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Byt roll
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-12">
        <RoleContent role={role} />
      </main>

      {/* Footer */}
      <footer className="mt-20 py-8 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-slate-500">
              <p>SKF Digital Plattform · Strategi 2030</p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-slate-100 text-slate-600 text-xs rounded-full">
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
