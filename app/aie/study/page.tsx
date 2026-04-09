'use client'

import StudyClient from '@/components/StudyClient'
import { aieQuestions } from '@/lib/questions'
import { aieStorage } from '@/lib/storage'

export default function AIEStudyPage() {
  return (
    <StudyClient
      questions={aieQuestions}
      storage={aieStorage}
      homeHref="/aie"
      testHref="/aie/test"
      wrongHref="/aie/wrong"
    />
  )
}
