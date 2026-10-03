// AWS 영역 잠금용 — proxy.ts 와 로그인 Server Action 에서만 사용 (서버 전용)
// 쿠키에는 비밀번호 자체가 아니라 HMAC 값만 저장한다. 비밀번호를 바꾸면 기존 쿠키는 자동 무효화.

export const AWS_AUTH_COOKIE = 'aws_unlock'
export const AWS_AUTH_MAX_AGE = 60 * 60 * 24 * 365

export function getAwsPassword(): string | null {
  return process.env.AWS_ACCESS_PASSWORD || null
}

export async function makeAwsToken(password: string): Promise<string> {
  const enc = new TextEncoder()
  const key = await crypto.subtle.importKey(
    'raw',
    enc.encode(password),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  )
  const sig = await crypto.subtle.sign('HMAC', key, enc.encode('exam-vce:aws-unlock'))
  return Array.from(new Uint8Array(sig), (b) => b.toString(16).padStart(2, '0')).join('')
}

function safeEqual(a: string, b: string): boolean {
  if (a.length !== b.length) return false
  let diff = 0
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i)
  return diff === 0
}

export async function isValidAwsToken(token: string | undefined): Promise<boolean> {
  const password = getAwsPassword()
  if (!password || !token) return false
  return safeEqual(token, await makeAwsToken(password))
}

export async function isValidAwsPassword(input: string): Promise<boolean> {
  const password = getAwsPassword()
  if (!password) return false
  return safeEqual(await makeAwsToken(input), await makeAwsToken(password))
}

// 로그인 후 돌아갈 경로는 /aws 하위로만 허용 (open redirect 방지)
export function safeAwsNext(next: string | null | undefined): string {
  if (next && /^\/aws(\/[\w\-/?=&%.]*)?$/.test(next) && !next.startsWith('/aws/login') && !next.includes('//')) return next
  return '/aws'
}
