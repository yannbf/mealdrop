import { Restaurant } from '../types'
import axios, { AxiosResponse } from 'axios'

interface BaseApi {
  getCuratedRestaurants: () => Promise<Restaurant[]>
  getRestaurantById: (id: string) => Promise<Restaurant>
  getRestaurantsByCategory: (category: string) => Promise<Restaurant[]>
}

const BASE_URL = 'https://blab-290ab.firebaseio.com'

const isMockedEnvironment =
  !!process.env.STORYBOOK || process.env.NODE_ENV === 'test'

const apiCache = new Map()

const apiGet = async <T>(url: string): Promise<AxiosResponse<T>> => {
  // do not cache when testing to avoid flakyness
  if (!isMockedEnvironment && apiCache.has(url)) {
    return await apiCache.get(url)
  }

  const response = await axios.get<T>(url)

  if (!isMockedEnvironment) {
    apiCache.set(url, response)
  }

  return response
}

class RestaurantsApi implements BaseApi {
  async getCuratedRestaurants() {
    const { data: restaurants } = await apiGet<Restaurant[]>(
      `${BASE_URL}/restaurants/.json`
    )

    return restaurants
  }

  async getRestaurantById(id: string) {
    const { data: restaurant } = await apiGet<Restaurant>(
      `${BASE_URL}/restaurants/${id}/.json`
    )

    // firebase returns 200 with null when not found, so we need to force the correct status
    if (restaurant == null) {
      return Promise.reject({ response: { status: 404 } })
    }

    return restaurant
  }

  async getRestaurantsByCategory(category: string) {
    const restaurants = await this.getCuratedRestaurants()

    return restaurants
      .filter((restaurant) =>
        restaurant.categories?.includes(category.toLowerCase())
      )
      .sort((restaurant) => (restaurant.isClosed ? 1 : -1))
      .sort((restaurant) => (restaurant.isNew ? -1 : 1))
  }
}

// class MockedRestaurantsApi implements BaseApi {
//   async getCuratedRestaurants() {
//     return restaurantsMock
//   }
//   async getRestaurantById(id: string) {
//     return restaurantsMock.find(
//       (restaurant) => restaurant.id === id
//     ) as Restaurant
//   }
//   async getRestaurantsByCategory(category: string) {
//     return restaurantsMock
//       .filter((restaurant) =>
//         restaurant.categories?.includes(category.toLowerCase())
//       )
//       .sort((restaurant) => (restaurant.isClosed ? 1 : -1))
//       .sort((restaurant) => (restaurant.isNew ? -1 : 1))
//   }
// }

// const api: BaseApi = isMockedEnvironment
//   ? new MockedRestaurantsApi()
//   : new RestaurantsApi()

export const api = new RestaurantsApi()
