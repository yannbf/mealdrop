import axios, { AxiosResponse } from 'axios'

import { Restaurant } from '../types'

interface BaseApi {
  getRestaurants: () => Promise<Restaurant[]>
  getRestaurantById: (id: string) => Promise<Restaurant>
  getRestaurantsByCategory: (category: string) => Promise<Restaurant[]>
}

export const BASE_URL = 'https://mealdrop.netlify.app/.netlify/functions/restaurants'

const isMockedEnvironment = !!import.meta.env.STORYBOOK || import.meta.env.NODE_ENV === 'test'

const apiCache = new Map()

const apiGet = async <T>(url: string): Promise<AxiosResponse<T>> => {
  // do not cache when testing to avoid flakyness
  if (!isMockedEnvironment && apiCache.has(url)) {
    return apiCache.get(url)
  }

  const response = await axios.get<T>(url)

  if (!isMockedEnvironment) {
    apiCache.set(url, response)
  }

  return response
}

class RestaurantsApi implements BaseApi {
  async getRestaurants() {
    const { data: restaurants } = await apiGet<Restaurant[]>(BASE_URL)

    return restaurants
  }

  async getRestaurantById(id: string) {
    const { data: restaurant, status } = await apiGet<Restaurant>(`${BASE_URL}?id=${id}`)

    if (status === 404) {
      return Promise.reject({ response: { status: 404 } })
    }

    return restaurant
  }

  async getRestaurantsByCategory(category: string) {
    const { data: restaurants } = await apiGet<Restaurant[]>(`${BASE_URL}?category=${category}`)

    return restaurants
  }
}

export const api = new RestaurantsApi()
