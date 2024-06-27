import React, { useState, useEffect } from 'react'
// utils
import { classNames as cn } from '~/view-utils'
import './TabMenu.scss'

type TabMenuEntry = {
  id: string,
  name: string,
  index: string
}

interface TabMenuProps {
  classes?: string,
  list: Array<TabMenuEntry>,
  initId?: string,
  showIndex?: boolean,
  onSelect?: (selectedId: string) => any
}


function TabMenu ({
  classes = '',
  list,
  initId,
  showIndex = false,
  onSelect
}: TabMenuProps) {
  // local-state
  const [selectedId, setSelectedId] = useState<TabMenuEntry['id']>('')

  // computed state
  const styleObj = { '--menu-number': list.length } as React.CSSProperties

  // methods
  const selectAction = (id: TabMenuEntry['id']) => {
    setSelectedId(id)
    onSelect && onSelect(id)
  }
  const clickHandler = (e: React.MouseEvent<HTMLDivElement>, entryId: TabMenuEntry['id']) => {
    e.stopPropagation()
    selectAction(entryId)
  }
  const keyupHandler = (e: React.KeyboardEvent<HTMLDivElement>, entryId: TabMenuEntry['id']) => {
    if (['Enter', 'Space'].includes(e.code)) {
      selectAction(entryId)
    }
  }

  // effects
  useEffect(() => {
    if(initId) {
      selectAction(initId)
    }
  }, [])

  return (
    <div className={cn('tab-menu-container', classes)}
      style={styleObj}>
      {
        list.map((entry) => (
          <div className={cn('tab-menu-item is-title-style', selectedId === entry.id && 'is-active')}
            tabIndex={0}
            key={entry.id}
            onClick={(e) => clickHandler(e, entry.id)}
            onKeyUp={(e) => keyupHandler(e, entry.id)}>
            {showIndex && <span className='menu-index'>{`${entry.index}.`}</span>}
            {entry.name}
          </div>
        ))
      }
    </div>
  )
}

export default TabMenu
