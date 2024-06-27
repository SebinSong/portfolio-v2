import { useState, useEffect, useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

// child components
import Checkbox from '~/components/checkbox/Checkbox'

// utils
import { classNames as cn, uniq } from '~/view-utils'

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
const filterIdList: string[] = ['frontend', 'backend', 'tooling'] 
const allTypeFilters: Array<{ name: string, id: string }> = [
  { id: 'frontend', name: 'Frontend' },
  { id: 'backend', name: 'Backend' },
  { id: 'tooling', name: 'Tooling' }
]
const frontendSkills: string[] = [
  'HTML', 'SCSS', 'Design', 'Javascript', 'Typescript', 'React', 'Redux', 'Creative Animation',
  'SVG', 'Vue 2', 'Vue 3', 'GSAP', 'Canvas', 'ThreeJS', 'PWA', 'Pug'
]
const backendSkills: string[] = ['Node', 'Express', 'Hapi', 'MongoDB', 'Google API', 'WebSockets']
const toolingSkills: string[] = ['Vite', 'Webpack', 'Grunt', 'Astro', 'Cypress']
const allSkills: string[] = uniq([...frontendSkills, ...backendSkills, ...toolingSkills])
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
  // local-state
  const [searchParams, setSearchParams] = useSearchParams()
  const [filterOpen, setFilterOpen] = useState(true)
  const [selectedFilters, setSelectedFilters] = useState<string[]>(filterInit || allSkills)
  // const [sortBy, setSortBy] = useState<DropdownItem['id']>(sortInit || 'latest')

  // computed state
  const isAllFilterSelected = useMemo(() => {
    return selectedFilters.length === allSkills.length
  }, [selectedFilters])

  // methods
  const onFilterItemSelect = (item: string) => {
    setSelectedFilters(current => {
      return current.includes(item)
        ? current.filter(v => v !== item)
        : [ ...current, item ]
    })
  }

  const toggleFilterSection = () => {
    setFilterOpen(v => !v)
  }

  const onAllTypeBtnClick = (entryId: string) => {
    const arrMap: { [key: string]: string[] } = {
      'frontend': frontendSkills,
      'backend': backendSkills,
      'tooling': toolingSkills
    }
    switch (entryId) {
      case 'all': {
        setSelectedFilters(isAllFilterSelected ? [] : allSkills)
        break
      }
      case 'deselect': {
        setSelectedFilters([])
        break
      }
      default: {
        const arr: any = arrMap[entryId]

        if (arr) {
          setSelectedFilters(arr)
        }
      }
    }
  }

  // effects
  useEffect(() => {
    const filterQuery = searchParams.get('filter')
    if (filterQuery && filterIdList.includes(filterQuery)) {
      onAllTypeBtnClick(filterQuery)
    }
  }, [])

  useEffect(() => {
    onUpdate && onUpdate({
      filters: selectedFilters
    })
  }, [selectedFilters])

  return (
    <div className={cn('sort-and-filters', classes)}>
      <button className={cn('is-unstyled section-label skill-filter-label', filterOpen && 'is-open')}
        onClick={toggleFilterSection}>
        <span className='btn-text'>Skill filters</span>
        <span className='btn-dir-text'>
          <i className='icon-arrow-circle-down'></i>
        </span>
        <span className='line-thru'></span>
      </button>

      <div className={cn('filter-types', filterOpen && 'is-open')}>
        <div className='all-type-ctas'>
          <button key='all' className={cn('is-unstyled all-type-btn is-select-all', isAllFilterSelected && 'is-active')}
            onClick={() => onAllTypeBtnClick('all')}>
            {isAllFilterSelected
              ? <span><i className='icon-check'></i>All</span>
              : <span><i className='icon-plus'></i>All</span>
            }
          </button>

          {
            allTypeFilters.map(
              entry => <button key={entry.id} className='is-unstyled all-type-btn'
                onClick={() => onAllTypeBtnClick(entry.id)}>{entry.name}</button>
            )
          }

          <button key='de-all' className='is-unstyled all-type-btn is-deselect-all'
            onClick={() => onAllTypeBtnClick('deselect')}>
            <i className='icon-close is-prefix'></i>
            <span>Deselect all</span>
          </button>
        </div>
  
        <div className='list-block'>
          <span className='list-block-label is-title-style'>- Frontend</span>

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
          <span className='list-block-label is-title-style'>- Backend</span>

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
          <span className='list-block-label is-title-style'>- Tooling</span>

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
