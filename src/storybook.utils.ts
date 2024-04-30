import type { Meta, StoryFn } from '@storybook/react'
import { composeStories } from '@storybook/react'

export type StoryFile = {
  default: Meta
  [name: string]: StoryFn | Meta
}

const getPath = () => {
  if (typeof window === 'undefined') {
    return require('path')
  }

  return {
    dirname: function (thePath: string) {
      // Remove trailing slashes for consistency
      thePath = thePath.replace(/\/+$/, '')

      // Find the last '/' and slice up to it
      let lastSlashIndex = thePath.lastIndexOf('/')
      if (lastSlashIndex === -1) return '.'

      // Handle the case where the thePath is something like "/file"
      if (lastSlashIndex === 0) return '/'

      // Slice from the start to the last '/'
      return thePath.slice(0, lastSlashIndex)
    },
    basename: function (thePath: string, ext?: string) {
      // Find the last '/' and slice from it to get the base name
      let lastSlashIndex = thePath.lastIndexOf('/')
      let base = lastSlashIndex === -1 ? thePath : thePath.slice(lastSlashIndex + 1)

      // If an extension is provided and the base ends with it, remove it
      if (ext && base.endsWith(ext)) {
        base = base.slice(0, base.length - ext.length)
      }

      return base
    },
  }
}

export const compose = (entry: StoryFile): ReturnType<typeof composeStories<StoryFile>> => {
  try {
    return composeStories(entry)
  } catch (e) {
    throw new Error(
      `There was an issue composing stories for the module: ${JSON.stringify(entry)}, ${e}`
    )
  }
}

export const getAllStoryFiles = () => {
  // Place the glob you want to match your story files
  const storyFiles = Object.entries(
    import.meta.glob<StoryFile>('./**/*.(stories|story).@(js|jsx|mjs|ts|tsx)', {
      eager: true,
    })
  )

  const path = getPath()

  return storyFiles.map(([filePath, storyFile]) => {
    const storyDir = path.dirname(filePath)
    const componentName = path.basename(filePath).replace(/\.(stories|story)\.[^/.]+$/, '')
    return { filePath, storyFile, componentName, storyDir }
  })
}
