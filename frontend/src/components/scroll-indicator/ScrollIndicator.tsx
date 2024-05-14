import React from 'react'

// utils
import { classNames as cn } from '~/view-utils'

import './ScrollIndicator.scss'

interface Props {
  classes?: string,
  verticalText?: boolean
}

function ScrollIndicator ({
  classes = '',
  verticalText = false
}: Props) {
  return (
    <div className={cn('scroll-indicator-container', classes)}>
      <span className='indicator-track'>
        <span className='indicator-mover'></span>
      </span>

      <span className={cn('indicator-text', verticalText && 'is-vertical')}>Scroll</span>
    </div>
  )
}

export default React.memo(ScrollIndicator)
