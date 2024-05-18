import { useState, useMemo, useCallback } from "react"
// child components
import PageTemplate from "../PageTemplate"
import TabMenu from "~/components/tab-menu/TabMenu"

// utils
import resumeData from '~/view-data/resume-data.ts'
import type { ResumeEntry } from '~/view-data/resume-data.ts'
import { classNames as cn } from '~/view-utils'

// helpers
const initTabId: ResumeEntry['id'] = resumeData[0].id
const getPeriodDisplay = (entry: ResumeEntry): string => `${entry.period.from} - ${entry.period.to || 'Present'}`

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
        <h1 className='page-title'>
          <span className='text'>Work experiences</span>
          <span className='circle-deco'></span>
        </h1>

        <TabMenu classes='resume-tab-menu'
          list={resumeData}
          initId={initTabId}
          onSelect={onTabSelect}
          showIndex={true} />

        <div className='resume-content-container'>
          {
            content
              ? <>
                  <div className='resume-content-line'>
                    <span className='resume-content-label'>period</span>
                    <p className='resume-content-value'>{getPeriodDisplay(content)}</p>
                  </div>
                  
                  <div className='resume-content-line'>
                    <span className='resume-content-label'>company location</span>
                    <p className='resume-content-value'>{content.location}</p>
                  </div>

                  <div className='resume-content-line'>
                    <span className='resume-content-label'>Roles</span>
                    <p className='resume-content-value emphasis'>{content.roles.join(' / ')}</p>
                  </div>

                  <div className='resume-content-line'>
                    <span className='resume-content-label'>Contract type</span>
                    <p className='resume-content-value'>
                      <span>{`${content.contractType},`}</span>
                      <span className='ml-4 is-inline-block emphasis'>{content.workType}</span>
                    </p>
                  </div>

                  <div className='resume-content-line'>
                    <span className='resume-content-label'>Tech stacks</span>
                    <div className='stacks-container'>
                      {
                        content.stacks.map((stack, index) => (<span className={cn('stack-tag', index % 2 === 0 && 'no-highlight')} key={index}>{stack}</span>))
                      }
                    </div>
                  </div>

                  <div className='resume-content-line'>
                  <span className='resume-content-label'>Things I've done</span>
                  </div>
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
