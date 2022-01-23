import '@testing-library/jest-dom/extend-expect'
import 'jest-canvas-mock'

// https://github.com/nickcolley/jest-axe/issues/147#issuecomment-758804533
const { getComputedStyle } = window
window.getComputedStyle = (elt) => getComputedStyle(elt)
window.scrollTo = () => {}
