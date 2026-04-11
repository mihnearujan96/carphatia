import { useI18n } from '../../i18n/useI18n'
import styles from './About.module.css'

export function About() {
  const { t } = useI18n()

  return (
    <section id="about" className={styles.section} aria-labelledby="about-title">
      <div className={styles.inner}>
        <p className={styles.label}>{t('about.label')}</p>
        <h2 id="about-title" className={styles.title}>
          {t('about.title')}
        </h2>
        <div className={styles.grid}>
          <div className={styles.col}>
            <p>{t('about.p1')}</p>
            <p>{t('about.pHistory')}</p>
            <p>{t('about.p2')}</p>
          </div>
          <div className={styles.col}>
            <p>{t('about.pMountains')}</p>
            <div className={styles.accent}>
              <p>{t('about.accent')}</p>
            </div>
            <p style={{ marginTop: '1.5rem' }}>{t('about.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
