'use strict'

import { linearScale, genArrayFromNumber, isTouchDevice } from '~/view-utils'
import type { Theme, Point } from '~/types/common'

const tinyRadius = 4
const bigRadius = 16
const radiusStart = 36
const transitionDuration = isTouchDevice ? 14 : 10
const particleColors: { light: string, dark: string }  = {
  light: 'rgba(140, 140, 140, 0.275)',
  dark: 'rgba(140, 140, 140, 0.275)'
}
let bigCursor: any, tinyCursor: any, particleEls: any[]

export function diagonalWindow (): number {
  const w = window.innerWidth
  const h  = window.innerHeight
  return Math.ceil(Math.sqrt(w*w + h*h))
}

export function drawCursor (pos: Point): string {
  const posX = pos.x || 0
  const posY = pos.y || 0

  return `
  <g class='custom-cursor-group'>
    <circle class='big-circle' r='${bigRadius}' cx='${posX}' cy='${posY}'
      fill='var(--highlight)' fill-opacity='0.425' stroke='currentColor'
        stroke-opacity='0.5' stroke-width='1' stroke-dasharray='4 6'></circle>
    <circle class='tiny-circle' r='${tinyRadius}' cx='${posX}' cy='${posY}'
      stroke='none' fill='currentColor' fill-opacity='0.875'></circle>
  </g>
  `
}

function calcParticleNumbers (): number {
  const diagonal = diagonalWindow()
  return Math.ceil(linearScale([200, 2000], [12, 45])(diagonal))
}

function calcRadiusDiff (): number {
  const diagonal = diagonalWindow()
  return linearScale([200, 2000], [40, 100])(diagonal)
}

export function drawParticles (pos: Point, theme: Theme = 'light'): string {
  const particleNums = calcParticleNumbers()
  const radiusDiff = calcRadiusDiff()
  const particleColor = particleColors[theme]
  const getParticleRadius = (index: number): number => radiusStart + index * radiusDiff

  return `
    <g class='particles'>
      ${
        genArrayFromNumber(particleNums).map(index => {
          return `
            <circle id='particle-${index}'
              r='${getParticleRadius(index)}'
              cx='${pos.x}' cy='${pos.y}'
              fill='none' 
              stroke='${particleColor}'
              stroke-width='1'
              style='transition-duration: ${30 + transitionDuration * index}ms;'></circle>
          `
        }).join('')
      }
    </g>
  `
}

export function paintSvg (svgEl: HTMLElement, position: Point) {
  svgEl.innerHTML = `
    ${drawCursor(position)}
    ${drawParticles(position)}
  `

  bigCursor = svgEl.querySelector('.custom-cursor-group circle.big-circle')
  tinyCursor = svgEl.querySelector('.custom-cursor-group circle.tiny-circle')
  particleEls = Array.from(svgEl.querySelectorAll('.particles circle'))
}

export function moveComponents (position: Point) {
  const els: any[] = [bigCursor, tinyCursor, ...particleEls]

  els.forEach((el: any) => {
    el.setAttributeNS(null, 'cx', position.x)
    el.setAttributeNS(null, 'cy', position.y)
  })
}
