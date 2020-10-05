import currency from 'currency.js'

export const toEuro = (number: number) =>
  currency(number, {
    symbol: '€',
    decimal: ',',
    separator: '.',
  }).format()
