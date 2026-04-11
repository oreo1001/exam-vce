'use client'

import StudyClient from '@/components/StudyClient'
import { depV1265Questions } from '@/lib/questions'
import { depStorage } from '@/lib/storage'

export default function DEPStudyPage() {
  return (
    <StudyClient
      questions={depV1265Questions}
      storage={depStorage}
      homeHref="/dep"
      testHref="/dep/test"
      wrongHref="/dep/wrong"
    />
  )
}
