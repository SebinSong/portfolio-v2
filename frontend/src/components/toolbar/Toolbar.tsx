import React, { useState } from 'react'

// utils
import { classNames as cn } from '~/view-utils'

import './Toolbar.scss'

const toolbarMenuList = [
  { id: 'home', name: 'Home' },
  { id: 'resume', name: 'Resume' },
  { id: 'skills', name: 'Skills' },
  { id: 'contact', name: 'Contact' }
]

function Toolbar () {
  // local-state
  const [selectedId, setSelectedId] = useState('home')

  // methods
  const onMenuClick = (id) => {
    console.log('clicked item id - : ', id)
    setSelectedId(id)
  }

  return (
    <div className='l-toolbar toolbar-container'>
      <div className='toolbar-nav-list'>
        {
          toolbarMenuList.map(entry => (
            <button className={cn('toolbar-nav-btn', { 'is-active': selectedId === entry.id })}
              key={entry.id}
              onClick={() => onMenuClick(entry.id)}>
              <span className='text'>{ entry.name }</span>
            </button>
          ))
        }
      </div>
    </div>
  )
}

export default React.memo(Toolbar)
