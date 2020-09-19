import React, { useLayoutEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { RestaurantDetailPage } from './pages/RestaurantDetailPage'
import { CategoryPage } from './pages/CategoryPage'
import { AboutPage } from './pages/AboutPage'
import { ProfilePage } from './pages/ProfilePage'
import { HomePage } from './pages/HomePage'
import { RegisterPage } from './pages/RegisterPage'
import { CheckoutPage } from './pages/CheckoutPage'
import { SuccessPage } from './pages/SuccessPage'

export const AppRoutes = () => {
  const location = useLocation()
  // Scroll to top when a path changes
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <Switch>
      <Route
        path="/categories"
        render={(routeProps) => <CategoryPage {...routeProps} />}
      ></Route>
      <Route exact path="/restaurants/:id">
        <RestaurantDetailPage />
      </Route>
      <Route exact path="/about">
        <AboutPage />
      </Route>
      <Route exact path="/profile">
        <ProfilePage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
      <Route exact path="/checkout">
        <CheckoutPage />
      </Route>
      <Route exact path="/success">
        <SuccessPage />
      </Route>
      <Route path="/">
        <HomePage />
      </Route>
    </Switch>
  )
}
