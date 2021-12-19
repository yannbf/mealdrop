import { useLayoutEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { CategoryListPage } from 'pages/CategoryListPage'
import { CategoryDetailPage } from 'pages/CategoryDetailPage'

import { RestaurantDetailPage } from './pages/RestaurantDetailPage'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { SuccessPage } from './pages/SuccessPage'
import { PageTemplate } from './templates/PageTemplate'

export const AppRoutes: React.FC = ({ children }) => {
  const location = useLocation()
  // Scroll to top when a path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <div id="modal" />
      <Routes>
        <Route
          path="/categories"
          element={
            <PageTemplate>
              <CategoryListPage />
            </PageTemplate>
          }
        />
        <Route
          path="/categories/:id"
          element={
            <PageTemplate>
              <CategoryDetailPage />
            </PageTemplate>
          }
        />
        <Route
          path="/restaurants/:id"
          element={
            <PageTemplate type="sticky-header">
              <RestaurantDetailPage />
            </PageTemplate>
          }
        />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route
          path="/success"
          element={
            <PageTemplate type="basic">
              <SuccessPage />
            </PageTemplate>
          }
        />
        <Route
          path="/"
          element={
            <PageTemplate>
              <HomePage />
            </PageTemplate>
          }
        />
        {children}
      </Routes>
    </>
  )
}
