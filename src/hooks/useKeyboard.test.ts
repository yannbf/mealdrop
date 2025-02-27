import { describe, it, vi, expect } from 'vitest'
import { renderHook, act } from '@testing-library/react'
import { useKey } from './useKeyboard'

describe('useKey hook', () => {
  it('should return false initially', () => {
    const { result } = renderHook(() => useKey('a'))
    expect(result.current).toBe(false)
  })

  it('should call keyDownCb when the specified key is pressed', () => {
    const keyDownCb = vi.fn()
    const { result } = renderHook(() => useKey('a', keyDownCb))

    act(() => {
      globalThis.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }))
    })

    expect(result.current).toBe(true)
    expect(keyDownCb).toHaveBeenCalled()
  })

  it('should call keyUpCb when the specified key is released', () => {
    const keyUpCb = vi.fn()
    const { result } = renderHook(() => useKey('a', undefined, keyUpCb))

    act(() => {
      globalThis.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }))
      globalThis.dispatchEvent(new KeyboardEvent('keyup', { key: 'a' }))
    })

    expect(result.current).toBe(false)
    expect(keyUpCb).toHaveBeenCalled()
  })

  it('should not change state for non-matching key events', () => {
    const { result } = renderHook(() => useKey('a'))

    act(() => {
      globalThis.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }))
      globalThis.dispatchEvent(new KeyboardEvent('keyup', { key: 'b' }))
    })

    expect(result.current).toBe(false)
  })

  it('should handle case-insensitive key events', () => {
    const keyDownCb = vi.fn()
    const keyUpCb = vi.fn()
    const { result } = renderHook(() => useKey('a', keyDownCb, keyUpCb))

    act(() => {
      globalThis.dispatchEvent(new KeyboardEvent('keydown', { key: 'A' }))
    })

    expect(result.current).toBe(true)
    expect(keyDownCb).toHaveBeenCalled()

    act(() => {
      globalThis.dispatchEvent(new KeyboardEvent('keyup', { key: 'A' }))
    })

    expect(result.current).toBe(false)
    expect(keyUpCb).toHaveBeenCalled()
  })
})
