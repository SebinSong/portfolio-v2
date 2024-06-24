import axios from 'axios'
import { saveAs } from 'file-saver'
import { MINS_MILLIS } from '~/view-utils'
import type { Inquiry, Feedback } from './types/common'

const currentBaseURL: string = new URL(window.location.href).origin
const axiosInstance: any = axios.create({
  baseURL: `${currentBaseURL}/api`,
  timeout: MINS_MILLIS,
  validateStatus: (status) => {
    return status >= 200 && status < 300 // default
  }
})

// helper
function parseAxiosErr (err: any): void {
  const { response, message, code } = err
  const data = response?.data?.data
  const newErr: any = new Error(message)
  newErr.code = code
  newErr.data = data || {}
  newErr.status = response?.status || null

  throw newErr
}

// 'api/config' route
export function downloadResume (): any {
  return axiosInstance.get(
    '/config/download?resource=resume',
    { responseType: 'blob' }
  ).then((response: any) => {
    const blob = new Blob([response.data], { type: 'application/pdf' })
    const downloadFilename = 'Resume_SebinSong.pdf'

    // Download the file
    saveAs(blob, downloadFilename)
  }).catch(parseAxiosErr)
}

// 'api/inquiry' route
export function submitInquiry (payload: Inquiry): any {
  return axiosInstance.post('/inquiry', payload)
    .catch(parseAxiosErr)
}

// 'api/feedbacks' route
export function submitFeedback (payload: Feedback): any {
  return axiosInstance.post('/feedbacks', payload)
    .catch(parseAxiosErr)
}

export function getAllFeedbacks (): any {
  return axiosInstance.get('/feedbacks')
    .catch(parseAxiosErr)
}

export function deleteFeedback ({
  id, password
}: { id: string, password: string }) {
  return axiosInstance.put(`/feedbacks/delete/${id}`, { password })
    .catch(parseAxiosErr)
}
