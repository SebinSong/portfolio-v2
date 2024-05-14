import { ReactNode } from 'react'
// utils
import { classNames as cn } from '~/view-utils'

interface Props {
  classes?: string,
  children?: ReactNode
}

export default function PageTemplate ({
  classes = '',
  children
}: Props) {
  return (
    <div className={cn('l-page', classes)}>
      {children}
    </div>
  )
}
