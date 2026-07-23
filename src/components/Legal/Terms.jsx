import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { useI18n } from '../../i18n/useI18n'
import { Footer } from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import { PageSeo } from '../PageSeo/PageSeo'
import styles from './Terms.module.css'

export function TermsPage() {
  const { t } = useI18n()
  const sections = t('terms.sections')
  const list = Array.isArray(sections) ? sections : []
  const company = t('terms.company')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <>
      <PageSeo />
      <div className="appShell">
        <Navbar />
        <main className={styles.main}>
          <article className={styles.article}>
            <p className={styles.label}>{t('terms.label')}</p>
            <h1 className={styles.title}>{t('terms.title')}</h1>
            <p className={styles.updated}>{t('terms.updated')}</p>
            <p className={styles.intro}>{t('terms.intro')}</p>

            {company && typeof company === 'object' ? (
              <aside className={styles.company} aria-label={t('terms.companyHeading')}>
                <h2 className={styles.companyTitle}>{t('terms.companyHeading')}</h2>
                <dl className={styles.companyList}>
                  <div>
                    <dt>{t('terms.fields.name')}</dt>
                    <dd>{company.name}</dd>
                  </div>
                  <div>
                    <dt>{t('terms.fields.cui')}</dt>
                    <dd>{company.cui}</dd>
                  </div>
                  <div>
                    <dt>{t('terms.fields.regCom')}</dt>
                    <dd>{company.regCom}</dd>
                  </div>
                  <div>
                    <dt>{t('terms.fields.address')}</dt>
                    <dd>{company.address}</dd>
                  </div>
                </dl>
              </aside>
            ) : null}

            {list.map((section) => (
              <section key={section.title} className={styles.section}>
                <h2 className={styles.sectionTitle}>{section.title}</h2>
                {Array.isArray(section.paragraphs)
                  ? section.paragraphs.map((p) => (
                      <p key={p} className={styles.p}>
                        {p}
                      </p>
                    ))
                  : null}
                {Array.isArray(section.bullets) && section.bullets.length > 0 ? (
                  <ul className={styles.ul}>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </section>
            ))}

            <p className={styles.back}>
              <Link to="/">{t('terms.backHome')}</Link>
            </p>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
