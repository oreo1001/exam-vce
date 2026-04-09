'use client'

import Link from 'next/link'

export default function SubjectSelectPage() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff3621] rounded-2xl mb-4 shadow-lg">
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Databricks Quiz
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">시험 과목을 선택하세요</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/de" className="group block">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-[#ff3621] dark:hover:border-[#ff3621] transition-all duration-200 group-hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[#ff3621]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Data Engineer Associate
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Databricks Certified Data Engineer Associate
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">156문제</span>
                <span className="text-xs bg-red-50 dark:bg-red-950 text-red-500 dark:text-red-400 px-2 py-0.5 rounded-full font-mono">v14.95</span>
                <span className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-500 dark:text-blue-400 px-2 py-0.5 rounded-full">한국어</span>
              </div>
            </div>
          </Link>
          <Link href="/de-new" className="group block">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-amber-500 dark:hover:border-amber-500 transition-all duration-200 group-hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-red-50 dark:bg-red-950 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[#ff3621]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Data Engineer Associate
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                Databricks Certified Data Engineer Associate
              </p>
              <div className="flex items-center gap-1.5 mb-3">
                <svg className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span className="text-xs text-amber-600 dark:text-amber-400">AI 번역본 · 이미지 없음 · 실제 덤프와 다를 수 있음</span>
              </div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">228문제</span>
                <span className="text-xs bg-red-50 dark:bg-red-950 text-red-500 dark:text-red-400 px-2 py-0.5 rounded-full font-mono">v15.65</span>
                <span className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-500 dark:text-blue-400 px-2 py-0.5 rounded-full">한국어</span>
              </div>
            </div>
          </Link>

          <Link href="/genai" className="group block">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-purple-500 dark:hover:border-purple-500 transition-all duration-200 group-hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-purple-100 dark:bg-purple-900 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Generative AI Engineer Associate
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Databricks Certified Generative AI Engineer Associate
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">63문제</span>
                <span className="text-xs bg-red-50 dark:bg-red-950 text-red-500 dark:text-red-400 px-2 py-0.5 rounded-full font-mono">v12.65</span>
                <span className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-500 dark:text-blue-400 px-2 py-0.5 rounded-full">한국어</span>
              </div>
            </div>
          </Link>

          <Link href="/aie" className="group block">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-200 group-hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-blue-100 dark:bg-blue-900 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                Generative AI Engineer Associate
              </h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Databricks Certified Generative AI Engineer Associate
              </p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">75문제</span>
                <span className="text-xs bg-red-50 dark:bg-red-950 text-red-500 dark:text-red-400 px-2 py-0.5 rounded-full font-mono">v12.95</span>
                <span className="text-xs bg-green-50 dark:bg-green-950 text-green-600 dark:text-green-400 px-2 py-0.5 rounded-full">English</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
