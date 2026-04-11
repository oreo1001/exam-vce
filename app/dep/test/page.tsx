'use client'

import TestClient from '@/components/TestClient'
import { depV1265Questions } from '@/lib/questions'
import { depStorage } from '@/lib/storage'

export default function DEPTestPage() {
  return (
    <TestClient
      questions={depV1265Questions}
      storage={depStorage}
      homeHref="/dep"
      resultsHref="/dep/results"
      examTitle="Databricks Certified Data Engineer Professional"
    />
  )
}
