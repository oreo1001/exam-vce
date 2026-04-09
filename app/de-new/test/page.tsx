'use client'

import TestClient from '@/components/TestClient'
import { deV1565Questions } from '@/lib/questions'
import { deV1565Storage } from '@/lib/storage'

export default function DENewTestPage() {
  return (
    <TestClient
      questions={deV1565Questions}
      storage={deV1565Storage}
      homeHref="/de-new"
      resultsHref="/de-new/results"
      examTitle="Databricks Certified Data Engineer Associate"
    />
  )
}
