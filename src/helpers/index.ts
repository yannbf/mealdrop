export const toEuro = (number: number) =>
  number.toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
  })

export const isMobile = () => /Mobi/i.test(globalThis.navigator.userAgent)
