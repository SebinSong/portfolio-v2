import { useEffect } from 'react'
import './App.scss'

// child components
import Toolbar from '~/components/toolbar/Toolbar.jsx'
import HomePage from '~/pages/home/Home.jsx'

function App() {
  // methods
  const setVhDevice = () => {
    const vh = window.innerHeight * 0.01 as number
    const rootEl = document.documentElement as HTMLElement
    rootEl.style.setProperty('--vh', `${vh}px`)
  }

  // effects
  useEffect(() => {
    // various tasks for app initialisation
    window.addEventListener('resize', () => {
      setVhDevice()
    })
  }, [])

  return (
    <>
      <Toolbar />
      <HomePage />
    </>
  )
}

export default App
