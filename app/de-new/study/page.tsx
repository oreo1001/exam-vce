'use client'

import StudyClient from '@/components/StudyClient'
import { deV1565Questions } from '@/lib/questions'
import { deV1565Storage } from '@/lib/storage'

export default function DENewStudyPage() {
  return (
    <StudyClient
      questions={deV1565Questions}
      storage={deV1565Storage}
      homeHref="/de-new"
      testHref="/de-new/test"
      wrongHref="/de-new/wrong"
    />
  )
}
