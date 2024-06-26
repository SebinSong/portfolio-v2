import { memo, ReactNode } from 'react'
import type { ProjectItem } from '~/view-data/project-data'

// utils
import { classNames as cn, stringToKebabCase } from '~/view-utils'

import './ProjectCard.scss'

interface ProjectCardProps {
  classes?: string,
  search?: string,
  data: ProjectItem
}

// helpers
const getProjectLinkIcon = (linkEntry: [string, string]) => {
  const [linkType, url] = linkEntry
  const isTypeApp = linkType === 'app'
  return (
    <a key={linkType} className='project-link-icon'
      href={url} target='_blank'
      onClick={e => e.stopPropagation()}>
      <span className='link-text'>{isTypeApp ? 'Demo' : 'Github'}</span>
      <i className='icon-share-alt'></i>
    </a>
  )
}
const descToJSX = (desc: string): ReactNode => {
  return !desc.includes('<br>')
    ? desc
    : desc.split(/\<br\>/g).map((segment, i) => <p key={i}>{segment}</p>)
}

function ProjectCard ({
  classes,
  data
}: ProjectCardProps) {
  // computed state/props
  const {
    projectType, isIndividuaWork, years, madeAt = '',
    description, skillset, links = {}
  } = data
  const projectLinks = Object.entries(links)
  const isYearsNumber = typeof years === 'number'

  // methods
  const onCardClick = () => {
    const urls = Object.values(links)

    if (urls.length) {
      window.open(urls[0])
    }
  }

  return (
    <li tabIndex={0} className={cn('project-card', classes)}
      onClick={onCardClick}>
      <div className='icons-and-links mb-30'>
        <i className='icon-folder card-icon'></i>

        {
          (projectLinks.length > 0) &&
          <span className='project-links-container'>
            { projectLinks.map(getProjectLinkIcon) }
          </span>
        }
      </div>

      <div className='work-types-container'>
        <span className={cn('work-type-tag', `is-${projectType}`)}>
          {projectType === 'company-work' ? 'At company' : 'Personal'}
        </span>

        <span className={cn('is-collab', isIndividuaWork ? 'no' : 'yes')}>
          { isIndividuaWork ? 'Independent work' : 'Collaborated'}
        </span>
      </div>

      <h3 className='project-name'>{data.name}</h3>

      <div className={cn('project-details', isYearsNumber && 'no-from-to')}>
        <div className='project-details-item'>
          <label>{isYearsNumber ? 'In:' : 'FromTo:'}</label>
          <span className='details-value'>
            {isYearsNumber ? years : `${years.from} - ${years.to}`}
          </span>
        </div>

        {
          Boolean(madeAt) &&
          <div className='project-details-item'>
            <label>At:</label>
            <span className='details-value'>{madeAt}</span>
          </div>
        }
      </div>

      <div className='project-desc'>{descToJSX(description)}</div>

      <div className='project-skillset'>
        {
          skillset.map(
            skill => <span className='skill-item' key={stringToKebabCase(skill)}>{skill}</span>
          )
        }
      </div>
    </li>
  )
}

export default memo(ProjectCard)
