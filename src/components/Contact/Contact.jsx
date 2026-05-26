import { useI18n } from '../../i18n/useI18n'
import { buildSmsHref } from '../../utils/reservations'
import styles from './Contact.module.css'

export function Contact() {
  const { t } = useI18n()
  const smsBody = t('reservations.smsBody')
  const messageHref =
    typeof smsBody === 'string' ? buildSmsHref(smsBody) : buildSmsHref('')

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
          <a className={styles.phone} href={t('reservations.telHref')}>
            {t('reservations.phone')}
          </a>
          <div className={styles.actions}>
            <a className={styles.ctaCall} href={t('reservations.telHref')}>
              {t('reservations.callCta')}
            </a>
            <a className={styles.ctaSms} href={messageHref}>
              {t('reservations.smsCta')}
            </a>
          </div>
          <p className={styles.note}>{t('contact.note')}</p>
        </div>
      </div>
    </section>
  )
}
