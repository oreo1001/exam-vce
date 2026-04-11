'use client'

import { useEffect, useState } from 'react'
import StudyClient from '@/components/StudyClient'
import { genaiV1295QuestionsKo, genaiV1295QuestionsEn, type Question } from '@/lib/questions'
import { aieStorage } from '@/lib/storage'
import { getAieLang } from '@/lib/aie-lang'

export default function AIEStudyPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null)

  useEffect(() => {
    setQuestions(getAieLang() === 'en' ? genaiV1295QuestionsEn : genaiV1295QuestionsKo)
  }, [])

  if (!questions) return null

  return (
    <StudyClient
      questions={questions}
      storage={aieStorage}
      homeHref="/aie"
      testHref="/aie/test"
      wrongHref="/aie/wrong"
    />
  )
}
