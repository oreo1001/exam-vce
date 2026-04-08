'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { SubjectStorage } from '@/lib/storage'

interface ResultsClientProps {
  storage: SubjectStorage
  examTitle: string
  wrongHref: string
  retryHref: string
  studyHref: string
}

export default function ResultsClient({ storage, examTitle, wrongHref, retryHref, studyHref }: ResultsClientProps) {
  const router = useRouter()
  const [results, setResults] = useState<ReturnType<typeof storage.getTestResults>>(null)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setResults(storage.getTestResults())
    setMounted(true)
  }, [storage])

  if (!mounted) {
    return <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center"><div className="text-gray-400">로딩 중...</div></div>
  }

  if (!results) {
    return (
      <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <p className="text-gray-500 dark:text-gray-400 mb-4">시험 결과가 없습니다.</p>
          <Link href={retryHref} className="px-5 py-2 rounded-xl bg-[#ff3621] text-white font-semibold hover:bg-[#cc2b1a] transition-colors">시험 보러 가기</Link>
        </div>
      </div>
    )
  }

  const total = results.total
  const answered = Object.keys(results.answers).length
  const correct = Object.values(results.answers).filter((a) => a.correct).length
  const wrong = answered - correct
  const score1000 = total > 0 ? Math.round((correct / total) * 1000) : 0
  const passingScore = 800
  const passed = score1000 >= passingScore

  const elapsed = results.elapsed
  const elapsedStr = [
    Math.floor(elapsed / 3600) > 0 ? `${Math.floor(elapsed / 3600)}시간` : null,
    Math.floor((elapsed % 3600) / 60) > 0 ? `${Math.floor((elapsed % 3600) / 60)}분` : null,
    `${elapsed % 60}초`,
  ].filter(Boolean).join(' ')

  const wrongNums = Object.entries(results.answers)
    .filter(([, a]) => !a.correct)
    .map(([num]) => Number(num))

  const handleReviewWrong = () => {
    storage.setWrongQuestions(wrongNums)
    router.push(wrongHref)
  }

  const yourPct = (score1000 / 1000) * 100
  const passPct = (passingScore / 1000) * 100

  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
          <div className="bg-gray-900 dark:bg-gray-950 px-6 py-6 text-white">
            <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Certification Exam</p>
            <h1 className="text-2xl font-bold mb-1">Examination Score Report</h1>
            <p className="text-gray-400 text-sm">{examTitle}</p>
          </div>

          <div className={`px-6 py-4 flex items-center gap-4 ${passed ? 'bg-green-50 dark:bg-green-950 border-b border-green-200 dark:border-green-800' : 'bg-red-50 dark:bg-red-950 border-b border-red-200 dark:border-red-800'}`}>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0 ${passed ? 'bg-green-500' : 'bg-red-500'}`}>
              {passed ? (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
              ) : (
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
              )}
            </div>
            <div>
              <p className={`text-2xl font-bold ${passed ? 'text-green-700 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>{passed ? 'PASS' : 'FAIL'}</p>
              <p className={`text-sm ${passed ? 'text-green-600 dark:text-green-500' : 'text-red-500 dark:text-red-500'}`}>{passed ? '합격! 축하합니다!' : `불합격. 합격선 ${passingScore}점 미달`}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-0 divide-x divide-y divide-gray-100 dark:divide-gray-800">
            {[
              { label: '총 문제', value: total, sub: '문제' },
              { label: '답변', value: answered, sub: '문제' },
              { label: '정답', value: correct, sub: '문제', color: 'text-green-600 dark:text-green-400' },
              { label: '오답', value: wrong, sub: '문제', color: 'text-red-500 dark:text-red-400' },
            ].map((item) => (
              <div key={item.label} className="px-4 py-4 text-center">
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">{item.label}</p>
                <p className={`text-2xl font-bold ${item.color ?? 'text-gray-900 dark:text-white'}`}>
                  {item.value}<span className="text-sm font-normal text-gray-400 ml-0.5">{item.sub}</span>
                </p>
              </div>
            ))}
          </div>

          <div className="px-6 py-6 border-t border-gray-100 dark:border-gray-800">
            <h2 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4">점수</h2>
            <div className="mb-4">
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span>내 점수</span>
                <span className={`font-bold text-sm ${passed ? 'text-green-600 dark:text-green-400' : 'text-red-500 dark:text-red-400'}`}>{score1000} / 1000</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 overflow-hidden relative">
                <div className={`h-full rounded-full flex items-center justify-end pr-2 transition-all duration-700 ${passed ? 'bg-green-500' : 'bg-red-500'}`} style={{ width: `${yourPct}%` }}>
                  {yourPct > 15 && <span className="text-white text-xs font-bold">{score1000}</span>}
                </div>
                <div className="absolute top-0 bottom-0 w-0.5 bg-yellow-400" style={{ left: `${passPct}%` }}>
                  <div className="absolute -top-5 left-1 text-xs text-yellow-500 dark:text-yellow-400 whitespace-nowrap font-medium">합격 {passingScore}</div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1">
                <span>합격 기준</span><span className="font-medium">800 / 1000 (80%)</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div className="h-full rounded-full bg-yellow-400" style={{ width: `${passPct}%` }} />
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              소요 시간: <span className="font-medium text-gray-700 dark:text-gray-300">{elapsedStr}</span>
            </div>
          </div>

          <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600 dark:text-gray-400">정답률</span>
              <span className="font-bold text-gray-900 dark:text-white">{total > 0 ? Math.round((correct / total) * 100) : 0}%</span>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mt-2">
              <div className={`h-full rounded-full ${passed ? 'bg-green-500' : 'bg-[#ff3621]'}`} style={{ width: `${total > 0 ? (correct / total) * 100 : 0}%` }} />
            </div>
          </div>

          <div className="px-6 py-5 border-t border-gray-100 dark:border-gray-800 flex flex-col sm:flex-row gap-3">
            {wrongNums.length > 0 && (
              <button onClick={handleReviewWrong}
                className="flex-1 py-2.5 rounded-xl font-semibold text-sm bg-red-50 dark:bg-red-950 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 hover:bg-red-100 dark:hover:bg-red-900 transition-colors">
                틀린 문제 보기 ({wrongNums.length})
              </button>
            )}
            <button onClick={() => router.push(retryHref)}
              className="flex-1 py-2.5 rounded-xl font-semibold text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
              다시 시험
            </button>
            <Link href={studyHref} className="flex-1 py-2.5 rounded-xl font-semibold text-sm text-center bg-[#ff3621] text-white hover:bg-[#cc2b1a] transition-colors">
              학습 모드로
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
