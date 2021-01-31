export const toEuro = (number: number) =>
  number.toLocaleString(undefined, {
    style: 'currency',
    currency: 'EUR',
  })
