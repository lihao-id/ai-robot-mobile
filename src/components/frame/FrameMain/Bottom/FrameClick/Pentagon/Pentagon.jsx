import React, { useRef, useEffect } from 'react'
import * as css from './css/styled'

const Pentagon = () => {
  let ref = useRef(null)
  useEffect(() => {
    const canvas: HTMLCanvasElement = ref.current
    canvas.width = 75
    canvas.height = 78
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = 'rgba(11, 49, 66, 1)'
    ctx.beginPath()
    ctx.moveTo(75, 0)
    ctx.lineTo(75, 78)
    ctx.lineTo(44, 78)
    ctx.lineTo(24, 39)
    ctx.lineTo(44, 0)
    ctx.closePath()
    ctx.fill()
    ctx.strokeStyle = 'rgba(11, 49, 66, 1)'
    ctx.lineWidth = 3
    ctx.beginPath()
    ctx.moveTo(24, 39)
    ctx.lineTo(0, 39)
    ctx.stroke()
  })

  return (<css.styledPentagon
    ref={ref}
  >

  </css.styledPentagon>)
}

export default Pentagon