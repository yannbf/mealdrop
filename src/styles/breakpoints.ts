export const viewports = {
  XS: 400,
  S: 640,
  M: 768,
  L: 1024,
  XL: 1440,
}

export const breakpoints = {
  XS: `(min-width: ${viewports.XS}px)`,
  S: `(min-width: ${viewports.S}px)`,
  M: `(min-width: ${viewports.M}px)`,
  L: `(min-width: ${viewports.L}px)`,
  XL: `(min-width: ${viewports.XL}px)`,
}

// const fallbackImage =
//   'https://stylizedbay.com/wp-content/uploads/2018/02/unknown-avatar.jpg'
// const apiKey = 'AIzaSyCzb6SI_JRrp6xLLYV617Ary6n59h36ros'
// const cx = '004286675445984025592:ypgpkv9fjd4'
// const baseUrl = `https://www.googleapis.com/customsearch/v1`

// const getCharacterImage = async (name) => {
//   const url = `${baseUrl}?key=${apiKey}&cx=${cx}&searchType=image&q=image::ghibli%20${name}`
//   const request = await fetch(url)
//   const result = await request.json()
//   const characterImage = result?.items[0]?.link
//   return characterImage || fallbackImage
// }
