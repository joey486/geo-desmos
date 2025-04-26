// src/components/graphHelpers.js

// Convert user math string to JS-friendly function string
export function toJsFunc(fnStr) {
    fnStr = fnStr.replace(/\^/g, '**')
    const mathFn = [
      'sin', 'cos', 'tan',
      'asin', 'acos', 'atan',
      'sqrt', 'abs', 'log', 'exp', 'pow', 'round', 'floor', 'ceil'
    ]
    mathFn.forEach(fn => {
      fnStr = fnStr.replace(
        new RegExp(`\\b${fn}\\b`, 'g'),
        `Math.${fn}`
      )
    })
    return fnStr
  }
  
  // Draws the graph on a canvas
  export function drawGraphOnCanvas(canvas, fn) {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, 600, 400)
    // Draw grid
    ctx.strokeStyle = '#eee'
    for (let i = 0; i <= 600; i += 50) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, 400)
      ctx.stroke()
    }
    for (let i = 0; i <= 400; i += 50) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(600, i)
      ctx.stroke()
    }
    // Axes
    ctx.strokeStyle = '#888'
    ctx.beginPath(); ctx.moveTo(0, 200); ctx.lineTo(600, 200); ctx.stroke()
    ctx.beginPath(); ctx.moveTo(300, 0); ctx.lineTo(300, 400); ctx.stroke()
    // Draw curve
    ctx.strokeStyle = '#2c6cff'
    ctx.lineWidth = 2
    ctx.beginPath()
    let first = true
    for (let px = 0; px < 600; ++px) {
      const x = (px - 300) / 30
      let y
      try { y = fn(x) } catch { y = NaN }
      if (isNaN(y) || Math.abs(y) > 1e4) {
        first = true
        continue
      }
      const py = 200 - y * 30
      if (first) {
        ctx.moveTo(px, py)
        first = false
      } else {
        ctx.lineTo(px, py)
      }
    }
    ctx.stroke()
    ctx.lineWidth = 1
  }