import { userEvent } from '@storybook/testing-library'
import { DecoratorFn } from '@storybook/react'
import { useEffect } from '@storybook/addons'

export const withAnimatedInteraction: DecoratorFn = (storyFn, { args: { demoMode } }) => {
  useEffect(() => {
    if (!demoMode) {
      return
    }

    let el: HTMLElement | null = null

    let remove = (elem?: Element) => {
      try {
        const elementToRemove = el || elem
        if (elementToRemove) {
          document.body.removeChild(elementToRemove)
        }
      } catch (e) { }
    }

    const doClickAnimation = (event: any) => {
      if (global.test || !(global as any).playing) { return }
      const { target } = event
      if (!target.getBoundingClientRect) {
        console.log("target does not have getBoundingClientRect", target)
        return
      }
      const { left, top, width, height } = target.getBoundingClientRect()
      const sTop = Math.round(top + (Math.min(height / 2, 50))) + 'px'
      const sLeft = Math.round(left + (Math.min(width / 2, 50))) + 'px'

      remove()
      el = document.createElement('div')
      el.className = 'clickEffect'
      el.style.top = sTop
      el.style.left = sLeft
      document.body.appendChild(el)

      el.addEventListener('animationend', () => {
        el && remove(el)
      })
    }

    document.addEventListener('click', doClickAnimation, { capture: true })

    return () => document.removeEventListener('click', doClickAnimation)
  }, [])

  if (!demoMode) {
    return storyFn()
  }

  return (
    <div>
      <div id="presentInteraction"></div>
      {storyFn()}
    </div>
  )
}

export function delay(ms: number) {
  if (!!global.test) {
    return new Promise(resolve => resolve(undefined));
  } else {
    return new Promise(resolve => {
      // animate mouse pointer from previous to current element
      return setTimeout(resolve, ms)
    });
  }
}

export async function mouseTo(target: Element, delay = 1200) {
  if (!!global.test || !target) {
    return new Promise(resolve => resolve(undefined));
  } else {
    return new Promise(resolve => {
      // animate mouse pointer from previous to current element
      let cursorEl = document.getElementById('demoCursor')
      if (!cursorEl) {
        cursorEl = document.createElement('div')
        cursorEl.id = 'demoCursor'
        cursorEl.addEventListener('transitionend', () => {
          if (cursorEl) {
            cursorEl.className = 'hide'
          }
          target.dispatchEvent(new MouseEvent('mouseover', { 'view': window, 'bubbles': true, 'cancelable': true }))
        }, { capture: true })

        document.body.appendChild(cursorEl)
      }

      if (!target.getBoundingClientRect) {
        console.log("target does not have getBoundingClientRect", target)
        return
      }

      const { left, top, width, height } = target.getBoundingClientRect()
      const sTop = Math.round(top + (Math.min(height / 2, 50))) + 'px'
      const sLeft = Math.round(left + (Math.min(width / 2, 50))) + 'px'

      cursorEl.className = 'moving'
      cursorEl.style.top = sTop
      cursorEl.style.left = sLeft
      cursorEl.style.transitionDuration = `${Math.round(delay * .9)}ms`
      // ^ bakes in a 10% time delay from movement ending to click event

      return setTimeout(resolve, delay)
    });
  }
}

export async function userEventClick(target: Element) {
  await mouseTo(target)
  return userEvent.click(target)
}
