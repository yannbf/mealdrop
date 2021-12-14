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

const headers = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'GET, POST, OPTION',
}

export const handler = async (event: any) => {
  const { id, category } = event.queryStringParameters

  if (id != null) {
    const restaurant = getRestaurantById(id)

    if (!restaurant) {
      return {
        statusCode: 404,
        headers,
      }
    }

    return {
      statusCode: 200,
      body: JSON.stringify(getRestaurantById(id)),
      headers,
    }
  }

  if (category) {
    return {
      statusCode: 200,
      body: JSON.stringify(getRestaurantsByCategory(category)),
      headers,
    }
  }

  return {
    statusCode: 200,
    body: JSON.stringify(restaurants),
    headers,
  }
}
