'use client'

import { Question } from '@/lib/questions'

interface QuestionCardProps {
  question: Question
  questionIndex: number
  totalQuestions: number
  selected: string[]
  onSelect: (letter: string) => void
  checked: boolean
  onCheck: () => void
  showExplanation: boolean
  onToggleExplanation: () => void
  mode: 'study' | 'test'
}

export default function QuestionCard({
  question,
  questionIndex,
  totalQuestions,
  selected,
  onSelect,
  checked,
  onCheck,
  showExplanation,
  onToggleExplanation,
  mode,
}: QuestionCardProps) {
  const isMultiple = question.correct_list.length > 1
  const requiredCount = question.correct_list.length

  function getChoiceStyle(letter: string): string {
    const base =
      'flex items-start gap-3 w-full text-left px-4 py-3 rounded-xl border transition-all duration-150 cursor-pointer text-sm sm:text-base '
    const isSelected = selected.includes(letter)
    const isCorrect = question.correct_list.includes(letter)

    if (checked && mode === 'study') {
      if (isCorrect) {
        return base + 'bg-green-100 dark:bg-green-900 border-green-500 text-green-800 dark:text-green-200'
      }
      if (isSelected && !isCorrect) {
        return base + 'bg-red-100 dark:bg-red-900 border-red-500 text-red-800 dark:text-red-200'
      }
      return base + 'bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-400'
    }

    if (isSelected) {
      return base + 'bg-sky-100 dark:bg-sky-900 border-sky-500 text-sky-800 dark:text-sky-200'
    }
    return base + 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-750 hover:border-gray-400 dark:hover:border-gray-500'
  }

  function getLetterBadge(letter: string): string {
    const isSelected = selected.includes(letter)
    const isCorrect = question.correct_list.includes(letter)

    if (checked && mode === 'study') {
      if (isCorrect) return 'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-green-500 text-white'
      if (isSelected && !isCorrect) return 'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-red-500 text-white'
      return 'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300'
    }

    if (isSelected) return 'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-sky-500 text-white'
    return 'w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300'
  }

  const canCheck = mode === 'study' && selected.length > 0 && !checked

  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm overflow-hidden">
      {/* Question header */}
      <div className="px-6 py-4 border-b border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-gray-900">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            문제 {questionIndex + 1} / {totalQuestions}
          </span>
          <div className="flex items-center gap-2">
            {isMultiple && (
              <span className="text-xs bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 px-2 py-0.5 rounded-full font-medium">
                {requiredCount}개 선택
              </span>
            )}
            <span className="text-xs bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-full">
              Q{question.num}
            </span>
          </div>
        </div>
      </div>

      {/* Question body */}
      <div className="px-6 py-5">
        <p className="text-gray-900 dark:text-gray-100 text-base leading-7 whitespace-pre-wrap mb-4">
          {question.question}
        </p>

        {/* Question images */}
        {question.question_images && question.question_images.length > 0 && (
          <div className="flex flex-col gap-3 mb-4">
            {question.question_images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`문제 이미지 ${i + 1}`}
                className="max-w-full rounded-lg border border-gray-200 dark:border-gray-700"
              />
            ))}
          </div>
        )}

        {/* Choices */}
        <div className="flex flex-col gap-2">
          {question.choices.map((choice) => (
            <button
              key={choice.letter}
              onClick={() => !checked || mode === 'test' ? onSelect(choice.letter) : undefined}
              className={getChoiceStyle(choice.letter)}
              disabled={mode === 'study' && checked}
            >
              <span className={getLetterBadge(choice.letter)}>{choice.letter}</span>
              {choice.image ? (
                <img
                  src={choice.image}
                  alt={`선택지 ${choice.letter}`}
                  className="max-w-full rounded border border-gray-200 dark:border-gray-700"
                />
              ) : (
                <span className="pt-0.5 flex-1">{choice.text}</span>
              )}
              {checked && mode === 'study' && question.correct_list.includes(choice.letter) && (
                <span className="flex-shrink-0 text-green-500 text-lg">✓</span>
              )}
              {checked && mode === 'study' && selected.includes(choice.letter) && !question.correct_list.includes(choice.letter) && (
                <span className="flex-shrink-0 text-red-500 text-lg">✗</span>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Footer actions (study mode) */}
      {mode === 'study' && (
        <div className="px-6 py-4 border-t border-gray-100 dark:border-gray-800 flex flex-wrap gap-3">
          {!checked ? (
            <button
              onClick={onCheck}
              disabled={!canCheck}
              className="px-5 py-2 rounded-xl font-semibold text-sm bg-[#ff3621] text-white hover:bg-[#cc2b1a] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
            >
              정답 확인
            </button>
          ) : (
            <>
              <div className="flex items-center gap-2">
                {selected.length > 0 &&
                selected.sort().join('') === [...question.correct_list].sort().join('') ? (
                  <span className="flex items-center gap-1.5 text-green-600 dark:text-green-400 font-semibold text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    정답입니다!
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 text-red-500 dark:text-red-400 font-semibold text-sm">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                    틀렸습니다
                  </span>
                )}
              </div>
              <button
                onClick={onToggleExplanation}
                className="px-4 py-2 rounded-xl font-semibold text-sm border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                {showExplanation ? '해설 닫기' : '해설 보기'}
              </button>
            </>
          )}
        </div>
      )}

      {/* Explanation */}
      {showExplanation && checked && mode === 'study' && (
        <div className="mx-6 mb-6 p-4 bg-blue-50 dark:bg-blue-950 border border-blue-200 dark:border-blue-800 rounded-xl">
          <h3 className="font-semibold text-blue-800 dark:text-blue-300 mb-2 text-sm">해설</h3>
          <p className="text-blue-700 dark:text-blue-400 text-sm leading-6 whitespace-pre-wrap">
            {question.explanation}
          </p>
          {question.explanation_images && question.explanation_images.length > 0 && (
            <div className="flex flex-col gap-2 mt-3">
              {question.explanation_images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`해설 이미지 ${i + 1}`}
                  className="max-w-full rounded-lg border border-blue-200 dark:border-blue-700"
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
