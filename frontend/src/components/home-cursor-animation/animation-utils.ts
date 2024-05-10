'use strict'

const tinyRadius = 4
const bigRadius = 16
export const cursorSpeed = 0.4

export function diagonalWindow (): number {
  const w = window.innerWidth
  const h  = window.innerHeight
  return Math.ceil(Math.sqrt(w*w + h*h))
}

export function drawCursor (pos: any): string {
  const posX = pos.x || 0
  const posY = pos.y || 0

  return `
  <g className='custom-cursor-group'>
    <circle className='big-circle' r='${bigRadius}' cx='${posX}' cy='${posY}'
      fill='none' stroke='currentColor' stroke-opacity='0.65' stroke-width='1'></circle>
    <circle className='tiny-circle' r='${tinyRadius}' cx='${posX}' cy='${posY}'
      stroke='none' fill='currentColor' fill-opacity='0.875'></circle>
  </g>
  `
}
