'use client'

import Link from 'next/link'
import { useActionState } from 'react'
import { unlockAws, type UnlockState } from './actions'

const initialState: UnlockState = { error: '' }

export default function LoginForm({ next }: { next: string }) {
  const [state, formAction, pending] = useActionState(unlockAws, initialState)

  return (
    <div className="min-h-full bg-gray-50 dark:bg-gray-950 flex items-center justify-center py-12 px-4">
      <div className="max-w-sm w-full">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors">← 플랫폼 선택</Link>
        </div>
        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 shadow-sm">
          <div className="inline-flex items-center justify-center w-14 h-14 bg-[#ff9900] rounded-2xl mb-5 shadow">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">AWS 문제집</h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">비밀번호를 입력하세요</p>

          <form action={formAction} className="space-y-4">
            <input type="hidden" name="next" value={next} />
            <input
              type="password"
              name="password"
              required
              autoFocus
              autoComplete="current-password"
              placeholder="비밀번호"
              className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff9900]"
            />
            {state.error && <p className="text-sm text-red-500" aria-live="polite">{state.error}</p>}
            <button
              type="submit"
              disabled={pending}
              className="w-full py-2.5 rounded-xl bg-[#ff9900] text-white font-semibold hover:bg-[#e68a00] disabled:opacity-60 transition-colors"
            >
              {pending ? '확인 중...' : '잠금 해제'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
