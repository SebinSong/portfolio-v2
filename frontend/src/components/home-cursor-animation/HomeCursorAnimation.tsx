import { useState, useEffect, useRef } from 'react'

// utils
import { isTouchDevice } from '~/view-utils.ts'
import { paintSvg, moveComponents } from './animation-utils.ts'
import type { Point } from './animation-utils.ts'


const pointerEventName = isTouchDevice ? 'touchmove' : 'mousemove'
const position: Point = { x: 0, y: 0 } // position of the custom cursor
const pointer: Point = { x: 0, y: 0 } // position of the actual device pointer (e.g. mouse, touch-finger)
let aniRequestId: any = null

// import scss
import './HomeCursorAnimation.scss'

export default function HomeCursorAnimation () {
  // local-state
  const [canvasArea, setCanvasArea] = useState({width: innerWidth, height: innerHeight })
  const svgEl = useRef(null)
  // methods
  const resizeHandler = () => {
    setCanvasArea({
      width: innerWidth,
      height: innerHeight
    })

    initSvg()
  }

  const updateCoordinates = (e: any) => {
    const isTouch = e.type.includes('touch')

    if (isTouch) {
      pointer.x = e.touches[0].clientX
      pointer.y = e.touches[0].clientY
    } else {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }
  }

  const initSvg = () => {
    const canvasEl = (svgEl.current as unknown) as HTMLElement
    paintSvg(canvasEl, position)
  }

  const updatePosition = () => {
    const diff = {
      x: pointer.x - position.x,
      y: pointer.y - position.y
    }
    const diffDiagonal = Math.sqrt(diff.x*diff.x + diff.y*diff.y)
    const cursorSpeed = diffDiagonal > 30 ? 0.285 : 0.185
    position.x += diff.x * cursorSpeed
    position.y += diff.y * cursorSpeed
  }

  const animate = () => {
    // update the position of the custom cursor drawn on the svg canvas.
    updatePosition()
    moveComponents(position)

    aniRequestId = window.requestAnimationFrame(animate)
  }

  const stopAnimation = () => {
    if (aniRequestId) {
      window.cancelAnimationFrame(aniRequestId)
    }
  }

  // effects
  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    window.addEventListener(pointerEventName, updateCoordinates)
    initSvg()
    setTimeout(() => animate(), 20)

    return () => {
      // Free up the resources that the animation is using when no need.
      window.removeEventListener('resize', resizeHandler)
      window.removeEventListener(pointerEventName, updateCoordinates)
      stopAnimation()
    }
  }, [])
  return (
    <div className='home-cursor-animation-container'>
      <svg ref={svgEl}
        className='animation-svg' width={canvasArea.width} height={canvasArea.height}
        viewBox={`0 0 ${canvasArea.width} ${canvasArea.height}`}>
      </svg>
    </div>
  )
}
