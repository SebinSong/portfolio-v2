import { ReactNode } from 'react'
// utils
import { classNames as cn } from '~/view-utils'

import './PageTemplate.scss'

interface Props {
  classes?: string,
  children?: ReactNode
}

export default function PageTemplate ({
  classes = '',
  children
}: Props) {
  return (
    <div className={cn('l-page page-common', classes)}>
      {children}
    </div>
  )
}
