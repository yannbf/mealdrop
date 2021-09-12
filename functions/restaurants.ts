import { restaurants } from '../src/stub/restaurants'

const getRestaurantById = (id: string) => {
  return restaurants.find((restaurant) => restaurant.id === id)
}

const getRestaurantsByCategory = (category: string) => {
  return restaurants
    .filter((restaurant) => restaurant.categories?.includes(category.toLowerCase()))
    .sort((restaurant) => (restaurant.isClosed ? 1 : -1))
    .sort((restaurant) => (restaurant.isNew ? -1 : 1))
}

export const handler = async (event: any) => {
  const { id, category } = event.queryStringParameters

  if (id) {
    return {
      statusCode: 200,
      body: JSON.stringify(getRestaurantById(id)),
    }
  }

  if (category) {
    return {
      statusCode: 200,
      body: JSON.stringify(getRestaurantsByCategory(category)),
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(restaurants),
  }
}
