import { useEffect, useState, useRef } from 'react'
import type { Point, CanvasArea } from '~/types/common'

// utils
import usePointer from '~/hooks/usePointer.ts'
import { classNames as cn } from '~/view-utils'

import './CustomCursor.scss'

const tinyRadius = 4
const bigRadius = 16

type ComponentProps = {
  classes?: string,
  onCursorUpdate?: (a: Point) => any
}

export default function CustomCursor ({
  onCursorUpdate,
  classes
}: ComponentProps) {
  // local-state
  usePointer(cursorUpdateHandler)

  const svgEl = useRef<any>(null)
  const bigCircleEl = useRef<any>(null)
  const tinyCircleEl = useRef<any>(null)
  const [canvasSize, setCanvasSize] = useState<CanvasArea>({ width: 0, height: 0 })

  // methods
  function cursorUpdateHandler (pos: Point): void {
    const els: any[] = [bigCircleEl, tinyCircleEl]
    els.forEach((el: any) => {
      el.current.setAttributeNS(null, 'cx', pos.x)
      el.current.setAttributeNS(null, 'cy', pos.y)
    })

    if (onCursorUpdate) {
      onCursorUpdate(pos)
    }
  }

  const resizeHandler = (): void => {
    setCanvasSize({
      width: innerWidth,
      height: innerHeight
    })
  }

  // effects
  useEffect(() => {
    window.addEventListener('resize', resizeHandler)
    resizeHandler()

    return () => {
      window.removeEventListener('resize', resizeHandler)
    }
  }, [])

  return (
    <svg ref={svgEl} className={cn('custom-cursor-canvas', classes)}
      width={canvasSize.width} height={canvasSize.height}
      viewBox={`0 0 ${canvasSize.width} ${canvasSize.height}`}>
      <g className='custom-cursor-group'>
        <circle ref={bigCircleEl} className='big-circle' r={bigRadius}
          cx='0' cy='0' fill='var(--highlight)' fillOpacity='0.425' stroke='currentColor'
          strokeOpacity='0.5' strokeWidth='1' strokeDasharray='4 6'></circle>
        <circle ref={tinyCircleEl} className='tiny-circle' r={tinyRadius}
          cx='0' cy='0' stroke='none' fill='currentColor' fillOpacity='0.875'></circle>
      </g>
    </svg>
  )
}
