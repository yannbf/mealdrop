import { render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { composeStories } from '@storybook/testing-react'

import * as stories from './RestaurantDetailPage.stories'

// we can easily access fully setup components with predefined states of the page
const { Success, Loading, Error, NotFound } = composeStories(stories)

describe('RestaurantDetailPage', () => {
  test('Should add an item to cart', async () => {
    render(<Success />)

    const foodItem = await screen.findByText(/Cheeseburger/i)
    userEvent.click(foodItem)

    const modalButton = await screen.findByLabelText('confirm')
    userEvent.click(modalButton)

    expect(within(foodItem.parentElement!).getByLabelText('food quantity').textContent).toEqual('1')
  })
  test('Should display an error screen', async () => {
    render(<Error />)
    await waitFor(() => expect(screen.getByText('Something went wrong!')).toBeInTheDocument())
  })
  test('Should display a loading screen', async () => {
    render(<Loading />)
    await waitFor(() => expect(screen.getByText('Looking for some food...')).toBeInTheDocument())
  })
  test('Should display a 404 screen', async () => {
    render(<NotFound />)
    await waitFor(() => expect(screen.getByText("We can't find this page")).toBeInTheDocument())
  })
})
