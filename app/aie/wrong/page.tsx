'use client'

import { useEffect, useState } from 'react'
import WrongClient from '@/components/WrongClient'
import { genaiV1295QuestionsKo, genaiV1295QuestionsEn, type Question } from '@/lib/questions'
import { aieStorage } from '@/lib/storage'
import { getAieLang } from '@/lib/aie-lang'

export default function AIEWrongPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null)

  useEffect(() => {
    setQuestions(getAieLang() === 'en' ? genaiV1295QuestionsEn : genaiV1295QuestionsKo)
  }, [])

  if (!questions) return null

  return (
    <WrongClient
      allQuestions={questions}
      storage={aieStorage}
      homeHref="/aie"
      studyHref="/aie/study"
      testHref="/aie/test"
    />
  )
}
