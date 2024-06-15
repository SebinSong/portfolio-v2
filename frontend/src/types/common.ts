export type Theme = 'light' | 'dark'

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