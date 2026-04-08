'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import QuestionCard from '@/components/QuestionCard'
import { Question } from '@/lib/questions'
import { SubjectStorage, StudyAnswers } from '@/lib/storage'

interface StudyClientProps {
  questions: Question[]
  storage: SubjectStorage
  homeHref: string
  testHref: string
  wrongHref: string
}

export default function StudyClient({ questions, storage, homeHref, testHref, wrongHref }: StudyClientProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selected, setSelected] = useState<string[]>([])
  const [checked, setChecked] = useState(false)
  const [showExplanation, setShowExplanation] = useState(false)
  const [answers, setAnswers] = useState<StudyAnswers>({})
  const [jumpInput, setJumpInput] = useState('')
  const [showDotMap, setShowDotMap] = useState(false)
  const [wrongCount, setWrongCount] = useState(0)

  const question = questions[currentIndex]
  const isMultiple = question.correct_list.length > 1

  useEffect(() => {
    setAnswers(storage.getStudyAnswers())
    setWrongCount(storage.getWrongQuestions().length)
  }, [storage])

  useEffect(() => {
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
  }, [currentIndex, answers, question.num])

  const handleSelect = useCallback(
    (letter: string) => {
      if (checked) return
      setSelected((prev) => {
        if (isMultiple) {
          return prev.includes(letter) ? prev.filter((l) => l !== letter) : [...prev, letter]
        } else {
          return prev.includes(letter) ? [] : [letter]
        }
      })
    },
    [checked, isMultiple]
  )

  const handleCheck = useCallback(() => {
    if (selected.length === 0) return
    const isCorrect = selected.sort().join('') === [...question.correct_list].sort().join('')
    const answer = { selected, correct: isCorrect }
    setChecked(true)
    storage.setStudyAnswer(question.num, answer)
    setAnswers((prev) => ({ ...prev, [question.num]: answer }))
    if (isCorrect) {
      storage.removeWrongQuestion(question.num)
    } else {
      storage.addWrongQuestion(question.num)
    }
    setWrongCount(storage.getWrongQuestions().length)
  }, [selected, question, storage])

  const goTo = useCallback(
    (index: number) => {
      setCurrentIndex(Math.max(0, Math.min(questions.length - 1, index)))
    },
    [questions.length]
  )

  const handlePrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo])
  const handleNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo])

  const handleJump = (e: React.FormEvent) => {
    e.preventDefault()
    const num = parseInt(jumpInput)
    if (!isNaN(num) && num >= 1 && num <= questions.length) {
      goTo(num - 1)
      setJumpInput('')
    }
  }

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement).tagName
      if (tag === 'INPUT' || tag === 'TEXTAREA') return
      if (e.key === 'ArrowLeft') handlePrev()
      else if (e.key === 'ArrowRight') handleNext()
      else if (e.key === 'Enter' && !checked && selected.length > 0) handleCheck()
      else if (!checked) {
        const letter = e.key.toUpperCase()
        if (['A', 'B', 'C', 'D', 'E'].includes(letter)) {
          if (question.choices.some((c) => c.letter === letter)) handleSelect(letter)
        }
      }
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handlePrev, handleNext, handleCheck, handleSelect, checked, selected, question])

  function getDotColor(num: number): string {
    const ans = answers[num]
    if (!ans) return 'bg-gray-300 dark:bg-gray-700'
    return ans.correct ? 'bg-green-500' : 'bg-red-500'
  }

  const stats = {
    answered: Object.keys(answers).length,
    correct: Object.values(answers).filter((a) => a.correct).length,
  }

  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 pb-12">
      {/* Top bar */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-3">
        <div className="max-w-3xl mx-auto flex items-center justify-between gap-4 flex-wrap">
          <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
            <Link href={homeHref} className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              ← 홈
            </Link>
            <span>
              <span className="font-semibold text-gray-900 dark:text-white">{stats.answered}</span>
              /{questions.length} 풀이
            </span>
            <span className="text-green-600 dark:text-green-400 font-semibold">{stats.correct} 정답</span>
          </div>
          <div className="flex items-center gap-2">
            <form onSubmit={handleJump} className="flex items-center gap-1">
              <input
                type="number"
                value={jumpInput}
                onChange={(e) => setJumpInput(e.target.value)}
                placeholder="문제 번호"
                min={1}
                max={questions.length}
                className="w-24 px-2 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#ff3621]"
              />
              <button
                type="submit"
                className="px-3 py-1.5 text-sm rounded-lg bg-[#ff3621] text-white hover:bg-[#cc2b1a] transition-colors"
              >
                이동
              </button>
            </form>
            <button
              onClick={() => setShowDotMap((v) => !v)}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {showDotMap ? '지도 닫기' : '진행 지도'}
            </button>
          </div>
        </div>
      </div>

      {/* Progress dot map */}
      {showDotMap && (
        <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 px-4 py-4">
          <div className="max-w-3xl mx-auto">
            <div className="flex flex-wrap gap-1.5">
              {questions.map((q, i) => (
                <button
                  key={q.num}
                  onClick={() => goTo(i)}
                  title={`문제 ${q.num}`}
                  className={`w-5 h-5 rounded-sm transition-all hover:scale-125 ${getDotColor(q.num)} ${
                    i === currentIndex ? 'ring-2 ring-[#ff3621] ring-offset-1 dark:ring-offset-gray-900' : ''
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-4 mt-3 text-xs text-gray-500 dark:text-gray-400">
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-green-500 inline-block" /> 정답</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-red-500 inline-block" /> 오답</span>
              <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-sm bg-gray-300 dark:bg-gray-700 inline-block" /> 미풀이</span>
            </div>
          </div>
        </div>
      )}

      {/* Question */}
      <div className="max-w-3xl mx-auto px-4 pt-6">
        <QuestionCard
          question={question}
          questionIndex={currentIndex}
          totalQuestions={questions.length}
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
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            이전
          </button>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {currentIndex + 1} / {questions.length}
          </span>
          <button
            onClick={handleNext}
            disabled={currentIndex === questions.length - 1}
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            다음
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <p className="text-xs text-gray-400 dark:text-gray-600 text-center mt-3">
          키보드: ← → 이동 · A~E 선택 · Enter 정답확인
        </p>
      </div>
    </div>
  )
}
