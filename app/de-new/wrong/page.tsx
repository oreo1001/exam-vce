'use client'

import { useEffect, useState } from 'react'
import WrongClient from '@/components/WrongClient'
import { deV1565Questions, deV1565QuestionsEn, type Question } from '@/lib/questions'
import { deV1565Storage } from '@/lib/storage'
import { getDeNewLang } from '@/lib/de-new-lang'

export default function DENewWrongPage() {
  const [questions, setQuestions] = useState<Question[] | null>(null)

  useEffect(() => {
    setQuestions(getDeNewLang() === 'en' ? deV1565QuestionsEn : deV1565Questions)
  }, [])

  if (!questions) return null

  return (
    <WrongClient
      allQuestions={questions}
      storage={deV1565Storage}
      homeHref="/de-new"
      studyHref="/de-new/study"
      testHref="/de-new/test"
    />
  )
}
