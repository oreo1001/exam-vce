'use client'

import WrongClient from '@/components/WrongClient'
import { genaiQuestions } from '@/lib/questions'
import { genaiStorage } from '@/lib/storage'

export default function GenAIWrongPage() {
  return (
    <WrongClient
      allQuestions={genaiQuestions}
      storage={genaiStorage}
      homeHref="/genai"
      studyHref="/genai/study"
      testHref="/genai/test"
    />
  )
}
