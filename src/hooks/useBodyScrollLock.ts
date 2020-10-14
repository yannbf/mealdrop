import { useLayoutEffect } from 'react'

export const useLockBodyScroll = (shouldLock = false) => {
  useLayoutEffect(() => {
    document.body.style.overflow = shouldLock ? 'hidden' : 'auto'
    if (/Mobi/i.test(window.navigator.userAgent)) {
      document.body.style.height = shouldLock ? '100vh' : 'auto'
    }
    // Re-enable scrolling when component unmounts
    return () => {
      document.body.style.overflow = 'auto'
      if (/Mobi/i.test(window.navigator.userAgent)) {
        document.body.style.height = 'auto'
      }
    }
  }, [shouldLock])
}
