import { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import { CategoryListPage } from './pages/CategoryListPage'
import { CategoryDetailPage } from './pages/CategoryDetailPage'
import { RestaurantDetailPage } from './pages/RestaurantDetailPage'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { SuccessPage } from './pages/SuccessPage'

export const AppRoutes: React.FC<React.PropsWithChildren<unknown>> = ({ children }) => {
  const location = useLocation()
  // Scroll to top when a path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <div id="modal" />
      <Routes>
        <Route path="/categories" element={<CategoryListPage />} />
        <Route path="/categories/:id" element={<CategoryDetailPage />} />
        <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/" element={<HomePage />} />
        {children}
      </Routes>
    </>
  )
}
