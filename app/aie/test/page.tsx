'use client'

import TestClient from '@/components/TestClient'
import { aieQuestions } from '@/lib/questions'
import { aieStorage } from '@/lib/storage'

export default function AIETestPage() {
  return (
    <TestClient
      questions={aieQuestions}
      storage={aieStorage}
      homeHref="/aie"
      resultsHref="/aie/results"
      examTitle="Databricks Certified AI Engineer Associate"
    />
  )
}
