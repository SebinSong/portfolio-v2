import { useState, useMemo } from "react"

// child components
import PageTemplate from "../PageTemplate"
import CustomCursor from '~/components/custom-cursor/CustomCursor'
import ProjectCard from "./project-card/ProjectCard"
import SortAndFilters from './sort-and-filters/SortAndFilters'

// utils 
import projectData from '~/view-data/project-data'

// types
import type { ProjectItem } from '~/view-data/project-data'

import './Skills.scss'

// helpers
const totalCount = projectData.length

export default function Skills () {
  // local-state
  const [selectedSkills, setSelectedSkills] = useState<string[]>([])

  // computed state
  const projectToDisplay: ProjectItem[] = useMemo(() => {
    const filterdBySkills = projectData.filter(project => {
      return project.skillset.some(skill => selectedSkills.includes(skill))
    })
    return filterdBySkills
  }, [selectedSkills])

  // methods
  const onFilterOrSortUpdate = (updates: any) => {
    const { filters } = updates
    setSelectedSkills(filters)
  }

  return (
    <PageTemplate classes='page-skills'>
      <CustomCursor />

      <div className='page-content-wrapper'>
        <div className='page-title-container'>
          <h1 className='page-title'>
            <span className='text'>Skills & Demos</span>
            <span className='circle-deco'></span>
          </h1>

          <p className='page-desc'>
            See what skills I have as a web engineer and check out the live websites or demos.
          </p>
        </div>

        <SortAndFilters classes='mb-30' onUpdate={onFilterOrSortUpdate} />

        <div className='display-item-count'>
          <span className='has-text-bold'>
            {projectToDisplay.length} items
          </span>
          <span className='is-of'>of</span>
          <span className='has-text-bold'>{totalCount}.</span>
        </div>
  
        <div className='skills-and-demos-container'>
          {
            projectToDisplay.length > 0
              ? <ul className='projects-grid'>
                  {
                    projectToDisplay.map(entry => <ProjectCard key={entry.id} data={entry} />)
                  }
                </ul>
              : <p className='no-items-to-display mt-20'>
                  <i className='icon-trash'></i>
                  No items to display.
                </p>
          }
        </div>
      </div>
    </PageTemplate>
  )
}
