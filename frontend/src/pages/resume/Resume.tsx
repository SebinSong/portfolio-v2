import { useState, useMemo, useCallback } from "react"
// child components
import PageTemplate from "../PageTemplate"
import TabMenu from "~/components/tab-menu/TabMenu"

// utils
import resumeData from '~/view-data/resume-data.ts'
import type { ResumeEntry } from '~/view-data/resume-data.ts'

const initTabId: ResumeEntry['id'] = resumeData[0].id

import './Resume.scss'

export default function Resume () {
  // local-state
  const [selectedTabId, setSelectedTabId] = useState<ResumeEntry['id']>(initTabId)

  // computed state
  const content: (ResumeEntry | null) = useMemo(() => {
    const found = resumeData.find(x => x.id === selectedTabId)
    return found || null
  }, [selectedTabId])

  // methods
  const onTabSelect = useCallback(setSelectedTabId, [])

  return (
    <PageTemplate classes='page-resume'>
      <div className='resume-details'>
        <TabMenu classes='resume-tab-menu'
          list={resumeData}
          initId={initTabId}
          onSelect={onTabSelect} />

        <div className='resume-details-content'>
          {
            content
              ? <>
                  <span className='resume-content-label'>period</span>
                  <p>2020.04 - Present</p>
                </>
              : <div className='no-content-to-show'>
                  No content to show.
                </div>
          }
        </div>
      </div>
    </PageTemplate>
  )
}
