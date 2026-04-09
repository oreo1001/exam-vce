'use client'

import WrongClient from '@/components/WrongClient'
import { deV1565Questions } from '@/lib/questions'
import { deV1565Storage } from '@/lib/storage'

export default function DENewWrongPage() {
  return (
    <WrongClient
      allQuestions={deV1565Questions}
      storage={deV1565Storage}
      homeHref="/de-new"
      studyHref="/de-new/study"
      testHref="/de-new/test"
    />
  )
}
