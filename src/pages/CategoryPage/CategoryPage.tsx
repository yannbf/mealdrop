import { Route, RouteComponentProps } from 'react-router-dom'
import { CategoryListPage } from '../CategoryListPage'
import { CategoryDetailPage } from '../CategoryDetailPage'

export const CategoryPage = ({ match }: RouteComponentProps) => {
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
