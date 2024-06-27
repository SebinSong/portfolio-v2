import { memo, useRef, useState } from 'react'
// utils
import { humanDate } from '~/view-utils'
import { deleteFeedback } from '~/apis'

// components
import LoaderAnimation from '~/components/loader-animation/LoaderAnimation'

// helpers
const errorTexts: { [index: string] : string } = {
  'pw': 'Wrong password',
  'enter': 'Enter password',
  'api': 'Failed to delete. refresh page'
}

type Props = {
  data: any,
  onDeleteSuccess?: () => void
}

function FeedbackListItem ({
  data,
  onDeleteSuccess = () => {}
}: Props) {
  // local-state
  const [showInput, setShowInput] = useState<boolean>(false)
  const [errMsg, setErrMsg] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const inputEl = useRef<HTMLInputElement | null>(null)

  const { name, updatedAt, content, _id } = (data || {})

  // methods
  const onDeleteBtnClick = async () => {
    if (!showInput) {
      setShowInput(true)

      setTimeout(() => {
        inputEl.current?.focus() 
      }, 100)
    } else {
      if (!password.length) {
        return setErrMsg(errorTexts.enter)
      }

      setIsSubmitting(true)
      setErrMsg('')
      try {
        await deleteFeedback({ id: _id, password })

        setIsSubmitting(false)
        onDeleteSuccess &&
          onDeleteSuccess()
      } catch (err: any) {
        const errData = err?.data
        
        setErrMsg(
          errData && errData.errType === 'invalid-field' && errData.key === 'password'
            ? errorTexts.pw
            : errorTexts.api
        )
        setIsSubmitting(false)
      }
    }
  }
  const onFoldClick = () => {
    setShowInput(false)
    setPassword('')
  }
  const onPasswordInput = (e:any) => {
    const val = e.target.value
    setPassword(val)

    if (errMsg) { setErrMsg('') }
  }

  return (
    <li className='feedback-list-item'>
      <span className='feedback-item-icon-wrapper'>
        <i className='icon-comment-alt'></i>
      </span>

      <div className='feedback-details'>
        <div className='metadata'>
          <span className='name-val is-title-style'>{name}</span>
          <span className='updated-at'>{humanDate(updatedAt)}</span>
        </div>

        <div className='content-and-cta-container'>
          <div className='feedback-content'>
            {content}
          </div>

          <div className='cta-container'>
            <div className='cta-upper'>
              {
                showInput &&
                <span className='pw-input-wrapper'>
                  <label>password:</label>
                  <input className='input pw-input' ref={inputEl}
                    type='text' value={password}
                    onInput={onPasswordInput} />
                </span>
              }
              
              <button className='is-unstyled feedback-cta-btn'
                onClick={onDeleteBtnClick} disabled={isSubmitting}>
                <LoaderAnimation classes='cta-loader' show={isSubmitting} />
                <span>{ showInput ? 'Confirm' : 'Delete' }</span>
              </button>

              {
                showInput &&
                <button className='is-unstyled feedback-cta-btn fold-btn'
                  onClick={onFoldClick}>Fold</button>
              }
            </div>

            {
              Boolean(errMsg) &&
              <p className='wrong-pw-msg'>{errMsg}</p>
            }
          </div>
        </div>
      </div>
    </li>
  )
}

export default memo(FeedbackListItem)
