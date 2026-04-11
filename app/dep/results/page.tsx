'use client'

import ResultsClient from '@/components/ResultsClient'
import { depStorage } from '@/lib/storage'

export default function DEPResultsPage() {
  return (
    <ResultsClient
      storage={depStorage}
      examTitle="Databricks Certified Data Engineer Professional"
      wrongHref="/dep/wrong"
      retryHref="/dep/test"
      studyHref="/dep/study"
    />
  )
}
