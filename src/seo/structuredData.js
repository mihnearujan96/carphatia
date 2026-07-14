import { STRINGS } from '../i18n/strings'
import { NAV_ROUTES, absoluteUrl, getRouteByPath } from './routes'

const SITE_URL = 'https://karpathia.ro/'
const LOGO_SQUARE = 'https://karpathia.ro/favicon-192.png?v=2'
const LOGO_WIDE = 'https://karpathia.ro/dadada.png'
const OG_IMAGE = LOGO_WIDE
const TICKET_URL = 'https://ambilet.ro/bilete/karpathia-fest-2026-4664'

const VENUE = {
  name: 'The Park',
  street: 'Strada Nicolae Bălcescu 31',
  city: 'Horezu',
  region: 'Vâlcea',
  country: 'RO',
  lat: 45.1486,
  lng: 23.9912,
}

function venueAddress() {
  return {
    '@type': 'PostalAddress',
    streetAddress: VENUE.street,
    addressLocality: VENUE.city,
    addressRegion: VENUE.region,
    addressCountry: VENUE.country,
  }
}

function organizationSchema(isRo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'KARPATHIA',
    alternateName: ['Karpathia', 'Carpathia', 'Karpathia Festival', 'Karpathia Mini Festival'],
    url: SITE_URL,
    logo: {
      '@type': 'ImageObject',
      url: LOGO_SQUARE,
      width: 512,
      height: 512,
      caption: 'KARPATHIA',
    },
    image: LOGO_WIDE,
    description: isRo
      ? 'Festival KARPATHIA la Horezu, județul Vâlcea — house, nostalgia, disco și muzică electronică, alături de ceramică UNESCO și experiențe montane în Carpați.'
      : 'KARPATHIA festival in Horezu, Vâlcea County — house, nostalgia, disco and electronic music alongside UNESCO ceramics and mountain experiences in the Carpathians.',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Vâlcea',
      containedInPlace: { '@type': 'Country', name: 'Romania' },
    },
    knowsAbout: [
      'festival Horezu',
      'festival Vâlcea',
      'festival Karpathia',
      'house music',
      'nostalgia music',
      'ceramică de Horezu',
      'ceramica UNESCO',
      'evenimente de vară',
      'The Park Horezu',
      'Carpați Meridionali',
    ],
  }
}

function websiteSchema(isRo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'KARPATHIA',
    alternateName: ['Karpathia', 'Carpathia'],
    url: SITE_URL,
    inLanguage: isRo ? 'ro-RO' : 'en-US',
    description: isRo
      ? 'Site-ul oficial al festivalului KARPATHIA la Horezu, Vâlcea.'
      : 'Official website of the KARPATHIA festival in Horezu, Vâlcea.',
    publisher: { '@type': 'Organization', name: 'KARPATHIA', url: SITE_URL },
  }
}

function eventSchema(isRo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'MusicEvent',
    name: isRo ? 'Festival KARPATHIA Horezu 2026' : 'KARPATHIA Festival Horezu 2026',
    alternateName: [
      'Karpathia Mini Festival',
      'Karpathia Fest 2026',
      'Festival Karpathia',
      'Festival Horezu KARPATHIA',
    ],
    description: isRo
      ? 'Festival de vară KARPATHIA la The Park Horezu, județul Vâlcea — house, nostalgia, disco și sunet electronic, pe 8 august 2026, în peisajul ceramic UNESCO al Olteniei.'
      : 'Summer festival KARPATHIA at The Park Horezu, Vâlcea — house, nostalgia, disco and electronic sound on 8 August 2026 in the UNESCO ceramics landscape of Oltenia.',
    startDate: '2026-08-08T18:00:00+03:00',
    endDate: '2026-08-09T02:00:00+03:00',
    eventStatus: 'https://schema.org/EventScheduled',
    eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    image: OG_IMAGE,
    url: SITE_URL,
    isAccessibleForFree: false,
    genre: ['House', 'Nostalgia', 'Disco', 'Electronic'],
    keywords: isRo
      ? 'festival, karpathia, carpathia, horezu, valcea, nostalgia, house, ceramica, ceramică'
      : 'festival, karpathia, carpathia, horezu, valcea, nostalgia, house, ceramics',
    location: {
      '@type': 'Place',
      name: VENUE.name,
      address: venueAddress(),
      geo: {
        '@type': 'GeoCoordinates',
        latitude: VENUE.lat,
        longitude: VENUE.lng,
      },
    },
    organizer: {
      '@type': 'Organization',
      name: 'KARPATHIA',
      url: SITE_URL,
    },
    offers: {
      '@type': 'Offer',
      url: TICKET_URL,
      availability: 'https://schema.org/InStock',
      validFrom: '2026-01-01',
    },
    performer: {
      '@type': 'PerformingGroup',
      name: 'KARPATHIA',
    },
  }
}

