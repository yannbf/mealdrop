import { Route, useRouteMatch } from 'react-router-dom'

import { CategoryListPage } from '../CategoryListPage'
import { CategoryDetailPage } from '../CategoryDetailPage'

export const CategoryPage = () => {
  const match = useRouteMatch()
  return (
    <>
      <Route exact path={`${match.path}`}>
        <CategoryListPage />
      </Route>
      <Route exact path={`${match.path}/:id`}>
        <CategoryDetailPage />
      </Route>
    </>
  )
}
