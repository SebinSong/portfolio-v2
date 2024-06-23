
import { useState, FormEvent } from 'react'
import { useImmer } from "use-immer"

// components
import FormErrorMessage from "~/components/FormErrorMessage"
import LoaderAnimation from '~/components/loader-animation/LoaderAnimation'

// utils
import useValidation from '~/hooks/useValidation'
import { classNames as cn } from '~/view-utils'
import { submitFeedback } from '~/apis'

// types
import type { Feedback, APISubmitStatus } from '~/types/common'
type FormKeyUnion = 'name' | 'password' | 'content'

import './HomeFeedbackForm.scss'

function HomeFeedbackForm ({
  classes = ''
}: { classes?: string }) {
  // local-state
  const [submitStatus, setSubmitStatus] = useState<APISubmitStatus>('idle')
  const [form, updateForm] = useImmer<Feedback>({
    name: '',
    password: '',
    content: ''
  })

  // computed-state
  const isSubmitting = submitStatus === 'submitting'

  // validations
  const {
    isErrorActive,
    clearFormError,
    validateAll,
    formError
  } = useValidation(form, [
    {
      key: 'name',
      check: (v: string) => v.length >= 2,
      msg: 'Complete this field with minimum 2 characters.'
    },
    {
      key: 'password',
      check: (v: string) => v.length >= 4,
      msg: 'Complete this field with minimum 4 characters.'
    },
    {
      key: 'content',
      check: (v: string) => v.length >= 15,
      msg: 'Complete this field with minimum 15 characters.'
    }
  ])

  // methods
  const submitHandler = async (e: FormEvent) => {
    e.preventDefault()

    // init the status first.
    setSubmitStatus('idle')

    if (validateAll()) {
      setSubmitStatus('submitting')

      try {
        await submitFeedback(form)
        setSubmitStatus('success')
      } catch (err) {
        setSubmitStatus('error')
      }
    }

    // Form field valiations
    // for (const key of ['name', 'password', 'content']) {
    //   const val = form[key]
    // }
  }

  const updateFactory = (key: FormKeyUnion) => {
    return (e: any) => {
      const val = e.target.value

      updateForm(draft => {
        draft[key] = val
      })

      if (isErrorActive(key)) {
        clearFormError()
      }
    }
  }

  return (
    <form className={cn('home-feedback-form', classes)}
      onSubmit={submitHandler}>
      <div className='name-and-pw-container'>
        <div className='form-field'>
          <label className='label-common'>
            Name:
            <span className='required'>(Required)</span>
          </label>
          <input className={cn('input', isErrorActive('name') && 'is-error')}
            type='text' placeholder='Your name' autoComplete='off'
            onInput={updateFactory('name')}
            data-vkey='name' />

          <FormErrorMessage formKey='name' formError={formError} />
        </div>

        <div className='form-field password-field'>
          <label className='label-common'>
            Password:
            <span className='required'>(Required)</span>
          </label>
          <input className={cn('input', isErrorActive('password') && 'is-error')}
            type='text' placeholder='Your password'
            autoComplete='off'
            onInput={updateFactory('password')}
            data-vkey='password' />

          {
            isErrorActive('password')
              ? <FormErrorMessage formKey='password' formError={formError} />
              : <p className='helper'>You will need this to update later</p>
          }

        </div>
      </div>

      <div className='form-field'>
        <label className='label-common'>
          Feeback:
          <span className='required'>(Required)</span>
        </label>
        <textarea className={cn('textarea', isErrorActive('content') && 'is-error')}
          placeholder='Enter your feedback'
          onInput={updateFactory('content')} data-vkey='content' />
        {
          !isErrorActive('content') &&
          <p className='helper'>Enter minimum 15 characters.</p>
        }

        <FormErrorMessage formKey='content' formError={formError} />
      </div>

      <div className='button-container'>
        <button className='is-custom-border send-btn' type='submit' disabled={isSubmitting}>
          <LoaderAnimation show={isSubmitting} />
          <span className='text'>
            <i className='icon-arrow-circle-right is-prefix'></i>
            Submit
          </span>
        </button>
      </div>
    </form>
  )
}

export default HomeFeedbackForm
