'use client'

import TestClient from '@/components/TestClient'
import { deV1565QuestionsEn } from '@/lib/questions'
import { deV1565EnStorage } from '@/lib/storage'

export default function DEEnTestPage() {
  return (
    <TestClient
      questions={deV1565QuestionsEn}
      storage={deV1565EnStorage}
      homeHref="/de-en"
      resultsHref="/de-en/results"
      examTitle="Databricks Certified Data Engineer Associate"
    />
  )
}
