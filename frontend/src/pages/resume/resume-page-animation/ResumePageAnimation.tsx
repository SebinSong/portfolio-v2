import { memo } from 'react'

// utils
import { classNames as cn } from '~/view-utils'

import './ResumePageAnimation.scss'

interface ComponentProps {
  classes?: string
}

function ResumePageAnimation ({
  classes = ''
}: ComponentProps) {
  return (
    <div className={cn('resume-page-animation', classes)}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
        viewBox="0 0 1422 800" id="qqquad" opacity='0.325'>
        <g shapeRendering="crispEdges" strokeLinejoin="round" fill="none" strokeWidth="1" stroke="currentColor">
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
          <polygon points="1066.5,400 711,600 711,400"></polygon>
          <polygon points="1066.5,600 1066.5,800 711,600"></polygon>
          <polygon points="1066.5,800 1422,600 1422,800"></polygon>
        </g>
      </svg>
    </div>
  )
}

export default memo(ResumePageAnimation)
