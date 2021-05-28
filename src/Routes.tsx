import { useLayoutEffect } from 'react';
import { Switch, Route, useLocation } from 'react-router-dom'

import { RestaurantDetailPage } from './pages/RestaurantDetailPage'
import { CategoryPage } from './pages/CategoryPage'
import { HomePage } from './pages/HomePage'
import { CheckoutPage } from './pages/CheckoutPage'
import { SuccessPage } from './pages/SuccessPage'
import {
  DefaultTemplate,
  SimpleTemplate,
  StickyHeaderTemplate,
} from './templates/PageTemplate'

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
        render={(routeProps) => (
          <DefaultTemplate>
            <CategoryPage {...routeProps} />
          </DefaultTemplate>
        )}
      ></Route>
      <Route exact path="/restaurants/:id">
        <StickyHeaderTemplate>
          <RestaurantDetailPage />
        </StickyHeaderTemplate>
      </Route>
      <Route exact path="/checkout">
        <CheckoutPage />
      </Route>
      <Route exact path="/success">
        <SimpleTemplate>
          <SuccessPage />
        </SimpleTemplate>
      </Route>
      <Route path="/">
        <DefaultTemplate>
          <HomePage />
        </DefaultTemplate>
      </Route>
    </Switch>
  )
}
