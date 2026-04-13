'use client'

import WrongClient from '@/components/WrongClient'
import { deV1565QuestionsEn } from '@/lib/questions'
import { deV1565EnStorage } from '@/lib/storage'

export default function DEEnWrongPage() {
  return (
    <WrongClient
      allQuestions={deV1565QuestionsEn}
      storage={deV1565EnStorage}
      homeHref="/de-en"
      studyHref="/de-en/study"
      testHref="/de-en/test"
    />
  )
}
