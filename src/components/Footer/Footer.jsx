import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/useI18n'
import { NAV_ROUTES } from '../../seo/routes'
import styles from './Footer.module.css'

const FOOTER_KEYS = ['about', 'gallery', 'experience', 'nextEvent', 'location', 'contact']

export function Footer() {
  const { t } = useI18n()
  const year = new Date().getFullYear()
  const meta = t('footer.meta').replace('{year}', String(year))
  const links = NAV_ROUTES.filter((r) => FOOTER_KEYS.includes(r.navKey))

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          <img
            src="/dadada.png"
            alt="KARPATHIA"
            className={styles.logo}
            width={560}
            height={176}
          />
          <span className={styles.brandText}>KARPATHIA</span>
        </Link>
        <nav className={styles.nav} aria-label="Footer">
          {links.map((l) => (
            <Link key={l.path} to={l.path}>
              {t(`nav.${l.navKey}`)}
            </Link>
          ))}
        </nav>
        <p className={styles.meta}>{meta}</p>
      </div>
    </footer>
  )
}
