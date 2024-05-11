// child components
import CursorAnimation from '~/components/home-cursor-animation/HomeCursorAnimation.tsx'

import './Home.scss'

export default function Home () {
  return (
    <div className='l-page page-home'>
      <CursorAnimation />
      Home page content
    </div>
  )
}
