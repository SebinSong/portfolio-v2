// child components
import PageTemplate from '../PageTemplate'
import CursorAnimation from '~/components/home-cursor-animation/HomeCursorAnimation.tsx'
import ScrollIndicator from '~/components/scroll-indicator/ScrollIndicator.tsx'
import './Home.scss'

export default function Home () {
  return (
    <PageTemplate classes='page-home'>
      <CursorAnimation />

      <section className='home-main-section'>
        <div className='intro-block'>
          <span className='iam'><span className='text'>I'm</span></span>
          <h1 className='my-name'>Sebin Song</h1>
          <p className='intro-para'>A <span className='emphasis'>frontend</span> developer with the <span className='emphasis'>backend</span> capability.</p>
        </div>

        <ScrollIndicator classes='home-scroll-indicator' />
      </section>

      <section className='home-introduce-myself'>

      </section>
    </PageTemplate>
  )
}
