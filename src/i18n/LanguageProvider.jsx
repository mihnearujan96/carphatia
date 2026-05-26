import { useCallback, useEffect, useMemo, useState } from 'react'
import { STRINGS } from './strings'
import { I18nContext } from './i18nContext'

const STORAGE_KEY = 'karpathia-lang'
const LEGACY_STORAGE_KEY = 'carphatia-lang'

function getByPath(obj, path) {
  const keys = path.split('.')
  let cur = obj
  for (const k of keys) {
    if (cur == null) return undefined
    cur = cur[k]
  }
  return cur
}

function setMetaContent(selector, content) {
  if (typeof content !== 'string') return
  let el = document.querySelector(selector)
  if (!el) {
    const isProperty = selector.includes('property=')
    el = document.createElement('meta')
    if (isProperty) {
      const match = selector.match(/property="([^"]+)"/)
      if (match) el.setAttribute('property', match[1])
    } else {
      const match = selector.match(/name="([^"]+)"/)
      if (match) el.setAttribute('name', match[1])
    }
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    if (typeof window === 'undefined') return 'ro'
    const saved =
      window.localStorage.getItem(STORAGE_KEY) ??
      window.localStorage.getItem(LEGACY_STORAGE_KEY)
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
    const meta = STRINGS[lang]?.meta ?? STRINGS.ro.meta
    document.documentElement.lang = lang === 'en' ? 'en' : 'ro'

    if (typeof meta.title === 'string') document.title = meta.title
    setMetaContent('meta[name="description"]', meta.description)
    setMetaContent('meta[name="keywords"]', meta.keywords)
    setMetaContent('meta[property="og:title"]', meta.title)
    setMetaContent('meta[property="og:description"]', meta.description)
    setMetaContent('meta[property="og:url"]', meta.siteUrl)
    setMetaContent('meta[property="og:image"]', meta.ogImage)
    setMetaContent('meta[property="og:locale"]', lang === 'en' ? 'en_US' : 'ro_RO')
    setMetaContent('meta[name="twitter:title"]', meta.title)
    setMetaContent('meta[name="twitter:description"]', meta.description)
    setMetaContent('meta[name="twitter:image"]', meta.ogImage)

    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical && typeof meta.siteUrl === 'string') {
      canonical.setAttribute('href', meta.siteUrl)
    }
  }, [lang])

  const value = useMemo(
    () => ({ lang, setLang, t, strings }),
    [lang, setLang, t, strings],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}
