import { memo, useEffect, useState } from 'react'

// utils
import { classNames as cn } from '~/view-utils'

function ScrollToTopButton ({
  classes = ''
}: { classes?: string }) {
  // local-state
  const [showBtn, setShowBtn] = useState(false)

  // methods
  const scrollHandler = () => {
    const scrollTop = document.body.scrollTop
    const halfScreenH = window.innerHeight / 2

    setShowBtn(scrollTop > halfScreenH)
  }

  const clickHandler = () => {
    document.body.scrollTop = 0
  }

  // effects
  useEffect(() => {
    document.body.addEventListener('scroll', scrollHandler)
    scrollHandler()

    return () => {
      document.body.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  return (
    <button className={cn('is-unstyled scroll-to-top-btn', showBtn && 'is-active', classes)}
      onClick={clickHandler}>
      <i className='icon-arrow-up'></i>
      <span>Top</span>
    </button>
  )
}

export default memo(ScrollToTopButton)
