'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import QuestionCard from '@/components/QuestionCard'
import Timer from '@/components/Timer'
import { questions } from '@/lib/questions'
import { setTestResults, StudyAnswer } from '@/lib/storage'

type Phase = 'setup' | 'quiz'

export default function TestPage() {
  const router = useRouter()
  const [phase, setPhase] = useState<Phase>('setup')

  // Setup options
  const [rangeStart, setRangeStart] = useState(1)
  const [rangeEnd, setRangeEnd] = useState(156)
  const [timerMinutes, setTimerMinutes] = useState(120)

  // Quiz state
  const [quizQuestions, setQuizQuestions] = useState(questions)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<{ [num: number]: StudyAnswer }>({})
  const [remainingSeconds, setRemainingSeconds] = useState(120 * 60)
  const [totalSeconds, setTotalSeconds] = useState(120 * 60)
  const [timerRunning, setTimerRunning] = useState(false)
  const [startTime, setStartTime] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  const selected = answers[quizQuestions[currentIndex]?.num]?.selected ?? []

  const handleSelect = (letter: string) => {
    if (submitted) return
    const q = quizQuestions[currentIndex]
    const isMultiple = q.correct_list.length > 1
    setAnswers((prev) => {
      const current = prev[q.num]?.selected ?? []
      let next: string[]
      if (isMultiple) {
        next = current.includes(letter) ? current.filter((l) => l !== letter) : [...current, letter]
      } else {
        next = current.includes(letter) ? [] : [letter]
      }
      return {
        ...prev,
        [q.num]: { selected: next, correct: next.sort().join('') === [...q.correct_list].sort().join('') },
      }
    })
  }

  const handleSubmit = useCallback(() => {
    if (submitted) return
    setSubmitted(true)
    setTimerRunning(false)
    const elapsed = Math.floor((Date.now() - startTime) / 1000)
    setTestResults({
      answers,
      elapsed,
      total: quizQuestions.length,
      startTime,
    })
    router.push('/results')
  }, [submitted, answers, startTime, quizQuestions.length, router])

  const handleTick = useCallback((remaining: number) => {
    setRemainingSeconds(remaining)
  }, [])

  const handleExpire = useCallback(() => {
    handleSubmit()
  }, [handleSubmit])

  function startQuiz() {
    const start = Math.max(1, rangeStart)
    const end = Math.min(156, rangeEnd)
    const filtered = questions.filter((q) => q.num >= start && q.num <= end)
    if (filtered.length === 0) return
    const secs = timerMinutes * 60
    setQuizQuestions(filtered)
    setCurrentIndex(0)
    setAnswers({})
    setRemainingSeconds(secs)
    setTotalSeconds(secs)
    setStartTime(Date.now())
    setTimerRunning(true)
    setSubmitted(false)
    setPhase('quiz')
  }

  const answeredCount = Object.keys(answers).length
  const q = quizQuestions[currentIndex]

  if (phase === 'setup') {
    return (
      <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center py-12 px-4">
        <div className="max-w-lg w-full">
          <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm p-8">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">시험 설정</h1>
            <p className="text-gray-500 dark:text-gray-400 mb-8 text-sm">
              시험 범위와 제한 시간을 설정하세요
            </p>

            <div className="space-y-6">
              {/* Range */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  문제 범위
                </label>
                <div className="flex items-center gap-3">
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">시작</label>
                    <input
                      type="number"
                      value={rangeStart}
                      min={1}
                      max={156}
                      onChange={(e) => setRangeStart(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3621]"
                    />
                  </div>
                  <span className="text-gray-400 mt-5">~</span>
                  <div className="flex-1">
                    <label className="text-xs text-gray-500 dark:text-gray-400 mb-1 block">끝</label>
                    <input
                      type="number"
                      value={rangeEnd}
                      min={1}
                      max={156}
                      onChange={(e) => setRangeEnd(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3621]"
                    />
                  </div>
                </div>
                <div className="flex gap-2 mt-2">
                  {[
                    { label: '전체 (156)', s: 1, e: 156 },
                    { label: '1~50', s: 1, e: 50 },
                    { label: '51~100', s: 51, e: 100 },
                    { label: '101~156', s: 101, e: 156 },
                  ].map((preset) => (
                    <button
                      key={preset.label}
                      onClick={() => { setRangeStart(preset.s); setRangeEnd(preset.e) }}
                      className="text-xs px-2 py-1 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    >
                      {preset.label}
                    </button>
                  ))}
                </div>
                <p className="text-xs text-gray-400 mt-2">
                  선택된 문제 수:{' '}
                  <span className="font-semibold text-[#ff3621]">
                    {questions.filter((q) => q.num >= rangeStart && q.num <= rangeEnd).length}
                  </span>
                  개
                </p>
              </div>

              {/* Timer */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                  제한 시간
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="number"
                    value={timerMinutes}
                    min={5}
                    max={300}
                    onChange={(e) => setTimerMinutes(Number(e.target.value))}
                    className="w-28 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3621]"
                  />
                  <span className="text-gray-600 dark:text-gray-400 text-sm">분</span>
                </div>
                <div className="flex gap-2 mt-2">
                  {[60, 90, 120, 180].map((min) => (
                    <button
                      key={min}
                      onClick={() => setTimerMinutes(min)}
                      className={`text-xs px-2 py-1 rounded-lg transition-colors ${
                        timerMinutes === min
                          ? 'bg-[#ff3621] text-white'
                          : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700'
                      }`}
                    >
                      {min}분
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={startQuiz}
              className="mt-8 w-full py-3 rounded-xl font-bold text-white bg-[#ff3621] hover:bg-[#cc2b1a] transition-colors text-lg shadow-md"
            >
              시험 시작
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Quiz phase
  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 pb-12">
      {/* Top bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3 sticky top-14 z-40">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <span>
              답변:{' '}
              <span className="font-semibold text-gray-900 dark:text-white">
                {answeredCount}/{quizQuestions.length}
              </span>
            </span>
          </div>
          <Timer
            totalSeconds={totalSeconds}
            remainingSeconds={remainingSeconds}
            onTick={handleTick}
            onExpire={handleExpire}
            running={timerRunning && !submitted}
          />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 rounded-xl font-bold text-sm bg-[#ff3621] text-white hover:bg-[#cc2b1a] transition-colors"
          >
            제출
          </button>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        {/* Unanswered warning */}
        {answeredCount < quizQuestions.length && (
          <div className="mb-4 px-4 py-2 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-xl text-sm text-yellow-700 dark:text-yellow-400 flex items-center gap-2">
            <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {quizQuestions.length - answeredCount}개 문제 미답변
          </div>
        )}

        <QuestionCard
          question={q}
          questionIndex={currentIndex}
          totalQuestions={quizQuestions.length}
          selected={selected}
          onSelect={handleSelect}
          checked={false}
          onCheck={() => {}}
          showExplanation={false}
          onToggleExplanation={() => {}}
          mode="test"
        />

        {/* Navigation */}
        <div className="mt-4 flex items-center justify-between">
          <button
            onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            이전
          </button>

          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {currentIndex + 1} / {quizQuestions.length}
          </span>

          {currentIndex < quizQuestions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex((i) => Math.min(quizQuestions.length - 1, i + 1))}
              className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              다음
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#ff3621] text-white hover:bg-[#cc2b1a] font-semibold transition-colors"
            >
              제출하기
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </button>
          )}
        </div>

        {/* Question dots */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {quizQuestions.map((tq, i) => {
            const ans = answers[tq.num]
            const isAnswered = !!ans
            const isCurrent = i === currentIndex
            return (
              <button
                key={tq.num}
                onClick={() => setCurrentIndex(i)}
                title={`Q${tq.num}`}
                className={`w-6 h-6 rounded text-xs font-medium transition-all ${
                  isCurrent
                    ? 'bg-[#ff3621] text-white ring-2 ring-[#ff3621] ring-offset-1 dark:ring-offset-gray-950'
                    : isAnswered
                    ? 'bg-sky-500 text-white hover:bg-sky-600'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {i + 1}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
