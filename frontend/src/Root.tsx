import { useEffect } from 'react'
import { Outlet } from "react-router-dom"

// child components
import Toolbar from '~/components/toolbar/Toolbar.tsx'

function Root () {
  // methods
  const setVhDevice = (): void => {
    const vh = window.innerHeight * 0.01 as number
    const rootEl = document.documentElement as HTMLElement
    rootEl.style.setProperty('--vh', `${vh}px`)
  }

  const onWindowResize = (): void => {
    setVhDevice()
  }

  // effects
  useEffect(() => {
    // various tasks for app initialisation
    setVhDevice()
    window.addEventListener('resize', onWindowResize)

    return () => {
      window.removeEventListener('resize', onWindowResize)
    }
  }, [])

  return (
    <>
      <Toolbar />
      <Outlet />
    </>
  )
}

export default Root
