import { memo } from 'react'
// components
import CustomCursor from '~/components/custom-cursor/CustomCursor'

// utils
import { classNames as cn } from '~/view-utils'

function ContactPageAnimation ({
  classes = '' }: { classes?: string }
) {
  return (
    <>
      <div className={cn('contact-page-animation', classes)}></div>

      <CustomCursor classes='contact-page-custom-cursor'></CustomCursor>
    </>
  )
}

export default memo(ContactPageAnimation)
