'use client'

import ResultsClient from '@/components/ResultsClient'
import { aieStorage } from '@/lib/storage'

export default function AIEResultsPage() {
  return (
    <ResultsClient
      storage={aieStorage}
      examTitle="Databricks Certified AI Engineer Associate"
      wrongHref="/aie/wrong"
      retryHref="/aie/test"
      studyHref="/aie/study"
    />
  )
}
