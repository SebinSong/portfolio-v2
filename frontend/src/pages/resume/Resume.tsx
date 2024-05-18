import { useState, useMemo, useCallback, ReactNode } from "react"
// child components
import PageTemplate from "../PageTemplate"
import TabMenu from "~/components/tab-menu/TabMenu"
import ResumePageAnimation from "./resume-page-animation/ResumePageAnimation"

// utils
import resumeData from '~/view-data/resume-data.ts'
import type { ResumeEntry } from '~/view-data/resume-data.ts'
import { classNames as cn } from '~/view-utils'

// helpers
const initTabId: ResumeEntry['id'] = resumeData[0].id
const getPeriodDisplay = (entry: ResumeEntry): string => `${entry.period.from} - ${entry.period.to || 'Present'}`
const getDescContent = (descItem: any, itemIndex: any): ReactNode => {
  const isItemString = typeof descItem === 'string'
  if (isItemString) {
    return (
      <div className='resume-desc-item' key={itemIndex}>
        <i className='icon-angle-double-right item-arrow'></i>
        <span className='item-value'>{descItem}</span>
      </div>
    )
  } else if (Array.isArray(descItem)) {
    return (
      <div className='resume-desc-item' key={itemIndex}>
        <ul className='item-value resume-desc-sub-list'>
          { 
            descItem.map((subItem, index) => (
              <li className='sub-list-item' key={index}>
                <i className='icon-arrow-circle-right item-arrow'></i>
                <span>{subItem}</span>
              </li>
            ))
          }
        </ul>
      </div>
    )
  } else if (descItem?.link) {
    return (
      <div className='resume-desc-item' key={itemIndex}>
        <i className='icon-angle-double-right item-arrow'></i>
        <span className='item-value'>
          {descItem.text}
          <a className='is-link' target='_blank' href={descItem.link}>link</a>
        </span>
      </div>
    )
  }
}

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
      <ResumePageAnimation />

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
                  <div className='resume-content-line is-align-center mb-10'>
                    <i className='icon-location-pin map-icon'></i>
                    <span className='resume-location'>{content.location}</span>
                  </div>

                  <div className='period-and-work-type'>
                    <span className='resume-period-value'>{getPeriodDisplay(content)}</span>
                    <span className='resume-work-type'>{`${content.contractType} , ${content.workType}`}</span>
                  </div>

                  <div className='resume-content-line'>
                    <span className='resume-content-label'>Role</span>
                    <p className='resume-content-value'>{content.roles.join(', ')}</p>
                  </div>

                  <div className='resume-content-line is-column'>
                    <span className='resume-content-label'>Things I've done</span>

                    <div className='resume-desc-container mt-10'>
                      {
                        content.descriptions.map((descItem, index) => getDescContent(descItem, index))
                      }
                    </div>
                  </div>

                  <div className='stacks-container mt-40'>
                    {
                      content.stacks.map((stack, index) => (
                        <span className={cn('stack-tag', index % 2 === 0 && 'no-highlight')} key={index}>{stack}</span>
                      ))
                    }
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
