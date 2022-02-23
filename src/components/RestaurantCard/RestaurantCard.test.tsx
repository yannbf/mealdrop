import { render, screen } from '@testing-library/react'
import { composeStories } from '@storybook/testing-react'
import { axe, toHaveNoViolations } from 'jest-axe'

import * as stories from './RestaurantCard.stories'

expect.extend(toHaveNoViolations)

const { Default, Loading, New, Closed } = composeStories(stories)

describe('RestaurantCard', () => {
  test('should render correctly', () => {
    render(<Default />)

    expect(screen.getByText('Burger Kingdom')).toBeInTheDocument()
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

// Go through every story from composeStories and create a map of StoryName <-> StoryComponent
const testCases = Object.values(composeStories(stories)).map((Story) => [
  // The ! is necessary in Typescript only, as the property is part of a partial type
  Story.storyName!,
  Story,
])

// Go through all test cases to batch test accessibility
test.each(testCases)('%s story should be accessible', async (_storyName, Story) => {
  const { container } = render(<Story />)
  expect(await axe(container)).toHaveNoViolations()
})
