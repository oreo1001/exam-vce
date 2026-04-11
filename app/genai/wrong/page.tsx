'use client'

import WrongClient from '@/components/WrongClient'
import { genaiV1265Questions } from '@/lib/questions'
import { genaiStorage } from '@/lib/storage'

export default function GenAIWrongPage() {
  return (
    <WrongClient
      allQuestions={genaiV1265Questions}
      storage={genaiStorage}
      homeHref="/genai"
      studyHref="/genai/study"
      testHref="/genai/test"
    />
  )
}
