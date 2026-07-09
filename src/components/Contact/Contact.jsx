import { useI18n } from '../../i18n/useI18n'
import styles from './Contact.module.css'

export function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" className={styles.section} aria-labelledby="contact-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>{t('contact.label')}</p>
          <h2 id="contact-title" className={styles.title}>
            {t('contact.title')}
          </h2>
          <p className={styles.sub}>{t('contact.sub')}</p>
        </header>

        <div className={styles.panel}>
          <div className={styles.actions}>
            <a
              className={styles.ctaCall}
              href={t('reservations.buyLink')}
              target="_blank"
              rel="noopener noreferrer"
            >
              {t('reservations.callCta')}
            </a>
          </div>
          <div className={styles.noteWrap}>
            <span className={styles.noteEmoji} aria-hidden="true">
              {t('contact.noteEmoji')}
            </span>
            <p className={styles.note}>{t('contact.note')}</p>
          </div>
          <p className={styles.tablesNote}>{t('contact.tablesNote')}</p>
        </div>
      </div>
    </section>
  )
}
