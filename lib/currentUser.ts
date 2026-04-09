// 모듈 수준 싱글톤 — storage.ts에서 순환 의존 없이 현재 유저 ID 참조용
let currentUserId: string | null = null

export function setCurrentUserId(id: string | null) {
  currentUserId = id
}

export function getCurrentUserId(): string | null {
  return currentUserId
}
