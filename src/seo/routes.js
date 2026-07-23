const SITE_ORIGIN = 'https://karpathia.ro'

/** @typedef {{ path: string, sectionId: string, navKey: string | null, hash: string, meta: { ro: { title: string, description: string }, en: { title: string, description: string } } }} SiteRoute */

/** @type {SiteRoute[]} */
export const SITE_ROUTES = [
  {
    path: '/',
    sectionId: 'top',
    navKey: null,
    hash: '#top',
    meta: {
      ro: {
        title: 'KARPATHIA | Evenimente de vară · Horezu · ceramică UNESCO & festival',
        description:
          'KARPATHIA la Horezu: evenimente de vară, muzică și festival la poalele Căpățânii. Ceramică de Horezu — patrimoniu UNESCO — olărit, târguri și Mănăstirea Hurezi. Bilete: karpathia.ro.',
      },
      en: {
        title: 'KARPATHIA | Summer events · Horezu · UNESCO ceramics & festival',
        description:
          'KARPATHIA in Horezu: summer events, music and festival life at the foot of the Căpățânii. UNESCO ceramics, pottery and Horezu Monastery. Tickets: karpathia.ro.',
      },
    },
  },
  {
    path: '/despre',
    sectionId: 'about',
    navKey: 'about',
    hash: '#about',
    meta: {
      ro: {
        title: 'Despre · KARPATHIA | Festival & experiență la Horezu',
        description:
          'Despre KARPATHIA: festival la Horezu, Vâlcea — muzică, munte, ceramică UNESCO și tradiții oltenești la poalele Căpățânii.',
      },
      en: {
        title: 'About · KARPATHIA | Festival & experience in Horezu',
        description:
          'About KARPATHIA: festival in Horezu, Vâlcea — music, mountains, UNESCO ceramics and Oltenia traditions.',
      },
    },
  },
  {
    path: '/galerie',
    sectionId: 'gallery',
    navKey: 'gallery',
    hash: '#gallery',
    meta: {
      ro: {
        title: 'Galerie · KARPATHIA | Atmosferă festival Horezu',
        description:
          'Galerie foto și video KARPATHIA — festival, munte, olărit și ceramică de Horezu în imagini.',
      },
      en: {
        title: 'Gallery · KARPATHIA | Festival mood in Horezu',
        description:
          'KARPATHIA gallery — festival, mountains, pottery and Horezu ceramics in photos and video.',
      },
    },
  },
  {
    path: '/experienta',
    sectionId: 'experience',
    navKey: 'experience',
    hash: '#experience',
    meta: {
      ro: {
        title: 'Experiență · KARPATHIA | Muzică, munte & ceramică',
        description:
          'Experiența KARPATHIA: muzică, poteci montane, meșteșug și festival într-o zi la Horezu, Vâlcea.',
      },
      en: {
        title: 'Experience · KARPATHIA | Music, mountains & craft',
        description:
          'The KARPATHIA experience: music, mountain trails, craft and festival in one day in Horezu.',
      },
    },
  },
  {
    path: '/evenimente',
    sectionId: 'next-event',
    navKey: 'nextEvent',
    hash: '#next-event',
    meta: {
      ro: {
        title: 'Evenimente · KARPATHIA | Festival 8 august Horezu',
        description:
          'Program evenimente KARPATHIA — festival pe 8 august 2026 la The Park, Horezu, județul Vâlcea.',
      },
      en: {
        title: 'Events · KARPATHIA | Festival 8 August Horezu',
        description:
          'KARPATHIA events schedule — festival on 8 August 2026 at The Park, Horezu, Vâlcea County.',
      },
    },
  },
  {
    path: '/atv',
    sectionId: 'atv',
    navKey: 'atv',
    hash: '#atv',
    meta: {
      ro: {
        title: 'ATV-uri · KARPATHIA | Trasee montane Horezu',
        description:
          'Închiriere ATV-uri în zona Horezu — trasee montane și off-road lângă festivalul KARPATHIA.',
      },
      en: {
        title: 'ATVs · KARPATHIA | Mountain routes near Horezu',
        description:
          'ATV rental near Horezu — mountain and off-road routes by the KARPATHIA festival.',
      },
    },
  },
  {
    path: '/cazari',
    sectionId: 'stays',
    navKey: 'stay',
    hash: '#stays',
    meta: {
      ro: {
        title: 'Cazări · KARPATHIA | Unde te cazezi la festival Horezu',
        description:
          'Cazare în festival și cazări în Horezu pentru perioada evenimentului KARPATHIA — opțiuni Booking.',
      },
      en: {
        title: 'Stays · KARPATHIA | Where to stay for the Horezu festival',
        description:
          'Festival area and Horezu town accommodation for KARPATHIA — Booking options.',
      },
    },
  },
  {
    path: '/locatie',
    sectionId: 'location',
    navKey: 'location',
    hash: '#location',
    meta: {
      ro: {
        title: 'Locație · KARPATHIA | The Park Horezu, Vâlcea',
        description:
          'Locația festivalului KARPATHIA: The Park, Strada Nicolae Bălcescu 31, Horezu, județul Vâlcea.',
      },
      en: {
        title: 'Location · KARPATHIA | The Park Horezu, Vâlcea',
        description:
          'KARPATHIA festival location: The Park, 31 Nicolae Bălcescu Street, Horezu, Vâlcea County.',
      },
    },
  },
  {
    path: '/contact',
    sectionId: 'contact',
    navKey: 'contact',
    hash: '#contact',
    meta: {
      ro: {
        title: 'Bilete · KARPATHIA | Cumpără bilet festival Horezu',
        description:
          'Cumpără bilet la festivalul KARPATHIA — 8 august 2026, Horezu. Bilete online pe ambilet.ro.',
      },
      en: {
        title: 'Tickets · KARPATHIA | Buy festival tickets Horezu',
        description:
          'Buy KARPATHIA festival tickets — 8 August 2026, Horezu. Online at ambilet.ro.',
      },
    },
  },
  {
    path: '/intrebari',
    sectionId: 'faq',
    navKey: null,
    hash: '#faq',
    meta: {
      ro: {
        title: 'Întrebări frecvente · KARPATHIA | Festival Horezu',
        description:
          'Întrebări frecvente despre festivalul KARPATHIA la Horezu — dată, locație, muzică, bilete și ceramică UNESCO.',
      },
      en: {
        title: 'FAQ · KARPATHIA | Horezu festival',
        description:
          'Frequently asked questions about the KARPATHIA festival in Horezu — date, location, music, tickets.',
      },
    },
  },
  {
    path: '/termeni',
    sectionId: null,
    navKey: null,
    hash: '',
    meta: {
      ro: {
        title: 'Termeni și condiții · KARPATHIA | ANDRA COTTAGE SRL',
        description:
          'Termeni și condiții pentru festivalul KARPATHIA — organizator ANDRA COTTAGE SRL, CUI 35251749, Horezu, Vâlcea. Bilete, acces, responsabilități.',
      },
      en: {
        title: 'Terms and conditions · KARPATHIA | ANDRA COTTAGE SRL',
        description:
          'Terms and conditions for the KARPATHIA festival — organizer ANDRA COTTAGE SRL, CUI 35251749, Horezu, Vâlcea. Tickets, access, responsibilities.',
      },
    },
  },
]

export const NAV_ROUTES = SITE_ROUTES.filter((r) => r.navKey)

export const HASH_TO_PATH = Object.fromEntries(
  SITE_ROUTES.filter((r) => r.hash).map((r) => [r.hash, r.path]),
)

export function getRouteByPath(pathname) {
  return SITE_ROUTES.find((r) => r.path === pathname) ?? SITE_ROUTES[0]
}

export function absoluteUrl(path) {
  if (path === '/') return `${SITE_ORIGIN}/`
  return `${SITE_ORIGIN}${path}`
}
