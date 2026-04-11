'use client'

import { useEffect, useState } from 'react'
import TestClient from '@/components/TestClient'
import { genaiV1295QuestionsKo, genaiV1295QuestionsEn, type Question } from '@/lib/questions'
import { aieStorage } from '@/lib/storage'
import { getAieLang } from '@/lib/aie-lang'

export default function AIETestPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null)

  useEffect(() => {
    setQuestions(getAieLang() === 'en' ? genaiV1295QuestionsEn : genaiV1295QuestionsKo)
  }, [])

  if (!questions) return null

  return (
    <TestClient
      questions={questions}
      storage={aieStorage}
      homeHref="/aie"
      resultsHref="/aie/results"
      examTitle="Databricks Certified AI Engineer Associate"
    />
  )
}
