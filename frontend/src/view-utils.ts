'use strict'

import { detect } from 'detect-browser'
const browser: any = detect()

export const isTouchDevice = browser.os === "Android OS" || browser.os === "iOS"

export function genArrayFromNumber (num: number, startValue: number = 0): number[] {
  return Array(num).fill(0).map((_,i) => startValue + i)
}
export function linearScale ([d1, d2]: number[], [r1, r2]: number[]): Function {
  // generate a function that takes a value between d1 and d2 and then
  // returns a linearly-scaled output whose min and max values are r1 and r2 respectively.
  const [dSpan, rSpan] = [d2 - d1, r2 - r1]
  return (value: number): number => {
    if (value <= d1) {
      return r1
    } else if (value >= d2) {
      return r2
    } else {
      const percent = (value - d1) / dSpan
      return r1 + rSpan * percent
    }
  }
}

export function classNames (...args: any[]): string {
  // simplified version of 'classnames' npm package (https://www.npmjs.com/package/classnames) 
  const isObjectLiteral = (val: any) => {
    return typeof val === 'object' && val !== null && val.constructor === Object
  }

  return args.filter(Boolean)
    .map(arg => {
      if (typeof arg === 'string') { return arg }
      else if (isObjectLiteral(arg)) {
        const validKeyArr = []

        for (const [key, val] of Object.entries(arg)) {
          if (val) { validKeyArr.push(key) }
        }
        return validKeyArr.join(' ')
      }
    }).join(' ')
}
