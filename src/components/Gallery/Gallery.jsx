import { useEffect, useRef, useState } from 'react'
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

/** Încarcă MP4 doar când cardul e aproape de viewport — evită 4 descărcări simultane la load. */
function GalleryLoopVideo({ src, className, ariaLabel }) {
  const wrapRef = useRef(null)
  const videoRef = useRef(null)
  const [load, setLoad] = useState(false)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoad(true)
          io.disconnect()
        }
      },
      { rootMargin: '180px', threshold: 0 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (!load) return
    const v = videoRef.current
    if (!v) return
    const p = v.play()
    if (p !== undefined) p.catch(() => {})
  }, [load])

  return (
    <div ref={wrapRef} className={styles.videoWrap}>
      <video
        ref={videoRef}
        className={className}
        src={load ? src : undefined}
        autoPlay={load}
        muted
        loop
        playsInline
        preload={load ? 'metadata' : 'none'}
        aria-label={ariaLabel}
      />
    </div>
  )
}

/** Grid 2×2 egal — doar 4 clipuri, fără imagini statice */
const layout = ['cardCell', 'cardCell', 'cardCell', 'cardCell']

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
                {item.videoSrc ? (
                  <GalleryLoopVideo
                    src={item.videoSrc}
                    className={styles.media}
                    ariaLabel={alt}
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
