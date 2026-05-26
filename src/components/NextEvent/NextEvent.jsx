import { useI18n } from '../../i18n/useI18n'
import styles from './NextEvent.module.css'

function MapPinIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 21s7-4.35 7-11a7 7 0 1 0-14 0c0 6.65 7 11 7 11z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="10" r="2.5" fill="currentColor" />
    </svg>
  )
}

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
            </header>

            <ul className={styles.events} aria-label={t('nextEvent.title')}>
              {list.map((event) =>
                event.highlight ? (
                  <li key={event.date} className={styles.eventFest}>
                    <p className={styles.eventFestDate}>{event.date}</p>
                    <p className={styles.eventFestTitle}>{event.title}</p>
                  </li>
                ) : (
                  <li key={event.date} className={styles.event}>
                    <span className={styles.eventDate}>{event.date}</span>
                    <span className={styles.eventTitle}>{event.title}</span>
                  </li>
                ),
              )}
            </ul>

            <div
              id="location"
              className={styles.location}
              aria-labelledby="next-event-location"
            >
              <div className={styles.locationHeader}>
                <span className={styles.pin} aria-hidden="true">
                  <MapPinIcon />
                </span>
                <div>
                  <h3 id="next-event-location" className={styles.locationLabel}>
                    {t('nextEvent.locationLabel')}
                  </h3>
                  <p className={styles.venue}>{t('nextEvent.venueName')}</p>
                  <p className={styles.address}>{t('nextEvent.address')}</p>
                </div>
              </div>

              <div className={styles.mapWrap}>
                <iframe
                  className={styles.map}
                  title={t('nextEvent.venueName')}
                  src={t('nextEvent.mapEmbed')}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>

              <a
                className={styles.mapLink}
                href={t('nextEvent.mapsLink')}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t('nextEvent.openMaps')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
