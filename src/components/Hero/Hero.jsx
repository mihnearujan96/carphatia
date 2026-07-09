import { useI18n } from '../../i18n/useI18n'
import styles from './Hero.module.css'

export function Hero() {
  const { t } = useI18n()

  return (
    <section id="top" className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.bg} aria-hidden="true">
        <div className={`${styles.bgLayer} ${styles.mesh}`} />
        <div className={`${styles.bgLayer} ${styles.grain}`} />
        <div className={styles.ridge} />
        <div className={styles.ridgeHighlight} />
        <div className={styles.vignette} />
      </div>

      <div className={styles.content}>
        <p className={styles.eyebrow}>{t('hero.eyebrow')}</p>
        <h1 id="hero-title" className={styles.headline}>
          {t('hero.title')}
        </h1>
        <p className={styles.sub}>{t('hero.sub')}</p>
        <div className={styles.actions}>
          <a
            className={styles.btnPrimary}
            href={t('hero.ctaPrimaryLink')}
            target="_blank"
            rel="noopener noreferrer"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a className={styles.btnGhost} href="#gallery">
            {t('hero.ctaSecondary')}
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true" />
    </section>
  )
}
