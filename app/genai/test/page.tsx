'use client'

import TestClient from '@/components/TestClient'
import { genaiQuestions } from '@/lib/questions'
import { genaiStorage } from '@/lib/storage'

export default function GenAITestPage() {
  return (
    <TestClient
      questions={genaiQuestions}
      storage={genaiStorage}
      homeHref="/genai"
      resultsHref="/genai/results"
      examTitle="Databricks Certified Generative AI Engineer Associate"
    />
  )
}
