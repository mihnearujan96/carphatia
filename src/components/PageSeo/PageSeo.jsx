import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useI18n } from '../../i18n/useI18n'
import { absoluteUrl, getRouteByPath } from '../../seo/routes'
import { syncStructuredData } from '../../seo/structuredData'
import { STRINGS } from '../../i18n/strings'

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

export function PageSeo() {
  const { pathname } = useLocation()
  const { lang } = useI18n()
  const route = getRouteByPath(pathname)
  const baseMeta = STRINGS[lang]?.meta ?? STRINGS.ro.meta
  const pageMeta = route.meta[lang] ?? route.meta.ro
  const canonical = absoluteUrl(route.path)

  useEffect(() => {
    document.documentElement.lang = lang === 'en' ? 'en' : 'ro'
    document.title = pageMeta.title

    setMetaContent('meta[name="description"]', pageMeta.description)
    setMetaContent('meta[name="keywords"]', baseMeta.keywords)
    setMetaContent('meta[property="og:title"]', pageMeta.title)
    setMetaContent('meta[property="og:description"]', pageMeta.description)
    setMetaContent('meta[property="og:url"]', canonical)
    setMetaContent('meta[property="og:image"]', baseMeta.ogImage)
    setMetaContent('meta[property="og:locale"]', lang === 'en' ? 'en_US' : 'ro_RO')
    setMetaContent('meta[property="og:locale:alternate"]', lang === 'en' ? 'ro_RO' : 'en_US')
    setMetaContent('meta[name="twitter:title"]', pageMeta.title)
    setMetaContent('meta[name="twitter:description"]', pageMeta.description)
    setMetaContent('meta[name="twitter:image"]', baseMeta.ogImage)
    setMetaContent('meta[property="og:image:alt"]', baseMeta.ogImageAlt)
    setMetaContent('meta[name="twitter:image:alt"]', baseMeta.ogImageAlt)

    const canonicalEl = document.querySelector('link[rel="canonical"]')
    if (canonicalEl) canonicalEl.setAttribute('href', canonical)

    syncStructuredData(lang, pathname)
  }, [lang, pathname, pageMeta, baseMeta, canonical])

  return null
}
