import { Decorator } from '@storybook/react'
import { MemoryRouter, Route } from 'react-router-dom'
import { AppRoutes } from '../src/Routes'


export const withDeeplink: Decorator = (StoryFn, { parameters: { deeplink } }) => {
  const { path, route } = deeplink

  return (
    <MemoryRouter initialEntries={[encodeURI(route)]}>
      <AppRoutes>
        <Route path={path} element={<StoryFn />} />
      </AppRoutes>
    </MemoryRouter>
  )
}
