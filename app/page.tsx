import Link from 'next/link'

export default function PlatformSelectPage() {
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center py-12 px-4">
      <div className="max-w-2xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">Exam VCE</h1>
          <p className="text-gray-500 dark:text-gray-400 text-lg">플랫폼을 선택하세요</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          <Link href="/databricks" className="group block">
            <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-[#ff3621] dark:hover:border-[#ff3621] transition-all duration-200 group-hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-2xl bg-[#ff3621] flex items-center justify-center mb-5 shadow">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Databricks</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">Data Engineer · Generative AI</p>
            </div>
          </Link>

          <Link href="/aws" className="group block">
            <div className="h-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm hover:shadow-lg hover:border-[#ff9900] dark:hover:border-[#ff9900] transition-all duration-200 group-hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-5">
                <div className="w-14 h-14 rounded-2xl bg-[#ff9900] flex items-center justify-center shadow">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                  </svg>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-label="잠김">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">AWS</h2>
              <p className="text-sm text-gray-500 dark:text-gray-400">DevOps Engineer Professional</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
