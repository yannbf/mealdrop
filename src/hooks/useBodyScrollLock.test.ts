import { describe, it, expect, afterEach } from 'vitest'
import { renderHook } from '@testing-library/react'
import { useLockBodyScroll } from './useBodyScrollLock'

describe('useLockBodyScroll hook', () => {
  afterEach(() => {
    document.body.style.overflow = ''
    document.body.style.height = ''
  })

  it('should not lock the body scroll when shouldLock is false', () => {
    renderHook(() => useLockBodyScroll(false))

    expect(document.body.style.overflow).toBe('auto')
    expect(document.body.style.height).toBe('')
  })

  it('should lock the body scroll when shouldLock is true', () => {
    renderHook(() => useLockBodyScroll(true))

    expect(document.body.style.overflow).toBe('hidden')
    if (/Mobi/i.test(globalThis.navigator.userAgent)) {
      expect(document.body.style.height).toBe('100vh')
    } else {
      expect(document.body.style.height).toBe('')
    }
  })

  it('should unlock the body scroll when the component unmounts', () => {
    const { unmount } = renderHook(() => useLockBodyScroll(true))

    unmount()

    expect(document.body.style.overflow).toBe('auto')
    expect(document.body.style.height).toBe('')
  })

  it('should update the body scroll lock state when shouldLock changes', () => {
    const { rerender } = renderHook(({ shouldLock }) => useLockBodyScroll(shouldLock), {
      initialProps: { shouldLock: false },
    })

    rerender({ shouldLock: true })
    expect(document.body.style.overflow).toBe('hidden')

    rerender({ shouldLock: false })
    expect(document.body.style.overflow).toBe('auto')
  })
})
