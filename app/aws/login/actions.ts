'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import {
  AWS_AUTH_COOKIE,
  AWS_AUTH_MAX_AGE,
  getAwsPassword,
  isValidAwsPassword,
  makeAwsToken,
  safeAwsNext,
} from '@/lib/awsAuth'

export interface UnlockState {
  error: string
}

export async function unlockAws(_prev: UnlockState, formData: FormData): Promise<UnlockState> {
  const password = getAwsPassword()
  if (!password) return { error: '서버에 AWS_ACCESS_PASSWORD 환경변수가 설정되지 않았습니다.' }

  const input = String(formData.get('password') ?? '')
  if (!(await isValidAwsPassword(input))) {
    // 무차별 대입 속도 늦추기
    await new Promise((r) => setTimeout(r, 800))
    return { error: '비밀번호가 올바르지 않습니다.' }
  }

  const cookieStore = await cookies()
  cookieStore.set(AWS_AUTH_COOKIE, await makeAwsToken(password), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: AWS_AUTH_MAX_AGE,
  })
  redirect(safeAwsNext(String(formData.get('next') ?? '')))
}

export async function lockAws() {
  const cookieStore = await cookies()
  cookieStore.delete(AWS_AUTH_COOKIE)
  redirect('/')
}
