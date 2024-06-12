import { memo, useRef, useEffect, useState } from 'react'

// utils
import { classNames as cn } from '~/view-utils'

/*
  Some references on how SVG coordinate system works:

  - viewBox/preserveAspectRatio: https://www.sarasoueidan.com/blog/svg-coordinate-systems/
  - transformations in SVG: https://www.sarasoueidan.com/blog/svg-transformations/#transform-attribute-values
*/

const PATTERN_LEN = 120
let requestId: any = null

function SkillsPageAnimation ({
  classes = '' 
}: { classes?: string }) {
  // local-state
  const [patternPos, setPatternPos] = useState(0)
  const [posOffset, setPosOffset] = useState(0)
  const svgEl = useRef<SVGSVGElement | null>(null)

  // computed state
  const halfLen = PATTERN_LEN / 2

  // methods
  const animate = () => {
    setPatternPos(v => v + 0.1)

    requestId = window.requestAnimationFrame(animate)
  }

  const scrollHandler = () => {
    const scrollTop = document.body.scrollTop
    setPosOffset(scrollTop * 0.115)
  }

  // effects
  useEffect(() => {
    animate()
    document.body.addEventListener('scroll', scrollHandler)

    return () => {
      window.cancelAnimationFrame(requestId)
      document.body.removeEventListener('scroll', scrollHandler)
    }
  }, [])
  return (
    <div className={cn('skills-page-animation', classes)}>
      <svg className='svg' ref={svgEl}
        xmlns="http://www.w3.org/2000/svg" version="1.1"
        preserveAspectRatio='xMidYMid slice'>
        <defs>
          <pattern id="circle-pattern" x={patternPos - posOffset} y={patternPos - posOffset} patternUnits='userSpaceOnUse'
            width={PATTERN_LEN} height={PATTERN_LEN}>
            <line x1={halfLen} y1='0' x2={halfLen} y2={PATTERN_LEN}
              stroke='currentColor' strokeWidth='1' strokeDasharray='4 8' />
            <line x1='0' y1={halfLen} x2={PATTERN_LEN} y2={halfLen}
              stroke='currentColor' strokeWidth='1' strokeDasharray='4 8' />
            <circle r='4' cx={halfLen} cy={halfLen}
              fill='var(--background-0)' stroke='currentColor' strokeWidth={1}></circle>
          </pattern>
        </defs>

        <rect fill="url(#circle-pattern)" width="100%" height="100%" />
      </svg>
    </div>
  )
}

export default memo(SkillsPageAnimation)
