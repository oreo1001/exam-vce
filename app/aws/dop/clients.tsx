'use client'

// 문제 데이터는 서버 페이지에서 props 로 받고, 여기서는 클라이언트 전용 storage 만 바인딩한다.
import StudyClient from '@/components/StudyClient'
import TestClient from '@/components/TestClient'
import WrongClient from '@/components/WrongClient'
import ResultsClient from '@/components/ResultsClient'
import type { Question } from '@/lib/questions'
import { awsDopStorage } from '@/lib/storage'

const EXAM_TITLE = 'AWS Certified DevOps Engineer - Professional (DOP-C02)'

export function DopStudy({ questions }: { questions: Question[] }) {
  return (
    <StudyClient
      questions={questions}
      storage={awsDopStorage}
      homeHref="/aws/dop"
      testHref="/aws/dop/test"
      wrongHref="/aws/dop/wrong"
    />
  )
}

export function DopTest({ questions }: { questions: Question[] }) {
  return (
    <TestClient
      questions={questions}
      storage={awsDopStorage}
      homeHref="/aws/dop"
      resultsHref="/aws/dop/results"
      examTitle={EXAM_TITLE}
    />
  )
}

export function DopWrong({ questions }: { questions: Question[] }) {
  return (
    <WrongClient
      allQuestions={questions}
      storage={awsDopStorage}
      homeHref="/aws/dop"
      studyHref="/aws/dop/study"
      testHref="/aws/dop/test"
    />
  )
}

export function DopResults() {
  return (
    <ResultsClient
      storage={awsDopStorage}
      examTitle={EXAM_TITLE}
      wrongHref="/aws/dop/wrong"
      retryHref="/aws/dop/test"
      studyHref="/aws/dop/study"
    />
  )
}
