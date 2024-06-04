import '@testing-library/jest-dom/vitest'

const ignoreList = [(error: any) => error.message.includes('act')]

const throwMessage = (type: any, message: any) => {
  const error = new Error(`${type}${message}`)
  if (!ignoreList.reduce((acc, item) => acc || item(error), false)) {
    throw error
  }
}
const throwWarning = (message: any) => throwMessage('warn: ', message)
const throwError = (message: any) => throwMessage('error: ', message)

vi.spyOn(console, 'warn').mockImplementation(throwWarning)
vi.spyOn(console, 'error').mockImplementation(throwError)
