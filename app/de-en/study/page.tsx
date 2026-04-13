'use client'

import StudyClient from '@/components/StudyClient'
import { deV1565QuestionsEn } from '@/lib/questions'
import { deV1565EnStorage } from '@/lib/storage'

export default function DEEnStudyPage() {
  return (
    <StudyClient
      questions={deV1565QuestionsEn}
      storage={deV1565EnStorage}
      homeHref="/de-en"
      testHref="/de-en/test"
      wrongHref="/de-en/wrong"
    />
  )
}
