import { useI18n } from '../../i18n/useI18n'
import styles from './NextEvent.module.css'

export function NextEvent() {
  const { t } = useI18n()
  const events = t('nextEvent.events')
  const list = Array.isArray(events) ? events : []

  return (
    <section
      id="next-event"
      className={styles.section}
      aria-labelledby="next-event-title"
    >
      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.content}>
            <header className={styles.header}>
              <p className={styles.label}>{t('nextEvent.label')}</p>
              <h2 id="next-event-title" className={styles.title}>
                {t('nextEvent.title')}
              </h2>
              <p className={styles.sub}>{t('nextEvent.sub')}</p>
              <a className={styles.rsvp} href={t('nextEvent.rsvpHref')}>
                <span className={styles.rsvpLabel}>{t('nextEvent.rsvpLabel')}</span>
                <span className={styles.rsvpPhone}>{t('nextEvent.rsvpPhone')}</span>
              </a>
            </header>

            <ul className={styles.events} aria-label={t('nextEvent.title')}>
              {list.map((event) => (
                <li
                  key={event.date}
                  className={`${styles.event} ${event.highlight ? styles.eventHighlight : ''}`}
                >
                  <span className={styles.eventDate}>{event.date}</span>
                  <span
                    className={
                      event.highlight ? styles.eventTitleFest : styles.eventTitle
                    }
                  >
                    {event.title}
                  </span>
                </li>
              ))}
            </ul>

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
