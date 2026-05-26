import { useEffect, useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import styles from './Navbar.module.css'

const NAV = [
  { href: '#about', key: 'about' },
  { href: '#gallery', key: 'gallery' },
  { href: '#experience', key: 'experience' },
  { href: '#next-event', key: 'nextEvent' },
  { href: '#location', key: 'location' },
  { href: '#contact', key: 'contact' },
]

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
        <a href="#top" className={styles.brand} onClick={() => setOpen(false)}>
          <img
            src="/dadada.png"
            alt=""
            className={styles.logo}
            width={600}
            height={192}
          />
          <span className="sr-only">{t('nav.homeSr')}</span>
        </a>

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
          {NAV.map((item) => (
            <a key={item.href} className={styles.navLink} href={item.href}>
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <a className={styles.cta} href={t('reservations.telHref')}>
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
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.mobileLink}
              onClick={() => setOpen(false)}
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <a
            className={styles.mobileCta}
            href={t('reservations.telHref')}
            onClick={() => setOpen(false)}
          >
            {t('nav.cta')}
          </a>
        </div>
      )}
    </header>
  )
}
