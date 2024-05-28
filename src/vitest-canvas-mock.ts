var apis = [
  'Path2D',
  'CanvasGradient',
  'CanvasPattern',
  'CanvasRenderingContext2D',
  'DOMMatrix',
  'ImageData',
  'TextMetrics',
  'ImageBitmap',
  'createImageBitmap',
]
async function importMockWindow() {
  // @ts-ignore
  const getCanvasWindow = await import('jest-canvas-mock/lib/window.js').then(
    (res) => res.default?.default || res.default || res
  )
  const canvasWindow = getCanvasWindow({ document: window.document })
  apis.forEach((api) => {
    // @ts-ignore
    globalThis[api] = canvasWindow[api]
    // @ts-ignore
    globalThis.window[api] = canvasWindow[api]
  })
}
// @ts-ignore
globalThis.jest = vi
importMockWindow()
