import { test } from '@playwright/test'
import { getStoryEntries, getStorybookReports } from './utils'

const stories = await getStoryEntries()

for (const story of stories) {
  test(`${story.title} - ${story.name}`, async ({ page }) => {
    const storyUrl = `http://localhost:6006/iframe.html?id=${story.id}`
    await page.goto(storyUrl)
    // this will wait forever if MSW is not resolving a request
    await page.waitForLoadState('networkidle')
    await page.waitForSelector('#storybook-root', { state: 'attached' })

    await getStorybookReports(story, page)
    await page.screenshot({
      path: `test-results/stories/${story.id}.png`,
      fullPage: true,
    })
  })
}

// missing code coverage
// missing reporters such as a11y
// missing watch mode tied to actual source
// missing globals (viewports) and can't get static data about a story e.g. parameters or globals
// can run filtered tests with yarn playwright test storybook --ui -g modal
