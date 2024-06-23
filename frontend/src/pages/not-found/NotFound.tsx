import { useRouteError, useNavigate } from "react-router-dom"
import SkillsPageAnimation from "../skills/skills-page-animation/SkillsPageAnimation"

import './NotFound.scss'

export default function NotFoundPage () {
  const navigate = useNavigate()
  const routeError: any = useRouteError()
  const isCode404 = routeError?.status === 404
  const headerText = isCode404
    ? '404 Not Found'
    : 'Server error'
  const descText = isCode404
    ? "Could not find the page or resource you tried."
    : "Something went wrong in the app."

  // methods
  const onHomeBtnClick = () => {
    navigate('/')
  }

  return (
    <div className='not-found-page page-common'>
      <SkillsPageAnimation />

      <div className='not-found-content-wrapper'>
        <div className='page-title-container'>
          <h1 className='page-title'>
            <span className='text'>{headerText}</span>
            <span className='circle-deco'></span>
          </h1>
        </div>

        <p className='error-desc mb-40'>{descText}</p>

        <button className='is-custom-border mb-30'
          type='button'
          onClick={onHomeBtnClick}>
          <span className='text'>
            <i className='icon-home is-prefix'></i>
            To home
          </span>
        </button>
      </div>
    </div>
  )
}
