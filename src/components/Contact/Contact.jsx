import { useState } from 'react'
import { useI18n } from '../../i18n/useI18n'
import styles from './Contact.module.css'

export function Contact() {
  const { t } = useI18n()
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

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

        {sent ? (
          <p className={styles.success} role="status">
            {t('contact.success')}
          </p>
        ) : (
          <form className={styles.form} onSubmit={handleSubmit} noValidate>
            <div className={styles.field}>
              <label className={styles.labelText} htmlFor="name">
                {t('contact.name')}
              </label>
              <input
                id="name"
                name="name"
                className={styles.input}
                type="text"
                autoComplete="name"
                required
                placeholder={t('contact.placeholderName')}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.labelText} htmlFor="email">
                {t('contact.email')}
              </label>
              <input
                id="email"
                name="email"
                className={styles.input}
                type="email"
                autoComplete="email"
                required
                placeholder={t('contact.placeholderEmail')}
              />
            </div>
            <div className={styles.field}>
              <label className={styles.labelText} htmlFor="message">
                {t('contact.message')}
              </label>
              <textarea
                id="message"
                name="message"
                className={styles.textarea}
                required
                placeholder={t('contact.placeholderMessage')}
              />
            </div>
            <div className={styles.submitRow}>
              <button type="submit" className={styles.submit}>
                {t('contact.submit')}
              </button>
              <p className={styles.note}>{t('contact.note')}</p>
            </div>
          </form>
        )}
      </div>
    </section>
  )
}
