import { useI18n } from '../../i18n/useI18n'
import styles from './Atv.module.css'

export function Atv() {
  const { t } = useI18n()

  return (
    <section id="atv" className={styles.section} aria-labelledby="atv-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>{t('atv.label')}</p>
          <h2 id="atv-title" className={styles.title}>
            {t('atv.title')}
          </h2>
          <p className={styles.sub}>{t('atv.sub')}</p>
        </header>

        <div className={styles.card}>
          <img
            className={styles.image}
            src="/images/atv-wild.png"
            alt={t('atv.imageAlt')}
            loading="lazy"
          />
          <div className={styles.phones}>
            <p className={styles.phoneLabel}>{t('atv.phoneLabel')}</p>
            <div className={styles.phoneList}>
              <a className={styles.phone} href={t('atv.phone1Href')}>
                {t('atv.phone1')}
              </a>
              <a className={styles.phone} href={t('atv.phone2Href')}>
                {t('atv.phone2')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
