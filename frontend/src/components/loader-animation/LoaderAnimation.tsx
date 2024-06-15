import { memo } from 'react'

// utils
import { classNames as cn } from '~/view-utils'

type Props = {
  classes?: string,
  show?: boolean
}

function LoaderAnimation ({
  classes = '',
  show
}: Props) {
  if (!show) { return null }

  return (
    <span className={cn('loader-animation', classes)}>
      <span className='loader-track'></span>
      <span className='loader-tyre'></span>
    </span>
  )
}

export default memo(LoaderAnimation)
