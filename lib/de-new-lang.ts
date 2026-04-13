const KEY = 'de-new-lang'

export type DeNewLang = 'ko' | 'en'

export function getDeNewLang(): DeNewLang {
  if (typeof window === 'undefined') return 'ko'
  return (localStorage.getItem(KEY) as DeNewLang) || 'ko'
}

export function setDeNewLang(lang: DeNewLang): void {
  localStorage.setItem(KEY, lang)
}
