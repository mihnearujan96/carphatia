import { useI18n } from '../../i18n/useI18n'
import styles from './Stays.module.css'

function StayCard({ id, title, text, cta, href }) {
  return (
    <article id={id} className={styles.card} aria-label={title}>
      <h3 className={styles.cardTitle}>{title}</h3>
      <p className={styles.cardText}>{text}</p>
      <a
        className={styles.cardCta}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cta}
      </a>
    </article>
  )
}

export function Stays() {
  const { t } = useI18n()

  return (
    <section id="stays" className={styles.section} aria-labelledby="stays-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>{t('stays.label')}</p>
          <h2 id="stays-title" className={styles.title}>
            {t('stays.title')}
          </h2>
          <p className={styles.sub}>{t('stays.sub')}</p>
        </header>

        <div className={styles.grid}>
          <StayCard
            id="stay-festival"
            title={t('stays.festivalTitle')}
            text={t('stays.festivalText')}
            cta={t('stays.festivalCta')}
            href={t('stays.festivalLink')}
          />
          <StayCard
            id="stay-horezu"
            title={t('stays.horezuTitle')}
            text={t('stays.horezuText')}
            cta={t('stays.horezuCta')}
            href={t('stays.horezuLink')}
          />
        </div>
      </div>
    </section>
  )
}
