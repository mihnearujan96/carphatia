import { galleryItems } from '../../data/siteContent'
import { useI18n } from '../../i18n/useI18n'
import styles from './Gallery.module.css'

const variantClass = {
  peaks: styles.peaks,
  garden: styles.garden,
  alpine: styles.alpine,
  golden: styles.golden,
  ridge: styles.ridge,
  forest: styles.forest,
}

const layout = [
  'cardLarge',
  'cardMed',
  'cardWide',
  'cardTall',
  'cardWide',
  'cardWide',
]

export function Gallery() {
  const { t } = useI18n()

  return (
    <section id="gallery" className={styles.section} aria-labelledby="gallery-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <div>
            <p className={styles.label}>{t('gallery.label')}</p>
            <h2 id="gallery-title" className={styles.title}>
              {t('gallery.title')}
            </h2>
          </div>
          <p className={styles.sub}>{t('gallery.sub')}</p>
        </header>

        <div className={styles.grid}>
          {galleryItems.map((item, i) => {
            const g = t(`gallery.items.${item.id}`)
            const caption = typeof g?.caption === 'string' ? g.caption : ''
            const badge = typeof g?.badge === 'string' ? g.badge : ''
            const alt = typeof g?.alt === 'string' ? g.alt : ''
            return (
              <article
                key={item.id}
                className={`${styles.card} ${styles[layout[i] || 'cardWide']}`}
              >
                <span className={styles.badge}>{badge}</span>
                {item.imageSrc ? (
                  <img
                    className={styles.img}
                    src={item.imageSrc}
                    alt={alt}
                    loading="lazy"
                  />
                ) : (
                  <div
                    className={`${styles.placeholder} ${variantClass[item.variant] || styles.peaks}`}
                    aria-hidden="true"
                  />
                )}
                <p className={styles.caption}>{caption}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
