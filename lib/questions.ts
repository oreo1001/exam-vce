import deV1495Data from '@/data/de-v1495-q-ko.json'
import deV1565Data from '@/data/de-v1565-q-ko.json'
import genaiV1265Data from '@/data/genai-v1265-q-ko.json'
import genaiV1295DataKo from '@/data/genai-v1295-q-ko.json'
import genaiV1295DataEn from '@/data/genai-v1295-q-en.json'
import depV1265Data from '@/data/dep-v1265-q-en.json'

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

export const deV1495Questions: Question[] = deV1495Data as Question[]
export const deV1565Questions: Question[] = deV1565Data as Question[]
export const genaiV1265Questions: Question[] = genaiV1265Data as Question[]
export const genaiV1295QuestionsKo: Question[] = genaiV1295DataKo as Question[]
export const genaiV1295QuestionsEn: Question[] = genaiV1295DataEn as Question[]
export const depV1265Questions: Question[] = depV1265Data as Question[]

// Legacy aliases
export const deQuestions = deV1495Questions
export const genaiQuestions = genaiV1265Questions
export const aieQuestionsKo = genaiV1295QuestionsKo
export const aieQuestionsEn = genaiV1295QuestionsEn
export const questions = deV1495Questions
