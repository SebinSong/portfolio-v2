import { memo, useRef, useEffect } from 'react'

// components
import CustomCursor from '~/components/custom-cursor/CustomCursor'

// utils
import { classNames as cn } from '~/view-utils'

import './ResumePageAnimation.scss'

const svgAspectRatio = 1.78
function ResumePageAnimation ({
  classes = ''
}: { classes?: string }) {
  const svgEl = useRef<any>(null)

  // methods
  const adjustCanvas = () => {
    if (!svgEl.current) { return }

    let widthVal: number = innerWidth
    let heightVal: number = innerWidth / svgAspectRatio

    if (heightVal < innerHeight) {
      heightVal = innerWidth
      widthVal = heightVal * svgAspectRatio

      svgEl.current.classList.add('is-rotated')
    } else {
      svgEl.current.classList.remove('is-rotated')
    }

    svgEl.current.setAttributeNS(null, 'width', widthVal)
    svgEl.current.setAttributeNS(null, 'height', heightVal)
  }

  // effects
  useEffect(() => {
    window.addEventListener('resize', adjustCanvas)
    adjustCanvas()

    return () => {
      window.removeEventListener('resize', adjustCanvas)
    }
  }, [])

  return (
    <>
      <div className={cn('resume-page-animation', classes)}>
        <svg className='svg' ref={svgEl} xmlns="http://www.w3.org/2000/svg" version="1.1"
          viewBox="0 0 1422 800" opacity='0.675'
          strokeWidth="0.8" stroke="currentColor" strokeDasharray='20 10 8 10'
          strokeLinejoin="round" fill="none">
          <g shapeRendering="crispEdges">
            <polygon points="1422,200 1066.5,0 1422,0"></polygon>
            <polygon points="1066.5,0 1066.5,200 711,0"></polygon>
            <polygon points="1066.5,200 711,400 1066.5,400"></polygon>
            <polygon points="1422,200 1066.5,400 1422,400"></polygon>
            <polygon points="711,0 355.5,0 711,200"></polygon>
            <polygon points="355.5,200 0,0 0,200"></polygon>
            <polygon points="355.5,400 0,200 0,400"></polygon>
            <polygon points="711,200 711,300 533.25,300"></polygon>
            <polygon points="355.5,200 533.25,200 533.25,300"></polygon>
            <polygon points="533.25,300 355.5,400 533.25,400"></polygon>
            <polygon points="533.25,400 711,300 533.25,300"></polygon>
            <polygon points="711,600 355.5,600 711,400"></polygon>
            <polygon points="355.5,600 0,600 355.5,400"></polygon>
            <polygon points="0,600 355.5,800 355.5,600"></polygon>
            <polygon points="711,800 355.5,800 711,600"></polygon>
            <polygon points="1422,400 1422,600 1066.5,400"></polygon>
            <polygon points="1066.5,600 1066.5,800 711,600"></polygon>
            <polygon points="1066.5,800 1422,600 1422,800"></polygon>
          </g>
        </svg>
      </div>

      <CustomCursor classes='resume-page-custom-cursor' />
    </>
  )
}

export default memo(ResumePageAnimation)
