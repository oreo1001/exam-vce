import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { AWS_AUTH_COOKIE, isValidAwsToken } from '@/lib/awsAuth'

// /aws 하위 전체를 비밀번호 쿠키로 잠근다 (/aws/login 만 예외)
export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  if (pathname === '/aws/login') return NextResponse.next()

  const ok = await isValidAwsToken(request.cookies.get(AWS_AUTH_COOKIE)?.value)
  if (ok) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = '/aws/login'
  url.search = `?next=${encodeURIComponent(pathname + search)}`
  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/aws', '/aws/:path*'],
}
