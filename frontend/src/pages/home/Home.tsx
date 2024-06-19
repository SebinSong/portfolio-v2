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
        <h3 className='about-me-title'>A bit about me..</h3>

        <div className='my-img-container'>
          <span className='frame-1'></span>
          <span className='frame-2'></span>
          <img src='/images/my-photo.jpg' alt='My bio image' />
        </div>

        <p className='bio-paragraph'>
          I have worked at <a className='is-link has-icon' href='/resume'>several organizations</a> since 2020 either as a web front-end engineer or a full-stack developer.<br/>
          During the early days of my career, creating interactive front-end animations on the browsers was my biggest passion, but it was not until later that I realised what truly makes a great web app is having a powerful server.<br/>
          Becoming <span className='emphasis'>a versatile javascript full-stack developer</span> has been my long term career goal since then.
        </p>
      </section>
    </PageTemplate>
  )
}
