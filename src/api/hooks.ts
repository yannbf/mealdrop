import { useCallback, useEffect, useState } from 'react'

import type { Restaurant } from '../types'

import { api } from './index'

export const useFetchRestaurants = () => {
  const [status, setStatus] = useState('idle')
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [retry, setRetry] = useState(false)

  const retryRequest = useCallback(() => {
    setRetry((prev) => !prev)
  }, [setRetry])

  useEffect(() => {
    setStatus('loading')

    api
      .getRestaurants()
      .then((res) => {
        setStatus('success')
        setRestaurants(res)
      })
      .catch((error) => {
        const statusCode = error?.response?.status || 500
        setStatus(statusCode.toString())
      })
  }, [retry])

  return {
    status,
    restaurants,
    retryRequest,
  }
}

export const useFetchRestaurantsByCategory = (categoryId?: string) => {
  const [status, setStatus] = useState('idle')
  const [restaurants, setRestaurants] = useState<Restaurant[]>([])
  const [retry, setRetry] = useState(false)

  const retryRequest = useCallback(() => {
    setRetry((prev) => !prev)
  }, [setRetry])

  useEffect(() => {
    if (categoryId) {
      setStatus('loading')

      api
        .getRestaurantsByCategory(categoryId)
        .then((res) => {
          setStatus('success')
          setRestaurants(res)
        })
        .catch((error) => {
          const statusCode = error?.response?.status || 500
          setStatus(statusCode.toString())
        })
    }
  }, [categoryId, retry])

  return {
    status,
    restaurants,
    retryRequest,
  }
}

export const useFetchRestaurant = (id: string) => {
  const [status, setStatus] = useState('idle')
  const [restaurant, setRestaurant] = useState<Restaurant>()
  const [retry, setRetry] = useState(false)

  const retryRequest = useCallback(() => {
    setRetry((prev) => !prev)
  }, [setRetry])

  useEffect(() => {
    setStatus('loading')

    api
      .getRestaurantById(id)
      .then((res) => {
        setStatus('success')
        setRestaurant(res)
      })
      .catch((error) => {
        const statusCode = error?.response?.status || 500
        setStatus(statusCode.toString())
      })
  }, [id, retry])

  return {
    status,
    restaurant,
    retryRequest,
  }
}
