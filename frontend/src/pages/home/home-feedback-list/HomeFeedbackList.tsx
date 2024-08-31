import { useState, useEffect, memo } from 'react'

// components
import FeedbackBanner from "~/components/feedback-banner/FeedbackBanner"
import LoaderAnimation from '~/components/loader-animation/LoaderAnimation'
import FeedbackListItem from './FeedbackListItem'

// utils
import { getAllFeedbacks } from '~/apis'

// types
import type { APILoadStatus } from '~/types/common'

import './HomeFeedbackList.scss'

function HomeFeedbackList () {
  const [feedbacks, setFeedbacks] = useState<any[] | null>(null)
  const [loadStatus, setLoadStatus] = useState<APILoadStatus>('idle')

  // methods
  const loadFeedbacks = async () => {
    setLoadStatus('loading')

    try {
      const res = await getAllFeedbacks()
      setLoadStatus('loaded')

      setFeedbacks(
        Array.isArray(res?.data) && res.data.length
          ? res.data
          : null
      )
    } catch (err) {
      console.error('HomeFeedbackList.tsx caught: ', err)
      setLoadStatus('error')
    }
  }

  // effects
  useEffect(() => {
    loadFeedbacks()
  }, [])
  return (
    <div className='home-feedback-list-container'>
      {
        loadStatus === 'error' &&
        <FeedbackBanner classes='mb-30' show={true} scrollOnDisplay={false} type='error'
          message='Failed to load feedback data. Please refresh the page.' />
      }
      {
        loadStatus === 'loading' &&
        <div className='home-feedback-loader-container'>
          <LoaderAnimation show={true} />
          <p className='loading-text'>Loading feedback data ...</p>
        </div>
      }

      {
        (loadStatus === 'loaded' && Boolean(feedbacks?.length)) &&
        <ul className='feedbacks-list' data-test='home-feedback-list'>
          {
            feedbacks!.map(
              (entry: any) => <FeedbackListItem key={entry._id} data={entry} onDeleteSuccess={loadFeedbacks}/>
            )
          }
        </ul>
      }
    </div>
  )
}

export default memo(HomeFeedbackList)