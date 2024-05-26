// child components
import PageTemplate from "../PageTemplate"
import CustomCursor from '~/components/custom-cursor/CustomCursor'

import './Skills.scss'

export default function Skills () {
  return (
    <PageTemplate classes='page-skills'>
      <CustomCursor />

      <div className='page-content-wrapper'>
        <h1 className='page-title'>
          <span className='text'>Skills</span>
          <span className='circle-deco'></span>
        </h1>

        <p>Skills content</p>
      </div>
    </PageTemplate>
  )
}
