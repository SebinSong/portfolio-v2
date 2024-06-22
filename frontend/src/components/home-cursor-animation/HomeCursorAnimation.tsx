import { useState, useEffect, useRef } from 'react'

// utils
import { paintSvg, moveComponents } from './animation-utils.ts'
import type { Point, CanvasArea } from '~/types/common'

const position: Point = { x: 0, y: 0 } // position of the custom cursor
const pointer: Point = { x: 0, y: 0 } // position of the actual device pointer (e.g. mouse, touch-finger)
let aniRequestId: any = null

// import scss
import './HomeCursorAnimation.scss'

export default function HomeCursorAnimation () {
  // local-state
  const [canvasArea, setCanvasArea] = useState<CanvasArea>({width: innerWidth, height: innerHeight })
  const svgEl = useRef<any>(null)
  const isTouchDevice = useRef<boolean>(false)

  // methods
  const resizeHandler = () => {
    setCanvasArea({
      width: innerWidth,
      height: innerHeight
    })

    initSvg()
  }

  const updateCoordinates = (e: any) => {
    if (isTouchDevice.current) {return }

    pointer.x = e.clientX
    pointer.y = e.clientY
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

  const scrollHandler = () => {
    if (!isTouchDevice.current) { return }

    const bodyEl = document.body
    const scrollPercent = bodyEl.scrollTop / bodyEl.scrollHeight

    pointer.x = -1 * (150 + 200 * scrollPercent)
    pointer.y = -400 + (innerHeight + 800) * scrollPercent
  }

  // effects
  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    window.addEventListener('mousemove', updateCoordinates)
    document.body.addEventListener('scroll', scrollHandler)

    initSvg()
    setTimeout(() => animate(), 20)

    // setup touch-device checker
    const mqChecker = window.matchMedia('(hover: hover)')
    isTouchDevice.current = !mqChecker.matches
    mqChecker.onchange = (e: any) => {
      isTouchDevice.current = !e.matches

      if (e.matches) {
        scrollHandler()
      }
    }
  
    return () => {
      // Free up the resources that the animation is using when no need.
      window.removeEventListener('resize', resizeHandler)
      window.removeEventListener('mousemove', updateCoordinates)
      document.body.removeEventListener('scroll', scrollHandler)

      mqChecker.onchange = null

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
