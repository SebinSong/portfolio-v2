import { memo, useRef, useState, useEffect, ReactNode } from 'react'

// utils
import { classNames as cn } from '~/view-utils'

import './FeedbackBanner.scss'

interface Props {
  type?: 'info' | 'error',
  message: string,
  showError?: boolean,
  hideCloseBtn?: boolean,
  scrollOnDisplay?: boolean,
  classes?: string,
  children?: ReactNode,
  onClose?: () => any
}

function FeedbackBanner ({
  classes = '',
  type = 'info',
  message = '',
  showError = false,
  hideCloseBtn = false,
  scrollOnDisplay = true,
  onClose,
  children = null
}: Props) {
  // local-state
  const rootEl = useRef<HTMLDivElement | null>(null)
  const [closed, setClosed] = useState<boolean>(false)

  // methods
  const closeHandler = () => {
    setClosed(true)
    onClose && onClose()
  }

  useEffect(() => {
    if (showError && scrollOnDisplay) {
      // scroll to the feedback-banner
      setTimeout(() => {
        rootEl.current && rootEl.current.scrollIntoView({
          block: 'center',
          inline: "nearest"
        })
      }, 50)
    }
  }, [showError])

  if (closed || !showError) { return null }

  return (
    <div ref={rootEl} className={cn('banner-feedback', `is-type-${type}`, classes)}>
      <div className='banner-msg'>{children || message}</div>

      {
        !hideCloseBtn &&
        <button className='is-unstyled banner-close-btn'
          onClick={closeHandler}>
          <i className='icon-close'></i>
        </button>
      }
    </div>
  )
}

export default memo(FeedbackBanner)
