'use client'

import { createClient } from './supabase'
import type { StudyAnswer, StudyAnswers, TestResults } from './storage'

// ── 학습 기록 ──────────────────────────────────────────

export async function dbWriteStudyAnswer(
  userId: string,
  subject: string,
  questionNum: number,
  answer: StudyAnswer
) {
  const supabase = createClient()
  await supabase.from('study_answers').upsert(
    {
      user_id: userId,
      subject,
      question_num: questionNum,
      selected: answer.selected,
      correct: answer.correct,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,subject,question_num' }
  )
}

export async function dbLoadStudyAnswers(
  userId: string,
  subject: string
): Promise<StudyAnswers> {
  const supabase = createClient()
  const { data } = await supabase
    .from('study_answers')
    .select('question_num, selected, correct')
    .eq('user_id', userId)
    .eq('subject', subject)
  if (!data) return {}
  const result: StudyAnswers = {}
  for (const row of data) {
    result[row.question_num] = { selected: row.selected, correct: row.correct }
  }
  return result
}

export async function dbClearStudyAnswers(userId: string, subject: string) {
  const supabase = createClient()
  await supabase
    .from('study_answers')
    .delete()
    .eq('user_id', userId)
    .eq('subject', subject)
}

// ── 오답노트 ───────────────────────────────────────────

export async function dbWriteWrongQuestions(
  userId: string,
  subject: string,
  nums: number[]
) {
  const supabase = createClient()
  // 기존 삭제 후 현재 목록으로 교체
  await supabase
    .from('wrong_questions')
    .delete()
    .eq('user_id', userId)
    .eq('subject', subject)
  if (nums.length === 0) return
  await supabase.from('wrong_questions').insert(
    nums.map((n) => ({ user_id: userId, subject, question_num: n }))
  )
}

export async function dbLoadWrongQuestions(
  userId: string,
  subject: string
): Promise<number[]> {
  const supabase = createClient()
  const { data } = await supabase
    .from('wrong_questions')
    .select('question_num')
    .eq('user_id', userId)
    .eq('subject', subject)
  return data ? data.map((r) => r.question_num) : []
}

export async function dbClearWrongQuestions(userId: string, subject: string) {
  const supabase = createClient()
  await supabase
    .from('wrong_questions')
    .delete()
    .eq('user_id', userId)
    .eq('subject', subject)
}

// ── 시험 결과 ───────────────────────────────────────────

export async function dbWriteTestResult(
  userId: string,
  subject: string,
  results: TestResults
) {
  const supabase = createClient()
  const correct = Object.values(results.answers).filter((a) => a.correct).length
  await supabase.from('test_results').insert({
    user_id: userId,
    subject,
    score: correct,
    total: results.total,
    elapsed: results.elapsed,
    taken_at: new Date().toISOString(),
  })
}

// ── 로그인 시 DB → localStorage 동기화 ─────────────────

export async function syncDbToLocal(userId: string) {
  const subjects = ['de', 'genai', 'aie', 'de-v1565']

  await Promise.all(
    subjects.map(async (subject) => {
      const studyKey = `${subject}_study_answers`
      const wrongKey = `${subject}_wrong_questions`

      const [studyAnswers, wrongQuestions] = await Promise.all([
        dbLoadStudyAnswers(userId, subject),
        dbLoadWrongQuestions(userId, subject),
      ])

      if (Object.keys(studyAnswers).length > 0) {
        localStorage.setItem(studyKey, JSON.stringify(studyAnswers))
      }
      if (wrongQuestions.length > 0) {
        localStorage.setItem(wrongKey, JSON.stringify(wrongQuestions))
      }
    })
  )
}
