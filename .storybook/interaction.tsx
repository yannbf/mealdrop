import { userEvent } from '@storybook/test'

export function delay(ms: number) {
  // @ts-expect-error add module augmentation for globalThis
  if (!!globalThis.test) {
    return new Promise((resolve) => resolve(undefined))
  } else {
    return new Promise((resolve) => {
      // animate mouse pointer from previous to current element
      return setTimeout(resolve, ms)
    })
  }
}

export async function mouseTo(target: Element, delay = 1700) {
  // @ts-expect-error add module augmentation for globalThis
  if (!!globalThis.test || !target) {
    return new Promise((resolve) => resolve(undefined))
  } else {
    return new Promise((resolve) => {
      // animate mouse pointer from previous to current element
      let cursorEl = document.getElementById('demoCursor')
      if (!cursorEl) {
        cursorEl = document.createElement('div')
        cursorEl.id = 'demoCursor'
        cursorEl.addEventListener(
          'transitionend',
          () => {
            if (cursorEl) {
              cursorEl.className = 'hide'
            }
            target.dispatchEvent(
              new MouseEvent('mouseover', { view: window, bubbles: true, cancelable: true })
            )
          },
          { capture: true }
        )

        document.body.appendChild(cursorEl)
      }

      if (!target.getBoundingClientRect) {
        console.log('target does not have getBoundingClientRect', target)
        return
      }

      const { left, top, width, height } = target.getBoundingClientRect()
      const sTop = Math.round(top + Math.min(height / 2, 50)) + 'px'
      const sLeft = Math.round(left + Math.min(width / 2, 50)) + 'px'

      cursorEl.className = 'moving'
      cursorEl.style.top = sTop
      cursorEl.style.left = sLeft
      cursorEl.style.transitionDuration = `${Math.round(delay * 0.9)}ms`
      // ^ bakes in a 10% time delay from movement ending to click event

      return setTimeout(resolve, delay)
    })
  }
}

export async function animatedUserEventClick(target: Element) {
  await mouseTo(target)
  return userEvent.click(target)
}
