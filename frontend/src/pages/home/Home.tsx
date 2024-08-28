import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// child components
import PageTemplate from '../PageTemplate'
import CursorAnimation from '~/components/home-cursor-animation/HomeCursorAnimation.tsx'
import ScrollIndicator from '~/components/scroll-indicator/ScrollIndicator.tsx'
import MuayThaiImage from './MuayThaiImage'
import ScrollToTopButton from '~/components/scroll-to-top-button/ScrollToTopButton'
import HomeTestimonials from './home-testimonials/HomeTestimonials'
import HomeFeedbackForm from './home-feedbacks/HomeFeedbackForm'
import HomeFeedbackList from './home-feedback-list/HomeFeedbackList'

// utils
import { genId } from '~/view-utils'

import './Home.scss'

export default function Home () {
  const navigate = useNavigate()

  // local-state
  const [childKey, setChildKey] = useState(genId())

  // methods
  const navigateTo = (filter: 'frontend' | 'backend') => {
    navigate(`/skills?filter=${filter}`)
  }
  const onFeedbackSubmit = () => {
    setChildKey(genId())
  }

  return (
    <PageTemplate classes='page-home'>
      <CursorAnimation />

      <section className='home-main-section'>
        <div className='intro-block'>
          <span className='iam'><span className='text'>I'm</span></span>
          <h1 className='my-name' data-test='home-my-name'>Sebin Song</h1>
          <p className='intro-para'>A <span className='to-skill-page' role='button' tabIndex={0} onClick={() => navigateTo('frontend')}>frontend</span> developer with the <span className='to-skill-page' role='button' tabIndex={0} onClick={() => navigateTo('backend')}>backend</span> capability.</p>
        </div>

        <ScrollIndicator classes='home-scroll-indicator' />
      </section>

      <section className='home-introduce-myself'>
        <div className='page-title-container'>
          <h1 className='page-title'>
            <span className='text'>A little about me..</span>
            <span className='circle-deco'></span>
          </h1>
        </div>

        <div className='my-img-container'>
          <span className='frame-1'></span>
          <span className='frame-2'></span>
          <img src='/images/my-photo.jpg' alt='My bio image' />
        </div>

        <p className='bio-paragraph mb-80'>
          I have worked at <a className='is-link has-icon' href='/resume'>a few organizations</a> since 2020 either as a web front-end engineer or a full-stack developer.<br/>
          During the early days of my career, creating interactive front-end animations (check out <a className='is-link has-icon' target='_blank' href='https://codepen.io/collection/AVWNZq'>here</a>) on the browsers was my biggest passion, but it was not until later that I realised what truly makes a great web app is having a powerful server.<br/>
          Becoming <span className='emphasis'>a versatile javascript full-stack developer</span> has been my main career focus since then, which means I'm always studying <span className='emphasis'>Node.js</span> when I don't work.
        </p>

        <div className='page-title-container'>
          <h1 className='page-title'>
            <span className='text'>Outside the work..</span>
            <span className='circle-deco'></span>
          </h1>
        </div>

        <div className='muay-thai-img-container'>
          <MuayThaiImage classes='muay-thai-svg' />
        </div>

        <p className='bio-paragraph mb-80'>
          I do <span className='emphasis'>martial art trainning</span> on a regular basis. I go to <span className='emphasis'>Muay thai kickboxing</span> gym 3 times a week on average.
          To me, learning to fight means more than just growing a self-defense skill. It gives me an important lesson about <span className='emphasis'>Life</span>.<br/>
          Beating an opponent during a fight requires contantly stepping into the danger zone where the opponent keeps hurting me and can possibly knock me out. It all starts from embracing the possibility of that worst outcome.<br/>
          At the end of the day, what it teaches me is that, achieving something valuable will always involve <span className='emphasis'>enduring pain</span> and <span className='emphasis'>overcoming the fear</span>.
        </p>

        <div className='page-title-container mb-40'>
          <h1 className='page-title'>
            <span className='text'>Testimonials</span>
            <span className='circle-deco'></span>
          </h1>
        </div>

        <p className='bio-paragraph mb-50'>
          Have a read of some words from the folks who have worked (or are still working) with me about what their experiences have been like!
        </p>

        <HomeTestimonials classes='mb-80' />

        <div className='page-title-container'>
          <h1 className='page-title'>
            <span className='text'>Feedbacks on this website</span>
            <span className='circle-deco'></span>
          </h1>
        </div>

        <p className='bio-paragraph mb-50'>
          This website is a web-app built with <span className='has-text-bold'>ReactJS</span> and a bit of <span className='has-text-bold'>ExpressJS / MongoDB</span>.
          See feedbacks from others and also share yours down below.
        </p>

        <div className='home-feedback-section'>
          <div className='home-feedback-list-container'>
            <HomeFeedbackList key={childKey} />
          </div>

          <HomeFeedbackForm onFormSubmit={onFeedbackSubmit} />
        </div>
      </section>

      <ScrollToTopButton classes='home-scroll-top-btn' />
    </PageTemplate>
  )
}
