'use client'

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

// --------------- Study Answers (localStorage) ---------------

export function getStudyAnswers(): StudyAnswers {
  if (typeof window === 'undefined') return {}
  try {
    const raw = localStorage.getItem('study_answers')
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function setStudyAnswer(questionNum: number, answer: StudyAnswer): void {
  if (typeof window === 'undefined') return
  const answers = getStudyAnswers()
  answers[questionNum] = answer
  localStorage.setItem('study_answers', JSON.stringify(answers))
}

export function clearStudyAnswers(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('study_answers')
}

export function getStudyStats(): { answered: number; correct: number; total: number } {
  const answers = getStudyAnswers()
  const answered = Object.values(answers).length
  const correct = Object.values(answers).filter((a) => a.correct).length
  return { answered, correct, total: 156 }
}

// --------------- Wrong Questions (localStorage) ---------------

export function getWrongQuestions(): number[] {
  if (typeof window === 'undefined') return []
  try {
    const raw = localStorage.getItem('wrong_questions')
    return raw ? JSON.parse(raw) : []
  } catch {
    return []
  }
}

export function setWrongQuestions(nums: number[]): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('wrong_questions', JSON.stringify(nums))
}

export function addWrongQuestion(num: number): void {
  const list = getWrongQuestions()
  if (!list.includes(num)) {
    list.push(num)
    setWrongQuestions(list)
  }
}

export function removeWrongQuestion(num: number): void {
  const list = getWrongQuestions().filter((n) => n !== num)
  setWrongQuestions(list)
}

export function clearWrongQuestions(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('wrong_questions')
}

// --------------- Test Results (sessionStorage) ---------------

export function getTestResults(): TestResults | null {
  if (typeof window === 'undefined') return null
  try {
    const raw = sessionStorage.getItem('test_results')
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

export function setTestResults(results: TestResults): void {
  if (typeof window === 'undefined') return
  sessionStorage.setItem('test_results', JSON.stringify(results))
}

// --------------- Dark Mode ---------------

export function getDarkMode(): boolean {
  if (typeof window === 'undefined') return true
  try {
    const saved = localStorage.getItem('dark_mode')
    if (saved !== null) return saved === 'true'
    return true // default dark
  } catch {
    return true
  }
}

export function setDarkMode(dark: boolean): void {
  if (typeof window === 'undefined') return
  localStorage.setItem('dark_mode', String(dark))
}
