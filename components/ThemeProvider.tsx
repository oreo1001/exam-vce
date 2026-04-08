'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import Link from 'next/link'

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

  const toggle = () => setDark((d) => !d)

  return (
    <ThemeContext.Provider value={{ dark, toggle }}>
      <Nav dark={dark} toggle={toggle} />
      <main className="flex-1 bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100">
        {children}
      </main>
    </ThemeContext.Provider>
  )
}

function Nav({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  return (
    <nav className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-bold text-lg text-[#ff3621] hover:text-[#cc2b1a] transition-colors"
          >
            Databricks Quiz
          </Link>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <Link
              href="/study"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              학습 모드
            </Link>
            <Link
              href="/test"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              시험 모드
            </Link>
            <Link
              href="/wrong"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              오답 노트
            </Link>
          </div>
        </div>
        <button
          onClick={toggle}
          className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-gray-700 dark:text-gray-300"
          aria-label="Toggle dark mode"
        >
          {dark ? (
            /* 다크모드 중 → 클릭하면 라이트로: 태양 아이콘 */
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          ) : (
            /* 라이트모드 중 → 클릭하면 다크로: 달 아이콘 */
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
              />
            </svg>
          )}
        </button>
      </div>
    </nav>
  )
}
