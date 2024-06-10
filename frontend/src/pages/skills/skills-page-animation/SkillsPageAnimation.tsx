import { memo, useRef, useEffect, useState, ReactNode } from 'react'

// utils
import { classNames as cn } from '~/view-utils'

/*
  Some references on how SVG coordinate system works:

  - viewBox/preserveAspectRatio: https://www.sarasoueidan.com/blog/svg-coordinate-systems/
  - transformations in SVG: https://www.sarasoueidan.com/blog/svg-transformations/#transform-attribute-values
*/

function SkillsPageAnimation ({
  classes = '' 
}: { classes?: string }) {
  const svgEl = useRef<SVGSVGElement | null>(null)
  const [lineEls, setLineEls] = useState<ReactNode>('')
  const [isVertical, setIsVertical] = useState<boolean>(false)

  // methods
  const paint = () => {
    // paint the polyline svg elements to the canvas
    const bbox = svgEl.current?.getBoundingClientRect()

    if (!bbox) { setLineEls('') }
    else {
      const canvasW = bbox.width
      const canvasH = bbox.height
      const isVertical = canvasH > canvasW
      const ANIMATION_AMP = 100 // amplitude of the sine wave of the animation.
      const LINE_GAP = ANIMATION_AMP * 0.5 // gap between the consecutive poly-line elements.
      const els: any[] = []
      setIsVertical(isVertical)

      // Step-1: determine the number of elements to paint first.
      const numEl = Math.ceil(
        (isVertical ? canvasH : canvasW) / LINE_GAP
      )

      for (let i = 0; i < numEl; i++) {
        const offset = i * LINE_GAP
        const points = isVertical
          ? `0,${offset} ${canvasW / 2},${offset + ANIMATION_AMP} ${canvasW},${offset}`
          : `${offset},0 ${offset + ANIMATION_AMP},${canvasH / 2} ${offset},${canvasH}`

        els.push(
          <polyline key={`pl-${i}`} fill='none'
            stroke='var(--background-0_2)' strokeWidth='1'
            data-index={i} points={points}></polyline>
        )
      }
      setLineEls(els)
    }
  }

  // effects
  useEffect(() => {
    paint()
  }, [])
  return (
    <div className={cn('skills-page-animation', classes)}>
      <svg className='svg' ref={svgEl}
        xmlns="http://www.w3.org/2000/svg" version="1.1"
        preserveAspectRatio='xMidYMid slice'>
          {lineEls}
      </svg>
    </div>
  )
}

export default memo(SkillsPageAnimation)
