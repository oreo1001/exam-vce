import questionsData from '@/data/questions.json'

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

export const questions: Question[] = questionsData as Question[]

export function getQuestion(num: number): Question | undefined {
  return questions.find((q) => q.num === num)
}

export function getQuestions(nums?: number[]): Question[] {
  if (!nums) return questions
  return questions.filter((q) => nums.includes(q.num))
}
