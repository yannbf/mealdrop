import React, { useLayoutEffect } from 'react'
import { Switch, Route, useLocation } from 'react-router-dom'
import { Restaurant } from './pages/Restaurant'
import { Category } from './pages/Category'
import { About } from './pages/About'
import { Profile } from './pages/Profile'
import { Home } from './pages/Home'
import { Register } from './pages/Register'

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
        render={(routeProps) => <Category {...routeProps} />}
      ></Route>
      <Route exact path="/restaurants/:id">
        <Restaurant />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/profile">
        <Profile />
      </Route>
      <Route exact path="/register">
        <Register />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>
  )
}
