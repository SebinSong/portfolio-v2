export type Theme = 'light' | 'dark'
export type APISubmitStatus = 'idle' | 'submitting' | 'success' | 'error'
export type APILoadStatus = 'idle' | 'loading' | 'loaded' | 'error'

export interface Point {
  x: number,
  y: number
}

export type CanvasArea = {
  width: number,
  height: number
}

export type DropdownItem = {
  id: string,
  name: string
}

// api-related
export interface Inquiry {
  name: string,
  email: string,
  title?: string,
  content: string
}

export interface Feedback {
  name: string,
  password: string,
  content: string
}
