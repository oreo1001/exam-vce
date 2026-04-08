'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import QuestionCard from '@/components/QuestionCard'
import { Question, questions } from '@/lib/questions'
import {
  clearWrongQuestions,
  getStudyAnswers,
  getWrongQuestions,
  setStudyAnswer,
  StudyAnswers,
  setWrongQuestions,
} from '@/lib/storage'

export default function WrongPage() {
  const [wrongNums, setWrongNums] = useState<number[]>([])
  const [wrongQuestions, setWrongQuestionsState] = useState<Question[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [checked, setChecked] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState<StudyAnswers>({})
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const nums = getWrongQuestions()
    const filtered = questions.filter((q) => nums.includes(q.num))
    const saved = getStudyAnswers()
    setWrongNums(nums)
    setWrongQuestionsState(filtered)
    setAnswers(saved)
    setMounted(true)
  }, [])

  const question = wrongQuestions[currentIndex]

  useEffect(() => {
    if (!question) return
    const savedAnswer = answers[question.num]
    if (savedAnswer) {
      setSelected(savedAnswer.selected)
      setChecked(true)
      setShowExplanation(false)
    } else {
      setSelected([])
      setChecked(false)
      setShowExplanation(false)
    }
  }, [currentIndex, question, answers])

  const handleSelect = useCallback(
    (letter: string) => {
      if (!question || checked) return
      const isMultiple = question.correct_list.length > 1
      setSelected((prev) => {
        if (isMultiple) {
          return prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]
        }
        return prev.includes(letter) ? [] : [letter]
      })
    },
    [checked, question]
  )

  const handleCheck = useCallback(() => {
    if (!question || selected.length === 0) return
    const isCorrect =
      selected.sort().join('') === [...question.correct_list].sort().join('')
    const answer = { selected, correct: isCorrect }
    setChecked(true)
    setStudyAnswer(question.num, answer)
    setAnswers((prev) => ({ ...prev, [question.num]: answer }))

    // If now correct, remove from wrong list
    if (isCorrect) {
      const newNums = wrongNums.filter((n) => n !== question.num)
      setWrongNums(newNums)
      setWrongQuestions(newNums)
    }
  }, [question, selected, wrongNums])

  const handleClear = () => {
    clearWrongQuestions()
    setWrongNums([])
    setWrongQuestionsState([])
    setCurrentIndex(0)
  }

  if (!mounted) {
    return (
      <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center">
        <div className="text-gray-400">로딩 중...</div>
      </div>
    )
  }

  if (wrongQuestions.length === 0) {
    return (
      <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center py-12 px-4">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-10 h-10 text-green-600 dark:text-green-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">틀린 문제 없음!</h2>
          <p className="text-gray-500 dark:text-gray-400 mb-6">
            오답 노트가 비어있습니다. 시험 후 틀린 문제가 여기에 표시됩니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/study"
              className="px-5 py-2.5 rounded-xl bg-[#ff3621] text-white font-semibold hover:bg-[#cc2b1a] transition-colors"
            >
              학습 모드
            </Link>
            <Link
              href="/test"
              className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              시험 모드
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 pb-12">
      {/* Top bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              오답 노트
            </span>
            <span className="text-xs bg-red-100 dark:bg-red-900 text-red-600 dark:text-red-400 px-2 py-0.5 rounded-full font-medium">
              {wrongNums.length}개
            </span>
          </div>
          <button
            onClick={handleClear}
            className="text-xs px-3 py-1.5 rounded-lg border border-red-300 dark:border-red-700 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 transition-colors"
          >
            전체 초기화
          </button>
        </div>
      </div>

      {/* Question */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <QuestionCard
          question={question}
          questionIndex={currentIndex}
          totalQuestions={wrongQuestions.length}
          selected={selected}
          onSelect={handleSelect}
          checked={checked}
          onCheck={handleCheck}
          showExplanation={showExplanation}
          onToggleExplanation={() => setShowExplanation((v) => !v)}
          mode="study"
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
            {currentIndex + 1} / {wrongQuestions.length}
          </span>

          <button
            onClick={() => setCurrentIndex((i) => Math.min(wrongQuestions.length - 1, i + 1))}
            disabled={currentIndex === wrongQuestions.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            다음
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Question dots */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {wrongQuestions.map((wq, i) => {
            const ans = answers[wq.num]
            const isAnswered = !!ans
            const isCurrent = i === currentIndex
            return (
              <button
                key={wq.num}
                onClick={() => setCurrentIndex(i)}
                title={`Q${wq.num}`}
                className={`w-7 h-7 rounded text-xs font-medium transition-all ${
                  isCurrent
                    ? 'bg-[#ff3621] text-white ring-2 ring-[#ff3621] ring-offset-1 dark:ring-offset-gray-950'
                    : isAnswered && ans.correct
                    ? 'bg-green-500 text-white hover:bg-green-600'
                    : isAnswered && !ans.correct
                    ? 'bg-red-500 text-white hover:bg-red-600'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-300 dark:hover:bg-gray-600'
                }`}
              >
                {wq.num}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}
