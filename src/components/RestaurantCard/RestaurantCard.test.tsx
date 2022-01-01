import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'

import * as stories from './RestaurantCard.stories'

const { Default, Loading, New, Closed } = composeStories(stories)

describe('RestaurantCard', () => {
  test('should render correctly', () => {
    render(<Default />)
    expect(screen.getByText('Burger King')).toBeInTheDocument()
  })

  test('should provide a loading skeleton', () => {
    render(<Loading />)
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })

  test('should show a "new" tag', () => {
    render(<New />)
    expect(screen.getByText('new')).toBeInTheDocument()
  })

  test('should not trigger onclick when restaurant is closed', async () => {
    const onClickSpy = jest.fn()
    render(<Closed onClick={onClickSpy} />)

    // display closed message
    expect(screen.getByText('This restaurant is closed.')).toBeInTheDocument()

    // does not trigger onClick
    screen.getByTestId('restaurant-card').click()
    expect(onClickSpy).not.toHaveBeenCalled()
  })
})
