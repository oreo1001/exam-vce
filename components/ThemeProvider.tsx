'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { User } from '@supabase/supabase-js'
import { createClient } from '@/lib/supabase'
import { setCurrentUserId } from '@/lib/currentUser'
import { syncDbToLocal } from '@/lib/dbStorage'

interface ThemeContextType {
  dark: boolean
  toggle: () => void
}

const ThemeContext = createContext<ThemeContextType>({ dark: true, toggle: () => {} })

export function useTheme() {
  return useContext(ThemeContext)
}

export default function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [dark, setDark] = useState(true)
  const [mounted, setMounted] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const saved = localStorage.getItem('dark_mode')
    const isDark = saved !== null ? saved === 'true' : true
    setDark(isDark)
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!mounted) return
    const root = document.documentElement
    root.classList.toggle('dark', dark)
    localStorage.setItem('dark_mode', String(dark))
  }, [dark, mounted])

  // 인증 상태 초기화 및 구독
  useEffect(() => {
    const supabase = createClient()

    supabase.auth.getSession().then(({ data: { session } }) => {
      const u = session?.user ?? null
      setUser(u)
      setCurrentUserId(u?.id ?? null)
      if (u) syncDbToLocal(u.id)
    })

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      const u = session?.user ?? null
      setUser(u)
      setCurrentUserId(u?.id ?? null)
      if (u) syncDbToLocal(u.id)
    })

    return () => subscription.unsubscribe()
  }, [])

  const toggle = () => setDark((d) => !d)

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <Nav dark={dark} toggle={toggle} user={user} />
      <main className="flex-1 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </main>
    </ThemeContext.Provider>
  )
}

function Nav({ dark, toggle, user }: { dark: boolean; toggle: () => void; user: User | null }) {
  const pathname = usePathname()

  const isGenAI = pathname.startsWith('/genai')
  const isAIE = pathname.startsWith('/aie')
  const isDeNew = pathname.startsWith('/de-new')
  const isDE =
    pathname.startsWith('/de') ||
    pathname.startsWith('/study') ||
    pathname.startsWith('/test') ||
    pathname.startsWith('/wrong') ||
    pathname.startsWith('/results')

  async function handleLogin() {
    const supabase = createClient()
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: window.location.href,
        queryParams: { prompt: 'select_account' },
      },
    })
  }

  async function handleLogout() {
    const supabase = createClient()
    await supabase.auth.signOut()
  }

  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-bold text-lg text-[#ff3621] hover:text-[#cc2b1a] transition-colors">
            Databricks Quiz
          </Link>

          {isGenAI && (
            <div className="hidden sm:flex items-center gap-1">
              <span className="text-xs bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-full font-medium mr-1">GenAI</span>
              <Link href="/genai/study" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">학습 모드</Link>
              <Link href="/genai/test" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">시험 모드</Link>
              <Link href="/genai/wrong" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">오답 노트</Link>
            </div>
          )}

          {isAIE && (
            <div className="hidden sm:flex items-center gap-1">
              <span className="text-xs bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-full font-medium mr-1">AIE</span>
              <Link href="/aie/study" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">학습 모드</Link>
              <Link href="/aie/test" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">시험 모드</Link>
              <Link href="/aie/wrong" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">오답 노트</Link>
            </div>
          )}

          {isDeNew && (
            <div className="hidden sm:flex items-center gap-1">
              <span className="text-xs bg-amber-100 dark:bg-amber-900 text-amber-700 dark:text-amber-300 px-2 py-0.5 rounded-full font-medium mr-1">DE v15</span>
              <Link href="/de-new/study" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">학습 모드</Link>
              <Link href="/de-new/test" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">시험 모드</Link>
              <Link href="/de-new/wrong" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">오답 노트</Link>
            </div>
          )}

          {isDE && !isGenAI && !isAIE && !isDeNew && (
            <div className="hidden sm:flex items-center gap-1">
              <span className="text-xs bg-red-50 dark:bg-red-950 text-[#ff3621] px-2 py-0.5 rounded-full font-medium mr-1">DE</span>
              <Link href="/study" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">학습 모드</Link>
              <Link href="/test" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">시험 모드</Link>
              <Link href="/wrong" className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors px-2 py-1">오답 노트</Link>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2">
          {/* 다크모드 토글 */}
          <button
            onClick={toggle}
            className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {dark ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>

          {/* 로그인/유저 영역 */}
          {user ? (
            <div className="flex items-center gap-2">
              {user.user_metadata?.avatar_url ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={user.user_metadata.avatar_url}
                  alt="프로필"
                  className="w-8 h-8 rounded-full border border-gray-200 dark:border-gray-700"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-[#ff3621] flex items-center justify-center text-white text-sm font-bold">
                  {(user.user_metadata?.name ?? user.email ?? '?')[0].toUpperCase()}
                </div>
              )}
              <button
                onClick={handleLogout}
                className="text-xs text-gray-500 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white transition-colors"
              >
                로그아웃
              </button>
            </div>
          ) : (
            <button
              onClick={handleLogin}
              className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300 shadow-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
              </svg>
              구글 로그인
            </button>
          )}
        </div>
      </div>
    </nav>
  )
}
