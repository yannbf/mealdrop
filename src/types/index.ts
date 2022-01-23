export type ShopItem = {
  id: number
  name: string
  price: number
  imageUrl?: string
  description?: string
}

export type FoodMenuItem = {
  id: number
  name: string
  description?: string
  price: number
}

export type Restaurant = {
  name: string
  id?: string
  mapsUrl?: string
  rating?: number
  url?: string
  address?: string
  specialty: string
  photoUrl: string
  isClosed?: boolean
  categories?: string[]
  isLoading?: boolean
  isNew?: boolean
  menu: {
    food: FoodMenuItem[]
    dessert: FoodMenuItem[]
    drinks: FoodMenuItem[]
  }
}
