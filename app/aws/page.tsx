import Link from 'next/link'
import { lockAws } from './login/actions'

export default function AwsSubjectPage() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">← 플랫폼 선택</Link>
          <form action={lockAws}>
            <button type="submit" className="text-xs text-gray-400 hover:text-red-500 dark:hover:text-red-400 transition-colors flex items-center gap-1">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              다시 잠그기
            </button>
          </form>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#ff9900] rounded-2xl mb-4 shadow-lg">
            <svg className="w-9 h-9 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">AWS Quiz</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">시험 과목을 선택하세요</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/aws/dop" className="group block">
            <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-[#ff9900] dark:hover:border-[#ff9900] transition-all duration-200 group-hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-orange-50 dark:bg-orange-950 flex items-center justify-center mb-5">
                <svg className="w-8 h-8 text-[#ff9900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2">DevOps Engineer Professional</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">AWS Certified DevOps Engineer - Professional</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-2 py-0.5 rounded-full">505문제</span>
                <span className="text-xs bg-orange-50 dark:bg-orange-950 text-orange-600 dark:text-orange-400 px-2 py-0.5 rounded-full font-mono">DOP-C02</span>
                <span className="text-xs bg-blue-50 dark:bg-blue-950 text-blue-500 dark:text-blue-400 px-2 py-0.5 rounded-full">한국어</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
