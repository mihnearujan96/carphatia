export const RESERVATION_PHONE_E164 = '+40771017860'

export function buildSmsHref(body) {
  return `sms:${RESERVATION_PHONE_E164}?body=${encodeURIComponent(body)}`
}
