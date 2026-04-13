'use client'

import ResultsClient from '@/components/ResultsClient'
import { deV1565EnStorage } from '@/lib/storage'

export default function DEEnResultsPage() {
  return (
    <ResultsClient
      storage={deV1565EnStorage}
      examTitle="Databricks Certified Data Engineer Associate"
      wrongHref="/de-en/wrong"
      retryHref="/de-en/test"
      studyHref="/de-en/study"
    />
  )
}
