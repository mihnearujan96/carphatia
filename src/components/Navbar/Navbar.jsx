import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/useI18n'
import { NAV_ROUTES } from '../../seo/routes'
import styles from './Navbar.module.css'

export function Navbar() {
  const { lang, setLang, t } = useI18n()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`${styles.bar} ${scrolled || open ? styles.barSolid : ''} ${scrolled ? styles.barCompact : ''}`}
    >
      <div className={styles.inner}>
        <Link to="/" className={styles.brand} onClick={() => setOpen(false)}>
          <img
            src="/dadada.png"
            alt="KARPATHIA"
            className={styles.logo}
            width={600}
            height={192}
          />
          <span className="sr-only">{t('nav.homeSr')}</span>
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <div
            className={styles.lang}
            role="group"
            aria-label={t('nav.langSwitchSr')}
          >
            <button
              type="button"
              className={`${styles.langBtn} ${lang === 'ro' ? styles.langBtnActive : ''}`}
              onClick={() => setLang('ro')}
              aria-pressed={lang === 'ro'}
            >
              RO
            </button>
            <button
              type="button"
              className={`${styles.langBtn} ${lang === 'en' ? styles.langBtnActive : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          {NAV_ROUTES.map((item) => (
            <Link key={item.path} className={styles.navLink} to={item.path}>
              {t(`nav.${item.navKey}`)}
            </Link>
          ))}
          <a
            className={styles.cta}
            href={t('nav.ctaLink')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('nav.cta')}
          </a>
        </nav>

        <button
          type="button"
          className={`${styles.menuBtn} ${open ? styles.menuBtnOpen : ''}`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
          <span className="sr-only">{t('nav.menuSr')}</span>
        </button>
      </div>

      {open && (
        <div id="mobile-nav" className={styles.mobilePanel}>
          <div
            className={styles.mobileLang}
            role="group"
            aria-label={t('nav.langSwitchSr')}
          >
            <button
              type="button"
              className={`${styles.langBtn} ${lang === 'ro' ? styles.langBtnActive : ''}`}
              onClick={() => setLang('ro')}
              aria-pressed={lang === 'ro'}
            >
              RO
            </button>
            <button
              type="button"
              className={`${styles.langBtn} ${lang === 'en' ? styles.langBtnActive : ''}`}
              onClick={() => setLang('en')}
              aria-pressed={lang === 'en'}
            >
              EN
            </button>
          </div>
          {NAV_ROUTES.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {t(`nav.${item.navKey}`)}
            </Link>
          ))}
          <a
            className={styles.mobileCta}
            href={t('nav.ctaLink')}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
          >
            {t('nav.cta')}
          </a>
        </div>
      )}
    </header>
  )
}
