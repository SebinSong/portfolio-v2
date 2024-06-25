import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

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
  { id: 'skills', name: 'Skills', routeTo: '/skills' },
  { id: 'contact', name: 'Contact', routeTo: '/contact' }
]

function Toolbar () {
  const navigate = useNavigate()
  const location = useLocation()

  // local-state
  const [hasBg, setHasBg] = useState<boolean>(false)

  // methods
  const onMenuClick = (item: ToolbarMenu) => {
    if (item.routeTo) {
      navigate(item.routeTo)
    }
  }
  const scrollHandler = (): void => {
    const bodyEl = document.body as HTMLBodyElement

    if (bodyEl.scrollHeight && bodyEl.scrollTop > 20) {
      setHasBg(true)
    } else {
      setHasBg(false)
    }
  }

  // effects
  useEffect(() => {
    scrollHandler()
    document.body.addEventListener('scroll', scrollHandler)

    return () => {
      document.body.removeEventListener('scroll', scrollHandler)
    }
  }, [])

  useEffect(() => {
    document.body.scrollTop = 0
  }, [location])

  return (
    <div className={cn('l-toolbar toolbar-container', hasBg && 'has-bg')}>
      <div className='toolbar-nav-list'>
        {
          toolbarMenuList.map(entry => (
            <button className={cn('toolbar-nav-btn', { 'is-active': location.pathname === entry.routeTo })}
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
