import { useCallback, useEffect, useMemo, useState } from 'react'
import { STRINGS } from './strings'
import { I18nContext } from './i18nContext'

const STORAGE_KEY = 'carphatia-lang'

function getByPath(obj, path) {
  const keys = path.split('.')
  let cur = obj
  for (const k of keys) {
    if (cur == null) return undefined
    cur = cur[k]
  }
  return cur
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'ro'
    const saved = window.localStorage.getItem(STORAGE_KEY)
    return saved === 'en' || saved === 'ro' ? saved : 'ro'
  })

  const setLang = useCallback((next) => {
    setLangState(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }, [])

  const strings = STRINGS[lang] ?? STRINGS.ro

  const t = useCallback(
    (path) => {
      const v = getByPath(strings, path)
      if (typeof v === 'string') return v
      if (Array.isArray(v)) return v
      if (v != null && typeof v === 'object') return v
      return path
    },
    [strings],
  )

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'ro'
    const title = getByPath(STRINGS[lang], 'meta.title')
    const desc = getByPath(STRINGS[lang], 'meta.description')
    if (typeof title === 'string') document.title = title
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    if (typeof desc === 'string') meta.setAttribute('content', desc)
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t, strings }),
    [lang, setLang, t, strings],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
