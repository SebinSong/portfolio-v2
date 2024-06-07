import { useState, useEffect } from 'react'

// child components
import Checkbox from '~/components/checkbox/Checkbox'

// utils
import { classNames as cn } from '~/view-utils'

// types
import type { DropdownItem } from '~/types/common'

import './SortAndFilters.scss'

interface Props {
  classes?: string,
  filterInit?: Array<string>,
  sortInit?: string,
  onUpdate?: (a: any) => void
}

// helpers
const allSkillItems: Array<string> = [
  'HTML', 'SCSS', 'Design', 'Javascript', 'Typescript', 'React', 'Redux',
  'MongoDB', 'Node', 'Express', 'Vite', 'Google API', 'Creative Animation', 'SVG',
  'Vue 2', 'Vue 3', 'GSAP', 'Canvas', 'ThreeJS', 'Astro', 'Cypress',
  'Grunt', 'PWA', 'WebSockets', 'Hapi', 'Webpack'
]
const frontendSkills: Array<string> = [
  'HTML', 'SCSS', 'Design', 'Javascript', 'Typescript', 'React', 'Redux',
  'Creative Animation', 'SVG', 'Vue 2', 'Vue 3', 'GSAP', 'Canvas', 'ThreeJS', 'PWA'
]
const backendSkills: Array<string> = ['Node', 'Express', 'Hapi', 'MongoDB', 'Google API', 'WebSockets']
const toolingSkills: Array<string> = ['Vite', 'Webpack', 'Grunt', 'Astro', 'Cypress']

const sortItems: Array<DropdownItem> = [
  { id: 'oldest', name: 'Oldest' },
  { id: 'latest', name: 'Most recent' }
]

export default function SortAndFilters ({
  classes,
  filterInit,
  sortInit,
  onUpdate
}: Props) {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(filterInit || [])
  // const [sortBy, setSortBy] = useState<DropdownItem['id']>(sortInit || 'latest')

  // methods
  const onFilterItemSelect = (item: string) => {
    setSelectedFilters(current => {
      return current.includes(item)
        ? current.filter(v => v !== item)
        : [ ...current, item ]
    })
  }

  // effects
  useEffect(() => {
    onUpdate && onUpdate({
      filters: selectedFilters
    })
  }, [selectedFilters])

  return (
    <div className={cn('sort-and-filters', classes)}>
      <span className='section-label'>Skill filters :</span>
      <div className='filter-types'>
        <div className='list-block'>
          <span className='list-block-label'>- Frontend</span>

          <div className='filter-list'>
            {
              frontendSkills.map(
                (skill: string) => <Checkbox key={skill} label={skill}
                  classes={cn('filter-item', selectedFilters.includes(skill) && 'is-selected')}
                  checked={selectedFilters.includes(skill)}
                  onChange={() => onFilterItemSelect(skill)} />
              )
            }
          </div>
        </div>

        <div className='list-block'>
          <span className='list-block-label'>- Backend</span>

          <div className='filter-list'>
            {
              backendSkills.map(
                (skill: string) => <Checkbox key={skill} label={skill}
                  classes={cn('filter-item', selectedFilters.includes(skill) && 'is-selected')}
                  checked={selectedFilters.includes(skill)}
                  onChange={() => onFilterItemSelect(skill)} />
              )
            }
          </div>
        </div>

        <div className='list-block'>
          <span className='list-block-label'>- Tooling</span>

          <div className='filter-list'>
            {
              toolingSkills.map(
                (skill: string) => <Checkbox key={skill} label={skill}
                  classes={cn('filter-item', selectedFilters.includes(skill) && 'is-selected')}
                  checked={selectedFilters.includes(skill)}
                  onChange={() => onFilterItemSelect(skill)} />
              )
            }
          </div>
        </div>
      </div>
    </div>
  )
}
