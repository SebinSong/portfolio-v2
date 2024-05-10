'use strict'

import { detect } from 'detect-browser'
const browser: any = detect()

export const isTouchDevice = browser.os === "Android OS" || browser.os === "iOS"
