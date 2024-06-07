// child components
import PageTemplate from "../PageTemplate"
import CustomCursor from '~/components/custom-cursor/CustomCursor'
import ProjectCard from "./project-card/ProjectCard"
import SortAndFilters from './sort-and-filters/SortAndFilters'

// utils 
import projectData from '~/view-data/project-data'

import './Skills.scss'

export default function Skills () {

  // methods
  const onFilterOrSortUpdate = (updates: any) => {
    console.log('!@# filter/sort updates: ', updates)
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

        <SortAndFilters classes='mb-50' onUpdate={onFilterOrSortUpdate} />

        <div className='skills-and-demos-container'>
          <ul className='projects-grid'>
            {
              projectData.map(entry => <ProjectCard key={entry.id} data={entry} />)
            }
          </ul>
        </div>
      </div>
    </PageTemplate>
  )
}
