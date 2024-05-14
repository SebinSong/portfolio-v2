import { useEffect } from 'react'
import './App.scss'

// child components
import Toolbar from '~/components/toolbar/Toolbar.tsx'
import HomePage from '~/pages/home/Home.tsx'

function App () {
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
      <HomePage />
    </>
  )
}

export default App
