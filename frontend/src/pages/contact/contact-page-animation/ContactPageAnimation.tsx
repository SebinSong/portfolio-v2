import { memo, useRef, useEffect, useState } from 'react'
// components
import CustomCursor from '~/components/custom-cursor/CustomCursor'

// utils
import { classNames as cn } from '~/view-utils'

let requestId: any = null

function ContactPageAnimation ({
  classes = '' }: { classes?: string }
) {
  const svgEl = useRef<any>(null)
  const [dashOffset, setDashOffset] = useState<number>(0)

  // methods
  const animate = () => {
    setDashOffset(v => v + 0.2)

    requestId = window.requestAnimationFrame(animate)
  }

  // effects
  useEffect(() => {
    animate()

    return () => {
      window.cancelAnimationFrame(requestId)
    }
  }, [])
  return (
    <>
      <div className={cn('contact-page-animation', classes)}>
        <svg className='svg' ref={svgEl} xmlns='http://www.w3.org/2000/svg'
          version='1.1' fill='none'>
          <defs>
            <pattern id='maze-pattern' patternUnits='userSpaceOnUse'
              x='0' y='0' width='259.5' height='258'>
              <polyline points="-3,-2 16.5,15.5 31.5,0.5 63.5,32.5 48.5,47.5 31.5,32.5 -0.5,64.5 16.5,79.5 31.5,64.5 47.5,79.5 95.5,32.5 80.5,15.5 95.5,0.5 127.5,32.5 48.5,111.5 31.5,96.5 -0.5,128.5 16.5,143.5 31.5,127.5 63.5,160.5 80.5,143.5 63.5,128.5 159.5,32.5 144.5,15.5 159.5,0.5 175.5,16.5 192,0 208,16 224,0 256,32 240,48 224,32 207.501,48.501 223.5,64.5 207.5,80.5 176.5,47.5 144.5,80.5 159.5,96.5 175.5,80.5 191.5,96.5 159.5,128.5 127.5,96.5 95.5,127.5 111.5,143.5 127.5,127.5 175.5,176.5 159.5,192.5 127.5,160.5 111.5,176.5 95.5,160.5 63.5,192.5 31.5,160.5 16.5,175.5 31.999,191.483 0,224 16,240 32,225 64,256 80,240 64,224 79.667,208.333 95.5,192.5 111.5,207.5 95.5,224.5 111.5,239.5 127.5,256.5 143.5,240.5 127.5,224.5 143.5,208.5 175.5,240.5 191.5,224.5 175.5,208.5 207.5,176.5 224,160 208,144 191.998,160.998 175.5,144.5 207.5,112.5 240,80 256,96 223.5,128.5 256,160 239.5,176.5 256,192 240,208 224,192 207.5,208.5 223.5,224.5 207.5,240.5 223.5,256.5 240,240 259,259"
                strokeLinejoin="round" strokeLinecap="round"
                strokeDasharray='40 10 4 10' 
                fill="none" stroke='currentColor'
                strokeDashoffset={dashOffset}></polyline>
            </pattern>
          </defs>
          <rect fill='url(#maze-pattern)' width='100%' height='100%' />
        </svg>
      </div>

      <CustomCursor classes='contact-page-custom-cursor'></CustomCursor>
    </>
  )
}

export default memo(ContactPageAnimation)
