'use client'

import ResultsClient from '@/components/ResultsClient'
import { genaiStorage } from '@/lib/storage'

export default function GenAIResultsPage() {
  return (
    <ResultsClient
      storage={genaiStorage}
      examTitle="Databricks Certified Generative AI Engineer Associate"
      wrongHref="/genai/wrong"
      retryHref="/genai/test"
      studyHref="/genai/study"
    />
  )
}
