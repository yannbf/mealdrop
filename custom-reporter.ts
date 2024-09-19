import type { API_StatusUpdate, API_StatusValue } from '@storybook/types'
import type { TaskResultPack, TaskState, Vitest } from 'vitest'
import type { Reporter } from 'vitest/reporters'

const stateToStatusMap = {
  pass: 'success',
  fail: 'error',
  run: 'unknown',
  skip: 'unknown',
  todo: 'unknown',
  only: 'unknown',
} as Record<TaskState, API_StatusValue>

export default class StorybookReporter implements Reporter {
  testStatusData: API_StatusUpdate = {}
  isStorybookReady = false
  ctx!: Vitest

  onInit(ctx: Vitest) {
    this.ctx = ctx
  }

  // The onTaskUpdate hook is called in batches for multiple tests (if they are too fast) - 40ms.
  // It receives an array of tuples: [taskId, taskResult, taskMeta]
  async onTaskUpdate(packs: TaskResultPack[]) {
    for (const pack of packs) {
      const task = this.ctx.state.idMap.get(pack[0])
      const taskResult = task?.result

      if (task && task.type === 'test' && taskResult?.state) {
        const status = stateToStatusMap[taskResult.state]

        // task.meta is either in pack[2] or in a task.meta, depending on the timing
        const meta = (task.meta || pack[2]) as {
          storyId: string
        }

        // Only update if it's pending or failed, to avoid noise
        this.testStatusData[meta.storyId] = {
          status,
          title: 'Unit test',
          description: taskResult.errors?.[0]?.message || '',
        }
      }
    }

    if (Object.keys(this.testStatusData).length > 0) {
      // Do something with the data, and in case you stringify,
      // make sure to to do it in a safe way because of circular references
      console.log('testStatusData', this.testStatusData)
    }
  }
}

export { StorybookReporter }
