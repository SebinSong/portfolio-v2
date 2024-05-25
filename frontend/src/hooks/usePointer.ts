import { useRef, useEffect } from 'react'

import { isTouchDevice } from '~/view-utils.ts'
import type { Point } from '~/types/common'

const pointerEventName: 'touchmove' | 'mousemove' = isTouchDevice ? 'touchmove' : 'mousemove'
let cursorRequestId: any = null

export default function usePointer (
  onCursorUpdate?: (a: Point) => any
): any {
  const pointer = useRef<Point>({ x: 0, y: 0 })
  const cursorPosition = useRef<Point>({ x: 0, y: 0 })

  const updatePointer = (e: any) => {
    const isTouch = e.type.includes('touch')

    if (isTouch) {
      pointer.current.x = e.touches[0].clientX
      pointer.current.y = e.touches[0].clientY
    } else {
      pointer.current.x = e.clientX
      pointer.current.y = e.clientY
    }
  }

  const updateCursorPosition = () => {
    const diff: Point = {
      x: pointer.current.x - cursorPosition.current.x,
      y: pointer.current.y - cursorPosition.current.y
    }
    const diffDiagonal = Math.sqrt(diff.x*diff.x + diff.y*diff.y)
    const cursorSpeed = diffDiagonal > 30 ? 0.285 : 0.185

    cursorPosition.current.x += diff.x * cursorSpeed
    cursorPosition.current.y += diff.y * cursorSpeed

    cursorRequestId = window.requestAnimationFrame(updateCursorPosition)

    if (onCursorUpdate) {
      onCursorUpdate(cursorPosition.current)
    }
  }

  useEffect(() => {
    window.addEventListener(pointerEventName, updatePointer)
    updateCursorPosition()

    return () => {
      window.removeEventListener(pointerEventName, updatePointer)

      if (cursorRequestId) {
        window.cancelAnimationFrame(cursorRequestId)
      }
    }
  })

  return {
    pointer,
    cursorPosition
  }
}
