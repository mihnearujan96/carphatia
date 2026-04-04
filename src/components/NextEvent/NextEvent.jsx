import { useI18n } from '../../i18n/useI18n'
import styles from './NextEvent.module.css'

export function NextEvent() {
  const { t } = useI18n()

  return (
    <section
      id="next-event"
      className={styles.section}
      aria-labelledby="next-event-title"
    >
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.content}>
            <p className={styles.label}>{t('nextEvent.label')}</p>
            <h2 id="next-event-title" className={styles.date}>
              {t('nextEvent.title')}
            </h2>
            <p className={styles.sub}>{t('nextEvent.sub')}</p>
            <p className={styles.teaser}>{t('nextEvent.teaser')}</p>
            <p className={styles.note}>{t('nextEvent.note')}</p>
            <a className={styles.cta} href="#contact">
              {t('nav.cta')}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
