const KEY = 'aie-lang'

export type AieLang = 'ko' | 'en'

export function getAieLang(): AieLang {
  if (typeof window === 'undefined') return 'ko'
  return (localStorage.getItem(KEY) as AieLang) || 'ko'
}

export function setAieLang(lang: AieLang): void {
  localStorage.setItem(KEY, lang)
}
