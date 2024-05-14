import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

interface ToolbarMenu {
  id: string,
  name: string,
  routeTo?: string
}

// utils
import { classNames as cn } from '~/view-utils'

import './Toolbar.scss'

const toolbarMenuList: Array<ToolbarMenu> = [
  { id: 'home', name: 'Home', routeTo: '/' },
  { id: 'resume', name: 'Resume', routeTo: '/resume' },
  { id: 'skills', name: 'Skills' },
  { id: 'contact', name: 'Contact' }
]

function Toolbar () {
  const navigate = useNavigate()

  // local-state
  const [selectedId, setSelectedId] = useState('home')

  // methods
  const onMenuClick = (item: ToolbarMenu) => {
    setSelectedId(item.id)

    if (item.routeTo) {
      navigate(item.routeTo)
    }
  }

  return (
    <div className='l-toolbar toolbar-container'>
      <div className='toolbar-nav-list'>
        {
          toolbarMenuList.map(entry => (
            <button className={cn('toolbar-nav-btn', { 'is-active': selectedId === entry.id })}
              key={entry.id}
              onClick={() => onMenuClick(entry)}>
              <span className='text'>{ entry.name }</span>
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(Toolbar)
