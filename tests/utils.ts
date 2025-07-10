import { Page } from '@playwright/test'

interface StorybookEntry {
  id: string
  title: string
  name: string
  type: string
  importPath: string
  componentPath: string
  tags: string[]
}

interface StorybookIndex {
  v: number
  entries: Record<string, StorybookEntry>
}

export async function getStoryEntries(): Promise<StorybookEntry[]> {
  try {
    const response = await fetch('http://localhost:6006/index.json')
    const data: StorybookIndex = await response.json()

    return Object.values(data.entries).filter((entry) => entry.type === 'story')
  } catch (error) {
    console.error('Failed to fetch Storybook stories:', error)
    throw error
  }
}

export async function getStorybookReports(story: StorybookEntry, page: Page) {
  await page.evaluate(async (story) => {
    const channel = globalThis.__STORYBOOK_ADDONS_CHANNEL__ ?? globalThis.__STORYBOOK_ADDONS.channel
    const CHANNEL_ERROR_EVENTS = [
      'storyErrored',
      'storyThrewException',
      'playFunctionThrewException',
    ]
    const CHANNEL_SUCCESS_EVENTS = [
      // 'storyRendered',
      'storyFinished',
    ]
    const storyUrl = `http://localhost:6006/?path=/story/${story.id}`

    return new Promise((resolve) => {
      for (const event of CHANNEL_ERROR_EVENTS) {
        const data = channel.last(event)
        if (data) {
          const errorData = data[0]
          // prepend the story URL to the error message
          const error = new Error(`\n${storyUrl}\n\n${errorData?.message}`)
          // Filter out noisy stack trace lines from storybook cache
          if (errorData?.stack) {
            const cleanStack = errorData.stack
              .split('\n')
              .filter((line) => !line.includes('node_modules/.cache/storybook'))
              .join('\n')
            error.stack = cleanStack
          }
          throw error
        }
      }
      for (const event of CHANNEL_SUCCESS_EVENTS) {
        if (channel.last(event)) {
          resolve(true)
        }
      }

      // if things have not already happened, listen for them
      for (const event of CHANNEL_SUCCESS_EVENTS) {
        channel.on(event, (data) => {
          resolve(data)
        })
      }
      for (const event of CHANNEL_ERROR_EVENTS) {
        channel.on(event, (data) => {
          throw new Error(`\n${storyUrl}\n\n${data?.[0]?.message}`)
        })
      }
    })
  }, story)
}
