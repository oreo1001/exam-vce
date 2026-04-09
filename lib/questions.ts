import deData from '@/data/de-questions.json'
import genaiData from '@/data/genai-questions.json'
import aieData from '@/data/aie-questions.json'
import deV1565Data from '@/data/de-v1565-questions.json'

export interface Question {
  num: number
  question: string
  choices: { letter: string; text: string; image?: string }[]
  correct: string
  correct_list: string[]
  explanation: string
  question_images: string[]
  explanation_images?: string[]
}

export const deQuestions: Question[] = deData as Question[]
export const genaiQuestions: Question[] = genaiData as Question[]
export const aieQuestions: Question[] = aieData as Question[]
export const deV1565Questions: Question[] = deV1565Data as Question[]

// Legacy alias for existing DE pages
export const questions = deQuestions

export function getQuestion(num: number): Question | undefined {
  return deQuestions.find((q) => q.num === num)
}

export function getQuestions(nums?: number[]): Question[] {
  if (!nums) return deQuestions
  return deQuestions.filter((q) => nums.includes(q.num))
}

export function getGenaiQuestion(num: number): Question | undefined {
  return genaiQuestions.find((q) => q.num === num)
}

export function getGenaiQuestions(nums?: number[]): Question[] {
  if (!nums) return genaiQuestions
  return genaiQuestions.filter((q) => nums.includes(q.num))
}

export function getAieQuestion(num: number): Question | undefined {
  return aieQuestions.find((q) => q.num === num)
}

export function getAieQuestions(nums?: number[]): Question[] {
  if (!nums) return aieQuestions
  return aieQuestions.filter((q) => nums.includes(q.num))
}
