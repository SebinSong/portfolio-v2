import { useState, useRef, useEffect } from 'react'

import { isTouchDevice } from '~/view-utils.ts'
import type { Point } from '~/types/common'

const pointerEventName: 'touchmove' | 'mousemove' = isTouchDevice ? 'touchmove' : 'mousemove'
let cursorRequestId: any = null

export default function usePointer (
  onCursorUpdate?: (a: Point) => any
): any {
  const pointer = useRef<Point>({ x: innerWidth / 2, y: -100 })
  const cursorPosition = useRef<Point>({ x: innerWidth / 2, y: -100 })
  const [isTouchDevice, setIsTouchDevice] = useState<boolean>(false)

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
    const mqChecker = window.matchMedia('(hover: hover)')

    window.addEventListener(pointerEventName, updatePointer)
    updateCursorPosition()

    setIsTouchDevice(!mqChecker.matches)
    mqChecker.onchange = (e: any) => {
      setIsTouchDevice(!e.matches)
    }

    return () => {
      window.removeEventListener(pointerEventName, updatePointer)
      mqChecker.onchange = null

      if (cursorRequestId) {
        window.cancelAnimationFrame(cursorRequestId)
      }
    }
  }, [])

  return {
    pointer,
    cursorPosition,
    isTouchDevice
  }
}
