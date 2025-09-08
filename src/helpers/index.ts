import { getCurrency } from './getCurrency'

export const toCurrency = (number: number) => {
  return number.toLocaleString(undefined, {
    style: 'currency',
    currency: getCurrency(),
  })
}

export const isMobile = () => /Mobi/i.test(globalThis.navigator.userAgent)
