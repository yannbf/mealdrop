/* eslint-disable max-classes-per-file */
import axios, { AxiosResponse } from 'axios'

import { Restaurant } from '../types'
import { restaurants as restaurantsMock } from '../stub/restaurants'

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

class MockedRestaurantsApi implements BaseApi {
  async getRestaurants() {
    return restaurantsMock
  }

  async getRestaurantById(id: string) {
    return restaurantsMock.find((restaurant) => restaurant.id === id) as Restaurant
  }

  async getRestaurantsByCategory(category: string) {
    return restaurantsMock
      .filter((restaurant) => restaurant.categories?.includes(category.toLowerCase()))
      .sort((restaurant) => (restaurant.isClosed ? 1 : -1))
      .sort((restaurant) => (restaurant.isNew ? -1 : 1))
  }
}

export const api: BaseApi = isMockedEnvironment ? new MockedRestaurantsApi() : new RestaurantsApi()
