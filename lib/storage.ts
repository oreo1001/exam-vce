'use client'

import { getCurrentUserId } from './currentUser'
import {
  dbWriteStudyAnswer,
  dbWriteWrongQuestions,
  dbWriteTestResult,
  dbClearStudyAnswers,
  dbClearWrongQuestions,
} from './dbStorage'

export interface StudyAnswer {
  selected: string[]
  correct: boolean
}

export interface StudyAnswers {
  [questionNum: number]: StudyAnswer
}

export interface TestResults {
  answers: { [questionNum: number]: StudyAnswer }
  elapsed: number
  total: number
  startTime: number
}

// --------------- Subject-aware storage factory ---------------

export interface SubjectStorage {
  getStudyAnswers(): StudyAnswers
  setStudyAnswer(questionNum: number, answer: StudyAnswer): void
  clearStudyAnswers(): void
  getStudyStats(total: number): { answered: number; correct: number; total: number }
  getWrongQuestions(): number[]
  setWrongQuestions(nums: number[]): void
  addWrongQuestion(num: number): void
  removeWrongQuestion(num: number): void
  clearWrongQuestions(): void
  getTestResults(): TestResults | null
  setTestResults(results: TestResults): void
}

export function createSubjectStorage(prefix: string): SubjectStorage {
  const studyKey = `${prefix}_study_answers`
  const wrongKey = `${prefix}_wrong_questions`
  const testKey = `${prefix}_test_results`

  return {
    getStudyAnswers(): StudyAnswers {
      if (typeof window === 'undefined') return {}
      try {
        const raw = localStorage.getItem(studyKey)
        return raw ? JSON.parse(raw) : {}
      } catch { return {} }
    },

    setStudyAnswer(questionNum: number, answer: StudyAnswer): void {
      if (typeof window === 'undefined') return
      const answers = this.getStudyAnswers()
      answers[questionNum] = answer
      localStorage.setItem(studyKey, JSON.stringify(answers))
      const uid = getCurrentUserId()
      if (uid) dbWriteStudyAnswer(uid, prefix, questionNum, answer)
    },

    clearStudyAnswers(): void {
      if (typeof window === 'undefined') return
      localStorage.removeItem(studyKey)
      const uid = getCurrentUserId()
      if (uid) dbClearStudyAnswers(uid, prefix)
    },

    getStudyStats(total: number) {
      const answers = this.getStudyAnswers()
      const answered = Object.values(answers).length
      const correct = Object.values(answers).filter((a) => a.correct).length
      return { answered, correct, total }
    },

    getWrongQuestions(): number[] {
      if (typeof window === 'undefined') return []
      try {
        const raw = localStorage.getItem(wrongKey)
        return raw ? JSON.parse(raw) : []
      } catch { return [] }
    },

    setWrongQuestions(nums: number[]): void {
      if (typeof window === 'undefined') return
      localStorage.setItem(wrongKey, JSON.stringify(nums))
      const uid = getCurrentUserId()
      if (uid) dbWriteWrongQuestions(uid, prefix, nums)
    },

    addWrongQuestion(num: number): void {
      const list = this.getWrongQuestions()
      if (!list.includes(num)) {
        list.push(num)
        this.setWrongQuestions(list)
      }
    },

    removeWrongQuestion(num: number): void {
      this.setWrongQuestions(this.getWrongQuestions().filter((n) => n !== num))
    },

    clearWrongQuestions(): void {
      if (typeof window === 'undefined') return
      localStorage.removeItem(wrongKey)
      const uid = getCurrentUserId()
      if (uid) dbClearWrongQuestions(uid, prefix)
    },

    getTestResults(): TestResults | null {
      if (typeof window === 'undefined') return null
      try {
        const raw = sessionStorage.getItem(testKey)
        return raw ? JSON.parse(raw) : null
      } catch { return null }
    },

    setTestResults(results: TestResults): void {
      if (typeof window === 'undefined') return
      sessionStorage.setItem(testKey, JSON.stringify(results))
      const uid = getCurrentUserId()
      if (uid) dbWriteTestResult(uid, prefix, results)
    },
  }
}

export const deStorage = createSubjectStorage('de')
export const genaiStorage = createSubjectStorage('genai')
export const aieStorage = createSubjectStorage('aie')
export const deV1565Storage = createSubjectStorage('de-v1565')

// --------------- Legacy DE functions (existing DE pages at /study, /test, /wrong unchanged) ---------------

export function getStudyAnswers(): StudyAnswers {
  return deStorage.getStudyAnswers()
}

export function setStudyAnswer(questionNum: number, answer: StudyAnswer): void {
  deStorage.setStudyAnswer(questionNum, answer)
}

export function clearStudyAnswers(): void {
  deStorage.clearStudyAnswers()
}

export function getStudyStats(): { answered: number; correct: number; total: number } {
  return deStorage.getStudyStats(156)
}

export function getWrongQuestions(): number[] {
  return deStorage.getWrongQuestions()
}

export function setWrongQuestions(nums: number[]): void {
  deStorage.setWrongQuestions(nums)
}

export function addWrongQuestion(num: number): void {
  deStorage.addWrongQuestion(num)
}

export function removeWrongQuestion(num: number): void {
  deStorage.removeWrongQuestion(num)
}

export function clearWrongQuestions(): void {
  deStorage.clearWrongQuestions()
}

export function getTestResults(): TestResults | null {
  return deStorage.getTestResults()
}

export function setTestResults(results: TestResults): void {
  deStorage.setTestResults(results)
}

// --------------- Dark Mode ---------------

export function getDarkMode(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const saved = localStorage.getItem('dark_mode')
    if (saved !== null) return saved === 'true'
    return true
  } catch { return true }
}

export function setDarkMode(dark: boolean): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('dark_mode', String(dark))
}
