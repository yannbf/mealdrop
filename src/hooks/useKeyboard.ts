import { useCallback, useEffect, useState } from 'react'

export const useKey = (key: string, keyDownCb = () => {}, keyUpCb = () => {}): boolean => {
  const [pressed, setPressed] = useState(false)
  const match = useCallback((event: any) => key.toLowerCase() === event.key.toLowerCase(), [key])

  const onKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (match(event)) {
        setPressed(true)
        keyDownCb()
      }
    },
    [keyDownCb, match]
  )

  const onKeyUp = useCallback(
    (event: KeyboardEvent) => {
      if (match(event)) {
        setPressed(false)
        keyUpCb()
      }
    },
    [keyUpCb, match]
  )

  useEffect(() => {
    globalThis.addEventListener('keydown', onKeyDown)
    globalThis.addEventListener('keyup', onKeyUp)

    return () => {
      globalThis.removeEventListener('keydown', onKeyDown)
      globalThis.removeEventListener('keyup', onKeyUp)
    }
  }, [key, onKeyDown, onKeyUp])

  return pressed
}
