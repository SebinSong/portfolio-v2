import { useNavigate } from 'react-router-dom'

// child components
import PageTemplate from '../PageTemplate'
import CursorAnimation from '~/components/home-cursor-animation/HomeCursorAnimation.tsx'
import ScrollIndicator from '~/components/scroll-indicator/ScrollIndicator.tsx'
import './Home.scss'

export default function Home () {
  const navigate = useNavigate()

  const navigateTo = (filter: 'frontend' | 'backend') => {
    navigate(`/skills?filter=${filter}`)
  }

  return (
    <PageTemplate classes='page-home'>
      <CursorAnimation />

      <section className='home-main-section'>
        <div className='intro-block'>
          <span className='iam'><span className='text'>I'm</span></span>
          <h1 className='my-name'>Sebin Song</h1>
          <p className='intro-para'>A <span className='to-skill-page' role='button' tabIndex={0} onClick={() => navigateTo('frontend')}>frontend</span> developer with the <span className='to-skill-page' role='button' tabIndex={0} onClick={() => navigateTo('backend')}>backend</span> capability.</p>
        </div>

        <ScrollIndicator classes='home-scroll-indicator' />
      </section>

      <section className='home-introduce-myself'>

      </section>
    </PageTemplate>
  )
}
