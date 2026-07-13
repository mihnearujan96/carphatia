import { useI18n } from '../../i18n/useI18n'
import styles from './FAQ.module.css'

export function FAQ() {
  const { t } = useI18n()
  const items = t('faq.items')
  const list = Array.isArray(items) ? items : []

  return (
    <section id="faq" className={styles.section} aria-labelledby="faq-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>{t('faq.label')}</p>
          <h2 id="faq-title" className={styles.title}>
            {t('faq.title')}
          </h2>
        </header>

        <dl className={styles.list}>
          {list.map((item) => (
            <div key={item.q} className={styles.item}>
              <dt className={styles.question}>{item.q}</dt>
              <dd className={styles.answer}>{item.a}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
