'use client'

import WrongClient from '@/components/WrongClient'
import { aieQuestions } from '@/lib/questions'
import { aieStorage } from '@/lib/storage'

export default function AIEWrongPage() {
  return (
    <WrongClient
      allQuestions={aieQuestions}
      storage={aieStorage}
      homeHref="/aie"
      studyHref="/aie/study"
      testHref="/aie/test"
    />
  )
}
