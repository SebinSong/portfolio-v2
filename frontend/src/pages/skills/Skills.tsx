// child components
import PageTemplate from "../PageTemplate"
import CustomCursor from '~/components/custom-cursor/CustomCursor'
import ProjectCard from "./project-card/ProjectCard"

// utils 
import projectData from '~/view-data/project-data'

import './Skills.scss'

export default function Skills () {
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
            See what skills I have as a web engineer and check out the websites or demos that are the proofs.
          </p>
        </div>

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
