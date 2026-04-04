import { useI18n } from '../../i18n/useI18n'
import styles from './Experience.module.css'

function IconMountain() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M3 20h18L14 8l-3 5-3-4-5 11z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M10 9l2 2.5"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
    </svg>
  )
}

function IconMusic() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M9 18V5l12-2v13"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7" cy="18" r="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="19" cy="16" r="3" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

function IconHeritage() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M4 10l8-5 8 5v10H4V10z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path d="M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  )
}

function IconPass() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect
        x="3"
        y="6"
        width="18"
        height="13"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.6"
      />
      <path d="M8 6V4h8v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12.5" r="2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  )
}

const icons = [IconMountain, IconMusic, IconHeritage, IconPass]

export function Experience() {
  const { t } = useI18n()
  const cards = t('experience.cards')
  const list = Array.isArray(cards) ? cards : []

  return (
    <section
      id="experience"
      className={styles.section}
      aria-labelledby="experience-title"
    >
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.label}>{t('experience.label')}</p>
          <h2 id="experience-title" className={styles.title}>
            {t('experience.title')}
          </h2>
          <p className={styles.sub}>{t('experience.sub')}</p>
        </header>

        <div className={styles.grid}>
          {list.map((ex, i) => {
            const Icon = icons[i] || IconMountain
            return (
              <article key={`exp-${i}`} className={styles.card}>
                <div className={styles.iconWrap}>
                  <Icon />
                </div>
                <h3 className={styles.cardTitle}>{ex.title}</h3>
                <p className={styles.cardText}>{ex.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
