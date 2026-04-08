'use client'

import StudyClient from '@/components/StudyClient'
import { genaiQuestions } from '@/lib/questions'
import { genaiStorage } from '@/lib/storage'

export default function GenAIStudyPage() {
  return (
    <StudyClient
      questions={genaiQuestions}
      storage={genaiStorage}
      homeHref="/genai"
      testHref="/genai/test"
      wrongHref="/genai/wrong"
    />
  )
}
