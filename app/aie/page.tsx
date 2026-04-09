'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { aieStorage } from '@/lib/storage'

export default function AIEHomePage() {
  const [stats, setStats] = useState({ answered: 0, correct: 0, total: 75 })
  const [wrongCount, setWrongCount] = useState(0)

  useEffect(() => {
    setStats(aieStorage.getStudyStats(75))
    setWrongCount(aieStorage.getWrongQuestions().length)
  }, [])

  const pct = stats.answered > 0 ? Math.round((stats.correct / stats.answered) * 100) : 0

  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">← 과목 선택</Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 rounded-2xl mb-4 shadow-lg">
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Databricks AI Engineer Associate
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">문제집 · 75문제 (English)</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 mb-8 shadow-sm">
          <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-4">학습 현황</h2>
          <div className="grid grid-cols-3 gap-4 text-center mb-4">
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {stats.answered}<span className="text-sm font-normal text-gray-400">/{stats.total}</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">풀이 완료</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.correct}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">정답</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900 dark:text-white">
                {pct}<span className="text-sm font-normal text-gray-400">%</span>
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">정답률</div>
            </div>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full transition-all duration-500" style={{ width: `${(stats.answered / stats.total) * 100}%` }} />
          </div>
          <p className="text-xs text-gray-400 mt-2 text-right">{stats.total - stats.answered}문제 남음</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 mb-6">
          <Link href="/aie/study" className="group block">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 group-hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-sky-100 dark:bg-sky-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-sky-600 dark:text-sky-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">학습 모드</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">한 문제씩 차근차근</p>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 즉각적인 정답 피드백</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 해설 확인 가능</li>
                <li className="flex items-center gap-2"><span className="text-green-500">✓</span> 진행 현황 저장</li>
              </ul>
            </div>
          </Link>

          <Link href="/aie/test" className="group block">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 group-hover:scale-[1.02]">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900 flex items-center justify-center">
                  <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">시험 모드</h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">실전처럼 풀어보기</p>
                </div>
              </div>
              <ul className="space-y-1 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> 타이머 카운트다운</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> VCE 스타일 성적표</li>
                <li className="flex items-center gap-2"><span className="text-orange-500">✓</span> 문제 범위 선택 가능</li>
              </ul>
            </div>
          </Link>
        </div>

        {wrongCount > 0 && (
          <Link href="/aie/wrong" className="block">
            <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-2xl p-4 flex items-center justify-between hover:bg-red-100 dark:hover:bg-red-900 transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-100 dark:bg-red-900 flex items-center justify-center">
                  <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <div>
                  <p className="font-semibold text-red-700 dark:text-red-400">오답 노트</p>
                  <p className="text-sm text-red-600 dark:text-red-500">{wrongCount}개 문제 복습 필요</p>
                </div>
              </div>
              <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </Link>
        )}
      </div>
    </div>
  )
}
