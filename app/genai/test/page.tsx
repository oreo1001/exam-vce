'use client'

import TestClient from '@/components/TestClient'
import { genaiV1265Questions } from '@/lib/questions'
import { genaiStorage } from '@/lib/storage'

export default function GenAITestPage() {
  return (
    <TestClient
      questions={genaiV1265Questions}
      storage={genaiStorage}
      homeHref="/genai"
      resultsHref="/genai/results"
      examTitle="Databricks Certified Generative AI Engineer Associate"
    />
  )
}
