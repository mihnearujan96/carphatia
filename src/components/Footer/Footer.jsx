import { useI18n } from '../../i18n/useI18n'
import styles from './Footer.module.css'

const LINKS = [
  { href: '#about', key: 'about' },
  { href: '#gallery', key: 'gallery' },
  { href: '#experience', key: 'experience' },
  { href: '#next-event', key: 'nextEvent' },
  { href: '#contact', key: 'contact' },
]

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  const meta = t('footer.meta').replace('{year}', String(year))

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <img
            src="/kjvkllv.png"
            alt=""
            className={styles.logo}
            width={560}
            height={176}
          />
          <span className={styles.brandText}>CARPHATIA</span>
        </a>
        <nav className={styles.nav} aria-label="Footer">
          {LINKS.map((l) => (
            <a key={l.href} href={l.href}>
              {t(`nav.${l.key}`)}
            </a>
          ))}
        </nav>
        <p className={styles.meta}>{meta}</p>
      </div>
    </footer>
  )
}
