'use client'

import StudyClient from '@/components/StudyClient'
import { genaiV1265Questions } from '@/lib/questions'
import { genaiStorage } from '@/lib/storage'

export default function GenAIStudyPage() {
  return (
    <StudyClient
      questions={genaiV1265Questions}
      storage={genaiStorage}
      homeHref="/genai"
      testHref="/genai/test"
      wrongHref="/genai/wrong"
    />
  )
}
