import { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { HASH_TO_PATH, getRouteByPath } from '../../seo/routes'

const HEADER_OFFSET = 88

export function RouteScroller() {
  const { pathname, hash } = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    if (hash && HASH_TO_PATH[hash]) {
      navigate(HASH_TO_PATH[hash], { replace: true })
    }
  }, [hash, navigate])

  useEffect(() => {
    const route = getRouteByPath(pathname)
    const sectionId = route.sectionId

    if (!sectionId || sectionId === 'top') {
      window.scrollTo({ top: 0, behavior: 'auto' })
      return
    }

    const scrollToSection = () => {
      const el = document.getElementById(sectionId)
      if (!el) return
      const top = el.getBoundingClientRect().top + window.scrollY - HEADER_OFFSET
      window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' })
    }

    const timer = window.setTimeout(scrollToSection, 50)
    return () => window.clearTimeout(timer)
  }, [pathname])

  return null
}
