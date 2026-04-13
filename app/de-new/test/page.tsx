'use client'

import { useEffect, useState } from 'react'
import TestClient from '@/components/TestClient'
import { deV1565Questions, deV1565QuestionsEn, type Question } from '@/lib/questions'
import { deV1565Storage } from '@/lib/storage'
import { getDeNewLang } from '@/lib/de-new-lang'

export default function DENewTestPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null)

  useEffect(() => {
    setQuestions(getDeNewLang() === 'en' ? deV1565QuestionsEn : deV1565Questions)
  }, [])

  if (!questions) return null

  return (
    <TestClient
      questions={questions}
      storage={deV1565Storage}
      homeHref="/de-new"
      resultsHref="/de-new/results"
      examTitle="Databricks Certified Data Engineer Associate"
    />
  )
}