function placeSchema(isRo) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: isRo ? 'Horezu, Vâlcea — festival & ceramică UNESCO' : 'Horezu, Vâlcea — festival & UNESCO ceramics',
    description: isRo
      ? 'Horezu este renumit pentru ceramica tradițională UNESCO și găzduiește festivalul KARPATHIA — house, nostalgia și muzică de vară la poalele Căpățânii.'
      : 'Horezu is renowned for UNESCO traditional ceramics and hosts the KARPATHIA festival — house, nostalgia and summer music at the foot of the Căpățânii.',
    address: venueAddress(),
    geo: {
      '@type': 'GeoCoordinates',
      latitude: VENUE.lat,
      longitude: VENUE.lng,
    },
    touristType: isRo
      ? ['festivalieri', 'iubitori de ceramică', 'drumeți']
      : ['festival goers', 'ceramics enthusiasts', 'hikers'],
  }
}

function faqItems(isRo) {
  if (isRo) {
    return [
      {
        q: 'Când are loc festivalul KARPATHIA la Horezu?',
        a: 'Festivalul KARPATHIA are loc pe 8 august 2026, la The Park Horezu, județul Vâlcea. Biletele se cumpără online pe ambilet.ro.',
      },
      {
        q: 'Ce tip de muzică se ascultă la festivalul Karpathia?',
        a: 'La KARPATHIA vei găsi house, nostalgia, disco și sunet electronic — un festival de vară cu energie de grădină și scenă deschisă, la poalele Munților Căpățânii.',
      },
      {
        q: 'Unde este festivalul Karpathia / Carpathia în Vâlcea?',
        a: 'Evenimentul se desfășoară la The Park, Strada Nicolae Bălcescu 31, Horezu, județul Vâlcea — în inima zonei renumite pentru ceramica de Horezu, patrimoniu UNESCO din 2012.',
      },
      {
        q: 'Ce legătură are KARPATHIA cu ceramica de Horezu?',
        a: 'KARPATHIA celebrează spiritul Olteniei: festival de muzică la Horezu, alături de olărit tradițional, târguri de ceramică și peisaj montan — ceramică UNESCO și house într-o singură experiență de vară.',
      },
      {
        q: 'Cum cumpăr bilet la festivalul Karpathia 2026?',
        a: 'Biletele pentru Karpathia Fest 2026 sunt disponibile online la ambilet.ro/bilete/karpathia-fest-2026-4664. Mesele sunt primul venit, primul servit.',
      },
    ]
  }

  return [
    {
      q: 'When is the KARPATHIA festival in Horezu?',
      a: 'KARPATHIA festival takes place on 8 August 2026 at The Park Horezu, Vâlcea County. Tickets are sold online via ambilet.ro.',
    },
    {
      q: 'What music is played at the Karpathia festival?',
      a: 'KARPATHIA features house, nostalgia, disco and electronic music — a summer festival with garden energy and open-air stages at the foot of the Căpățânii mountains.',
    },
    {
      q: 'Where is the Karpathia / Carpathia festival in Vâlcea?',
      a: 'The event is held at The Park, 31 Nicolae Bălcescu Street, Horezu, Vâlcea — in the heart of the area famous for UNESCO Horezu ceramics.',
    },
    {
      q: 'How is KARPATHIA connected to Horezu ceramics?',
      a: 'KARPATHIA celebrates the spirit of Oltenia: a music festival in Horezu alongside traditional pottery, ceramics fairs and mountain landscapes — UNESCO craft and house music in one summer experience.',
    },
    {
      q: 'How do I buy tickets for Karpathia Fest 2026?',
      a: 'Tickets for Karpathia Fest 2026 are available online at ambilet.ro/bilete/karpathia-fest-2026-4664. Tables are first come, first served.',
    },
  ]
}

function navigationSchema(isRo) {
  const nav = STRINGS[isRo ? 'ro' : 'en'].nav
  return {
    '@type': 'ItemList',
    name: isRo ? 'Secțiuni site KARPATHIA' : 'KARPATHIA site sections',
    itemListElement: NAV_ROUTES.map((route, index) => ({
      '@type': 'SiteNavigationElement',
      position: index + 1,
      name: nav[route.navKey],
      url: absoluteUrl(route.path),
    })),
  }
}

function webPageSchema(isRo, pathname) {
  const route = getRouteByPath(pathname)
  const locale = isRo ? 'ro' : 'en'
  return {
    '@type': 'WebPage',
    '@id': absoluteUrl(route.path),
    url: absoluteUrl(route.path),
    name: route.meta[locale].title,
    description: route.meta[locale].description,
    inLanguage: isRo ? 'ro-RO' : 'en-US',
    isPartOf: {
      '@type': 'WebSite',
      '@id': `${SITE_URL}#website`,
      url: SITE_URL,
      name: 'KARPATHIA',
    },
  }
}

function faqSchema(isRo) {
  const items = faqItems(isRo)
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

export function getStructuredDataGraph(lang, pathname = '/') {
  const isRo = lang !== 'en'
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organizationSchema(isRo),
      websiteSchema(isRo),
      navigationSchema(isRo),
      webPageSchema(isRo, pathname),
      eventSchema(isRo),
      placeSchema(isRo),
      faqSchema(isRo),
    ],
  }
}

export function syncStructuredData(lang, pathname = '/') {
  if (typeof document === 'undefined') return

  const id = 'karpathia-structured-data'
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(getStructuredDataGraph(lang, pathname))
}
