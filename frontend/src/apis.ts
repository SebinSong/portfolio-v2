import axios from 'axios'
import { saveAs } from 'file-saver'
import { MINS_MILLIS } from '~/view-utils'
import type { Inquiry } from './types/common'

const currentBaseURL: string = new URL(window.location.href).origin
const axiosInstance: any = axios.create({
  baseURL: `${currentBaseURL}/api`,
  timeout: MINS_MILLIS,
  validateStatus: (status) => {
    return status >= 200 && status < 300 // default
  }
})

export function downloadResume (): any {
  return axiosInstance.get(
    '/config/download?resource=resume',
    { responseType: 'blob' }
  ).then((response: any) => {
    const blob = new Blob([response.data], { type: 'application/pdf' })
    const downloadFilename = 'Resume_SebinSong.pdf'

    // Download the file
    saveAs(blob, downloadFilename)
  })
}

export function submitInquiry (payload: Inquiry): any {
  return axiosInstance.post('/inquiry', payload)
}
