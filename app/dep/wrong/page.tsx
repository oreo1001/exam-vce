'use client'

import WrongClient from '@/components/WrongClient'
import { depV1265Questions } from '@/lib/questions'
import { depStorage } from '@/lib/storage'

export default function DEPWrongPage() {
  return (
    <WrongClient
      allQuestions={depV1265Questions}
      storage={depStorage}
      homeHref="/dep"
      studyHref="/dep/study"
      testHref="/dep/test"
    />
  )
}
