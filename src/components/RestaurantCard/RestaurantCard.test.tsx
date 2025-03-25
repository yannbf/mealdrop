import { vi, expect, describe, test } from 'vitest'
import { screen } from '@testing-library/react'
import { composeStories } from '@storybook/react-vite'
import { axe } from 'vitest-axe'

import * as stories from './RestaurantCard.stories'

const { Default, Loading, New, Closed } = composeStories(stories)

describe('RestaurantCard', () => {
  test('should render correctly', async () => {
    await Default.run()

    expect(screen.getByText('Burger Kingdom')).toBeInTheDocument()
  })

  test('should provide a loading skeleton', async () => {
    await Loading.run()
    expect(screen.getByTestId('loading')).toBeInTheDocument()
  })

  test('should show a "new" tag', async () => {
    await New.run()
    expect(screen.getByText('new')).toBeInTheDocument()
  })

  test('should not trigger onclick when restaurant is closed', async () => {
    const onClickSpy = vi.fn()
    await Closed.run({ args: { ...Closed.args, onClick: onClickSpy } })

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
  await (Story as any).run()
  // @ts-expect-error TODO fix Property 'toHaveNoViolations' does not exist on type 'Assertion<AxeResults>
  expect(await axe(document.body.firstChild)).toHaveNoViolations()
})
