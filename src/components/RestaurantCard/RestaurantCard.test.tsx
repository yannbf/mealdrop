import { vi, expect, describe, test } from 'vitest'
import { screen } from '@testing-library/react'
import { axe } from 'vitest-axe'

import { Default, Loading, New, Closed } from './RestaurantCard.stories'

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
    await Closed.run({ args: { ...Closed.input.args, onClick: onClickSpy } })

    // display closed message
    expect(screen.getByText('This restaurant is closed.')).toBeInTheDocument()

    // does not trigger onClick
    screen.getByTestId('restaurant-card').click()
    expect(onClickSpy).not.toHaveBeenCalled()
  })
})

// Go through every story from composeStories and create a map of StoryName <-> StoryComponent
const testCases = Object.entries({ Default, Loading, New, Closed });

// Go through all test cases to batch test accessibility
test.each(testCases)('%s story should be accessible', async (_storyName, Story) => {
  await (Story as any).run()
  // @ts-expect-error TODO fix Property 'toHaveNoViolations' does not exist on type 'Assertion<AxeResults>
  expect(await axe(document.body.firstChild)).toHaveNoViolations()
})
