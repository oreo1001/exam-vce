'use client'

import ResultsClient from '@/components/ResultsClient'
import { deV1565Storage } from '@/lib/storage'

export default function DENewResultsPage() {
  return (
    <ResultsClient
      storage={deV1565Storage}
      examTitle="Databricks Certified Data Engineer Associate"
      wrongHref="/de-new/wrong"
      retryHref="/de-new/test"
      studyHref="/de-new/study"
    />
  )
}
