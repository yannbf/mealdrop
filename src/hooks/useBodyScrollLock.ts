import { useLayoutEffect } from 'react'
import { isMobile } from '../helpers'

export const useLockBodyScroll = (shouldLock = false) => {
  useLayoutEffect(() => {
    document.body.style.overflow = shouldLock ? 'hidden' : 'auto'
    if (isMobile()) {
      document.body.style.height = shouldLock ? '100vh' : 'auto'
    }
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto'
      if (isMobile()) {
        document.body.style.height = 'auto'
      }
    }
  }, [shouldLock])
}
